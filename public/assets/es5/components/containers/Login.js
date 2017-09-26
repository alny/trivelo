"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var SignUp = require("../containers").SignUp;
var _reactRouter = require("react-router");

var Link = _reactRouter.Link;
var browserHistory = _reactRouter.browserHistory;
var actions = _interopRequire(require("../../actions"));

var connect = require("react-redux").connect;
var Login = (function (Component) {
  function Login() {
    _classCallCheck(this, Login);

    _get(Object.getPrototypeOf(Login.prototype), "constructor", this).call(this);
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  _inherits(Login, Component);

  _prototypeProperties(Login, null, {
    componentDidMount: {
      value: function componentDidMount() {
        if (this.props.user == null) this.props.checkCurrentUser();
      },
      writable: true,
      configurable: true
    },
    updateCredentials: {
      value: function updateCredentials(event) {
        event.preventDefault();
        var updated = Object.assign({}, this.state.credentials);
        updated[event.target.id] = event.target.value;
        console.log("credentials: " + event.target.id + " == " + event.target.value);
        this.setState({
          credentials: updated
        });
      },
      writable: true,
      configurable: true
    },
    submitLogin: {
      value: function submitLogin(event) {
        if (this.state.credentials.username.length == 0) {
          console.log("Enter a Username to Login Please!");
          return;
        }
        if (this.state.credentials.password.length == 0) {
          console.log("Enter a Password to Login Please!");
          return;
        }
        event.preventDefault();
        console.log("register: " + JSON.stringify(this.state.credentials));
        this.props.login(this.state.credentials).then(function (response) {
          browserHistory.push("/");
          window.location.reload("/");
        });
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { className: "container", style: { marginBottom: "10%", marginTop: "5%" } },
          React.createElement(
            "div",
            { className: "row vertical-offset-100" },
            React.createElement(
              "div",
              { className: "col-md-4 col-md-offset-4" },
              React.createElement(
                "div",
                { className: "panel panel-default" },
                React.createElement(
                  "div",
                  { className: "panel-heading" },
                  React.createElement(
                    "h3",
                    { className: "panel-title" },
                    "Trivelo | Sign In"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "panel-body" },
                  React.createElement(
                    "form",
                    { acceptCharset: "UTF-8", role: "form" },
                    React.createElement(
                      "fieldset",
                      null,
                      React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("input", { onChange: this.updateCredentials.bind(this), className: "form-control", autoComplete: "off", placeholder: "Username", id: "username", type: "text" })
                      ),
                      React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("input", { onChange: this.updateCredentials.bind(this), className: "form-control", placeholder: "Password", autoComplete: "off", id: "password", type: "password" })
                      ),
                      React.createElement(
                        "div",
                        { className: "checkbox" },
                        React.createElement(
                          "label",
                          null,
                          React.createElement("input", { name: "remember", type: "checkbox", value: "Remember Me" }),
                          " Remember Me"
                        )
                      ),
                      React.createElement("input", { onClick: this.submitLogin.bind(this), className: "btn btn-lg btn-success btn-block", type: "submit", value: "Login" })
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

  return Login;
})(Component);

var stateToProps = function (state) {
  return {
    user: state.account.user
  };
};

var dispatchToProps = function (dispatch) {
  return {
    login: function (credentials) {
      return dispatch(actions.login(credentials));
    },
    checkCurrentUser: function (params) {
      return dispatch(actions.checkCurrentUser(params));
    }

  };
};

module.exports = connect(stateToProps, dispatchToProps)(Login);