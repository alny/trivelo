var express = require('express');
var router = express.Router();
var Feed = require('../models/Feed')
var User = require('../models/User')
var controllers = require('../controllers')
var superagent = require('superagent')
var utils = require('../utils')

function isAdmin(req, res, next){
  utils.JWT.verify(req.session.token, process.env.TOKEN_SECRET)
  .then(function(decode){
    var userId = decode.id
    console.log('USER ID: '+userId)
    User.findOne({_id: userId}, function(err, findFrag){
      if(err)return next()
      if(findFrag._id == process.env.ADMIN_ID || '5904bc4ed2fc8c1166b8d51d'){
        return next()
      } else {
        res.redirect('/');
      }
    });
  })
}


router.get('/dashboard', isLoggedIn, isAdmin, function(req, res, next){
  Feed.find()
  .sort({'date' : -1})
  .where({status: { $exists: false }})
  .where({isActive: { $exists: false }})
  .exec(function(err, allFeed){
    if(err) return next(err);
    res.render('admin/dashboard', {allFeed: allFeed})
  });
});

router.get('/edit', isLoggedIn, isAdmin, function(req, res, next){
    res.render('admin/edit')
});

router.post('/edit', isLoggedIn, isAdmin, function (req, res, next){
  var feedid = req.body.id

  Feed.findOne({_id: feedid}, function(err, feed){
    if(err) return next(err)

    if(req.body.price) feed.price = req.body.price;
    if(req.body.type) feed.type = req.body.type;
    if(req.body.location) feed.location = req.body.location;
    if(req.body.size) feed.size = req.body.size;
    if(req.body.brand) feed.brand = req.body.brand;
    if(req.body.year) feed.year = req.body.year;
    if(req.body.category) feed.category = req.body.category;

    feed.save(function(err){
      if(err) return next(err)
      res.redirect('/admin/dashboard')
      });
  });
});

router.get('/rejected', isLoggedIn, isAdmin, function(req, res, next){
  Feed.find()
  .where({status: { $exists: true }})
  .where({isActive: { $exists: false }})
  .sort({'date' : -1})
  .exec(function(err, allRejected){
    if(err) return next(err);
    res.render('admin/rejected', {allRejected: allRejected})
  });
});

router.get('/delete', isLoggedIn, isAdmin, function(req, res, next){
    res.render('admin/delete')
});


router.post('/acceptFeed/:id', isLoggedIn, isAdmin, function (req, res, next){
  var id = req.params.id

  Feed.findOne({_id: id}, function(err, feed){
    if(err) return next(err)

    if(req.body.price) feed.price = req.body.price;
    if(req.body.type) feed.type = req.body.type;
    if(req.body.location) feed.location = req.body.location;
    if(req.body.size) feed.size = req.body.size;
    if(req.body.brand) feed.brand = req.body.brand;
    if(req.body.year) feed.year = req.body.year;
    if(req.body.category) feed.category = req.body.category;

    feed.isActive = true

    feed.save(function(err){
      if(err) return next(err)
      res.redirect('/admin/dashboard')
      });
  });
});
router.get('/rejectFeed/:id', isLoggedIn, isAdmin, function (req, res, next){
  var id = req.params.id

  Feed.findOne({_id: id}, function(err, feed){
    if(err) return next(err)
    feed.status = true

    feed.save(function(err){
      if(err) return next(err)
      res.redirect('/admin/dashboard')
      });
  });
});

router.get('/deleteOne', isLoggedIn, isAdmin, function(req, res, next){
    res.render('admin/rejected')
});

router.post('/deleteOne/:id', isLoggedIn, isAdmin, function(req, res){
  var id = req.params.id
  Feed.findByIdAndRemove(id, function(err, deleteFeed){
    if(err) return next();
    res.redirect('/admin/rejected');
  })

});

router.post('/delete', isLoggedIn, isAdmin, function(req, res){
  Feed.findByIdAndRemove(req.body.id, function(err, deleteFeed){
    if(err) return next();
    res.redirect('/admin/delete');
  })

});

module.exports = router;


function isLoggedIn(req, res, next){
  if(req.session.token){
    return next();
  }
  res.redirect('/');
}

function notLoggedIn(req, res, next){
  if(!req.session.token){
    return next();
  }
  res.redirect('/');
}
