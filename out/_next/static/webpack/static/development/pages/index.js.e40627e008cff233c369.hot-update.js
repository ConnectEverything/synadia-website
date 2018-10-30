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
          startValue: 100,
          endValue: -50,
          property: 'translateY'
        }]
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        className: "jsx-2243931159",
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
        className: "jsx-2243931159" + " " + "first-fold",
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
        className: "jsx-2243931159",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Connect Everything", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2243931159" + " " + "freckle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "about",
        className: "jsx-2243931159" + " " + "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "foreground",
        parallaxData: foregroundParallax,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-2243931159",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "At Synadia, we believe there is an opportunity", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2243931159" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), "to create the first decentralized,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2243931159" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2243931159" + " " + "highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "secure global utility, powered by NATSio,", ' '), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2243931159" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), "to connect all digital systems, services and devices.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "foreground",
        parallaxData: foregroundParallax,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-2243931159",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "This offering will be decentralized by design,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2243931159" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), "secure by default, globally available,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2243931159" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), "and easy to use and manage."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "team",
        className: "jsx-2243931159",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "foreground",
        parallaxData: foregroundParallax,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2243931159",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Meet the Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-2243931159",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "With 100+ years of combined experience in engineering and messaging, the good people of Synadia provide a wealth of knowledge aimed at challenging how the world connects.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Team__WEBPACK_IMPORTED_MODULE_6__["default"], {
        members: this.state.team,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2243931159",
        css: ".first-fold.jsx-2243931159{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:calc(100vh - 200px);width:100vw;margin:100px auto 0 auto;}h1.jsx-2243931159 .freckle.jsx-2243931159{display:inline-block;position:relative;}h1.jsx-2243931159 .freckle.jsx-2243931159:after{position:absolute;right:0;bottom:0;height:1.2rem;width:1.2rem;border-radius:100%;background:var(--horizontal-gradient);-webkit-transform:translate(-15%,-65%);-ms-transform:translate(-15%,-65%);transform:translate(-15%,-65%);}.about.jsx-2243931159{margin-bottom:12rem;}.highlight.jsx-2243931159{color:var(--color-secondary);}@media (min-width:768px){.first-fold.jsx-2243931159{height:75vh;margin-bottom:5vh;}.freckle.jsx-2243931159:after{content:'';}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5S29CLEFBRzBCLEFBVVEsQUFLSCxBQVdFLEFBSVMsQUFLZixBQUlELFdBQ2IsQ0FKb0IsTUFwQlosRUFXVixDQWhCb0IsS0FNVCxHQWNYLENBTUUsS0FuQmMsSUFOaEIsVUFPZSxhQUNNLFlBbkJHLE9Bb0JnQixzQ0FDTixpQ0FwQlQsd0VBcUJ6QiwyQkFwQnFCLDZGQUNRLDJCQUNmLFlBQ2EseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgUGx4IGZyb20gJ3JlYWN0LXBseCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBQYXJ0aWNsZVdhdmUgZnJvbSAnLi4vY29tcG9uZW50cy9QYXJ0aWNsZXMvUGFydGljbGVXYXZlJztcbmltcG9ydCBUZWFtIGZyb20gJy4uL2NvbXBvbmVudHMvVGVhbSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZWFtOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRGVyZWsgQ29sbGlzb24nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRm91bmRlciAmIENFTycsXG4gICAgICAgICAgYmlvOlxuICAgICAgICAgICAgJ0VudHJlcHJlbmV1ciwgSW52ZXN0b3IsIGFuZCBUZWNobm9sb2dpc3QuIENyZWF0b3Igb2YgQG5hdHNfaW8gYW5kIEBjbG91ZGZvdW5kcnknLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnZGVyZWtjb2xsaXNvbicsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2RlcmVrY29sbGlzb24nLFxuICAgICAgICAgICAgZ2l0aHViOiAnZGVyZWtjb2xsaXNvbidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQ29saW4gU3VsbGl2YW4nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnUHJvZHVjdCBNYW5hZ2VtZW50JyxcbiAgICAgICAgICBiaW86ICdQcm9kdWN0IE1hbmFnZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnQ29saW5TdWxsaXZhbjAxJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnY29saW5zdWxsaXZhbicsXG4gICAgICAgICAgICBnaXRodWI6ICdDb2xpblN1bGxpdmFuMSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR2luZ2VyIENvbGxpc29uJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0NvbW11bml0eScsXG4gICAgICAgICAgYmlvOiAnRGV2ZWxvcGVyIEFkdm9jYXRlICYgQ29tbXVuaXR5IE1hbmFnZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnY3Jhc2hnaW5nZXJseScsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2dpbmdlci1jb2xsaXNvbicsXG4gICAgICAgICAgICBnaXRodWI6ICdnY29sbGlzbydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnSXZhbiBLb3psb3ZpYycsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnaXZhbmtvemxvdmljJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnaXZhbmtvemxvdmljJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2tvemxvdmljJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdXYWxkZW1hciBRdWV2ZWRvJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICd3YWxseXFzJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnd2FsZGVtYXJxdWV2ZWRvJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ3dhbGx5cXMnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0FsYmVydG8gUmljYXJ0JyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdhbGJlcnRvcmljYXJ0JyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnYWxiZXJ0b3JpY2FydCcsXG4gICAgICAgICAgICBnaXRodWI6ICdhcmljYXJ0J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdTdGVwaGVuIEFzYnVyeScsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAndGhlc2FzYnVyeScsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ3N0YXNidXJ5JyxcbiAgICAgICAgICAgIGdpdGh1YjogJ3Nhc2J1cnknXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0RhdmlkIEtlbXBlcicsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICBsaW5rZWRpbjogJ2RhdmlkLWtlbXBlci01MzFiYjAzOCcsXG4gICAgICAgICAgICBnaXRodWI6ICdkYXZpZGtlbXBlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQU9TLmluaXQoe1xuICAgICAgb25jZTogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICBlYXNpbmc6ICdlYXNlLWluLW91dCdcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmb3JlZ3JvdW5kUGFyYWxsYXggPSBbXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAnc2VsZicsXG4gICAgICAgIHN0YXJ0T2Zmc2V0OiAwLFxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcbiAgICAgICAgcHJvcGVydGllczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IDEwMCxcbiAgICAgICAgICAgIGVuZFZhbHVlOiAtNTAsXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ3RyYW5zbGF0ZVknXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmaXJzdC1mb2xkXCI+XG4gICAgICAgICAgPFBhcnRpY2xlV2F2ZSAvPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIENvbm5lY3QgRXZlcnl0aGluZ1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmVja2xlXCI+LjwvZGl2PlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cImFib3V0XCI+XG4gICAgICAgICAgPFBseCBjbGFzc05hbWU9XCJmb3JlZ3JvdW5kXCIgcGFyYWxsYXhEYXRhPXtmb3JlZ3JvdW5kUGFyYWxsYXh9PlxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICBBdCBTeW5hZGlhLCB3ZSBiZWxpZXZlIHRoZXJlIGlzIGFuIG9wcG9ydHVuaXR5eycgJ31cbiAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3AtLW9ubHlcIiAvPlxuICAgICAgICAgICAgICB0byBjcmVhdGUgdGhlIGZpcnN0IGRlY2VudHJhbGl6ZWQseycgJ31cbiAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3AtLW9ubHlcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5cbiAgICAgICAgICAgICAgICBzZWN1cmUgZ2xvYmFsIHV0aWxpdHksIHBvd2VyZWQgYnkgTkFUU2lvLHsnICd9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3AtLW9ubHlcIiAvPlxuICAgICAgICAgICAgICB0byBjb25uZWN0IGFsbCBkaWdpdGFsIHN5c3RlbXMsIHNlcnZpY2VzIGFuZCBkZXZpY2VzLlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L1BseD5cbiAgICAgICAgICA8UGx4IGNsYXNzTmFtZT1cImZvcmVncm91bmRcIiBwYXJhbGxheERhdGE9e2ZvcmVncm91bmRQYXJhbGxheH0+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIFRoaXMgb2ZmZXJpbmcgd2lsbCBiZSBkZWNlbnRyYWxpemVkIGJ5IGRlc2lnbix7JyAnfVxuICAgICAgICAgICAgICA8YnIgY2xhc3NOYW1lPVwiZGVza3RvcC0tb25seVwiIC8+XG4gICAgICAgICAgICAgIHNlY3VyZSBieSBkZWZhdWx0LCBnbG9iYWxseSBhdmFpbGFibGUseycgJ31cbiAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3AtLW9ubHlcIiAvPlxuICAgICAgICAgICAgICBhbmQgZWFzeSB0byB1c2UgYW5kIG1hbmFnZS5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9QbHg+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJ0ZWFtXCI+XG4gICAgICAgICAgPFBseCBjbGFzc05hbWU9XCJmb3JlZ3JvdW5kXCIgcGFyYWxsYXhEYXRhPXtmb3JlZ3JvdW5kUGFyYWxsYXh9PlxuICAgICAgICAgICAgPGgyPk1lZXQgdGhlIFRlYW08L2gyPlxuICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICBXaXRoIDEwMCsgeWVhcnMgb2YgY29tYmluZWQgZXhwZXJpZW5jZSBpbiBlbmdpbmVlcmluZyBhbmRcbiAgICAgICAgICAgICAgbWVzc2FnaW5nLCB0aGUgZ29vZCBwZW9wbGUgb2YgU3luYWRpYSBwcm92aWRlIGEgd2VhbHRoIG9mXG4gICAgICAgICAgICAgIGtub3dsZWRnZSBhaW1lZCBhdCBjaGFsbGVuZ2luZyBob3cgdGhlIHdvcmxkIGNvbm5lY3RzLlxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICA8L1BseD5cbiAgICAgICAgICA8VGVhbSBtZW1iZXJzPXt0aGlzLnN0YXRlLnRlYW19IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZpcnN0LWZvbGQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBtYXJnaW46IDEwMHB4IGF1dG8gMCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIC5mcmVja2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSAuZnJlY2tsZTphZnRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGhlaWdodDogMS4ycmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Jpem9udGFsLWdyYWRpZW50KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNSUsIC02NSUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hYm91dCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLmZpcnN0LWZvbGQge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDc1dmg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mcmVja2xlOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/pages/index.js */",
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
//# sourceMappingURL=index.js.e40627e008cff233c369.hot-update.js.map