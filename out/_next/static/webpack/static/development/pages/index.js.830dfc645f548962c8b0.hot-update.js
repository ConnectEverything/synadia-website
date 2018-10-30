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
          endValue: 100,
          property: 'translateY'
        }]
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        className: "jsx-1203364901",
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
        className: "jsx-1203364901" + " " + "first-fold",
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
        className: "jsx-1203364901",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Connect Everything", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1203364901" + " " + "freckle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "about",
        className: "jsx-1203364901" + " " + "about",
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
        className: "jsx-1203364901",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "At Synadia, we believe there is an opportunity", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1203364901" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), "to create the first decentralized,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1203364901" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1203364901" + " " + "highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "secure global utility, powered by NATSio,", ' '), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1203364901" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), "to connect all digital systems, services and devices."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-1203364901",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "This offering will be decentralized by design,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1203364901" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), "secure by default, globally available,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1203364901" + " " + "desktop--only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), "and easy to use and manage."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "team",
        className: "jsx-1203364901",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "foreground",
        parallaxData: foregroundParallax,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1203364901",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Meet the Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1203364901",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "With 100+ years of combined experience in engineering and messaging, the good people of Synadia provide a wealth of knowledge aimed at challenging how the world connects.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Team__WEBPACK_IMPORTED_MODULE_6__["default"], {
        members: this.state.team,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1203364901",
        css: ".first-fold.jsx-1203364901{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:74vh;width:100vw;margin:100px auto 0 auto;margin-bottom:5vh;}h1.jsx-1203364901 .freckle.jsx-1203364901{display:inline-block;position:relative;}h1.jsx-1203364901 .freckle.jsx-1203364901:after{position:absolute;right:0;bottom:0;height:1.2rem;width:1.2rem;border-radius:100%;background:var(--horizontal-gradient);-webkit-transform:translate(-15%,-65%);-ms-transform:translate(-15%,-65%);transform:translate(-15%,-65%);}.about.jsx-1203364901{margin-bottom:12rem;}.highlight.jsx-1203364901{color:var(--color-secondary);}@media (min-width:768px){.first-fold.jsx-1203364901{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:65vh;margin-bottom:25vh;}.freckle.jsx-1203364901:after{content:'';}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1S29CLEFBRzBCLEFBV1EsQUFLSCxBQVdFLEFBSVMsQUFLSixBQUtaLFdBQ2IsT0F6QlEsRUFXVixDQWhCb0IsS0FNVCxHQWNYLE1BYmdCLElBTmhCLFVBT2UsYUFDTSxZQXBCRyxPQXFCZ0Isa0JBZXhCLFlBQ08sUUFmVyxXQWdCaEMsc0JBckMyQix3RUFzQjdCLGlDQXJCcUIsNkZBQ1AsWUFDQSxZQUNhLHlCQUNQLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvZnJhbi9Eb2N1bWVudHMvUHJvamVjdHMvYmFzZW1lbnQvU3luYWRpYS9zeW5hZGlhLXdlYnNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0IFBseCBmcm9tICdyZWFjdC1wbHgnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgUGFydGljbGVXYXZlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydGljbGVzL1BhcnRpY2xlV2F2ZSc7XG5pbXBvcnQgVGVhbSBmcm9tICcuLi9jb21wb25lbnRzL1RlYW0nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGVhbTogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0RlcmVrIENvbGxpc29uJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0ZvdW5kZXIgJiBDRU8nLFxuICAgICAgICAgIGJpbzpcbiAgICAgICAgICAgICdFbnRyZXByZW5ldXIsIEludmVzdG9yLCBhbmQgVGVjaG5vbG9naXN0LiBDcmVhdG9yIG9mIEBuYXRzX2lvIGFuZCBAY2xvdWRmb3VuZHJ5JyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2RlcmVrY29sbGlzb24nLFxuICAgICAgICAgICAgbGlua2VkaW46ICdkZXJla2NvbGxpc29uJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2RlcmVrY29sbGlzb24nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0NvbGluIFN1bGxpdmFuJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ1Byb2R1Y3QgTWFuYWdlbWVudCcsXG4gICAgICAgICAgYmlvOiAnUHJvZHVjdCBNYW5hZ2VyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ0NvbGluU3VsbGl2YW4wMScsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2NvbGluc3VsbGl2YW4nLFxuICAgICAgICAgICAgZ2l0aHViOiAnQ29saW5TdWxsaXZhbjEnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0dpbmdlciBDb2xsaXNvbicsXG4gICAgICAgICAgcG9zaXRpb246ICdDb21tdW5pdHknLFxuICAgICAgICAgIGJpbzogJ0RldmVsb3BlciBBZHZvY2F0ZSAmIENvbW11bml0eSBNYW5hZ2VyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2NyYXNoZ2luZ2VybHknLFxuICAgICAgICAgICAgbGlua2VkaW46ICdnaW5nZXItY29sbGlzb24nLFxuICAgICAgICAgICAgZ2l0aHViOiAnZ2NvbGxpc28nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0l2YW4gS296bG92aWMnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2l2YW5rb3psb3ZpYycsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2l2YW5rb3psb3ZpYycsXG4gICAgICAgICAgICBnaXRodWI6ICdrb3psb3ZpYydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnV2FsZGVtYXIgUXVldmVkbycsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnd2FsbHlxcycsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ3dhbGRlbWFycXVldmVkbycsXG4gICAgICAgICAgICBnaXRodWI6ICd3YWxseXFzJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdBbGJlcnRvIFJpY2FydCcsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnYWxiZXJ0b3JpY2FydCcsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2FsYmVydG9yaWNhcnQnLFxuICAgICAgICAgICAgZ2l0aHViOiAnYXJpY2FydCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnU3RlcGhlbiBBc2J1cnknLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ3RoZXNhc2J1cnknLFxuICAgICAgICAgICAgbGlua2VkaW46ICdzdGFzYnVyeScsXG4gICAgICAgICAgICBnaXRodWI6ICdzYXNidXJ5J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdEYXZpZCBLZW1wZXInLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgbGlua2VkaW46ICdkYXZpZC1rZW1wZXItNTMxYmIwMzgnLFxuICAgICAgICAgICAgZ2l0aHViOiAnZGF2aWRrZW1wZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIEFPUy5pbml0KHtcbiAgICAgIG9uY2U6IHRydWUsXG4gICAgICBkdXJhdGlvbjogODAwLFxuICAgICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZm9yZWdyb3VuZFBhcmFsbGF4ID0gW1xuICAgICAge1xuICAgICAgICBzdGFydDogJ3NlbGYnLFxuICAgICAgICBzdGFydE9mZnNldDogMCxcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dCcsXG4gICAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydFZhbHVlOiAtNTAsXG4gICAgICAgICAgICBlbmRWYWx1ZTogMTAwLFxuICAgICAgICAgICAgcHJvcGVydHk6ICd0cmFuc2xhdGVZJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmlyc3QtZm9sZFwiPlxuICAgICAgICAgIDxQYXJ0aWNsZVdhdmUgLz5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICBDb25uZWN0IEV2ZXJ5dGhpbmdcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJlY2tsZVwiPi48L2Rpdj5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJhYm91dFwiPlxuICAgICAgICAgIDxQbHggY2xhc3NOYW1lPVwiZm9yZWdyb3VuZFwiIHBhcmFsbGF4RGF0YT17Zm9yZWdyb3VuZFBhcmFsbGF4fT5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgQXQgU3luYWRpYSwgd2UgYmVsaWV2ZSB0aGVyZSBpcyBhbiBvcHBvcnR1bml0eXsnICd9XG4gICAgICAgICAgICAgIDxiciBjbGFzc05hbWU9XCJkZXNrdG9wLS1vbmx5XCIgLz5cbiAgICAgICAgICAgICAgdG8gY3JlYXRlIHRoZSBmaXJzdCBkZWNlbnRyYWxpemVkLHsnICd9XG4gICAgICAgICAgICAgIDxiciBjbGFzc05hbWU9XCJkZXNrdG9wLS1vbmx5XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgc2VjdXJlIGdsb2JhbCB1dGlsaXR5LCBwb3dlcmVkIGJ5IE5BVFNpbyx7JyAnfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxiciBjbGFzc05hbWU9XCJkZXNrdG9wLS1vbmx5XCIgLz5cbiAgICAgICAgICAgICAgdG8gY29ubmVjdCBhbGwgZGlnaXRhbCBzeXN0ZW1zLCBzZXJ2aWNlcyBhbmQgZGV2aWNlcy5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIFRoaXMgb2ZmZXJpbmcgd2lsbCBiZSBkZWNlbnRyYWxpemVkIGJ5IGRlc2lnbix7JyAnfVxuICAgICAgICAgICAgICA8YnIgY2xhc3NOYW1lPVwiZGVza3RvcC0tb25seVwiIC8+XG4gICAgICAgICAgICAgIHNlY3VyZSBieSBkZWZhdWx0LCBnbG9iYWxseSBhdmFpbGFibGUseycgJ31cbiAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3AtLW9ubHlcIiAvPlxuICAgICAgICAgICAgICBhbmQgZWFzeSB0byB1c2UgYW5kIG1hbmFnZS5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9QbHg+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJ0ZWFtXCI+XG4gICAgICAgICAgPFBseCBjbGFzc05hbWU9XCJmb3JlZ3JvdW5kXCIgcGFyYWxsYXhEYXRhPXtmb3JlZ3JvdW5kUGFyYWxsYXh9PlxuICAgICAgICAgICAgPGgyPk1lZXQgdGhlIFRlYW08L2gyPlxuICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICBXaXRoIDEwMCsgeWVhcnMgb2YgY29tYmluZWQgZXhwZXJpZW5jZSBpbiBlbmdpbmVlcmluZyBhbmRcbiAgICAgICAgICAgICAgbWVzc2FnaW5nLCB0aGUgZ29vZCBwZW9wbGUgb2YgU3luYWRpYSBwcm92aWRlIGEgd2VhbHRoIG9mXG4gICAgICAgICAgICAgIGtub3dsZWRnZSBhaW1lZCBhdCBjaGFsbGVuZ2luZyBob3cgdGhlIHdvcmxkIGNvbm5lY3RzLlxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICA8L1BseD5cbiAgICAgICAgICA8VGVhbSBtZW1iZXJzPXt0aGlzLnN0YXRlLnRlYW19IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZpcnN0LWZvbGQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA3NHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiAxMDBweCBhdXRvIDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSAuZnJlY2tsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEgLmZyZWNrbGU6YWZ0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjJyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taG9yaXpvbnRhbC1ncmFkaWVudCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUlLCAtNjUlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWJvdXQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZ2hsaWdodCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5maXJzdC1mb2xkIHtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGhlaWdodDogNjV2aDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjV2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mcmVja2xlOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/pages/index.js */",
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
//# sourceMappingURL=index.js.830dfc645f548962c8b0.hot-update.js.map