'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  /**
   * 如果设置成true渲染`span` 而不是 `a`
   */
  active: _propTypes2["default"].bool,
  /**
   * `href` a标签href
   */
  href: _propTypes2["default"].string,
  /**
   * `title`  a标签title
   */
  title: _propTypes2["default"].node
};

var defaultProps = {
  active: false
};

var BreadcrumbItem = function (_React$Component) {
  _inherits(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    _classCallCheck(this, BreadcrumbItem);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  BreadcrumbItem.prototype.render = function render() {
    var _props = this.props,
        active = _props.active,
        href = _props.href,
        title = _props.title,
        target = _props.target,
        className = _props.className,
        props = _objectWithoutProperties(_props, ['active', 'href', 'title', 'target', 'className']);

    var linkProps = { href: href, title: title };

    return _react2["default"].createElement(
      'li',
      { className: (0, _classnames2["default"])(className, { active: active }) },
      href ? _react2["default"].createElement('a', _extends({}, props, linkProps)) : _react2["default"].createElement('span', props)
    );
  };

  return BreadcrumbItem;
}(_react2["default"].Component);

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

exports["default"] = BreadcrumbItem;
module.exports = exports['default'];