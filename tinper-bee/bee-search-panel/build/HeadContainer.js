'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var HeadContainer = function (_React$Component) {
  _inherits(HeadContainer, _React$Component);

  function HeadContainer() {
    _classCallCheck(this, HeadContainer);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  HeadContainer.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        clsPrefix = _props.clsPrefix,
        _className = _props.className;

    var ht = children ? _react2["default"].createElement(
      'div',
      null,
      children
    ) : null;
    return ht;
  };

  return HeadContainer;
}(_react2["default"].Component);

exports["default"] = HeadContainer;
module.exports = exports['default'];