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
/* harmony import */ var _ScrollTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScrollTo */ "./components/ScrollTo.js");
/* harmony import */ var _HeaderSocialItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderSocialItems */ "./components/HeaderSocialItems.js");
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
      vpWidth: null
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MainMenu, [{
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
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-406711466",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-406711466" + " " + "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-406711466",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "navigation-item",
        onClick: function onClick() {
          return _this2.closeMenu();
        },
        href: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-406711466",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "navigation-item",
        onClick: function onClick() {
          return _this2.closeMenu();
        },
        href: "team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Team")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-406711466",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "mailto:jobs@synadia.com",
        className: "jsx-406711466" + " " + "navigation-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Join us")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderSocialItems__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "406711466",
        css: ".navigation.jsx-406711466{display:inline-block;list-style:none;padding:0;margin:0;}.navigation.jsx-406711466 li.jsx-406711466{display:inline-block;margin:0 1rem;}.navigation.jsx-406711466 li.jsx-406711466:first-child{margin-left:0;}.navigation.jsx-406711466 li.jsx-406711466:last-child{margin-right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL01haW5NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGb0IsQUFHa0MsQUFNQSxBQUlQLEFBR0MsY0FGakIsQ0FHQSxNQWJrQixBQU1GLGNBQ2hCLEVBTlksVUFDRCxTQUNYIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL01haW5NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNsaWRlIGFzIE1lbnUgfSBmcm9tICdyZWFjdC1idXJnZXItbWVudSc7XG5pbXBvcnQgU2Nyb2xsVG8gZnJvbSAnLi9TY3JvbGxUbyc7XG5pbXBvcnQgSGVhZGVyU29jaWFsSXRlbXMgZnJvbSAnLi9IZWFkZXJTb2NpYWxJdGVtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVudU9wZW46IGZhbHNlLFxuICAgICAgdnBXaWR0aDogbnVsbFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG5cbiAgdXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdnBXaWR0aDogd2luZG93LmlubmVyV2lkdGggfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnN0YXRlLnZwV2lkdGg7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICBoYW5kbGVTdGF0ZUNoYW5nZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3Blbjogc3RhdGUuaXNPcGVuIH0pO1xuICB9XG5cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46ICF0aGlzLnN0YXRlLm1lbnVPcGVuIH0pO1xuICB9XG5cbiAgY2xvc2VNZW51KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3BlbjogZmFsc2UgfSk7XG4gIH1cblxuICByZW5kZXJNZW51KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnZwV2lkdGggPiAxMDI0XG4gICAgICA/IHRoaXMucmVuZGVyRGVza3RvcE1lbnUoKVxuICAgICAgOiB0aGlzLnJlbmRlck1vYmlsZU1lbnUoKTtcbiAgfVxuXG4gIHJlbmRlckRlc2t0b3BNZW51KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPFNjcm9sbFRvXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfVxuICAgICAgICAgICAgICAgIGhyZWY9XCJhYm91dFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPFNjcm9sbFRvXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfVxuICAgICAgICAgICAgICAgIGhyZWY9XCJ0ZWFtXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRlYW1cbiAgICAgICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbVwiIGhyZWY9XCJtYWlsdG86am9ic0BzeW5hZGlhLmNvbVwiPlxuICAgICAgICAgICAgICAgIEpvaW4gdXNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8SGVhZGVyU29jaWFsSXRlbXMgLz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWdhdGlvbiBsaTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmlnYXRpb24gbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJNb2JpbGVNZW51KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWVudVxuICAgICAgICByaWdodFxuICAgICAgICB3aWR0aD17JzEwMCUnfVxuICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUubWVudU9wZW59XG4gICAgICAgIG9uU3RhdGVDaGFuZ2U9e3N0YXRlID0+IHRoaXMuaGFuZGxlU3RhdGVDaGFuZ2Uoc3RhdGUpfVxuICAgICAgPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxTY3JvbGxUb1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9XG4gICAgICAgICAgICBocmVmPVwiYWJvdXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICA8U2Nyb2xsVG9cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfVxuICAgICAgICAgICAgaHJlZj1cInRlYW1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRlYW1cbiAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbVwiIGhyZWY9XCJtYWlsdG86am9ic0BzeW5hZGlhLmNvbVwiPlxuICAgICAgICAgICAgSm9pbiB1c1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxIZWFkZXJTb2NpYWxJdGVtcyAvPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgYnVyZ2VyIGJ1dHRvbiAqL1xuICAgICAgICAgIC5ibS1idXJnZXItYnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjRyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLWJ1cmdlci1idXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNRU5VJztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIC01MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgKi9cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1idXJnZXItYmFyczpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibS1idXJnZXItYmFyczpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJtLWJ1cmdlci1iYXJzOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICB0b3A6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLWNyb3NzLWJ1dHRvbiB7XG4gICAgICAgICAgICByaWdodDogNHZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0b3A6IDd2dyAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIENvbG9yL3NoYXBlIG9mIGNsb3NlIGJ1dHRvbiBjcm9zcyAqL1xuICAgICAgICAgIC5ibS1jcm9zcyB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1mb250KTtcbiAgICAgICAgICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEdlbmVyYWwgc2lkZWJhciBzdHlsZXMgKi9cbiAgICAgICAgICAuYm0tbWVudSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZzogNGVtIDEuNWVtIDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1tZW51LXdyYXAge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcXVhdGVybmFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBXcmFwcGVyIGZvciBpdGVtIGxpc3QgKi9cbiAgICAgICAgICAuYm0taXRlbS1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogMC44ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogU3R5bGluZyBvZiBvdmVybGF5ICovXG4gICAgICAgICAgLmJtLW92ZXJsYXkge1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgei1pbmRleDogMTAwMSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcXVhdGVybmFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0taXRlbSAubmF2aWdhdGlvbi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50Pnt0aGlzLnJlbmRlck1lbnUoKX08L1JlYWN0LkZyYWdtZW50PjtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/MainMenu.js */",
        __self: this
      }));
    }
  }, {
    key: "renderMobileMenu",
    value: function renderMobileMenu() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__["slide"], {
        right: true,
        width: '100%',
        isOpen: this.state.menuOpen,
        onStateChange: function onStateChange(state) {
          return _this3.handleStateChange(state);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-2620068683",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "navigation-item",
        onClick: function onClick() {
          return _this3.closeMenu();
        },
        href: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "navigation-item",
        onClick: function onClick() {
          return _this3.closeMenu();
        },
        href: "team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "mailto:jobs@synadia.com",
        className: "jsx-2620068683" + " " + "navigation-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Join us")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderSocialItems__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2620068683",
        css: ".bm-burger-button{position:relative;width:1.4rem;height:14px;}.bm-burger-button:before{content:'MENU';font-family:var(--font-primary);font-size:1rem;color:var(--color-font);position:absolute;left:0;top:50%;-webkit-transform:translate(-120%,-50%);-ms-transform:translate(-120%,-50%);transform:translate(-120%,-50%);}.bm-burger-bars{position:absolute;height:2px !important;border-radius:4px;left:0;right:0;background-color:var(--color-font);}.bm-burger-bars:nth-child(1){top:0 !important;}.bm-burger-bars:nth-child(2){top:50% !important;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.bm-burger-bars:nth-child(3){top:100% !important;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}.bm-cross-button{right:4vw !important;top:7vw !important;}.bm-cross{cursor:pointer;background:var(--color-font);height:20px !important;}.bm-menu{background:var(--color-quaternary) !important;padding:4em 1.5em 0;font-size:1.15em;-webkit-transition:all 400ms ease;transition:all 400ms ease;}.bm-menu-wrap{background:var(--color-quaternary) !important;top:0;}.bm-item-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0.8em;}.bm-overlay{top:0;left:0;width:100vw !important;height:100vh !important;z-index:1001 !important;background:var(--color-quaternary) !important;}.bm-item .navigation-item{margin:2rem 0;display:block;padding:0;width:auto;font-size:1.15rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL01haW5NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9JMkIsQUFJK0IsQUFNSCxBQVlHLEFBU0QsQUFHRSxBQUlDLEFBS0MsQUFNTixBQU8rQixBQU9BLEFBTWpDLEFBUVAsQUFTUSxNQVJQLE9BQ2dCLENBUVQsQ0E1RWtCLEFBdUNILEVBbEIvQixDQTNCZSxBQWtCUyxDQVlLLENBSUMsQ0FLVCxPQTRDVCxHQWxGRSxLQTBFWSxFQVNiLEVBakVPLEFBcUJwQixHQXRDQSxDQTRDeUIsRUFNSCxBQU9kLENBcERTLEVBOEVHLEdBekJwQixNQXhDUyxFQXdEaUIsRUFwRUEsR0FhaEIsQ0FnQ1MsQ0FObkIsQUF1Q0EsTUFoRXFDLENBMkNiLFNBWEksQ0F1Qm9CLEVBcEU1QixrQkFDWCxJQWFULEdBWlUsQ0FvQlYsSUFJQSxHQXZCbUMsV0FrRW5DLGFBdkJBLFNBV2dDLDJFQXJEaEMsd0NBc0RnQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvZnJhbi9Eb2N1bWVudHMvUHJvamVjdHMvYmFzZW1lbnQvU3luYWRpYS9zeW5hZGlhLXdlYnNpdGUvY29tcG9uZW50cy9NYWluTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzbGlkZSBhcyBNZW51IH0gZnJvbSAncmVhY3QtYnVyZ2VyLW1lbnUnO1xuaW1wb3J0IFNjcm9sbFRvIGZyb20gJy4vU2Nyb2xsVG8nO1xuaW1wb3J0IEhlYWRlclNvY2lhbEl0ZW1zIGZyb20gJy4vSGVhZGVyU29jaWFsSXRlbXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lbnVPcGVuOiBmYWxzZSxcbiAgICAgIHZwV2lkdGg6IG51bGxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgfVxuXG4gIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZwV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zdGF0ZS52cFdpZHRoO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG5cbiAgaGFuZGxlU3RhdGVDaGFuZ2Uoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46IHN0YXRlLmlzT3BlbiB9KTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVPcGVuOiAhdGhpcy5zdGF0ZS5tZW51T3BlbiB9KTtcbiAgfVxuXG4gIGNsb3NlTWVudSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46IGZhbHNlIH0pO1xuICB9XG5cbiAgcmVuZGVyTWVudSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS52cFdpZHRoID4gMTAyNFxuICAgICAgPyB0aGlzLnJlbmRlckRlc2t0b3BNZW51KClcbiAgICAgIDogdGhpcy5yZW5kZXJNb2JpbGVNZW51KCk7XG4gIH1cblxuICByZW5kZXJEZXNrdG9wTWVudSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxTY3JvbGxUb1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX1cbiAgICAgICAgICAgICAgICBocmVmPVwiYWJvdXRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxTY3JvbGxUb1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX1cbiAgICAgICAgICAgICAgICBocmVmPVwidGVhbVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUZWFtXG4gICAgICAgICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1cIiBocmVmPVwibWFpbHRvOmpvYnNAc3luYWRpYS5jb21cIj5cbiAgICAgICAgICAgICAgICBKb2luIHVzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPEhlYWRlclNvY2lhbEl0ZW1zIC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWdhdGlvbiBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmlnYXRpb24gbGk6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTW9iaWxlTWVudSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnVcbiAgICAgICAgcmlnaHRcbiAgICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm1lbnVPcGVufVxuICAgICAgICBvblN0YXRlQ2hhbmdlPXtzdGF0ZSA9PiB0aGlzLmhhbmRsZVN0YXRlQ2hhbmdlKHN0YXRlKX1cbiAgICAgID5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8U2Nyb2xsVG9cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfVxuICAgICAgICAgICAgaHJlZj1cImFib3V0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBBYm91dFxuICAgICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgICAgPFNjcm9sbFRvXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX1cbiAgICAgICAgICAgIGhyZWY9XCJ0ZWFtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBUZWFtXG4gICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1cIiBocmVmPVwibWFpbHRvOmpvYnNAc3luYWRpYS5jb21cIj5cbiAgICAgICAgICAgIEpvaW4gdXNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8SGVhZGVyU29jaWFsSXRlbXMgLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAvKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGJ1cmdlciBidXR0b24gKi9cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJ1dHRvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMS40cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1idXJnZXItYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnTUVOVSc7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAtNTAlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBDb2xvci9zaGFwZSBvZiBidXJnZXIgaWNvbiBiYXJzICovXG4gICAgICAgICAgLmJtLWJ1cmdlci1iYXJzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb250KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnM6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnM6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIHRvcDogNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibS1idXJnZXItYmFyczpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgdG9wOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1jcm9zcy1idXR0b24ge1xuICAgICAgICAgICAgcmlnaHQ6IDR2dyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdG9wOiA3dncgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBDb2xvci9zaGFwZSBvZiBjbG9zZSBidXR0b24gY3Jvc3MgKi9cbiAgICAgICAgICAuYm0tY3Jvc3Mge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZm9udCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBHZW5lcmFsIHNpZGViYXIgc3R5bGVzICovXG4gICAgICAgICAgLmJtLW1lbnUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcXVhdGVybmFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRlbSAxLjVlbSAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tbWVudS13cmFwIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogV3JhcHBlciBmb3IgaXRlbSBsaXN0ICovXG4gICAgICAgICAgLmJtLWl0ZW0tbGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuOGVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFN0eWxpbmcgb2Ygb3ZlcmxheSAqL1xuICAgICAgICAgIC5ibS1vdmVybGF5IHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLWl0ZW0gLm5hdmlnYXRpb24taXRlbSB7XG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9NZW51PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD57dGhpcy5yZW5kZXJNZW51KCl9PC9SZWFjdC5GcmFnbWVudD47XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/MainMenu.js */",
        __self: this
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, this.renderMenu());
    }
  }]);

  return MainMenu;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.7b650fedfd2c1b6c8927.hot-update.js.map