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
/* harmony import */ var _components_Particles_ParticleWave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Particles/ParticleWave */ "./components/Particles/ParticleWave.js");
/* harmony import */ var _components_Team__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Team */ "./components/Team.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
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
        className: "jsx-528875149",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-528875149" + " " + "first-fold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Particles_ParticleWave__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-528875149",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-528875149" + " " + "word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "0",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "C"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "50",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "100",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "150",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "200",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "e"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "250",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "c"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "300",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "t")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-528875149" + " " + "word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "350",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "E"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "400",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "v"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "450",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "e"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "500",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "r"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "550",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "y"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "600",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "t"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "650",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "700",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "i"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "750",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "800",
        className: "jsx-528875149" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "g")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "850",
        className: "jsx-528875149" + " " + "freckle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "about",
        className: "jsx-528875149" + " " + "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-528875149",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "At Synadia, we believe there is an opportunity ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-528875149",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }), "to create the first decentralized,", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-528875149",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-528875149" + " " + "highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "secure global utility, powered by NATSio,"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-528875149",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), "to connect all digital systems, services and devices."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-528875149",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "This offering will be decentralized by design, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-528875149",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }), "secure by default, globally available, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-528875149",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), "and easy to use and manage.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "team",
        className: "jsx-528875149",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-528875149",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Meet the Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-528875149",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "With 100+ years of combined experience in engineering and messaging, the good people of Synadia provide a wealth of knowledge aimed at challenging how the world connects."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Team__WEBPACK_IMPORTED_MODULE_5__["default"], {
        members: this.state.team,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "528875149",
        css: ".first-fold.jsx-528875149{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;width:100vw;margin:105px auto 0 auto;}h1.jsx-528875149 .freckle.jsx-528875149{display:inline-block;position:relative;}h1.jsx-528875149 .freckle.jsx-528875149:after{position:absolute;right:0;bottom:0;height:1.2rem;width:1.2rem;border-radius:100%;background:var(--horizontal-gradient);-webkit-transform:translate(-15%,-65%);-ms-transform:translate(-15%,-65%);transform:translate(-15%,-65%);}.about.jsx-528875149{margin-bottom:12rem;}.word.jsx-528875149{display:inline-block;}.letter.jsx-528875149{display:inline-block;}.highlight.jsx-528875149{color:var(--color-secondary);}@media (min-width:768px){.freckle.jsx-528875149:after{content:'';}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3TW9CLEFBRzBCLEFBVVEsQUFLSCxBQVdFLEFBSUMsQUFJQSxBQUlRLEFBS2hCLFdBQ2IsT0E1QlEsRUFXVixDQWhCb0IsQUFvQnBCLEFBSUEsS0FsQlcsR0FzQlgsTUFyQmdCLElBTmhCLFVBT2UsYUFDTSxZQW5CRyxPQW9CZ0Isc0NBQ04saUNBcEJULHdFQXFCekIsMkJBcEJxQiw2RkFDTixhQUNELFlBQ2EseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBQYXJ0aWNsZVdhdmUgZnJvbSAnLi4vY29tcG9uZW50cy9QYXJ0aWNsZXMvUGFydGljbGVXYXZlJztcbmltcG9ydCBUZWFtIGZyb20gJy4uL2NvbXBvbmVudHMvVGVhbSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZWFtOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRGVyZWsgQ29sbGlzb24nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRm91bmRlciAmIENFTycsXG4gICAgICAgICAgYmlvOlxuICAgICAgICAgICAgJ0VudHJlcHJlbmV1ciwgSW52ZXN0b3IsIGFuZCBUZWNobm9sb2dpc3QuIENyZWF0b3Igb2YgQG5hdHNfaW8gYW5kIEBjbG91ZGZvdW5kcnknLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnZGVyZWtjb2xsaXNvbicsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2RlcmVrY29sbGlzb24nLFxuICAgICAgICAgICAgZ2l0aHViOiAnZGVyZWtjb2xsaXNvbidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQ29saW4gU3VsbGl2YW4nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnUHJvZHVjdCBNYW5hZ2VtZW50JyxcbiAgICAgICAgICBiaW86ICdQcm9kdWN0IE1hbmFnZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnQ29saW5TdWxsaXZhbjAxJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnY29saW5zdWxsaXZhbicsXG4gICAgICAgICAgICBnaXRodWI6ICdDb2xpblN1bGxpdmFuMSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR2luZ2VyIENvbGxpc29uJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0NvbW11bml0eScsXG4gICAgICAgICAgYmlvOiAnRGV2ZWxvcGVyIEFkdm9jYXRlICYgQ29tbXVuaXR5IE1hbmFnZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnY3Jhc2hnaW5nZXJseScsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2dpbmdlci1jb2xsaXNvbicsXG4gICAgICAgICAgICBnaXRodWI6ICdnY29sbGlzbydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnSXZhbiBLb3psb3ZpYycsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnaXZhbmtvemxvdmljJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnaXZhbmtvemxvdmljJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2tvemxvdmljJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdXYWxkZW1hciBRdWV2ZWRvJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICd3YWxseXFzJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnd2FsZGVtYXJxdWV2ZWRvJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ3dhbGx5cXMnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0FsYmVydG8gUmljYXJ0JyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdhbGJlcnRvcmljYXJ0JyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnYWxiZXJ0b3JpY2FydCcsXG4gICAgICAgICAgICBnaXRodWI6ICdhcmljYXJ0J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdTdGVwaGVuIEFzYnVyeScsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAndGhlc2FzYnVyeScsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ3N0YXNidXJ5JyxcbiAgICAgICAgICAgIGdpdGh1YjogJ3Nhc2J1cnknXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0RhdmlkIEtlbXBlcicsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICBsaW5rZWRpbjogJ2RhdmlkLWtlbXBlci01MzFiYjAzOCcsXG4gICAgICAgICAgICBnaXRodWI6ICdkYXZpZGtlbXBlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQU9TLmluaXQoe1xuICAgICAgb25jZTogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICBlYXNpbmc6ICdlYXNlLWluLW91dCdcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmlyc3QtZm9sZFwiPlxuICAgICAgICAgIDxQYXJ0aWNsZVdhdmUgLz5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIj5cbiAgICAgICAgICAgICAgICBDXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNTBcIj5cbiAgICAgICAgICAgICAgICBvXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMTAwXCI+XG4gICAgICAgICAgICAgICAgblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjE1MFwiPlxuICAgICAgICAgICAgICAgIG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIyMDBcIj5cbiAgICAgICAgICAgICAgICBlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMjUwXCI+XG4gICAgICAgICAgICAgICAgY1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjMwMFwiPlxuICAgICAgICAgICAgICAgIHRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtgIGB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjM1MFwiPlxuICAgICAgICAgICAgICAgIEVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI0MDBcIj5cbiAgICAgICAgICAgICAgICB2XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNDUwXCI+XG4gICAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjUwMFwiPlxuICAgICAgICAgICAgICAgIHJcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI1NTBcIj5cbiAgICAgICAgICAgICAgICB5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNjAwXCI+XG4gICAgICAgICAgICAgICAgdFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjY1MFwiPlxuICAgICAgICAgICAgICAgIGhcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI3MDBcIj5cbiAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNzUwXCI+XG4gICAgICAgICAgICAgICAgblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjgwMFwiPlxuICAgICAgICAgICAgICAgIGdcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI4NTBcIiBjbGFzc05hbWU9XCJmcmVja2xlXCI+XG4gICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cImFib3V0XCI+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgQXQgU3luYWRpYSwgd2UgYmVsaWV2ZSB0aGVyZSBpcyBhbiBvcHBvcnR1bml0eSA8YnIgLz5cbiAgICAgICAgICAgIHRvIGNyZWF0ZSB0aGUgZmlyc3QgZGVjZW50cmFsaXplZCxcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+XG4gICAgICAgICAgICAgIHNlY3VyZSBnbG9iYWwgdXRpbGl0eSwgcG93ZXJlZCBieSBOQVRTaW8sXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHRvIGNvbm5lY3QgYWxsIGRpZ2l0YWwgc3lzdGVtcywgc2VydmljZXMgYW5kIGRldmljZXMuXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICBUaGlzIG9mZmVyaW5nIHdpbGwgYmUgZGVjZW50cmFsaXplZCBieSBkZXNpZ24sIDxiciAvPlxuICAgICAgICAgICAgc2VjdXJlIGJ5IGRlZmF1bHQsIGdsb2JhbGx5IGF2YWlsYWJsZSwgPGJyIC8+XG4gICAgICAgICAgICBhbmQgZWFzeSB0byB1c2UgYW5kIG1hbmFnZS5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwidGVhbVwiPlxuICAgICAgICAgIDxoMj5NZWV0IHRoZSBUZWFtPC9oMj5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICBXaXRoIDEwMCsgeWVhcnMgb2YgY29tYmluZWQgZXhwZXJpZW5jZSBpbiBlbmdpbmVlcmluZyBhbmQgbWVzc2FnaW5nLFxuICAgICAgICAgICAgdGhlIGdvb2QgcGVvcGxlIG9mIFN5bmFkaWEgcHJvdmlkZSBhIHdlYWx0aCBvZiBrbm93bGVkZ2UgYWltZWQgYXRcbiAgICAgICAgICAgIGNoYWxsZW5naW5nIGhvdyB0aGUgd29ybGQgY29ubmVjdHMuXG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8VGVhbSBtZW1iZXJzPXt0aGlzLnN0YXRlLnRlYW19IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZpcnN0LWZvbGQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiAxMDVweCBhdXRvIDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSAuZnJlY2tsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEgLmZyZWNrbGU6YWZ0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjJyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taG9yaXpvbnRhbC1ncmFkaWVudCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUlLCAtNjUlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWJvdXQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndvcmQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sZXR0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAuZnJlY2tsZTphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/pages/index.js */",
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
//# sourceMappingURL=index.js.6f7166b634b21151ab8e.hot-update.js.map