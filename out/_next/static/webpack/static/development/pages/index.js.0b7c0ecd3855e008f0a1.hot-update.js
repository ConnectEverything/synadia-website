webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TeamMember.js":
/*!**********************************!*\
  !*** ./components/TeamMember.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamMember; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/TeamMember.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TeamMember =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TeamMember, _React$Component);

  function TeamMember(props) {
    _classCallCheck(this, TeamMember);

    return _possibleConstructorReturn(this, _getPrototypeOf(TeamMember).call(this, props));
  }

  _createClass(TeamMember, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3710690403" + " " + "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3710690403" + " " + "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
        className: "jsx-3710690403" + " " + "thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/images/people/".concat(this.props.name.split(' ').join(''), ".png"),
        alt: "".concat(this.props.name, " profile picture"),
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.name), this.props.position && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3710690403" + " " + "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, this.props.position), this.props.bio && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.props.bio), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3710690403" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, this.props.links.twitter && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://twitter.com/".concat(this.props.links.twitter),
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        width: "25px",
        height: "22px",
        viewBox: "0 0 25 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fillRule: "evenodd",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(-1526.000000, -41.000000)",
        fillRule: "nonzero",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(1451.000000, 38.000000)",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "#FFF",
        d: "M99.6878981,5.49085758 C98.7792448,5.91354575 97.8042729,6.20020802 96.7798848,6.32818754 C97.8258547,5.67063028 98.6265184,4.62765222 99.0059946,3.38868169 C98.0248508,3.99762198 96.941849,4.43979081 95.7878896,4.67948773 C94.8638265,3.64459839 93.5494358,3 92.0915566,3 C89.2946391,3 87.0268583,5.38074946 87.0268583,8.31538514 C87.0268583,8.73159386 87.0715951,9.1381046 87.1580029,9.52682864 C82.9495162,9.30491841 79.2177245,7.18817437 76.7200877,3.97170422 C76.2834904,4.75558939 76.0351185,5.66897866 76.0351185,6.64398612 C76.0351185,8.4886784 76.9298949,10.1163306 78.2874894,11.0685965 C77.4574987,11.0394602 76.6768838,10.7997633 75.9934878,10.4013413 L75.9934878,10.4677449 C75.9934878,13.0428352 77.7398367,15.1919765 80.0554202,15.6811107 C79.6311668,15.8009591 79.1837988,15.8673628 78.7209806,15.8673628 C78.3939461,15.8673628 78.0776823,15.8333563 77.7675905,15.7685619 C78.4124217,17.8820874 80.2822103,19.4190275 82.4975494,19.461165 C80.7650774,20.8863877 78.5805982,21.7334156 76.207934,21.7334156 C75.7991308,21.7334156 75.3964592,21.7074979 75,21.6605325 C77.2415599,23.1715972 79.9027341,24.0526316 82.7629044,24.0526316 C92.0792933,24.0526316 97.1717857,15.9515955 97.1717857,8.92597706 L97.1548027,8.23767422 C98.1498234,7.49262334 99.0106337,6.55653486 99.6878981,5.49085758 Z",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))))))), this.props.links.linkedin && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://linkedin.com/in/".concat(this.props.links.linkedin),
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        width: "25px",
        height: "25px",
        viewBox: "0 0 25 25",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fillRule: "evenodd",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "#FFF",
        d: "M0.38275811,10.2684822 L5.45430307,10.2684822 L5.45430307,27 L0.38275811,27 L0.38275811,10.2684822 Z M2.96637535,2 C4.59309732,2 5.9327507,3.36186765 5.9327507,5.01556408 C5.9327507,6.66926052 4.59309732,8.03112817 2.96637535,8.03112817 C1.33965338,8.03112817 -1.77635684e-13,6.66926052 -1.77635684e-13,5.01556408 C-1.77635684e-13,3.36186765 1.33965338,2 2.96637535,2 Z M8.707747,10.2684822 L13.5879129,10.2684822 L13.5879129,12.5058362 L13.6836024,12.5058362 C14.3534291,11.1439685 16.0758406,9.78210086 18.5637683,9.78210086 C23.7310028,9.78210086 24.6878981,13.2840463 24.6878981,17.7587543 L24.6878981,26.9027228 L19.6163531,26.9027228 L19.6163531,18.7315169 C19.6163531,16.7859916 19.6163531,14.2568089 16.9370464,14.2568089 C14.2577396,14.2568089 13.8749815,16.3968866 13.8749815,18.5369643 L13.8749815,26.8054465 L8.80343653,26.8054465 L8.80343653,10.2684822 L8.707747,10.2684822 Z",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }))))), this.props.links.github && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/".concat(this.props.links.twitter),
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        width: "25px",
        height: "25px",
        viewBox: "0 0 25 25",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fillRule: "evenodd",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(-1601.000000, -40.000000)",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(1451.000000, 38.000000)",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "#FFF",
        d: "M162.343949,2 C155.554777,2 150,7.76637972 150,14.8141771 C150,20.5004683 153.548885,25.3057847 158.409315,26.9876454 C159.026513,27.067734 159.257962,26.7473796 159.257962,26.3469366 C159.257962,26.0265821 159.257962,25.2256961 159.257962,24.1845442 C155.786226,24.9854303 155.091879,22.5026834 155.091879,22.5026834 C154.551831,21.0610885 153.703185,20.6606455 153.703185,20.6606455 C152.545939,19.8597594 153.780334,19.8597594 153.780334,19.8597594 C155.014729,19.939848 155.709076,21.1411771 155.709076,21.1411771 C156.789172,23.0633037 158.563615,22.5026834 159.335111,22.182329 C159.412261,21.3814429 159.79801,20.8208227 160.106608,20.5004683 C157.32922,20.1801138 154.474682,19.0588733 154.474682,14.1734683 C154.474682,12.811962 154.93758,11.6106329 155.709076,10.7296582 C155.554777,10.4093038 155.169029,9.12788604 155.863376,7.36593668 C155.863376,7.36593668 156.866322,7.04558225 159.257962,8.64735439 C160.260908,8.32699997 161.263854,8.24691136 162.343949,8.24691136 C163.424045,8.24691136 164.42699,8.40708857 165.429936,8.64735439 C167.821576,6.96549364 168.824522,7.28584807 168.824522,7.28584807 C169.518869,9.04779743 169.055971,10.3292151 168.978822,10.6495696 C169.750318,11.5305443 170.213217,12.6517848 170.213217,14.0933797 C170.213217,18.9787847 167.358678,20.1000252 164.58129,20.4203796 C165.044188,20.8208227 165.429936,21.6217088 165.429936,22.8230379 C165.429936,24.5048986 165.429936,25.9464935 165.429936,26.3469366 C165.429936,26.667291 165.661385,27.067734 166.278583,26.9876454 C171.139013,25.3057847 174.687898,20.5004683 174.687898,14.8141771 C174.687898,7.76637972 169.133121,2 162.343949,2 Z",
        className: "jsx-3710690403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }))))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3710690403",
        css: ".outer.jsx-3710690403{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative;margin-top:5rem;width:90vw;background:var(--horizontal-gradient);}.inner.jsx-3710690403{height:100%;text-align:center;position:relative;margin:2px;padding:3.875rem 1.125rem 0.5rem 1.125rem;background-color:var(--color-tertiary);}.thumbnail.jsx-3710690403{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:12rem;height:12rem;position:absolute;left:50%;top:0;margin:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.thumbnail.jsx-3710690403 img.jsx-3710690403{object-fit:cover;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}h4.jsx-3710690403{margin-bottom:0.5rem;}.links.jsx-3710690403{list-style:none;padding:0;margin:0;}.links.jsx-3710690403 li.jsx-3710690403{display:inline-block;margin:1em;}.links.jsx-3710690403 li.jsx-3710690403:first-of-type{margin-left:0;}.links.jsx-3710690403 li.jsx-3710690403:last-of-type{margin-right:0;}@media (min-width:1024px){.outer.jsx-3710690403{width:26%;margin:5.5% 3%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1RlYW1NZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdvQixBQUcwQixBQVdELEFBU0MsQUFZSSxBQUtJLEFBSUwsQUFNSyxBQUtQLEFBSUMsQUFLSCxVQUNLLEVBbERDLEVBeUNwQixDQUlBLENBZlksQ0FUaUIsSUFLN0IsQUFVYSxJQWVYLENBcEJTLElBOUJTLEVBb0NwQixHQUxBLGFBOUJhLFdBQytCLGVBZHBCLEFBb0JDLDJCQUxnQixTQWtCekMsOEJBakJBLFlBZnlCLHFCQW9CWCxZQUNDLGFBQ0ssa0JBQ1QsU0FDSCxNQUNHLFNBQ2tCLFdBekJiLHdEQUNJLGtCQUNGLFFBd0JsQixRQXZCYSxXQUMyQixzQ0FDeEMiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL2NvbXBvbmVudHMvVGVhbU1lbWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlYW1NZW1iZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJ0aHVtYm5haWxcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtgc3RhdGljL2ltYWdlcy9wZW9wbGUvJHt0aGlzLnByb3BzLm5hbWVcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgIC5qb2luKCcnKX0ucG5nYH1cbiAgICAgICAgICAgICAgYWx0PXtgJHt0aGlzLnByb3BzLm5hbWV9IHByb2ZpbGUgcGljdHVyZWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxoND57dGhpcy5wcm9wcy5uYW1lfTwvaDQ+XG4gICAgICAgICAge3RoaXMucHJvcHMucG9zaXRpb24gJiYgKFxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByaW1hcnlcIj57dGhpcy5wcm9wcy5wb3NpdGlvbn08L2g1PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RoaXMucHJvcHMuYmlvICYmIDxwPnt0aGlzLnByb3BzLmJpb308L3A+fVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubGlua3MudHdpdHRlciAmJiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS8ke3RoaXMucHJvcHMubGlua3MudHdpdHRlcn1gfT5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjJweFwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjUgMjJcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE1MjYuMDAwMDAwLCAtNDEuMDAwMDAwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cIm5vbnplcm9cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDUxLjAwMDAwMCwgMzguMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTk5LjY4Nzg5ODEsNS40OTA4NTc1OCBDOTguNzc5MjQ0OCw1LjkxMzU0NTc1IDk3LjgwNDI3MjksNi4yMDAyMDgwMiA5Ni43Nzk4ODQ4LDYuMzI4MTg3NTQgQzk3LjgyNTg1NDcsNS42NzA2MzAyOCA5OC42MjY1MTg0LDQuNjI3NjUyMjIgOTkuMDA1OTk0NiwzLjM4ODY4MTY5IEM5OC4wMjQ4NTA4LDMuOTk3NjIxOTggOTYuOTQxODQ5LDQuNDM5NzkwODEgOTUuNzg3ODg5Niw0LjY3OTQ4NzczIEM5NC44NjM4MjY1LDMuNjQ0NTk4MzkgOTMuNTQ5NDM1OCwzIDkyLjA5MTU1NjYsMyBDODkuMjk0NjM5MSwzIDg3LjAyNjg1ODMsNS4zODA3NDk0NiA4Ny4wMjY4NTgzLDguMzE1Mzg1MTQgQzg3LjAyNjg1ODMsOC43MzE1OTM4NiA4Ny4wNzE1OTUxLDkuMTM4MTA0NiA4Ny4xNTgwMDI5LDkuNTI2ODI4NjQgQzgyLjk0OTUxNjIsOS4zMDQ5MTg0MSA3OS4yMTc3MjQ1LDcuMTg4MTc0MzcgNzYuNzIwMDg3NywzLjk3MTcwNDIyIEM3Ni4yODM0OTA0LDQuNzU1NTg5MzkgNzYuMDM1MTE4NSw1LjY2ODk3ODY2IDc2LjAzNTExODUsNi42NDM5ODYxMiBDNzYuMDM1MTE4NSw4LjQ4ODY3ODQgNzYuOTI5ODk0OSwxMC4xMTYzMzA2IDc4LjI4NzQ4OTQsMTEuMDY4NTk2NSBDNzcuNDU3NDk4NywxMS4wMzk0NjAyIDc2LjY3Njg4MzgsMTAuNzk5NzYzMyA3NS45OTM0ODc4LDEwLjQwMTM0MTMgTDc1Ljk5MzQ4NzgsMTAuNDY3NzQ0OSBDNzUuOTkzNDg3OCwxMy4wNDI4MzUyIDc3LjczOTgzNjcsMTUuMTkxOTc2NSA4MC4wNTU0MjAyLDE1LjY4MTExMDcgQzc5LjYzMTE2NjgsMTUuODAwOTU5MSA3OS4xODM3OTg4LDE1Ljg2NzM2MjggNzguNzIwOTgwNiwxNS44NjczNjI4IEM3OC4zOTM5NDYxLDE1Ljg2NzM2MjggNzguMDc3NjgyMywxNS44MzMzNTYzIDc3Ljc2NzU5MDUsMTUuNzY4NTYxOSBDNzguNDEyNDIxNywxNy44ODIwODc0IDgwLjI4MjIxMDMsMTkuNDE5MDI3NSA4Mi40OTc1NDk0LDE5LjQ2MTE2NSBDODAuNzY1MDc3NCwyMC44ODYzODc3IDc4LjU4MDU5ODIsMjEuNzMzNDE1NiA3Ni4yMDc5MzQsMjEuNzMzNDE1NiBDNzUuNzk5MTMwOCwyMS43MzM0MTU2IDc1LjM5NjQ1OTIsMjEuNzA3NDk3OSA3NSwyMS42NjA1MzI1IEM3Ny4yNDE1NTk5LDIzLjE3MTU5NzIgNzkuOTAyNzM0MSwyNC4wNTI2MzE2IDgyLjc2MjkwNDQsMjQuMDUyNjMxNiBDOTIuMDc5MjkzMywyNC4wNTI2MzE2IDk3LjE3MTc4NTcsMTUuOTUxNTk1NSA5Ny4xNzE3ODU3LDguOTI1OTc3MDYgTDk3LjE1NDgwMjcsOC4yMzc2NzQyMiBDOTguMTQ5ODIzNCw3LjQ5MjYyMzM0IDk5LjAxMDYzMzcsNi41NTY1MzQ4NiA5OS42ODc4OTgxLDUuNDkwODU3NTggWlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMucHJvcHMubGlua3MubGlua2VkaW4gJiYgKFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2xpbmtlZGluLmNvbS9pbi8ke3RoaXMucHJvcHMubGlua3MubGlua2VkaW59YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1IDI1XCJcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wLjM4Mjc1ODExLDEwLjI2ODQ4MjIgTDUuNDU0MzAzMDcsMTAuMjY4NDgyMiBMNS40NTQzMDMwNywyNyBMMC4zODI3NTgxMSwyNyBMMC4zODI3NTgxMSwxMC4yNjg0ODIyIFogTTIuOTY2Mzc1MzUsMiBDNC41OTMwOTczMiwyIDUuOTMyNzUwNywzLjM2MTg2NzY1IDUuOTMyNzUwNyw1LjAxNTU2NDA4IEM1LjkzMjc1MDcsNi42NjkyNjA1MiA0LjU5MzA5NzMyLDguMDMxMTI4MTcgMi45NjYzNzUzNSw4LjAzMTEyODE3IEMxLjMzOTY1MzM4LDguMDMxMTI4MTcgLTEuNzc2MzU2ODRlLTEzLDYuNjY5MjYwNTIgLTEuNzc2MzU2ODRlLTEzLDUuMDE1NTY0MDggQy0xLjc3NjM1Njg0ZS0xMywzLjM2MTg2NzY1IDEuMzM5NjUzMzgsMiAyLjk2NjM3NTM1LDIgWiBNOC43MDc3NDcsMTAuMjY4NDgyMiBMMTMuNTg3OTEyOSwxMC4yNjg0ODIyIEwxMy41ODc5MTI5LDEyLjUwNTgzNjIgTDEzLjY4MzYwMjQsMTIuNTA1ODM2MiBDMTQuMzUzNDI5MSwxMS4xNDM5Njg1IDE2LjA3NTg0MDYsOS43ODIxMDA4NiAxOC41NjM3NjgzLDkuNzgyMTAwODYgQzIzLjczMTAwMjgsOS43ODIxMDA4NiAyNC42ODc4OTgxLDEzLjI4NDA0NjMgMjQuNjg3ODk4MSwxNy43NTg3NTQzIEwyNC42ODc4OTgxLDI2LjkwMjcyMjggTDE5LjYxNjM1MzEsMjYuOTAyNzIyOCBMMTkuNjE2MzUzMSwxOC43MzE1MTY5IEMxOS42MTYzNTMxLDE2Ljc4NTk5MTYgMTkuNjE2MzUzMSwxNC4yNTY4MDg5IDE2LjkzNzA0NjQsMTQuMjU2ODA4OSBDMTQuMjU3NzM5NiwxNC4yNTY4MDg5IDEzLjg3NDk4MTUsMTYuMzk2ODg2NiAxMy44NzQ5ODE1LDE4LjUzNjk2NDMgTDEzLjg3NDk4MTUsMjYuODA1NDQ2NSBMOC44MDM0MzY1MywyNi44MDU0NDY1IEw4LjgwMzQzNjUzLDEwLjI2ODQ4MjIgTDguNzA3NzQ3LDEwLjI2ODQ4MjIgWlwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpbmtzLmdpdGh1YiAmJiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dGhpcy5wcm9wcy5saW5rcy50d2l0dGVyfWB9PlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNSAyNVwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNjAxLjAwMDAwMCwgLTQwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDUxLjAwMDAwMCwgMzguMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE2Mi4zNDM5NDksMiBDMTU1LjU1NDc3NywyIDE1MCw3Ljc2NjM3OTcyIDE1MCwxNC44MTQxNzcxIEMxNTAsMjAuNTAwNDY4MyAxNTMuNTQ4ODg1LDI1LjMwNTc4NDcgMTU4LjQwOTMxNSwyNi45ODc2NDU0IEMxNTkuMDI2NTEzLDI3LjA2NzczNCAxNTkuMjU3OTYyLDI2Ljc0NzM3OTYgMTU5LjI1Nzk2MiwyNi4zNDY5MzY2IEMxNTkuMjU3OTYyLDI2LjAyNjU4MjEgMTU5LjI1Nzk2MiwyNS4yMjU2OTYxIDE1OS4yNTc5NjIsMjQuMTg0NTQ0MiBDMTU1Ljc4NjIyNiwyNC45ODU0MzAzIDE1NS4wOTE4NzksMjIuNTAyNjgzNCAxNTUuMDkxODc5LDIyLjUwMjY4MzQgQzE1NC41NTE4MzEsMjEuMDYxMDg4NSAxNTMuNzAzMTg1LDIwLjY2MDY0NTUgMTUzLjcwMzE4NSwyMC42NjA2NDU1IEMxNTIuNTQ1OTM5LDE5Ljg1OTc1OTQgMTUzLjc4MDMzNCwxOS44NTk3NTk0IDE1My43ODAzMzQsMTkuODU5NzU5NCBDMTU1LjAxNDcyOSwxOS45Mzk4NDggMTU1LjcwOTA3NiwyMS4xNDExNzcxIDE1NS43MDkwNzYsMjEuMTQxMTc3MSBDMTU2Ljc4OTE3MiwyMy4wNjMzMDM3IDE1OC41NjM2MTUsMjIuNTAyNjgzNCAxNTkuMzM1MTExLDIyLjE4MjMyOSBDMTU5LjQxMjI2MSwyMS4zODE0NDI5IDE1OS43OTgwMSwyMC44MjA4MjI3IDE2MC4xMDY2MDgsMjAuNTAwNDY4MyBDMTU3LjMyOTIyLDIwLjE4MDExMzggMTU0LjQ3NDY4MiwxOS4wNTg4NzMzIDE1NC40NzQ2ODIsMTQuMTczNDY4MyBDMTU0LjQ3NDY4MiwxMi44MTE5NjIgMTU0LjkzNzU4LDExLjYxMDYzMjkgMTU1LjcwOTA3NiwxMC43Mjk2NTgyIEMxNTUuNTU0Nzc3LDEwLjQwOTMwMzggMTU1LjE2OTAyOSw5LjEyNzg4NjA0IDE1NS44NjMzNzYsNy4zNjU5MzY2OCBDMTU1Ljg2MzM3Niw3LjM2NTkzNjY4IDE1Ni44NjYzMjIsNy4wNDU1ODIyNSAxNTkuMjU3OTYyLDguNjQ3MzU0MzkgQzE2MC4yNjA5MDgsOC4zMjY5OTk5NyAxNjEuMjYzODU0LDguMjQ2OTExMzYgMTYyLjM0Mzk0OSw4LjI0NjkxMTM2IEMxNjMuNDI0MDQ1LDguMjQ2OTExMzYgMTY0LjQyNjk5LDguNDA3MDg4NTcgMTY1LjQyOTkzNiw4LjY0NzM1NDM5IEMxNjcuODIxNTc2LDYuOTY1NDkzNjQgMTY4LjgyNDUyMiw3LjI4NTg0ODA3IDE2OC44MjQ1MjIsNy4yODU4NDgwNyBDMTY5LjUxODg2OSw5LjA0Nzc5NzQzIDE2OS4wNTU5NzEsMTAuMzI5MjE1MSAxNjguOTc4ODIyLDEwLjY0OTU2OTYgQzE2OS43NTAzMTgsMTEuNTMwNTQ0MyAxNzAuMjEzMjE3LDEyLjY1MTc4NDggMTcwLjIxMzIxNywxNC4wOTMzNzk3IEMxNzAuMjEzMjE3LDE4Ljk3ODc4NDcgMTY3LjM1ODY3OCwyMC4xMDAwMjUyIDE2NC41ODEyOSwyMC40MjAzNzk2IEMxNjUuMDQ0MTg4LDIwLjgyMDgyMjcgMTY1LjQyOTkzNiwyMS42MjE3MDg4IDE2NS40Mjk5MzYsMjIuODIzMDM3OSBDMTY1LjQyOTkzNiwyNC41MDQ4OTg2IDE2NS40Mjk5MzYsMjUuOTQ2NDkzNSAxNjUuNDI5OTM2LDI2LjM0NjkzNjYgQzE2NS40Mjk5MzYsMjYuNjY3MjkxIDE2NS42NjEzODUsMjcuMDY3NzM0IDE2Ni4yNzg1ODMsMjYuOTg3NjQ1NCBDMTcxLjEzOTAxMywyNS4zMDU3ODQ3IDE3NC42ODc4OTgsMjAuNTAwNDY4MyAxNzQuNjg3ODk4LDE0LjgxNDE3NzEgQzE3NC42ODc4OTgsNy43NjYzNzk3MiAxNjkuMTMzMTIxLDIgMTYyLjM0Mzk0OSwyIFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5vdXRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Jpem9udGFsLWdyYWRpZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5uZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzLjg3NXJlbSAxLjEyNXJlbSAwLjVyZW0gMS4xMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTJyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEycmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aHVtYm5haWwgaW1nIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpbmtzIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saW5rcyBsaTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saW5rcyBsaTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIC5vdXRlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNiU7XG4gICAgICAgICAgICAgIG1hcmdpbjogNS41JSAzJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/TeamMember.js */",
        __self: this
      }));
    }
  }]);

  return TeamMember;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.0b7c0ecd3855e008f0a1.hot-update.js.map