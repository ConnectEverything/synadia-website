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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.json */ "./components/Particles/settings.json");
var _settings_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./settings.json */ "./components/Particles/settings.json", 1);
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
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        vpWidth: window.innerWidth
      });
    }
  }, {
    key: "render",
    value: function render() {
      var particleAmount = this.state.vpWidth > 1024 ? 50 : 100;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2766959490" + " " + "particles__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
        params: {
          particles: {
            number: {
              value: particleAmount,
              density: {
                enable: false
              }
            },
            color: {
              value: '#25dbe2'
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              },
              polygon: {
                nb_sides: 8
              }
            },
            opacity: {
              value: 1,
              random: true
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#25dbe2',
              opacity: 1,
              width: 2
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'top',
              random: true,
              straight: true,
              out_mode: 'bounce',
              bounce: true
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1
                }
              }
            }
          },
          retina_detect: true
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2766959490",
        css: ".particles__wrapper{position:absolute;bottom:0;width:100%;height:40vh;}.particles__wrapper>div{height:40vh;opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1BhcnRpY2xlcy9QYXJ0aWNsZVdhdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0cyQixBQUcrQixBQU1OLFlBQ0EsTUFOSCxNQU9YLEdBTmEsV0FDQyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1BhcnRpY2xlcy9QYXJ0aWNsZVdhdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xlV2F2ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2cFdpZHRoOiBudWxsXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKCk7XG4gIH1cblxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2cFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwYXJ0aWNsZUFtb3VudCA9IHRoaXMuc3RhdGUudnBXaWR0aCA+IDEwMjQgPyA1MCA6IDEwMDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRpY2xlc19fd3JhcHBlclwiPlxuICAgICAgICA8UGFydGljbGVzXG4gICAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcnRpY2xlQW1vdW50LFxuICAgICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICcjMjVkYmUyJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwb2x5Z29uOiB7XG4gICAgICAgICAgICAgICAgICBuYl9zaWRlczogOFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IDUsXG4gICAgICAgICAgICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFuaW06IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHNwZWVkOiA0MCxcbiAgICAgICAgICAgICAgICAgIHNpemVfbWluOiAwLjEsXG4gICAgICAgICAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2U6IDE1MCxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMyNWRiZTInLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW92ZToge1xuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzcGVlZDogMixcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdHJhaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvdXRfbW9kZTogJ2JvdW5jZScsXG4gICAgICAgICAgICAgICAgYm91bmNlOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgICAgICAgICAgIGRldGVjdF9vbjogJ2NhbnZhcycsXG4gICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgIG9uaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1vZGU6ICdncmFiJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzaXplOiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVzOiB7XG4gICAgICAgICAgICAgICAgZ3JhYjoge1xuICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXRpbmFfZGV0ZWN0OiB0cnVlXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5wYXJ0aWNsZXNfX3dyYXBwZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYXJ0aWNsZXNfX3dyYXBwZXIgPiBkaXYge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Particles/ParticleWave.js */",
        __self: this
      }));
    }
  }]);

  return ParticleWave;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.49e76e23799f9fe6cf01.hot-update.js.map