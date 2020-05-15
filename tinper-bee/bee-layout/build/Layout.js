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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  /**
   * Adds `container-fluid` class.
   */
  fluid: _propTypes2["default"].bool,
  /**
   * You can use a custom element for this component
   */
  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
};

var defaultProps = {
  componentClass: 'div',
  fluid: false,
  clsPrefix: 'u-container'
};

var Con = function (_React$Component) {
  _inherits(Con, _React$Component);

  function Con() {
    _classCallCheck(this, Con);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Con.prototype.render = function render() {
    var _tbclass;

    var _props = this.props,
        fluid = _props.fluid,
        Component = _props.componentClass,
        clsPrefix = _props.clsPrefix,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['fluid', 'componentClass', 'clsPrefix', 'className']);

    var tbclass = (_tbclass = {}, _defineProperty(_tbclass, '' + clsPrefix, !fluid), _defineProperty(_tbclass, clsPrefix + '-fluid', fluid), _tbclass);

    return _react2["default"].createElement(
      Component,
      _extends({}, others, {
        className: (0, _classnames2["default"])(tbclass, className)
      }),
      this.props.children
    );
  };

  return Con;
}(_react2["default"].Component);

Con.propTypes = propTypes;
Con.defaultProps = defaultProps;

exports["default"] = Con;
module.exports = exports['default'];