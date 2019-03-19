'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var propTypes = {
  className: _propTypes2["default"].string,
  leftArrowText: _propTypes2["default"].string,
  rightArrowText: _propTypes2["default"].string,
  moveToLeft: _propTypes2["default"].func,
  moveToRight: _propTypes2["default"].func,
  leftActive: _propTypes2["default"]["boolean"],
  rightActive: _propTypes2["default"]["boolean"]
};

var defaultProps = {
  leftArrowText: '',
  rightArrowText: '',
  moveToLeft: noop,
  moveToRight: noop
};

var TransferOperation = function (_React$Component) {
  _inherits(TransferOperation, _React$Component);

  function TransferOperation() {
    _classCallCheck(this, TransferOperation);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  TransferOperation.prototype.render = function render() {
    var _props = this.props,
        moveToLeft = _props.moveToLeft,
        moveToRight = _props.moveToRight,
        leftArrowText = _props.leftArrowText,
        rightArrowText = _props.rightArrowText,
        leftActive = _props.leftActive,
        rightActive = _props.rightActive,
        className = _props.className;


    var moveToLeftButton = _react2["default"].createElement(
      _beeButton2["default"],
      { size: 'sm', disabled: !leftActive, onClick: moveToLeft },
      _react2["default"].createElement(
        'span',
        null,
        _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-arrow-left' }),
        leftArrowText
      )
    );
    var moveToRightButton = _react2["default"].createElement(
      _beeButton2["default"],
      { size: 'sm', disabled: !rightActive, onClick: moveToRight },
      _react2["default"].createElement(
        'span',
        null,
        rightArrowText,
        _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-arrow-right' })
      )
    );
    return _react2["default"].createElement(
      'div',
      { className: className },
      moveToLeftButton,
      moveToRightButton
    );
  };

  return TransferOperation;
}(_react2["default"].Component);

TransferOperation.propsType = propTypes;
TransferOperation.defaultProps = defaultProps;
exports["default"] = TransferOperation;
module.exports = exports['default'];