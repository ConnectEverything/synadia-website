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
        className: "jsx-1786158661",
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
        className: "jsx-1786158661" + " " + "first-fold",
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
        className: "jsx-1786158661",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Connect Everything", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1786158661" + " " + "freckle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "about",
        className: "jsx-1786158661" + " " + "about",
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
        className: "jsx-1786158661",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "At Synadia, we believe there is an opportunity", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1786158661" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), "to create the first decentralized,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1786158661" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1786158661" + " " + "highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "secure global utility, powered by NATSio,", ' '), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1786158661" + " " + "desktop--only",
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
        className: "jsx-1786158661",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "This offering will be decentralized by design,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1786158661" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), "secure by default, globally available,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1786158661" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), "and easy to use and manage."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "team",
        className: "jsx-1786158661",
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
        className: "jsx-1786158661",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Meet the Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1786158661",
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
        styleId: "1786158661",
        css: ".first-fold.jsx-1786158661{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:calc(100vh - 200px);width:100vw;margin:100px auto 0 auto;}h1.jsx-1786158661 .freckle.jsx-1786158661{display:inline-block;position:relative;}h1.jsx-1786158661 .freckle.jsx-1786158661:after{position:absolute;right:0;bottom:0;height:1.2rem;width:1.2rem;border-radius:100%;background:var(--horizontal-gradient);-webkit-transform:translate(-15%,-65%);-ms-transform:translate(-15%,-65%);transform:translate(-15%,-65%);}.about.jsx-1786158661{margin-bottom:12rem;}.highlight.jsx-1786158661{color:var(--color-secondary);}@media (min-width:768px){.first-fold.jsx-1786158661{height:calc(100vh - 200px);}.freckle.jsx-1786158661:after{content:'';}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5S29CLEFBRzBCLEFBVVEsQUFLSCxBQVdFLEFBSVMsQUFLQSxBQUdoQixXQUNiLE9BdkJRLEVBV1YsQ0FoQm9CLEtBTVQsQ0FtQlQsRUFMRixNQWJnQixJQU5oQixVQU9lLGFBQ00sWUFuQkcsT0FvQmdCLHNDQUNOLGlDQXBCVCx3RUFxQnpCLDJCQXBCcUIsNkZBQ1EsMkJBQ2YsWUFDYSx5QkFDM0IiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBQbHggZnJvbSAncmVhY3QtcGx4JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFBhcnRpY2xlV2F2ZSBmcm9tICcuLi9jb21wb25lbnRzL1BhcnRpY2xlcy9QYXJ0aWNsZVdhdmUnO1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vY29tcG9uZW50cy9UZWFtJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRlYW06IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdEZXJlayBDb2xsaXNvbicsXG4gICAgICAgICAgcG9zaXRpb246ICdGb3VuZGVyICYgQ0VPJyxcbiAgICAgICAgICBiaW86XG4gICAgICAgICAgICAnRW50cmVwcmVuZXVyLCBJbnZlc3RvciwgYW5kIFRlY2hub2xvZ2lzdC4gQ3JlYXRvciBvZiBAbmF0c19pbyBhbmQgQGNsb3VkZm91bmRyeScsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdkZXJla2NvbGxpc29uJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnZGVyZWtjb2xsaXNvbicsXG4gICAgICAgICAgICBnaXRodWI6ICdkZXJla2NvbGxpc29uJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdDb2xpbiBTdWxsaXZhbicsXG4gICAgICAgICAgcG9zaXRpb246ICdQcm9kdWN0IE1hbmFnZW1lbnQnLFxuICAgICAgICAgIGJpbzogJ1Byb2R1Y3QgTWFuYWdlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdDb2xpblN1bGxpdmFuMDEnLFxuICAgICAgICAgICAgbGlua2VkaW46ICdjb2xpbnN1bGxpdmFuJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ0NvbGluU3VsbGl2YW4xJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdHaW5nZXIgQ29sbGlzb24nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnQ29tbXVuaXR5JyxcbiAgICAgICAgICBiaW86ICdEZXZlbG9wZXIgQWR2b2NhdGUgJiBDb21tdW5pdHkgTWFuYWdlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdjcmFzaGdpbmdlcmx5JyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnZ2luZ2VyLWNvbGxpc29uJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2djb2xsaXNvJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdJdmFuIEtvemxvdmljJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdpdmFua296bG92aWMnLFxuICAgICAgICAgICAgbGlua2VkaW46ICdpdmFua296bG92aWMnLFxuICAgICAgICAgICAgZ2l0aHViOiAna296bG92aWMnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1dhbGRlbWFyIFF1ZXZlZG8nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ3dhbGx5cXMnLFxuICAgICAgICAgICAgbGlua2VkaW46ICd3YWxkZW1hcnF1ZXZlZG8nLFxuICAgICAgICAgICAgZ2l0aHViOiAnd2FsbHlxcydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQWxiZXJ0byBSaWNhcnQnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2FsYmVydG9yaWNhcnQnLFxuICAgICAgICAgICAgbGlua2VkaW46ICdhbGJlcnRvcmljYXJ0JyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2FyaWNhcnQnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1N0ZXBoZW4gQXNidXJ5JyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICd0aGVzYXNidXJ5JyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnc3Rhc2J1cnknLFxuICAgICAgICAgICAgZ2l0aHViOiAnc2FzYnVyeSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRGF2aWQgS2VtcGVyJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIGxpbmtlZGluOiAnZGF2aWQta2VtcGVyLTUzMWJiMDM4JyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2Rhdmlka2VtcGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBBT1MuaW5pdCh7XG4gICAgICBvbmNlOiB0cnVlLFxuICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0J1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGZvcmVncm91bmRQYXJhbGxheCA9IFtcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6ICdzZWxmJyxcbiAgICAgICAgc3RhcnRPZmZzZXQ6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXQnLFxuICAgICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnRWYWx1ZTogMTAwLFxuICAgICAgICAgICAgZW5kVmFsdWU6IC01MCxcbiAgICAgICAgICAgIHByb3BlcnR5OiAndHJhbnNsYXRlWSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZpcnN0LWZvbGRcIj5cbiAgICAgICAgICA8UGFydGljbGVXYXZlIC8+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgQ29ubmVjdCBFdmVyeXRoaW5nXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyZWNrbGVcIj4uPC9kaXY+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3NOYW1lPVwiYWJvdXRcIj5cbiAgICAgICAgICA8UGx4IGNsYXNzTmFtZT1cImZvcmVncm91bmRcIiBwYXJhbGxheERhdGE9e2ZvcmVncm91bmRQYXJhbGxheH0+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIEF0IFN5bmFkaWEsIHdlIGJlbGlldmUgdGhlcmUgaXMgYW4gb3Bwb3J0dW5pdHl7JyAnfVxuICAgICAgICAgICAgICA8YnIgY2xhc3NOYW1lPVwiZGVza3RvcC0tb25seVwiIC8+XG4gICAgICAgICAgICAgIHRvIGNyZWF0ZSB0aGUgZmlyc3QgZGVjZW50cmFsaXplZCx7JyAnfVxuICAgICAgICAgICAgICA8YnIgY2xhc3NOYW1lPVwiZGVza3RvcC0tb25seVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPlxuICAgICAgICAgICAgICAgIHNlY3VyZSBnbG9iYWwgdXRpbGl0eSwgcG93ZXJlZCBieSBOQVRTaW8seycgJ31cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8YnIgY2xhc3NOYW1lPVwiZGVza3RvcC0tb25seVwiIC8+XG4gICAgICAgICAgICAgIHRvIGNvbm5lY3QgYWxsIGRpZ2l0YWwgc3lzdGVtcywgc2VydmljZXMgYW5kIGRldmljZXMuXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvUGx4PlxuICAgICAgICAgIDxQbHggY2xhc3NOYW1lPVwiZm9yZWdyb3VuZFwiIHBhcmFsbGF4RGF0YT17Zm9yZWdyb3VuZFBhcmFsbGF4fT5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgVGhpcyBvZmZlcmluZyB3aWxsIGJlIGRlY2VudHJhbGl6ZWQgYnkgZGVzaWduLHsnICd9XG4gICAgICAgICAgICAgIDxiciBjbGFzc05hbWU9XCJkZXNrdG9wLS1vbmx5XCIgLz5cbiAgICAgICAgICAgICAgc2VjdXJlIGJ5IGRlZmF1bHQsIGdsb2JhbGx5IGF2YWlsYWJsZSx7JyAnfVxuICAgICAgICAgICAgICA8YnIgY2xhc3NOYW1lPVwiZGVza3RvcC0tb25seVwiIC8+XG4gICAgICAgICAgICAgIGFuZCBlYXN5IHRvIHVzZSBhbmQgbWFuYWdlLlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L1BseD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBpZD1cInRlYW1cIj5cbiAgICAgICAgICA8UGx4IGNsYXNzTmFtZT1cImZvcmVncm91bmRcIiBwYXJhbGxheERhdGE9e2ZvcmVncm91bmRQYXJhbGxheH0+XG4gICAgICAgICAgICA8aDI+TWVldCB0aGUgVGVhbTwvaDI+XG4gICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgIFdpdGggMTAwKyB5ZWFycyBvZiBjb21iaW5lZCBleHBlcmllbmNlIGluIGVuZ2luZWVyaW5nIGFuZFxuICAgICAgICAgICAgICBtZXNzYWdpbmcsIHRoZSBnb29kIHBlb3BsZSBvZiBTeW5hZGlhIHByb3ZpZGUgYSB3ZWFsdGggb2ZcbiAgICAgICAgICAgICAga25vd2xlZGdlIGFpbWVkIGF0IGNoYWxsZW5naW5nIGhvdyB0aGUgd29ybGQgY29ubmVjdHMuXG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDwvUGx4PlxuICAgICAgICAgIDxUZWFtIG1lbWJlcnM9e3RoaXMuc3RhdGUudGVhbX0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZmlyc3QtZm9sZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIG1hcmdpbjogMTAwcHggYXV0byAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEgLmZyZWNrbGUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIC5mcmVja2xlOmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgICAgICAgICB3aWR0aDogMS4ycmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWhvcml6b250YWwtZ3JhZGllbnQpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1JSwgLTY1JSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFib3V0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAuZmlyc3QtZm9sZCB7XG4gICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mcmVja2xlOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/pages/index.js */",
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
//# sourceMappingURL=index.js.5a0413814e6f124f5e36.hot-update.js.map