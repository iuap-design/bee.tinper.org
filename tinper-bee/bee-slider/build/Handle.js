'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-slider.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/slider
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Handle = function (_React$Component) {
  _inherits(Handle, _React$Component);

  function Handle() {
    _classCallCheck(this, Handle);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Handle.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        vertical = _props.vertical,
        offset = _props.offset,
        style = _props.style,
        disabled = _props.disabled,
        min = _props.min,
        max = _props.max,
        value = _props.value,
        restProps = _objectWithoutProperties(_props, ['className', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value']);

    var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
    var elStyle = _extends({}, style, postionStyle);
    var ariaProps = {};
    if (value !== undefined) {
      ariaProps = _extends({}, ariaProps, {
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      });
    }

    return _react2["default"].createElement('div', _extends({
      role: 'slider',
      tabIndex: '0'
    }, ariaProps, restProps, {
      className: className,
      style: elStyle
    }));
  };

  return Handle;
}(_react2["default"].Component);

exports["default"] = Handle;


Handle.propTypes = {
  className: _propTypes2["default"].string,
  vertical: _propTypes2["default"].bool,
  offset: _propTypes2["default"].number,
  style: _propTypes2["default"].object,
  disabled: _propTypes2["default"].bool,
  min: _propTypes2["default"].number,
  max: _propTypes2["default"].number,
  value: _propTypes2["default"].number
};
module.exports = exports['default'];