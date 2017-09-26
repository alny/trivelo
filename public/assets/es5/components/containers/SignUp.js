"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var SignUp = (function (Component) {
  function SignUp() {
    _classCallCheck(this, SignUp);

    _get(Object.getPrototypeOf(SignUp.prototype), "constructor", this).call(this);
    this.state = {
      credentials: {
        username: "",
        password: "",
        team: ""
      },
      inviteCode: ""
    };
  }

  _inherits(SignUp, Component);

  _prototypeProperties(SignUp, null, {
    updateCredentials: {
      value: function updateCredentials(event) {
        event.preventDefault();
        var updated = Object.assign({}, this.state.credentials);
        var invite = Object.assign({}, this.state.inviteCode);

        updated[event.target.id] = event.target.value;
        console.log("credentials: " + event.target.id + " == " + event.target.value);
        this.setState({
          credentials: updated,
          inviteCode: invite
        });
      },
      writable: true,
      configurable: true
    },
    submitRegister: {
      value: function submitRegister(event) {
        if (this.state.credentials.inviteCode != "Beta") {
          console.log("Insert a valid invite Code!");
          return;
        }
        if (this.state.credentials.username.length == 0) {
          tconsole.log("Enter a Username to Sign Up Please!");
          return;
        }
        if (this.state.credentials.username.length < 4) {
          console.log("Please select a Username over 4 Characters");
          return;
        }
        if (this.state.credentials.password.length == 0) {
          console.log("Enter a Password to Sign Up Please!");
          return;
        }
        if (this.state.credentials.password.length < 5) {
          console.log("Please select a Password over 5 Characters");
          return;
        }

        event.preventDefault();
        console.log("register: " + JSON.stringify(this.state.credentials));
        this.props.onRegister(this.state.credentials);
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { style: { padding: "0px" }, className: "container" },
          React.createElement(
            "div",
            { style: { width: "28.33%" }, className: "col-lg-3" },
            React.createElement(
              "div",
              { className: "input-group" },
              React.createElement(
                "span",
                { id: "user-input", className: "input-group-addon" },
                React.createElement("i", { className: "fa fa-user-circle-o", "aria-hidden": "true" })
              ),
              React.createElement("input", { onChange: this.updateCredentials.bind(this), id: "username", maxLength: "15", autoComplete: "off", className: "form-control", placeholder: "Username" })
            ),
            React.createElement("br", null),
            React.createElement(
              "div",
              { className: "input-group" },
              React.createElement(
                "span",
                { id: "user-input", className: "input-group-addon" },
                React.createElement("i", { style: { marginRight: "3px", marginLeft: "1px" }, className: "fa fa-lock", "aria-hidden": "true" })
              ),
              React.createElement("input", { onChange: this.updateCredentials.bind(this), id: "password", maxLength: "20", type: "password", autoComplete: "off", className: "form-control", placeholder: "Password" })
            ),
            React.createElement("br", null),
            React.createElement(
              "div",
              { className: "input-group" },
              React.createElement(
                "span",
                { id: "user-input", className: "input-group-addon" },
                React.createElement("i", { className: "fa fa-ticket", "aria-hidden": "true" })
              ),
              React.createElement("input", { onChange: this.updateCredentials.bind(this), id: "inviteCode", maxLength: "15", autoComplete: "off", className: "form-control", placeholder: "Invite Code" })
            ),
            React.createElement("br", null),
            React.createElement(
              "button",
              { style: { background: "#ef5d2d", borderColor: "#ef5d2d", marginBottom: "5px" }, onClick: this.submitRegister.bind(this), className: "btn btn-primary btn-block" },
              "Join"
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return SignUp;
})(Component);

module.exports = SignUp;