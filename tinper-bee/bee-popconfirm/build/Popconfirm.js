'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tinperBeeCore = require('tinper-bee-core');

var _createChainedFunction = require('tinper-bee-core/lib/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _splitComponent = require('tinper-bee-core/lib/splitComponent');

var _splitComponent2 = _interopRequireDefault(_splitComponent);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Overlay = require('bee-overlay/build/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Portal = require('bee-overlay/build/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Confirm = require('./Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var isReact16 = _reactDom2["default"].createPortal !== undefined;

var propTypes = _extends({}, _Overlay2["default"].propTypes, {

  // FIXME: This should be `defaultShow`.
  /**
   * 覆盖的初始可见性状态。对于更细微的可见性控制，请考虑直接使用覆盖组件。
   */
  defaultOverlayShown: _propTypes2["default"].bool,

  /**
   * 第二优先级位置方向
   */
  secondPlacement: _propTypes2["default"].oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * 要覆盖在目标旁边的元素或文本。
   */
  content: _propTypes2["default"].node.isRequired,

  /**
   * @private
   */
  onClick: _propTypes2["default"].func,
  onClose: _propTypes2["default"].func,
  onCancel: _propTypes2["default"].func,

  /**
   * @private rootClose关闭时候的回调
   */
  onRootClose: _propTypes2["default"].func,

  /**
   * 关闭按钮
   */
  close_btn: _propTypes2["default"].oneOfType([_tinperBeeCore.componentOrElement, _propTypes2["default"].func]),

  /**
  * 取消按钮
  */
  cancel_btn: _propTypes2["default"].oneOfType([_tinperBeeCore.componentOrElement, _propTypes2["default"].func]),

  // Overridden props from `<Overlay>`.
  /**
   * @private
   */
  target: _propTypes2["default"].oneOf([null]),
  /**
  * @private
  */
  onHide: _propTypes2["default"].oneOf([null]),
  /**
   * @private
   */
  // show: PropTypes.oneOf([null]),
  show: _propTypes2["default"].bool
});

var defaultProps = {
  defaultOverlayShown: false
};

var Popconfirm = function (_Component) {
  _inherits(Popconfirm, _Component);

  function Popconfirm(props, context) {
    _classCallCheck(this, Popconfirm);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);
    _this.makeOverlay = _this.makeOverlay.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);

    _this._mountNode = null;

    _this.state = {
      show: props.defaultOverlayShown
    };
    return _this;
  }

  Popconfirm.prototype.componentDidMount = function componentDidMount() {
    this._mountNode = document.createElement('div');
    !isReact16 && this.renderOverlay();
    if ('show' in this.props) {
      this.setState({
        show: this.props.show
      });
    }
  };

  Popconfirm.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var show = this.props.show;

    !isReact16 && this.renderOverlay();
    if ("show" in this.props && prevProps.show !== show) {
      this.setState({
        show: show
      });
    }
  };

  Popconfirm.prototype.componentWillUnmount = function componentWillUnmount() {
    !isReact16 && _reactDom2["default"].unmountComponentAtNode(this._mountNode);
    this._mountNode = null;
  };

  Popconfirm.prototype.handleToggle = function handleToggle() {

    if (!this.state.show) {
      this.show();
    }
  };

  Popconfirm.prototype.handleClose = function handleClose(e) {
    var onClose = this.props.onClose;

    "show" in this.props ? void 0 : this.hide();
    onClose && onClose(e);
  };

  Popconfirm.prototype.handleCancel = function handleCancel(e) {
    var onCancel = this.props.onCancel;

    "show" in this.props ? void 0 : this.hide();
    onCancel && onCancel(e);
  };

  Popconfirm.prototype.handleHide = function handleHide() {
    var onRootClose = this.props.onRootClose;

    onRootClose && onRootClose();
    if (!("show" in this.props)) {
      this.hide();
    }
  };

  Popconfirm.prototype.show = function show() {
    this.setState({ show: true });
  };

  Popconfirm.prototype.hide = function hide() {
    this.setState({ show: false });
  };

  Popconfirm.prototype.makeOverlay = function makeOverlay(overlay, props) {
    return _react2["default"].createElement(
      _Overlay2["default"],
      _extends({}, props, {
        show: this.state.show,
        onHide: this.handleHide,
        target: this
      }),
      overlay
    );
  };

  Popconfirm.prototype.renderOverlay = function renderOverlay() {
    _reactDom2["default"].unstable_renderSubtreeIntoContainer(this, this._overlay, this._mountNode);
  };

  Popconfirm.prototype.render = function render() {
    var _props = this.props,
        content = _props.content,
        children = _props.children,
        onClick = _props.onClick,
        stopbubble = _props.stopbubble,
        secondPlacement = _props.secondPlacement,
        onRootClose = _props.onRootClose,
        cancel_btn = _props.cancel_btn,
        close_btn = _props.close_btn,
        props = _objectWithoutProperties(_props, ['content', 'children', 'onClick', 'stopbubble', 'secondPlacement', 'onRootClose', 'cancel_btn', 'close_btn']);

    delete props.defaultOverlayShown;

    var _splitComponentProps = (0, _splitComponent2["default"])(props, _Overlay2["default"]),
        _splitComponentProps2 = _slicedToArray(_splitComponentProps, 2),
        overlayProps = _splitComponentProps2[0],
        confirmProps = _splitComponentProps2[1];

    var child = _react2["default"].Children.only(children);
    var childProps = child.props;

    var overlay = _react2["default"].createElement(
      _Confirm2["default"],
      _extends({}, confirmProps, {
        cancel_btn: cancel_btn,
        close_btn: close_btn,
        onClose: this.handleClose,
        onCancel: this.handleCancel,
        stopbubble: stopbubble,
        secondPlacement: secondPlacement,
        placement: props.placement }),
      content
    );

    var triggerProps = {
      'aria-describedby': overlay.props.id
    };

    // FIXME: 这里用于传递这个组件上的处理程序的逻辑是不一致的。我们不应该通过任何这些道具。

    triggerProps.onClick = (0, _createChainedFunction2["default"])(childProps.onClick, onClick);

    if (!("show" in this.props)) {
      triggerProps.onClick = (0, _createChainedFunction2["default"])(triggerProps.onClick, this.handleToggle);
    }

    overlayProps.secondPlacement = secondPlacement;
    this._overlay = this.makeOverlay(overlay, overlayProps);

    if (!isReact16) {
      return (0, _react.cloneElement)(child, triggerProps);
    }
    triggerProps.key = 'overlay';

    var portal = _react2["default"].createElement(
      _Portal2["default"],
      {
        key: 'portal',
        container: props.container },
      this._overlay
    );

    return [(0, _react.cloneElement)(child, triggerProps), portal];
  };

  return Popconfirm;
}(_react.Component);

Popconfirm.propTypes = propTypes;
Popconfirm.defaultProps = defaultProps;

exports["default"] = Popconfirm;
module.exports = exports['default'];