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
var Category = (function (Component) {
  function Category() {
    _classCallCheck(this, Category);

    _get(Object.getPrototypeOf(Category.prototype), "constructor", this).call(this);
    this.state = {
      showModal: false,
      index: 0,
      page: 1,
      showButton: false,
      direction: null,
      brand: "",
      size: "",
      year: "",
      type: null,
      sort: ""
    };
    this.getBikes = this.getBikes.bind(this);
    this.increment = this.increment.bind(this);

  }

  _inherits(Category, Component);

  _prototypeProperties(Category, null, {
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
    selectACategory: {
      value: function selectACategory(event) {
        event.preventDefault();
        var test = {};
        test[event.target.id] = event.target.value;
        if (this.state.brand == null) {
          this.setState({
            brand: test
          });
          test.brand = this.state.brand;
        }
        test.page = this.state.page;
        if (this.state.type == null) {} else {
          test.type = this.state.type;
        }
        test.category = this.props.navbar.selectedTopCategory;

        this.props.getAllBikes(test);
      },
      writable: true,
      configurable: true
    },
    increment: {
      value: function increment(event) {
        event.preventDefault();
        var test = {};
        window.scrollTo(0, 0);

        this.setState({
          page: this.state.page += 1,
          showButton: true
        });
        test.page = this.state.page;

        if (this.state.type == null) {} else {
          test.type = this.state.type;
        }
        // (this.state.type == null) ? null : test.type = this.state.type

        test.category = this.props.navbar.selectedTopCategory;
        this.props.getAllBikes(test);
        console.log("PAGE: " + JSON.stringify(this.state.page));
      },
      writable: true,
      configurable: true
    },
    decrease: {
      value: function decrease(event) {
        event.preventDefault();
        var test = {};
        window.scrollTo(0, 0);
        this.setState({
          page: this.state.page -= 1
        });
        test.page = this.state.page;

        if (this.state.type == null) {} else {
          test.type = this.state.type;
        }
        test.category = this.props.navbar.selectedTopCategory;
        this.props.getAllBikes(test);
        console.log("PAGE: " + JSON.stringify(this.state.page));
      },
      writable: true,
      configurable: true
    },
    selectBCategory: {
      value: function selectBCategory(event) {
        event.preventDefault();
        var test = {};
        test[event.target.id] = event.target.value;
        if (this.state.size == null) {
          this.setState({
            size: test
          });
          test.size = this.state.size;
        }
        test.page = this.state.page;
        if (this.state.type == null) {} else {
          test.type = this.state.type;
        }
        test.category = this.props.navbar.selectedTopCategory;

        this.props.getAllBikes(test);
      },
      writable: true,
      configurable: true
    },
    getBikes: {
      value: function getBikes() {
        if (this.props.allbicycles[this.props.navbar.selectedTopCategory] != null) {
          return;
        }var test = {};
        test.page = 1;
        test.category = this.props.navbar.selectedTopCategory;
        this.props.getAllBikes(test);
      },
      writable: true,
      configurable: true
    },
    componentDidMount: {
      value: function componentDidMount() {
        if (this.props.user == null) this.props.checkCurrentUser();
        this.getBikes();
      },
      writable: true,
      configurable: true
    },
    componentDidUpdate: {
      value: function componentDidUpdate() {
        this.getBikes();
      },
      writable: true,
      configurable: true
    },
    deleteFeed: {
      value: function deleteFeed(id, event) {
        event.preventDefault();
        this.props.deleteFeed(id);
      },
      writable: true,
      configurable: true
    },
    selectCategory: {
      value: function selectCategory(type) {
        var test = {};
        if (type != null) {
          this.setState({
            type: type,
            page: 1
          });
          test.type = type;
          test.category = this.props.navbar.selectedTopCategory;
        }
        this.props.getAllBikes(test);
      },
      writable: true,
      configurable: true
    },
    sortByPrice: {
      value: function sortByPrice(sort) {
        var test = {};
        if (sort != null) {
          this.setState({
            sort: sort
          });
          test.sort = sort;
          test.category = this.props.navbar.selectedTopCategory;
        }
        this.props.getAllBikes(test);
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        var _this = this;


        var path = this.props.location.pathname.replace("/", "");
        var parts = path.split("/");
        var page = parts[0];


        var content = null;


        if (parts.length == 1) {
          var typer = TextUtils.subNavbar(page);

          content = React.createElement(
            "div",
            { className: "col-xs-12 col-md-2 subNav" },
            React.createElement(
              "aside",
              { className: "aside-nav" },
              React.createElement(
                "ul",
                { className: "nav-coupon-category panel" },
                React.createElement(
                  "li",
                  { className: "all-cat" },
                  React.createElement(
                    "a",
                    { className: "font-14", href: "#" },
                    "Kategorier:"
                  )
                ),
                typer.map(function (type, i) {
                  return React.createElement(
                    "li",
                    { onClick: _this.selectCategory.bind(_this, type), key: i },
                    React.createElement(
                      "a",
                      { href: "#", value: type },
                      React.createElement("i", { className: "fa fa-angle-double-right" }),
                      type
                    )
                  );
                })
              )
            )
          );

        }
        return React.createElement(
          "div",
          null,
          content,
          React.createElement(
            "main",
            { id: "mainContent", className: "main-content" },
            React.createElement(
              "div",
              { className: "page-container ptb-60" },
              React.createElement(
                "div",
                { className: "container" },
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
                        { className: "filter-search" },
                        React.createElement(
                          "div",
                          { className: "row" },
                          React.createElement(
                            "div",
                            { style: { right: "-30px" }, className: "col-6 col-md-3 filter-height" },
                            React.createElement(
                              "div",
                              { className: "right-10 pos-tb-center" },
                              React.createElement(
                                "select",
                                { onChange: this.selectACategory.bind(this), id: "brand", className: "form-control input-sm brand-drop" },
                                React.createElement(
                                  "option",
                                  null,
                                  "Mærke:"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "giant" },
                                  "Giant"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "trek" },
                                  "Trek"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "specialized" },
                                  "Specialized"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "s-works" },
                                  "S-Works"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "cannondale" },
                                  "Cannondale"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "cervelo" },
                                  "Cervelo"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "scott" },
                                  "Scott"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "bianchi" },
                                  "Bianchi"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "canyon" },
                                  "Canyon"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "cube" },
                                  "Cube"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "pinarello" },
                                  "Pinarello"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "fuji" },
                                  "Fuji"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "colnago" },
                                  "Colnago"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "felt" },
                                  "Felt"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "wilier" },
                                  "Wilier"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "bh" },
                                  "BH"
                                )
                              )
                            )
                          ),
                          React.createElement(
                            "div",
                            { style: { right: "-13px" }, className: "col-6 col-md-3 filter-height" },
                            React.createElement(
                              "div",
                              { className: "right-10 pos-tb-center" },
                              React.createElement(
                                "select",
                                { onChange: this.selectBCategory.bind(this), id: "size", className: "form-control input-sm size-drop" },
                                React.createElement(
                                  "option",
                                  null,
                                  "Størrelse:"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "48" },
                                  "48"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "50" },
                                  "50"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "52" },
                                  "52"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "54" },
                                  "54"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "56" },
                                  "56"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "58" },
                                  "58"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "60" },
                                  "60"
                                ),
                                React.createElement(
                                  "option",
                                  { value: "62" },
                                  "62"
                                )
                              )
                            )
                          ),
                          React.createElement(
                            "div",
                            { className: "col-6 col-md-3 filter-height" },
                            React.createElement(
                              "div",
                              { style: { right: "13px" }, className: "col-6 col-md-3 filter-height" },
                              React.createElement(
                                "div",
                                { className: "right-10 pos-tb-center" },
                                React.createElement(
                                  "select",
                                  { onChange: this.selectACategory.bind(this), id: "year", className: "form-control input-sm year-drop" },
                                  React.createElement(
                                    "option",
                                    null,
                                    "Årgang:"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "2007" },
                                    "2007"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "2008" },
                                    "2008"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "2009" },
                                    "2009"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "2010" },
                                    "2010"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "2011" },
                                    "2011"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "2012" },
                                    "2012"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "2013" },
                                    "2013"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "2014" },
                                    "2014"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "2015" },
                                    "2015"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "2016" },
                                    "2016"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "2017" },
                                    "2017"
                                  )
                                )
                              )
                            )
                          ),
                          React.createElement(
                            "div",
                            { className: "col-6 col-md-3 filter-height" },
                            React.createElement(
                              "div",
                              { style: { right: "31px" }, className: "col-6 col-md-3 filter-height" },
                              React.createElement(
                                "div",
                                { className: "right-10 pos-tb-center" },
                                React.createElement(
                                  "select",
                                  { onChange: this.sortByPrice.bind(this), style: { width: "494%" }, className: "form-control input-sm filter-drop" },
                                  React.createElement(
                                    "option",
                                    null,
                                    "Filter:"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "asc" },
                                    "Pris: Lav til Høj"
                                  ),
                                  React.createElement(
                                    "option",
                                    { value: "desc" },
                                    "Pris: Høj til Lav"
                                  )
                                )
                              )
                            )
                          )
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
                      this.props.allbicycles[this.props.navbar.selectedTopCategory] == null ? null : this.props.allbicycles[this.props.navbar.selectedTopCategory].map(function (bike, i) {
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
                                    _this.props.user == null ? React.createElement(
                                      "li",
                                      { style: { textTransform: "capitalize" }, className: "color-muted" },
                                      React.createElement("i", { className: "ico fa fa-map-marker mr-5" }),
                                      bike.location
                                    ) : React.createElement(
                                      "li",
                                      { style: { width: "220px" }, className: "color-muted deal-title" },
                                      React.createElement("i", { className: "ico fa fa-id-badge mr-5" }),
                                      bike._id
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
                                    _this.props.user == null ? React.createElement(
                                      "a",
                                      { href: bike.link, target: "_blank" },
                                      React.createElement(
                                        "button",
                                        { className: "btn btn-sm btn block more-info" },
                                        "Kontakt Info"
                                      )
                                    ) : React.createElement(
                                      "button",
                                      { onClick: _this.deleteFeed.bind(_this, bike._id), className: "btn btn-sm btn block more-info" },
                                      "Slet"
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
                    "a",
                    { onClick: this.increment.bind(this), href: "#" },
                    React.createElement(
                      "button",
                      { className: "btn btn-sm btn block pagination-next" },
                      "Næste Side"
                    )
                  ),
                  this.state.showButton == false ? null : React.createElement(
                    "a",
                    { onClick: this.decrease.bind(this), href: "#" },
                    React.createElement(
                      "button",
                      { className: "btn btn-sm btn block pagination-previous" },
                      "Forrige Side"
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

  return Category;
})(Component);

var stateToProps = function (state) {
  return {
    allbicycles: state.category,
    navbar: state.navbar,
    user: state.account.user
  };
};

var dispatchToProps = function (dispatch) {
  return {
    getAllBikes: function (bike) {
      return dispatch(actions.getAllBikes(bike));
    },
    checkCurrentUser: function (params) {
      return dispatch(actions.checkCurrentUser(params));
    },
    deleteFeed: function (params, id) {
      return dispatch(actions.deleteFeed(params, id));
    }

  };
};
module.exports = connect(stateToProps, dispatchToProps)(Category);