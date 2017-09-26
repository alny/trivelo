"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Link = require("react-router").Link;
var Footer = (function (Component) {
  function Footer() {
    _classCallCheck(this, Footer);

    if (Component != null) {
      Component.apply(this, arguments);
    }
  }

  _inherits(Footer, Component);

  _prototypeProperties(Footer, null, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "section",
            { style: { marginTop: "20px" }, className: "footer-top-area pt-70 pb-30 pos-r bg-blue" },
            React.createElement(
              "div",
              { className: "container" },
              React.createElement(
                "div",
                { className: "row row-tb-20" },
                React.createElement(
                  "div",
                  { className: "col-md-6 col-md-offset-3 footer-custom" },
                  React.createElement("img", { className: "mb-40", src: "assets/images/Trivelo-logo_white.png", width: "100", alt: "" }),
                  React.createElement(
                    "p",
                    { className: "color-light" },
                    "Trivelo indsamler automatisk data fra diverse Triathlon og Cykling grupper på Facebook, hvor mere end 100 tusind personer dagligt sælger eller køber deres brugte ting. Vi kategoriserer og sorterer alt den data og giver dig på få sekunder en oversigt så du nemt og hurtigt kan finde det du leder efter."
                  )
                )
              )
            )
          ),
          React.createElement(
            "footer",
            { id: "mainFooter", className: "main-footer" },
            React.createElement(
              "div",
              { className: "container" },
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "p",
                  { style: { fontWeight: "400" } },
                  "Copyright ",
                  React.createElement(
                    Link,
                    { to: "/login" },
                    "©"
                  ),
                  " 2017 - All rights reserved."
                )
              )
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Footer;
})(Component);

module.exports = Footer;