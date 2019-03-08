'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var defaultProps = {
  clsPrefix: "u-navbar-brand"
};

var NavbarBrand = function (_React$Component) {
  _inherits(NavbarBrand, _React$Component);

  function NavbarBrand() {
    _classCallCheck(this, NavbarBrand);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  NavbarBrand.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        clsPrefix = _props.clsPrefix,
        props = _objectWithoutProperties(_props, ['className', 'children', 'clsPrefix']);

    if (_react2["default"].isValidElement(children)) {
      return _react2["default"].cloneElement(children, {
        className: (0, _classnames2["default"])(children.props.className, className, clsPrefix)
      });
    }

    return _react2["default"].createElement(
      'span',
      _extends({}, props, { className: (0, _classnames2["default"])(className, clsPrefix) }),
      children
    );
  };

  return NavbarBrand;
}(_react2["default"].Component);

NavbarBrand.defaultProps = defaultProps;

exports["default"] = NavbarBrand;
module.exports = exports['default'];