webpackHotUpdate("static/development/pages/_error.js",{

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
      var styles = {
        height: '40vh',
        animation: 'none'
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2250537865" + " " + "particles__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
        params: {
          particles: {
            number: {
              value: 100,
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
              value: 0.5,
              random: true
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 30,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#25dbe2',
              opacity: 0.5,
              width: 2
            },
            move: {
              enable: true,
              speed: 1,
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
                  opacity: 0.6
                }
              }
            }
          },
          retina_detect: true
        },
        style: styles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2250537865",
        css: ".particles__wrapper{position:absolute;bottom:0;width:100%;height:40vh;}.particles__wrapper>div{height:40vh;opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1BhcnRpY2xlcy9QYXJ0aWNsZVdhdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUcyQixBQUcrQixBQU1OLFlBQ0EsTUFOSCxNQU9YLEdBTmEsV0FDQyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1BhcnRpY2xlcy9QYXJ0aWNsZVdhdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZVdhdmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdnBXaWR0aDogbnVsbFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICB9XG5cbiAgdXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdnBXaWR0aDogd2luZG93LmlubmVyV2lkdGggfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgaGVpZ2h0OiAnNDB2aCcsXG4gICAgICBhbmltYXRpb246ICdub25lJ1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0aWNsZXNfX3dyYXBwZXJcIj5cbiAgICAgICAgPFBhcnRpY2xlc1xuICAgICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgICAgcGFydGljbGVzOiB7XG4gICAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICAgICAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0aGlzLnN0YXRlLnZwV2lkdGggPCAxMDI0ID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAnIzI1ZGJlMidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcG9seWdvbjoge1xuICAgICAgICAgICAgICAgICAgbmJfc2lkZXM6IDhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogMC41LFxuICAgICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IDUsXG4gICAgICAgICAgICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFuaW06IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHNwZWVkOiAzMCxcbiAgICAgICAgICAgICAgICAgIHNpemVfbWluOiAwLjEsXG4gICAgICAgICAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2U6IDE1MCxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMyNWRiZTInLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgICAgICAgICB3aWR0aDogMlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb3ZlOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAxLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0cmFpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG91dF9tb2RlOiAnYm91bmNlJyxcbiAgICAgICAgICAgICAgICBib3VuY2U6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgICAgICAgICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcbiAgICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgb25ob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbW9kZTogJ2dyYWInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNpemU6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZXM6IHtcbiAgICAgICAgICAgICAgICBncmFiOiB7XG4gICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmV0aW5hX2RldGVjdDogdHJ1ZVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgLz5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5wYXJ0aWNsZXNfX3dyYXBwZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYXJ0aWNsZXNfX3dyYXBwZXIgPiBkaXYge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Particles/ParticleWave.js */",
        __self: this
      }));
    }
  }]);

  return ParticleWave;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=_error.js.8607acab3783bc559ca0.hot-update.js.map