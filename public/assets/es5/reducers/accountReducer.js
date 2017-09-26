"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
    user: null

};

module.exports = function (_x, action) {
    var state = arguments[0] === undefined ? initialState : arguments[0];


    var updated = Object.assign({}, state);

    switch (action.type) {

        case constants.PROFILE_CREATED:
            console.log("PROFILE_CREATED: " + JSON.stringify(action.payload));
            updated.user = action.payload;
            return updated;

        case constants.USER_LOGGED_IN:
            console.log("USER_LOGGED_IN: " + JSON.stringify(action.payload));
            updated.user = action.payload;
            return updated;


        default:
            return state;
    }
};