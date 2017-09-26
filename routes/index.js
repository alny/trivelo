var express = require('express');
var router = express.Router();
var util = require('../utils/findCategory')
var controllers = require('../controllers/index')
var AccountController = require('../controllers/AccountController')


var React = require('react')
var ReactRouter = require('react-router')
var ReactDOMServer = require('react-dom/server')

var serverapp = require('../public/assets/es5/serverapp')
var store = require('../public/assets/es5/store/index')
var Main = require('../public/assets/es5/components/layouts/index')
var Category = require('../public/assets/es5/components/containers/Category')
var About = require('../public/assets/es5/components/containers/About')
var Faq = require('../public/assets/es5/components/containers/Faq')
var Howto = require('../public/assets/es5/components/containers/Howto')
var Contact = require('../public/assets/es5/components/containers/Contact')




matchRoutes = function(req, routes, initialStore){
	return new Promise(function(resolve, reject){
		ReactRouter.match({ routes, location: req.url }, function(error, redirectLocation, renderProps){
			if (error){
				console.log('REACT ROUTER ERROR: '+error)
				reject(error)
				return
			}
			resolve(renderProps)
		})
	})
}


router.get('/', function(req, res, next) {

  var initialStore = null
	var reducers = {}

  AccountController.currentUser(req)
  .then(function(result){
    console.log('CURRENT USER: ' + JSON.stringify(result))

    reducers['account'] = {
      user: result
    }
    return controllers.feed.get(null)

  })
  // .then(function(category){
  //   console.log('CATEGORY: ')
  //   reducers.category = {
  //   allFrontpage: null
  //   }
  // })

  .then(function(){
    initialStore = store.configureStore(reducers)
    var routes = {
        path: '/',
        component: serverapp,
        initial: initialStore,
        indexRoute: {
          component: Main
        }
    }
    return matchRoutes(req, routes)
  })

  .then(function(renderProps){
    var html = ReactDOMServer.renderToString(React.createElement(ReactRouter.RouterContext, renderProps))
    res.render('index', {react: html, preloadedState: JSON.stringify(initialStore.getState())});
    console.log('TEST 1')

  })
  .catch(function(err){
    console.log('TEST 2')

  })

});

router.get('/:page', function(req, res, next) {
  var page = req.params.page

  var initialStore = null
	var reducers = {}
  initialStore = store.configureStore(reducers)

  var routes = {
      path: '/' + page,
      component: serverapp,
      initial: initialStore,
      indexRoute: {
        component: (page == 'om') ? About : Category
      }
  }

  matchRoutes(req, routes)
  .then(function(renderProps){
    var html = ReactDOMServer.renderToString(React.createElement(ReactRouter.RouterContext, renderProps))
    res.render('index', {react: html, preloadedState: JSON.stringify(initialStore.getState())});
    console.log('TEST 1')

  })
  .catch(function(err){
    console.log('TEST 2')

  })


});

module.exports = router;
