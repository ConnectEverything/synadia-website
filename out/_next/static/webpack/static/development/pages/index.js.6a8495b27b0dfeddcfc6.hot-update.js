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
      var mobileStyles = {
        height: '40vh',
        animation: 'none'
      };
      var desktopStyles = {
        willChange: 'transform',
        animation: this.props.static ? 'none' : 'wave 10s infinite alternate'
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2766959490" + " " + "particles__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
        params: {
          particles: {
            number: {
              value: this.state.vpWidth < 1024 ? 100 : 60,
              density: {
                enable: this.state.vpWidth < 1024 ? true : false
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
        style: this.state.vpWidth > 1024 ? mobileStyles : mobileStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2766959490",
        css: ".particles__wrapper{position:absolute;bottom:0;width:100%;height:40vh;}.particles__wrapper>div{height:40vh;opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1BhcnRpY2xlcy9QYXJ0aWNsZVdhdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0cyQixBQUcrQixBQU1OLFlBQ0EsTUFOSCxNQU9YLEdBTmEsV0FDQyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1BhcnRpY2xlcy9QYXJ0aWNsZVdhdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xlV2F2ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2cFdpZHRoOiBudWxsXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKCk7XG4gIH1cblxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2cFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2JpbGVTdHlsZXMgPSB7XG4gICAgICBoZWlnaHQ6ICc0MHZoJyxcbiAgICAgIGFuaW1hdGlvbjogJ25vbmUnXG4gICAgfTtcblxuICAgIGNvbnN0IGRlc2t0b3BTdHlsZXMgPSB7XG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgIGFuaW1hdGlvbjogdGhpcy5wcm9wcy5zdGF0aWMgPyAnbm9uZScgOiAnd2F2ZSAxMHMgaW5maW5pdGUgYWx0ZXJuYXRlJ1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0aWNsZXNfX3dyYXBwZXJcIj5cbiAgICAgICAgPFBhcnRpY2xlc1xuICAgICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgICAgcGFydGljbGVzOiB7XG4gICAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnZwV2lkdGggPCAxMDI0ID8gMTAwIDogNjAsXG4gICAgICAgICAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0aGlzLnN0YXRlLnZwV2lkdGggPCAxMDI0ID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAnIzI1ZGJlMidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcG9seWdvbjoge1xuICAgICAgICAgICAgICAgICAgbmJfc2lkZXM6IDhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICByYW5kb206IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiA1LFxuICAgICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbmltOiB7XG4gICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzcGVlZDogNDAsXG4gICAgICAgICAgICAgICAgICBzaXplX21pbjogMC4xLFxuICAgICAgICAgICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxNTAsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMjVkYmUyJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vdmU6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDIsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICByYW5kb206IHRydWUsXG4gICAgICAgICAgICAgICAgc3RyYWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgb3V0X21vZGU6ICdib3VuY2UnLFxuICAgICAgICAgICAgICAgIGJvdW5jZTogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW50ZXJhY3Rpdml0eToge1xuICAgICAgICAgICAgICBkZXRlY3Rfb246ICdjYW52YXMnLFxuICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICBvbmhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtb2RlOiAnZ3JhYidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2Rlczoge1xuICAgICAgICAgICAgICAgIGdyYWI6IHtcbiAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmV0aW5hX2RldGVjdDogdHJ1ZVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGU9e3RoaXMuc3RhdGUudnBXaWR0aCA+IDEwMjQgPyBtb2JpbGVTdHlsZXMgOiBtb2JpbGVTdHlsZXN9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAucGFydGljbGVzX193cmFwcGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFydGljbGVzX193cmFwcGVyID4gZGl2IHtcbiAgICAgICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Particles/ParticleWave.js */",
        __self: this
      }));
    }
  }]);

  return ParticleWave;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.6a8495b27b0dfeddcfc6.hot-update.js.map