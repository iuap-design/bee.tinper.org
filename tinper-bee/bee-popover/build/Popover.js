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

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//TODO: 当多个Popover在一个组件内时，显示一个会触发多个渲染。见demo1.

var isReact16 = _reactDom2["default"].createPortal !== undefined;

var triggerType = _propTypes2["default"].oneOf(['click', 'hover', 'focus']);

/**
 * 检查值是属于这个值，还是等于这个值
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
    if (Array.isArray(of)) {
        return of.indexOf(one) >= 0;
    }
    return one === of;
}

var propTypes = _extends({}, _Overlay2["default"].propTypes, {

    // FIXME: This should be `defaultShow`.
    /**
     * 覆盖的初始可见性状态。对于更细微的可见性控制，请考虑直接使用覆盖组件。
     */
    defaultOverlayShown: _propTypes2["default"].bool,

    /**
     * 要覆盖在目标旁边的元素或文本。
     */
    content: _propTypes2["default"].node.isRequired,
    /**
     * 显示和隐藏覆盖一旦触发的毫秒延迟量
     */
    delay: _propTypes2["default"].number,
    /**
     * 触发后显示叠加层之前的延迟毫秒
     */
    delayShow: _propTypes2["default"].number,
    /**
     * 触发后隐藏叠加层的延迟毫秒
     */
    delayHide: _propTypes2["default"].number,

    /**
     * @private
     */
    onClick: _propTypes2["default"].func,
    onClose: _propTypes2["default"].func,
    onCancel: _propTypes2["default"].func,

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
    show: _propTypes2["default"].bool,

    trigger: _propTypes2["default"].oneOfType([triggerType, _propTypes2["default"].arrayOf(triggerType)]),
    /**
     * @private
     */
    onBlur: _propTypes2["default"].func,
    /**
     * @private
     */
    onFocus: _propTypes2["default"].func,
    /**
     * @private
     */
    onMouseOut: _propTypes2["default"].func,
    /**
     * @private
     */
    onMouseOver: _propTypes2["default"].func
});

var defaultProps = {
    placement: 'right',
    clsPrefix: 'u-popover',
    rootClose: true,
    defaultOverlayShown: false
};

var Popover = function (_Component) {
    _inherits(Popover, _Component);

    function Popover(props, context) {
        _classCallCheck(this, Popover);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        _this._mountNode = null;

        _this.state = {
            show: props.defaultOverlayShown
        };

        _this.handleMouseOver = function (e) {
            return _this.handleMouseOverOut(_this.handleDelayedShow, e);
        };
        _this.handleMouseOut = function (e) {
            return _this.handleMouseOverOut(_this.handleDelayedHide, e);
        };
        return _this;
    }

    Popover.prototype.componentDidMount = function componentDidMount() {
        this._mountNode = document.createElement('div');
        !isReact16 && this.renderOverlay();
    };

    Popover.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.hasOwnProperty('show')) {
            if (nextProps.show) {
                this.handleShow();
            } else {
                this.handleHide();
            }
        }
    };

    Popover.prototype.componentDidUpdate = function componentDidUpdate() {
        !isReact16 && this.renderOverlay();
    };

    Popover.prototype.componentWillUnmount = function componentWillUnmount() {
        !isReact16 && _reactDom2["default"].unmountComponentAtNode(this._mountNode);
        this._mountNode = null;
    };

    // 简单实现mouseEnter和mouseLeave。
    // React的内置版本是有问题的：https://github.com/facebook/react/issues/4251
    //在触发器被禁用的情况下，mouseOut / Over可能导致闪烁
    //从一个子元素移动到另一个子元素。


    Popover.prototype.render = function render() {
        var _props = this.props,
            content = _props.content,
            children = _props.children,
            onClick = _props.onClick,
            trigger = _props.trigger,
            onBlur = _props.onBlur,
            onFocus = _props.onFocus,
            onMouseOut = _props.onMouseOut,
            onMouseOver = _props.onMouseOver,
            props = _objectWithoutProperties(_props, ['content', 'children', 'onClick', 'trigger', 'onBlur', 'onFocus', 'onMouseOut', 'onMouseOver']);

        delete props.delay;
        delete props.delayShow;
        delete props.delayHide;
        delete props.defaultOverlayShown;

        var _splitComponentProps = (0, _splitComponent2["default"])(props, _Overlay2["default"]),
            _splitComponentProps2 = _slicedToArray(_splitComponentProps, 2),
            overlayProps = _splitComponentProps2[0],
            confirmProps = _splitComponentProps2[1];

        var child = _react2["default"].Children.only(children);
        var childProps = child.props;

        var overlay = _react2["default"].createElement(
            _Content2["default"],
            _extends({ placement: props.placement }, confirmProps),
            content
        );

        var triggerProps = {
            'aria-describedby': overlay.props.id
        };

        // FIXME: 这里用于传递这个组件上的处理程序的逻辑是不一致的。我们不应该通过任何这些道具。

        triggerProps.onClick = (0, _createChainedFunction2["default"])(childProps.onClick, onClick);

        if (isOneOf('click', trigger)) {
            triggerProps.onClick = (0, _createChainedFunction2["default"])(triggerProps.onClick, this.handleToggle);
        }

        if (isOneOf('hover', trigger)) {

            triggerProps.onMouseOver = (0, _createChainedFunction2["default"])(childProps.onMouseOver, onMouseOver, this.handleMouseOver);
            triggerProps.onMouseOut = (0, _createChainedFunction2["default"])(childProps.onMouseOut, onMouseOut, this.handleMouseOut);
        }

        if (isOneOf('focus', trigger)) {
            triggerProps.onFocus = (0, _createChainedFunction2["default"])(childProps.onFocus, onFocus, this.handleDelayedShow);
            triggerProps.onBlur = (0, _createChainedFunction2["default"])(childProps.onBlur, onBlur, this.handleDelayedHide);
        }

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

    return Popover;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.handleToggle = function () {
        if (!_this2.state.show) {
            _this2.show();
        } else {
            _this2.hide();
        }
    };

    this.handleDelayedShow = function () {
        if (_this2._hoverHideDelay != null) {
            clearTimeout(_this2._hoverHideDelay);
            _this2._hoverHideDelay = null;
            return;
        }

        if (_this2.state.show || _this2._hoverShowDelay != null) {
            return;
        }

        var delay = _this2.props.delayShow != null ? _this2.props.delayShow : _this2.props.delay;

        if (!delay) {
            _this2.show();
            return;
        }

        _this2._hoverShowDelay = setTimeout(function () {
            _this2._hoverShowDelay = null;
            _this2.show();
        }, delay);
    };

    this.handleDelayedHide = function () {
        if (_this2._hoverShowDelay != null) {
            clearTimeout(_this2._hoverShowDelay);
            _this2._hoverShowDelay = null;
            return;
        }

        if (!_this2.state.show || _this2._hoverHideDelay != null) {
            return;
        }

        var delay = _this2.props.delayHide != null ? _this2.props.delayHide : _this2.props.delay;

        if (!delay) {
            _this2.hide();
            return;
        }

        _this2._hoverHideDelay = setTimeout(function () {
            _this2._hoverHideDelay = null;
            _this2.hide();
        }, delay);
    };

    this.handleMouseOverOut = function (handler, e) {
        var target = e.currentTarget;
        var related = e.relatedTarget || e.nativeEvent.toElement;

        if (!related || related !== target && !(0, _contains2["default"])(target, related)) {
            handler(e);
        }
    };

    this.handleHide = function () {
        if (_this2.state.show) {
            _this2.hide();
        }
    };

    this.handleShow = function () {
        if (!_this2.state.show) {
            _this2.show();
        }
    };

    this.show = function () {
        _this2.setState({ show: true });
    };

    this.hide = function () {
        var onHide = _this2.props.onHide;

        onHide && onHide();
        _this2.setState({ show: false });
    };

    this.makeOverlay = function (overlay, props) {
        return _react2["default"].createElement(
            _Overlay2["default"],
            _extends({}, props, {
                show: _this2.state.show,
                onHide: _this2.handleHide,
                target: _this2
            }),
            overlay
        );
    };

    this.renderOverlay = function () {
        _reactDom2["default"].unstable_renderSubtreeIntoContainer(_this2, _this2._overlay, _this2._mountNode);
    };
};

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

exports["default"] = Popover;
module.exports = exports['default'];