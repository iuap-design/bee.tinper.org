'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/**
* This source code is quoted from rc-slider.
* homepage: https://github.com/react-component/slider
*/


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Track = function Track(props) {
  //处于激活状态的track
  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style;


  var positonStyle = vertical ? {
    bottom: offset + '%',
    height: length + '%'
  } : {
    left: offset + '%',
    width: length + '%'
  };

  var elStyle = _extends({
    visibility: included ? 'visible' : 'hidden'
  }, style, positonStyle);
  return _react2["default"].createElement('div', { className: className, style: elStyle });
};

exports["default"] = Track;
module.exports = exports['default'];