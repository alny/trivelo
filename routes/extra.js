
  var url = "https://graph.facebook.com/v2.9/306677009409252/feed?fields=message%2Cfrom%2Cname%2Cpermalink_url%2Ctype%2Ccreated_time%2Cpicture%2Cattachments&access_token=124675141414556|f0f7f3bc6fa886e2a83f5d2244a467a9"
  var db = process.env.MONGO_URL
  var col = db.collection('Feed');
  var batch = col.initializeUnorderedBulkOp();

  request
    .get(url)
    .set('Accept', 'application/json')
    .end(function(err, result){
      var parse = JSON.parse(result.text)


      var objects = parse.data
      objects.forEach((object) => {
        batch.insert({
          type: object.type,
          title: object.title,
          image: object.image,
          description: object.description
        })
      })
      batch.execute();

      // res.json({
      //   confirmation: 'success',
      //   response: parse
      // })

  });


  <li><a href="#"><i className="fa fa-angle-double-right"></i>Tri Cykler</a>
  </li>
  <li><a href="#"><i className="fa fa-angle-double-right"></i>Racercykler</a>
  </li>
  <li><a href="#"><i className="fa fa-angle-double-right"></i>Mountainbikes</a>
  </li>
  <li><a href="#"><i className="fa fa-angle-double-right"></i>Bane Cykler</a>
  </li>
  <li><a href="#"><i className="fa fa-angle-double-right"></i>Cross Cykler</a>
  </li>
  <li><a href="#"><i className="fa fa-angle-double-right"></i>Hverdags Cykler</a>
  </li>
  <li><a href="#"><i className="fa fa-angle-double-right"></i>Vinter Racercykler</a>
  </li>
