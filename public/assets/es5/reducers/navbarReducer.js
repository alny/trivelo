"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
  selectedTopCategory: "cykler"
};

module.exports = function (_x, action) {
  var state = arguments[0] === undefined ? initialState : arguments[0];


  var updated = Object.assign({}, state);

  switch (action.type) {

    case constants.TOP_SELECTED:
      console.log("NAVBAR_SELECTED " + JSON.stringify(action.payload));
      updated.selectedTopCategory = action.payload;
      return updated;


      return updated;


    default:
      return state;
  }
};