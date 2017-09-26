var express = require('express');
var router = express.Router();
var request = require('superagent')
var utils = require('../utils')
var Feed = require('../models/Feed')
var MongoClient = require('mongodb').MongoClient;
var cron = require('node-cron');

cron.schedule('0 * * * *', function(){
  console.log('Query running')
  Tester()
});


function Tester() {

  var url = "https://graph.facebook.com/v2.9/281225408646521/feed?fields=message,from,name,permalink_url,type,created_time,picture,attachments&limit=50&access_token=124675141414556%7Cf0f7f3bc6fa886e2a83f5d2244a467a9"

  try {

    request
      .get(url)
      .set('Accept', 'application/json')
      .end(function(err, result){
        var parse = JSON.parse(result.text)
        var objects = parse.data


    MongoClient.connect(process.env.MONGO_URL, function(err, db) {
      if (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
          console.log('Feed already exits')
        }
      }

      var col = db.collection('feedschemas');
      var batch = col.initializeUnorderedBulkOp();


      function deepKeyValues(obj, key) {
        return Object(obj) !== obj
          ? []
          : (key in obj
            ? [obj[key]]
            : []).concat(...Object.keys(obj).map(k => deepKeyValues(obj[k], key)))
        }


      var objects = parse.data
        objects.forEach((object) => {
          var messageOne = object.message
          var imgOne = object.attachments

          if(messageOne != null && imgOne != null){
            batch.insert({
                name: object.from.name,
                uId: object.from.id,
                link: object.permalink_url,
                attachments: deepKeyValues(object.attachments, "src"),
                title: object.message,
                date: object.created_time,
                brand: utils.findCategory.findBrand(object.message),
                location: utils.findCategory.findLocation(object.message),
                size: utils.findCategory.findSize(object.message),
                year: utils.findCategory.findYear(object.message),
                price: utils.findCategory.findPrice(object.message),
                category: utils.findCategory.findCategory(object.message),
                type: utils.findCategory.findType(object.message)


            }, {upsert:true})
          }
        })
        // Execute the operations
        batch.execute(function(err, result) {
          if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
              console.log('Feed already exits')
            }
          }
          db.close();
        });
    });

    });

  }
  catch(err) {
         console.log('Feed already exits');
  }



}

module.exports = router;
