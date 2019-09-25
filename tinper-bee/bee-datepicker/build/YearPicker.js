"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _YearPanel = require("./rc-calendar/year/YearPanel");

var _YearPanel2 = _interopRequireDefault(_YearPanel);

var _tinperBeeCore = require("tinper-bee-core");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Picker = require("./rc-calendar/Picker");

var _Picker2 = _interopRequireDefault(_Picker);

var _beeFormControl = require("bee-form-control");

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _beeInputGroup = require("bee-input-group");

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _omit = require("omit.js");

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chief on 17/4/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//去掉focus报错
_Picker2["default"].prototype.componentDidUpdate = function () {};

var YearPicker = function (_Component) {
    _inherits(YearPicker, _Component);

    function YearPicker(props, context) {
        _classCallCheck(this, YearPicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        _this.state = {
            type: "year",
            value: props.value || props.defaultValue || '',
            open: props.open || false,
            showClose: false
        };
        return _this;
    }

    YearPicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ("value" in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
        if ("open" in nextProps) {
            this.setState({
                open: nextProps.open
            });
        }
        if ("renderIcon" in nextProps) {
            this.setState({
                renderIcon: nextProps.renderIcon
            });
        }
    };

    //阻止组件内部事件冒泡到组件外部容器


    YearPicker.prototype.render = function render() {
        var _this2 = this;

        var state = this.state;
        var props = this.props;

        var showClose = props.showClose,
            others = _objectWithoutProperties(props, ["showClose"]);

        var value = state.value;

        var Calendar = _react2["default"].createElement(_YearPanel2["default"], _extends({
            prefixCls: 'rc-calendar-picker',
            rootPrefixCls: 'rc-calendar'
        }, props, { focus: function focus() {},
            onSelect: this.onSelect,
            showDateInput: true
        }));
        var classes = (0, _classnames2["default"])(props.className, "datepicker-container");
        return _react2["default"].createElement(
            "div",
            _extends({ className: classes, onClick: this.stopPropagation, onMouseOver: this.stopPropagation
            }, (0, _omit2["default"])(others, ['closeIcon', 'renderIcon', 'disabled', 'format', 'locale', 'placeholder'])),
            _react2["default"].createElement(
                _Picker2["default"],
                _extends({
                    animation: "slide-up"
                }, props, {
                    onOpenChange: this.onOpenChange,
                    onChange: this.handleChange,
                    calendar: Calendar,
                    prefixCls: 'rc-calendar',
                    value: state.value || (0, _moment2["default"])(),
                    open: this.state.open
                }),
                function (_ref) {
                    _objectDestructuringEmpty(_ref);

                    return _react2["default"].createElement(
                        _beeInputGroup2["default"],
                        { simple: true, className: "datepicker-input-group",
                            onMouseEnter: _this2.onMouseEnter,
                            onMouseLeave: _this2.onMouseLeave
                        },
                        _react2["default"].createElement(_beeFormControl2["default"], {
                            ref: function ref(_ref2) {
                                return _this2.outInput = _ref2;
                            },
                            placeholder: _this2.props.placeholder,
                            className: _this2.props.className,
                            disabled: props.disabled,
                            readOnly: true,
                            value: value && value.format(props.format) || ""
                        }),
                        showClose && _this2.state.value && _this2.state.showClose && !props.disabled ? _react2["default"].createElement(
                            _beeInputGroup2["default"].Button,
                            { shape: "border",
                                onClick: _this2.clear },
                            props.closeIcon()
                        ) : _react2["default"].createElement(
                            _beeInputGroup2["default"].Button,
                            { shape: "border" },
                            props.renderIcon()
                        )
                    );
                }
            )
        );
    };

    return YearPicker;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onChange = function (value) {
        _this3.setState({
            value: value
        });
    };

    this.inputFocus = function () {
        var self = _this3;
        var input = document.querySelector('.rc-calendar-input');
        if (input) {
            if (input.value) {
                input.select();
            } else {
                input.focus();
            }
            input.onkeydown = function (e) {
                if (e.keyCode == _tinperBeeCore.KeyCode.DELETE) {
                    input.value = '';
                    self.props.onChange && self.props.onChange('', '');
                } else if (e.keyCode == _tinperBeeCore.KeyCode.ESC) {
                    self.setState({
                        open: false
                    });
                    var v = self.state.value;
                    self.props.onOpenChange && self.props.onOpenChange(false, v, v && v.format(self.props.format) || '');
                    _reactDom2["default"].findDOMNode(self.outInput).focus(); // 按esc时候焦点回到input输入框
                }
            };
        }
    };

    this.onOpenChange = function (open) {
        var self = _this3;
        _this3.setState({
            open: open
        });
        if (open) {
            setTimeout(function () {
                self.inputFocus();
            }, 200);
        }
    };

    this.handleChange = function (value) {
        var props = _this3.props;
        _this3.setState({
            value: value && _extends(value, { _type: 'year' }) || value
        });
        props.onChange && props.onChange(value, value && value.format(props.format) || '');
    };

    this.onMouseLeave = function (e) {
        _this3.setState({
            showClose: false
        });
    };

    this.onMouseEnter = function (e) {
        _this3.setState({
            showClose: true
        });
    };

    this.clear = function (e) {
        e.stopPropagation();
        _this3.setState({
            value: ''
        });
        _this3.props.onChange && _this3.props.onChange('', '');
    };

    this.onSelect = function (value) {
        var _props = _this3.props,
            onSelect = _props.onSelect,
            format = _props.format;

        _this3.setState({
            open: false
        });
        onSelect && onSelect(value, value ? value.format(format) : '');
        _reactDom2["default"].findDOMNode(_this3.outInput).focus();
    };

    this.stopPropagation = function (e) {
        e.stopPropagation();
    };
};

YearPicker.defaultProps = {
    closeIcon: function closeIcon() {
        return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-close-c" });
    },
    renderIcon: function renderIcon() {
        return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-calendar" });
    },
    disabled: false,
    showClose: true,
    format: 'YYYY'
};

exports["default"] = YearPicker;
module.exports = exports["default"];