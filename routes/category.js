var Feed = require('../models/Feed')
var express = require('express');
var router = express.Router();
var async = require('async');
var utils = require('../utils')

router.post('/email', function(req, res, next){
  utils.EmailSender
  .sendEmail(req.body)
  .then(function(response){
    res.json({
      confirmation: 'success',
      response: response
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: err
    })
  })
  return

})

router.get('/sorted', function(req, res, next) {
  var page = req.query.page;
  var pagesize = 12
  delete req.query.page;

  var params = req.query;

  var sortOrder = (req.query.sort == 'asc') ? 1 : -1
  delete req.query.sort;
if(sortOrder != null){
  Feed.find(params)
    .where({isActive: { $exists: true }})
    .sort({'date' : sortOrder})
    .skip(pagesize*(page-1))
    .limit(pagesize)
    .exec(function(err, result) {
      if (err) return next(err);
      res.json({
        confirmation: 'success',
        result: result
      })
    });
  } else {
    Feed.find(params)
      .where({isActive: { $exists: true }})
      .sort({price:sortOrder})
      .skip(pagesize*(page-1))
      .limit(pagesize)
      .exec(function(err, result) {
        if (err) return next(err);
        res.json({
          confirmation: 'success',
          result: result
        })
      });
  }
})

router.get('/frontpage', function(req, res, next) {
  var params = req.query;

  Feed.find(params)
    .where({isActive: { $exists: true }})
    .sort({'timestamp' : -1})
    .limit(3)
    .exec(function(err, result) {
      if (err) return next(err);
      res.json({
        confirmation: 'success',
        result: result
      })
    });
})
//
// router.post('/deletefeed/:id', function(req, res, next) {
//   var id = req.params.id
//   Feed.findByIdAndRemove(id, function(err, deleteFeed){
//     if(err) return next();
//   })
// })

module.exports = router
