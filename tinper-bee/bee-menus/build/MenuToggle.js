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

var _createChainedFunction = require('tinper-bee-core/lib/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  onClick: _propTypes2["default"].func,
  /**
   * The toggle content, if left empty it will render the default toggle (seen above).
   */
  show: _propTypes2["default"].bool,
  children: _propTypes2["default"].node
};

var contextTypes = {
  u_navbar: _propTypes2["default"].shape({
    expanded: _propTypes2["default"].bool,
    onToggle: _propTypes2["default"].func
  })
};

var defaultProps = {
  clsPrefix: 'u-navbar-toggle',
  show: false
};

var MenuToggle = function (_React$Component) {
  _inherits(MenuToggle, _React$Component);

  function MenuToggle(props) {
    _classCallCheck(this, MenuToggle);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      toggleState: false
      //this.handleRender = this.handleRender.bind(this);
    };return _this;
  }

  MenuToggle.prototype.handleClick = function handleClick() {
    var _context$u_navbar = this.context.u_navbar,
        expanded = _context$u_navbar.expanded,
        onToggle = _context$u_navbar.onToggle;

    this.setState({ toggleState: !this.state.toggleState });
    if (onToggle) {
      onToggle(!expanded);
    }
  };

  MenuToggle.prototype.render = function render() {
    var _props = this.props,
        onClick = _props.onClick,
        className = _props.className,
        children = _props.children,
        clsPrefix = _props.clsPrefix,
        show = _props.show,
        props = _objectWithoutProperties(_props, ['onClick', 'className', 'children', 'clsPrefix', 'show']);
    //const navbarProps = this.context.u_navbar || { bsClass: 'navbar' };
    //console.log(navbarProps.onToggle, navbarProps.expanded);

    var buttonProps = _extends({
      type: 'button'
    }, props, {
      onClick: (0, _createChainedFunction2["default"])(onClick, this.handleClick.bind(this)),
      className: (0, _classnames2["default"])(className, clsPrefix, show && 'show')
      //!this.context.u_navbar.expanded && 'collapsed',
    });

    if (children) {
      return _react2["default"].createElement(
        'button',
        buttonProps,
        children
      );
    }
    //当show存在时，渲染左侧静态面包按钮
    return _react2["default"].createElement(
      'div',
      null,
      show && this.state.toggleState && _react2["default"].createElement(
        'button',
        buttonProps,
        _react2["default"].createElement(
          'span',
          { className: 'sr-only' },
          'Toggle navigation'
        ),
        _react2["default"].createElement('span', { className: 'icon-bar' }),
        _react2["default"].createElement('span', { className: 'icon-bar' }),
        _react2["default"].createElement('span', { className: 'icon-bar' })
      ),
      show && !this.state.toggleState && _react2["default"].createElement(
        'button',
        buttonProps,
        _react2["default"].createElement('span', { className: 'uf uf-arrow-left' })
      ),
      !show && !this.state.toggleState && _react2["default"].createElement(
        'button',
        buttonProps,
        _react2["default"].createElement(
          'span',
          { className: 'sr-only' },
          'Toggle navigation'
        ),
        _react2["default"].createElement('span', { className: 'icon-bar' }),
        _react2["default"].createElement('span', { className: 'icon-bar' }),
        _react2["default"].createElement('span', { className: 'icon-bar' })
      )
    );
  };

  return MenuToggle;
}(_react2["default"].Component);

MenuToggle.propTypes = propTypes;
MenuToggle.defaultProps = defaultProps;
MenuToggle.contextTypes = contextTypes;

exports["default"] = MenuToggle;
module.exports = exports['default'];