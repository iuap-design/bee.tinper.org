'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeInputGroup = require('bee-input-group');

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

var _beeFormControl = require('bee-form-control');

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    max: _propTypes2["default"].number,
    min: _propTypes2["default"].number,
    step: _propTypes2["default"].number,
    autoWidth: _propTypes2["default"].bool,
    precision: _propTypes2["default"].number,
    format: _propTypes2["default"].func,
    delay: _propTypes2["default"].number,
    disabled: _propTypes2["default"].bool,
    toThousands: _propTypes2["default"].bool,
    toNumber: _propTypes2["default"].bool //回调函数内的值是否转换为数值类型
};

var defaultProps = {
    value: "",
    step: 1,
    clsPrefix: 'u-input-number',
    iconStyle: 'double',
    autoWidth: false,
    delay: 300,
    toNumber: false
};

/**
 * 校验value
 * @param {*} props 
 * @param {原来的值} oldValue 
 */
function judgeValue(props, oldValue) {
    var currentValue = void 0;
    var currentMinusDisabled = false;
    var currentPlusDisabled = false;
    var value = props.value,
        min = props.min,
        max = props.max,
        precision = props.precision,
        onChange = props.onChange;

    if (value != undefined) {
        if (value === '') {
            currentValue = '';
            return {
                value: '',
                minusDisabled: false,
                plusDisabled: false
            };
        } else {
            currentValue = Number(value) || 0;
        }
    } else if (min && value != '') {
        currentValue = min;
    } else if (value === '0' || value === 0) {
        currentValue = 0;
    } else {
        //NaN
        if (oldValue || oldValue === 0 || oldValue === '0') {
            currentValue = oldValue;
        } else {
            //value为空
            return {
                value: '',
                minusDisabled: false,
                plusDisabled: false
            };
        }
    }
    if (currentValue == -Infinity) {
        return {
            value: min,
            minusDisabled: true,
            plusDisabled: false
        };
    }
    if (currentValue == Infinity) {
        return {
            value: max,
            minusDisabled: false,
            plusDisabled: true
        };
    }
    if (currentValue <= min) {
        currentMinusDisabled = true;
        currentValue = min;
    }
    if (currentValue >= max) {
        currentPlusDisabled = true;
        currentValue = max;
    }

    if (props.hasOwnProperty('precision')) {
        currentValue = Number(currentValue).toFixed(precision);
    }

    return {
        value: currentValue,
        minusDisabled: currentMinusDisabled,
        plusDisabled: currentPlusDisabled
    };
}
/**
 * 千分符
 * @param {要转换的数据} num 
 */
function toThousands(number) {
    if (number === '') return '';
    if (number === '0') return '0';
    var num = (number || 0).toString();
    var integer = num.split('.')[0];
    var decimal = num.split('.')[1] || '';
    var result = '';
    while (integer.length > 3) {
        result = ',' + integer.slice(-3) + result;
        integer = integer.slice(0, integer.length - 3);
    }
    if (integer) {
        result = integer + result;
        if (num == '.' || num.indexOf('.') == num.length - 1) {
            result = result + '.' + decimal;
        } else if (decimal) {
            result = result + '.' + decimal;
        }
    }
    return result;
}

function unThousands(number) {
    number = (number || 0).toString();
    return number.replace(/\,/g, '');
}

var InputNumber = function (_Component) {
    _inherits(InputNumber, _Component);

    function InputNumber(props) {
        _classCallCheck(this, InputNumber);

        // 初始化状态，加减按钮是否可用，根据当前值判断

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleChange = function (value) {
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                toNumber = _this$props.toNumber,
                max = _this$props.max,
                min = _this$props.min;

            if (value === '') {
                onChange && onChange(value);
                _this.setState({
                    value: value
                });
                return;
            }
            value = unThousands(value);
            if (Number(value) > max) return;
            if (Number(value) < min) return;
            if (isNaN(value) && value != '.') return;
            _this.setState({
                value: value,
                showValue: toThousands(value)
            });
            if (value == '.' || value.indexOf('.') == value.length - 1) {
                //当输入小数点的时候
                onChange && onChange(value);
            } else if (value[value.indexOf('.') + 1] == 0) {
                //当输入 d.0 的时候，不转换Number
                onChange && onChange(value);
            } else {
                toNumber ? onChange && onChange(Number(value)) : onChange && onChange(value);
            }
        };

        _this.handleFocus = function (value, e) {
            _this.focus = true;
            var _this$props2 = _this.props,
                onFocus = _this$props2.onFocus,
                min = _this$props2.min,
                max = _this$props2.max;

            onFocus && onFocus(value);
        };

        _this.handleBlur = function (v) {
            _this.focus = false;
            var _this$props3 = _this.props,
                onBlur = _this$props3.onBlur,
                precision = _this$props3.precision,
                onChange = _this$props3.onChange,
                toNumber = _this$props3.toNumber;

            if (v === '') {
                _this.setState({
                    value: v
                });
                onBlur && onBlur(v);
                onChange && onChange(v);
                return;
            }
            v = unThousands(v);
            var value = Number(v);
            if (_this.props.hasOwnProperty('precision')) {
                value = value.toFixed(precision);
            }
            _this.setState({
                value: value,
                showValue: toThousands(value)
            });
            _this.detailDisable(value);
            if (toNumber) {
                onBlur && onBlur(Number(value));
                onChange && onChange(Number(value));
            } else {
                onBlur && onBlur(value);
                onChange && onChange(value);
            }
        };

        _this.detailDisable = function (value) {
            var _this$props4 = _this.props,
                max = _this$props4.max,
                min = _this$props4.min,
                step = _this$props4.step;


            if (value >= max || Number(value) + Number(step) > max) {
                _this.setState({
                    plusDisabled: true
                });
            } else {
                _this.setState({
                    plusDisabled: false
                });
            }
            if (value <= min || value - step < min) {
                _this.setState({
                    minusDisabled: true
                });
            } else {
                _this.setState({
                    minusDisabled: false
                });
            }
        };

        _this.minus = function (value) {
            var _this$props5 = _this.props,
                min = _this$props5.min,
                max = _this$props5.max,
                step = _this$props5.step,
                onChange = _this$props5.onChange,
                toNumber = _this$props5.toNumber;


            if (typeof min === "undefined") {
                value = _this.detail(value, step, 'reduce');
            } else {
                if (value < min) {
                    value = min;
                } else {
                    var reducedValue = _this.detail(value, step, 'reduce');
                    if (reducedValue >= min) {
                        value = reducedValue;
                    }
                }
            }

            if (value > max) {
                value = max;
            }

            _this.setState({
                value: value,
                showValue: toThousands(value)
            });
            toNumber ? onChange && onChange(Number(value)) : onChange && onChange(value);
            _this.detailDisable(value);
        };

        _this.plus = function (value) {
            var _this$props6 = _this.props,
                max = _this$props6.max,
                min = _this$props6.min,
                step = _this$props6.step,
                onChange = _this$props6.onChange,
                toNumber = _this$props6.toNumber;

            if (typeof max === "undefined") {
                value = _this.detail(value, step, 'add');
            } else {
                if (value > max) {
                    value = max;
                } else {
                    var addedValue = _this.detail(value, step, 'add');
                    if (addedValue <= max) {
                        value = addedValue;
                    }
                }
            }
            if (value < min) {
                value = min;
            }
            _this.setState({
                value: value,
                showValue: toThousands(value)
            });
            toNumber ? onChange && onChange(Number(value)) : onChange && onChange(value);
            _this.detailDisable(value);
        };

        _this.detail = function (value, step, type) {
            var precision = _this.props.precision;


            var valueFloat = _this.separate(value);
            var stepFloat = _this.separate(step);

            var ans = void 0;
            var stepFloatLength = stepFloat.toString().length;
            var valueFloatLength = valueFloat.toString().length;

            if (typeof precision === 'undefined') {
                precision = Math.max(stepFloatLength, valueFloatLength);
            }
            var coefficient = Math.pow(10, Math.abs(stepFloatLength - valueFloatLength));
            if (type === 'add') {
                ans = (value * coefficient + step * coefficient) / coefficient;
            } else {
                ans = (value * coefficient - step * coefficient) / coefficient;
            }

            return ans.toFixed(precision);
        };

        _this.separate = function (value) {
            value = value !== null && value.toString();
            if (value.indexOf('.') > -1) {
                return value.split('.')[1];
            } else {
                return "";
            }
        };

        _this.clear = function () {
            if (_this.timer) {
                clearTimeout(_this.timer);
            }
        };

        _this.handlePlusMouseDown = function (e) {
            var _this$props7 = _this.props,
                delay = _this$props7.delay,
                disabled = _this$props7.disabled;

            if (disabled) return;
            var value = _this.state.value;

            _this.plus(value);
            _this.clear();
            _this.timer = setTimeout(function () {
                _this.handlePlusMouseDown();
            }, delay);
        };

        _this.handleReduceMouseDown = function (e) {
            var _this$props8 = _this.props,
                delay = _this$props8.delay,
                disabled = _this$props8.disabled;

            if (disabled) return;
            var value = _this.state.value;

            _this.minus(value);
            _this.clear();
            _this.timer = setTimeout(function () {
                _this.handleReduceMouseDown();
            }, delay);
        };

        var data = judgeValue(props);

        _this.state = {
            value: data.value,
            minusDisabled: data.minusDisabled,
            plusDisabled: data.plusDisabled,
            showValue: toThousands(data.value)
        };

        _this.timer = null;
        _this.focus = false;
        return _this;
    }

    InputNumber.prototype.componentDidMount = function componentDidMount() {
        this.setState({
            value: this.props.value,
            showValue: toThousands(this.props.value)
        });
    };

    InputNumber.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.focus) {
            if (nextProps.value == Infinity || nextProps.value == -Infinity) {} else {
                this.setState({
                    value: nextProps.value,
                    showValue: toThousands(nextProps.value)
                });
            }
        } else {
            var data = judgeValue(nextProps, this.state.value);
            this.setState({
                value: data.value,
                showValue: toThousands(data.value),
                minusDisabled: data.minusDisabled,
                plusDisabled: data.plusDisabled
            });
        }
    };

    InputNumber.prototype.ComponentWillUnMount = function ComponentWillUnMount() {
        this.clear();
    };
    /**
     * 设置增加减少按钮是否可用
     */

    /**
     * 减法
     */

    /**
     * 加法
     */


    /**
     * 分离小数和整数
     * @param value
     * @returns {*}
     */


    InputNumber.prototype.render = function render() {
        var _classes;

        var _props = this.props,
            toThousands = _props.toThousands,
            max = _props.max,
            min = _props.min,
            step = _props.step,
            disabled = _props.disabled,
            clsPrefix = _props.clsPrefix,
            className = _props.className,
            delay = _props.delay,
            onBlur = _props.onBlur,
            onFocus = _props.onFocus,
            iconStyle = _props.iconStyle,
            autoWidth = _props.autoWidth,
            onChange = _props.onChange,
            format = _props.format,
            precision = _props.precision,
            toNumber = _props.toNumber,
            others = _objectWithoutProperties(_props, ['toThousands', 'max', 'min', 'step', 'disabled', 'clsPrefix', 'className', 'delay', 'onBlur', 'onFocus', 'iconStyle', 'autoWidth', 'onChange', 'format', 'precision', 'toNumber']);

        var classes = (_classes = {}, _defineProperty(_classes, clsPrefix + '-auto', autoWidth), _defineProperty(_classes, '' + clsPrefix, true), _classes);

        var _state = this.state,
            value = _state.value,
            minusDisabled = _state.minusDisabled,
            plusDisabled = _state.plusDisabled,
            showValue = _state.showValue;


        value = format ? format(value) : value;

        var disabledCursor = disabled ? ' disabled-cursor' : '';
        var disabledCon = disabled ? ' disabled-con' : '';
        return _react2["default"].createElement(
            'div',
            { className: clsPrefix + '-out' },
            iconStyle === 'double' ? _react2["default"].createElement(
                _beeInputGroup2["default"],
                { className: (0, _classnames2["default"])(className, classes, disabledCon) },
                _react2["default"].createElement(
                    _beeInputGroup2["default"].Addon,
                    {
                        className: (minusDisabled && 'disabled') + disabledCursor,
                        onMouseDown: this.handleReduceMouseDown,
                        onMouseLeave: this.clear,
                        onMouseUp: this.clear },
                    '-'
                ),
                _react2["default"].createElement(_beeFormControl2["default"], _extends({}, others, {
                    value: toThousands ? showValue : value,
                    disabled: disabled,
                    onBlur: this.handleBlur,
                    onFocus: this.handleFocus,
                    onChange: this.handleChange
                })),
                _react2["default"].createElement(
                    _beeInputGroup2["default"].Addon,
                    {
                        className: (plusDisabled && 'disabled') + disabledCursor,
                        onMouseDown: this.handlePlusMouseDown,
                        onMouseLeave: this.clear,
                        onMouseUp: this.clear },
                    '+'
                )
            ) : _react2["default"].createElement(
                _beeInputGroup2["default"],
                {
                    className: (0, _classnames2["default"])(className, classes, disabledCon),
                    simple: true
                },
                _react2["default"].createElement(_beeFormControl2["default"], _extends({}, others, {
                    value: toThousands ? showValue : value,
                    disabled: disabled,
                    onBlur: this.handleBlur,
                    onFocus: this.handleFocus,
                    onChange: this.handleChange
                })),
                _react2["default"].createElement(
                    _beeInputGroup2["default"].Button,
                    null,
                    _react2["default"].createElement(
                        'div',
                        { className: 'icon-group' },
                        _react2["default"].createElement(
                            'span',
                            {
                                onMouseDown: this.handlePlusMouseDown,
                                onMouseLeave: this.clear,
                                onMouseUp: this.clear,
                                className: (0, _classnames2["default"])('plus', { 'disabled': plusDisabled, 'disabled-cursor': disabledCursor }) },
                            _react2["default"].createElement('span', { className: 'uf uf-arrow-up' })
                        ),
                        _react2["default"].createElement(
                            'span',
                            {
                                onMouseDown: this.handleReduceMouseDown,
                                onMouseLeave: this.clear,
                                onMouseUp: this.clear,
                                className: (0, _classnames2["default"])("reduce", { 'disabled': minusDisabled, 'disabled-cursor': disabledCursor }) },
                            _react2["default"].createElement('span', { className: ' uf uf-arrow-down' })
                        )
                    )
                )
            )
        );
    };

    return InputNumber;
}(_react.Component);

;

InputNumber.defaultProps = defaultProps;
InputNumber.propTypes = propTypes;
exports["default"] = InputNumber;
module.exports = exports['default'];