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
          lineNumber: 20
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
          lineNumber: 21
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
          lineNumber: 32
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
          lineNumber: 43
        },
        __self: this
      }, "Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2085888330",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRDJCIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzbGlkZSBhcyBNZW51IH0gZnJvbSAncmVhY3QtYnVyZ2VyLW1lbnUnO1xuaW1wb3J0IFNjcm9sbFRvIGZyb20gJy4uL2NvbXBvbmVudHMvU2Nyb2xsVG8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW51T3BlbjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY2xvc2VNZW51KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3BlbjogZmFsc2UgfSk7XG4gIH1cblxuICByZW5kZXJNb2JpbGVNZW51KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWVudSByaWdodD5cbiAgICAgICAgPFNjcm9sbFRvXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX1cbiAgICAgICAgICBocmVmPVwib3ZlcnZpZXdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiXG4gICAgICAgICAgZ3RtPXt7XG4gICAgICAgICAgICBldmVudF9jYXRlZ29yeTogJ01haW5zaXRlX01lbnUnLFxuICAgICAgICAgICAgZXZlbnRfbGFiZWw6ICdPdmVydmlldydcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgT3ZlcnZpZXdcbiAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgPFNjcm9sbFRvXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX1cbiAgICAgICAgICBocmVmPVwiZmVhdHVyZXNcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiXG4gICAgICAgICAgZ3RtPXt7XG4gICAgICAgICAgICBldmVudF9jYXRlZ29yeTogJ01haW5zaXRlX01lbnUnLFxuICAgICAgICAgICAgZXZlbnRfbGFiZWw6ICdGZWF0dXJlcydcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgRmVhdHVyZXNcbiAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgPFNjcm9sbFRvXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX1cbiAgICAgICAgICBocmVmPVwidGVhbVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1pdGVtXCJcbiAgICAgICAgICBndG09e3tcbiAgICAgICAgICAgIGV2ZW50X2NhdGVnb3J5OiAnTWFpbnNpdGVfTWVudScsXG4gICAgICAgICAgICBldmVudF9sYWJlbDogJ1RlYW0nXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFRlYW1cbiAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BgfTwvc3R5bGU+XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPG5hdj57dGhpcy5yZW5kZXJNb2JpbGVNZW51KCl9PC9uYXY+O1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Nav.js */",
        __self: this
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, this.renderMobileMenu());
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.9a7172987cf0c90a7212.hot-update.js.map