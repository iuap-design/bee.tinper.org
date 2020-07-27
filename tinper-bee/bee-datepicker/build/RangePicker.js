"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _RangeCalendar = require("./rc-calendar/RangeCalendar");

var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);

var _Panel = require("rc-time-picker/lib/Panel");

var _Panel2 = _interopRequireDefault(_Panel);

var _beeFormControl = require("bee-form-control");

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _Picker = require("./rc-calendar/Picker");

var _Picker2 = _interopRequireDefault(_Picker);

var _beeInputGroup = require("bee-input-group");

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _tinperBeeCore = require("tinper-bee-core");

var _util = require("./rc-calendar/util");

var _zh_CN = require("./locale/zh_CN");

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _omit = require("omit.js");

var _omit2 = _interopRequireDefault(_omit);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

require("moment/locale/zh-cn");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chief on 17/4/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// function formatDate(value,format) {
//     if (!value) {
//         return '';
//       }

//       if (Array.isArray(format)) {
//         format = format[0];
//       }

//       return value.formatDate(format);
// }

var fullFormat = "YYYY-MM-DD";

var cn = typeof window !== 'undefined' ? location.search.indexOf("cn") !== -1 : true;

var now = (0, _moment2["default"])();

function isValidRange(v) {
    return v && v[0] && v[1];
}

if (cn) {
    now.locale("zh-cn").utcOffset(8);
} else {
    now.locale("en-gb").utcOffset(0);
}

var RangePicker = function (_Component) {
    _inherits(RangePicker, _Component);

    function RangePicker(props, context) {
        _classCallCheck(this, RangePicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        _this.state = {
            hoverValue: [],
            value: _this.initValue(props),
            open: props.open || false
        };
        return _this;
    }

    RangePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ("value" in nextProps) {
            this.setState({
                value: this.initValue(nextProps)
            });
        }
        if ("open" in nextProps) {
            this.setState({
                open: nextProps.open
            });
        }
        this.setState({
            renderIcon: nextProps.renderIcon
        });
    };
    //判断value是否为空

    //日期面板中输入框的失焦事件


    RangePicker.prototype.render = function render() {
        var _this2 = this;

        var props = this.props;

        var showClose = props.showClose,
            onChange = props.onChange,
            showHour = props.showHour,
            showMinute = props.showMinute,
            showSecond = props.showSecond,
            others = _objectWithoutProperties(props, ["showClose", "onChange", "showHour", "showMinute", "showSecond"]);

        var _state = this.state,
            value = _state.value,
            open = _state.open;

        var formatStr = props.format || 'YYYY-MM-DD';
        var timePickerElement = _react2["default"].createElement(_Panel2["default"], {
            showHour: showHour, showMinute: showMinute, showSecond: showSecond,
            defaultValue: (0, _moment2["default"])((0, _moment2["default"])().format("HH:mm:ss"), "HH:mm:ss") });
        var calendar = _react2["default"].createElement(_RangeCalendar2["default"], {
            hoverValue: this.state.hoverValue,
            onHoverChange: this.onHoverChange,
            showWeekNumber: false,
            format: formatStr,
            dateInputPlaceholder: props.dateInputPlaceholder || ['start', 'end'],
            locale: props.locale || _zh_CN2["default"],
            onChange: this.handleCalendarChange,
            disabledDate: props.disabledDate,
            showClear: props.showClear,
            showOk: props.showOk,
            showToday: props.showToday,
            renderFooter: props.renderFooter,
            timePicker: props.showTime ? timePickerElement : null,
            renderError: props.renderError,
            onStartInputBlur: this.onStartInputBlur,
            onEndInputBlur: this.onEndInputBlur,
            onClear: this.clear,
            onOk: this.onOk,
            validatorFunc: props.validatorFunc
        });
        return _react2["default"].createElement(
            "div",
            (0, _omit2["default"])(others, ['closeIcon', 'renderIcon', 'showClear', 'showToday', 'locale', 'placeholder', 'showOk', 'dateInputPlaceholder', 'onPanelChange', 'onStartInputBlur', 'onEndInputBlur', 'renderFooter', 'showTime', 'disabledDate', 'disabledTime']),
            _react2["default"].createElement(
                _Picker2["default"],
                _extends({}, props, {
                    value: value,
                    animation: 'animation' in props ? props.animation : "slide-up",
                    calendar: calendar,
                    disabled: props.disabled,
                    dropdownClassName: props.dropdownClassName,
                    onOpenChange: this.onOpenChange,
                    open: open,
                    onChange: this.onChange
                }),
                function (_ref) {
                    _objectDestructuringEmpty(_ref);

                    return _react2["default"].createElement(
                        "div",
                        { className: (0, _classnames2["default"])('calendar-picker', 'u-input-group', 'simple', props.className),
                            onMouseEnter: _this2.onMouseEnter,
                            onMouseLeave: _this2.onMouseLeave
                        },
                        _react2["default"].createElement(_beeFormControl2["default"], {
                            placeholder: _this2.props.placeholder ? _this2.props.placeholder : 'start ~ end',
                            value: isValidRange(value) && (0, _util.formatDate)(value[0], formatStr) + " ~ " + (0, _util.formatDate)(value[1], formatStr) || '',
                            disabled: props.disabled,
                            onFocus: function onFocus(v, e) {
                                _this2.outInputFocus(e);
                            }
                        }),
                        showClose && !_this2.valueIsEmpty(value) && _this2.state.showClose && !props.disabled ? _react2["default"].createElement(
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

    return RangePicker;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.initValue = function (props) {
        var valueProp = props.value || props.defaultValue || [];
        var values = [];
        for (var i = 0; i < 2; i++) {
            var value = valueProp[i] || '';
            if (value) {
                if (typeof value == 'string') {
                    if ((0, _moment2["default"])(value).isValid()) {
                        values.push((0, _moment2["default"])(value));
                    } else {
                        console.error('value is not in the correct format');
                        values.push('');
                    }
                } else if (value.format && value.isValid()) {
                    values.push(value);
                } else {
                    console.error('value is not in the correct format');
                    values = [];
                }
            } else {
                values.push('');
            }
        }
        return values;
    };

    this.clearHoverValue = function () {
        return _this3.setState({ hoverValue: [] });
    };

    this.onChange = function (value) {
        var props = _this3.props;
        var formatStr = props.format || 'YYYY-MM-DD';
        if (value.length < 2) {
            return;
        }
        _this3.setState({
            value: value
        });

        //传入value和dateString
        if (props.onChange && isValidRange(value) || value.length == 0) {
            if (value.length > 0) {
                props.onChange(value, "[\"" + (0, _util.formatDate)(value[0], formatStr) + "\" , \"" + (0, _util.formatDate)(value[1], formatStr) + "\"]", ["" + (0, _util.formatDate)(value[0], formatStr), "" + (0, _util.formatDate)(value[1], formatStr)]);
            } else {
                props.onChange(null);
            }
        } else {
            props.onPanelChange && props.onPanelChange(value);
        }
    };

    this.onHoverChange = function (hoverValue) {
        _this3.setState({ hoverValue: hoverValue });
        _this3.props.onHoverChange && _this3.props.onHoverChange(hoverValue);
    };

    this.remove = function (e) {
        _this3.setState({ value: '' });
    };

    this.handleCalendarChange = function (value) {};

    this.onMouseLeave = function (e) {
        _this3.setState({
            showClose: false
        });
    };

    this.onMouseEnter = function (e) {
        if (!_this3.valueIsEmpty(_this3.state.value)) {
            _this3.setState({
                showClose: true
            });
        }
    };

    this.valueIsEmpty = function (value) {
        if (value) {
            if (value.length == 0) {
                return true;
            } else {
                //value.length>0
                var flag = true;
                if (value[0] || value[1]) flag = false;
                return flag;
            }
        } else {
            return true;
        }
    };

    this.clear = function (e) {
        e && e.stopPropagation && e.stopPropagation();
        _this3.setState({
            value: []
        });
        _this3.props.onChange && _this3.props.onChange([], []);
        _this3.props.onFormControlClear && _this3.props.onFormControlClear();
    };

    this.onOpenChange = function (open) {
        var props = _this3.props;
        var self = _this3;
        // let {value} = this.state;
        // if(!isValidRange(value)){
        //     debugger
        // }
        if (open === false) {
            _this3.clearHoverValue();
        }

        _this3.setState({
            open: open
        }, function () {
            if (open) {
                setTimeout(function () {
                    self.inputFocus();
                }, 0);
            }
        });
        props.onOpenChange && props.onOpenChange(open);
        if (open) {
            setTimeout(function () {
                self.inputFocus();
            }, 200);
        }
    };

    this.outInputFocus = function (e) {
        if (_this3.props.hasOwnProperty('open')) e.stopPropagation();
        _this3.props.outInputFocus && _this3.props.outInputFocus(e);
    };

    this.inputFocus = function () {
        var inputs = document.querySelectorAll('.rc-calendar-input');
        if (!inputs) {
            return;
        }
        if (inputs[0].value) {
            inputs[0].select();
        } else {
            inputs[0].focus();
        }
        inputs[0].onkeydown = _this3.keydownLeft;
        inputs[1].onkeydown = _this3.keydownRight;
    };

    this.keydownLeft = function (e) {
        var inputs = document.querySelectorAll('.rc-calendar-input');
        if (e.keyCode == _tinperBeeCore.KeyCode.ESC) {
            _this3.setState({
                open: false
            });
            _this3.props.onOpenChange(false, v, v && _this3.getValue(v) || '');
        }
        if (e.keyCode == _tinperBeeCore.KeyCode.RIGHT || e.keyCode == _tinperBeeCore.KeyCode.LEFT) {
            inputs[1].focus();
        }
    };

    this.keydownRight = function (e) {
        var inputs = document.querySelectorAll('.rc-calendar-input');
        if (e.keyCode == _tinperBeeCore.KeyCode.ESC) {
            _this3.setState({
                open: false
            });
            _this3.props.onOpenChange(false, v, v && _this3.getValue(v) || '');
        }
        if (e.keyCode == _tinperBeeCore.KeyCode.LEFT || e.keyCode == _tinperBeeCore.KeyCode.RIGHT) {
            inputs[0].focus();
        }
    };

    this.onStartInputBlur = function (e) {
        var inputs = document.querySelectorAll('.rc-calendar-input');
        var startValue = void 0,
            endValue = void 0;
        if (inputs) {
            startValue = inputs[0].value ? inputs[0].value : '';
            endValue = inputs[1].value ? inputs[1].value : '';
        }
        _this3.props.onStartInputBlur && _this3.props.onStartInputBlur(e, startValue, "[\"" + startValue + "\" , \"" + endValue + "\"]");
    };

    this.onEndInputBlur = function (e) {
        var inputs = document.querySelectorAll('.rc-calendar-input');
        var startValue = void 0,
            endValue = void 0;
        if (inputs) {
            startValue = inputs[0].value ? inputs[0].value : '';
            endValue = inputs[1].value ? inputs[1].value : '';
        }
        _this3.props.onEndInputBlur && _this3.props.onEndInputBlur(e, endValue, "[\"" + startValue + "\" , \"" + endValue + "\"]");
    };

    this.onOk = function (value) {
        _this3.props.onOk && _this3.props.onOk(value);
    };
};

RangePicker.defaultProps = {
    closeIcon: function closeIcon() {
        return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-close-c" });
    },
    renderIcon: function renderIcon() {
        return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-calendar" });
    },
    locale: _zh_CN2["default"],
    showClear: true,
    showToday: true,
    showOk: true,
    showClose: true,
    showSecond: true,
    showHour: true,
    showMinute: true,
    validatorFunc: function validatorFunc() {
        return true;
    }
};

exports["default"] = RangePicker;
module.exports = exports["default"];