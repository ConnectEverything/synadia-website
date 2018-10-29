webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/bezier-easing/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/bezier-easing/src/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),

/***/ "./node_modules/react-plx/lib/Plx.js":
/*!*******************************************!*\
  !*** ./node_modules/react-plx/lib/Plx.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bezierEasing = __webpack_require__(/*! bezier-easing */ "./node_modules/bezier-easing/src/index.js");

var _bezierEasing2 = _interopRequireDefault(_bezierEasing);

var _windowScrollManager = __webpack_require__(/*! window-scroll-manager */ "./node_modules/window-scroll-manager/index.js");

var _windowScrollManager2 = _interopRequireDefault(_windowScrollManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Check if code is running in the browser (important for universal rendering)
var WINDOW_EXISTS = typeof window !== 'undefined';

// Regex that checks for numbers in string
// formatted as "{number}{unit}" where unit is "px", "vh", "%" or none
var START_END_DURATION_REGEX = /^-?\d+(\.\d+)?(px|vh|%)?$/;

var DEFAULT_UNIT = 'px';
var DEFAULT_ANGLE_UNIT = 'deg';
var ANGLE_PROPERTIES = ['rotate', 'rotateX', 'rotateY', 'rotateZ', 'skew', 'skewX', 'skewY', 'skewZ', 'hueRotate'];

var EASINGS = {
  ease: [0.25, 0.1, 0.25, 1.0],
  easeIn: [0.42, 0.0, 1.00, 1.0],
  easeOut: [0.00, 0.0, 0.58, 1.0],
  easeInOut: [0.42, 0.0, 0.58, 1.0],
  easeInSine: [0.47, 0, 0.745, 0.715],
  easeOutSine: [0.39, 0.575, 0.565, 1],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeInOutExpo: [1, 0, 0, 1],
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  easeOutCirc: [0.075, 0.82, 0.165, 1],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86]
};

// Color regexs

// 0 - 199 | 200 - 249 | 250 - 255
var REGEX_0_255 = '(1?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])';
// 0.0 - 1.9999...
var REGEX_0_1 = '([01](\\.\\d+)?)';
// 00 - FF
var REGEX_TWO_HEX_DIGITS = '([a-f\\d]{2})';

var HEX_REGEX = new RegExp('^#' + REGEX_TWO_HEX_DIGITS + REGEX_TWO_HEX_DIGITS + REGEX_TWO_HEX_DIGITS + '$', 'i');
var RGB_REGEX = new RegExp('^rgb\\(' + REGEX_0_255 + ',' + REGEX_0_255 + ',' + REGEX_0_255 + '\\)$', 'i');
var RGBA_REGEX = new RegExp('^rgba\\(' + REGEX_0_255 + ',' + REGEX_0_255 + ',' + REGEX_0_255 + ',' + REGEX_0_1 + '\\)$', 'i');

var SCROLL_OFFSET = 50;

var RESIZE_DEBOUNCE_TIMEOUT = 150;

// CSS transform map
var TRANSFORM_MAP = {
  rotate: function rotate(value, unit) {
    return 'rotate(' + value + unit + ')';
  },
  rotateX: function rotateX(value, unit) {
    return 'rotateX(' + value + unit + ')';
  },
  rotateY: function rotateY(value, unit) {
    return 'rotateY(' + value + unit + ')';
  },
  rotateZ: function rotateZ(value, unit) {
    return 'rotateZ(' + value + unit + ')';
  },
  scale: function scale(value) {
    return 'scale(' + value + ')';
  },
  scaleX: function scaleX(value) {
    return 'scaleX(' + value + ')';
  },
  scaleY: function scaleY(value) {
    return 'scaleY(' + value + ')';
  },
  scaleZ: function scaleZ(value) {
    return 'scaleZ(' + value + ')';
  },
  skew: function skew(value, unit) {
    return 'skew(' + value + unit + ')';
  },
  skewX: function skewX(value, unit) {
    return 'skewX(' + value + unit + ')';
  },
  skewY: function skewY(value, unit) {
    return 'skewY(' + value + unit + ')';
  },
  skewZ: function skewZ(value, unit) {
    return 'skewZ(' + value + unit + ')';
  },
  translateX: function translateX(value, unit) {
    return 'translateX(' + value + unit + ')';
  },
  translateY: function translateY(value, unit) {
    return 'translateY(' + value + unit + ')';
  },
  translateZ: function translateZ(value, unit) {
    return 'translateZ(' + value + unit + ')';
  }
};

// Order of CSS transforms matters
var ORDER_OF_TRANSFORMS = ['translateX', 'translateY', 'translateZ', 'skew', 'skewX', 'skewY', 'skewZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ'];

// CSS properties that use color values
var COLOR_PROPERTIES = ['backgroundColor', 'borderBottomColor', 'borderColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'fill', 'strokeColor'];

// CSS filter map
// blur()
// brightness()
// contrast()
// grayscale()
// hue-rotate()
// invert()
// opacity() // use opacityFilter
// saturate()
// sepia()

// Not supported
// drop-shadow()
// url()
var FILTER_MAP = {
  blur: function blur(value, unit) {
    return 'blur(' + value + unit + ')';
  },
  brightness: function brightness(value) {
    return 'brightness(' + value + ')';
  },
  contrast: function contrast(value) {
    return 'contrast(' + value + ')';
  },
  grayscale: function grayscale(value) {
    return 'grayscale(' + value + ')';
  },
  hueRotate: function hueRotate(value, unit) {
    return 'hue-rotate(' + value + unit + ')';
  },
  invert: function invert(value) {
    return 'invert(' + value + ')';
  },
  opacityFilter: function opacityFilter(value) {
    return 'opacity(' + value + ')';
  },
  saturate: function saturate(value) {
    return 'saturate(' + value + ')';
  },
  sepia: function sepia(value) {
    return 'sepia(' + value + ')';
  }
};

var FILTER_PROPERTIES = ['blur', 'brightness', 'contrast', 'grayscale', 'hueRotate', 'invert', 'opacityFilter', 'saturate', 'sepia'];

// Props to be removed from passing directly to the component element
var PROPS_TO_OMIT = ['animateWhenNotInViewport', 'children', 'className', 'freeze', 'parallaxData', 'style', 'tagName'];

// Get element's top offset
function getElementTop(el) {
  var top = 0;
  var element = el;

  do {
    top += element.offsetTop || 0;
    element = element.offsetParent;
  } while (element);

  return top;
}

// Returns CSS unit
function getUnit(property, unit) {
  var propertyUnit = unit || DEFAULT_UNIT;

  if (ANGLE_PROPERTIES.indexOf(property) >= 0) {
    propertyUnit = unit || DEFAULT_ANGLE_UNIT;
  }

  return propertyUnit;
}

// Takes string value (in px/vh/%) and returns number
function getValueInPx(value, maxScroll) {
  var floatValue = parseFloat(value);
  var unit = value.match(START_END_DURATION_REGEX)[2] || null;
  var vh = window.innerHeight / 100;
  var valueInPx = value;

  switch (unit) {
    case 'vh':
      valueInPx = vh * floatValue;
      break;
    case '%':
      valueInPx = maxScroll * floatValue / 100;
      break;
    default:
      valueInPx = floatValue;
  }

  return valueInPx;
}

// Takes start/end/duration props
// and return number (in pixels) based on prop type (number, string, dom element)
function convertPropToPixels(propName, propValue, maxScroll) {
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var propValueInPx = propValue;
  var isElement = propValue instanceof HTMLElement;
  var keyCodes = {
    ZERO: 48,
    NINE: 57
  };

  if (typeof propValue === 'number') {
    propValueInPx = propValue;
  } else if (START_END_DURATION_REGEX.test(propValue)) {
    propValueInPx = getValueInPx(propValue, maxScroll);
  } else if (isElement || typeof propValue === 'string' && (propValue.charCodeAt(0) < keyCodes.ZERO || propValue.charCodeAt(0) > keyCodes.NINE)) {
    var element = isElement ? propValue : document.querySelector(propValue);

    if (!element) {
      console.warn('Plx, ERROR: ' + propName + ' selector matches no elements: "' + propValue + '"'); // eslint-disable-line
      return null;
    }

    if (propName === 'start' || propName === 'end') {
      // START or END
      // Element enters the viewport
      propValueInPx = getElementTop(element) - window.innerHeight;
    } else if (propName === 'duration') {
      // DURATION
      // Height of the element
      propValueInPx = element.offsetHeight;
    }
  } else {
    console.warn('Plx, ERROR: "' + propValue + '" is not a valid ' + propName + ' value, check documenation'); // eslint-disable-line
    return null;
  }

  // Transform offset to px
  var offsetInPx = 0;

  if (typeof offset === 'number') {
    offsetInPx = offset;
  } else if (START_END_DURATION_REGEX.test(offset)) {
    offsetInPx = getValueInPx(offset, maxScroll);
  }
  // Add offset
  propValueInPx += offsetInPx;

  if (propValueInPx < 0) {
    propValueInPx = 0;
  }

  return propValueInPx;
}

// Convers color in hex format into object { r, g, b, a }
function hexToObject(hex) {
  // Convert #abc to #aabbcc
  var color = hex.length === 4 ? '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3] : hex;
  var result = HEX_REGEX.exec(color);

  // Safety check, if color is in the wrong format
  if (!result) {
    console.warn('Plx, ERROR: hex color is not in the right format: "' + hex + '"'); // eslint-disable-line no-console
    return null;
  }

  // All color functions are returning { r, g, b, a } object
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: 1
  };
}

// Convers color in rgb format into object { r, g, b, a }
function rgbToObject(rgb) {
  var isRgba = rgb.toLowerCase().indexOf('rgba') === 0;
  var color = rgb.replace(/ /g, '');
  var result = isRgba ? RGBA_REGEX.exec(color) : RGB_REGEX.exec(color);

  // Safety check, if color is in the wrong format
  if (!result) {
    console.warn('Plx, ERROR: rgb or rgba color is not in the right format: "' + rgb + '"'); // eslint-disable-line
    return null;
  }

  // All color functions are returning { r, g, b, a } object
  return {
    r: parseInt(result[1], 10),
    g: parseInt(result[2], 10),
    b: parseInt(result[3], 10),
    a: isRgba ? parseFloat(result[4]) : 1
  };
}

// Calculates the current value for parallaxing property
function parallax(scrollPosition, start, duration, startValue, endValue, easing) {
  var min = startValue;
  var max = endValue;
  var invert = startValue > endValue;

  // Safety check, if "startValue" is in the wrong format
  if (typeof startValue !== 'number') {
    console.warn('Plx, ERROR: startValue is not a number (type: "' + (typeof endValue === 'undefined' ? 'undefined' : _typeof(endValue)) + '", value: "' + endValue + '")'); // eslint-disable-line
    return null;
  }

  // Safety check, if "endValue" is in the wrong format
  if (typeof endValue !== 'number') {
    console.warn('Plx, ERROR: endValue is not a number (type: "' + (typeof endValue === 'undefined' ? 'undefined' : _typeof(endValue)) + '", value: "' + endValue + '")'); // eslint-disable-line
    return null;
  }

  // Safety check, if "duration" is in the wrong format
  if (typeof duration !== 'number' || duration === 0) {
    console.warn('Plx, ERROR: duration is zero or not a number (type: "' + (typeof duration === 'undefined' ? 'undefined' : _typeof(duration)) + '", value: "' + duration + '")'); // eslint-disable-line
    return null;
  }

  if (invert) {
    min = endValue;
    max = startValue;
  }

  var percentage = (scrollPosition - start) / duration;

  if (percentage > 1) {
    percentage = 1;
  } else if (percentage < 0) {
    percentage = 0;
  }

  // Apply easing
  if (easing) {
    var easingPropType = typeof easing === 'undefined' ? 'undefined' : _typeof(easing);
    if (easingPropType === 'object' && easing.length === 4) {
      percentage = (0, _bezierEasing2.default)(easing[0], easing[1], easing[2], easing[3])(percentage);
    } else if (easingPropType === 'string' && EASINGS[easing]) {
      percentage = (0, _bezierEasing2.default)(EASINGS[easing][0], EASINGS[easing][1], EASINGS[easing][2], EASINGS[easing][3])(percentage);
    } else if (easingPropType === 'function') {
      percentage = easing(percentage);
    }
  }

  var value = percentage * (max - min);

  if (invert) {
    value = max - value;
  } else {
    value += min;
  }

  return parseFloat(value.toFixed(3));
}

// Calculates current value for color parallax
function colorParallax(scrollPosition, start, duration, startValue, endValue, easing) {
  var startObject = null;
  var endObject = null;

  if (startValue[0].toLowerCase() === 'r') {
    startObject = rgbToObject(startValue);
  } else {
    startObject = hexToObject(startValue);
  }

  if (endValue[0].toLowerCase() === 'r') {
    endObject = rgbToObject(endValue);
  } else {
    endObject = hexToObject(endValue);
  }

  if (startObject && endObject) {
    var r = parallax(scrollPosition, start, duration, startObject.r, endObject.r, easing);
    var g = parallax(scrollPosition, start, duration, startObject.g, endObject.g, easing);
    var b = parallax(scrollPosition, start, duration, startObject.b, endObject.b, easing);
    var a = parallax(scrollPosition, start, duration, startObject.a, endObject.a, easing);

    return 'rgba(' + parseInt(r, 10) + ', ' + parseInt(g, 10) + ', ' + parseInt(b, 10) + ', ' + a + ')';
  }

  return null;
}

// Applies property parallax to the style object
function applyProperty(scrollPosition, propertyData, startPosition, duration, style, easing) {
  var startValue = propertyData.startValue,
      endValue = propertyData.endValue,
      property = propertyData.property,
      unit = propertyData.unit;

  // If property is one of the color properties
  // Use it's parallax method

  var isColor = COLOR_PROPERTIES.indexOf(property) > -1;
  var parallaxMethod = isColor ? colorParallax : parallax;

  // Get new CSS value
  var value = parallaxMethod(scrollPosition, startPosition, duration, startValue, endValue, easing);

  // Get transform function
  var transformMethod = TRANSFORM_MAP[property];
  var filterMethod = FILTER_MAP[property];
  var newStyle = style;

  if (transformMethod) {
    // Get CSS unit
    var propertyUnit = getUnit(property, unit);
    // Transforms, apply value to transform function
    newStyle.transform[property] = transformMethod(value, propertyUnit);
  } else if (filterMethod) {
    // Get CSS unit
    var _propertyUnit = getUnit(property, unit);
    // Filters, apply value to filter function
    newStyle.filter[property] = filterMethod(value, _propertyUnit);
  } else {
    // All other properties
    newStyle[property] = value;

    // Add unit if it is passed
    if (unit) {
      newStyle[property] += unit;
    }
  }

  return newStyle;
}

// Returns CSS classes based on animation state
function getClasses(lastSegmentScrolledBy, isInSegment, parallaxData) {
  var cssClasses = null;

  if (lastSegmentScrolledBy === null) {
    cssClasses = 'Plx--above';
  } else if (lastSegmentScrolledBy === parallaxData.length - 1 && !isInSegment) {
    cssClasses = 'Plx--below';
  } else if (lastSegmentScrolledBy !== null && isInSegment) {
    var segmentName = parallaxData[lastSegmentScrolledBy].name || lastSegmentScrolledBy;

    cssClasses = 'Plx--active Plx--in Plx--in-' + segmentName;
  } else if (lastSegmentScrolledBy !== null && !isInSegment) {
    var _segmentName = parallaxData[lastSegmentScrolledBy].name || lastSegmentScrolledBy;
    var nextSegmentName = parallaxData[lastSegmentScrolledBy + 1].name || lastSegmentScrolledBy + 1;

    cssClasses = 'Plx--active Plx--between Plx--between-' + _segmentName + '-and-' + nextSegmentName;
  }

  return cssClasses;
}

// Omits "keysToOmit" from "object"
function omit(object, keysToOmit) {
  var result = {};

  Object.keys(object).forEach(function (key) {
    if (keysToOmit.indexOf(key) === -1) {
      result[key] = object[key];
    }
  });

  return result;
}

// Main update function
// Returns new state object based on props and scroll position
function getNewState(scrollPosition, props, state, element) {
  var animateWhenNotInViewport = props.animateWhenNotInViewport,
      disabled = props.disabled,
      freeze = props.freeze,
      parallaxData = props.parallaxData;
  var showElement = state.showElement,
      plxStyle = state.plxStyle,
      plxStateClasses = state.plxStateClasses;

  // Do nothing if animation is disabled, frozen
  // or if element is not rendered yet

  if (freeze && showElement || !element || disabled) {
    return null;
  }

  // Check if element is in viewport
  // Small offset is added to prevent page jumping
  if (!animateWhenNotInViewport) {
    var rect = element.getBoundingClientRect();
    var isTopAboveBottomEdge = rect.top < window.innerHeight + SCROLL_OFFSET;
    var isBottomBelowTopEdge = rect.top + rect.height > -SCROLL_OFFSET;

    if (!isTopAboveBottomEdge || !isBottomBelowTopEdge) {
      return null;
    }
  }

  var newState = {};

  // Style to be applied to our element
  var newStyle = {
    transform: {},
    filter: {}
  };

  // This means "componentDidMount" did happen and that we should show our element
  if (!showElement) {
    newState.showElement = true;
  }

  var appliedProperties = [];
  var segments = [];
  var isInSegment = false;
  var lastSegmentScrolledBy = null;
  var maxScroll = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;

  var _loop = function _loop(i) {
    var _parallaxData$i = parallaxData[i],
        duration = _parallaxData$i.duration,
        easing = _parallaxData$i.easing,
        endOffset = _parallaxData$i.endOffset,
        properties = _parallaxData$i.properties,
        startOffset = _parallaxData$i.startOffset;


    var start = parallaxData[i].start === 'self' ? element : parallaxData[i].start;
    var end = parallaxData[i].end === 'self' ? element : parallaxData[i].end;

    var startInPx = convertPropToPixels('start', start, maxScroll, startOffset);
    var durationInPx = null;
    var endInPx = null;

    // End has higher priority than duration
    if (typeof end !== 'undefined') {
      endInPx = convertPropToPixels('end', end, maxScroll, endOffset);
      durationInPx = endInPx - startInPx;
    } else {
      durationInPx = convertPropToPixels('duration', duration, maxScroll);
      endInPx = startInPx + durationInPx;
    }

    // If segment is below scroll position skip it
    if (scrollPosition < startInPx) {
      return 'break';
    }

    var isScrolledByStart = scrollPosition >= startInPx;

    if (isScrolledByStart) {
      lastSegmentScrolledBy = i;
    }

    // If active segment exists, apply his properties
    if (scrollPosition >= startInPx && scrollPosition <= endInPx) {
      isInSegment = true;

      properties.forEach(function (propertyData) {
        // eslint-disable-line no-loop-func
        var property = propertyData.property;

        // Save which properties are applied to the active segment
        // So they are not re-applied for other segments

        appliedProperties.push(property);

        // Apply property style
        newStyle = applyProperty(scrollPosition, propertyData, startInPx, durationInPx, newStyle, easing);
      });
    } else {
      // Push non active segments above the scroll position to separate array
      // This way "durationInPx" and "startInPx" are not calculated again
      // and segments below scroll position are skipped in the next step
      segments.push({
        easing: easing,
        durationInPx: durationInPx,
        properties: properties,
        startInPx: startInPx
      });
    }
  };

  for (var i = 0; i < parallaxData.length; i++) {
    var _ret = _loop(i);

    if (_ret === 'break') break;
  }

  // These are only segments that are completly above scroll position
  segments.forEach(function (data) {
    var easing = data.easing,
        durationInPx = data.durationInPx,
        properties = data.properties,
        startInPx = data.startInPx;


    properties.forEach(function (propertyData) {
      var property = propertyData.property;

      // Skip propery that was changed for active segment

      if (appliedProperties.indexOf(property) > -1) {
        return;
      }

      // These styles that are the ones changed by segments
      // that are above active segment
      newStyle = applyProperty(scrollPosition, propertyData, startInPx, durationInPx, newStyle, easing);
    });
  });

  // Sort transforms by ORDER_OF_TRANSFORMS
  // as order of CSS transforms matters
  var transformsOrdered = [];

  ORDER_OF_TRANSFORMS.forEach(function (transformKey) {
    if (newStyle.transform[transformKey]) {
      transformsOrdered.push(newStyle.transform[transformKey]);
    }
  });

  // Concat transforms and add browser prefixes
  newStyle.transform = transformsOrdered.join(' ');
  newStyle.WebkitTransform = newStyle.transform;
  newStyle.MozTransform = newStyle.transform;
  newStyle.OTransform = newStyle.transform;
  newStyle.msTransform = newStyle.transform;

  var filtersArray = [];
  FILTER_PROPERTIES.forEach(function (filterKey) {
    if (newStyle.filter[filterKey]) {
      filtersArray.push(newStyle.filter[filterKey]);
    }
  });

  // Concat filters and add browser prefixes
  newStyle.filter = filtersArray.join(' ');
  newStyle.WebkitFilter = newStyle.filter;
  newStyle.MozFilter = newStyle.filter;
  newStyle.OFilter = newStyle.filter;
  newStyle.msFilter = newStyle.filter;

  // "Stupid" check if style should be updated
  if (JSON.stringify(plxStyle) !== JSON.stringify(newStyle)) {
    newState.plxStyle = newStyle;
  }

  // Adding state class
  var newPlxStateClasses = getClasses(lastSegmentScrolledBy, isInSegment, parallaxData);

  if (newPlxStateClasses !== plxStateClasses) {
    newState.plxStateClasses = newPlxStateClasses;
  }

  if (Object.keys(newState).length) {
    return newState;
  }

  return null;
}

var Plx = function (_Component) {
  _inherits(Plx, _Component);

  function Plx(props) {
    _classCallCheck(this, Plx);

    // Binding handlers
    var _this = _possibleConstructorReturn(this, (Plx.__proto__ || Object.getPrototypeOf(Plx)).call(this, props));

    _this.handleScrollChange = _this.handleScrollChange.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);

    _this.state = {
      element: null,
      showElement: false,
      plxStateClasses: '',
      plxStyle: {}
    };
    return _this;
  }

  _createClass(Plx, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Get scroll manager singleton
      this.scrollManager = new _windowScrollManager2.default();
      // Add listeners
      window.addEventListener('window-scroll', this.handleScrollChange);
      window.addEventListener('resize', this.handleResize);

      this.update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.update();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var scrollManager = this.state.scrollManager;


      window.removeEventListener('window-scroll', this.handleScrollChange);
      window.removeEventListener('resize', this.handleResize);

      clearTimeout(this.resizeDebounceTimeoutID);
      this.resizeDebounceTimeoutID = null;

      if (scrollManager) {
        scrollManager.removeListener();
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var _this2 = this;

      var scrollPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var currentScrollPosition = scrollPosition === null ? this.scrollManager.getScrollPosition().scrollPositionY : scrollPosition;

      var newState = getNewState(currentScrollPosition, this.props, this.state, this.element);

      if (newState) {
        // TODO add real tests if requestAnimationFrame is more performant in this case
        // as window-scroll-manager already uses to fire scroll change events
        requestAnimationFrame(function () {
          return _this2.setState(newState);
        });
      }
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      var _this3 = this;

      clearTimeout(this.resizeDebounceTimeoutID);
      this.resizeDebounceTimeoutID = setTimeout(function () {
        _this3.update();
      }, RESIZE_DEBOUNCE_TIMEOUT);
    }
  }, {
    key: 'handleScrollChange',
    value: function handleScrollChange(e) {
      this.update(e.detail.scrollPositionY);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          style = _props.style,
          tagName = _props.tagName;
      var _state = this.state,
          showElement = _state.showElement,
          plxStyle = _state.plxStyle,
          plxStateClasses = _state.plxStateClasses;


      var Tag = tagName;

      var elementStyle = style;

      if (!disabled) {
        elementStyle = _extends({}, style, plxStyle, {
          // Hide element before until it is rendered
          // This prevents jumps if page is scrolled and then refreshed
          visibility: showElement ? null : 'hidden'
        });
      }

      return _react2.default.createElement(
        Tag,
        _extends({}, omit(this.props, PROPS_TO_OMIT), {
          className: 'Plx ' + plxStateClasses + ' ' + className,
          style: elementStyle,
          ref: function ref(el) {
            return _this4.element = el;
          }
        }),
        children
      );
    }
  }]);

  return Plx;
}(_react.Component);

exports.default = Plx;


var propertiesItemType = _propTypes2.default.shape({
  startValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  endValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  property: _propTypes2.default.string.isRequired,
  unit: _propTypes2.default.string
});

// Check for the universal rendering
// HTMLElement in the proptypes breaks on server
// https://github.com/Stanko/react-plx/issues/25
var SafeHTMLElement = WINDOW_EXISTS ? window.HTMLElement : {};

var parallaxDataType = _propTypes2.default.shape({
  start: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.instanceOf(SafeHTMLElement)]).isRequired,
  startOffset: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  duration: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.instanceOf(SafeHTMLElement)]),
  end: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.instanceOf(SafeHTMLElement)]),
  endOffset: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  properties: _propTypes2.default.arrayOf(propertiesItemType).isRequired,
  easing: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.func]),
  name: _propTypes2.default.string
});

Plx.propTypes = {
  animateWhenNotInViewport: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  freeze: _propTypes2.default.bool,
  parallaxData: _propTypes2.default.arrayOf(parallaxDataType),
  style: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object])),
  tagName: _propTypes2.default.string
};

Plx.defaultProps = {
  animateWhenNotInViewport: false,
  children: null,
  className: '',
  disabled: false,
  freeze: false,
  parallaxData: [],
  style: {},
  tagName: 'div'
};

/***/ }),

/***/ "./node_modules/react-plx/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-plx/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollManager = undefined;

var _windowScrollManager = __webpack_require__(/*! window-scroll-manager */ "./node_modules/window-scroll-manager/index.js");

var _windowScrollManager2 = _interopRequireDefault(_windowScrollManager);

var _Plx = __webpack_require__(/*! ./Plx */ "./node_modules/react-plx/lib/Plx.js");

var _Plx2 = _interopRequireDefault(_Plx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Plx2.default;
exports.ScrollManager = _windowScrollManager2.default;

/***/ }),

/***/ "./node_modules/window-scroll-manager/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/window-scroll-manager/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function() {
  var instance = null;
  var instancesCount = 0;
  var ticking = false;

  var EVENT_NAME = 'window-scroll';

  // ------------------------------------------------
  // Passive events support detection
  // ------------------------------------------------
  function detectPassiveEvents() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function() { passive = true; }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafrex/detect-passive-events/pull/3
      var noop = function() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);

      return passive;
    }

    return false;
  }

  var supportsPassiveEvents = detectPassiveEvents();

  // ------------------------------------------------
  // CustomEvent polyfill
  // ------------------------------------------------
  if (typeof window !== 'undefined' && typeof window.CustomEvent !== 'function') {
    var CustomEventPollyfill = function(event, userParams) {
      var params = {
        bubbles: userParams.bubbles || false,
        cancelable: userParams.cancelable || false,
        detail: userParams.detail || undefined // eslint-disable-line no-undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    CustomEventPollyfill.prototype = window.Event.prototype;

    window.CustomEvent = CustomEventPollyfill;
  }

  // ------------------------------------------------
  // Scroll manager
  // ------------------------------------------------
  function ScrollManager() {
    if (typeof window === 'undefined') {
      // Silently return null if it is used on server
      return null;
    }

    // Increase reference count
    instancesCount++;

    // If singleton instance exists, return it rather than creating a new one
    if (instance) {
      return instance;
    }

    // Save singleton instance
    instance = this;

    // Bind handlers
    this.handleScroll = this.handleScroll.bind(this);

    // Use passive listener when supported with fallback to capture option
    this.eventListenerOptions = supportsPassiveEvents ? { passive: true } : true;

    // Add scroll listener
    window.addEventListener('scroll', this.handleScroll, this.eventListenerOptions);
  }

  ScrollManager.prototype.removeListener = function() {
    instancesCount--;

    // There is not components listening to our event
    if (instancesCount === 0) {
      this.destroy();
    }
  };

  ScrollManager.prototype.destroy = function() {
    // Remove event listener
    window.removeEventListener('scroll', this.handleScroll, this.eventListenerOptions);

    // Clear singleton instance and count
    instance = null;
    instancesCount = 0;
  };

  ScrollManager.prototype.getScrollPosition = function() {
    // Get scroll position, with IE fallback
    var scrollPositionY = window.scrollY || document.documentElement.scrollTop;
    var scrollPositionX = window.scrollX || document.documentElement.scrollLeft;

    // Disable overscrolling in safari
    if (scrollPositionY < 0) {
      scrollPositionY = 0;
    }
    if (scrollPositionX < 0) {
      scrollPositionX = 0;
    }

    return {
      scrollPositionY: scrollPositionY,
      // Alias for scrollPositionY for backwards compatibility
      scrollPosition: scrollPositionY,
      scrollPositionX: scrollPositionX
    };
  };

  ScrollManager.prototype.handleScroll = function() {
    // Fire the event only once per requestAnimationFrame
    if (!ticking) {
      ticking = true;
      var self = this;

      window.requestAnimationFrame(function() {
        var event = new CustomEvent(EVENT_NAME, {
          detail: self.getScrollPosition()
        });

        // Dispatch the event.
        window.dispatchEvent(event);
        ticking = false;
      });
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    ScrollManager.default = ScrollManager;
    module.exports = ScrollManager;
  } else if (true) { // eslint-disable-line no-undef
    // register as 'window-scroll-manager', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() { // eslint-disable-line no-undef
      return ScrollManager;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}).call(this);


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Particles_ParticleWave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Particles/ParticleWave */ "./components/Particles/ParticleWave.js");
/* harmony import */ var _components_Team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Team */ "./components/Team.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/fran/Documents/Projects/basement/Synadia/synadia-website/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
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
        name: 'David Kemper',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          linkedin: 'david-kemper-531bb038',
          github: 'davidkemper'
        }
      }]
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      aos__WEBPACK_IMPORTED_MODULE_2___default.a.init({
        once: true,
        duration: 800,
        easing: 'ease-in-out'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var foregroundParallax = [{
        start: 'self',
        startOffset: 0,
        duration: 1000,
        easing: 'easeInOut',
        properties: [{
          startValue: 100,
          endValue: -50,
          property: 'translateY'
        }]
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-843018561" + " " + "first-fold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Particles_ParticleWave__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-843018561" + " " + "word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "0",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "C"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "50",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "100",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "150",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "200",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "e"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "250",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "c"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "300",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "t")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-843018561" + " " + "word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "350",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "E"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "400",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "v"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "450",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "e"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "500",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "r"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "550",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "y"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "600",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "t"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "650",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "700",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "i"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "750",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "800",
        className: "jsx-843018561" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "g")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "850",
        className: "jsx-843018561" + " " + "freckle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "about",
        className: "jsx-843018561" + " " + "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "At Synadia, we believe there is an opportunity ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), "to create the first decentralized,", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-843018561" + " " + "highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "secure global utility, powered by NATSio,"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), "to connect all digital systems, services and devices."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "This offering will be decentralized by design, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), "secure by default, globally available, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), "and easy to use and manage.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "team",
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "Meet the Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-843018561",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "With 100+ years of combined experience in engineering and messaging, the good people of Synadia provide a wealth of knowledge aimed at challenging how the world connects."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Team__WEBPACK_IMPORTED_MODULE_6__["default"], {
        members: this.state.team,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "843018561",
        css: ".first-fold.jsx-843018561{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:calc(100vh - 200px);width:100vw;margin:100px auto 0 auto;}h1.jsx-843018561 .freckle.jsx-843018561{display:inline-block;position:relative;}h1.jsx-843018561 .freckle.jsx-843018561:after{position:absolute;right:0;bottom:0;height:1.2rem;width:1.2rem;border-radius:100%;background:var(--horizontal-gradient);-webkit-transform:translate(-15%,-65%);-ms-transform:translate(-15%,-65%);transform:translate(-15%,-65%);}.about.jsx-843018561{margin-bottom:12rem;}.word.jsx-843018561{display:inline-block;}.letter.jsx-843018561{display:inline-block;}.highlight.jsx-843018561{color:var(--color-secondary);}@media (min-width:768px){.first-fold.jsx-843018561{height:calc(100vh - 100px);}.freckle.jsx-843018561:after{content:'';}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Tm9CLEFBRzBCLEFBVVEsQUFLSCxBQVdFLEFBSUMsQUFJQSxBQUlRLEFBS0EsQUFHaEIsV0FDYixPQS9CUSxFQVdWLENBaEJvQixBQW9CcEIsQUFJQSxLQWxCVyxDQTJCVCxFQUxGLE1BckJnQixJQU5oQixVQU9lLGFBQ00sWUFuQkcsT0FvQmdCLHNDQUNOLGlDQXBCVCx3RUFxQnpCLDJCQXBCcUIsNkZBQ1EsMkJBQ2YsWUFDYSx5QkFDM0IiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBQbHggZnJvbSAncmVhY3QtcGx4JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFBhcnRpY2xlV2F2ZSBmcm9tICcuLi9jb21wb25lbnRzL1BhcnRpY2xlcy9QYXJ0aWNsZVdhdmUnO1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vY29tcG9uZW50cy9UZWFtJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRlYW06IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdEZXJlayBDb2xsaXNvbicsXG4gICAgICAgICAgcG9zaXRpb246ICdGb3VuZGVyICYgQ0VPJyxcbiAgICAgICAgICBiaW86XG4gICAgICAgICAgICAnRW50cmVwcmVuZXVyLCBJbnZlc3RvciwgYW5kIFRlY2hub2xvZ2lzdC4gQ3JlYXRvciBvZiBAbmF0c19pbyBhbmQgQGNsb3VkZm91bmRyeScsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdkZXJla2NvbGxpc29uJyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnZGVyZWtjb2xsaXNvbicsXG4gICAgICAgICAgICBnaXRodWI6ICdkZXJla2NvbGxpc29uJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdDb2xpbiBTdWxsaXZhbicsXG4gICAgICAgICAgcG9zaXRpb246ICdQcm9kdWN0IE1hbmFnZW1lbnQnLFxuICAgICAgICAgIGJpbzogJ1Byb2R1Y3QgTWFuYWdlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdDb2xpblN1bGxpdmFuMDEnLFxuICAgICAgICAgICAgbGlua2VkaW46ICdjb2xpbnN1bGxpdmFuJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ0NvbGluU3VsbGl2YW4xJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdHaW5nZXIgQ29sbGlzb24nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnQ29tbXVuaXR5JyxcbiAgICAgICAgICBiaW86ICdEZXZlbG9wZXIgQWR2b2NhdGUgJiBDb21tdW5pdHkgTWFuYWdlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdjcmFzaGdpbmdlcmx5JyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnZ2luZ2VyLWNvbGxpc29uJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2djb2xsaXNvJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdJdmFuIEtvemxvdmljJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICdpdmFua296bG92aWMnLFxuICAgICAgICAgICAgbGlua2VkaW46ICdpdmFua296bG92aWMnLFxuICAgICAgICAgICAgZ2l0aHViOiAna296bG92aWMnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1dhbGRlbWFyIFF1ZXZlZG8nLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ3dhbGx5cXMnLFxuICAgICAgICAgICAgbGlua2VkaW46ICd3YWxkZW1hcnF1ZXZlZG8nLFxuICAgICAgICAgICAgZ2l0aHViOiAnd2FsbHlxcydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQWxiZXJ0byBSaWNhcnQnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2FsYmVydG9yaWNhcnQnLFxuICAgICAgICAgICAgbGlua2VkaW46ICdhbGJlcnRvcmljYXJ0JyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2FyaWNhcnQnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1N0ZXBoZW4gQXNidXJ5JyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIHR3aXR0ZXI6ICd0aGVzYXNidXJ5JyxcbiAgICAgICAgICAgIGxpbmtlZGluOiAnc3Rhc2J1cnknLFxuICAgICAgICAgICAgZ2l0aHViOiAnc2FzYnVyeSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRGF2aWQgS2VtcGVyJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0VuZ2luZWVyaW5nJyxcbiAgICAgICAgICBiaW86ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIGxpbmtlZGluOiAnZGF2aWQta2VtcGVyLTUzMWJiMDM4JyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2Rhdmlka2VtcGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBBT1MuaW5pdCh7XG4gICAgICBvbmNlOiB0cnVlLFxuICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0J1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGZvcmVncm91bmRQYXJhbGxheCA9IFtcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6ICdzZWxmJyxcbiAgICAgICAgc3RhcnRPZmZzZXQ6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXQnLFxuICAgICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnRWYWx1ZTogMTAwLFxuICAgICAgICAgICAgZW5kVmFsdWU6IC01MCxcbiAgICAgICAgICAgIHByb3BlcnR5OiAndHJhbnNsYXRlWSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdO1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmaXJzdC1mb2xkXCI+XG4gICAgICAgICAgPFBhcnRpY2xlV2F2ZSAvPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMFwiPlxuICAgICAgICAgICAgICAgIENcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI1MFwiPlxuICAgICAgICAgICAgICAgIG9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMDBcIj5cbiAgICAgICAgICAgICAgICBuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMTUwXCI+XG4gICAgICAgICAgICAgICAgblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjIwMFwiPlxuICAgICAgICAgICAgICAgIGVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIyNTBcIj5cbiAgICAgICAgICAgICAgICBjXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMzAwXCI+XG4gICAgICAgICAgICAgICAgdFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2AgYH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMzUwXCI+XG4gICAgICAgICAgICAgICAgRVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjQwMFwiPlxuICAgICAgICAgICAgICAgIHZcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI0NTBcIj5cbiAgICAgICAgICAgICAgICBlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNTAwXCI+XG4gICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjU1MFwiPlxuICAgICAgICAgICAgICAgIHlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI2MDBcIj5cbiAgICAgICAgICAgICAgICB0XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNjUwXCI+XG4gICAgICAgICAgICAgICAgaFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjcwMFwiPlxuICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI3NTBcIj5cbiAgICAgICAgICAgICAgICBuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiODAwXCI+XG4gICAgICAgICAgICAgICAgZ1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjg1MFwiIGNsYXNzTmFtZT1cImZyZWNrbGVcIj5cbiAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3NOYW1lPVwiYWJvdXRcIj5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICBBdCBTeW5hZGlhLCB3ZSBiZWxpZXZlIHRoZXJlIGlzIGFuIG9wcG9ydHVuaXR5IDxiciAvPlxuICAgICAgICAgICAgdG8gY3JlYXRlIHRoZSBmaXJzdCBkZWNlbnRyYWxpemVkLFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5cbiAgICAgICAgICAgICAgc2VjdXJlIGdsb2JhbCB1dGlsaXR5LCBwb3dlcmVkIGJ5IE5BVFNpbyxcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgdG8gY29ubmVjdCBhbGwgZGlnaXRhbCBzeXN0ZW1zLCBzZXJ2aWNlcyBhbmQgZGV2aWNlcy5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIFRoaXMgb2ZmZXJpbmcgd2lsbCBiZSBkZWNlbnRyYWxpemVkIGJ5IGRlc2lnbiwgPGJyIC8+XG4gICAgICAgICAgICBzZWN1cmUgYnkgZGVmYXVsdCwgZ2xvYmFsbHkgYXZhaWxhYmxlLCA8YnIgLz5cbiAgICAgICAgICAgIGFuZCBlYXN5IHRvIHVzZSBhbmQgbWFuYWdlLlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJ0ZWFtXCI+XG4gICAgICAgICAgPGgyPk1lZXQgdGhlIFRlYW08L2gyPlxuICAgICAgICAgIDxoND5cbiAgICAgICAgICAgIFdpdGggMTAwKyB5ZWFycyBvZiBjb21iaW5lZCBleHBlcmllbmNlIGluIGVuZ2luZWVyaW5nIGFuZCBtZXNzYWdpbmcsXG4gICAgICAgICAgICB0aGUgZ29vZCBwZW9wbGUgb2YgU3luYWRpYSBwcm92aWRlIGEgd2VhbHRoIG9mIGtub3dsZWRnZSBhaW1lZCBhdFxuICAgICAgICAgICAgY2hhbGxlbmdpbmcgaG93IHRoZSB3b3JsZCBjb25uZWN0cy5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDxUZWFtIG1lbWJlcnM9e3RoaXMuc3RhdGUudGVhbX0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZmlyc3QtZm9sZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIG1hcmdpbjogMTAwcHggYXV0byAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEgLmZyZWNrbGUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIC5mcmVja2xlOmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgICAgICAgICB3aWR0aDogMS4ycmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWhvcml6b250YWwtZ3JhZGllbnQpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1JSwgLTY1JSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFib3V0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53b3JkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGV0dGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLmZpcnN0LWZvbGQge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZnJlY2tsZTphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/pages/index.js */",
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.310b60ddce5f2f564e31.hot-update.js.map