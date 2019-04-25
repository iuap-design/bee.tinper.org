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

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IS_REACT_16 = !!_reactDom2["default"].createPortal;

var ConfirmDialog = function ConfirmDialog(props) {
  var onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      onHide = props.onHide,
      show = props.show,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps,
      _props$iconType = props.iconType,
      iconType = _props$iconType === undefined ? 'uf-qm-c' : _props$iconType;

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
  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  // const runtimeLocale = getConfirmLocale();
  var okText = props.okText || (okCancel ? "确定" : "知道了");
  var cancelText = props.cancelText || "取消";
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
      onHide: onHide,
      backdrop: backdrop },
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
    _reactDom2["default"].render(_react2["default"].createElement(ConfirmDialog, props), div);
  }

  render(currentConfig);

  _Modal.destroyFns.push(close);

  return {
    destroy: close,
    update: update
  };
}
module.exports = exports['default'];