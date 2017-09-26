"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {

    allFrontpage: null

};

module.exports = function (_x, action) {
    var state = arguments[0] === undefined ? initialState : arguments[0];


    var updated = Object.assign({}, state);

    switch (action.type) {

        case constants.FETCH_ALL_BIKES:
            console.log("FETCH_ALL_BIKES " + JSON.stringify(action.params));
            var keys = Object.keys(action.params);
            keys.forEach(function (key, i) {
                var value = action.params[key];
                updated[value] = action.payload;
            });
            console.log("UPDATED " + JSON.stringify(updated));

            return updated;

        case constants.FETCH_FRONT_PAGE:
            console.log("FETCH_FRONT_PAGE: " + JSON.stringify(action.payload));
            updated.allFrontpage = action.payload;
            return updated;


        default:
            return state;
    }
};