"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var actions = _interopRequire(require("../../actions"));

var Link = require("react-router").Link;
var connect = require("react-redux").connect;
var Contact = (function (Component) {
    function Contact() {
        _classCallCheck(this, Contact);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Contact, Component);

    _prototypeProperties(Contact, null, {
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
                                                        "Kontakt information"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        null,
                                                        "Skyd os en E-mail hvis du har yderligere spørgsmål til Trivelo. Vi er altid klar ved tasterne til at besvare alle spørgsmål du skulle have."
                                                    ),
                                                    React.createElement(
                                                        "ul",
                                                        { className: "contact-list mb-40" },
                                                        React.createElement(
                                                            "li",
                                                            null,
                                                            React.createElement("span", { className: "icon fa fa-map-marker" }),
                                                            React.createElement(
                                                                "h5",
                                                                null,
                                                                "Adresse"
                                                            ),
                                                            React.createElement(
                                                                "p",
                                                                { className: "color-mid" },
                                                                "København, Danmark"
                                                            )
                                                        ),
                                                        React.createElement(
                                                            "li",
                                                            null,
                                                            React.createElement("span", { className: "icon fa fa-envelope-o" }),
                                                            React.createElement(
                                                                "h5",
                                                                null,
                                                                "Email"
                                                            ),
                                                            React.createElement(
                                                                "p",
                                                                { className: "color-mid" },
                                                                "Kontakt@Trivelo.dk"
                                                            )
                                                        ),
                                                        React.createElement(
                                                            "li",
                                                            null,
                                                            React.createElement("span", { className: "icon fa fa-phone" }),
                                                            React.createElement(
                                                                "h5",
                                                                null,
                                                                "Telefon"
                                                            ),
                                                            React.createElement(
                                                                "p",
                                                                { className: "color-mid" },
                                                                "(+45) 5043xxxx"
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "col-xs-12 col-md-6" },
                                            React.createElement(
                                                "div",
                                                { className: "contact-area-col contact-form" },
                                                React.createElement(
                                                    "h3",
                                                    { className: "t-uppercase h-title mb-20" },
                                                    "Lad os snakkes ved"
                                                ),
                                                React.createElement(
                                                    "form",
                                                    { action: "#", method: "post" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "form-group" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Navn"
                                                        ),
                                                        React.createElement("input", { type: "text", name: "navn", className: "form-control", required: "required" })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "form-group" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Email Address"
                                                        ),
                                                        React.createElement("input", { type: "text", name: "from", className: "form-control", required: "required" })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "form-group" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Årsag"
                                                        ),
                                                        React.createElement("input", { type: "text", name: "reason", className: "form-control", required: "required" })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "form-group" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Besked"
                                                        ),
                                                        React.createElement("textarea", { rows: "5", name: "message", className: "form-control", required: "required" })
                                                    ),
                                                    React.createElement(
                                                        "button",
                                                        { onClick: this.props.sendContactEmail.bind(this), className: "btn" },
                                                        "Send Besked"
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

    return Contact;
})(Component);

var stateToProps = function (state) {
    return {};
};

var dispatchToProps = function (dispatch) {
    return {
        sendContactEmail: function (email) {
            return dispatch(actions.sendContactEmail(email));
        }
    };
};
module.exports = connect(stateToProps, dispatchToProps)(Contact);