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
    key: "componentDidMount",
    value: function componentDidMount() {
      AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-in-out'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "0",
        className: "jsx-1297122274" + " " + "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1297122274" + " " + "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1297122274" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
        className: "jsx-1297122274" + " " + "thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/images/people/".concat(this.props.name.split(' ').join(''), ".png"),
        alt: "".concat(this.props.name, " profile picture"),
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, this.props.name), this.props.position && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-1297122274" + " " + "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, this.props.position), this.props.bio && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.props.bio)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-1297122274" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, this.props.links.twitter && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://twitter.com/".concat(this.props.links.twitter),
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        width: "25px",
        height: "22px",
        viewBox: "0 0 25 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fillRule: "evenodd",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(-1526.000000, -41.000000)",
        fillRule: "nonzero",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(1451.000000, 38.000000)",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "#FFF",
        d: "M99.6878981,5.49085758 C98.7792448,5.91354575 97.8042729,6.20020802 96.7798848,6.32818754 C97.8258547,5.67063028 98.6265184,4.62765222 99.0059946,3.38868169 C98.0248508,3.99762198 96.941849,4.43979081 95.7878896,4.67948773 C94.8638265,3.64459839 93.5494358,3 92.0915566,3 C89.2946391,3 87.0268583,5.38074946 87.0268583,8.31538514 C87.0268583,8.73159386 87.0715951,9.1381046 87.1580029,9.52682864 C82.9495162,9.30491841 79.2177245,7.18817437 76.7200877,3.97170422 C76.2834904,4.75558939 76.0351185,5.66897866 76.0351185,6.64398612 C76.0351185,8.4886784 76.9298949,10.1163306 78.2874894,11.0685965 C77.4574987,11.0394602 76.6768838,10.7997633 75.9934878,10.4013413 L75.9934878,10.4677449 C75.9934878,13.0428352 77.7398367,15.1919765 80.0554202,15.6811107 C79.6311668,15.8009591 79.1837988,15.8673628 78.7209806,15.8673628 C78.3939461,15.8673628 78.0776823,15.8333563 77.7675905,15.7685619 C78.4124217,17.8820874 80.2822103,19.4190275 82.4975494,19.461165 C80.7650774,20.8863877 78.5805982,21.7334156 76.207934,21.7334156 C75.7991308,21.7334156 75.3964592,21.7074979 75,21.6605325 C77.2415599,23.1715972 79.9027341,24.0526316 82.7629044,24.0526316 C92.0792933,24.0526316 97.1717857,15.9515955 97.1717857,8.92597706 L97.1548027,8.23767422 C98.1498234,7.49262334 99.0106337,6.55653486 99.6878981,5.49085758 Z",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }))))))), this.props.links.linkedin && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://linkedin.com/in/".concat(this.props.links.linkedin),
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        width: "25px",
        height: "25px",
        viewBox: "0 0 25 25",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fillRule: "evenodd",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "#FFF",
        d: "M0.38275811,10.2684822 L5.45430307,10.2684822 L5.45430307,27 L0.38275811,27 L0.38275811,10.2684822 Z M2.96637535,2 C4.59309732,2 5.9327507,3.36186765 5.9327507,5.01556408 C5.9327507,6.66926052 4.59309732,8.03112817 2.96637535,8.03112817 C1.33965338,8.03112817 -1.77635684e-13,6.66926052 -1.77635684e-13,5.01556408 C-1.77635684e-13,3.36186765 1.33965338,2 2.96637535,2 Z M8.707747,10.2684822 L13.5879129,10.2684822 L13.5879129,12.5058362 L13.6836024,12.5058362 C14.3534291,11.1439685 16.0758406,9.78210086 18.5637683,9.78210086 C23.7310028,9.78210086 24.6878981,13.2840463 24.6878981,17.7587543 L24.6878981,26.9027228 L19.6163531,26.9027228 L19.6163531,18.7315169 C19.6163531,16.7859916 19.6163531,14.2568089 16.9370464,14.2568089 C14.2577396,14.2568089 13.8749815,16.3968866 13.8749815,18.5369643 L13.8749815,26.8054465 L8.80343653,26.8054465 L8.80343653,10.2684822 L8.707747,10.2684822 Z",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }))))), this.props.links.github && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/".concat(this.props.links.twitter),
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        width: "25px",
        height: "25px",
        viewBox: "0 0 25 25",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fillRule: "evenodd",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(-1601.000000, -40.000000)",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(1451.000000, 38.000000)",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "#FFF",
        d: "M162.343949,2 C155.554777,2 150,7.76637972 150,14.8141771 C150,20.5004683 153.548885,25.3057847 158.409315,26.9876454 C159.026513,27.067734 159.257962,26.7473796 159.257962,26.3469366 C159.257962,26.0265821 159.257962,25.2256961 159.257962,24.1845442 C155.786226,24.9854303 155.091879,22.5026834 155.091879,22.5026834 C154.551831,21.0610885 153.703185,20.6606455 153.703185,20.6606455 C152.545939,19.8597594 153.780334,19.8597594 153.780334,19.8597594 C155.014729,19.939848 155.709076,21.1411771 155.709076,21.1411771 C156.789172,23.0633037 158.563615,22.5026834 159.335111,22.182329 C159.412261,21.3814429 159.79801,20.8208227 160.106608,20.5004683 C157.32922,20.1801138 154.474682,19.0588733 154.474682,14.1734683 C154.474682,12.811962 154.93758,11.6106329 155.709076,10.7296582 C155.554777,10.4093038 155.169029,9.12788604 155.863376,7.36593668 C155.863376,7.36593668 156.866322,7.04558225 159.257962,8.64735439 C160.260908,8.32699997 161.263854,8.24691136 162.343949,8.24691136 C163.424045,8.24691136 164.42699,8.40708857 165.429936,8.64735439 C167.821576,6.96549364 168.824522,7.28584807 168.824522,7.28584807 C169.518869,9.04779743 169.055971,10.3292151 168.978822,10.6495696 C169.750318,11.5305443 170.213217,12.6517848 170.213217,14.0933797 C170.213217,18.9787847 167.358678,20.1000252 164.58129,20.4203796 C165.044188,20.8208227 165.429936,21.6217088 165.429936,22.8230379 C165.429936,24.5048986 165.429936,25.9464935 165.429936,26.3469366 C165.429936,26.667291 165.661385,27.067734 166.278583,26.9876454 C171.139013,25.3057847 174.687898,20.5004683 174.687898,14.8141771 C174.687898,7.76637972 169.133121,2 162.343949,2 Z",
        className: "jsx-1297122274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }))))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1297122274",
        css: ".outer.jsx-1297122274{position:relative;margin-top:5rem;margin-right:3vw;min-width:80vw;min-height:24.28rem;padding:1px;background:var(--horizontal-gradient);}.inner.jsx-1297122274{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;position:relative;padding:5.5rem 1.125rem 0.5rem 1.125rem;background-color:var(--color-tertiary);}.thumbnail.jsx-1297122274{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:12rem;height:12rem;position:absolute;left:50%;top:0;margin:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.thumbnail.jsx-1297122274 img.jsx-1297122274{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;object-fit:cover;-webkit-transform:translateY(-45%);-ms-transform:translateY(-45%);transform:translateY(-45%);}.content.jsx-1297122274{text-align:center;}h4.jsx-1297122274{margin-bottom:0.5rem;}.links.jsx-1297122274{list-style:none;padding:0;margin:0;}.links.jsx-1297122274 li.jsx-1297122274{display:inline-block;margin:1em;}.links.jsx-1297122274 li.jsx-1297122274:first-of-type{margin-left:0;}.links.jsx-1297122274 li.jsx-1297122274:last-of-type{margin-right:0;}.links.jsx-1297122274 li.jsx-1297122274 a.jsx-1297122274 svg.jsx-1297122274 path.jsx-1297122274{-webkit-transition:all 200ms ease;transition:all 200ms ease;}.links.jsx-1297122274 li.jsx-1297122274 a.jsx-1297122274:hover svg.jsx-1297122274 path.jsx-1297122274{fill:var(--color-secondary);}@media (min-width:768px){.outer.jsx-1297122274{width:25.5%;min-height:21.25rem;min-width:27.187rem;margin:5rem 1%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1RlYW1NZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhvQixBQUcrQixBQVVMLEFBV0EsQUFZSSxBQU1DLEFBSUcsQUFJTCxBQU1LLEFBS1AsQUFJQyxBQUlXLEFBSUUsQUFLZCxZQUNRLEVBakJ4QixDQUlBLENBZlksRUEvQ00sQUF1Q2xCLEdBSUEsQUFVYSxLQUxGLEVBc0JYLElBaEJBLEFBc0J3QixFQTNFTCxDQWdEbkIsZ0JBL0NpQixDQTJFRSxRQVhuQixNQS9Ec0IsQ0EyRXBCLE9BcEVzQixBQVdDLFdBWU4sQ0E3QkwsWUFDMEIsSUE2Qlgsa0NBNUI3QixnQkFLZ0MscUJBV2xCLFlBQ0MsVUFZZixHQVhvQixrQkFDVCxTQUNILE1BQ0csU0FDa0IsMkJBaEJSLGtFQWlCckIsMkJBaEJjLFlBQ00sa0JBQ3NCLHdDQUNELHVDQUN6QyIsImZpbGUiOiIvVXNlcnMvZnJhbi9Eb2N1bWVudHMvUHJvamVjdHMvYmFzZW1lbnQvU3luYWRpYS9zeW5hZGlhLXdlYnNpdGUvY29tcG9uZW50cy9UZWFtTWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhbU1lbWJlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQU9TLmluaXQoe1xuICAgICAgb25jZTogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICBlYXNpbmc6ICdlYXNlLWluLW91dCdcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtgc3RhdGljL2ltYWdlcy9wZW9wbGUvJHt0aGlzLnByb3BzLm5hbWVcbiAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAgICAgICAuam9pbignJyl9LnBuZ2B9XG4gICAgICAgICAgICAgICAgYWx0PXtgJHt0aGlzLnByb3BzLm5hbWV9IHByb2ZpbGUgcGljdHVyZWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgIDxoND57dGhpcy5wcm9wcy5uYW1lfTwvaDQ+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5wb3NpdGlvbiAmJiAoXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcmltYXJ5XCI+e3RoaXMucHJvcHMucG9zaXRpb259PC9oNT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5iaW8gJiYgPHA+e3RoaXMucHJvcHMuYmlvfTwvcD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5saW5rcy50d2l0dGVyICYmIChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tLyR7dGhpcy5wcm9wcy5saW5rcy50d2l0dGVyfWB9PlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNSAyMlwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTUyNi4wMDAwMDAsIC00MS4wMDAwMDApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwibm9uemVyb1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0NTEuMDAwMDAwLCAzOC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOTkuNjg3ODk4MSw1LjQ5MDg1NzU4IEM5OC43NzkyNDQ4LDUuOTEzNTQ1NzUgOTcuODA0MjcyOSw2LjIwMDIwODAyIDk2Ljc3OTg4NDgsNi4zMjgxODc1NCBDOTcuODI1ODU0Nyw1LjY3MDYzMDI4IDk4LjYyNjUxODQsNC42Mjc2NTIyMiA5OS4wMDU5OTQ2LDMuMzg4NjgxNjkgQzk4LjAyNDg1MDgsMy45OTc2MjE5OCA5Ni45NDE4NDksNC40Mzk3OTA4MSA5NS43ODc4ODk2LDQuNjc5NDg3NzMgQzk0Ljg2MzgyNjUsMy42NDQ1OTgzOSA5My41NDk0MzU4LDMgOTIuMDkxNTU2NiwzIEM4OS4yOTQ2MzkxLDMgODcuMDI2ODU4Myw1LjM4MDc0OTQ2IDg3LjAyNjg1ODMsOC4zMTUzODUxNCBDODcuMDI2ODU4Myw4LjczMTU5Mzg2IDg3LjA3MTU5NTEsOS4xMzgxMDQ2IDg3LjE1ODAwMjksOS41MjY4Mjg2NCBDODIuOTQ5NTE2Miw5LjMwNDkxODQxIDc5LjIxNzcyNDUsNy4xODgxNzQzNyA3Ni43MjAwODc3LDMuOTcxNzA0MjIgQzc2LjI4MzQ5MDQsNC43NTU1ODkzOSA3Ni4wMzUxMTg1LDUuNjY4OTc4NjYgNzYuMDM1MTE4NSw2LjY0Mzk4NjEyIEM3Ni4wMzUxMTg1LDguNDg4Njc4NCA3Ni45Mjk4OTQ5LDEwLjExNjMzMDYgNzguMjg3NDg5NCwxMS4wNjg1OTY1IEM3Ny40NTc0OTg3LDExLjAzOTQ2MDIgNzYuNjc2ODgzOCwxMC43OTk3NjMzIDc1Ljk5MzQ4NzgsMTAuNDAxMzQxMyBMNzUuOTkzNDg3OCwxMC40Njc3NDQ5IEM3NS45OTM0ODc4LDEzLjA0MjgzNTIgNzcuNzM5ODM2NywxNS4xOTE5NzY1IDgwLjA1NTQyMDIsMTUuNjgxMTEwNyBDNzkuNjMxMTY2OCwxNS44MDA5NTkxIDc5LjE4Mzc5ODgsMTUuODY3MzYyOCA3OC43MjA5ODA2LDE1Ljg2NzM2MjggQzc4LjM5Mzk0NjEsMTUuODY3MzYyOCA3OC4wNzc2ODIzLDE1LjgzMzM1NjMgNzcuNzY3NTkwNSwxNS43Njg1NjE5IEM3OC40MTI0MjE3LDE3Ljg4MjA4NzQgODAuMjgyMjEwMywxOS40MTkwMjc1IDgyLjQ5NzU0OTQsMTkuNDYxMTY1IEM4MC43NjUwNzc0LDIwLjg4NjM4NzcgNzguNTgwNTk4MiwyMS43MzM0MTU2IDc2LjIwNzkzNCwyMS43MzM0MTU2IEM3NS43OTkxMzA4LDIxLjczMzQxNTYgNzUuMzk2NDU5MiwyMS43MDc0OTc5IDc1LDIxLjY2MDUzMjUgQzc3LjI0MTU1OTksMjMuMTcxNTk3MiA3OS45MDI3MzQxLDI0LjA1MjYzMTYgODIuNzYyOTA0NCwyNC4wNTI2MzE2IEM5Mi4wNzkyOTMzLDI0LjA1MjYzMTYgOTcuMTcxNzg1NywxNS45NTE1OTU1IDk3LjE3MTc4NTcsOC45MjU5NzcwNiBMOTcuMTU0ODAyNyw4LjIzNzY3NDIyIEM5OC4xNDk4MjM0LDcuNDkyNjIzMzQgOTkuMDEwNjMzNyw2LjU1NjUzNDg2IDk5LjY4Nzg5ODEsNS40OTA4NTc1OCBaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5saW5rcy5saW5rZWRpbiAmJiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vbGlua2VkaW4uY29tL2luLyR7dGhpcy5wcm9wcy5saW5rcy5saW5rZWRpbn1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjUgMjVcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTAuMzgyNzU4MTEsMTAuMjY4NDgyMiBMNS40NTQzMDMwNywxMC4yNjg0ODIyIEw1LjQ1NDMwMzA3LDI3IEwwLjM4Mjc1ODExLDI3IEwwLjM4Mjc1ODExLDEwLjI2ODQ4MjIgWiBNMi45NjYzNzUzNSwyIEM0LjU5MzA5NzMyLDIgNS45MzI3NTA3LDMuMzYxODY3NjUgNS45MzI3NTA3LDUuMDE1NTY0MDggQzUuOTMyNzUwNyw2LjY2OTI2MDUyIDQuNTkzMDk3MzIsOC4wMzExMjgxNyAyLjk2NjM3NTM1LDguMDMxMTI4MTcgQzEuMzM5NjUzMzgsOC4wMzExMjgxNyAtMS43NzYzNTY4NGUtMTMsNi42NjkyNjA1MiAtMS43NzYzNTY4NGUtMTMsNS4wMTU1NjQwOCBDLTEuNzc2MzU2ODRlLTEzLDMuMzYxODY3NjUgMS4zMzk2NTMzOCwyIDIuOTY2Mzc1MzUsMiBaIE04LjcwNzc0NywxMC4yNjg0ODIyIEwxMy41ODc5MTI5LDEwLjI2ODQ4MjIgTDEzLjU4NzkxMjksMTIuNTA1ODM2MiBMMTMuNjgzNjAyNCwxMi41MDU4MzYyIEMxNC4zNTM0MjkxLDExLjE0Mzk2ODUgMTYuMDc1ODQwNiw5Ljc4MjEwMDg2IDE4LjU2Mzc2ODMsOS43ODIxMDA4NiBDMjMuNzMxMDAyOCw5Ljc4MjEwMDg2IDI0LjY4Nzg5ODEsMTMuMjg0MDQ2MyAyNC42ODc4OTgxLDE3Ljc1ODc1NDMgTDI0LjY4Nzg5ODEsMjYuOTAyNzIyOCBMMTkuNjE2MzUzMSwyNi45MDI3MjI4IEwxOS42MTYzNTMxLDE4LjczMTUxNjkgQzE5LjYxNjM1MzEsMTYuNzg1OTkxNiAxOS42MTYzNTMxLDE0LjI1NjgwODkgMTYuOTM3MDQ2NCwxNC4yNTY4MDg5IEMxNC4yNTc3Mzk2LDE0LjI1NjgwODkgMTMuODc0OTgxNSwxNi4zOTY4ODY2IDEzLjg3NDk4MTUsMTguNTM2OTY0MyBMMTMuODc0OTgxNSwyNi44MDU0NDY1IEw4LjgwMzQzNjUzLDI2LjgwNTQ0NjUgTDguODAzNDM2NTMsMTAuMjY4NDgyMiBMOC43MDc3NDcsMTAuMjY4NDgyMiBaXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMucHJvcHMubGlua3MuZ2l0aHViICYmIChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHt0aGlzLnByb3BzLmxpbmtzLnR3aXR0ZXJ9YH0+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1IDI1XCJcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE2MDEuMDAwMDAwLCAtNDAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0NTEuMDAwMDAwLCAzOC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTYyLjM0Mzk0OSwyIEMxNTUuNTU0Nzc3LDIgMTUwLDcuNzY2Mzc5NzIgMTUwLDE0LjgxNDE3NzEgQzE1MCwyMC41MDA0NjgzIDE1My41NDg4ODUsMjUuMzA1Nzg0NyAxNTguNDA5MzE1LDI2Ljk4NzY0NTQgQzE1OS4wMjY1MTMsMjcuMDY3NzM0IDE1OS4yNTc5NjIsMjYuNzQ3Mzc5NiAxNTkuMjU3OTYyLDI2LjM0NjkzNjYgQzE1OS4yNTc5NjIsMjYuMDI2NTgyMSAxNTkuMjU3OTYyLDI1LjIyNTY5NjEgMTU5LjI1Nzk2MiwyNC4xODQ1NDQyIEMxNTUuNzg2MjI2LDI0Ljk4NTQzMDMgMTU1LjA5MTg3OSwyMi41MDI2ODM0IDE1NS4wOTE4NzksMjIuNTAyNjgzNCBDMTU0LjU1MTgzMSwyMS4wNjEwODg1IDE1My43MDMxODUsMjAuNjYwNjQ1NSAxNTMuNzAzMTg1LDIwLjY2MDY0NTUgQzE1Mi41NDU5MzksMTkuODU5NzU5NCAxNTMuNzgwMzM0LDE5Ljg1OTc1OTQgMTUzLjc4MDMzNCwxOS44NTk3NTk0IEMxNTUuMDE0NzI5LDE5LjkzOTg0OCAxNTUuNzA5MDc2LDIxLjE0MTE3NzEgMTU1LjcwOTA3NiwyMS4xNDExNzcxIEMxNTYuNzg5MTcyLDIzLjA2MzMwMzcgMTU4LjU2MzYxNSwyMi41MDI2ODM0IDE1OS4zMzUxMTEsMjIuMTgyMzI5IEMxNTkuNDEyMjYxLDIxLjM4MTQ0MjkgMTU5Ljc5ODAxLDIwLjgyMDgyMjcgMTYwLjEwNjYwOCwyMC41MDA0NjgzIEMxNTcuMzI5MjIsMjAuMTgwMTEzOCAxNTQuNDc0NjgyLDE5LjA1ODg3MzMgMTU0LjQ3NDY4MiwxNC4xNzM0NjgzIEMxNTQuNDc0NjgyLDEyLjgxMTk2MiAxNTQuOTM3NTgsMTEuNjEwNjMyOSAxNTUuNzA5MDc2LDEwLjcyOTY1ODIgQzE1NS41NTQ3NzcsMTAuNDA5MzAzOCAxNTUuMTY5MDI5LDkuMTI3ODg2MDQgMTU1Ljg2MzM3Niw3LjM2NTkzNjY4IEMxNTUuODYzMzc2LDcuMzY1OTM2NjggMTU2Ljg2NjMyMiw3LjA0NTU4MjI1IDE1OS4yNTc5NjIsOC42NDczNTQzOSBDMTYwLjI2MDkwOCw4LjMyNjk5OTk3IDE2MS4yNjM4NTQsOC4yNDY5MTEzNiAxNjIuMzQzOTQ5LDguMjQ2OTExMzYgQzE2My40MjQwNDUsOC4yNDY5MTEzNiAxNjQuNDI2OTksOC40MDcwODg1NyAxNjUuNDI5OTM2LDguNjQ3MzU0MzkgQzE2Ny44MjE1NzYsNi45NjU0OTM2NCAxNjguODI0NTIyLDcuMjg1ODQ4MDcgMTY4LjgyNDUyMiw3LjI4NTg0ODA3IEMxNjkuNTE4ODY5LDkuMDQ3Nzk3NDMgMTY5LjA1NTk3MSwxMC4zMjkyMTUxIDE2OC45Nzg4MjIsMTAuNjQ5NTY5NiBDMTY5Ljc1MDMxOCwxMS41MzA1NDQzIDE3MC4yMTMyMTcsMTIuNjUxNzg0OCAxNzAuMjEzMjE3LDE0LjA5MzM3OTcgQzE3MC4yMTMyMTcsMTguOTc4Nzg0NyAxNjcuMzU4Njc4LDIwLjEwMDAyNTIgMTY0LjU4MTI5LDIwLjQyMDM3OTYgQzE2NS4wNDQxODgsMjAuODIwODIyNyAxNjUuNDI5OTM2LDIxLjYyMTcwODggMTY1LjQyOTkzNiwyMi44MjMwMzc5IEMxNjUuNDI5OTM2LDI0LjUwNDg5ODYgMTY1LjQyOTkzNiwyNS45NDY0OTM1IDE2NS40Mjk5MzYsMjYuMzQ2OTM2NiBDMTY1LjQyOTkzNiwyNi42NjcyOTEgMTY1LjY2MTM4NSwyNy4wNjc3MzQgMTY2LjI3ODU4MywyNi45ODc2NDU0IEMxNzEuMTM5MDEzLDI1LjMwNTc4NDcgMTc0LjY4Nzg5OCwyMC41MDA0NjgzIDE3NC42ODc4OTgsMTQuODE0MTc3MSBDMTc0LjY4Nzg5OCw3Ljc2NjM3OTcyIDE2OS4xMzMxMjEsMiAxNjIuMzQzOTQ5LDIgWlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm91dGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDN2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogODB2dztcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0LjI4cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taG9yaXpvbnRhbC1ncmFkaWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlubmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUuNXJlbSAxLjEyNXJlbSAwLjVyZW0gMS4xMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTJyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEycmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aHVtYm5haWwgaW1nIHtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1JSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpbmtzIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saW5rcyBsaTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saW5rcyBsaTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saW5rcyBsaSBhIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saW5rcyBsaSBhOmhvdmVyIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAub3V0ZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMjUuNSU7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIxLjI1cmVtO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDI3LjE4N3JlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDElO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/TeamMember.js */",
        __self: this
      }));
    }
  }]);

  return TeamMember;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.f2b4f6c340ae9dbbfd53.hot-update.js.map