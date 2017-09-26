"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var APIManager = _interopRequire(require("../utils/APIManager"));

var getRequest = function (path, params, actionType) {
  return function (dispatch) {
    return APIManager.get(path, params).then(function (response) {
      //console.log('GET: ' + JSON.stringify(response))

      var payload = response.results || response.result || response.user;

      dispatch({
        type: actionType,
        payload: payload,
        params: params
      });
      return response;

    })["catch"](function (err) {
      console.log("ERRROR: " + JSON.stringify(err.message));
      throw err;
    });
  };
};

var postRequest = function (path, params, actionType) {
  return function (dispatch) {
    return APIManager.post(path, params).then(function (response) {
      //console.log('POST: ' + JSON.stringify(response))
      var payload = response.results || response.result || response.user;

      dispatch({
        type: actionType,
        payload: payload,
        params: params
      });
      return response;
    })["catch"](function (err) {
      console.log("ERRROR: " + JSON.stringify(err.message));
      throw err;
    });
  };
};

var putRequest = function (path, params, actionType) {
  return function (dispatch) {
    return APIManager.handlePut(path, params).then(function (response) {
      //console.log('POST: ' + JSON.stringify(response))

      var payload = response.results || response.result || response.user;

      dispatch({
        type: actionType,
        payload: payload,
        params: params
      });
      return response;
    })["catch"](function (err) {
      console.log("ERRROR: " + JSON.stringify(err.message));
      throw err;
    });
  };
};

var deleteData = function (path, params, actionType) {
  return function (dispatch) {
    return APIManager.handleDelete(path).then(function (response) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          params: response.result || response.results || null
        });
      }

      return response;
    })["catch"](function (err) {
      throw err;
    });
  };
};


module.exports = {

  register: function (credentials) {
    return function (dispatch) {
      return dispatch(postRequest("/account/register", credentials, constants.PROFILE_CREATED));
    };
  },
  checkCurrentUser: function () {
    return function (dispatch) {
      return dispatch(getRequest("/account/currentuser", {}, constants.USER_LOGGED_IN));
    };
  },
  login: function (credentials) {
    return function (dispatch) {
      return dispatch(postRequest("/account/login", credentials, constants.USER_LOGGED_IN));
    };
  },
  logOut: function () {
    return function (dispatch) {
      return dispatch(getRequest("/account/logout", {}, constants.USER_LOGGED_IN));
    };
  },

  getAllBikes: function (params) {
    return function (dispatch) {
      return dispatch(getRequest("/category/sorted", params, constants.FETCH_ALL_BIKES));
    };
  },
  getFrontpage: function (params) {
    return function (dispatch) {
      return dispatch(getRequest("/category/frontpage", params, constants.FETCH_FRONT_PAGE));
    };
  },
  sendContactEmail: function (params) {
    return function (dispatch) {
      return dispatch(getRequest("/category/email", params, constants.SEND_CONTACT_EMAIL));
    };
  },
  deleteFeed: function (id, params) {
    return function (dispatch) {
      return dispatch(deleteData("/api/deleteFeed/" + id, null, constants.DELETE_FEED));
    };
  },
  selectTopCategory: function (category) {
    return {
      type: constants.TOP_SELECTED,
      payload: category
    };
  }

};