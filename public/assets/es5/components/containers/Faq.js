"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Faq = (function (Component) {
    function Faq() {
        _classCallCheck(this, Faq);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Faq, Component);

    _prototypeProperties(Faq, null, {
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
                                        "section",
                                        { className: "section faq-area pb-60" },
                                        React.createElement(
                                            "h3",
                                            { className: "h-title mb-30 t-uppercase" },
                                            "OFTE STILLEDE SPØRGSMÅL"
                                        ),
                                        React.createElement(
                                            "div",
                                            { id: "accordion", className: "panel-group" },
                                            React.createElement(
                                                "h4",
                                                { className: "mb-15" },
                                                "Generelle spørgsmål"
                                            ),
                                            React.createElement(
                                                "div",
                                                { className: "panel panel-default" },
                                                React.createElement(
                                                    "div",
                                                    { className: "panel-heading" },
                                                    React.createElement(
                                                        "h5",
                                                        { className: "panel-title" },
                                                        React.createElement(
                                                            "a",
                                                            { "data-toggle": "collapse", "data-parent": "#accordion", href: "#faq_payment0", "aria-expanded": "false", className: "collapsed" },
                                                            "Hvordan sætter jeg min varer tilsalg på Trivelo?"
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { id: "faq_payment0", className: "panel-collapse collapse", "aria-expanded": "false", style: { height: "0px" } },
                                                    React.createElement(
                                                        "div",
                                                        { className: "panel-body and-more" },
                                                        React.createElement(
                                                            "p",
                                                            { className: "mb-30" },
                                                            React.createElement("br", null),
                                                            "Klik på \"Sådan gør du\" og følg de 4 steps."
                                                        )
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "div",
                                                { className: "panel panel-default" },
                                                React.createElement(
                                                    "div",
                                                    { className: "panel-heading" },
                                                    React.createElement(
                                                        "h5",
                                                        { className: "panel-title" },
                                                        React.createElement(
                                                            "a",
                                                            { "data-toggle": "collapse", "data-parent": "#accordion", href: "#faq_payment1", "aria-expanded": "false", className: "collapsed" },
                                                            "Hvad koster det at bruge Trivelo?"
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { id: "faq_payment1", className: "panel-collapse collapse", "aria-expanded": "false", style: { height: "0px" } },
                                                    React.createElement(
                                                        "div",
                                                        { className: "panel-body and-more" },
                                                        React.createElement(
                                                            "p",
                                                            { className: "mb-30" },
                                                            React.createElement("br", null),
                                                            "Trivelo 100% gratis."
                                                        )
                                                    )
                                                )
                                            )
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

    return Faq;
})(Component);

module.exports = Faq;