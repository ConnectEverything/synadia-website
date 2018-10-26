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
      vpWidth: null,
      team: [{
        name: 'Derek Collison',
        position: 'Founder & CEO',
        bio: 'Entrepreneur, Investor, and Technologist. Creator of @nats_io and @cloudfoundry',
        links: {
          twitter: 'derekcollison',
          linkedin: 'derekcollison',
          github: 'derekcollison'
        }
      }, {
        name: 'Colin Sullivan',
        position: 'Product Management',
        bio: 'Product Manager',
        links: {
          twitter: 'ColinSullivan01',
          linkedin: 'colinsullivan',
          github: 'ColinSullivan1'
        }
      }, {
        name: 'Ginger Collison',
        position: 'Community',
        bio: 'Developer Advocate & Community Manager',
        links: {
          twitter: 'crashgingerly',
          linkedin: 'ginger-collison',
          github: 'gcolliso'
        }
      }, {
        name: 'Ivan Kozlovic',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          twitter: 'ivankozlovic',
          linkedin: 'ivankozlovic',
          github: 'kozlovic'
        }
      }, {
        name: 'Waldemar Quevedo',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          twitter: 'wallyqs',
          linkedin: 'waldemarquevedo',
          github: 'wallyqs'
        }
      }, {
        name: 'Alberto Ricart',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          twitter: 'albertoricart',
          linkedin: 'albertoricart',
          github: 'aricart'
        }
      }, {
        name: 'Stephen Asbury',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          twitter: 'thesasbury',
          linkedin: 'stasbury',
          github: 'sasbury'
        }
      }, {
        name: 'David Kemper',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          linkedin: 'david-kemper-531bb038',
          github: 'davidkemper'
        }
      }]
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
      var orderedMembers = this.props.members;

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
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3324263279" + " " + "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
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
            lineNumber: 139
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3324263279",
        css: ".outer.jsx-3324263279{position:relative;width:100vw;overflow:hidden;-webkit-scroll-snap-type:x mandatory;-moz-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;-webkit-scroll-snap-points-x:repeat(80vw);-moz-scroll-snap-points-x:repeat(80vw);-ms-scroll-snap-points-x:repeat(80vw);scroll-snap-points-x:repeat(80vw);background-image:url('/static/images/bg.png');background-repeat:no-repeat;background-size:contain;background-position:50% 10%;}.outer.jsx-3324263279:before{content:'';display:block;position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient( transparent 10%, var(--color-quaternary), var(--color-quaternary), var(--color-quaternary) );}.inner.jsx-3324263279{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-scroll-snap-align:start;-moz-scroll-snap-align:start;-ms-scroll-snap-align:start;scroll-snap-align:start;overflow-x:auto;-webkit-overflow-scrolling:touch;margin-top:5rem;margin-bottom:-50px;padding-bottom:50px;padding-left:10vw;overflow-y:hidden;overflow-x:scroll;}@media (min-width:768px){.inner.jsx-3324263279{max-width:1400px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-left:auto;margin-right:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1RlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0pvQixBQUcrQixBQVlQLEFBZ0JFLEFBZU0sV0E5QkwsTUErQkcsQ0EzQ0wsT0FhTSxLQVpGLGFBYVQsR0Fac0IsSUFhdkIsTUFDSyxXQUNDLE9BV0ssQUFnQlEsS0FyQnhCLDBEQU11QixvQ0FnQlAsTUExQ2lCLFNBMkNmLFlBdEJyQixLQXVCc0Isa0JBQ3BCLDJCQWxCZ0IsZ0JBQ2lCLGlDQUNqQixnQkFDSSxpQkE3QjBCLEdBOEIxQixvQkFDRixrQkFDQSxLQS9CVSxhQWdDVixlQS9CTSxHQWdDMUIscUJBL0I4Qiw0QkFDOUIiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL2NvbXBvbmVudHMvVGVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVhbU1lbWJlciBmcm9tICcuL1RlYW1NZW1iZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdnBXaWR0aDogbnVsbCxcbiAgICAgIHRlYW06IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdEZXJlayBDb2xsaXNvbicsXG4gICAgICAgICAgcG9zaXRpb246ICdGb3VuZGVyICYgQ0VPJyxcbiAgICAgICAgICBiaW86XG4gICAgICAgICAgICAnRW50cmVwcmVuZXVyLCBJbnZlc3RvciwgYW5kIFRlY2hub2xvZ2lzdC4gQ3JlYXRvciBvZiBAbmF0c19pbyBhbmQgQGNsb3VkZm91bmRyeScsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdkZXJla2NvbGxpc29uJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnZGVyZWtjb2xsaXNvbicsXG4gICAgICAgICAgICBnaXRodWI6ICdkZXJla2NvbGxpc29uJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdDb2xpbiBTdWxsaXZhbicsXG4gICAgICAgICAgcG9zaXRpb246ICdQcm9kdWN0IE1hbmFnZW1lbnQnLFxuICAgICAgICAgIGJpbzogJ1Byb2R1Y3QgTWFuYWdlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdDb2xpblN1bGxpdmFuMDEnLFxuICAgICAgICAgICAgbGlua2VkaW46ICdjb2xpbnN1bGxpdmFuJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ0NvbGluU3VsbGl2YW4xJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdHaW5nZXIgQ29sbGlzb24nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnQ29tbXVuaXR5JyxcbiAgICAgICAgICBiaW86ICdEZXZlbG9wZXIgQWR2b2NhdGUgJiBDb21tdW5pdHkgTWFuYWdlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdjcmFzaGdpbmdlcmx5JyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnZ2luZ2VyLWNvbGxpc29uJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2djb2xsaXNvJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdJdmFuIEtvemxvdmljJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdpdmFua296bG92aWMnLFxuICAgICAgICAgICAgbGlua2VkaW46ICdpdmFua296bG92aWMnLFxuICAgICAgICAgICAgZ2l0aHViOiAna296bG92aWMnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1dhbGRlbWFyIFF1ZXZlZG8nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ3dhbGx5cXMnLFxuICAgICAgICAgICAgbGlua2VkaW46ICd3YWxkZW1hcnF1ZXZlZG8nLFxuICAgICAgICAgICAgZ2l0aHViOiAnd2FsbHlxcydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQWxiZXJ0byBSaWNhcnQnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2FsYmVydG9yaWNhcnQnLFxuICAgICAgICAgICAgbGlua2VkaW46ICdhbGJlcnRvcmljYXJ0JyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2FyaWNhcnQnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1N0ZXBoZW4gQXNidXJ5JyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICd0aGVzYXNidXJ5JyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnc3Rhc2J1cnknLFxuICAgICAgICAgICAgZ2l0aHViOiAnc2FzYnVyeSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRGF2aWQgS2VtcGVyJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIGxpbmtlZGluOiAnZGF2aWQta2VtcGVyLTUzMWJiMDM4JyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2Rhdmlka2VtcGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBvcHVsYXRlTWVtYmVyQXJyYXkgPSB0aGlzLnBvcHVsYXRlTWVtYmVyQXJyYXkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG5cbiAgdXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdnBXaWR0aDogd2luZG93LmlubmVyV2lkdGggfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnN0YXRlLnZwV2lkdGg7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICBwb3B1bGF0ZU1lbWJlckFycmF5KCkge1xuICAgIGxldCBvcmRlcmVkTWVtYmVycyA9IHRoaXMucHJvcHMubWVtYmVycztcblxuICAgIGlmICh0aGlzLnN0YXRlLnZwV2lkdGggPCAxMDI0KSB7XG4gICAgICBsZXQgY291bnQgPSBvcmRlcmVkTWVtYmVycy5sZW5ndGg7XG4gICAgICBsZXQgcmFuZG9tbnVtYmVyO1xuICAgICAgbGV0IHRlbXA7XG5cbiAgICAgIHdoaWxlIChjb3VudCkge1xuICAgICAgICByYW5kb21udW1iZXIgPSAoTWF0aC5yYW5kb20oKSAqIGNvdW50LS0pIHwgMDtcbiAgICAgICAgdGVtcCA9IG9yZGVyZWRNZW1iZXJzW2NvdW50XTtcbiAgICAgICAgb3JkZXJlZE1lbWJlcnNbY291bnRdID0gb3JkZXJlZE1lbWJlcnNbcmFuZG9tbnVtYmVyXTtcbiAgICAgICAgb3JkZXJlZE1lbWJlcnNbcmFuZG9tbnVtYmVyXSA9IHRlbXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVyZWRNZW1iZXJzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1lbWJlcnMgPSB0aGlzLnBvcHVsYXRlTWVtYmVyQXJyYXkoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICB7bWVtYmVycy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUZWFtTWVtYmVyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17aXRlbS5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgICBiaW89e2l0ZW0uYmlvfVxuICAgICAgICAgICAgICAgIGxpbmtzPXtpdGVtLmxpbmtzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAub3V0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtcG9pbnRzLXg6IHJlcGVhdCg4MHZ3KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvYmcucG5nJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDEwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3V0ZXI6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDEwJSxcbiAgICAgICAgICAgICAgdmFyKC0tY29sb3ItcXVhdGVybmFyeSksXG4gICAgICAgICAgICAgIHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpLFxuICAgICAgICAgICAgICB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5uZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNTBweDsgLyogbWF4aW11bSB3aWR0aCBvZiBzY3JvbGxiYXIgKi9cbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4OyAvKiBtYXhpbXVtIHdpZHRoIG9mIHNjcm9sbGJhciAqL1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLmlubmVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Team.js */",
        __self: this
      }));
    }
  }]);

  return Team;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.a2f24d0104e45df376e6.hot-update.js.map