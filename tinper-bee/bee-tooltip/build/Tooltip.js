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

var _OverlayTrigger = require('bee-overlay/build/OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    /**
     * @required
     */
    id: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
    inverse: _propTypes2["default"].bool,
    visible: _propTypes2["default"].bool,
    onVisibleChange: _propTypes2["default"].func,
    /**
     * 相对目标元素显示上下左右的位置
     */
    placement: _propTypes2["default"].oneOf(['top', 'right', 'bottom', 'left', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']),

    /**
     * 绝对定位上边距.
     */
    positionTop: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    /**
     * 绝对定位左边距
     */
    positionLeft: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),

    /**
     * 与目标Top的距离
     */
    arrowOffsetTop: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    /**
     * 与目标Left的距离
     */
    arrowOffsetLeft: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string])
};

var defaultProps = {
    placement: 'right',
    clsPrefix: 'u-tooltip'
};
function OverlayNode(props) {
    var id = props.id,
        className = props.className,
        classNames = props.classNames,
        style = props.style,
        overlay = props.overlay,
        overlayStyle = props.overlayStyle,
        otherProps = props.otherProps;
    // style 包含用户传入的自定义样式，以及 bee-overlay 计算返回的样式。
    // overlayStyle 是用户传入的自定义样式。

    if (overlayStyle && overlayStyle.width) {
        style.width = overlayStyle.width;
    } else {
        delete style.width;
    }
    return _react2["default"].createElement(
        'div',
        _extends({
            id: id,
            role: 'tooltip',
            className: (0, _classnames2["default"])(className, classNames),
            onMouseEnter: props.onMouseEnter,
            onMouseLeave: props.onMouseLeave,
            style: style
        }, otherProps),
        overlay ? _react2["default"].createElement('div', { className: 'tooltip-arrow' }) : '',
        overlay ? _react2["default"].createElement(
            'div',
            { className: 'tooltip-inner' },
            overlay
        ) : ''
    );
}

var Tooltip = function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip(props) {
        _classCallCheck(this, Tooltip);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.onMouseEnter = function () {
            var trigger = _this.props.trigger;

            if (trigger === 'click') return;
            _this.setState({
                isHoverShow: true
            });
        };

        _this.onMouseLeave = function () {
            var trigger = _this.props.trigger;

            if (trigger === 'click') return;
            _this.setState({
                isHoverShow: false
            });
        };

        _this.handleOnHide = function () {
            var onHide = _this.props.onHide;

            onHide && onHide(false);
        };

        var initState = {
            isHoverShow: false
        };
        if ('visible' in props) {
            _extends(initState, {
                visible: props.visible
            });
        }
        _this.state = initState;
        return _this;
    }

    Tooltip.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var visible = this.props.visible;

        if ('visible' in this.props && prevProps.visible !== visible) {
            this.setState({
                visible: visible
            });
        }
    };

    /**
     * @desc 鼠标划入时候的事件
     */


    /**
     * @desc 鼠标划出时候的事件
     */


    Tooltip.prototype.render = function render() {
        var _classes,
            _this2 = this;

        var _props = this.props,
            placement = _props.placement,
            id = _props.id,
            arrowOffsetTop = _props.arrowOffsetTop,
            arrowOffsetLeft = _props.arrowOffsetLeft,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            clsPrefix = _props.clsPrefix,
            overlay = _props.overlay,
            inverse = _props.inverse,
            trigger = _props.trigger,
            onVisibleChange = _props.onVisibleChange,
            onHide = _props.onHide,
            rootClose = _props.rootClose,
            visible = _props.visible,
            defaultOverlayShown = _props.defaultOverlayShown,
            positionTop = _props.positionTop,
            positionLeft = _props.positionLeft,
            others = _objectWithoutProperties(_props, ['placement', 'id', 'arrowOffsetTop', 'arrowOffsetLeft', 'className', 'style', 'children', 'clsPrefix', 'overlay', 'inverse', 'trigger', 'onVisibleChange', 'onHide', 'rootClose', 'visible', 'defaultOverlayShown', 'positionTop', 'positionLeft']);

        var classes = (_classes = {}, _defineProperty(_classes, placement, true), _defineProperty(_classes, 'inverse', inverse), _classes);

        var arrowStyle = {
            top: arrowOffsetTop,
            left: arrowOffsetLeft
        };

        var classNames = (0, _classnames2["default"])(clsPrefix, classes);

        var overlayNode = _react2["default"].createElement(OverlayNode, {
            id: id,
            className: className,
            classNames: classNames,
            overlay: overlay,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
            style: style,
            overlayStyle: style // 用户自定义样式
            , arrowOffsetTop: arrowOffsetTop,
            arrowOffsetLeft: arrowOffsetLeft,
            otherProps: others
        });
        return 'visible' in this.props ? _react2["default"].createElement(
            _OverlayTrigger2["default"],
            _extends({}, others, {
                visible: this.state.visible,
                onVisibleChange: onVisibleChange,
                ref: function ref(_ref) {
                    return _this2.trigger = _ref;
                },
                shouldUpdatePosition: true,
                placement: placement,
                overlay: overlayNode,
                onHide: this.handleOnHide,
                rootClose: rootClose,
                defaultOverlayShown: defaultOverlayShown,
                positionTop: positionTop,
                positionLeft: positionLeft,
                trigger: trigger
            }),
            children
        ) : _react2["default"].createElement(
            _OverlayTrigger2["default"],
            _extends({}, others, {
                isHoverShow: this.state.isHoverShow,
                onVisibleChange: onVisibleChange,
                ref: function ref(_ref2) {
                    return _this2.trigger = _ref2;
                },
                shouldUpdatePosition: true,
                placement: placement,
                overlay: overlayNode,
                onHide: this.handleOnHide,
                rootClose: rootClose,
                defaultOverlayShown: defaultOverlayShown,
                positionTop: positionTop,
                positionLeft: positionLeft,
                trigger: trigger
            }),
            children
        );
    };

    return Tooltip;
}(_react2["default"].Component);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

exports["default"] = Tooltip;
module.exports = exports['default'];