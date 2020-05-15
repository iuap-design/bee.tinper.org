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

var _elementType = require('tinper-bee-core/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _Layout = require('bee-layout/build/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _NavbarBrand = require('./NavbarBrand');

var _NavbarBrand2 = _interopRequireDefault(_NavbarBrand);

var _NavbarCollapse = require('./NavbarCollapse');

var _NavbarCollapse2 = _interopRequireDefault(_NavbarCollapse);

var _NavbarHeader = require('./NavbarHeader');

var _NavbarHeader2 = _interopRequireDefault(_NavbarHeader);

var _NavbarToggle = require('./NavbarToggle');

var _NavbarToggle2 = _interopRequireDefault(_NavbarToggle);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//import NavDropdown from './NavDropdown';

var propTypes = {
  /**
   * Create a fixed navbar along the top of the screen, that scrolls with the
   * page
   */
  fixedTop: _propTypes2["default"].bool,
  /**
   * Create a fixed navbar along the bottom of the screen, that scrolls with
   * the page
   */
  fixedBottom: _propTypes2["default"].bool,
  /**
   * Create a full-width navbar that scrolls away with the page
   */
  staticTop: _propTypes2["default"].bool,
  /**
   * An alternative dark visual style for the Navbar
   */
  inverse: _propTypes2["default"].bool,
  /**
   * Allow the Navbar to fluidly adjust to the page or container width, instead
   * of at the predefined screen breakpoints
   */
  fluid: _propTypes2["default"].bool,

  /**
   * Set a custom element for this component.
   */
  componentClass: _elementType2["default"],
  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `navExpanded`
   * boolean value.
   *
   * @controllable navExpanded
   */
  onToggle: _propTypes2["default"].func,

  /**
   * Explicitly set the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: _propTypes2["default"].bool,

  role: _propTypes2["default"].string
};

var defaultProps = {
  componentClass: 'nav',
  fixedTop: false,
  fixedBottom: false,
  staticTop: false,
  inverse: false,
  fluid: false,
  clsPrefix: 'u-navbar'
};

var childContextTypes = {
  u_navbar: _propTypes2["default"].shape({
    expanded: _propTypes2["default"].bool,
    onToggle: _propTypes2["default"].func
  })
};

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props, context) {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    //this.handleToggle = this.handleToggle.bind(this);
  }

  Navbar.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        expanded = _props.expanded,
        onToggle = _props.onToggle;


    return {
      u_navbar: {
        expanded: expanded,
        //onToggle: this.handleToggle,
        onToggle: onToggle
      }
    };
  };

  // handleToggle() {
  //   const { onToggle, expanded } = this.props;

  //   onToggle(!expanded);
  //   console.log(expanded);
  // }

  Navbar.prototype.render = function render() {
    var _props2 = this.props,
        Component = _props2.componentClass,
        fixedTop = _props2.fixedTop,
        fixedBottom = _props2.fixedBottom,
        staticTop = _props2.staticTop,
        inverse = _props2.inverse,
        fluid = _props2.fluid,
        className = _props2.className,
        children = _props2.children,
        clsPrefix = _props2.clsPrefix,
        expanded = _props2.expanded,
        onToggle = _props2.onToggle,
        others = _objectWithoutProperties(_props2, ['componentClass', 'fixedTop', 'fixedBottom', 'staticTop', 'inverse', 'fluid', 'className', 'children', 'clsPrefix', 'expanded', 'onToggle']);

    // const [bsProps, elementProps] = splitBsPropsAndOmit(props, [
    //   'expanded', 'onToggle',
    // ]);

    var classes = {};

    if (inverse) {
      classes[clsPrefix + '-inverse'] = true;
    } else {
      classes[clsPrefix + '-default'] = true;
    }
    if (fixedTop) {
      classes[clsPrefix + '-fixed-top'] = true;
    }
    if (fixedBottom) {
      classes[clsPrefix + '-fixed-bottom'] = true;
    }
    if (staticTop) {
      classes[clsPrefix + '-static-top'] = true;
    }

    var classNames = (0, _classnames2["default"])(clsPrefix, classes);
    return _react2["default"].createElement(
      Component,
      _extends({}, others, {
        className: (0, _classnames2["default"])(className, classNames)
      }),
      _react2["default"].createElement(
        _Layout2["default"],
        { fluid: fluid },
        children
      )
    );
  };

  return Navbar;
}(_react2["default"].Component);

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
Navbar.childContextTypes = childContextTypes;

//const Navbar = uncontrollable(Navbar, { expanded: 'onToggle' });

function createSimpleWrapper(tag, suffix, displayName) {
  var Wrapper = function Wrapper(_ref, _ref2) {
    var _ref2$u_navbar = _ref2.u_navbar,
        navbarProps = _ref2$u_navbar === undefined ? { preClass: 'navbar' } : _ref2$u_navbar;

    var Component = _ref.componentClass,
        className = _ref.className,
        pullRight = _ref.pullRight,
        pullLeft = _ref.pullLeft,
        props = _objectWithoutProperties(_ref, ['componentClass', 'className', 'pullRight', 'pullLeft']);

    return _react2["default"].createElement(Component, _extends({}, props, {
      className: (0, _classnames2["default"])(className,
      //prefix(navbarProps, suffix),
      'u-navbar-' + suffix, pullRight && 'u-navbar-right', pullLeft && 'u-navbar-left')
    }));
  };

  Wrapper.displayName = displayName;

  Wrapper.propTypes = {
    componentClass: _elementType2["default"],
    pullRight: _propTypes2["default"].bool,
    pullLeft: _propTypes2["default"].bool
  };

  Wrapper.defaultProps = {
    componentClass: tag,
    pullRight: false,
    pullLeft: false
  };

  Wrapper.contextTypes = {
    u_navbar: _propTypes2["default"].shape({})
  };

  return Wrapper;
}

Navbar.Brand = _NavbarBrand2["default"];
Navbar.Header = _NavbarHeader2["default"];
Navbar.Toggle = _NavbarToggle2["default"];
Navbar.Collapse = _NavbarCollapse2["default"];
Navbar.Nav = _Nav2["default"];
//Navbar.NavDropdown = NavDropdown;
Navbar.NavItem = _NavItem2["default"];

Navbar.Form = createSimpleWrapper('div', 'form', 'NavbarForm');
Navbar.Text = createSimpleWrapper('p', 'text', 'NavbarText');
Navbar.Link = createSimpleWrapper('a', 'link', 'NavbarLink');

exports["default"] = Navbar;
module.exports = exports['default'];