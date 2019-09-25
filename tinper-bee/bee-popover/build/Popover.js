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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createChainedFunction = require('tinper-bee-core/lib/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _splitComponent = require('tinper-bee-core/lib/splitComponent');

var _splitComponent2 = _interopRequireDefault(_splitComponent);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Overlay = require('bee-overlay/build/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _beeTooltip = require('bee-tooltip');

var _beeTooltip2 = _interopRequireDefault(_beeTooltip);

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

    id: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    // FIXME: This should be `defaultShow`.
    /**
     * 覆盖的初始可见性状态。对于更细微的可见性控制，请考虑直接使用覆盖组件。
     */
    defaultOverlayShown: _propTypes2["default"].bool,
    /**
     * 弹出框标题
     */
    title: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].string]),
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
    onHide: _propTypes2["default"].func,
    /**
     * @private
     */
    show: _propTypes2["default"].bool,

    trigger: _propTypes2["default"].oneOfType([triggerType, _propTypes2["default"].arrayOf(triggerType)]),
    /**
     * @private
     */
    rootClose: _propTypes2["default"].bool,
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

        var visible = void 0;
        if ('show' in props) {
            visible = !!props.show;
        } else {
            visible = !!props.defaultOverlayShown;
        }
        _this.state = {
            show: visible
        };
        return _this;
    }

    Popover.prototype.componentDidMount = function componentDidMount() {
        this._mountNode = document.createElement('div');
    };

    Popover.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if ('show' in this.props && prevProps.show !== this.props.show) {
            this.setState({
                show: this.props.show
            });
        }
    };

    Popover.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            id = _props.id,
            clsPrefix = _props.clsPrefix,
            className = _props.className,
            content = _props.content,
            title = _props.title,
            children = _props.children,
            onClick = _props.onClick,
            trigger = _props.trigger,
            onBlur = _props.onBlur,
            onFocus = _props.onFocus,
            onMouseOut = _props.onMouseOut,
            onMouseOver = _props.onMouseOver,
            positionTop = _props.positionTop,
            positionLeft = _props.positionLeft,
            rootClose = _props.rootClose,
            defaultOverlayShown = _props.defaultOverlayShown,
            container = _props.container,
            show = _props.show,
            props = _objectWithoutProperties(_props, ['id', 'clsPrefix', 'className', 'content', 'title', 'children', 'onClick', 'trigger', 'onBlur', 'onFocus', 'onMouseOut', 'onMouseOver', 'positionTop', 'positionLeft', 'rootClose', 'defaultOverlayShown', 'container', 'show']);

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
            _extends({ placement: props.placement }, confirmProps, { title: title, id: 'u-popover-content' }),
            content
        );

        var triggerProps = {
            'aria-describedby': overlay.props.id
        };

        // FIXME: 这里用于传递这个组件上的处理程序的逻辑是不一致的。我们不应该通过任何这些道具。

        triggerProps.onClick = (0, _createChainedFunction2["default"])(childProps.onClick, onClick);

        this._overlay = this.makeOverlay(overlay, overlayProps);

        triggerProps.key = 'overlay';

        var portal = _react2["default"].createElement(
            _beeTooltip2["default"],
            _extends({}, props, {
                className: (0, _classnames2["default"])(className, clsPrefix, 'u-popover-tooltip'),
                id: id,
                inverse: true,
                overlay: this._overlay,
                trigger: trigger,
                placement: props.placement,
                container: container,
                positionTop: positionTop,
                positionLeft: positionLeft,
                rootClose: rootClose,
                defaultOverlayShown: defaultOverlayShown,
                onVisibleChange: this.onVisibleChange,
                onHide: function onHide() {
                    return _this2.hide(false);
                }
            }),
            this.props.children
        );

        return 'show' in this.props ? (0, _react.cloneElement)(portal, {
            visible: this.state.show
        }) : portal;
    };

    return Popover;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.makeOverlay = function (overlay, props) {
        return _react2["default"].createElement(
            'div',
            null,
            overlay
        );
    };

    this.onVisibleChange = function (visible) {
        var onVisibleChange = _this3.props.onVisibleChange;

        if (!visible) {
            _this3.hide(visible);
        }
        onVisibleChange && onVisibleChange(visible);
    };

    this.hide = function (visible) {
        var onHide = _this3.props.onHide;

        onHide && onHide(visible);
    };
};

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

exports["default"] = Popover;
module.exports = exports['default'];