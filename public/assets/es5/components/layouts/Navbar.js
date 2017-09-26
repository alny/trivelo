"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var _reactRouter = require("react-router");

var Link = _reactRouter.Link;
var browserHistory = _reactRouter.browserHistory;
var actions = _interopRequire(require("../../actions"));

var connect = require("react-redux").connect;
var Navbar = (function (Component) {
  function Navbar() {
    _classCallCheck(this, Navbar);

    _get(Object.getPrototypeOf(Navbar.prototype), "constructor", this).call(this);
    this.state = {};
  }

  _inherits(Navbar, Component);

  _prototypeProperties(Navbar, null, {
    selectTopCategory: {
      value: function selectTopCategory(category, event) {
        event.preventDefault();
        this.props.selectTopCategory(category);
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "nav",
            { className: "navbar navbar-default", role: "navigation" },
            React.createElement(
              "div",
              { className: "container-fluid" },
              React.createElement(
                "button",
                { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1" },
                React.createElement(
                  "span",
                  { className: "sr-only" },
                  "Toggle navigation"
                ),
                React.createElement("span", { className: "icon-bar" }),
                React.createElement("span", { className: "icon-bar" }),
                React.createElement("span", { className: "icon-bar" })
              ),
              React.createElement(
                Link,
                { to: "/", href: "#" },
                React.createElement("img", { className: "logo-img", src: "assets/images/Trivelo-logo_xs.png", alt: "" })
              ),
              React.createElement(
                "div",
                { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
                React.createElement(
                  "ul",
                  { style: { marginBottom: "0px" }, className: "nav navbar-nav" },
                  React.createElement(
                    "li",
                    { className: "logo-text" },
                    React.createElement(
                      Link,
                      { to: "/", style: { color: "rgb(70, 80, 107)" }, href: "#" },
                      "Trivelo"
                    )
                  ),
                  React.createElement(
                    "li",
                    { style: { paddingTop: "0px" }, className: "dropdown" },
                    React.createElement(
                      "a",
                      { style: { color: "#314555", height: "100px", lineHeight: "70px", fontSize: "13px", marginRight: "10px" }, href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                      "Cykling ",
                      React.createElement("i", { style: { marginLeft: "3px" }, className: "fa fa-angle-down", "aria-hidden": "true" })
                    ),
                    React.createElement(
                      "ul",
                      { style: { marginTop: "0px" }, className: "dropdown-menu" },
                      React.createElement(
                        "li",
                        { onClick: this.selectTopCategory.bind(this, "cykler") },
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/cykler" },
                          "Cykler"
                        )
                      ),
                      React.createElement(
                        "li",
                        { onClick: this.selectTopCategory.bind(this, "cykelhjul") },
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/cykelhjul" },
                          "Cykelhjul"
                        )
                      ),
                      React.createElement(
                        "li",
                        { onClick: this.selectTopCategory.bind(this, "cykelbekladning") },
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/cykelbekladning" },
                          "Cykelbeklædning"
                        )
                      ),
                      React.createElement(
                        "li",
                        { onClick: this.selectTopCategory.bind(this, "cykelkomponenter") },
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/cykelkomponenter" },
                          "Cykel Komponenter"
                        )
                      ),
                      React.createElement(
                        "li",
                        { onClick: this.selectTopCategory.bind(this, "cykeltilbehor") },
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/cykeltilbehor" },
                          "Cykel Tilbehør"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "li",
                    { style: { paddingTop: "0px" }, className: "dropdown" },
                    React.createElement(
                      "a",
                      { style: { color: "#314555", height: "100px", lineHeight: "70px", fontSize: "13px" }, href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                      "Løb ",
                      React.createElement("i", { style: { marginLeft: "3px" }, className: "fa fa-angle-down", "aria-hidden": "true" })
                    ),
                    React.createElement(
                      "ul",
                      { style: { marginTop: "0px" }, className: "dropdown-menu" },
                      React.createElement(
                        "li",
                        { onClick: this.selectTopCategory.bind(this, "lobm") },
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/løbeudstyr-mænd", href: "#" },
                          "Løbetøj til Mænd"
                        )
                      ),
                      React.createElement(
                        "li",
                        { onClick: this.selectTopCategory.bind(this, "lobk") },
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/løbeudstyr-kvinder", href: "#" },
                          "Løbetøj til Kvinder"
                        ),
                        "  "
                      ),
                      React.createElement(
                        "li",
                        { onClick: this.selectTopCategory.bind(this, "lobtil") },
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/løbetilbehør", href: "#" },
                          "Løbe Tilbehør"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "li",
                    { style: { paddingTop: "0px" }, className: "dropdown" },
                    React.createElement(
                      "a",
                      { style: { color: "#314555", height: "100px", lineHeight: "70px", fontSize: "13px" }, href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                      "Svømning ",
                      React.createElement("i", { style: { marginLeft: "3px" }, className: "fa fa-angle-down", "aria-hidden": "true" })
                    ),
                    React.createElement(
                      "ul",
                      { style: { marginTop: "0px" }, className: "dropdown-menu" },
                      React.createElement(
                        "li",
                        { onClick: this.selectTopCategory.bind(this, "vaddragte") },
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/våddragte", href: "#" },
                          "Våddragte"
                        )
                      ),
                      React.createElement(
                        "li",
                        { onClick: this.selectTopCategory.bind(this, "svom") },
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/svømmetøj-mænd", "data-toggle": "modal", "data-target": "#SignUpModal", href: "#" },
                          "Svømmetøj til Mænd"
                        )
                      ),
                      React.createElement(
                        "li",
                        { onClick: this.selectTopCategory.bind(this, "svok") },
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/svømmetøj-kvinder", href: "#" },
                          "Svømmetøj til Kvinder"
                        )
                      ),
                      React.createElement(
                        "li",
                        { onClick: this.selectTopCategory.bind(this, "svomudstyr") },
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/svømmeudstyr", href: "#" },
                          "Svømmeudstyr"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "li",
                    { style: { paddingTop: "0px" }, className: "dropdown" },
                    React.createElement(
                      "a",
                      { style: { color: "#314555", height: "100px", lineHeight: "70px", fontSize: "13px" }, href: "#", className: "dropdown-toggle tree-dots", "data-toggle": "dropdown" },
                      React.createElement("i", { style: { marginRight: "3px" }, className: "fa fa-circle", "aria-hidden": "true" }),
                      React.createElement("i", { style: { marginRight: "3px" }, className: "fa fa-circle", "aria-hidden": "true" }),
                      React.createElement("i", { className: "fa fa-circle", "aria-hidden": "true" })
                    ),
                    React.createElement(
                      "ul",
                      { style: { marginTop: "0px" }, className: "dropdown-menu" },
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/om", href: "#" },
                          "Om"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/sadan", href: "#" },
                          "Sådan gør du!"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/faq", href: "#" },
                          "FAQ"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          Link,
                          { className: "drop-text", to: "/kontakt", href: "#" },
                          "Kontakt"
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  "ul",
                  { className: "nav navbar-nav navbar-right" },
                  React.createElement(
                    "li",
                    { className: "dropdown" },
                    React.createElement(
                      Link,
                      { to: "/sadan" },
                      React.createElement(
                        "button",
                        { className: "btn btn-lg kom-igang" },
                        "SÅDAN GØR DU ",
                        React.createElement("i", { className: "fa fa-handshake-o", "aria-hidden": "true" })
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

  return Navbar;
})(Component);

var stateToProps = function (state) {
  return {
    user: state.account.user,
    navbar: state.navbar
  };
};

var dispatchToProps = function (dispatch) {
  return {
    selectTopCategory: function (category) {
      return dispatch(actions.selectTopCategory(category));
    }
  };
};

module.exports = connect(stateToProps, dispatchToProps)(Navbar);