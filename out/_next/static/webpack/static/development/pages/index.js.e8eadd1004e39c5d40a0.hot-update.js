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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Team =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Team, _React$Component);

  function Team(props) {
    var _this;

    _classCallCheck(this, Team);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Team).call(this, props));
    _this.state = {
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
        name: '',
        position: '',
        bio: '',
        links: {
          linkedin: '',
          twitter: '',
          github: ''
        }
      }]
    };
    return _this;
  }

  _createClass(Team, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2696217284" + " " + "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2696217284" + " " + "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TeamMember__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "",
        position: "",
        bio: "",
        links: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TeamMember__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "David Kemper",
        position: "Engineering",
        bio: "Software Engineer",
        links: {
          linkedin: 'david-kemper-531bb038',
          github: 'davidkemper'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2696217284",
        css: ".outer.jsx-2696217284{position:relative;width:100vw;overflow:hidden;-webkit-scroll-snap-type:x mandatory;-moz-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;-webkit-scroll-snap-points-y:repeat(80vw);-moz-scroll-snap-points-y:repeat(80vw);-ms-scroll-snap-points-y:repeat(80vw);scroll-snap-points-y:repeat(80vw);background-image:url('/static/images/bg.png');background-repeat:no-repeat;background-size:contain;background-position:50% 10%;}.outer.jsx-2696217284:before{content:'';display:block;position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient( transparent 10%, var(--color-quaternary), var(--color-quaternary), var(--color-quaternary) );}.inner.jsx-2696217284{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-scroll-snap-align:start;-moz-scroll-snap-align:start;-ms-scroll-snap-align:start;scroll-snap-align:start;overflow-x:auto;-webkit-overflow-scrolling:touch;margin-top:5rem;margin-bottom:-50px;padding-bottom:50px;padding-left:10vw;overflow-y:hidden;overflow-x:scroll;}@media (min-width:768px){.inner.jsx-2696217284{max-width:1400px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-left:auto;margin-right:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1RlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkdvQixBQUcrQixBQVlQLEFBZ0JFLEFBZU0sV0E5QkwsTUErQkcsQ0EzQ0wsT0FhTSxLQVpGLGFBYVQsR0Fac0IsSUFhdkIsTUFDSyxXQUNDLE9BV0ssQUFnQlEsS0FyQnhCLDBEQU11QixvQ0FnQlAsTUExQ2lCLFNBMkNmLFlBdEJyQixLQXVCc0Isa0JBQ3BCLDJCQWxCZ0IsZ0JBQ2lCLGlDQUNqQixnQkFDSSxpQkE3QjBCLEdBOEIxQixvQkFDRixrQkFDQSxLQS9CVSxhQWdDVixlQS9CTSxHQWdDMUIscUJBL0I4Qiw0QkFDOUIiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL2NvbXBvbmVudHMvVGVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVhbU1lbWJlciBmcm9tICcuL1RlYW1NZW1iZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGVhbTogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0RlcmVrIENvbGxpc29uJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0ZvdW5kZXIgJiBDRU8nLFxuICAgICAgICAgIGJpbzpcbiAgICAgICAgICAgICdFbnRyZXByZW5ldXIsIEludmVzdG9yLCBhbmQgVGVjaG5vbG9naXN0LiBDcmVhdG9yIG9mIEBuYXRzX2lvIGFuZCBAY2xvdWRmb3VuZHJ5JyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2RlcmVrY29sbGlzb24nLFxuICAgICAgICAgICAgbGlua2VkaW46ICdkZXJla2NvbGxpc29uJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2RlcmVrY29sbGlzb24nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0NvbGluIFN1bGxpdmFuJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ1Byb2R1Y3QgTWFuYWdlbWVudCcsXG4gICAgICAgICAgYmlvOiAnUHJvZHVjdCBNYW5hZ2VyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ0NvbGluU3VsbGl2YW4wMScsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2NvbGluc3VsbGl2YW4nLFxuICAgICAgICAgICAgZ2l0aHViOiAnQ29saW5TdWxsaXZhbjEnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0dpbmdlciBDb2xsaXNvbicsXG4gICAgICAgICAgcG9zaXRpb246ICdDb21tdW5pdHknLFxuICAgICAgICAgIGJpbzogJ0RldmVsb3BlciBBZHZvY2F0ZSAmIENvbW11bml0eSBNYW5hZ2VyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2NyYXNoZ2luZ2VybHknLFxuICAgICAgICAgICAgbGlua2VkaW46ICdnaW5nZXItY29sbGlzb24nLFxuICAgICAgICAgICAgZ2l0aHViOiAnZ2NvbGxpc28nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0l2YW4gS296bG92aWMnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2l2YW5rb3psb3ZpYycsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2l2YW5rb3psb3ZpYycsXG4gICAgICAgICAgICBnaXRodWI6ICdrb3psb3ZpYydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnV2FsZGVtYXIgUXVldmVkbycsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnd2FsbHlxcycsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ3dhbGRlbWFycXVldmVkbycsXG4gICAgICAgICAgICBnaXRodWI6ICd3YWxseXFzJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdBbGJlcnRvIFJpY2FydCcsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnYWxiZXJ0b3JpY2FydCcsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2FsYmVydG9yaWNhcnQnLFxuICAgICAgICAgICAgZ2l0aHViOiAnYXJpY2FydCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnU3RlcGhlbiBBc2J1cnknLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ3RoZXNhc2J1cnknLFxuICAgICAgICAgICAgbGlua2VkaW46ICdzdGFzYnVyeScsXG4gICAgICAgICAgICBnaXRodWI6ICdzYXNidXJ5J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICBiaW86ICcnLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICBsaW5rZWRpbjogJycsXG4gICAgICAgICAgICB0d2l0dGVyOiAnJyxcbiAgICAgICAgICAgIGdpdGh1YjogJydcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICA8VGVhbU1lbWJlciBuYW1lPVwiXCIgcG9zaXRpb249XCJcIiBiaW89XCJcIiBsaW5rcz17e319IC8+XG4gICAgICAgICAgPFRlYW1NZW1iZXJcbiAgICAgICAgICAgIG5hbWU9XCJEYXZpZCBLZW1wZXJcIlxuICAgICAgICAgICAgcG9zaXRpb249XCJFbmdpbmVlcmluZ1wiXG4gICAgICAgICAgICBiaW89XCJTb2Z0d2FyZSBFbmdpbmVlclwiXG4gICAgICAgICAgICBsaW5rcz17e1xuICAgICAgICAgICAgICBsaW5rZWRpbjogJ2RhdmlkLWtlbXBlci01MzFiYjAzOCcsXG4gICAgICAgICAgICAgIGdpdGh1YjogJ2Rhdmlka2VtcGVyJ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5vdXRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gICAgICAgICAgICBzY3JvbGwtc25hcC1wb2ludHMteTogcmVwZWF0KDgwdncpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9iZy5wbmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5vdXRlcjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMTAlLFxuICAgICAgICAgICAgICB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KSxcbiAgICAgICAgICAgICAgdmFyKC0tY29sb3ItcXVhdGVybmFyeSksXG4gICAgICAgICAgICAgIHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC01MHB4OyAvKiBtYXhpbXVtIHdpZHRoIG9mIHNjcm9sbGJhciAqL1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7IC8qIG1heGltdW0gd2lkdGggb2Ygc2Nyb2xsYmFyICovXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAuaW5uZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Team.js */",
        __self: this
      }));
    }
  }]);

  return Team;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.e8eadd1004e39c5d40a0.hot-update.js.map