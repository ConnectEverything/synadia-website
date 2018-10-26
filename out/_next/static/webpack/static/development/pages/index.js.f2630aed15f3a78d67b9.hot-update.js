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
        className: "jsx-642810057" + " " + "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-642810057" + " " + "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
        className: "jsx-642810057" + " " + "thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/images/people/".concat(this.props.name.split(' ').join(''), ".png"),
        alt: "".concat(this.props.name, " profile picture"),
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.name), this.props.position && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-642810057" + " " + "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, this.props.position), this.props.bio && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.props.bio), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-642810057" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, this.props.links.twitter && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://twitter.com/".concat(this.props.links.twitter),
        className: "jsx-642810057",
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
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fillRule: "evenodd",
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(-1526.000000, -41.000000)",
        fillRule: "nonzero",
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(1451.000000, 38.000000)",
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "#FFF",
        d: "M99.6878981,5.49085758 C98.7792448,5.91354575 97.8042729,6.20020802 96.7798848,6.32818754 C97.8258547,5.67063028 98.6265184,4.62765222 99.0059946,3.38868169 C98.0248508,3.99762198 96.941849,4.43979081 95.7878896,4.67948773 C94.8638265,3.64459839 93.5494358,3 92.0915566,3 C89.2946391,3 87.0268583,5.38074946 87.0268583,8.31538514 C87.0268583,8.73159386 87.0715951,9.1381046 87.1580029,9.52682864 C82.9495162,9.30491841 79.2177245,7.18817437 76.7200877,3.97170422 C76.2834904,4.75558939 76.0351185,5.66897866 76.0351185,6.64398612 C76.0351185,8.4886784 76.9298949,10.1163306 78.2874894,11.0685965 C77.4574987,11.0394602 76.6768838,10.7997633 75.9934878,10.4013413 L75.9934878,10.4677449 C75.9934878,13.0428352 77.7398367,15.1919765 80.0554202,15.6811107 C79.6311668,15.8009591 79.1837988,15.8673628 78.7209806,15.8673628 C78.3939461,15.8673628 78.0776823,15.8333563 77.7675905,15.7685619 C78.4124217,17.8820874 80.2822103,19.4190275 82.4975494,19.461165 C80.7650774,20.8863877 78.5805982,21.7334156 76.207934,21.7334156 C75.7991308,21.7334156 75.3964592,21.7074979 75,21.6605325 C77.2415599,23.1715972 79.9027341,24.0526316 82.7629044,24.0526316 C92.0792933,24.0526316 97.1717857,15.9515955 97.1717857,8.92597706 L97.1548027,8.23767422 C98.1498234,7.49262334 99.0106337,6.55653486 99.6878981,5.49085758 Z",
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))))))), this.props.links.linkedin && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://linkedin.com/in/".concat(this.props.links.linkedin),
        className: "jsx-642810057",
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
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fillRule: "evenodd",
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "#FFF",
        d: "M0.38275811,10.2684822 L5.45430307,10.2684822 L5.45430307,27 L0.38275811,27 L0.38275811,10.2684822 Z M2.96637535,2 C4.59309732,2 5.9327507,3.36186765 5.9327507,5.01556408 C5.9327507,6.66926052 4.59309732,8.03112817 2.96637535,8.03112817 C1.33965338,8.03112817 -1.77635684e-13,6.66926052 -1.77635684e-13,5.01556408 C-1.77635684e-13,3.36186765 1.33965338,2 2.96637535,2 Z M8.707747,10.2684822 L13.5879129,10.2684822 L13.5879129,12.5058362 L13.6836024,12.5058362 C14.3534291,11.1439685 16.0758406,9.78210086 18.5637683,9.78210086 C23.7310028,9.78210086 24.6878981,13.2840463 24.6878981,17.7587543 L24.6878981,26.9027228 L19.6163531,26.9027228 L19.6163531,18.7315169 C19.6163531,16.7859916 19.6163531,14.2568089 16.9370464,14.2568089 C14.2577396,14.2568089 13.8749815,16.3968866 13.8749815,18.5369643 L13.8749815,26.8054465 L8.80343653,26.8054465 L8.80343653,10.2684822 L8.707747,10.2684822 Z",
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }))))), this.props.links.github && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/".concat(this.props.links.twitter),
        className: "jsx-642810057",
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
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fillRule: "evenodd",
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(-1601.000000, -40.000000)",
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(1451.000000, 38.000000)",
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "#FFF",
        d: "M162.343949,2 C155.554777,2 150,7.76637972 150,14.8141771 C150,20.5004683 153.548885,25.3057847 158.409315,26.9876454 C159.026513,27.067734 159.257962,26.7473796 159.257962,26.3469366 C159.257962,26.0265821 159.257962,25.2256961 159.257962,24.1845442 C155.786226,24.9854303 155.091879,22.5026834 155.091879,22.5026834 C154.551831,21.0610885 153.703185,20.6606455 153.703185,20.6606455 C152.545939,19.8597594 153.780334,19.8597594 153.780334,19.8597594 C155.014729,19.939848 155.709076,21.1411771 155.709076,21.1411771 C156.789172,23.0633037 158.563615,22.5026834 159.335111,22.182329 C159.412261,21.3814429 159.79801,20.8208227 160.106608,20.5004683 C157.32922,20.1801138 154.474682,19.0588733 154.474682,14.1734683 C154.474682,12.811962 154.93758,11.6106329 155.709076,10.7296582 C155.554777,10.4093038 155.169029,9.12788604 155.863376,7.36593668 C155.863376,7.36593668 156.866322,7.04558225 159.257962,8.64735439 C160.260908,8.32699997 161.263854,8.24691136 162.343949,8.24691136 C163.424045,8.24691136 164.42699,8.40708857 165.429936,8.64735439 C167.821576,6.96549364 168.824522,7.28584807 168.824522,7.28584807 C169.518869,9.04779743 169.055971,10.3292151 168.978822,10.6495696 C169.750318,11.5305443 170.213217,12.6517848 170.213217,14.0933797 C170.213217,18.9787847 167.358678,20.1000252 164.58129,20.4203796 C165.044188,20.8208227 165.429936,21.6217088 165.429936,22.8230379 C165.429936,24.5048986 165.429936,25.9464935 165.429936,26.3469366 C165.429936,26.667291 165.661385,27.067734 166.278583,26.9876454 C171.139013,25.3057847 174.687898,20.5004683 174.687898,14.8141771 C174.687898,7.76637972 169.133121,2 162.343949,2 Z",
        className: "jsx-642810057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }))))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "642810057",
        css: ".outer.jsx-642810057{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative;margin-top:5rem;margin-right:3vw;width:80vw;background:var(--horizontal-gradient);}.inner.jsx-642810057{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;position:relative;margin:2px;padding:3.875rem 1.125rem 0.5rem 1.125rem;background-color:var(--color-tertiary);}.thumbnail.jsx-642810057{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:12rem;height:12rem;position:absolute;left:50%;top:0;margin:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.thumbnail.jsx-642810057 img.jsx-642810057{object-fit:cover;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}h4.jsx-642810057{margin-bottom:0.5rem;}.links.jsx-642810057{list-style:none;padding:0;margin:0;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.links.jsx-642810057 li.jsx-642810057{display:inline-block;margin:1em;}.links.jsx-642810057 li.jsx-642810057:first-of-type{margin-left:0;}.links.jsx-642810057 li.jsx-642810057:last-of-type{margin-right:0;}@media (min-width:768px){.outer.jsx-642810057{width:26%;margin:5.5% 3%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1RlYW1NZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdvQixBQUcwQixBQVlBLEFBWUEsQUFZSSxBQUtJLEFBSUwsQUFPSyxBQUtQLEFBSUMsQUFLSCxVQUNLLElBVG5CLENBSUEsQ0FoQlksQ0FUaUIsSUFLN0IsQUFXYSxJQWVYLENBckJTLE1BT1gsR0FOc0IsdUNBL0NFLEFBWUEsQUFZQyxpQ0F3QnpCLEdBWEEsMENBcEN5QixBQVlPLHFCQVlsQixZQUNDLGFBQ0ssa0JBQ1QsU0FDSCxNQUNHLFNBQ2tCLFdBN0JiLGdCQVlLLHdDQVhELGtCQUNGLFFBNEJsQixRQTNCbUIsaUJBQ04sRUFTQyxTQVIwQixHQVNwQixrQkFDUCxXQUMrQixNQVY1QyxvQ0FXeUMsdUNBQ3pDIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1RlYW1NZW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtTWVtYmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwidGh1bWJuYWlsXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17YHN0YXRpYy9pbWFnZXMvcGVvcGxlLyR7dGhpcy5wcm9wcy5uYW1lXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAuam9pbignJyl9LnBuZ2B9XG4gICAgICAgICAgICAgIGFsdD17YCR7dGhpcy5wcm9wcy5uYW1lfSBwcm9maWxlIHBpY3R1cmVgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8aDQ+e3RoaXMucHJvcHMubmFtZX08L2g0PlxuICAgICAgICAgIHt0aGlzLnByb3BzLnBvc2l0aW9uICYmIChcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcmltYXJ5XCI+e3RoaXMucHJvcHMucG9zaXRpb259PC9oNT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmJpbyAmJiA8cD57dGhpcy5wcm9wcy5iaW99PC9wPn1cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpbmtzLnR3aXR0ZXIgJiYgKFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vJHt0aGlzLnByb3BzLmxpbmtzLnR3aXR0ZXJ9YH0+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIycHhcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1IDIyXCJcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNTI2LjAwMDAwMCwgLTQxLjAwMDAwMClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJub256ZXJvXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ1MS4wMDAwMDAsIDM4LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk05OS42ODc4OTgxLDUuNDkwODU3NTggQzk4Ljc3OTI0NDgsNS45MTM1NDU3NSA5Ny44MDQyNzI5LDYuMjAwMjA4MDIgOTYuNzc5ODg0OCw2LjMyODE4NzU0IEM5Ny44MjU4NTQ3LDUuNjcwNjMwMjggOTguNjI2NTE4NCw0LjYyNzY1MjIyIDk5LjAwNTk5NDYsMy4zODg2ODE2OSBDOTguMDI0ODUwOCwzLjk5NzYyMTk4IDk2Ljk0MTg0OSw0LjQzOTc5MDgxIDk1Ljc4Nzg4OTYsNC42Nzk0ODc3MyBDOTQuODYzODI2NSwzLjY0NDU5ODM5IDkzLjU0OTQzNTgsMyA5Mi4wOTE1NTY2LDMgQzg5LjI5NDYzOTEsMyA4Ny4wMjY4NTgzLDUuMzgwNzQ5NDYgODcuMDI2ODU4Myw4LjMxNTM4NTE0IEM4Ny4wMjY4NTgzLDguNzMxNTkzODYgODcuMDcxNTk1MSw5LjEzODEwNDYgODcuMTU4MDAyOSw5LjUyNjgyODY0IEM4Mi45NDk1MTYyLDkuMzA0OTE4NDEgNzkuMjE3NzI0NSw3LjE4ODE3NDM3IDc2LjcyMDA4NzcsMy45NzE3MDQyMiBDNzYuMjgzNDkwNCw0Ljc1NTU4OTM5IDc2LjAzNTExODUsNS42Njg5Nzg2NiA3Ni4wMzUxMTg1LDYuNjQzOTg2MTIgQzc2LjAzNTExODUsOC40ODg2Nzg0IDc2LjkyOTg5NDksMTAuMTE2MzMwNiA3OC4yODc0ODk0LDExLjA2ODU5NjUgQzc3LjQ1NzQ5ODcsMTEuMDM5NDYwMiA3Ni42NzY4ODM4LDEwLjc5OTc2MzMgNzUuOTkzNDg3OCwxMC40MDEzNDEzIEw3NS45OTM0ODc4LDEwLjQ2Nzc0NDkgQzc1Ljk5MzQ4NzgsMTMuMDQyODM1MiA3Ny43Mzk4MzY3LDE1LjE5MTk3NjUgODAuMDU1NDIwMiwxNS42ODExMTA3IEM3OS42MzExNjY4LDE1LjgwMDk1OTEgNzkuMTgzNzk4OCwxNS44NjczNjI4IDc4LjcyMDk4MDYsMTUuODY3MzYyOCBDNzguMzkzOTQ2MSwxNS44NjczNjI4IDc4LjA3NzY4MjMsMTUuODMzMzU2MyA3Ny43Njc1OTA1LDE1Ljc2ODU2MTkgQzc4LjQxMjQyMTcsMTcuODgyMDg3NCA4MC4yODIyMTAzLDE5LjQxOTAyNzUgODIuNDk3NTQ5NCwxOS40NjExNjUgQzgwLjc2NTA3NzQsMjAuODg2Mzg3NyA3OC41ODA1OTgyLDIxLjczMzQxNTYgNzYuMjA3OTM0LDIxLjczMzQxNTYgQzc1Ljc5OTEzMDgsMjEuNzMzNDE1NiA3NS4zOTY0NTkyLDIxLjcwNzQ5NzkgNzUsMjEuNjYwNTMyNSBDNzcuMjQxNTU5OSwyMy4xNzE1OTcyIDc5LjkwMjczNDEsMjQuMDUyNjMxNiA4Mi43NjI5MDQ0LDI0LjA1MjYzMTYgQzkyLjA3OTI5MzMsMjQuMDUyNjMxNiA5Ny4xNzE3ODU3LDE1Ljk1MTU5NTUgOTcuMTcxNzg1Nyw4LjkyNTk3NzA2IEw5Ny4xNTQ4MDI3LDguMjM3Njc0MjIgQzk4LjE0OTgyMzQsNy40OTI2MjMzNCA5OS4wMTA2MzM3LDYuNTU2NTM0ODYgOTkuNjg3ODk4MSw1LjQ5MDg1NzU4IFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpbmtzLmxpbmtlZGluICYmIChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vJHt0aGlzLnByb3BzLmxpbmtzLmxpbmtlZGlufWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNSAyNVwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMC4zODI3NTgxMSwxMC4yNjg0ODIyIEw1LjQ1NDMwMzA3LDEwLjI2ODQ4MjIgTDUuNDU0MzAzMDcsMjcgTDAuMzgyNzU4MTEsMjcgTDAuMzgyNzU4MTEsMTAuMjY4NDgyMiBaIE0yLjk2NjM3NTM1LDIgQzQuNTkzMDk3MzIsMiA1LjkzMjc1MDcsMy4zNjE4Njc2NSA1LjkzMjc1MDcsNS4wMTU1NjQwOCBDNS45MzI3NTA3LDYuNjY5MjYwNTIgNC41OTMwOTczMiw4LjAzMTEyODE3IDIuOTY2Mzc1MzUsOC4wMzExMjgxNyBDMS4zMzk2NTMzOCw4LjAzMTEyODE3IC0xLjc3NjM1Njg0ZS0xMyw2LjY2OTI2MDUyIC0xLjc3NjM1Njg0ZS0xMyw1LjAxNTU2NDA4IEMtMS43NzYzNTY4NGUtMTMsMy4zNjE4Njc2NSAxLjMzOTY1MzM4LDIgMi45NjYzNzUzNSwyIFogTTguNzA3NzQ3LDEwLjI2ODQ4MjIgTDEzLjU4NzkxMjksMTAuMjY4NDgyMiBMMTMuNTg3OTEyOSwxMi41MDU4MzYyIEwxMy42ODM2MDI0LDEyLjUwNTgzNjIgQzE0LjM1MzQyOTEsMTEuMTQzOTY4NSAxNi4wNzU4NDA2LDkuNzgyMTAwODYgMTguNTYzNzY4Myw5Ljc4MjEwMDg2IEMyMy43MzEwMDI4LDkuNzgyMTAwODYgMjQuNjg3ODk4MSwxMy4yODQwNDYzIDI0LjY4Nzg5ODEsMTcuNzU4NzU0MyBMMjQuNjg3ODk4MSwyNi45MDI3MjI4IEwxOS42MTYzNTMxLDI2LjkwMjcyMjggTDE5LjYxNjM1MzEsMTguNzMxNTE2OSBDMTkuNjE2MzUzMSwxNi43ODU5OTE2IDE5LjYxNjM1MzEsMTQuMjU2ODA4OSAxNi45MzcwNDY0LDE0LjI1NjgwODkgQzE0LjI1NzczOTYsMTQuMjU2ODA4OSAxMy44NzQ5ODE1LDE2LjM5Njg4NjYgMTMuODc0OTgxNSwxOC41MzY5NjQzIEwxMy44NzQ5ODE1LDI2LjgwNTQ0NjUgTDguODAzNDM2NTMsMjYuODA1NDQ2NSBMOC44MDM0MzY1MywxMC4yNjg0ODIyIEw4LjcwNzc0NywxMC4yNjg0ODIyIFpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5saW5rcy5naXRodWIgJiYgKFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3RoaXMucHJvcHMubGlua3MudHdpdHRlcn1gfT5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjUgMjVcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTYwMS4wMDAwMDAsIC00MC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ1MS4wMDAwMDAsIDM4LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNjIuMzQzOTQ5LDIgQzE1NS41NTQ3NzcsMiAxNTAsNy43NjYzNzk3MiAxNTAsMTQuODE0MTc3MSBDMTUwLDIwLjUwMDQ2ODMgMTUzLjU0ODg4NSwyNS4zMDU3ODQ3IDE1OC40MDkzMTUsMjYuOTg3NjQ1NCBDMTU5LjAyNjUxMywyNy4wNjc3MzQgMTU5LjI1Nzk2MiwyNi43NDczNzk2IDE1OS4yNTc5NjIsMjYuMzQ2OTM2NiBDMTU5LjI1Nzk2MiwyNi4wMjY1ODIxIDE1OS4yNTc5NjIsMjUuMjI1Njk2MSAxNTkuMjU3OTYyLDI0LjE4NDU0NDIgQzE1NS43ODYyMjYsMjQuOTg1NDMwMyAxNTUuMDkxODc5LDIyLjUwMjY4MzQgMTU1LjA5MTg3OSwyMi41MDI2ODM0IEMxNTQuNTUxODMxLDIxLjA2MTA4ODUgMTUzLjcwMzE4NSwyMC42NjA2NDU1IDE1My43MDMxODUsMjAuNjYwNjQ1NSBDMTUyLjU0NTkzOSwxOS44NTk3NTk0IDE1My43ODAzMzQsMTkuODU5NzU5NCAxNTMuNzgwMzM0LDE5Ljg1OTc1OTQgQzE1NS4wMTQ3MjksMTkuOTM5ODQ4IDE1NS43MDkwNzYsMjEuMTQxMTc3MSAxNTUuNzA5MDc2LDIxLjE0MTE3NzEgQzE1Ni43ODkxNzIsMjMuMDYzMzAzNyAxNTguNTYzNjE1LDIyLjUwMjY4MzQgMTU5LjMzNTExMSwyMi4xODIzMjkgQzE1OS40MTIyNjEsMjEuMzgxNDQyOSAxNTkuNzk4MDEsMjAuODIwODIyNyAxNjAuMTA2NjA4LDIwLjUwMDQ2ODMgQzE1Ny4zMjkyMiwyMC4xODAxMTM4IDE1NC40NzQ2ODIsMTkuMDU4ODczMyAxNTQuNDc0NjgyLDE0LjE3MzQ2ODMgQzE1NC40NzQ2ODIsMTIuODExOTYyIDE1NC45Mzc1OCwxMS42MTA2MzI5IDE1NS43MDkwNzYsMTAuNzI5NjU4MiBDMTU1LjU1NDc3NywxMC40MDkzMDM4IDE1NS4xNjkwMjksOS4xMjc4ODYwNCAxNTUuODYzMzc2LDcuMzY1OTM2NjggQzE1NS44NjMzNzYsNy4zNjU5MzY2OCAxNTYuODY2MzIyLDcuMDQ1NTgyMjUgMTU5LjI1Nzk2Miw4LjY0NzM1NDM5IEMxNjAuMjYwOTA4LDguMzI2OTk5OTcgMTYxLjI2Mzg1NCw4LjI0NjkxMTM2IDE2Mi4zNDM5NDksOC4yNDY5MTEzNiBDMTYzLjQyNDA0NSw4LjI0NjkxMTM2IDE2NC40MjY5OSw4LjQwNzA4ODU3IDE2NS40Mjk5MzYsOC42NDczNTQzOSBDMTY3LjgyMTU3Niw2Ljk2NTQ5MzY0IDE2OC44MjQ1MjIsNy4yODU4NDgwNyAxNjguODI0NTIyLDcuMjg1ODQ4MDcgQzE2OS41MTg4NjksOS4wNDc3OTc0MyAxNjkuMDU1OTcxLDEwLjMyOTIxNTEgMTY4Ljk3ODgyMiwxMC42NDk1Njk2IEMxNjkuNzUwMzE4LDExLjUzMDU0NDMgMTcwLjIxMzIxNywxMi42NTE3ODQ4IDE3MC4yMTMyMTcsMTQuMDkzMzc5NyBDMTcwLjIxMzIxNywxOC45Nzg3ODQ3IDE2Ny4zNTg2NzgsMjAuMTAwMDI1MiAxNjQuNTgxMjksMjAuNDIwMzc5NiBDMTY1LjA0NDE4OCwyMC44MjA4MjI3IDE2NS40Mjk5MzYsMjEuNjIxNzA4OCAxNjUuNDI5OTM2LDIyLjgyMzAzNzkgQzE2NS40Mjk5MzYsMjQuNTA0ODk4NiAxNjUuNDI5OTM2LDI1Ljk0NjQ5MzUgMTY1LjQyOTkzNiwyNi4zNDY5MzY2IEMxNjUuNDI5OTM2LDI2LjY2NzI5MSAxNjUuNjYxMzg1LDI3LjA2NzczNCAxNjYuMjc4NTgzLDI2Ljk4NzY0NTQgQzE3MS4xMzkwMTMsMjUuMzA1Nzg0NyAxNzQuNjg3ODk4LDIwLjUwMDQ2ODMgMTc0LjY4Nzg5OCwxNC44MTQxNzcxIEMxNzQuNjg3ODk4LDcuNzY2Mzc5NzIgMTY5LjEzMzEyMSwyIDE2Mi4zNDM5NDksMiBaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAub3V0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3Z3O1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Jpem9udGFsLWdyYWRpZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5uZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzLjg3NXJlbSAxLjEyNXJlbSAwLjVyZW0gMS4xMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTJyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEycmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aHVtYm5haWwgaW1nIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlua3MgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpbmtzIGxpOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpbmtzIGxpOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAub3V0ZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMjYlO1xuICAgICAgICAgICAgICBtYXJnaW46IDUuNSUgMyU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/TeamMember.js */",
        __self: this
      }));
    }
  }]);

  return TeamMember;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.f2630aed15f3a78d67b9.hot-update.js.map