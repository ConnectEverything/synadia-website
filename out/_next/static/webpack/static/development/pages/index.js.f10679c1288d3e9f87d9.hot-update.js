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
        className: "jsx-3156390027" + " " + "particles__wrapper",
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
                speed: 40,
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
        styleId: "3156390027",
        css: ".particles__wrapper{position:absolute;bottom:0;width:100%;height:40vh;}.particles__wrapper>div{height:40vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1BhcnRpY2xlcy9QYXJ0aWNsZVdhdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUcyQixBQUcrQixBQU1OLFlBQ2QsTUFOVyxTQUNFLFdBQ0MsWUFDZCIsImZpbGUiOiIvVXNlcnMvZnJhbi9Eb2N1bWVudHMvUHJvamVjdHMvYmFzZW1lbnQvU3luYWRpYS9zeW5hZGlhLXdlYnNpdGUvY29tcG9uZW50cy9QYXJ0aWNsZXMvUGFydGljbGVXYXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAncmVhY3QtcGFydGljbGVzLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljbGVXYXZlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZwV2lkdGg6IG51bGxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgfVxuXG4gIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZwV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIGhlaWdodDogJzQwdmgnLFxuICAgICAgYW5pbWF0aW9uOiAnbm9uZSdcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydGljbGVzX193cmFwcGVyXCI+XG4gICAgICAgIDxQYXJ0aWNsZXNcbiAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogMTAwLFxuICAgICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdGhpcy5zdGF0ZS52cFdpZHRoIDwgMTAyNCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogJyMyNWRiZTInXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBvbHlnb246IHtcbiAgICAgICAgICAgICAgICAgIG5iX3NpZGVzOiA4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IDAuNSxcbiAgICAgICAgICAgICAgICByYW5kb206IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiA1LFxuICAgICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbmltOiB7XG4gICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzcGVlZDogNDAsXG4gICAgICAgICAgICAgICAgICBzaXplX21pbjogMC4xLFxuICAgICAgICAgICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxNTAsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMjVkYmUyJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW92ZToge1xuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzcGVlZDogMSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdHJhaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvdXRfbW9kZTogJ2JvdW5jZScsXG4gICAgICAgICAgICAgICAgYm91bmNlOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgICAgICAgICAgIGRldGVjdF9vbjogJ2NhbnZhcycsXG4gICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgIG9uaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1vZGU6ICdncmFiJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzaXplOiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVzOiB7XG4gICAgICAgICAgICAgICAgZ3JhYjoge1xuICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJldGluYV9kZXRlY3Q6IHRydWVcbiAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAucGFydGljbGVzX193cmFwcGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFydGljbGVzX193cmFwcGVyID4gZGl2IHtcbiAgICAgICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Particles/ParticleWave.js */",
        __self: this
      }));
    }
  }]);

  return ParticleWave;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./components/Particles/settings.json":
false

})
//# sourceMappingURL=index.js.f10679c1288d3e9f87d9.hot-update.js.map