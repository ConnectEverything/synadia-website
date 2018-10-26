webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ScrollTo.js":
/*!********************************!*\
  !*** ./components/ScrollTo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollTo; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/ScrollTo.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ScrollTo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollTo, _React$Component);

  function ScrollTo(props) {
    var _this;

    _classCallCheck(this, ScrollTo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollTo).call(this, props));
    _this.state = {
      element: null,
      event_category: '',
      event_label: ''
    };
    return _this;
  }

  _createClass(ScrollTo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        element: document.getElementById(this.props.href)
      });

      if (this.props.gtm) {
        this.setState({
          event_category: this.props.gtm.category,
          event_label: this.props.gtm.label
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(cb) {
      this.state.element.scrollIntoView({
        behavior: 'smooth',
        alignToTop: true
      });

      if (this.state.event_category && this.state.event_label) {
        gtag('event', 'Click', {
          event_category: this.state.event_category,
          event_label: this.state.event_label
        });
      }

      if (cb) {
        cb();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.handleClick(_this2.props.onClick);
        },
        className: "jsx-4017254658" + " " + (this.props.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4017254658",
        css: "button.jsx-4017254658{cursor:pointer;color:var(--color-font);}button.jsx-4017254658:hover{color:var(--color-primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1Njcm9sbFRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEb0IsQUFHNEIsQUFJWSxlQUhILFlBSTFCLFlBSEEiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL2NvbXBvbmVudHMvU2Nyb2xsVG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxUbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICBldmVudF9jYXRlZ29yeTogJycsXG4gICAgICBldmVudF9sYWJlbDogJydcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvcHMuaHJlZikgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMuZ3RtKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXZlbnRfY2F0ZWdvcnk6IHRoaXMucHJvcHMuZ3RtLmNhdGVnb3J5LFxuICAgICAgICBldmVudF9sYWJlbDogdGhpcy5wcm9wcy5ndG0ubGFiZWxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGNiKSB7XG4gICAgdGhpcy5zdGF0ZS5lbGVtZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIGFsaWduVG9Ub3A6IHRydWVcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50X2NhdGVnb3J5ICYmIHRoaXMuc3RhdGUuZXZlbnRfbGFiZWwpIHtcbiAgICAgIGd0YWcoJ2V2ZW50JywgJ0NsaWNrJywge1xuICAgICAgICBldmVudF9jYXRlZ29yeTogdGhpcy5zdGF0ZS5ldmVudF9jYXRlZ29yeSxcbiAgICAgICAgZXZlbnRfbGFiZWw6IHRoaXMuc3RhdGUuZXZlbnRfbGFiZWxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjYikge1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayh0aGlzLnByb3BzLm9uQ2xpY2spfVxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/ScrollTo.js */",
        __self: this
      }));
    }
  }]);

  return ScrollTo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.f68b2df7079ac49a7df5.hot-update.js.map