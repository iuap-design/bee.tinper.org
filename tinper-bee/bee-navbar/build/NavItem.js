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
  active: _propTypes2["default"].bool,
  disabled: _propTypes2["default"].bool,
  role: _propTypes2["default"].string,
  href: _propTypes2["default"].string,
  skey: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string, _propTypes2["default"].number]),
  onClick: _propTypes2["default"].func,
  eventKey: _propTypes2["default"].any,
  children: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string, _propTypes2["default"].node])
};

var defaultProps = {
  active: false,
  disabled: false
};

var contextTypes = {
  u_nav: _propTypes2["default"].object
};

var NavItem = function (_React$Component) {
  _inherits(NavItem, _React$Component);

  function NavItem(props, context) {
    _classCallCheck(this, NavItem);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  NavItem.prototype.handleClick = function handleClick(e) {
    var _context$u_nav = this.context.u_nav,
        onSelect = _context$u_nav.onSelect,
        selectedkey = _context$u_nav.selectedkey;


    if (this.props.disabled) {
      return;
    }

    if (onSelect) {
      onSelect(this.props.eventKey);
    }
  };

  NavItem.prototype.render = function render() {
    var _props = this.props,
        active = _props.active,
        eventKey = _props.eventKey,
        disabled = _props.disabled,
        skey = _props.skey,
        className = _props.className,
        style = _props.style,
        children = _props.children,
        props = _objectWithoutProperties(_props, ['active', 'eventKey', 'disabled', 'skey', 'className', 'style', 'children']);

    var selectedkey = this.context.u_nav.selectedkey;


    var activeItem = this.props.eventKey === selectedkey;

    var classes = { 'active': activeItem, 'disabled': disabled };

    var dom = props.href ? _react2["default"].createElement(
      'li',
      {
        role: 'presentation',
        className: (0, _classnames2["default"])(className, classes),
        style: style,
        onClick: this.handleClick
      },
      _react2["default"].createElement(
        'a',
        _extends({}, props, {
          disabled: disabled
        }),
        children
      )
    ) : _react2["default"].createElement(
      'li',
      {
        role: 'presentation',
        className: (0, _classnames2["default"])(className, classes),
        style: style,
        key: skey,
        onClick: this.handleClick
      },
      children
    );
    return dom;
  };

  return NavItem;
}(_react2["default"].Component);

NavItem.contextTypes = contextTypes;
NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

exports["default"] = NavItem;
module.exports = exports['default'];