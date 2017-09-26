var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource

  var controller = controllers[resource]

  if(controller == null){
    res.send({
      confirmation: 'Fail',
      message: 'Invalid resource'
    })
    return
  }

  controller
  .get(req.query)
  .then(function(results){
    res.send({
      confirmation: 'success',
      results: results
    })
  })
  .catch(function(err){
    res.send({
      confirmation: 'Fail',
      message: err
    })
  })

});

router.get('/:resource/:id', function(req, res, next) {
  var resource = req.params.resource

  var controller = controllers[resource]

  if(controller == null){
    res.send({
      confirmation: 'Fail',
      message: 'Invalid resource'
    })
    return
  }
  var id = req.params.id

  controller
  .getById(id)
  .then(function(result){
    res.send({
      confirmation: 'success',
      result: result
    })
  })
  .catch(function(err){
    res.send({
      confirmation: 'Fail',
      message: err.message
    })
  })

});

router.post('/:resource', function(req, res, next) {
  var resource = req.params.resource
  var controller = controllers[resource]

  if(controller == null){
    res.send({
      confirmation: 'Fail',
      message: 'Invalid resource'
    })
    return
  }

  controller
  .create(req.body)
  .then(function(result){
    res.send({
      confirmation: 'success',
      result: result
    })
  })
  .catch(function(err){
    res.send({
      confirmation: 'Fail',
      message: err.message
    })
  })

});

router.put('/:resource/:id', function(req, res, next){
	var resource = req.params.resource
	var id = req.params.id

	var controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation:'fail',
			message: 'Invalid Resource.'
		})
		return
	}

	controller
	.put(id, req.body)
	.then(function(result){
		res.json({
			confirmation: 'success',
			result: result
		})

		return
	})
	.catch(function(err){
		res.json({
			confirmation: 'fail',
			message: err
		})

		return
	})
});

router.delete('/deleteFeed/:id', function(req, res, next){
	var id = req.params.id
	//TODO: authenticate this request. Also check for site?
	var controller = controllers['feed']
	controller
	.delete(id, req.session.token)
	.then(function(){
		res.json({
			confirmation: 'success',
			result: {id: id} // return the ID so client side can track which entity removed
		})
		return
	})
	.catch(function(err){
		res.json({
			confirmation: 'fail',
			message: err.message
		})

		return
	})
})




module.exports = router;
