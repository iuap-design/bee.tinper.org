'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                  * This source code is quoted from rc-slider.
                                                                                                                                                                                                                  * homepage: https://github.com/react-component/slider
                                                                                                                                                                                                                  */


var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min;

  var marksKeys = Object.keys(marks);
  var marksCount = marksKeys.length;
  var unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
  var markWidth = unit * 0.9;

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, className + '-text', true), _defineProperty(_classNames, className + '-text-active', isActive), _classNames));

    var bottomStyle = {
      marginBottom: '-50%',
      bottom: (point - min) / range * 100 + '%'
    };

    var leftStyle = {
      width: markWidth + '%',
      marginLeft: -markWidth / 2 + '%',
      left: (point - min) / range * 100 + '%'
    };

    var style = vertical ? bottomStyle : leftStyle;

    var markPoint = marks[point];
    var markPointIsObject = (typeof markPoint === 'undefined' ? 'undefined' : _typeof(markPoint)) === 'object' && !_react2["default"].isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    var markStyle = markPointIsObject ? _extends({}, style, markPoint.style) : style;
    return _react2["default"].createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point
      },
      markLabel
    );
  });

  return _react2["default"].createElement(
    'div',
    { className: className },
    elements
  );
};

exports["default"] = Marks;
module.exports = exports['default'];