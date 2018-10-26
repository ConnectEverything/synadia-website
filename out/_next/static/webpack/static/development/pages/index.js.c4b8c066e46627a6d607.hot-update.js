webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MainMenu.js":
/*!********************************!*\
  !*** ./components/MainMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainMenu; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ScrollTo */ "./components/ScrollTo.js");
var _jsxFileName = "/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/MainMenu.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var MainMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainMenu, _React$Component);

  function MainMenu(props) {
    var _this;

    _classCallCheck(this, MainMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainMenu).call(this, props));
    _this.state = {
      menuOpen: false,
      isTop: true,
      vpWidth: null
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MainMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
      document.addEventListener('scroll', function () {
        var isTop = window.scrollY < 1;

        if (isTop !== _this2.state.isTop) {
          _this2.setState({
            isTop: isTop
          });
        }
      });
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
    key: "handleStateChange",
    value: function handleStateChange(state) {
      this.setState({
        menuOpen: state.isOpen
      });
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.setState({
        menuOpen: false
      });
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      return this.state.vpWidth > 1024 ? this.renderDesktopMenu() : this.renderMobileMenu();
    }
  }, {
    key: "renderDesktopMenu",
    value: function renderDesktopMenu() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-1346000128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-1346000128" + " " + "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1346000128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this3.closeMenu();
        },
        href: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1346000128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this3.closeMenu();
        },
        href: "team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Team")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1346000128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this3.closeMenu();
        },
        href: "join-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Join us")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-1346000128" + " " + "social-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1346000128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "linkedin",
        className: "jsx-1346000128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "linkedin")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1346000128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "twitter",
        className: "jsx-1346000128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "twitter")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1346000128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "github",
        className: "jsx-1346000128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "github")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1346000128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "NATSio",
        className: "jsx-1346000128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "NATSio"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1346000128",
        css: ".navigation.jsx-1346000128{display:inline-block;list-style:none;}.navigation.jsx-1346000128 li.jsx-1346000128{display:inline-block;margin:0 1rem;}.navigation.jsx-1346000128 li.jsx-1346000128:first-child{margin-left:0;}.navigation.jsx-1346000128 li.jsx-1346000128:last-child{margin-right:0;}.social-links.jsx-1346000128{display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL01haW5NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGb0IsQUFHa0MsQUFJQSxBQUlQLEFBR0MsQUFHTSxjQUx2QixDQUdBLE1BWGtCLEFBSUYsQUFVaEIsY0FUQSxFQUpBIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL01haW5NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNsaWRlIGFzIE1lbnUgfSBmcm9tICdyZWFjdC1idXJnZXItbWVudSc7XG5pbXBvcnQgU2Nyb2xsVG8gZnJvbSAnLi4vY29tcG9uZW50cy9TY3JvbGxUbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVudU9wZW46IGZhbHNlLFxuICAgICAgaXNUb3A6IHRydWUsXG4gICAgICB2cFdpZHRoOiBudWxsXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgY29uc3QgaXNUb3AgPSB3aW5kb3cuc2Nyb2xsWSA8IDE7XG4gICAgICBpZiAoaXNUb3AgIT09IHRoaXMuc3RhdGUuaXNUb3ApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzVG9wIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdnBXaWR0aDogd2luZG93LmlubmVyV2lkdGggfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnN0YXRlLnZwV2lkdGg7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICBoYW5kbGVTdGF0ZUNoYW5nZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3Blbjogc3RhdGUuaXNPcGVuIH0pO1xuICB9XG5cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46ICF0aGlzLnN0YXRlLm1lbnVPcGVuIH0pO1xuICB9XG5cbiAgY2xvc2VNZW51KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3BlbjogZmFsc2UgfSk7XG4gIH1cblxuICByZW5kZXJNZW51KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnZwV2lkdGggPiAxMDI0XG4gICAgICA/IHRoaXMucmVuZGVyRGVza3RvcE1lbnUoKVxuICAgICAgOiB0aGlzLnJlbmRlck1vYmlsZU1lbnUoKTtcbiAgfVxuXG4gIHJlbmRlckRlc2t0b3BNZW51KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJhYm91dFwiPlxuICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cInRlYW1cIj5cbiAgICAgICAgICAgICAgICBUZWFtXG4gICAgICAgICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cImpvaW4tdXNcIj5cbiAgICAgICAgICAgICAgICBKb2luIHVzXG4gICAgICAgICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3NcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwibGlua2VkaW5cIj5saW5rZWRpbjwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0d2l0dGVyXCI+dHdpdHRlcjwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJnaXRodWJcIj5naXRodWI8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiTkFUU2lvXCI+TkFUU2lvPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWdhdGlvbiBsaTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmlnYXRpb24gbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zb2NpYWwtbGlua3Mge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTW9iaWxlTWVudSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnVcbiAgICAgICAgcmlnaHRcbiAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm1lbnVPcGVufVxuICAgICAgICBvblN0YXRlQ2hhbmdlPXtzdGF0ZSA9PiB0aGlzLmhhbmRsZVN0YXRlQ2hhbmdlKHN0YXRlKX1cbiAgICAgID5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgICBBYm91dFxuICAgICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJ0ZWFtXCI+XG4gICAgICAgICAgICBUZWFtXG4gICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cImpvaW4tdXNcIj5cbiAgICAgICAgICAgIEpvaW4gdXNcbiAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rc1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJsaW5rZWRpblwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1IDI1XCJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIiNGRkZcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMC4zODI3NTgxMSwxMC4yNjg0ODIyIEw1LjQ1NDMwMzA3LDEwLjI2ODQ4MjIgTDUuNDU0MzAzMDcsMjcgTDAuMzgyNzU4MTEsMjcgTDAuMzgyNzU4MTEsMTAuMjY4NDgyMiBaIE0yLjk2NjM3NTM1LDIgQzQuNTkzMDk3MzIsMiA1LjkzMjc1MDcsMy4zNjE4Njc2NSA1LjkzMjc1MDcsNS4wMTU1NjQwOCBDNS45MzI3NTA3LDYuNjY5MjYwNTIgNC41OTMwOTczMiw4LjAzMTEyODE3IDIuOTY2Mzc1MzUsOC4wMzExMjgxNyBDMS4zMzk2NTMzOCw4LjAzMTEyODE3IC0xLjc3NjM1Njg0ZS0xMyw2LjY2OTI2MDUyIC0xLjc3NjM1Njg0ZS0xMyw1LjAxNTU2NDA4IEMtMS43NzYzNTY4NGUtMTMsMy4zNjE4Njc2NSAxLjMzOTY1MzM4LDIgMi45NjYzNzUzNSwyIFogTTguNzA3NzQ3LDEwLjI2ODQ4MjIgTDEzLjU4NzkxMjksMTAuMjY4NDgyMiBMMTMuNTg3OTEyOSwxMi41MDU4MzYyIEwxMy42ODM2MDI0LDEyLjUwNTgzNjIgQzE0LjM1MzQyOTEsMTEuMTQzOTY4NSAxNi4wNzU4NDA2LDkuNzgyMTAwODYgMTguNTYzNzY4Myw5Ljc4MjEwMDg2IEMyMy43MzEwMDI4LDkuNzgyMTAwODYgMjQuNjg3ODk4MSwxMy4yODQwNDYzIDI0LjY4Nzg5ODEsMTcuNzU4NzU0MyBMMjQuNjg3ODk4MSwyNi45MDI3MjI4IEwxOS42MTYzNTMxLDI2LjkwMjcyMjggTDE5LjYxNjM1MzEsMTguNzMxNTE2OSBDMTkuNjE2MzUzMSwxNi43ODU5OTE2IDE5LjYxNjM1MzEsMTQuMjU2ODA4OSAxNi45MzcwNDY0LDE0LjI1NjgwODkgQzE0LjI1NzczOTYsMTQuMjU2ODA4OSAxMy44NzQ5ODE1LDE2LjM5Njg4NjYgMTMuODc0OTgxNSwxOC41MzY5NjQzIEwxMy44NzQ5ODE1LDI2LjgwNTQ0NjUgTDguODAzNDM2NTMsMjYuODA1NDQ2NSBMOC44MDM0MzY1MywxMC4yNjg0ODIyIEw4LjcwNzc0NywxMC4yNjg0ODIyIFpcIiAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwidHdpdHRlclwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMnB4XCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1IDIyXCJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTUyNi4wMDAwMDAsIC00MS4wMDAwMDApXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZGRkZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cIm5vbnplcm9cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ1MS4wMDAwMDAsIDM4LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTk5LjY4Nzg5ODEsNS40OTA4NTc1OCBDOTguNzc5MjQ0OCw1LjkxMzU0NTc1IDk3LjgwNDI3MjksNi4yMDAyMDgwMiA5Ni43Nzk4ODQ4LDYuMzI4MTg3NTQgQzk3LjgyNTg1NDcsNS42NzA2MzAyOCA5OC42MjY1MTg0LDQuNjI3NjUyMjIgOTkuMDA1OTk0NiwzLjM4ODY4MTY5IEM5OC4wMjQ4NTA4LDMuOTk3NjIxOTggOTYuOTQxODQ5LDQuNDM5NzkwODEgOTUuNzg3ODg5Niw0LjY3OTQ4NzczIEM5NC44NjM4MjY1LDMuNjQ0NTk4MzkgOTMuNTQ5NDM1OCwzIDkyLjA5MTU1NjYsMyBDODkuMjk0NjM5MSwzIDg3LjAyNjg1ODMsNS4zODA3NDk0NiA4Ny4wMjY4NTgzLDguMzE1Mzg1MTQgQzg3LjAyNjg1ODMsOC43MzE1OTM4NiA4Ny4wNzE1OTUxLDkuMTM4MTA0NiA4Ny4xNTgwMDI5LDkuNTI2ODI4NjQgQzgyLjk0OTUxNjIsOS4zMDQ5MTg0MSA3OS4yMTc3MjQ1LDcuMTg4MTc0MzcgNzYuNzIwMDg3NywzLjk3MTcwNDIyIEM3Ni4yODM0OTA0LDQuNzU1NTg5MzkgNzYuMDM1MTE4NSw1LjY2ODk3ODY2IDc2LjAzNTExODUsNi42NDM5ODYxMiBDNzYuMDM1MTE4NSw4LjQ4ODY3ODQgNzYuOTI5ODk0OSwxMC4xMTYzMzA2IDc4LjI4NzQ4OTQsMTEuMDY4NTk2NSBDNzcuNDU3NDk4NywxMS4wMzk0NjAyIDc2LjY3Njg4MzgsMTAuNzk5NzYzMyA3NS45OTM0ODc4LDEwLjQwMTM0MTMgTDc1Ljk5MzQ4NzgsMTAuNDY3NzQ0OSBDNzUuOTkzNDg3OCwxMy4wNDI4MzUyIDc3LjczOTgzNjcsMTUuMTkxOTc2NSA4MC4wNTU0MjAyLDE1LjY4MTExMDcgQzc5LjYzMTE2NjgsMTUuODAwOTU5MSA3OS4xODM3OTg4LDE1Ljg2NzM2MjggNzguNzIwOTgwNiwxNS44NjczNjI4IEM3OC4zOTM5NDYxLDE1Ljg2NzM2MjggNzguMDc3NjgyMywxNS44MzMzNTYzIDc3Ljc2NzU5MDUsMTUuNzY4NTYxOSBDNzguNDEyNDIxNywxNy44ODIwODc0IDgwLjI4MjIxMDMsMTkuNDE5MDI3NSA4Mi40OTc1NDk0LDE5LjQ2MTE2NSBDODAuNzY1MDc3NCwyMC44ODYzODc3IDc4LjU4MDU5ODIsMjEuNzMzNDE1NiA3Ni4yMDc5MzQsMjEuNzMzNDE1NiBDNzUuNzk5MTMwOCwyMS43MzM0MTU2IDc1LjM5NjQ1OTIsMjEuNzA3NDk3OSA3NSwyMS42NjA1MzI1IEM3Ny4yNDE1NTk5LDIzLjE3MTU5NzIgNzkuOTAyNzM0MSwyNC4wNTI2MzE2IDgyLjc2MjkwNDQsMjQuMDUyNjMxNiBDOTIuMDc5MjkzMywyNC4wNTI2MzE2IDk3LjE3MTc4NTcsMTUuOTUxNTk1NSA5Ny4xNzE3ODU3LDguOTI1OTc3MDYgTDk3LjE1NDgwMjcsOC4yMzc2NzQyMiBDOTguMTQ5ODIzNCw3LjQ5MjYyMzM0IDk5LjAxMDYzMzcsNi41NTY1MzQ4NiA5OS42ODc4OTgxLDUuNDkwODU3NTggWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cImdpdGh1YlwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1IDI1XCJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTYwMS4wMDAwMDAsIC00MC4wMDAwMDApXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZGRkZcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ1MS4wMDAwMDAsIDM4LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2Mi4zNDM5NDksMiBDMTU1LjU1NDc3NywyIDE1MCw3Ljc2NjM3OTcyIDE1MCwxNC44MTQxNzcxIEMxNTAsMjAuNTAwNDY4MyAxNTMuNTQ4ODg1LDI1LjMwNTc4NDcgMTU4LjQwOTMxNSwyNi45ODc2NDU0IEMxNTkuMDI2NTEzLDI3LjA2NzczNCAxNTkuMjU3OTYyLDI2Ljc0NzM3OTYgMTU5LjI1Nzk2MiwyNi4zNDY5MzY2IEMxNTkuMjU3OTYyLDI2LjAyNjU4MjEgMTU5LjI1Nzk2MiwyNS4yMjU2OTYxIDE1OS4yNTc5NjIsMjQuMTg0NTQ0MiBDMTU1Ljc4NjIyNiwyNC45ODU0MzAzIDE1NS4wOTE4NzksMjIuNTAyNjgzNCAxNTUuMDkxODc5LDIyLjUwMjY4MzQgQzE1NC41NTE4MzEsMjEuMDYxMDg4NSAxNTMuNzAzMTg1LDIwLjY2MDY0NTUgMTUzLjcwMzE4NSwyMC42NjA2NDU1IEMxNTIuNTQ1OTM5LDE5Ljg1OTc1OTQgMTUzLjc4MDMzNCwxOS44NTk3NTk0IDE1My43ODAzMzQsMTkuODU5NzU5NCBDMTU1LjAxNDcyOSwxOS45Mzk4NDggMTU1LjcwOTA3NiwyMS4xNDExNzcxIDE1NS43MDkwNzYsMjEuMTQxMTc3MSBDMTU2Ljc4OTE3MiwyMy4wNjMzMDM3IDE1OC41NjM2MTUsMjIuNTAyNjgzNCAxNTkuMzM1MTExLDIyLjE4MjMyOSBDMTU5LjQxMjI2MSwyMS4zODE0NDI5IDE1OS43OTgwMSwyMC44MjA4MjI3IDE2MC4xMDY2MDgsMjAuNTAwNDY4MyBDMTU3LjMyOTIyLDIwLjE4MDExMzggMTU0LjQ3NDY4MiwxOS4wNTg4NzMzIDE1NC40NzQ2ODIsMTQuMTczNDY4MyBDMTU0LjQ3NDY4MiwxMi44MTE5NjIgMTU0LjkzNzU4LDExLjYxMDYzMjkgMTU1LjcwOTA3NiwxMC43Mjk2NTgyIEMxNTUuNTU0Nzc3LDEwLjQwOTMwMzggMTU1LjE2OTAyOSw5LjEyNzg4NjA0IDE1NS44NjMzNzYsNy4zNjU5MzY2OCBDMTU1Ljg2MzM3Niw3LjM2NTkzNjY4IDE1Ni44NjYzMjIsNy4wNDU1ODIyNSAxNTkuMjU3OTYyLDguNjQ3MzU0MzkgQzE2MC4yNjA5MDgsOC4zMjY5OTk5NyAxNjEuMjYzODU0LDguMjQ2OTExMzYgMTYyLjM0Mzk0OSw4LjI0NjkxMTM2IEMxNjMuNDI0MDQ1LDguMjQ2OTExMzYgMTY0LjQyNjk5LDguNDA3MDg4NTcgMTY1LjQyOTkzNiw4LjY0NzM1NDM5IEMxNjcuODIxNTc2LDYuOTY1NDkzNjQgMTY4LjgyNDUyMiw3LjI4NTg0ODA3IDE2OC44MjQ1MjIsNy4yODU4NDgwNyBDMTY5LjUxODg2OSw5LjA0Nzc5NzQzIDE2OS4wNTU5NzEsMTAuMzI5MjE1MSAxNjguOTc4ODIyLDEwLjY0OTU2OTYgQzE2OS43NTAzMTgsMTEuNTMwNTQ0MyAxNzAuMjEzMjE3LDEyLjY1MTc4NDggMTcwLjIxMzIxNywxNC4wOTMzNzk3IEMxNzAuMjEzMjE3LDE4Ljk3ODc4NDcgMTY3LjM1ODY3OCwyMC4xMDAwMjUyIDE2NC41ODEyOSwyMC40MjAzNzk2IEMxNjUuMDQ0MTg4LDIwLjgyMDgyMjcgMTY1LjQyOTkzNiwyMS42MjE3MDg4IDE2NS40Mjk5MzYsMjIuODIzMDM3OSBDMTY1LjQyOTkzNiwyNC41MDQ4OTg2IDE2NS40Mjk5MzYsMjUuOTQ2NDkzNSAxNjUuNDI5OTM2LDI2LjM0NjkzNjYgQzE2NS40Mjk5MzYsMjYuNjY3MjkxIDE2NS42NjEzODUsMjcuMDY3NzM0IDE2Ni4yNzg1ODMsMjYuOTg3NjQ1NCBDMTcxLjEzOTAxMywyNS4zMDU3ODQ3IDE3NC42ODc4OTgsMjAuNTAwNDY4MyAxNzQuNjg3ODk4LDE0LjgxNDE3NzEgQzE3NC42ODc4OTgsNy43NjYzNzk3MiAxNjkuMTMzMTIxLDIgMTYyLjM0Mzk0OSwyIFpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJOQVRTaW9cIj5OQVRTaW88L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAvKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGJ1cmdlciBidXR0b24gKi9cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJ1dHRvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMS40cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgKi9cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1idXJnZXItYmFyczpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibS1idXJnZXItYmFyczpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJtLWJ1cmdlci1iYXJzOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICB0b3A6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLWNyb3NzLWJ1dHRvbiB7XG4gICAgICAgICAgICByaWdodDogNHZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0b3A6IDR2dyAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIENvbG9yL3NoYXBlIG9mIGNsb3NlIGJ1dHRvbiBjcm9zcyAqL1xuICAgICAgICAgIC5ibS1jcm9zcyB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1mb250KTtcbiAgICAgICAgICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEdlbmVyYWwgc2lkZWJhciBzdHlsZXMgKi9cbiAgICAgICAgICAuYm0tbWVudSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZzogNGVtIDEuNWVtIDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1tZW51IGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLW1lbnUgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1tZW51LXdyYXAge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcXVhdGVybmFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBXcmFwcGVyIGZvciBpdGVtIGxpc3QgKi9cbiAgICAgICAgICAuYm0taXRlbS1saXN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuOGVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFN0eWxpbmcgb2Ygb3ZlcmxheSAqL1xuICAgICAgICAgIC5ibS1vdmVybGF5IHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5yZW5kZXJNZW51KCl9XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLnNvY2lhbC1saW5rcyB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zb2NpYWwtbGlua3MgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/MainMenu.js */",
        __self: this
      }));
    }
  }, {
    key: "renderMobileMenu",
    value: function renderMobileMenu() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__["slide"], {
        right: true,
        isOpen: this.state.menuOpen,
        onStateChange: function onStateChange(state) {
          return _this4.handleStateChange(state);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this4.closeMenu();
        },
        href: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this4.closeMenu();
        },
        href: "team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this4.closeMenu();
        },
        href: "join-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Join us")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2808239405" + " " + "social-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "linkedin",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        width: "25px",
        height: "25px",
        viewBox: "0 0 25 25",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "#FFF",
        fillRule: "evenodd",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M0.38275811,10.2684822 L5.45430307,10.2684822 L5.45430307,27 L0.38275811,27 L0.38275811,10.2684822 Z M2.96637535,2 C4.59309732,2 5.9327507,3.36186765 5.9327507,5.01556408 C5.9327507,6.66926052 4.59309732,8.03112817 2.96637535,8.03112817 C1.33965338,8.03112817 -1.77635684e-13,6.66926052 -1.77635684e-13,5.01556408 C-1.77635684e-13,3.36186765 1.33965338,2 2.96637535,2 Z M8.707747,10.2684822 L13.5879129,10.2684822 L13.5879129,12.5058362 L13.6836024,12.5058362 C14.3534291,11.1439685 16.0758406,9.78210086 18.5637683,9.78210086 C23.7310028,9.78210086 24.6878981,13.2840463 24.6878981,17.7587543 L24.6878981,26.9027228 L19.6163531,26.9027228 L19.6163531,18.7315169 C19.6163531,16.7859916 19.6163531,14.2568089 16.9370464,14.2568089 C14.2577396,14.2568089 13.8749815,16.3968866 13.8749815,18.5369643 L13.8749815,26.8054465 L8.80343653,26.8054465 L8.80343653,10.2684822 L8.707747,10.2684822 Z",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "twitter",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        width: "25px",
        height: "22px",
        viewBox: "0 0 25 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(-1526.000000, -41.000000)",
        fill: "#FFFFFF",
        fillRule: "nonzero",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(1451.000000, 38.000000)",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M99.6878981,5.49085758 C98.7792448,5.91354575 97.8042729,6.20020802 96.7798848,6.32818754 C97.8258547,5.67063028 98.6265184,4.62765222 99.0059946,3.38868169 C98.0248508,3.99762198 96.941849,4.43979081 95.7878896,4.67948773 C94.8638265,3.64459839 93.5494358,3 92.0915566,3 C89.2946391,3 87.0268583,5.38074946 87.0268583,8.31538514 C87.0268583,8.73159386 87.0715951,9.1381046 87.1580029,9.52682864 C82.9495162,9.30491841 79.2177245,7.18817437 76.7200877,3.97170422 C76.2834904,4.75558939 76.0351185,5.66897866 76.0351185,6.64398612 C76.0351185,8.4886784 76.9298949,10.1163306 78.2874894,11.0685965 C77.4574987,11.0394602 76.6768838,10.7997633 75.9934878,10.4013413 L75.9934878,10.4677449 C75.9934878,13.0428352 77.7398367,15.1919765 80.0554202,15.6811107 C79.6311668,15.8009591 79.1837988,15.8673628 78.7209806,15.8673628 C78.3939461,15.8673628 78.0776823,15.8333563 77.7675905,15.7685619 C78.4124217,17.8820874 80.2822103,19.4190275 82.4975494,19.461165 C80.7650774,20.8863877 78.5805982,21.7334156 76.207934,21.7334156 C75.7991308,21.7334156 75.3964592,21.7074979 75,21.6605325 C77.2415599,23.1715972 79.9027341,24.0526316 82.7629044,24.0526316 C92.0792933,24.0526316 97.1717857,15.9515955 97.1717857,8.92597706 L97.1548027,8.23767422 C98.1498234,7.49262334 99.0106337,6.55653486 99.6878981,5.49085758 Z",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "github",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        width: "25px",
        height: "25px",
        viewBox: "0 0 25 25",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(-1601.000000, -40.000000)",
        fill: "#FFFFFF",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(1451.000000, 38.000000)",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M162.343949,2 C155.554777,2 150,7.76637972 150,14.8141771 C150,20.5004683 153.548885,25.3057847 158.409315,26.9876454 C159.026513,27.067734 159.257962,26.7473796 159.257962,26.3469366 C159.257962,26.0265821 159.257962,25.2256961 159.257962,24.1845442 C155.786226,24.9854303 155.091879,22.5026834 155.091879,22.5026834 C154.551831,21.0610885 153.703185,20.6606455 153.703185,20.6606455 C152.545939,19.8597594 153.780334,19.8597594 153.780334,19.8597594 C155.014729,19.939848 155.709076,21.1411771 155.709076,21.1411771 C156.789172,23.0633037 158.563615,22.5026834 159.335111,22.182329 C159.412261,21.3814429 159.79801,20.8208227 160.106608,20.5004683 C157.32922,20.1801138 154.474682,19.0588733 154.474682,14.1734683 C154.474682,12.811962 154.93758,11.6106329 155.709076,10.7296582 C155.554777,10.4093038 155.169029,9.12788604 155.863376,7.36593668 C155.863376,7.36593668 156.866322,7.04558225 159.257962,8.64735439 C160.260908,8.32699997 161.263854,8.24691136 162.343949,8.24691136 C163.424045,8.24691136 164.42699,8.40708857 165.429936,8.64735439 C167.821576,6.96549364 168.824522,7.28584807 168.824522,7.28584807 C169.518869,9.04779743 169.055971,10.3292151 168.978822,10.6495696 C169.750318,11.5305443 170.213217,12.6517848 170.213217,14.0933797 C170.213217,18.9787847 167.358678,20.1000252 164.58129,20.4203796 C165.044188,20.8208227 165.429936,21.6217088 165.429936,22.8230379 C165.429936,24.5048986 165.429936,25.9464935 165.429936,26.3469366 C165.429936,26.667291 165.661385,27.067734 166.278583,26.9876454 C171.139013,25.3057847 174.687898,20.5004683 174.687898,14.8141771 C174.687898,7.76637972 169.133121,2 162.343949,2 Z",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "NATSio",
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "NATSio"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2808239405",
        css: ".bm-burger-button{position:relative;width:1.4rem;height:14px;}.bm-burger-bars{position:absolute;height:2px !important;border-radius:4px;left:0;right:0;background-color:var(--color-font);}.bm-burger-bars:nth-child(1){top:0 !important;}.bm-burger-bars:nth-child(2){top:50% !important;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.bm-burger-bars:nth-child(3){top:100% !important;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}.bm-cross-button{right:4vw !important;top:4vw !important;}.bm-cross{cursor:pointer;background:var(--color-font);height:20px !important;}.bm-menu{background:var(--color-quaternary) !important;padding:4em 1.5em 0;font-size:1.15em;-webkit-transition:all 400ms ease;transition:all 400ms ease;}.bm-menu button{width:80%;margin:1rem 0;}.bm-menu button:first-of-type{margin-top:30%;}.bm-menu-wrap{background:var(--color-quaternary) !important;top:0;}.bm-item-list{padding:0.8em;}.bm-overlay{top:0;left:0;width:100vw !important;height:100vh !important;z-index:1001 !important;background:var(--color-quaternary) !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL01haW5NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBNMkIsQUFJK0IsQUFPQSxBQVNELEFBR0UsQUFJQyxBQUtDLEFBTU4sQUFPK0IsQUFPcEMsQUFLSyxBQUkrQixBQU1oQyxBQUtSLE1BQ0MsSUFwQk8sR0FxQlMsQ0FOekIsQ0E3QitCLEFBbUIvQixFQXJDQSxDQWhCZSxBQU9TLENBWUssQ0FJQyxDQUtULEdBcUJyQixPQWhEYyxLQXFFWSxJQTlETixBQXFCcEIsR0EzQkEsQ0FpQ3lCLEVBTUgsQUFnQmQsTUFDUixNQWpEUyxFQThEaUIsS0E3RGhCLENBZ0NTLENBTm5CLE1BekJxQyxVQWdDVCxDQTZCb0Isd0JBNURoRCxJQVFBLElBSUEsY0FpREEsYUE3QkEiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL2NvbXBvbmVudHMvTWFpbk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2xpZGUgYXMgTWVudSB9IGZyb20gJ3JlYWN0LWJ1cmdlci1tZW51JztcbmltcG9ydCBTY3JvbGxUbyBmcm9tICcuLi9jb21wb25lbnRzL1Njcm9sbFRvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW51T3BlbjogZmFsc2UsXG4gICAgICBpc1RvcDogdHJ1ZSxcbiAgICAgIHZwV2lkdGg6IG51bGxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpc1RvcCA9IHdpbmRvdy5zY3JvbGxZIDwgMTtcbiAgICAgIGlmIChpc1RvcCAhPT0gdGhpcy5zdGF0ZS5pc1RvcCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNUb3AgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2cFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc3RhdGUudnBXaWR0aDtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXRlQ2hhbmdlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVPcGVuOiBzdGF0ZS5pc09wZW4gfSk7XG4gIH1cblxuICB0b2dnbGVNZW51KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3BlbjogIXRoaXMuc3RhdGUubWVudU9wZW4gfSk7XG4gIH1cblxuICBjbG9zZU1lbnUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVPcGVuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlck1lbnUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudnBXaWR0aCA+IDEwMjRcbiAgICAgID8gdGhpcy5yZW5kZXJEZXNrdG9wTWVudSgpXG4gICAgICA6IHRoaXMucmVuZGVyTW9iaWxlTWVudSgpO1xuICB9XG5cbiAgcmVuZGVyRGVza3RvcE1lbnUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwidGVhbVwiPlxuICAgICAgICAgICAgICAgIFRlYW1cbiAgICAgICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwiam9pbi11c1wiPlxuICAgICAgICAgICAgICAgIEpvaW4gdXNcbiAgICAgICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rc1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJsaW5rZWRpblwiPmxpbmtlZGluPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cInR3aXR0ZXJcIj50d2l0dGVyPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cImdpdGh1YlwiPmdpdGh1YjwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJOQVRTaW9cIj5OQVRTaW88L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmlnYXRpb24gbGkge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWdhdGlvbiBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNvY2lhbC1saW5rcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJNb2JpbGVNZW51KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWVudVxuICAgICAgICByaWdodFxuICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUubWVudU9wZW59XG4gICAgICAgIG9uU3RhdGVDaGFuZ2U9e3N0YXRlID0+IHRoaXMuaGFuZGxlU3RhdGVDaGFuZ2Uoc3RhdGUpfVxuICAgICAgPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cInRlYW1cIj5cbiAgICAgICAgICAgIFRlYW1cbiAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwiam9pbi11c1wiPlxuICAgICAgICAgICAgSm9pbiB1c1xuICAgICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtzXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cImxpbmtlZGluXCI+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjUgMjVcIlxuICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwiI0ZGRlwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLjM4Mjc1ODExLDEwLjI2ODQ4MjIgTDUuNDU0MzAzMDcsMTAuMjY4NDgyMiBMNS40NTQzMDMwNywyNyBMMC4zODI3NTgxMSwyNyBMMC4zODI3NTgxMSwxMC4yNjg0ODIyIFogTTIuOTY2Mzc1MzUsMiBDNC41OTMwOTczMiwyIDUuOTMyNzUwNywzLjM2MTg2NzY1IDUuOTMyNzUwNyw1LjAxNTU2NDA4IEM1LjkzMjc1MDcsNi42NjkyNjA1MiA0LjU5MzA5NzMyLDguMDMxMTI4MTcgMi45NjYzNzUzNSw4LjAzMTEyODE3IEMxLjMzOTY1MzM4LDguMDMxMTI4MTcgLTEuNzc2MzU2ODRlLTEzLDYuNjY5MjYwNTIgLTEuNzc2MzU2ODRlLTEzLDUuMDE1NTY0MDggQy0xLjc3NjM1Njg0ZS0xMywzLjM2MTg2NzY1IDEuMzM5NjUzMzgsMiAyLjk2NjM3NTM1LDIgWiBNOC43MDc3NDcsMTAuMjY4NDgyMiBMMTMuNTg3OTEyOSwxMC4yNjg0ODIyIEwxMy41ODc5MTI5LDEyLjUwNTgzNjIgTDEzLjY4MzYwMjQsMTIuNTA1ODM2MiBDMTQuMzUzNDI5MSwxMS4xNDM5Njg1IDE2LjA3NTg0MDYsOS43ODIxMDA4NiAxOC41NjM3NjgzLDkuNzgyMTAwODYgQzIzLjczMTAwMjgsOS43ODIxMDA4NiAyNC42ODc4OTgxLDEzLjI4NDA0NjMgMjQuNjg3ODk4MSwxNy43NTg3NTQzIEwyNC42ODc4OTgxLDI2LjkwMjcyMjggTDE5LjYxNjM1MzEsMjYuOTAyNzIyOCBMMTkuNjE2MzUzMSwxOC43MzE1MTY5IEMxOS42MTYzNTMxLDE2Ljc4NTk5MTYgMTkuNjE2MzUzMSwxNC4yNTY4MDg5IDE2LjkzNzA0NjQsMTQuMjU2ODA4OSBDMTQuMjU3NzM5NiwxNC4yNTY4MDg5IDEzLjg3NDk4MTUsMTYuMzk2ODg2NiAxMy44NzQ5ODE1LDE4LjUzNjk2NDMgTDEzLjg3NDk4MTUsMjYuODA1NDQ2NSBMOC44MDM0MzY1MywyNi44MDU0NDY1IEw4LjgwMzQzNjUzLDEwLjI2ODQ4MjIgTDguNzA3NzQ3LDEwLjI2ODQ4MjIgWlwiIC8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0d2l0dGVyXCI+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIycHhcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjUgMjJcIlxuICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNTI2LjAwMDAwMCwgLTQxLjAwMDAwMClcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwibm9uemVyb1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDUxLjAwMDAwMCwgMzguMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTkuNjg3ODk4MSw1LjQ5MDg1NzU4IEM5OC43NzkyNDQ4LDUuOTEzNTQ1NzUgOTcuODA0MjcyOSw2LjIwMDIwODAyIDk2Ljc3OTg4NDgsNi4zMjgxODc1NCBDOTcuODI1ODU0Nyw1LjY3MDYzMDI4IDk4LjYyNjUxODQsNC42Mjc2NTIyMiA5OS4wMDU5OTQ2LDMuMzg4NjgxNjkgQzk4LjAyNDg1MDgsMy45OTc2MjE5OCA5Ni45NDE4NDksNC40Mzk3OTA4MSA5NS43ODc4ODk2LDQuNjc5NDg3NzMgQzk0Ljg2MzgyNjUsMy42NDQ1OTgzOSA5My41NDk0MzU4LDMgOTIuMDkxNTU2NiwzIEM4OS4yOTQ2MzkxLDMgODcuMDI2ODU4Myw1LjM4MDc0OTQ2IDg3LjAyNjg1ODMsOC4zMTUzODUxNCBDODcuMDI2ODU4Myw4LjczMTU5Mzg2IDg3LjA3MTU5NTEsOS4xMzgxMDQ2IDg3LjE1ODAwMjksOS41MjY4Mjg2NCBDODIuOTQ5NTE2Miw5LjMwNDkxODQxIDc5LjIxNzcyNDUsNy4xODgxNzQzNyA3Ni43MjAwODc3LDMuOTcxNzA0MjIgQzc2LjI4MzQ5MDQsNC43NTU1ODkzOSA3Ni4wMzUxMTg1LDUuNjY4OTc4NjYgNzYuMDM1MTE4NSw2LjY0Mzk4NjEyIEM3Ni4wMzUxMTg1LDguNDg4Njc4NCA3Ni45Mjk4OTQ5LDEwLjExNjMzMDYgNzguMjg3NDg5NCwxMS4wNjg1OTY1IEM3Ny40NTc0OTg3LDExLjAzOTQ2MDIgNzYuNjc2ODgzOCwxMC43OTk3NjMzIDc1Ljk5MzQ4NzgsMTAuNDAxMzQxMyBMNzUuOTkzNDg3OCwxMC40Njc3NDQ5IEM3NS45OTM0ODc4LDEzLjA0MjgzNTIgNzcuNzM5ODM2NywxNS4xOTE5NzY1IDgwLjA1NTQyMDIsMTUuNjgxMTEwNyBDNzkuNjMxMTY2OCwxNS44MDA5NTkxIDc5LjE4Mzc5ODgsMTUuODY3MzYyOCA3OC43MjA5ODA2LDE1Ljg2NzM2MjggQzc4LjM5Mzk0NjEsMTUuODY3MzYyOCA3OC4wNzc2ODIzLDE1LjgzMzM1NjMgNzcuNzY3NTkwNSwxNS43Njg1NjE5IEM3OC40MTI0MjE3LDE3Ljg4MjA4NzQgODAuMjgyMjEwMywxOS40MTkwMjc1IDgyLjQ5NzU0OTQsMTkuNDYxMTY1IEM4MC43NjUwNzc0LDIwLjg4NjM4NzcgNzguNTgwNTk4MiwyMS43MzM0MTU2IDc2LjIwNzkzNCwyMS43MzM0MTU2IEM3NS43OTkxMzA4LDIxLjczMzQxNTYgNzUuMzk2NDU5MiwyMS43MDc0OTc5IDc1LDIxLjY2MDUzMjUgQzc3LjI0MTU1OTksMjMuMTcxNTk3MiA3OS45MDI3MzQxLDI0LjA1MjYzMTYgODIuNzYyOTA0NCwyNC4wNTI2MzE2IEM5Mi4wNzkyOTMzLDI0LjA1MjYzMTYgOTcuMTcxNzg1NywxNS45NTE1OTU1IDk3LjE3MTc4NTcsOC45MjU5NzcwNiBMOTcuMTU0ODAyNyw4LjIzNzY3NDIyIEM5OC4xNDk4MjM0LDcuNDkyNjIzMzQgOTkuMDEwNjMzNyw2LjU1NjUzNDg2IDk5LjY4Nzg5ODEsNS40OTA4NTc1OCBaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiZ2l0aHViXCI+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjUgMjVcIlxuICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNjAxLjAwMDAwMCwgLTQwLjAwMDAwMClcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDUxLjAwMDAwMCwgMzguMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYyLjM0Mzk0OSwyIEMxNTUuNTU0Nzc3LDIgMTUwLDcuNzY2Mzc5NzIgMTUwLDE0LjgxNDE3NzEgQzE1MCwyMC41MDA0NjgzIDE1My41NDg4ODUsMjUuMzA1Nzg0NyAxNTguNDA5MzE1LDI2Ljk4NzY0NTQgQzE1OS4wMjY1MTMsMjcuMDY3NzM0IDE1OS4yNTc5NjIsMjYuNzQ3Mzc5NiAxNTkuMjU3OTYyLDI2LjM0NjkzNjYgQzE1OS4yNTc5NjIsMjYuMDI2NTgyMSAxNTkuMjU3OTYyLDI1LjIyNTY5NjEgMTU5LjI1Nzk2MiwyNC4xODQ1NDQyIEMxNTUuNzg2MjI2LDI0Ljk4NTQzMDMgMTU1LjA5MTg3OSwyMi41MDI2ODM0IDE1NS4wOTE4NzksMjIuNTAyNjgzNCBDMTU0LjU1MTgzMSwyMS4wNjEwODg1IDE1My43MDMxODUsMjAuNjYwNjQ1NSAxNTMuNzAzMTg1LDIwLjY2MDY0NTUgQzE1Mi41NDU5MzksMTkuODU5NzU5NCAxNTMuNzgwMzM0LDE5Ljg1OTc1OTQgMTUzLjc4MDMzNCwxOS44NTk3NTk0IEMxNTUuMDE0NzI5LDE5LjkzOTg0OCAxNTUuNzA5MDc2LDIxLjE0MTE3NzEgMTU1LjcwOTA3NiwyMS4xNDExNzcxIEMxNTYuNzg5MTcyLDIzLjA2MzMwMzcgMTU4LjU2MzYxNSwyMi41MDI2ODM0IDE1OS4zMzUxMTEsMjIuMTgyMzI5IEMxNTkuNDEyMjYxLDIxLjM4MTQ0MjkgMTU5Ljc5ODAxLDIwLjgyMDgyMjcgMTYwLjEwNjYwOCwyMC41MDA0NjgzIEMxNTcuMzI5MjIsMjAuMTgwMTEzOCAxNTQuNDc0NjgyLDE5LjA1ODg3MzMgMTU0LjQ3NDY4MiwxNC4xNzM0NjgzIEMxNTQuNDc0NjgyLDEyLjgxMTk2MiAxNTQuOTM3NTgsMTEuNjEwNjMyOSAxNTUuNzA5MDc2LDEwLjcyOTY1ODIgQzE1NS41NTQ3NzcsMTAuNDA5MzAzOCAxNTUuMTY5MDI5LDkuMTI3ODg2MDQgMTU1Ljg2MzM3Niw3LjM2NTkzNjY4IEMxNTUuODYzMzc2LDcuMzY1OTM2NjggMTU2Ljg2NjMyMiw3LjA0NTU4MjI1IDE1OS4yNTc5NjIsOC42NDczNTQzOSBDMTYwLjI2MDkwOCw4LjMyNjk5OTk3IDE2MS4yNjM4NTQsOC4yNDY5MTEzNiAxNjIuMzQzOTQ5LDguMjQ2OTExMzYgQzE2My40MjQwNDUsOC4yNDY5MTEzNiAxNjQuNDI2OTksOC40MDcwODg1NyAxNjUuNDI5OTM2LDguNjQ3MzU0MzkgQzE2Ny44MjE1NzYsNi45NjU0OTM2NCAxNjguODI0NTIyLDcuMjg1ODQ4MDcgMTY4LjgyNDUyMiw3LjI4NTg0ODA3IEMxNjkuNTE4ODY5LDkuMDQ3Nzk3NDMgMTY5LjA1NTk3MSwxMC4zMjkyMTUxIDE2OC45Nzg4MjIsMTAuNjQ5NTY5NiBDMTY5Ljc1MDMxOCwxMS41MzA1NDQzIDE3MC4yMTMyMTcsMTIuNjUxNzg0OCAxNzAuMjEzMjE3LDE0LjA5MzM3OTcgQzE3MC4yMTMyMTcsMTguOTc4Nzg0NyAxNjcuMzU4Njc4LDIwLjEwMDAyNTIgMTY0LjU4MTI5LDIwLjQyMDM3OTYgQzE2NS4wNDQxODgsMjAuODIwODIyNyAxNjUuNDI5OTM2LDIxLjYyMTcwODggMTY1LjQyOTkzNiwyMi44MjMwMzc5IEMxNjUuNDI5OTM2LDI0LjUwNDg5ODYgMTY1LjQyOTkzNiwyNS45NDY0OTM1IDE2NS40Mjk5MzYsMjYuMzQ2OTM2NiBDMTY1LjQyOTkzNiwyNi42NjcyOTEgMTY1LjY2MTM4NSwyNy4wNjc3MzQgMTY2LjI3ODU4MywyNi45ODc2NDU0IEMxNzEuMTM5MDEzLDI1LjMwNTc4NDcgMTc0LjY4Nzg5OCwyMC41MDA0NjgzIDE3NC42ODc4OTgsMTQuODE0MTc3MSBDMTc0LjY4Nzg5OCw3Ljc2NjM3OTcyIDE2OS4xMzMxMjEsMiAxNjIuMzQzOTQ5LDIgWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIk5BVFNpb1wiPk5BVFNpbzwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgYnVyZ2VyIGJ1dHRvbiAqL1xuICAgICAgICAgIC5ibS1idXJnZXItYnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjRyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogQ29sb3Ivc2hhcGUgb2YgYnVyZ2VyIGljb24gYmFycyAqL1xuICAgICAgICAgIC5ibS1idXJnZXItYmFycyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm9udCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLWJ1cmdlci1iYXJzOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJtLWJ1cmdlci1iYXJzOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnM6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgIHRvcDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tY3Jvc3MtYnV0dG9uIHtcbiAgICAgICAgICAgIHJpZ2h0OiA0dncgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRvcDogNHZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogQ29sb3Ivc2hhcGUgb2YgY2xvc2UgYnV0dG9uIGNyb3NzICovXG4gICAgICAgICAgLmJtLWNyb3NzIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWZvbnQpO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogR2VuZXJhbCBzaWRlYmFyIHN0eWxlcyAqL1xuICAgICAgICAgIC5ibS1tZW51IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA0ZW0gMS41ZW0gMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLW1lbnUgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tbWVudSBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLW1lbnUtd3JhcCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFdyYXBwZXIgZm9yIGl0ZW0gbGlzdCAqL1xuICAgICAgICAgIC5ibS1pdGVtLWxpc3Qge1xuICAgICAgICAgICAgcGFkZGluZzogMC44ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogU3R5bGluZyBvZiBvdmVybGF5ICovXG4gICAgICAgICAgLmJtLW92ZXJsYXkge1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgei1pbmRleDogMTAwMSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcXVhdGVybmFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTWVudT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnJlbmRlck1lbnUoKX1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuc29jaWFsLWxpbmtzIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNvY2lhbC1saW5rcyBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/MainMenu.js */",
        __self: this
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, this.renderMenu(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1298140266",
        css: ".social-links{list-style-type:none;}.social-links li{display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL01haW5NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlTMkIsQUFHa0MsQUFHQSxxQkFGdkIsQUFHQSIsImZpbGUiOiIvVXNlcnMvZnJhbi9Eb2N1bWVudHMvUHJvamVjdHMvYmFzZW1lbnQvU3luYWRpYS9zeW5hZGlhLXdlYnNpdGUvY29tcG9uZW50cy9NYWluTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzbGlkZSBhcyBNZW51IH0gZnJvbSAncmVhY3QtYnVyZ2VyLW1lbnUnO1xuaW1wb3J0IFNjcm9sbFRvIGZyb20gJy4uL2NvbXBvbmVudHMvU2Nyb2xsVG8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lbnVPcGVuOiBmYWxzZSxcbiAgICAgIGlzVG9wOiB0cnVlLFxuICAgICAgdnBXaWR0aDogbnVsbFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGNvbnN0IGlzVG9wID0gd2luZG93LnNjcm9sbFkgPCAxO1xuICAgICAgaWYgKGlzVG9wICE9PSB0aGlzLnN0YXRlLmlzVG9wKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1RvcCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZwV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zdGF0ZS52cFdpZHRoO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG5cbiAgaGFuZGxlU3RhdGVDaGFuZ2Uoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46IHN0YXRlLmlzT3BlbiB9KTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVPcGVuOiAhdGhpcy5zdGF0ZS5tZW51T3BlbiB9KTtcbiAgfVxuXG4gIGNsb3NlTWVudSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46IGZhbHNlIH0pO1xuICB9XG5cbiAgcmVuZGVyTWVudSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS52cFdpZHRoID4gMTAyNFxuICAgICAgPyB0aGlzLnJlbmRlckRlc2t0b3BNZW51KClcbiAgICAgIDogdGhpcy5yZW5kZXJNb2JpbGVNZW51KCk7XG4gIH1cblxuICByZW5kZXJEZXNrdG9wTWVudSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwiYWJvdXRcIj5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJ0ZWFtXCI+XG4gICAgICAgICAgICAgICAgVGVhbVxuICAgICAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJqb2luLXVzXCI+XG4gICAgICAgICAgICAgICAgSm9pbiB1c1xuICAgICAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtzXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cImxpbmtlZGluXCI+bGlua2VkaW48L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwidHdpdHRlclwiPnR3aXR0ZXI8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiZ2l0aHViXCI+Z2l0aHViPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIk5BVFNpb1wiPk5BVFNpbzwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWdhdGlvbiBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmlnYXRpb24gbGk6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc29jaWFsLWxpbmtzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlck1vYmlsZU1lbnUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNZW51XG4gICAgICAgIHJpZ2h0XG4gICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5tZW51T3Blbn1cbiAgICAgICAgb25TdGF0ZUNoYW5nZT17c3RhdGUgPT4gdGhpcy5oYW5kbGVTdGF0ZUNoYW5nZShzdGF0ZSl9XG4gICAgICA+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJhYm91dFwiPlxuICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwidGVhbVwiPlxuICAgICAgICAgICAgVGVhbVxuICAgICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJqb2luLXVzXCI+XG4gICAgICAgICAgICBKb2luIHVzXG4gICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3NcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwibGlua2VkaW5cIj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNSAyNVwiXG4gICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCIjRkZGXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAuMzgyNzU4MTEsMTAuMjY4NDgyMiBMNS40NTQzMDMwNywxMC4yNjg0ODIyIEw1LjQ1NDMwMzA3LDI3IEwwLjM4Mjc1ODExLDI3IEwwLjM4Mjc1ODExLDEwLjI2ODQ4MjIgWiBNMi45NjYzNzUzNSwyIEM0LjU5MzA5NzMyLDIgNS45MzI3NTA3LDMuMzYxODY3NjUgNS45MzI3NTA3LDUuMDE1NTY0MDggQzUuOTMyNzUwNyw2LjY2OTI2MDUyIDQuNTkzMDk3MzIsOC4wMzExMjgxNyAyLjk2NjM3NTM1LDguMDMxMTI4MTcgQzEuMzM5NjUzMzgsOC4wMzExMjgxNyAtMS43NzYzNTY4NGUtMTMsNi42NjkyNjA1MiAtMS43NzYzNTY4NGUtMTMsNS4wMTU1NjQwOCBDLTEuNzc2MzU2ODRlLTEzLDMuMzYxODY3NjUgMS4zMzk2NTMzOCwyIDIuOTY2Mzc1MzUsMiBaIE04LjcwNzc0NywxMC4yNjg0ODIyIEwxMy41ODc5MTI5LDEwLjI2ODQ4MjIgTDEzLjU4NzkxMjksMTIuNTA1ODM2MiBMMTMuNjgzNjAyNCwxMi41MDU4MzYyIEMxNC4zNTM0MjkxLDExLjE0Mzk2ODUgMTYuMDc1ODQwNiw5Ljc4MjEwMDg2IDE4LjU2Mzc2ODMsOS43ODIxMDA4NiBDMjMuNzMxMDAyOCw5Ljc4MjEwMDg2IDI0LjY4Nzg5ODEsMTMuMjg0MDQ2MyAyNC42ODc4OTgxLDE3Ljc1ODc1NDMgTDI0LjY4Nzg5ODEsMjYuOTAyNzIyOCBMMTkuNjE2MzUzMSwyNi45MDI3MjI4IEwxOS42MTYzNTMxLDE4LjczMTUxNjkgQzE5LjYxNjM1MzEsMTYuNzg1OTkxNiAxOS42MTYzNTMxLDE0LjI1NjgwODkgMTYuOTM3MDQ2NCwxNC4yNTY4MDg5IEMxNC4yNTc3Mzk2LDE0LjI1NjgwODkgMTMuODc0OTgxNSwxNi4zOTY4ODY2IDEzLjg3NDk4MTUsMTguNTM2OTY0MyBMMTMuODc0OTgxNSwyNi44MDU0NDY1IEw4LjgwMzQzNjUzLDI2LjgwNTQ0NjUgTDguODAzNDM2NTMsMTAuMjY4NDgyMiBMOC43MDc3NDcsMTAuMjY4NDgyMiBaXCIgLz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cInR3aXR0ZXJcIj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjJweFwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNSAyMlwiXG4gICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE1MjYuMDAwMDAwLCAtNDEuMDAwMDAwKVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGRkZGXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJub256ZXJvXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0NTEuMDAwMDAwLCAzOC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05OS42ODc4OTgxLDUuNDkwODU3NTggQzk4Ljc3OTI0NDgsNS45MTM1NDU3NSA5Ny44MDQyNzI5LDYuMjAwMjA4MDIgOTYuNzc5ODg0OCw2LjMyODE4NzU0IEM5Ny44MjU4NTQ3LDUuNjcwNjMwMjggOTguNjI2NTE4NCw0LjYyNzY1MjIyIDk5LjAwNTk5NDYsMy4zODg2ODE2OSBDOTguMDI0ODUwOCwzLjk5NzYyMTk4IDk2Ljk0MTg0OSw0LjQzOTc5MDgxIDk1Ljc4Nzg4OTYsNC42Nzk0ODc3MyBDOTQuODYzODI2NSwzLjY0NDU5ODM5IDkzLjU0OTQzNTgsMyA5Mi4wOTE1NTY2LDMgQzg5LjI5NDYzOTEsMyA4Ny4wMjY4NTgzLDUuMzgwNzQ5NDYgODcuMDI2ODU4Myw4LjMxNTM4NTE0IEM4Ny4wMjY4NTgzLDguNzMxNTkzODYgODcuMDcxNTk1MSw5LjEzODEwNDYgODcuMTU4MDAyOSw5LjUyNjgyODY0IEM4Mi45NDk1MTYyLDkuMzA0OTE4NDEgNzkuMjE3NzI0NSw3LjE4ODE3NDM3IDc2LjcyMDA4NzcsMy45NzE3MDQyMiBDNzYuMjgzNDkwNCw0Ljc1NTU4OTM5IDc2LjAzNTExODUsNS42Njg5Nzg2NiA3Ni4wMzUxMTg1LDYuNjQzOTg2MTIgQzc2LjAzNTExODUsOC40ODg2Nzg0IDc2LjkyOTg5NDksMTAuMTE2MzMwNiA3OC4yODc0ODk0LDExLjA2ODU5NjUgQzc3LjQ1NzQ5ODcsMTEuMDM5NDYwMiA3Ni42NzY4ODM4LDEwLjc5OTc2MzMgNzUuOTkzNDg3OCwxMC40MDEzNDEzIEw3NS45OTM0ODc4LDEwLjQ2Nzc0NDkgQzc1Ljk5MzQ4NzgsMTMuMDQyODM1MiA3Ny43Mzk4MzY3LDE1LjE5MTk3NjUgODAuMDU1NDIwMiwxNS42ODExMTA3IEM3OS42MzExNjY4LDE1LjgwMDk1OTEgNzkuMTgzNzk4OCwxNS44NjczNjI4IDc4LjcyMDk4MDYsMTUuODY3MzYyOCBDNzguMzkzOTQ2MSwxNS44NjczNjI4IDc4LjA3NzY4MjMsMTUuODMzMzU2MyA3Ny43Njc1OTA1LDE1Ljc2ODU2MTkgQzc4LjQxMjQyMTcsMTcuODgyMDg3NCA4MC4yODIyMTAzLDE5LjQxOTAyNzUgODIuNDk3NTQ5NCwxOS40NjExNjUgQzgwLjc2NTA3NzQsMjAuODg2Mzg3NyA3OC41ODA1OTgyLDIxLjczMzQxNTYgNzYuMjA3OTM0LDIxLjczMzQxNTYgQzc1Ljc5OTEzMDgsMjEuNzMzNDE1NiA3NS4zOTY0NTkyLDIxLjcwNzQ5NzkgNzUsMjEuNjYwNTMyNSBDNzcuMjQxNTU5OSwyMy4xNzE1OTcyIDc5LjkwMjczNDEsMjQuMDUyNjMxNiA4Mi43NjI5MDQ0LDI0LjA1MjYzMTYgQzkyLjA3OTI5MzMsMjQuMDUyNjMxNiA5Ny4xNzE3ODU3LDE1Ljk1MTU5NTUgOTcuMTcxNzg1Nyw4LjkyNTk3NzA2IEw5Ny4xNTQ4MDI3LDguMjM3Njc0MjIgQzk4LjE0OTgyMzQsNy40OTI2MjMzNCA5OS4wMTA2MzM3LDYuNTU2NTM0ODYgOTkuNjg3ODk4MSw1LjQ5MDg1NzU4IFpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJnaXRodWJcIj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNSAyNVwiXG4gICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE2MDEuMDAwMDAwLCAtNDAuMDAwMDAwKVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGRkZGXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0NTEuMDAwMDAwLCAzOC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNjIuMzQzOTQ5LDIgQzE1NS41NTQ3NzcsMiAxNTAsNy43NjYzNzk3MiAxNTAsMTQuODE0MTc3MSBDMTUwLDIwLjUwMDQ2ODMgMTUzLjU0ODg4NSwyNS4zMDU3ODQ3IDE1OC40MDkzMTUsMjYuOTg3NjQ1NCBDMTU5LjAyNjUxMywyNy4wNjc3MzQgMTU5LjI1Nzk2MiwyNi43NDczNzk2IDE1OS4yNTc5NjIsMjYuMzQ2OTM2NiBDMTU5LjI1Nzk2MiwyNi4wMjY1ODIxIDE1OS4yNTc5NjIsMjUuMjI1Njk2MSAxNTkuMjU3OTYyLDI0LjE4NDU0NDIgQzE1NS43ODYyMjYsMjQuOTg1NDMwMyAxNTUuMDkxODc5LDIyLjUwMjY4MzQgMTU1LjA5MTg3OSwyMi41MDI2ODM0IEMxNTQuNTUxODMxLDIxLjA2MTA4ODUgMTUzLjcwMzE4NSwyMC42NjA2NDU1IDE1My43MDMxODUsMjAuNjYwNjQ1NSBDMTUyLjU0NTkzOSwxOS44NTk3NTk0IDE1My43ODAzMzQsMTkuODU5NzU5NCAxNTMuNzgwMzM0LDE5Ljg1OTc1OTQgQzE1NS4wMTQ3MjksMTkuOTM5ODQ4IDE1NS43MDkwNzYsMjEuMTQxMTc3MSAxNTUuNzA5MDc2LDIxLjE0MTE3NzEgQzE1Ni43ODkxNzIsMjMuMDYzMzAzNyAxNTguNTYzNjE1LDIyLjUwMjY4MzQgMTU5LjMzNTExMSwyMi4xODIzMjkgQzE1OS40MTIyNjEsMjEuMzgxNDQyOSAxNTkuNzk4MDEsMjAuODIwODIyNyAxNjAuMTA2NjA4LDIwLjUwMDQ2ODMgQzE1Ny4zMjkyMiwyMC4xODAxMTM4IDE1NC40NzQ2ODIsMTkuMDU4ODczMyAxNTQuNDc0NjgyLDE0LjE3MzQ2ODMgQzE1NC40NzQ2ODIsMTIuODExOTYyIDE1NC45Mzc1OCwxMS42MTA2MzI5IDE1NS43MDkwNzYsMTAuNzI5NjU4MiBDMTU1LjU1NDc3NywxMC40MDkzMDM4IDE1NS4xNjkwMjksOS4xMjc4ODYwNCAxNTUuODYzMzc2LDcuMzY1OTM2NjggQzE1NS44NjMzNzYsNy4zNjU5MzY2OCAxNTYuODY2MzIyLDcuMDQ1NTgyMjUgMTU5LjI1Nzk2Miw4LjY0NzM1NDM5IEMxNjAuMjYwOTA4LDguMzI2OTk5OTcgMTYxLjI2Mzg1NCw4LjI0NjkxMTM2IDE2Mi4zNDM5NDksOC4yNDY5MTEzNiBDMTYzLjQyNDA0NSw4LjI0NjkxMTM2IDE2NC40MjY5OSw4LjQwNzA4ODU3IDE2NS40Mjk5MzYsOC42NDczNTQzOSBDMTY3LjgyMTU3Niw2Ljk2NTQ5MzY0IDE2OC44MjQ1MjIsNy4yODU4NDgwNyAxNjguODI0NTIyLDcuMjg1ODQ4MDcgQzE2OS41MTg4NjksOS4wNDc3OTc0MyAxNjkuMDU1OTcxLDEwLjMyOTIxNTEgMTY4Ljk3ODgyMiwxMC42NDk1Njk2IEMxNjkuNzUwMzE4LDExLjUzMDU0NDMgMTcwLjIxMzIxNywxMi42NTE3ODQ4IDE3MC4yMTMyMTcsMTQuMDkzMzc5NyBDMTcwLjIxMzIxNywxOC45Nzg3ODQ3IDE2Ny4zNTg2NzgsMjAuMTAwMDI1MiAxNjQuNTgxMjksMjAuNDIwMzc5NiBDMTY1LjA0NDE4OCwyMC44MjA4MjI3IDE2NS40Mjk5MzYsMjEuNjIxNzA4OCAxNjUuNDI5OTM2LDIyLjgyMzAzNzkgQzE2NS40Mjk5MzYsMjQuNTA0ODk4NiAxNjUuNDI5OTM2LDI1Ljk0NjQ5MzUgMTY1LjQyOTkzNiwyNi4zNDY5MzY2IEMxNjUuNDI5OTM2LDI2LjY2NzI5MSAxNjUuNjYxMzg1LDI3LjA2NzczNCAxNjYuMjc4NTgzLDI2Ljk4NzY0NTQgQzE3MS4xMzkwMTMsMjUuMzA1Nzg0NyAxNzQuNjg3ODk4LDIwLjUwMDQ2ODMgMTc0LjY4Nzg5OCwxNC44MTQxNzcxIEMxNzQuNjg3ODk4LDcuNzY2Mzc5NzIgMTY5LjEzMzEyMSwyIDE2Mi4zNDM5NDksMiBaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiTkFUU2lvXCI+TkFUU2lvPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBidXJnZXIgYnV0dG9uICovXG4gICAgICAgICAgLmJtLWJ1cmdlci1idXR0b24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEuNHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBDb2xvci9zaGFwZSBvZiBidXJnZXIgaWNvbiBiYXJzICovXG4gICAgICAgICAgLmJtLWJ1cmdlci1iYXJzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb250KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnM6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnM6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIHRvcDogNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibS1idXJnZXItYmFyczpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgdG9wOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1jcm9zcy1idXR0b24ge1xuICAgICAgICAgICAgcmlnaHQ6IDR2dyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdG9wOiA0dncgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBDb2xvci9zaGFwZSBvZiBjbG9zZSBidXR0b24gY3Jvc3MgKi9cbiAgICAgICAgICAuYm0tY3Jvc3Mge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZm9udCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBHZW5lcmFsIHNpZGViYXIgc3R5bGVzICovXG4gICAgICAgICAgLmJtLW1lbnUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcXVhdGVybmFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRlbSAxLjVlbSAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tbWVudSBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1tZW51IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tbWVudS13cmFwIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogV3JhcHBlciBmb3IgaXRlbSBsaXN0ICovXG4gICAgICAgICAgLmJtLWl0ZW0tbGlzdCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjhlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBTdHlsaW5nIG9mIG92ZXJsYXkgKi9cbiAgICAgICAgICAuYm0tb3ZlcmxheSB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAxICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9NZW51PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMucmVuZGVyTWVudSgpfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5zb2NpYWwtbGlua3Mge1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc29jaWFsLWxpbmtzIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/MainMenu.js */",
        __self: this
      }));
    }
  }]);

  return MainMenu;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.c4b8c066e46627a6d607.hot-update.js.map