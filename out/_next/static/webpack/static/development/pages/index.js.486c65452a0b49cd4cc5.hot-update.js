webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ParticleWave.js":
false,

/***/ "./components/Particles/ParticleWave.js":
/*!**********************************************!*\
  !*** ./components/Particles/ParticleWave.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParticleWave; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.json */ "./components/Particles/settings.json");
var _settings_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./settings.json */ "./components/Particles/settings.json", 1);
var _jsxFileName = "/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Particles/ParticleWave.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ParticleWave =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ParticleWave, _React$Component);

  function ParticleWave(props) {
    _classCallCheck(this, ParticleWave);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParticleWave).call(this, props));
  }

  _createClass(ParticleWave, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
        params: _settings_json__WEBPACK_IMPORTED_MODULE_2__,
        style: {
          position: 'absolute',
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      });
    }
  }]);

  return ParticleWave;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/Particles/settings.json":
/*!********************************************!*\
  !*** ./components/Particles/settings.json ***!
  \********************************************/
/*! exports provided: particles, interactivity, retina_detect, default */
/***/ (function(module) {

module.exports = {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":600}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":true,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":1,"width":1},"move":{"enable":true,"speed":4,"direction":"top","random":false,"straight":true,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};

/***/ }),

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
        className: "jsx-1036627324",
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
        className: "jsx-1036627324" + " " + "first-fold",
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
        className: "jsx-1036627324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1036627324" + " " + "word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "0",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "C"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "50",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "100",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "150",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "200",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "e"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "250",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "c"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "300",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "t")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1036627324" + " " + "word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "350",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "E"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "400",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "v"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "450",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "e"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "500",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "r"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "550",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "y"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "600",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "t"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "650",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "700",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "i"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "750",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "800",
        className: "jsx-1036627324" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "g")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "850",
        className: "jsx-1036627324" + " " + "freckle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "about",
        className: "jsx-1036627324" + " " + "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-1036627324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "At Synadia, we believe there is an opportunity ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1036627324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }), "to create the first decentralized,", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1036627324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1036627324" + " " + "highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "secure global utility, powered by NATSio,"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1036627324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), "to connect all digital systems, services and devices."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-1036627324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "This offering will be decentralized by design, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1036627324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }), "secure by default, globally available, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1036627324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), "and easy to use and manage.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "team",
        className: "jsx-1036627324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1036627324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Meet the Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1036627324",
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
        styleId: "1036627324",
        css: ".first-fold.jsx-1036627324{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:calc(100vh - 100px);width:100vw;margin:105px auto 0 auto;}h1.jsx-1036627324 .freckle.jsx-1036627324{display:inline-block;position:relative;}h1.jsx-1036627324 .freckle.jsx-1036627324:after{position:absolute;right:0;bottom:0;height:1.2rem;width:1.2rem;border-radius:100%;background:var(--horizontal-gradient);-webkit-transform:translate(-15%,-65%);-ms-transform:translate(-15%,-65%);transform:translate(-15%,-65%);}.about.jsx-1036627324{margin-bottom:12rem;}.word.jsx-1036627324{display:inline-block;}.letter.jsx-1036627324{display:inline-block;}.highlight.jsx-1036627324{color:var(--color-secondary);}@media (min-width:768px){.freckle.jsx-1036627324:after{content:'';}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3TW9CLEFBRzBCLEFBVVEsQUFLSCxBQVdFLEFBSUMsQUFJQSxBQUlRLEFBS2hCLFdBQ2IsT0E1QlEsRUFXVixDQWhCb0IsQUFvQnBCLEFBSUEsS0FsQlcsR0FzQlgsTUFyQmdCLElBTmhCLFVBT2UsYUFDTSxZQW5CRyxPQW9CZ0Isc0NBQ04saUNBcEJULHdFQXFCekIsMkJBcEJxQiw2RkFDUSwyQkFDZixZQUNhLHlCQUMzQiIsImZpbGUiOiIvVXNlcnMvZnJhbi9Eb2N1bWVudHMvUHJvamVjdHMvYmFzZW1lbnQvU3luYWRpYS9zeW5hZGlhLXdlYnNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgUGFydGljbGVXYXZlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydGljbGVzL1BhcnRpY2xlV2F2ZSc7XG5pbXBvcnQgVGVhbSBmcm9tICcuLi9jb21wb25lbnRzL1RlYW0nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGVhbTogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0RlcmVrIENvbGxpc29uJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0ZvdW5kZXIgJiBDRU8nLFxuICAgICAgICAgIGJpbzpcbiAgICAgICAgICAgICdFbnRyZXByZW5ldXIsIEludmVzdG9yLCBhbmQgVGVjaG5vbG9naXN0LiBDcmVhdG9yIG9mIEBuYXRzX2lvIGFuZCBAY2xvdWRmb3VuZHJ5JyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2RlcmVrY29sbGlzb24nLFxuICAgICAgICAgICAgbGlua2VkaW46ICdkZXJla2NvbGxpc29uJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2RlcmVrY29sbGlzb24nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0NvbGluIFN1bGxpdmFuJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ1Byb2R1Y3QgTWFuYWdlbWVudCcsXG4gICAgICAgICAgYmlvOiAnUHJvZHVjdCBNYW5hZ2VyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ0NvbGluU3VsbGl2YW4wMScsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2NvbGluc3VsbGl2YW4nLFxuICAgICAgICAgICAgZ2l0aHViOiAnQ29saW5TdWxsaXZhbjEnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0dpbmdlciBDb2xsaXNvbicsXG4gICAgICAgICAgcG9zaXRpb246ICdDb21tdW5pdHknLFxuICAgICAgICAgIGJpbzogJ0RldmVsb3BlciBBZHZvY2F0ZSAmIENvbW11bml0eSBNYW5hZ2VyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2NyYXNoZ2luZ2VybHknLFxuICAgICAgICAgICAgbGlua2VkaW46ICdnaW5nZXItY29sbGlzb24nLFxuICAgICAgICAgICAgZ2l0aHViOiAnZ2NvbGxpc28nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0l2YW4gS296bG92aWMnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2l2YW5rb3psb3ZpYycsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2l2YW5rb3psb3ZpYycsXG4gICAgICAgICAgICBnaXRodWI6ICdrb3psb3ZpYydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnV2FsZGVtYXIgUXVldmVkbycsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnd2FsbHlxcycsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ3dhbGRlbWFycXVldmVkbycsXG4gICAgICAgICAgICBnaXRodWI6ICd3YWxseXFzJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdBbGJlcnRvIFJpY2FydCcsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnYWxiZXJ0b3JpY2FydCcsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2FsYmVydG9yaWNhcnQnLFxuICAgICAgICAgICAgZ2l0aHViOiAnYXJpY2FydCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnU3RlcGhlbiBBc2J1cnknLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ3RoZXNhc2J1cnknLFxuICAgICAgICAgICAgbGlua2VkaW46ICdzdGFzYnVyeScsXG4gICAgICAgICAgICBnaXRodWI6ICdzYXNidXJ5J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdEYXZpZCBLZW1wZXInLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgbGlua2VkaW46ICdkYXZpZC1rZW1wZXItNTMxYmIwMzgnLFxuICAgICAgICAgICAgZ2l0aHViOiAnZGF2aWRrZW1wZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIEFPUy5pbml0KHtcbiAgICAgIG9uY2U6IHRydWUsXG4gICAgICBkdXJhdGlvbjogODAwLFxuICAgICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZpcnN0LWZvbGRcIj5cbiAgICAgICAgICA8UGFydGljbGVXYXZlIC8+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIwXCI+XG4gICAgICAgICAgICAgICAgQ1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjUwXCI+XG4gICAgICAgICAgICAgICAgb1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjEwMFwiPlxuICAgICAgICAgICAgICAgIG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxNTBcIj5cbiAgICAgICAgICAgICAgICBuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMjAwXCI+XG4gICAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjI1MFwiPlxuICAgICAgICAgICAgICAgIGNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIzMDBcIj5cbiAgICAgICAgICAgICAgICB0XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7YCBgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIzNTBcIj5cbiAgICAgICAgICAgICAgICBFXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNDAwXCI+XG4gICAgICAgICAgICAgICAgdlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjQ1MFwiPlxuICAgICAgICAgICAgICAgIGVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI1MDBcIj5cbiAgICAgICAgICAgICAgICByXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNTUwXCI+XG4gICAgICAgICAgICAgICAgeVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjYwMFwiPlxuICAgICAgICAgICAgICAgIHRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI2NTBcIj5cbiAgICAgICAgICAgICAgICBoXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNzAwXCI+XG4gICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjc1MFwiPlxuICAgICAgICAgICAgICAgIG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI4MDBcIj5cbiAgICAgICAgICAgICAgICBnXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiODUwXCIgY2xhc3NOYW1lPVwiZnJlY2tsZVwiPlxuICAgICAgICAgICAgICAuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJhYm91dFwiPlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIEF0IFN5bmFkaWEsIHdlIGJlbGlldmUgdGhlcmUgaXMgYW4gb3Bwb3J0dW5pdHkgPGJyIC8+XG4gICAgICAgICAgICB0byBjcmVhdGUgdGhlIGZpcnN0IGRlY2VudHJhbGl6ZWQsXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPlxuICAgICAgICAgICAgICBzZWN1cmUgZ2xvYmFsIHV0aWxpdHksIHBvd2VyZWQgYnkgTkFUU2lvLFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICB0byBjb25uZWN0IGFsbCBkaWdpdGFsIHN5c3RlbXMsIHNlcnZpY2VzIGFuZCBkZXZpY2VzLlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgVGhpcyBvZmZlcmluZyB3aWxsIGJlIGRlY2VudHJhbGl6ZWQgYnkgZGVzaWduLCA8YnIgLz5cbiAgICAgICAgICAgIHNlY3VyZSBieSBkZWZhdWx0LCBnbG9iYWxseSBhdmFpbGFibGUsIDxiciAvPlxuICAgICAgICAgICAgYW5kIGVhc3kgdG8gdXNlIGFuZCBtYW5hZ2UuXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBpZD1cInRlYW1cIj5cbiAgICAgICAgICA8aDI+TWVldCB0aGUgVGVhbTwvaDI+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgV2l0aCAxMDArIHllYXJzIG9mIGNvbWJpbmVkIGV4cGVyaWVuY2UgaW4gZW5naW5lZXJpbmcgYW5kIG1lc3NhZ2luZyxcbiAgICAgICAgICAgIHRoZSBnb29kIHBlb3BsZSBvZiBTeW5hZGlhIHByb3ZpZGUgYSB3ZWFsdGggb2Yga25vd2xlZGdlIGFpbWVkIGF0XG4gICAgICAgICAgICBjaGFsbGVuZ2luZyBob3cgdGhlIHdvcmxkIGNvbm5lY3RzLlxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPFRlYW0gbWVtYmVycz17dGhpcy5zdGF0ZS50ZWFtfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5maXJzdC1mb2xkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiAxMDVweCBhdXRvIDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSAuZnJlY2tsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEgLmZyZWNrbGU6YWZ0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjJyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taG9yaXpvbnRhbC1ncmFkaWVudCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUlLCAtNjUlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWJvdXQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndvcmQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sZXR0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAuZnJlY2tsZTphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/pages/index.js */",
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
//# sourceMappingURL=index.js.486c65452a0b49cd4cc5.hot-update.js.map