webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Team.js":
/*!****************************!*\
  !*** ./components/Team.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Team; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TeamMember__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamMember */ "./components/TeamMember.js");
var _jsxFileName = "/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Team.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Team =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Team, _React$Component);

  function Team(props) {
    var _this;

    _classCallCheck(this, Team);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Team).call(this, props));
    _this.state = {
      members: null,
      vpWidth: null
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.populateMemberArray = _this.populateMemberArray.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Team, [{
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
    key: "populateMemberArray",
    value: function populateMemberArray() {
      this.setState({
        members: this.props.members
      });

      if (this.state.vpWidth < 1024) {
        var count = orderedMembers.length;
        var randomnumber;
        var temp;

        while (count) {
          randomnumber = Math.random() * count-- | 0;
          temp = orderedMembers[count];
          orderedMembers[count] = orderedMembers[randomnumber];
          orderedMembers[randomnumber] = temp;
        }
      }

      return orderedMembers;
    }
  }, {
    key: "render",
    value: function render() {
      var members = this.populateMemberArray();
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3324263279" + " " + "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3324263279" + " " + "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, members.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TeamMember__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: i,
          name: item.name,
          position: item.position,
          bio: item.bio,
          links: item.links,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3324263279",
        css: ".outer.jsx-3324263279{position:relative;width:100vw;overflow:hidden;-webkit-scroll-snap-type:x mandatory;-moz-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;-webkit-scroll-snap-points-x:repeat(80vw);-moz-scroll-snap-points-x:repeat(80vw);-ms-scroll-snap-points-x:repeat(80vw);scroll-snap-points-x:repeat(80vw);background-image:url('/static/images/bg.png');background-repeat:no-repeat;background-size:contain;background-position:50% 10%;}.outer.jsx-3324263279:before{content:'';display:block;position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient( transparent 10%, var(--color-quaternary), var(--color-quaternary), var(--color-quaternary) );}.inner.jsx-3324263279{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-scroll-snap-align:start;-moz-scroll-snap-align:start;-ms-scroll-snap-align:start;scroll-snap-align:start;overflow-x:auto;-webkit-overflow-scrolling:touch;margin-top:5rem;margin-bottom:-50px;padding-bottom:50px;padding-left:10vw;overflow-y:hidden;overflow-x:scroll;}@media (min-width:768px){.inner.jsx-3324263279{max-width:1400px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-left:auto;margin-right:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1RlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVvQixBQUcrQixBQVlQLEFBZ0JFLEFBZU0sV0E5QkwsTUErQkcsQ0EzQ0wsT0FhTSxLQVpGLGFBYVQsR0Fac0IsSUFhdkIsTUFDSyxXQUNDLE9BV0ssQUFnQlEsS0FyQnhCLDBEQU11QixvQ0FnQlAsTUExQ2lCLFNBMkNmLFlBdEJyQixLQXVCc0Isa0JBQ3BCLDJCQWxCZ0IsZ0JBQ2lCLGlDQUNqQixnQkFDSSxpQkE3QjBCLEdBOEIxQixvQkFDRixrQkFDQSxLQS9CVSxhQWdDVixlQS9CTSxHQWdDMUIscUJBL0I4Qiw0QkFDOUIiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL2NvbXBvbmVudHMvVGVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVhbU1lbWJlciBmcm9tICcuL1RlYW1NZW1iZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVtYmVyczogbnVsbCxcbiAgICAgIHZwV2lkdGg6IG51bGxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wb3B1bGF0ZU1lbWJlckFycmF5ID0gdGhpcy5wb3B1bGF0ZU1lbWJlckFycmF5LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgfVxuXG4gIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZwV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zdGF0ZS52cFdpZHRoO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG5cbiAgcG9wdWxhdGVNZW1iZXJBcnJheSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVtYmVyczogdGhpcy5wcm9wcy5tZW1iZXJzIH0pO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUudnBXaWR0aCA8IDEwMjQpIHtcbiAgICAgIGxldCBjb3VudCA9IG9yZGVyZWRNZW1iZXJzLmxlbmd0aDtcbiAgICAgIGxldCByYW5kb21udW1iZXI7XG4gICAgICBsZXQgdGVtcDtcblxuICAgICAgd2hpbGUgKGNvdW50KSB7XG4gICAgICAgIHJhbmRvbW51bWJlciA9IChNYXRoLnJhbmRvbSgpICogY291bnQtLSkgfCAwO1xuICAgICAgICB0ZW1wID0gb3JkZXJlZE1lbWJlcnNbY291bnRdO1xuICAgICAgICBvcmRlcmVkTWVtYmVyc1tjb3VudF0gPSBvcmRlcmVkTWVtYmVyc1tyYW5kb21udW1iZXJdO1xuICAgICAgICBvcmRlcmVkTWVtYmVyc1tyYW5kb21udW1iZXJdID0gdGVtcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXJlZE1lbWJlcnM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbWVtYmVycyA9IHRoaXMucG9wdWxhdGVNZW1iZXJBcnJheSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgIHttZW1iZXJzLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRlYW1NZW1iZXJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtpdGVtLnBvc2l0aW9ufVxuICAgICAgICAgICAgICAgIGJpbz17aXRlbS5iaW99XG4gICAgICAgICAgICAgICAgbGlua3M9e2l0ZW0ubGlua3N9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5vdXRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gICAgICAgICAgICBzY3JvbGwtc25hcC1wb2ludHMteDogcmVwZWF0KDgwdncpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9iZy5wbmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5vdXRlcjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMTAlLFxuICAgICAgICAgICAgICB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KSxcbiAgICAgICAgICAgICAgdmFyKC0tY29sb3ItcXVhdGVybmFyeSksXG4gICAgICAgICAgICAgIHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC01MHB4OyAvKiBtYXhpbXVtIHdpZHRoIG9mIHNjcm9sbGJhciAqL1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7IC8qIG1heGltdW0gd2lkdGggb2Ygc2Nyb2xsYmFyICovXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAuaW5uZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Team.js */",
        __self: this
      }));
    }
  }]);

  return Team;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.82d1f1b4332dcedc66de.hot-update.js.map