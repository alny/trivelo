"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Howto = (function (Component) {
  function Howto() {
    _classCallCheck(this, Howto);

    if (Component != null) {
      Component.apply(this, arguments);
    }
  }

  _inherits(Howto, Component);

  _prototypeProperties(Howto, null, {
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
                      { className: "col-xs-12 col-md-6", style: { marginBottom: "-30px" } },
                      React.createElement(
                        "div",
                        { className: "contact-area-col contact-info" },
                        React.createElement(
                          "div",
                          { className: "contact-info" },
                          React.createElement(
                            "h3",
                            { className: "mb-20" },
                            React.createElement(
                              "span",
                              { className: "how-bullet" },
                              "1"
                            ),
                            "Tilmeld dig en af følgende Facebook Grupper"
                          ),
                          React.createElement(
                            "p",
                            null,
                            "Klik på en af følgende facebook grupper, og tilmeld dig en eller flere."
                          ),
                          React.createElement(
                            "ul",
                            { className: "verify-text" },
                            React.createElement(
                              "li",
                              null,
                              React.createElement(
                                "a",
                                { href: "#", target: "_blank" },
                                "Køb, salg og bytte Trivelo"
                              )
                            ),
                            React.createElement(
                              "li",
                              null,
                              React.createElement(
                                "a",
                                { href: "https://www.facebook.com/groups/brugtmarkedcykling/", target: "_blank" },
                                "Sælges/købes/byttes CYKLING!"
                              )
                            ),
                            React.createElement(
                              "li",
                              null,
                              React.createElement(
                                "a",
                                { href: "https://www.facebook.com/groups/129774047164536/", target: "_blank" },
                                "Køb, salg og bytte Triathlon"
                              )
                            ),
                            React.createElement(
                              "li",
                              null,
                              React.createElement(
                                "a",
                                { href: "https://www.facebook.com/groups/306677009409252/", target: "_blank" },
                                "Køb og salg af cykler og cykel dele"
                              )
                            ),
                            React.createElement(
                              "li",
                              null,
                              React.createElement(
                                "a",
                                { href: "https://www.facebook.com/groups/163523893811017/", target: "_blank" },
                                "Løbeudstyr - Køb, salg og bytte"
                              )
                            )
                          )
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-xs-12 col-md-6", style: { marginBottom: "30px" } },
                      React.createElement(
                        "div",
                        { className: "contact-area-col contact-form" },
                        React.createElement(
                          "h3",
                          { className: "mb-20" },
                          React.createElement(
                            "span",
                            { className: "how-bullet" },
                            "2"
                          ),
                          "Opret et Salgsopslag på Facebook"
                        ),
                        React.createElement(
                          "p",
                          null,
                          "Dit salgsopslag skal være fyldstgørende og indeholde følgende:"
                        ),
                        React.createElement(
                          "ul",
                          { className: "verify-text" },
                          React.createElement(
                            "li",
                            null,
                            "Mærke/brand"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Størrelse"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Årgang"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Pris"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Lokation, hvor i landet sælges det"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Kort tekst om genstanden"
                          )
                        )
                      )
                    ),
                    React.createElement("br", null),
                    React.createElement(
                      "div",
                      { className: "col-xs-12 col-md-6" },
                      React.createElement(
                        "div",
                        { className: "contact-area-col contact-form" },
                        React.createElement(
                          "h3",
                          { className: "mb-20" },
                          React.createElement(
                            "span",
                            { className: "how-bullet" },
                            "3"
                          ),
                          "Vores system vil dernæst finde dit Opslag "
                        ),
                        React.createElement(
                          "p",
                          null,
                          "Du har nu fået oprettet et opslag, og skal ikke gøre mere."
                        ),
                        React.createElement(
                          "ul",
                          { className: "verify-text" },
                          React.createElement(
                            "li",
                            null,
                            "Dit opslag findes af vores system"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Systemet kategoriserer og sorterer dit opslag"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Dernæst skal opslaget godkendes før det er live"
                          )
                        )
                      )
                    ),
                    React.createElement("br", null),
                    React.createElement(
                      "div",
                      { className: "col-xs-12 col-md-6", style: { marginBottom: "50px" } },
                      React.createElement(
                        "div",
                        { className: "contact-area-col contact-form" },
                        React.createElement(
                          "h3",
                          { className: "mb-20" },
                          React.createElement(
                            "span",
                            { className: "how-bullet" },
                            "4"
                          ),
                          "Dit opslag er nu tilgængeligt på Trivelo"
                        ),
                        React.createElement(
                          "p",
                          null,
                          "Hvis dit opslag er fyldstgørende nok, vil dit opslag nu kunne finde af andre."
                        ),
                        React.createElement(
                          "ul",
                          { className: "verify-text" },
                          React.createElement(
                            "li",
                            null,
                            "Dit opslag er nu meget nemmere tilgængeligt for en mulig køber"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Med mulighed for at sorterer og filterer, findes tingende meget hurtigere"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "OBS: Husk at slette dit opslag på Facebook, når din varer er solgt"
                          )
                        )
                      )
                    ),
                    React.createElement("br", null)
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

  return Howto;
})(Component);

module.exports = Howto;