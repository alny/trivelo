"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var superagent = _interopRequire(require("superagent"));

var Promise = _interopRequire(require("bluebird"));

module.exports = {
  get: function (url, params) {
    return new Promise(function (resolve, reject) {
      superagent.get(url).query(params).set("Accept", "application/json").end(function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        if (response.body.confirmation != "success") {
          reject(new Error(response.body.message));
          return;
        }
        resolve(response.body);
      });
    });
  },

  post: function (url, params) {
    return new Promise(function (resolve, reject) {
      superagent.post(url).send(params).set("Accept", "application/json").end(function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        if (response.body.confirmation != "success") {
          reject(new Error(response.body.message));
          return;
        }
        resolve(response.body);
      });
    });
  },

  handlePut: function (url, params) {
    return new Promise(function (resolve, reject) {
      superagent.put(url).send(params).set("Accept", "application/json").end(function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        if (response.body.confirmation != "success") {
          reject(new Error(response.body.message));
          return;
        }
        resolve(response.body);
      });
    });
  },

  handleDelete: function (endpoint) {
    return new Promise(function (resolve, reject) {
      superagent["delete"](endpoint).set("Accept", "application/json").end(function (err, res) {
        if (err) {
          reject(err);
          return;
        }

        var json = res.body;
        if (json.confirmation != "success") {
          reject(new Error(json.message));
          return;
        }

        resolve(json);
      });
    });
  }


};