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

var _all = require('tinper-bee-core/lib/all');

var _all2 = _interopRequireDefault(_all);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// TODO: Should we expose `<NavItem>` as `<Nav.Item>`?

// TODO: This `bsStyle` is very unlike the others. Should we rename it?

// TODO: `pullRight` and `pullLeft` don't render right outside of `navbar`.
// Consider renaming or replacing them.

var propTypes = {
  /**
   * Marks the NavItem with a matching `eventKey` as active. Has a
   * higher precedence over `activeHref`.
   */
  activeKey: _propTypes2["default"].any,

  /**
   * Marks the child NavItem with a matching `href` prop as active.
   */
  activeHref: _propTypes2["default"].string,

  /**
   * NavItems are be positioned vertically.
   */
  stacked: _propTypes2["default"].bool,

  justified: (0, _all2["default"])(_propTypes2["default"].bool, function (_ref) {
    var justified = _ref.justified,
        navbar = _ref.navbar;
    return justified && navbar ? Error('justified navbar `Nav`s are not supported') : null;
  }),

  /**
   * A callback fired when a NavItem is selected.
   *
   * ```js
   * function (
   * 	Any eventKey,
   * 	SyntheticEvent event?
   * )
   * ```
   */
  onSelect: _propTypes2["default"].func,

  /**
   * Apply styling an alignment for use in a Navbar. This prop will be set
   * automatically when the Nav is used inside a Navbar.
   */
  navbar: _propTypes2["default"].bool,

  /**
   * Float the Nav to the right. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullRight: _propTypes2["default"].bool,

  /**
   * Float the Nav to the left. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullLeft: _propTypes2["default"].bool
};

var defaultProps = {
  pullRight: false,
  pullLeft: false,
  clsPrefix: 'u-navbar'
};

var childContextTypes = {
  u_nav: _propTypes2["default"].object
};

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Nav.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        selectedkey = _props.selectedkey,
        onSelect = _props.onSelect;

    return {
      u_nav: {
        selectedkey: selectedkey, onSelect: onSelect
      }
    };
  };

  Nav.prototype.render = function render() {
    var _props2 = this.props,
        onSelect = _props2.onSelect,
        selectedkey = _props2.selectedkey,
        propsRole = _props2.role,
        pullRight = _props2.pullRight,
        pullLeft = _props2.pullLeft,
        className = _props2.className,
        children = _props2.children,
        clsPrefix = _props2.clsPrefix,
        props = _objectWithoutProperties(_props2, ['onSelect', 'selectedkey', 'role', 'pullRight', 'pullLeft', 'className', 'children', 'clsPrefix']);

    //const tabContainer = this.context.$bs_tabContainer;
    //const role = propsRole || (tabContainer ? 'tablist' : null);

    //const { activeKey, activeHref } = this.getActiveProps();


    delete props.activeKey; // Accessed via this.getActiveProps().
    delete props.activeHref; // Accessed via this.getActiveProps().


    var classes = { 'u-nav': true, 'u-navbar-nav': true };

    if (pullRight) {
      classes[clsPrefix + '-right'] = true;
    }
    if (pullLeft) {
      classes[clsPrefix + '-left'] = true;
    }

    //classes[prefix(navbarProps, 'nav')] = true;

    return _react2["default"].createElement(
      'ul',
      _extends({}, props, {
        className: (0, _classnames2["default"])(className, classes)
      }),
      children
    );
  };

  return Nav;
}(_react2["default"].Component);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.childContextTypes = childContextTypes;

exports["default"] = Nav;
module.exports = exports['default'];