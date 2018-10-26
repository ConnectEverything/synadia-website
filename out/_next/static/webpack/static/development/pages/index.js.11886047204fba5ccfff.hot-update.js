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
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__);
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
      // this.state.element.scrollIntoView({
      //   behavior: 'smooth',
      //   alignToTop: true
      // });
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
        className: "jsx-1598307501" + " " + (this.props.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: this.props.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1598307501",
        css: "button.jsx-1598307501{cursor:pointer;color:var(--color-font);}button.jsx-1598307501:hover{color:var(--color-secondary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1Njcm9sbFRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEb0IsQUFHNEIsQUFJYyxlQUhMLGNBSTFCLFVBSEEiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL2NvbXBvbmVudHMvU2Nyb2xsVG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuY2hvckxpbmsgZnJvbSAncmVhY3QtYW5jaG9yLWxpbmstc21vb3RoLXNjcm9sbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFRvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZWxlbWVudDogbnVsbCxcbiAgICAgIGV2ZW50X2NhdGVnb3J5OiAnJyxcbiAgICAgIGV2ZW50X2xhYmVsOiAnJ1xuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5ocmVmKSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5ndG0pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBldmVudF9jYXRlZ29yeTogdGhpcy5wcm9wcy5ndG0uY2F0ZWdvcnksXG4gICAgICAgIGV2ZW50X2xhYmVsOiB0aGlzLnByb3BzLmd0bS5sYWJlbFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soY2IpIHtcbiAgICAvLyB0aGlzLnN0YXRlLmVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgIC8vICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgIC8vICAgYWxpZ25Ub1RvcDogdHJ1ZVxuICAgIC8vIH0pO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuZXZlbnRfY2F0ZWdvcnkgJiYgdGhpcy5zdGF0ZS5ldmVudF9sYWJlbCkge1xuICAgICAgZ3RhZygnZXZlbnQnLCAnQ2xpY2snLCB7XG4gICAgICAgIGV2ZW50X2NhdGVnb3J5OiB0aGlzLnN0YXRlLmV2ZW50X2NhdGVnb3J5LFxuICAgICAgICBldmVudF9sYWJlbDogdGhpcy5zdGF0ZS5ldmVudF9sYWJlbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNiKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKHRoaXMucHJvcHMub25DbGljayl9XG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICA+XG4gICAgICAgIDxBbmNob3JMaW5rIGhyZWY9e3RoaXMucHJvcHMuaHJlZn0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9BbmNob3JMaW5rPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/ScrollTo.js */",
        __self: this
      }));
    }
  }]);

  return ScrollTo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.11886047204fba5ccfff.hot-update.js.map