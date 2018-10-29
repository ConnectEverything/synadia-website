webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Particles_ParticleWave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Particles/ParticleWave */ "./components/Particles/ParticleWave.js");
/* harmony import */ var _components_Team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Team */ "./components/Team.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/fran/Documents/Projects/basement/Synadia/synadia-website/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      team: [{
        name: 'Derek Collison',
        position: 'Founder & CEO',
        bio: 'Entrepreneur, Investor, and Technologist. Creator of @nats_io and @cloudfoundry',
        links: {
          twitter: 'derekcollison',
          linkedin: 'derekcollison',
          github: 'derekcollison'
        }
      }, {
        name: 'Colin Sullivan',
        position: 'Product Management',
        bio: 'Product Manager',
        links: {
          twitter: 'ColinSullivan01',
          linkedin: 'colinsullivan',
          github: 'ColinSullivan1'
        }
      }, {
        name: 'Ginger Collison',
        position: 'Community',
        bio: 'Developer Advocate & Community Manager',
        links: {
          twitter: 'crashgingerly',
          linkedin: 'ginger-collison',
          github: 'gcolliso'
        }
      }, {
        name: 'Ivan Kozlovic',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          twitter: 'ivankozlovic',
          linkedin: 'ivankozlovic',
          github: 'kozlovic'
        }
      }, {
        name: 'Waldemar Quevedo',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          twitter: 'wallyqs',
          linkedin: 'waldemarquevedo',
          github: 'wallyqs'
        }
      }, {
        name: 'Alberto Ricart',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          twitter: 'albertoricart',
          linkedin: 'albertoricart',
          github: 'aricart'
        }
      }, {
        name: 'Stephen Asbury',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          twitter: 'thesasbury',
          linkedin: 'stasbury',
          github: 'sasbury'
        }
      }, {
        name: 'David Kemper',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          linkedin: 'david-kemper-531bb038',
          github: 'davidkemper'
        }
      }]
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      aos__WEBPACK_IMPORTED_MODULE_2___default.a.init({
        once: true,
        duration: 800,
        easing: 'ease-in-out'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var foregroundParallax = [{
        start: 'self',
        startOffset: 0,
        duration: 1000,
        easing: 'easeInOut',
        properties: [{
          startValue: -50,
          endValue: 20,
          property: 'translateY'
        }]
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-843018561" + " " + "first-fold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Particles_ParticleWave__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-843018561" + " " + "word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "0",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "C"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "50",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "100",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "150",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "200",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "e"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "250",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "c"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "300",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "t")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-843018561" + " " + "word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "350",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "E"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "400",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "v"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "450",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "e"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "500",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "r"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "550",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "y"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "600",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "t"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "650",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "700",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "i"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "750",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "800",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "g")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "850",
        className: "jsx-843018561" + " " + "freckle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "about",
        className: "jsx-843018561" + " " + "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "foreground",
        parallaxData: foregroundParallax,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "At Synadia, we believe there is an opportunity", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-843018561" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), "to create the first decentralized,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-843018561" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-843018561" + " " + "highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "secure global utility, powered by NATSio,", ' '), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-843018561" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), "to connect all digital systems, services and devices.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "foreground",
        parallaxData: foregroundParallax,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "This offering will be decentralized by design,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-843018561" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }), "secure by default, globally available,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-843018561" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }), "and easy to use and manage."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "team",
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "foreground",
        parallaxData: foregroundParallax,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Meet the Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "With 100+ years of combined experience in engineering and messaging, the good people of Synadia provide a wealth of knowledge aimed at challenging how the world connects.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Team__WEBPACK_IMPORTED_MODULE_6__["default"], {
        members: this.state.team,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "843018561",
        css: ".first-fold.jsx-843018561{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:calc(100vh - 200px);width:100vw;margin:100px auto 0 auto;}h1.jsx-843018561 .freckle.jsx-843018561{display:inline-block;position:relative;}h1.jsx-843018561 .freckle.jsx-843018561:after{position:absolute;right:0;bottom:0;height:1.2rem;width:1.2rem;border-radius:100%;background:var(--horizontal-gradient);-webkit-transform:translate(-15%,-65%);-ms-transform:translate(-15%,-65%);transform:translate(-15%,-65%);}.about.jsx-843018561{margin-bottom:12rem;}.word.jsx-843018561{display:inline-block;}.letter.jsx-843018561{display:inline-block;}.highlight.jsx-843018561{color:var(--color-secondary);}@media (min-width:768px){.first-fold.jsx-843018561{height:calc(100vh - 100px);}.freckle.jsx-843018561:after{content:'';}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrT29CLEFBRzBCLEFBVVEsQUFLSCxBQVdFLEFBSUMsQUFJQSxBQUlRLEFBS0EsQUFHaEIsV0FDYixPQS9CUSxFQVdWLENBaEJvQixBQW9CcEIsQUFJQSxLQWxCVyxDQTJCVCxFQUxGLE1BckJnQixJQU5oQixVQU9lLGFBQ00sWUFuQkcsT0FvQmdCLHNDQUNOLGlDQXBCVCx3RUFxQnpCLDJCQXBCcUIsNkZBQ1EsMkJBQ2YsWUFDYSx5QkFDM0IiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBQbHggZnJvbSAncmVhY3QtcGx4JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFBhcnRpY2xlV2F2ZSBmcm9tICcuLi9jb21wb25lbnRzL1BhcnRpY2xlcy9QYXJ0aWNsZVdhdmUnO1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vY29tcG9uZW50cy9UZWFtJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRlYW06IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdEZXJlayBDb2xsaXNvbicsXG4gICAgICAgICAgcG9zaXRpb246ICdGb3VuZGVyICYgQ0VPJyxcbiAgICAgICAgICBiaW86XG4gICAgICAgICAgICAnRW50cmVwcmVuZXVyLCBJbnZlc3RvciwgYW5kIFRlY2hub2xvZ2lzdC4gQ3JlYXRvciBvZiBAbmF0c19pbyBhbmQgQGNsb3VkZm91bmRyeScsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdkZXJla2NvbGxpc29uJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnZGVyZWtjb2xsaXNvbicsXG4gICAgICAgICAgICBnaXRodWI6ICdkZXJla2NvbGxpc29uJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdDb2xpbiBTdWxsaXZhbicsXG4gICAgICAgICAgcG9zaXRpb246ICdQcm9kdWN0IE1hbmFnZW1lbnQnLFxuICAgICAgICAgIGJpbzogJ1Byb2R1Y3QgTWFuYWdlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdDb2xpblN1bGxpdmFuMDEnLFxuICAgICAgICAgICAgbGlua2VkaW46ICdjb2xpbnN1bGxpdmFuJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ0NvbGluU3VsbGl2YW4xJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdHaW5nZXIgQ29sbGlzb24nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnQ29tbXVuaXR5JyxcbiAgICAgICAgICBiaW86ICdEZXZlbG9wZXIgQWR2b2NhdGUgJiBDb21tdW5pdHkgTWFuYWdlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdjcmFzaGdpbmdlcmx5JyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnZ2luZ2VyLWNvbGxpc29uJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2djb2xsaXNvJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdJdmFuIEtvemxvdmljJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdpdmFua296bG92aWMnLFxuICAgICAgICAgICAgbGlua2VkaW46ICdpdmFua296bG92aWMnLFxuICAgICAgICAgICAgZ2l0aHViOiAna296bG92aWMnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1dhbGRlbWFyIFF1ZXZlZG8nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ3dhbGx5cXMnLFxuICAgICAgICAgICAgbGlua2VkaW46ICd3YWxkZW1hcnF1ZXZlZG8nLFxuICAgICAgICAgICAgZ2l0aHViOiAnd2FsbHlxcydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQWxiZXJ0byBSaWNhcnQnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2FsYmVydG9yaWNhcnQnLFxuICAgICAgICAgICAgbGlua2VkaW46ICdhbGJlcnRvcmljYXJ0JyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2FyaWNhcnQnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1N0ZXBoZW4gQXNidXJ5JyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICd0aGVzYXNidXJ5JyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnc3Rhc2J1cnknLFxuICAgICAgICAgICAgZ2l0aHViOiAnc2FzYnVyeSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRGF2aWQgS2VtcGVyJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIGxpbmtlZGluOiAnZGF2aWQta2VtcGVyLTUzMWJiMDM4JyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2Rhdmlka2VtcGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBBT1MuaW5pdCh7XG4gICAgICBvbmNlOiB0cnVlLFxuICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0J1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGZvcmVncm91bmRQYXJhbGxheCA9IFtcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6ICdzZWxmJyxcbiAgICAgICAgc3RhcnRPZmZzZXQ6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXQnLFxuICAgICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnRWYWx1ZTogLTUwLFxuICAgICAgICAgICAgZW5kVmFsdWU6IDIwLFxuICAgICAgICAgICAgcHJvcGVydHk6ICd0cmFuc2xhdGVZJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmlyc3QtZm9sZFwiPlxuICAgICAgICAgIDxQYXJ0aWNsZVdhdmUgLz5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIj5cbiAgICAgICAgICAgICAgICBDXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNTBcIj5cbiAgICAgICAgICAgICAgICBvXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMTAwXCI+XG4gICAgICAgICAgICAgICAgblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjE1MFwiPlxuICAgICAgICAgICAgICAgIG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIyMDBcIj5cbiAgICAgICAgICAgICAgICBlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMjUwXCI+XG4gICAgICAgICAgICAgICAgY1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjMwMFwiPlxuICAgICAgICAgICAgICAgIHRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtgIGB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjM1MFwiPlxuICAgICAgICAgICAgICAgIEVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI0MDBcIj5cbiAgICAgICAgICAgICAgICB2XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNDUwXCI+XG4gICAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjUwMFwiPlxuICAgICAgICAgICAgICAgIHJcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI1NTBcIj5cbiAgICAgICAgICAgICAgICB5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNjAwXCI+XG4gICAgICAgICAgICAgICAgdFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjY1MFwiPlxuICAgICAgICAgICAgICAgIGhcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI3MDBcIj5cbiAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNzUwXCI+XG4gICAgICAgICAgICAgICAgblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjgwMFwiPlxuICAgICAgICAgICAgICAgIGdcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI4NTBcIiBjbGFzc05hbWU9XCJmcmVja2xlXCI+XG4gICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cImFib3V0XCI+XG4gICAgICAgICAgPFBseCBjbGFzc05hbWU9XCJmb3JlZ3JvdW5kXCIgcGFyYWxsYXhEYXRhPXtmb3JlZ3JvdW5kUGFyYWxsYXh9PlxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICBBdCBTeW5hZGlhLCB3ZSBiZWxpZXZlIHRoZXJlIGlzIGFuIG9wcG9ydHVuaXR5eycgJ31cbiAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3AtLW9ubHlcIiAvPlxuICAgICAgICAgICAgICB0byBjcmVhdGUgdGhlIGZpcnN0IGRlY2VudHJhbGl6ZWQseycgJ31cbiAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3AtLW9ubHlcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5cbiAgICAgICAgICAgICAgICBzZWN1cmUgZ2xvYmFsIHV0aWxpdHksIHBvd2VyZWQgYnkgTkFUU2lvLHsnICd9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3AtLW9ubHlcIiAvPlxuICAgICAgICAgICAgICB0byBjb25uZWN0IGFsbCBkaWdpdGFsIHN5c3RlbXMsIHNlcnZpY2VzIGFuZCBkZXZpY2VzLlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L1BseD5cbiAgICAgICAgICA8UGx4IGNsYXNzTmFtZT1cImZvcmVncm91bmRcIiBwYXJhbGxheERhdGE9e2ZvcmVncm91bmRQYXJhbGxheH0+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIFRoaXMgb2ZmZXJpbmcgd2lsbCBiZSBkZWNlbnRyYWxpemVkIGJ5IGRlc2lnbix7JyAnfVxuICAgICAgICAgICAgICA8YnIgY2xhc3NOYW1lPVwiZGVza3RvcC0tb25seVwiIC8+XG4gICAgICAgICAgICAgIHNlY3VyZSBieSBkZWZhdWx0LCBnbG9iYWxseSBhdmFpbGFibGUseycgJ31cbiAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3AtLW9ubHlcIiAvPlxuICAgICAgICAgICAgICBhbmQgZWFzeSB0byB1c2UgYW5kIG1hbmFnZS5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9QbHg+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJ0ZWFtXCI+XG4gICAgICAgICAgPFBseCBjbGFzc05hbWU9XCJmb3JlZ3JvdW5kXCIgcGFyYWxsYXhEYXRhPXtmb3JlZ3JvdW5kUGFyYWxsYXh9PlxuICAgICAgICAgICAgPGgyPk1lZXQgdGhlIFRlYW08L2gyPlxuICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICBXaXRoIDEwMCsgeWVhcnMgb2YgY29tYmluZWQgZXhwZXJpZW5jZSBpbiBlbmdpbmVlcmluZyBhbmRcbiAgICAgICAgICAgICAgbWVzc2FnaW5nLCB0aGUgZ29vZCBwZW9wbGUgb2YgU3luYWRpYSBwcm92aWRlIGEgd2VhbHRoIG9mXG4gICAgICAgICAgICAgIGtub3dsZWRnZSBhaW1lZCBhdCBjaGFsbGVuZ2luZyBob3cgdGhlIHdvcmxkIGNvbm5lY3RzLlxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICA8L1BseD5cbiAgICAgICAgICA8VGVhbSBtZW1iZXJzPXt0aGlzLnN0YXRlLnRlYW19IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZpcnN0LWZvbGQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBtYXJnaW46IDEwMHB4IGF1dG8gMCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIC5mcmVja2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSAuZnJlY2tsZTphZnRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGhlaWdodDogMS4ycmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Jpem9udGFsLWdyYWRpZW50KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNSUsIC02NSUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hYm91dCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud29yZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxldHRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZ2hsaWdodCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5maXJzdC1mb2xkIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZyZWNrbGU6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbWFpbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/pages/index.js */",
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.00e5a7e2de3d61f5c996.hot-update.js.map