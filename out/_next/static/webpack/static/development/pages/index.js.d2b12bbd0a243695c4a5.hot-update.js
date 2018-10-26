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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Team */ "./components/Team.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        className: "jsx-3360324320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-3360324320" + " " + "first-fold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3360324320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3360324320" + " " + "word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "0",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "C"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "50",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "100",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "150",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "200",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "e"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "250",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "c"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "300",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "t")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3360324320" + " " + "word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "350",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "E"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "400",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "v"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "450",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "e"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "500",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "r"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "550",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "y"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "600",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "t"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "650",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "700",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "i"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "750",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "800",
        className: "jsx-3360324320" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "g")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "850",
        className: "jsx-3360324320" + " " + "freckle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "about",
        className: "jsx-3360324320" + " " + "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3360324320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "At Synadia, we believe there is an opportunity to create the first decentralized, secure global utility, powered by NATSio, to connect all digital systems, services and devices."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3360324320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "This offering will be decentralized by design, secure by default, globally available, and easy to use and manage.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "team",
        className: "jsx-3360324320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-3360324320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Meet the Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-3360324320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "With 100+ years of combined experience in engineering and messaging, the good people of Synadia provide a wealth of knowledge aimed at challenging how the world connects."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Team__WEBPACK_IMPORTED_MODULE_4__["default"], {
        members: this.state.team,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3360324320",
        css: ".first-fold.jsx-3360324320{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:calc(100vh - 105px);width:100vw;margin:105px auto 0 auto;}h1.jsx-3360324320 .freckle.jsx-3360324320{display:inline-block;position:relative;}h1.jsx-3360324320 .freckle.jsx-3360324320:after{position:absolute;right:0;bottom:0;height:1.15rem;width:1.15rem;border-radius:100%;background:var(--horizontal-gradient);-webkit-transform:translate(-18%,-70%);-ms-transform:translate(-18%,-70%);transform:translate(-18%,-70%);}.about.jsx-3360324320{margin-bottom:12rem;}.word.jsx-3360324320{display:inline-block;}.letter.jsx-3360324320{display:inline-block;}@media (min-width:768px){.freckle.jsx-3360324320:after{content:'';}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTW9CLEFBRzBCLEFBVVEsQUFLSCxBQVdFLEFBSUMsQUFJQSxBQUtSLFdBQ2IsT0F4QlEsRUFXVixDQWhCb0IsQUFvQnBCLEFBSUEsS0FsQlcsU0FDTSxJQU5qQixXQU9nQixjQUNLLFVBbkJHLFNBb0JnQixzQ0FDTiwrQkFwQlQsMEVBcUJ6Qix5QkFwQnFCLDZGQUNRLDJCQUNmLFlBQ2EseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBUZWFtIGZyb20gJy4uL2NvbXBvbmVudHMvVGVhbSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZWFtOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRGVyZWsgQ29sbGlzb24nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRm91bmRlciAmIENFTycsXG4gICAgICAgICAgYmlvOlxuICAgICAgICAgICAgJ0VudHJlcHJlbmV1ciwgSW52ZXN0b3IsIGFuZCBUZWNobm9sb2dpc3QuIENyZWF0b3Igb2YgQG5hdHNfaW8gYW5kIEBjbG91ZGZvdW5kcnknLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnZGVyZWtjb2xsaXNvbicsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2RlcmVrY29sbGlzb24nLFxuICAgICAgICAgICAgZ2l0aHViOiAnZGVyZWtjb2xsaXNvbidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQ29saW4gU3VsbGl2YW4nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnUHJvZHVjdCBNYW5hZ2VtZW50JyxcbiAgICAgICAgICBiaW86ICdQcm9kdWN0IE1hbmFnZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnQ29saW5TdWxsaXZhbjAxJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnY29saW5zdWxsaXZhbicsXG4gICAgICAgICAgICBnaXRodWI6ICdDb2xpblN1bGxpdmFuMSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR2luZ2VyIENvbGxpc29uJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0NvbW11bml0eScsXG4gICAgICAgICAgYmlvOiAnRGV2ZWxvcGVyIEFkdm9jYXRlICYgQ29tbXVuaXR5IE1hbmFnZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnY3Jhc2hnaW5nZXJseScsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2dpbmdlci1jb2xsaXNvbicsXG4gICAgICAgICAgICBnaXRodWI6ICdnY29sbGlzbydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnSXZhbiBLb3psb3ZpYycsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnaXZhbmtvemxvdmljJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnaXZhbmtvemxvdmljJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2tvemxvdmljJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdXYWxkZW1hciBRdWV2ZWRvJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICd3YWxseXFzJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnd2FsZGVtYXJxdWV2ZWRvJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ3dhbGx5cXMnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0FsYmVydG8gUmljYXJ0JyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdhbGJlcnRvcmljYXJ0JyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnYWxiZXJ0b3JpY2FydCcsXG4gICAgICAgICAgICBnaXRodWI6ICdhcmljYXJ0J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdTdGVwaGVuIEFzYnVyeScsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAndGhlc2FzYnVyeScsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ3N0YXNidXJ5JyxcbiAgICAgICAgICAgIGdpdGh1YjogJ3Nhc2J1cnknXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0RhdmlkIEtlbXBlcicsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICBsaW5rZWRpbjogJ2RhdmlkLWtlbXBlci01MzFiYjAzOCcsXG4gICAgICAgICAgICBnaXRodWI6ICdkYXZpZGtlbXBlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQU9TLmluaXQoe1xuICAgICAgb25jZTogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICBlYXNpbmc6ICdlYXNlLWluLW91dCdcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmlyc3QtZm9sZFwiPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMFwiPlxuICAgICAgICAgICAgICAgIENcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI1MFwiPlxuICAgICAgICAgICAgICAgIG9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMDBcIj5cbiAgICAgICAgICAgICAgICBuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMTUwXCI+XG4gICAgICAgICAgICAgICAgblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjIwMFwiPlxuICAgICAgICAgICAgICAgIGVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIyNTBcIj5cbiAgICAgICAgICAgICAgICBjXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMzAwXCI+XG4gICAgICAgICAgICAgICAgdFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2AgYH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMzUwXCI+XG4gICAgICAgICAgICAgICAgRVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjQwMFwiPlxuICAgICAgICAgICAgICAgIHZcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI0NTBcIj5cbiAgICAgICAgICAgICAgICBlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNTAwXCI+XG4gICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjU1MFwiPlxuICAgICAgICAgICAgICAgIHlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI2MDBcIj5cbiAgICAgICAgICAgICAgICB0XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNjUwXCI+XG4gICAgICAgICAgICAgICAgaFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjcwMFwiPlxuICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI3NTBcIj5cbiAgICAgICAgICAgICAgICBuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiODAwXCI+XG4gICAgICAgICAgICAgICAgZ1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjg1MFwiIGNsYXNzTmFtZT1cImZyZWNrbGVcIj5cbiAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3NOYW1lPVwiYWJvdXRcIj5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICBBdCBTeW5hZGlhLCB3ZSBiZWxpZXZlIHRoZXJlIGlzIGFuIG9wcG9ydHVuaXR5IHRvIGNyZWF0ZSB0aGUgZmlyc3RcbiAgICAgICAgICAgIGRlY2VudHJhbGl6ZWQsIHNlY3VyZSBnbG9iYWwgdXRpbGl0eSwgcG93ZXJlZCBieSBOQVRTaW8sIHRvIGNvbm5lY3RcbiAgICAgICAgICAgIGFsbCBkaWdpdGFsIHN5c3RlbXMsIHNlcnZpY2VzIGFuZCBkZXZpY2VzLlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgVGhpcyBvZmZlcmluZyB3aWxsIGJlIGRlY2VudHJhbGl6ZWQgYnkgZGVzaWduLCBzZWN1cmUgYnkgZGVmYXVsdCxcbiAgICAgICAgICAgIGdsb2JhbGx5IGF2YWlsYWJsZSwgYW5kIGVhc3kgdG8gdXNlIGFuZCBtYW5hZ2UuXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBpZD1cInRlYW1cIj5cbiAgICAgICAgICA8aDI+TWVldCB0aGUgVGVhbTwvaDI+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgV2l0aCAxMDArIHllYXJzIG9mIGNvbWJpbmVkIGV4cGVyaWVuY2UgaW4gZW5naW5lZXJpbmcgYW5kIG1lc3NhZ2luZyxcbiAgICAgICAgICAgIHRoZSBnb29kIHBlb3BsZSBvZiBTeW5hZGlhIHByb3ZpZGUgYSB3ZWFsdGggb2Yga25vd2xlZGdlIGFpbWVkIGF0XG4gICAgICAgICAgICBjaGFsbGVuZ2luZyBob3cgdGhlIHdvcmxkIGNvbm5lY3RzLlxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPFRlYW0gbWVtYmVycz17dGhpcy5zdGF0ZS50ZWFtfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5maXJzdC1mb2xkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA1cHgpO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiAxMDVweCBhdXRvIDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSAuZnJlY2tsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEgLmZyZWNrbGU6YWZ0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuMTVyZW07XG4gICAgICAgICAgICB3aWR0aDogMS4xNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Jpem9udGFsLWdyYWRpZW50KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xOCUsIC03MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hYm91dCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud29yZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxldHRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAuZnJlY2tsZTphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/pages/index.js */",
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
//# sourceMappingURL=index.js.d2b12bbd0a243695c4a5.hot-update.js.map