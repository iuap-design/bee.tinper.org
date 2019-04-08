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

var _tinperBeeCore = require('tinper-bee-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {

  /**
   * 是否显示关闭按钮
   */
  closeButton: _propTypes2["default"].bool,

  /**
   * 关闭时的钩子函数
   */
  onHide: _propTypes2["default"].func
};

var defaultProps = {
  'aria-label': 'Close',
  closeButton: false,
  clsPrefix: 'u-modal-header'
};

var contextTypes = {
  $u_modal: _propTypes2["default"].shape({
    onHide: _propTypes2["default"].func
  })
};

var ModalHeader = function (_React$Component) {
  _inherits(ModalHeader, _React$Component);

  function ModalHeader() {
    _classCallCheck(this, ModalHeader);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ModalHeader.prototype.render = function render() {
    var _props = this.props,
        label = _props['aria-label'],
        closeButton = _props.closeButton,
        onHide = _props.onHide,
        className = _props.className,
        clsPrefix = _props.clsPrefix,
        children = _props.children,
        props = _objectWithoutProperties(_props, ['aria-label', 'closeButton', 'onHide', 'className', 'clsPrefix', 'children']);

    var modal = this.context.$u_modal;

    var classes = {};
    classes['' + clsPrefix] = true;
    classes['dnd-handle'] = true;
    return _react2["default"].createElement(
      'div',
      _extends({}, props, {
        className: (0, _classnames2["default"])(className, classes)
      }),
      closeButton && _react2["default"].createElement(
        'button',
        {
          type: 'button',
          className: 'u-close dnd-cancel',
          'aria-label': label,
          onClick: (0, _tinperBeeCore.createChainedFunction)(modal.onHide, onHide)
        },
        _react2["default"].createElement(
          'span',
          { 'aria-hidden': 'true' },
          _react2["default"].createElement('i', { className: 'uf uf-close' })
        )
      ),
      children
    );
  };

  return ModalHeader;
}(_react2["default"].Component);

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
ModalHeader.contextTypes = contextTypes;

exports["default"] = ModalHeader;
module.exports = exports['default'];