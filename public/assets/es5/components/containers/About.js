"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var About = (function (Component) {
  function About() {
    _classCallCheck(this, About);

    if (Component != null) {
      Component.apply(this, arguments);
    }
  }

  _inherits(About, Component);

  _prototypeProperties(About, null, {
    render: {
      value: function render() {
        return React.createElement(
          "main",
          { style: { marginTop: "-40px" }, id: "mainContent", className: "main-content" },
          React.createElement(
            "div",
            { className: "page-container pt-40 pt-10" },
            React.createElement(
              "div",
              { className: "container" },
              React.createElement(
                "div",
                { className: "contact-area contact-area-v1 panel" },
                React.createElement(
                  "div",
                  { className: "ptb-30 prl-30" },
                  React.createElement(
                    "div",
                    { className: "row row-tb-20" },
                    React.createElement(
                      "div",
                      { className: "col-xs-12 col-md-6" },
                      React.createElement(
                        "div",
                        { className: "contact-area-col contact-info" },
                        React.createElement(
                          "div",
                          { className: "contact-info" },
                          React.createElement(
                            "h3",
                            { className: "t-uppercase h-title mb-20" },
                            "Om Trivelo"
                          ),
                          React.createElement(
                            "p",
                            null,
                            "Trivelo indsamler automatisk data fra diverse Triathlon og Cykling grupper på Facebook, hvor mere end 100 tusind personer dagligt sælger eller køber deres brugte ting. Vi kategoriserer og sorterer alt den data og giver dig på få sekunder en oversigt så du nemt og hurtigt kan finde det du leder efter."
                          ),
                          React.createElement("hr", null),
                          React.createElement(
                            "h4",
                            null,
                            "Vi sorterer og kategoriserer"
                          ),
                          React.createElement(
                            "p",
                            null,
                            "Vi tilbyder en platform, hvor du hverken skal betale eller være medlem for at finde dit nye udstyr. Vi sælger ikke udstyr, men viser blot hvor det bedste udstyr findes og linker videre til sælgeren/udbyderen."
                          ),
                          React.createElement("hr", null),
                          React.createElement(
                            "h4",
                            null,
                            "Nemt, overskueligt og gratis"
                          ),
                          React.createElement(
                            "p",
                            null,
                            "Vores system indsamler automatisk data fra Facebook grupper, og inddeler hvert opslag i forskellige kategorier, så du på få sekunder kan finde præcis det udstyr som du leder efter."
                          )
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-xs-12 col-md-6" },
                      React.createElement("img", { style: { borderRadius: "5px" }, src: "assets/images/about.jpg", alt: "" })
                    )
                  )
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

  return About;
})(Component);

module.exports = About;