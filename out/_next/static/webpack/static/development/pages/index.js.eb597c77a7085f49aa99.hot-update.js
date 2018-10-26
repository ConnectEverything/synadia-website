webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ScrollTo */ "./components/ScrollTo.js");
var _jsxFileName = "/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Nav.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.state = {
      menuOpen: false
    };
    return _this;
  }

  _createClass(Nav, [{
    key: "closeMenu",
    value: function closeMenu() {
      this.setState({
        menuOpen: false
      });
    }
  }, {
    key: "renderMobileMenu",
    value: function renderMobileMenu() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__["slide"], {
        right: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this2.closeMenu();
        },
        href: "overview",
        className: "menu-item",
        gtm: {
          event_category: 'Mainsite_Menu',
          event_label: 'Overview'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Overview"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this2.closeMenu();
        },
        href: "features",
        className: "menu-item",
        gtm: {
          event_category: 'Mainsite_Menu',
          event_label: 'Features'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Features"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this2.closeMenu();
        },
        href: "team",
        className: "menu-item",
        gtm: {
          event_category: 'Mainsite_Menu',
          event_label: 'Team'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2085888330",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRDJCIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzbGlkZSBhcyBNZW51IH0gZnJvbSAncmVhY3QtYnVyZ2VyLW1lbnUnO1xuaW1wb3J0IFNjcm9sbFRvIGZyb20gJy4uL2NvbXBvbmVudHMvU2Nyb2xsVG8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVudU9wZW46IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNsb3NlTWVudSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46IGZhbHNlIH0pO1xuICB9XG5cbiAgcmVuZGVyTW9iaWxlTWVudSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnUgcmlnaHQ+XG4gICAgICAgIDxTY3JvbGxUb1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9XG4gICAgICAgICAgaHJlZj1cIm92ZXJ2aWV3XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIlxuICAgICAgICAgIGd0bT17e1xuICAgICAgICAgICAgZXZlbnRfY2F0ZWdvcnk6ICdNYWluc2l0ZV9NZW51JyxcbiAgICAgICAgICAgIGV2ZW50X2xhYmVsOiAnT3ZlcnZpZXcnXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIE92ZXJ2aWV3XG4gICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgIDxTY3JvbGxUb1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9XG4gICAgICAgICAgaHJlZj1cImZlYXR1cmVzXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIlxuICAgICAgICAgIGd0bT17e1xuICAgICAgICAgICAgZXZlbnRfY2F0ZWdvcnk6ICdNYWluc2l0ZV9NZW51JyxcbiAgICAgICAgICAgIGV2ZW50X2xhYmVsOiAnRmVhdHVyZXMnXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEZlYXR1cmVzXG4gICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgIDxTY3JvbGxUb1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9XG4gICAgICAgICAgaHJlZj1cInRlYW1cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiXG4gICAgICAgICAgZ3RtPXt7XG4gICAgICAgICAgICBldmVudF9jYXRlZ29yeTogJ01haW5zaXRlX01lbnUnLFxuICAgICAgICAgICAgZXZlbnRfbGFiZWw6ICdUZWFtJ1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBUZWFtXG4gICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgYH08L3N0eWxlPlxuICAgICAgPC9NZW51PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxuYXY+e3RoaXMucmVuZGVyTW9iaWxlTWVudSgpfTwvbmF2PjtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Nav.js */",
        __self: this
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, this.renderMobileMenu());
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.eb597c77a7085f49aa99.hot-update.js.map