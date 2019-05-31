'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyFns = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _events = require('dom-helpers/events');

var _events2 = _interopRequireDefault(_events);

var _ownerDocument = require('dom-helpers/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _inDOM = require('dom-helpers/util/inDOM');

var _inDOM2 = _interopRequireDefault(_inDOM);

var _scrollbarSize = require('dom-helpers/util/scrollbarSize');

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = require('bee-overlay-modal/build/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _isOverflowing = require('bee-overlay-modal/build/utils/isOverflowing');

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _tinperBeeCore = require('tinper-bee-core');

var _beeTransition = require('bee-transition');

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalDialog = require('./ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalTitle = require('./ModalTitle');

var _ModalTitle2 = _interopRequireDefault(_ModalTitle);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = _extends({}, _Modal2["default"].propTypes, _ModalDialog2["default"].propTypes, (_extends2 = {

  /**
   * 是否弹出遮罩层/遮罩层点击是否触发关闭
   */
  backdrop: _propTypes2["default"].oneOf(['static', true, false]),

  /**
   * 点击遮罩层是否允许关闭
   */
  backdropClosable: _propTypes2["default"].bool,
  /**
   * esc触发关闭
   */
  keyboard: _propTypes2["default"].bool,

  /**
   * 显隐时是否使用动画
   */
  animation: _propTypes2["default"].bool,

  /**
   * 传递给模态框的样式
   */
  dialogComponentClass: _tinperBeeCore.elementType,

  /**
   * 自动设置焦点
   */
  autoFocus: _propTypes2["default"].bool,

  /**
   * 防止打开时焦点离开模态框
   */
  enforceFocus: _propTypes2["default"].bool,

  /**
   * 是否打开模态框
   */
  show: _propTypes2["default"].bool,

  /**
   * 关闭时的钩子函数
   */
  onHide: _propTypes2["default"].func,

  onEnter: _propTypes2["default"].func,

  onEntering: _propTypes2["default"].func,

  onEntered: _propTypes2["default"].func,

  onExit: _propTypes2["default"].func,

  onExiting: _propTypes2["default"].func,

  onExited: _propTypes2["default"].func,

  containerClassName: _propTypes2["default"].string
}, _defineProperty(_extends2, 'containerClassName', _propTypes2["default"].string), _defineProperty(_extends2, 'container', _Modal2["default"].propTypes.container), _defineProperty(_extends2, 'size', _propTypes2["default"].oneOf(["sm", "lg", "xlg", ""])), _defineProperty(_extends2, 'width', _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string])), _defineProperty(_extends2, 'draggable', _propTypes2["default"].bool), _defineProperty(_extends2, 'resizable', _propTypes2["default"].bool), _defineProperty(_extends2, 'resizeClassName', _propTypes2["default"].string), _defineProperty(_extends2, 'onResizeStart', _propTypes2["default"].func), _defineProperty(_extends2, 'onResize', _propTypes2["default"].func), _defineProperty(_extends2, 'onResizeStop', _propTypes2["default"].func), _defineProperty(_extends2, 'minWidth', _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string])), _defineProperty(_extends2, 'minHeight', _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string])), _defineProperty(_extends2, 'maxWidth', _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string])), _defineProperty(_extends2, 'maxHeight', _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string])), _extends2));

var defaultProps = _extends({}, _Modal2["default"].defaultProps, {
  backdropClosable: true,
  animation: true,
  dialogComponentClass: _ModalDialog2["default"],
  draggable: false,
  resizable: false,
  clsPrefix: 'u-modal'
});

var ModalFuncProps = {
  prefixCls: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  show: _propTypes2["default"].bool,
  title: _react2["default"].ReactNode,
  content: _react2["default"].ReactNode,
  onOk: _propTypes2["default"].func,
  onCancel: _propTypes2["default"].func,
  width: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
  okText: _propTypes2["default"].string,
  okType: _propTypes2["default"].string,
  cancelText: _propTypes2["default"].string,
  icon: _react2["default"].ReactNode,
  backdrop: _propTypes2["default"].oneOf(['static', true, false])
};

var ModalFunc = function ModalFunc(props) {
  destroy = function destroy() {};
  update = function update(newConfig) {};
};

var destroyFns = exports.destroyFns = [];

var childContextTypes = {
  $u_modal: _propTypes2["default"].shape({
    onHide: _propTypes2["default"].func
  })
};

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props, context) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleEntering = _this.handleEntering.bind(_this);
    _this.handleExited = _this.handleExited.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    _this.handleDialogClick = _this.handleDialogClick.bind(_this);

    _this.state = {
      style: {}
    };
    return _this;
  }

  Modal.prototype.getChildContext = function getChildContext() {
    return {
      $u_modal: {
        onHide: this.props.onHide
      }
    };
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    this.handleExited();
  };

  Modal.prototype.handleEntering = function handleEntering() {
    // FIXME: This should work even when animation is disabled.
    _events2["default"].on(window, 'resize', this.handleWindowResize);
    this.updateStyle();
  };

  Modal.prototype.handleExited = function handleExited() {
    // FIXME: This should work even when animation is disabled.
    _events2["default"].off(window, 'resize', this.handleWindowResize);
  };

  Modal.prototype.handleWindowResize = function handleWindowResize() {
    this.updateStyle();
  };

  Modal.prototype.handleDialogClick = function handleDialogClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onHide();
  };

  Modal.prototype.updateStyle = function updateStyle() {
    if (!_inDOM2["default"] || !this._modal) {
      return;
    }

    var dialogNode = this._modal.getDialogElement();
    var dialogHeight = dialogNode.scrollHeight;

    var document = (0, _ownerDocument2["default"])(dialogNode);
    var bodyIsOverflowing = false;
    if (this.props.container) {
      bodyIsOverflowing = (0, _isOverflowing2["default"])(_reactDom2["default"].findDOMNode(this.props.container));
    }
    var modalIsOverflowing = dialogHeight > document.documentElement.clientHeight;

    this.setState({
      style: {
        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? (0, _scrollbarSize2["default"])() : undefined,
        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? (0, _scrollbarSize2["default"])() : undefined
      }
    });
  };

  Modal.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        backdrop = _props.backdrop,
        backdropClosable = _props.backdropClosable,
        animation = _props.animation,
        show = _props.show,
        Dialog = _props.dialogComponentClass,
        className = _props.className,
        clsPrefix = _props.clsPrefix,
        _props$style = _props.style,
        style = _props$style === undefined ? {} : _props$style,
        size = _props.size,
        width = _props.width,
        children = _props.children,
        onEntering = _props.onEntering,
        onExited = _props.onExited,
        backdropClassName = _props.backdropClassName,
        containerClassName = _props.containerClassName,
        draggable = _props.draggable,
        resizeClassName = _props.resizeClassName,
        props = _objectWithoutProperties(_props, ['backdrop', 'backdropClosable', 'animation', 'show', 'dialogComponentClass', 'className', 'clsPrefix', 'style', 'size', 'width', 'children', 'onEntering', 'onExited', 'backdropClassName', 'containerClassName', 'draggable', 'resizeClassName']);

    var _splitComponent = (0, _tinperBeeCore.splitComponent)(props, _Modal2["default"]),
        _splitComponent2 = _slicedToArray(_splitComponent, 2),
        baseModalProps = _splitComponent2[0],
        dialogProps = _splitComponent2[1];

    var inClassName = show && !animation && 'in';

    var backdropClasses = _defineProperty({}, clsPrefix + '-backdrop', true);
    var containerClasses = _defineProperty({}, clsPrefix + '-open', true);
    if (Number(width)) width += 'px';

    var styleRes = _extends({}, this.state.style, style);
    if (width) {
      _extends(styleRes, { width: width });
    }
    return _react2["default"].createElement(
      _Modal2["default"],
      _extends({}, baseModalProps, {
        ref: function ref(c) {
          _this2._modal = c;
        },
        show: show,
        onEntering: (0, _tinperBeeCore.createChainedFunction)(onEntering, this.handleEntering),
        onExited: (0, _tinperBeeCore.createChainedFunction)(onExited, this.handleExited),
        backdrop: backdrop,
        backdropClassName: (0, _classnames2["default"])(backdropClasses, inClassName, backdropClassName),
        containerClassName: (0, _classnames2["default"])(containerClasses, containerClassName),
        transition: animation ? _beeTransition.Fade : undefined,
        dialogTransitionTimeout: Modal.TRANSITION_DURATION,
        backdropTransitionTimeout: Modal.BACKDROP_TRANSITION_DURATION
      }),
      _react2["default"].createElement(
        Dialog,
        _extends({}, dialogProps, {
          style: styleRes,
          className: (0, _classnames2["default"])(className, inClassName, backdropClassName),
          onClick: backdrop === true && !!backdropClosable ? this.handleDialogClick : null,
          size: size,
          draggable: draggable,
          resizeClassName: resizeClassName
        }),
        children
      )
    );
  };

  return Modal;
}(_react2["default"].Component);

Modal.info = ModalFunc;
Modal.success = ModalFunc;
Modal.error = ModalFunc;
Modal.warn = ModalFunc;
Modal.warning = ModalFunc;
Modal.confirm = ModalFunc;

Modal.destroyAll = function () {
  return;
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.childContextTypes = childContextTypes;

Modal.Body = _ModalBody2["default"];
Modal.Header = _ModalHeader2["default"];
Modal.Title = _ModalTitle2["default"];
Modal.Footer = _ModalFooter2["default"];

Modal.Dialog = _ModalDialog2["default"];

Modal.TRANSITION_DURATION = 200000;
Modal.BACKDROP_TRANSITION_DURATION = 10000;

exports["default"] = Modal;