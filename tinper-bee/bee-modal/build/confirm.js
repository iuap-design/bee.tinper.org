'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = confirm;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _ConfirmModal = require('./ConfirmModal');

var _ConfirmModal2 = _interopRequireDefault(_ConfirmModal);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var IS_REACT_16 = !!_reactDom2["default"].createPortal;

var ConfirmDialog = function (_React$Component) {
  _inherits(ConfirmDialog, _React$Component);

  function ConfirmDialog(props) {
    _classCallCheck(this, ConfirmDialog);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  ConfirmDialog.prototype.render = function render() {
    var props = this.props;
    var onCancel = props.onCancel,
        onOk = props.onOk,
        close = props.close,
        onHide = props.onHide,
        show = props.show,
        keyboard = props.keyboard,
        centered = props.centered,
        getContainer = props.getContainer,
        backdropStyle = props.backdropStyle,
        okButtonProps = props.okButtonProps,
        cancelButtonProps = props.cancelButtonProps,
        _props$iconType = props.iconType,
        iconType = _props$iconType === undefined ? 'uf-qm-c' : _props$iconType,
        _props$locale = props.locale,
        locale = _props$locale === undefined ? {
      'ok': '确定',
      'gotit': '知道了',
      'cancel': '取消'
    } : _props$locale;

    // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon

    var icon = props.icon === undefined ? iconType : props.icon;
    var okType = props.okType || 'primary';
    var prefixCls = props.prefixCls || 'u-modal';
    var contentPrefixCls = prefixCls + '-confirm';
    // 默认为 true，保持向下兼容
    var okCancel = 'okCancel' in props ? props.okCancel : true;
    var width = props.width || 400;
    var style = props.style || {};
    var backdrop = props.backdrop === undefined ? true : props.backdrop;
    // 默认为 false，保持旧版默认行为
    var backdropClosable = props.backdropClosable === undefined ? true : props.backdropClosable;
    // const runtimeLocale = getConfirmLocale();
    var okText = props.okText || (okCancel ? locale.ok : locale.gotit);
    var cancelText = props.cancelText || locale.cancel;
    var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
    var transitionName = props.transitionName || 'zoom';
    var maskTransitionName = props.maskTransitionName || 'fade';

    var classString = (0, _classnames2["default"])(contentPrefixCls, contentPrefixCls + '-' + props.type, props.className);

    var cancelButton = okCancel && _react2["default"].createElement(
      _beeButton2["default"],
      {
        onClick: function onClick() {
          close();onCancel ? onCancel() : function () {
            return;
          };
        },
        colors: 'secondary',
        style: { marginRight: 8 }
      },
      cancelText
    );
    var iconNode = typeof icon === 'string' ? _react2["default"].createElement(_beeIcon2["default"], { type: icon }) : icon;

    return _react2["default"].createElement(
      _Modal2["default"],
      {
        width: width,
        className: classString,
        show: show,
        onHide: function onHide() {
          close();onCancel ? onCancel() : function () {
            return;
          };
        },
        backdrop: backdrop,
        backdropClosable: backdropClosable,
        centered: centered,
        keyboard: keyboard,
        backdropStyle: backdropStyle },
      _react2["default"].createElement(
        _Modal2["default"].Header,
        null,
        _react2["default"].createElement(
          _Modal2["default"].Title,
          null,
          iconNode,
          _react2["default"].createElement(
            'span',
            { className: contentPrefixCls + '-title' },
            props.title
          )
        )
      ),
      _react2["default"].createElement(
        _Modal2["default"].Body,
        null,
        _react2["default"].createElement(
          'div',
          { className: contentPrefixCls + '-content' },
          props.content
        )
      ),
      _react2["default"].createElement(
        _Modal2["default"].Footer,
        null,
        cancelButton,
        _react2["default"].createElement(
          _beeButton2["default"],
          {
            onClick: function onClick() {
              close();onOk ? onOk() : function () {
                return;
              };
            },
            colors: okType
          },
          okText
        )
      )
    );
  };

  return ConfirmDialog;
}(_react2["default"].Component);

function confirm(config) {
  var div = document.createElement('div');
  document.body.appendChild(div);
  var currentConfig = _extends({}, config, { close: close, show: true });

  function close() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    currentConfig = _extends({}, currentConfig, {
      show: false,
      onHide: destroy.bind.apply(destroy, [this].concat(args))
    });
    if (IS_REACT_16) {
      render(currentConfig);
    } else {
      destroy.apply(undefined, args);
    }
  }

  function update(newConfig) {
    currentConfig = _extends({}, currentConfig, newConfig);
    render(currentConfig);
  }

  function destroy() {
    var unmountResult = _reactDom2["default"].unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });
    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }
    for (var i = 0; i < _Modal.destroyFns.length; i++) {
      var fn = _Modal.destroyFns[i];
      if (fn === close) {
        _Modal.destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function render(props) {
    _reactDom2["default"].render(props.confirmType == 'one' ? _react2["default"].createElement(ConfirmDialog, props) : _react2["default"].createElement(_ConfirmModal2["default"], props), div);
  }

  render(currentConfig);

  _Modal.destroyFns.push(close);

  return {
    destroy: close,
    update: update
  };
}
module.exports = exports['default'];