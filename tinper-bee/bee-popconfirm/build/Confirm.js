'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinperBeeCore = require('tinper-bee-core');

var _tool = require('bee-locale/build/tool');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {

    /**
     * Sets the direction the Popover is positioned towards.
     */
    placement: _propTypes2["default"].oneOf(['top', 'right', 'bottom', 'left']),

    secondPlacement: _propTypes2["default"].oneOf(['top', 'right', 'bottom', 'left']),
    renderPlacement: _propTypes2["default"].oneOf(['top', 'right', 'bottom', 'left']),
    /**
     * The "top" position value for the Popover.
     */
    positionTop: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    /**
     * The "left" position value for the Popover.
     */
    positionLeft: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),

    /**
     * The "top" position value for the Popover arrow.
     */
    arrowOffsetTop: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    /**
     * The "left" position value for the Popover arrow.
     */
    arrowOffsetLeft: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),

    /**
     * 阻止冒泡
     */
    stopbubble: _propTypes2["default"].number,

    /**
    * 关闭按钮
    */
    close_btn: _propTypes2["default"].oneOfType([_tinperBeeCore.componentOrElement, _propTypes2["default"].func]),

    /**
    * 取消按钮
    */
    cancel_btn: _propTypes2["default"].oneOfType([_tinperBeeCore.componentOrElement, _propTypes2["default"].func]),

    /**
     * Title content
     */
    title: _propTypes2["default"].node,
    onClose: _propTypes2["default"].func,
    onCancel: _propTypes2["default"].func,
    color: _propTypes2["default"].oneOf(['dark'])
};

var defaultProps = {
    stopbubble: 0,
    placement: 'right',
    clsPrefix: 'u-popconfirm',
    locale: {}
};

var Confirm = function (_React$Component) {
    _inherits(Confirm, _React$Component);

    function Confirm(props) {
        _classCallCheck(this, Confirm);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.cancel = function (e) {
            var _this$props = _this.props,
                stopbubble = _this$props.stopbubble,
                onCancel = _this$props.onCancel;

            stopbubble && e.stopPropagation();
            onCancel(e);
        };

        _this.close = function (e) {
            var _this$props2 = _this.props,
                stopbubble = _this$props2.stopbubble,
                onClose = _this$props2.onClose;

            stopbubble && e.stopPropagation();
            onClose(e);
        };

        return _this;
    }

    Confirm.prototype.render = function render() {
        var _classes;

        var _props = this.props,
            placement = _props.placement,
            positionTop = _props.positionTop,
            positionLeft = _props.positionLeft,
            arrowOffsetTop = _props.arrowOffsetTop,
            arrowOffsetLeft = _props.arrowOffsetLeft,
            clsPrefix = _props.clsPrefix,
            trigger = _props.trigger,
            title = _props.title,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            locale = _props.locale,
            onClose = _props.onClose,
            color = _props.color,
            onCancel = _props.onCancel,
            stopbubble = _props.stopbubble,
            secondPlacement = _props.secondPlacement,
            renderPlacement = _props.renderPlacement,
            cancel_btn = _props.cancel_btn,
            close_btn = _props.close_btn,
            props = _objectWithoutProperties(_props, ['placement', 'positionTop', 'positionLeft', 'arrowOffsetTop', 'arrowOffsetLeft', 'clsPrefix', 'trigger', 'title', 'className', 'style', 'children', 'locale', 'onClose', 'color', 'onCancel', 'stopbubble', 'secondPlacement', 'renderPlacement', 'cancel_btn', 'close_btn']);

        var local = (0, _tool.getComponentLocale)(this.props, this.context, 'Popconfirm', function () {
            return _i18n2["default"];
        });

        //const [bsProps, elementProps] = splitBsProps(props);

        var lastPlacement = null;
        if ("secondPlacement" in this.props && secondPlacement && renderPlacement) {
            lastPlacement = renderPlacement;
        } else {
            lastPlacement = placement;
        }
        var inversePlacement = null;
        if (className.includes('inverse-arrow')) {
            switch (lastPlacement) {
                case 'top':
                    inversePlacement = 'bottom';
                    break;
                case 'left':
                    inversePlacement = 'right';
                    break;
                case 'right':
                    inversePlacement = 'left';
                    break;
                case 'bottom':
                    inversePlacement = 'top';
                    break;
            }
        } else {
            inversePlacement = lastPlacement;
        }
        var resPlacement = inversePlacement ? inversePlacement : placement;
        var classes = (_classes = {}, _defineProperty(_classes, '' + clsPrefix, true), _defineProperty(_classes, resPlacement, true), _defineProperty(_classes, clsPrefix + '-' + color, color), _classes);

        var outerStyle = _extends({
            display: 'block',
            top: positionTop,
            left: positionLeft
        }, style);

        var arrowStyle = {
            top: arrowOffsetTop,
            left: arrowOffsetLeft
        };

        return _react2["default"].createElement(
            'div',
            _extends({}, props, {
                role: 'tooltip',
                className: (0, _classnames2["default"])(className, classes),
                style: outerStyle,
                onClick: function onClick(e) {
                    return stopbubble && e.stopPropagation();
                }
            }),
            _react2["default"].createElement('div', { className: 'arrow', style: arrowStyle }),
            _react2["default"].createElement(
                'div',
                { className: (0, _classnames2["default"])(clsPrefix + '-content') },
                children
            ),
            _react2["default"].createElement(
                'div',
                { className: (0, _classnames2["default"])(clsPrefix + '-confirm') },
                cancel_btn ? (0, _react.cloneElement)(cancel_btn, _extends({}, cancel_btn.props, {
                    onClick: this.cancel
                })) : _react2["default"].createElement(
                    _beeButton2["default"],
                    { onClick: this.cancel, size: 'sm', style: { minWidth: 50 },
                        shape: 'border' },
                    local['cancel']
                ),
                close_btn ? (0, _react.cloneElement)(close_btn, _extends({}, close_btn.props, {
                    onClick: this.close
                })) : _react2["default"].createElement(
                    _beeButton2["default"],
                    { onClick: this.close, size: 'sm', style: { minWidth: 50 }, colors: 'primary' },
                    local['ok']
                )
            )
        );
    };

    return Confirm;
}(_react2["default"].Component);

Confirm.propTypes = propTypes;
Confirm.defaultProps = defaultProps;
Confirm.contextTypes = {
    beeLocale: _propTypes2["default"].object
};

exports["default"] = Confirm;
module.exports = exports['default'];