"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _redux = require("redux");

var combineReducers = _redux.combineReducers;
var applyMiddleware = _redux.applyMiddleware;
var createStore = _redux.createStore;
var thunk = _interopRequire(require("redux-thunk"));

var _reducers = require("../reducers");

var accountReducer = _reducers.accountReducer;
var categoryReducer = _reducers.categoryReducer;
var navbarReducer = _reducers.navbarReducer;


var store;

module.exports = {

  configureStore: function (initial) {
    var reducers = combineReducers({
      account: accountReducer,
      category: categoryReducer,
      navbar: navbarReducer
    });

    store = createStore(reducers, initial, applyMiddleware(thunk));
    return store;
  },

  currentStore: function () {
    return store;
  }
};