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
/* harmony import */ var _SocialItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SocialItems */ "./components/SocialItems.js");
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
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-2229131749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2229131749" + " " + "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2229131749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this3.closeMenu();
        },
        href: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2229131749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this3.closeMenu();
        },
        href: "team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Team")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2229131749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this3.closeMenu();
        },
        href: "join-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Join us")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialItems__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2229131749",
        css: ".navigation.jsx-2229131749{display:inline-block;list-style:none;padding:0;}.navigation.jsx-2229131749 li.jsx-2229131749{display:inline-block;margin:0 1rem;}.navigation.jsx-2229131749 li.jsx-2229131749:first-child{margin-left:0;}.navigation.jsx-2229131749 li.jsx-2229131749:last-child{margin-right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL01haW5NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGb0IsQUFHa0MsQUFLQSxBQUlQLEFBR0MsY0FGakIsQ0FHQSxNQVprQixBQUtGLGNBQ2hCLEVBTFksVUFDWiIsImZpbGUiOiIvVXNlcnMvZnJhbi9Eb2N1bWVudHMvUHJvamVjdHMvYmFzZW1lbnQvU3luYWRpYS9zeW5hZGlhLXdlYnNpdGUvY29tcG9uZW50cy9NYWluTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzbGlkZSBhcyBNZW51IH0gZnJvbSAncmVhY3QtYnVyZ2VyLW1lbnUnO1xuaW1wb3J0IFNjcm9sbFRvIGZyb20gJy4vU2Nyb2xsVG8nO1xuaW1wb3J0IFNvY2lhbEl0ZW1zIGZyb20gJy4vU29jaWFsSXRlbXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lbnVPcGVuOiBmYWxzZSxcbiAgICAgIGlzVG9wOiB0cnVlLFxuICAgICAgdnBXaWR0aDogbnVsbFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGNvbnN0IGlzVG9wID0gd2luZG93LnNjcm9sbFkgPCAxO1xuICAgICAgaWYgKGlzVG9wICE9PSB0aGlzLnN0YXRlLmlzVG9wKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1RvcCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZwV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zdGF0ZS52cFdpZHRoO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG5cbiAgaGFuZGxlU3RhdGVDaGFuZ2Uoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46IHN0YXRlLmlzT3BlbiB9KTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVPcGVuOiAhdGhpcy5zdGF0ZS5tZW51T3BlbiB9KTtcbiAgfVxuXG4gIGNsb3NlTWVudSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46IGZhbHNlIH0pO1xuICB9XG5cbiAgcmVuZGVyTWVudSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS52cFdpZHRoID4gMTAyNFxuICAgICAgPyB0aGlzLnJlbmRlckRlc2t0b3BNZW51KClcbiAgICAgIDogdGhpcy5yZW5kZXJNb2JpbGVNZW51KCk7XG4gIH1cblxuICByZW5kZXJEZXNrdG9wTWVudSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwiYWJvdXRcIj5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJ0ZWFtXCI+XG4gICAgICAgICAgICAgICAgVGVhbVxuICAgICAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJqb2luLXVzXCI+XG4gICAgICAgICAgICAgICAgSm9pbiB1c1xuICAgICAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8U29jaWFsSXRlbXMgLz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWdhdGlvbiBsaTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmlnYXRpb24gbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJNb2JpbGVNZW51KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWVudVxuICAgICAgICByaWdodFxuICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUubWVudU9wZW59XG4gICAgICAgIG9uU3RhdGVDaGFuZ2U9e3N0YXRlID0+IHRoaXMuaGFuZGxlU3RhdGVDaGFuZ2Uoc3RhdGUpfVxuICAgICAgPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cInRlYW1cIj5cbiAgICAgICAgICAgIFRlYW1cbiAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwiam9pbi11c1wiPlxuICAgICAgICAgICAgSm9pbiB1c1xuICAgICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8U29jaWFsSXRlbXMgLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAvKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGJ1cmdlciBidXR0b24gKi9cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJ1dHRvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMS40cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgKi9cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1idXJnZXItYmFyczpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibS1idXJnZXItYmFyczpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJtLWJ1cmdlci1iYXJzOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICB0b3A6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLWNyb3NzLWJ1dHRvbiB7XG4gICAgICAgICAgICByaWdodDogNHZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0b3A6IDR2dyAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIENvbG9yL3NoYXBlIG9mIGNsb3NlIGJ1dHRvbiBjcm9zcyAqL1xuICAgICAgICAgIC5ibS1jcm9zcyB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1mb250KTtcbiAgICAgICAgICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEdlbmVyYWwgc2lkZWJhciBzdHlsZXMgKi9cbiAgICAgICAgICAuYm0tbWVudSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZzogNGVtIDEuNWVtIDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1tZW51IGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLW1lbnUgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1tZW51LXdyYXAge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcXVhdGVybmFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBXcmFwcGVyIGZvciBpdGVtIGxpc3QgKi9cbiAgICAgICAgICAuYm0taXRlbS1saXN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuOGVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFN0eWxpbmcgb2Ygb3ZlcmxheSAqL1xuICAgICAgICAgIC5ibS1vdmVybGF5IHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50Pnt0aGlzLnJlbmRlck1lbnUoKX08L1JlYWN0LkZyYWdtZW50PjtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/MainMenu.js */",
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
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-2808239405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this4.closeMenu();
        },
        href: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this4.closeMenu();
        },
        href: "team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this4.closeMenu();
        },
        href: "join-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Join us")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialItems__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2808239405",
        css: ".bm-burger-button{position:relative;width:1.4rem;height:14px;}.bm-burger-bars{position:absolute;height:2px !important;border-radius:4px;left:0;right:0;background-color:var(--color-font);}.bm-burger-bars:nth-child(1){top:0 !important;}.bm-burger-bars:nth-child(2){top:50% !important;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.bm-burger-bars:nth-child(3){top:100% !important;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}.bm-cross-button{right:4vw !important;top:4vw !important;}.bm-cross{cursor:pointer;background:var(--color-font);height:20px !important;}.bm-menu{background:var(--color-quaternary) !important;padding:4em 1.5em 0;font-size:1.15em;-webkit-transition:all 400ms ease;transition:all 400ms ease;}.bm-menu button{width:80%;margin:1rem 0;}.bm-menu button:first-of-type{margin-top:30%;}.bm-menu-wrap{background:var(--color-quaternary) !important;top:0;}.bm-item-list{padding:0.8em;}.bm-overlay{top:0;left:0;width:100vw !important;height:100vh !important;z-index:1001 !important;background:var(--color-quaternary) !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL01haW5NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlIMkIsQUFJK0IsQUFPQSxBQVNELEFBR0UsQUFJQyxBQUtDLEFBTU4sQUFPK0IsQUFPcEMsQUFLSyxBQUkrQixBQU1oQyxBQUtSLE1BQ0MsSUFwQk8sR0FxQlMsQ0FOekIsQ0E3QitCLEFBbUIvQixFQXJDQSxDQWhCZSxBQU9TLENBWUssQ0FJQyxDQUtULEdBcUJyQixPQWhEYyxLQXFFWSxJQTlETixBQXFCcEIsR0EzQkEsQ0FpQ3lCLEVBTUgsQUFnQmQsTUFDUixNQWpEUyxFQThEaUIsS0E3RGhCLENBZ0NTLENBTm5CLE1BekJxQyxVQWdDVCxDQTZCb0Isd0JBNURoRCxJQVFBLElBSUEsY0FpREEsYUE3QkEiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL2NvbXBvbmVudHMvTWFpbk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2xpZGUgYXMgTWVudSB9IGZyb20gJ3JlYWN0LWJ1cmdlci1tZW51JztcbmltcG9ydCBTY3JvbGxUbyBmcm9tICcuL1Njcm9sbFRvJztcbmltcG9ydCBTb2NpYWxJdGVtcyBmcm9tICcuL1NvY2lhbEl0ZW1zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW51T3BlbjogZmFsc2UsXG4gICAgICBpc1RvcDogdHJ1ZSxcbiAgICAgIHZwV2lkdGg6IG51bGxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpc1RvcCA9IHdpbmRvdy5zY3JvbGxZIDwgMTtcbiAgICAgIGlmIChpc1RvcCAhPT0gdGhpcy5zdGF0ZS5pc1RvcCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNUb3AgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2cFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc3RhdGUudnBXaWR0aDtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXRlQ2hhbmdlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVPcGVuOiBzdGF0ZS5pc09wZW4gfSk7XG4gIH1cblxuICB0b2dnbGVNZW51KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3BlbjogIXRoaXMuc3RhdGUubWVudU9wZW4gfSk7XG4gIH1cblxuICBjbG9zZU1lbnUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVPcGVuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlck1lbnUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudnBXaWR0aCA+IDEwMjRcbiAgICAgID8gdGhpcy5yZW5kZXJEZXNrdG9wTWVudSgpXG4gICAgICA6IHRoaXMucmVuZGVyTW9iaWxlTWVudSgpO1xuICB9XG5cbiAgcmVuZGVyRGVza3RvcE1lbnUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwidGVhbVwiPlxuICAgICAgICAgICAgICAgIFRlYW1cbiAgICAgICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwiam9pbi11c1wiPlxuICAgICAgICAgICAgICAgIEpvaW4gdXNcbiAgICAgICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPFNvY2lhbEl0ZW1zIC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWdhdGlvbiBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmlnYXRpb24gbGk6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTW9iaWxlTWVudSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnVcbiAgICAgICAgcmlnaHRcbiAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm1lbnVPcGVufVxuICAgICAgICBvblN0YXRlQ2hhbmdlPXtzdGF0ZSA9PiB0aGlzLmhhbmRsZVN0YXRlQ2hhbmdlKHN0YXRlKX1cbiAgICAgID5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgICBBYm91dFxuICAgICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJ0ZWFtXCI+XG4gICAgICAgICAgICBUZWFtXG4gICAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cImpvaW4tdXNcIj5cbiAgICAgICAgICAgIEpvaW4gdXNcbiAgICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPFNvY2lhbEl0ZW1zIC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBidXJnZXIgYnV0dG9uICovXG4gICAgICAgICAgLmJtLWJ1cmdlci1idXR0b24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEuNHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBDb2xvci9zaGFwZSBvZiBidXJnZXIgaWNvbiBiYXJzICovXG4gICAgICAgICAgLmJtLWJ1cmdlci1iYXJzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb250KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnM6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnM6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIHRvcDogNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibS1idXJnZXItYmFyczpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgdG9wOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1jcm9zcy1idXR0b24ge1xuICAgICAgICAgICAgcmlnaHQ6IDR2dyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdG9wOiA0dncgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBDb2xvci9zaGFwZSBvZiBjbG9zZSBidXR0b24gY3Jvc3MgKi9cbiAgICAgICAgICAuYm0tY3Jvc3Mge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZm9udCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBHZW5lcmFsIHNpZGViYXIgc3R5bGVzICovXG4gICAgICAgICAgLmJtLW1lbnUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcXVhdGVybmFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRlbSAxLjVlbSAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tbWVudSBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1tZW51IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tbWVudS13cmFwIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogV3JhcHBlciBmb3IgaXRlbSBsaXN0ICovXG4gICAgICAgICAgLmJtLWl0ZW0tbGlzdCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjhlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBTdHlsaW5nIG9mIG92ZXJsYXkgKi9cbiAgICAgICAgICAuYm0tb3ZlcmxheSB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAxICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9NZW51PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD57dGhpcy5yZW5kZXJNZW51KCl9PC9SZWFjdC5GcmFnbWVudD47XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/MainMenu.js */",
        __self: this
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, this.renderMenu());
    }
  }]);

  return MainMenu;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.48df9b0dc3036f6c334e.hot-update.js.map