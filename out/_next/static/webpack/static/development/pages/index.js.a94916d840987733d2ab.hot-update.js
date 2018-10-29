webpackHotUpdate("static/development/pages/index.js",{

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var ParticleWave =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ParticleWave, _React$Component);

  function ParticleWave(props) {
    var _this;

    _classCallCheck(this, ParticleWave);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ParticleWave).call(this, props));
    _this.state = {
      vpWidth: null
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ParticleWave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        vpWidth: window.innerWidth
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.state.vpWidth;
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: "render",
    value: function render() {
      var mobileStyles = {
        position: 'absolute',
        left: '0',
        top: '100px',
        animation: 'none'
      };
      var desktopStyles = {
        position: 'absolute',
        left: '0',
        top: '-130px',
        willChange: 'transform',
        animation: 'wave 10s infinite alternate'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
        params: _settings_json__WEBPACK_IMPORTED_MODULE_2__,
        style: this.state.vpWidth > 1024 ? desktopStyles : mobileStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      });
    }
  }]);

  return ParticleWave;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/Particles/desktopSettings.json":
false,

/***/ "./components/Particles/mobileSettings.json":
false,

/***/ "./components/Particles/settings.json":
/*!********************************************!*\
  !*** ./components/Particles/settings.json ***!
  \********************************************/
/*! exports provided: particles, interactivity, retina_detect, default */
/***/ (function(module) {

module.exports = {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":1400}},"color":{"value":"#25dbe2"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":8}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":true,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#25dbe2","opacity":0.8,"width":1},"move":{"enable":true,"speed":4,"direction":"top","random":true,"straight":true,"out_mode":"bounce","bounce":true,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":500,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};

/***/ })

})
//# sourceMappingURL=index.js.a94916d840987733d2ab.hot-update.js.map