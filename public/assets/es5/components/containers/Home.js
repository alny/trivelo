"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var actions = _interopRequire(require("../../actions"));

var Link = require("react-router").Link;
var connect = require("react-redux").connect;
var TextUtils = require("../../utils").TextUtils;
var _reactBootstrap = require("react-bootstrap");

var Modal = _reactBootstrap.Modal;
var Button = _reactBootstrap.Button;
var Carousel = _reactBootstrap.Carousel;
var Home = (function (Component) {
  function Home() {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this);
    this.state = {
      showModal: false,
      index: 0,
      direction: null
    };
  }

  _inherits(Home, Component);

  _prototypeProperties(Home, null, {
    close: {
      value: function close() {
        this.setState({
          showModal: false,
          index: 0,
          direction: null
        });
      },
      writable: true,
      configurable: true
    },
    open: {
      value: function open(id, event) {
        event.preventDefault();
        this.setState({
          showModal: _defineProperty({}, id, true)
        });
      },
      writable: true,
      configurable: true
    },
    handleSelect: {
      value: function handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction
        });
      },
      writable: true,
      configurable: true
    },
    componentDidMount: {
      value: function componentDidMount() {
        if (this.props.frontpage != null) {
          return;
        }this.props.getFrontpage();
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        var _this = this;
        return React.createElement(
          "div",
          null,
          React.createElement(
            "main",
            { id: "mainContent", className: "main-content" },
            React.createElement(
              "div",
              { className: "page-container ptb-60" },
              React.createElement(
                "div",
                { className: "container responsive-left" },
                React.createElement(
                  "div",
                  { className: "contact-area contact-area-v1 panel" },
                  React.createElement(
                    "div",
                    { className: "row row-tb-20" },
                    React.createElement(
                      "div",
                      { style: { paddingBottom: 0 }, className: "col-xs-12" },
                      React.createElement(
                        "div",
                        { className: "front-top-bg" },
                        React.createElement(
                          "span",
                          { className: "front-top-text" },
                          "Find dit Træningsudstyr"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                          "span",
                          { className: "front-top-undertext" },
                          "Nyt, brugt, køb og salg"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "ptb-30 prl-30" },
                    React.createElement(
                      "div",
                      { className: "row row-tb-20" },
                      React.createElement("div", { className: "front-cycling" }),
                      React.createElement("div", { className: "front-run" }),
                      React.createElement("div", { className: "front-swimming" }),
                      this.props.frontFeed == null ? null : this.props.frontFeed.map(function (bike, i) {
                        return React.createElement(
                          "div",
                          { key: i, className: "col-sm-6 col-md-4 col-lg-3" },
                          React.createElement(
                            "div",
                            { className: "coupon-single panel t-center salg-shadow" },
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement(
                                "div",
                                { className: "col-xs-12" },
                                React.createElement(
                                  "div",
                                  { className: "text-center p-20" },
                                  React.createElement(
                                    "a",
                                    { onClick: _this.open.bind(_this, bike._id), href: "#" },
                                    React.createElement("img", { className: "image-style", src: bike.attachments[0] })
                                  )
                                )
                              ),
                              React.createElement(
                                "div",
                                { className: "col-xs-12 panel-height" },
                                React.createElement(
                                  "div",
                                  { className: "panel-body" },
                                  React.createElement(
                                    "ul",
                                    { className: "deal-meta list-inline mb-10" },
                                    React.createElement(
                                      "li",
                                      { style: { textTransform: "capitalize" }, className: "color-muted" },
                                      React.createElement("i", { className: "ico fa fa-tag mr-5" }),
                                      bike.brand
                                    ),
                                    React.createElement(
                                      "li",
                                      { style: { textTransform: "capitalize" }, className: "color-muted" },
                                      React.createElement("i", { className: "ico fa fa-cube mr-5" }),
                                      bike.size
                                    ),
                                    React.createElement(
                                      "li",
                                      { className: "color-muted" },
                                      React.createElement("i", { className: "ico fa fa-thumb-tack mr-5" }),
                                      bike.year
                                    )
                                  ),
                                  React.createElement(
                                    "h4",
                                    { className: "color-green mb-10 t-uppercase" },
                                    "DKK ",
                                    bike.price,
                                    ".00"
                                  ),
                                  React.createElement(
                                    "ul",
                                    { className: "deal-meta list-inline mb-10" },
                                    React.createElement(
                                      "li",
                                      { style: { textTransform: "capitalize" }, className: "color-muted" },
                                      React.createElement("i", { className: "ico fa fa-map-marker mr-5" }),
                                      bike.location
                                    ),
                                    React.createElement("br", null),
                                    React.createElement(
                                      "li",
                                      { style: { width: "220px" }, className: "color-muted deal-title" },
                                      React.createElement("i", { className: "ico fa fa-user-circle mr-5" }),
                                      bike.name
                                    )
                                  ),
                                  React.createElement(
                                    Modal,
                                    { show: _this.state.showModal[bike._id], onHide: _this.close.bind(_this) },
                                    React.createElement(
                                      Modal.Header,
                                      { style: { borderBottom: "3px solid #f8ab3c" }, closeButton: true },
                                      React.createElement(
                                        Modal.Title,
                                        { style: { textTransform: "capitalize" } },
                                        "Mærke: ",
                                        bike.brand,
                                        " - Størrelse: ",
                                        bike.size,
                                        " - Årgang: ",
                                        bike.year
                                      )
                                    ),
                                    React.createElement(
                                      Modal.Body,
                                      { style: { padding: "0px" } },
                                      React.createElement(
                                        Carousel,
                                        { activeIndex: _this.state.index, direction: _this.state.direction, onSelect: _this.handleSelect.bind(_this) },
                                        bike.attachments == null ? null : bike.attachments.map(function (img, i) {
                                          return React.createElement(
                                            Carousel.Item,
                                            { key: i },
                                            React.createElement("img", { width: 900, height: 500, alt: "900x500", src: img })
                                          );
                                        })
                                      )
                                    ),
                                    React.createElement(
                                      Modal.Body,
                                      { style: { borderTop: "3px solid #f8ab3c" } },
                                      React.createElement(
                                        "p",
                                        { style: { fontWeight: "400", textTransform: "capitalize" } },
                                        bike.title
                                      )
                                    ),
                                    React.createElement(
                                      Modal.Footer,
                                      null,
                                      React.createElement(
                                        "a",
                                        { href: bike.link, target: "_blank" },
                                        React.createElement(
                                          Button,
                                          { style: { float: "left" } },
                                          "Kontakt Sælger"
                                        )
                                      ),
                                      React.createElement(
                                        Button,
                                        { onClick: _this.close.bind(_this) },
                                        "Luk"
                                      )
                                    )
                                  ),
                                  React.createElement(
                                    "div",
                                    { className: "showcode" },
                                    React.createElement(
                                      "button",
                                      { onClick: _this.open.bind(_this, bike._id), className: "btn btn-sm btn block more-info" },
                                      "Vis Mere"
                                    ),
                                    React.createElement(
                                      "a",
                                      { href: bike.link, target: "_blank" },
                                      React.createElement(
                                        "button",
                                        { className: "btn btn-sm btn block more-info" },
                                        "Kontakt Info"
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        );
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "ptb-30 prl-30 top-line" },
                    React.createElement(
                      "div",
                      { className: "row row-tb-20" },
                      React.createElement(
                        "div",
                        { className: "col-md-6" },
                        React.createElement(
                          "div",
                          { className: "item panel prl-15 ptb-20" },
                          React.createElement(
                            "div",
                            { className: "row row-rl-5 row-xs-cell" },
                            React.createElement(
                              "div",
                              { className: "col-xs-4 valign-middle" },
                              React.createElement("img", { className: "pr-10", src: "assets/images/icons/tablet.png", width: "80", alt: "" })
                            ),
                            React.createElement(
                              "div",
                              { className: "col-xs-8" },
                              React.createElement(
                                "h5",
                                { className: "mb-10 pt-5" },
                                "Vi sorterer og kategoriserer!"
                              ),
                              React.createElement(
                                "p",
                                { className: "color-mid" },
                                "Vores system indsamler automatisk data fra Facebook grupper, og inddeler hvert opslag i forskellige kategorier, så du på få sekunder kan finde præcis det udstyr som du leder efter."
                              )
                            )
                          )
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "col-md-6" },
                        React.createElement(
                          "div",
                          { className: "item panel prl-15 ptb-20" },
                          React.createElement(
                            "div",
                            { className: "row row-rl-5 row-xs-cell" },
                            React.createElement(
                              "div",
                              { className: "col-xs-4 valign-middle" },
                              React.createElement("img", { className: "pr-10", src: "assets/images/icons/money.png", width: "80", alt: "" })
                            ),
                            React.createElement(
                              "div",
                              { className: "col-xs-8" },
                              React.createElement(
                                "h5",
                                { className: "mb-10 pt-5" },
                                "Nemt, overskueligt og gratis!"
                              ),
                              React.createElement(
                                "p",
                                { className: "color-mid" },
                                "Vi tilbyder en platform, hvor du hverken skal betale eller være medlem for at finde dit nye udstyr. Vi sælger ikke udstyr, men viser blot hvor det bedste udstyr findes og linker videre til sælgeren/udbyderen."
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "section",
                    { className: "section subscribe-area ptb-40 t-center" },
                    React.createElement(
                      "div",
                      { className: "newsletter-form" },
                      React.createElement(
                        "h4",
                        { className: "mb-20" },
                        React.createElement("i", { style: { color: "#f8ab3c" }, className: "fa fa-envelope-o mr-10" }),
                        "Tilmeld dig nyhedsbrevet og modtag gode Tips og Nyheder om køb/salg af Triathlon og Cykle udstyr."
                      ),
                      React.createElement(
                        "form",
                        { method: "post", action: "#" },
                        React.createElement(
                          "div",
                          { className: "input-group mb-10" },
                          React.createElement("input", { type: "email", className: "form-control bg-white", placeholder: "Email Adresse", required: "required" }),
                          React.createElement(
                            "span",
                            { className: "input-group-btn" },
                            React.createElement(
                              "button",
                              { className: "btn", type: "submit" },
                              "Tilmeld"
                            )
                          )
                        )
                      ),
                      React.createElement(
                        "p",
                        { className: "color-muted" },
                        React.createElement(
                          "small",
                          null,
                          "Vi vil aldrig dele din Email med en tredjepart."
                        ),
                        " "
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

  return Home;
})(Component);

var stateToProps = function (state) {
  return {
    frontFeed: state.category.allFrontpage
  };
};

var dispatchToProps = function (dispatch) {
  return {
    getFrontpage: function (all) {
      return dispatch(actions.getFrontpage(all));
    }

  };
};

module.exports = connect(stateToProps, dispatchToProps)(Home);