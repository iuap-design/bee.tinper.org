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

var _beeMessage = require('bee-message');

var _beeMessage2 = _interopRequireDefault(_beeMessage);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _tool = require('bee-locale/build/tool');

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
    locale: _propTypes2["default"].object,
    toNumber: _propTypes2["default"].bool, //回调函数内的值是否转换为数值类型
    displayCheckPrompt: _propTypes2["default"].bool //是否显示超出限制范围之后的检验提示
};

var defaultProps = {
    value: "",
    step: 1,
    clsPrefix: 'u-input-number',
    iconStyle: 'double',
    autoWidth: false,
    delay: 300,
    toNumber: false,
    displayCheckPrompt: false,
    locale: {}
};

//校验提示
function prompt(content) {
    _beeMessage2["default"].destroy();
    _beeMessage2["default"].create({ content: content, color: 'warninglight' });
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
    if (result[0] == '-') {
        result = result.replace('-,', '-');
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

        _initialiseProps.call(_this);

        var data = _this.judgeValue(props);

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
    /**
     * 校验value
     * @param {*} props 
     * @param {原来的值} oldValue 
     */


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
            var data = this.judgeValue(nextProps, this.state.value);
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

        var classes = (_classes = {}, _defineProperty(_classes, clsPrefix + '-auto', autoWidth), _defineProperty(_classes, '' + clsPrefix, true), _defineProperty(_classes, clsPrefix + '-lg', others.size === "lg"), _defineProperty(_classes, clsPrefix + '-sm', others.size === "sm"), _classes);

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
                        { className: (0, _classnames2["default"])("icon-group") },
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

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.judgeValue = function (props, oldValue) {
        var currentValue = void 0;
        var currentMinusDisabled = false;
        var currentPlusDisabled = false;
        var value = props.value,
            min = props.min,
            max = props.max,
            precision = props.precision,
            onChange = props.onChange,
            displayCheckPrompt = props.displayCheckPrompt;

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
        var local = (0, _tool.getComponentLocale)(props, _this2.context, 'InputNumber', function () {
            return _i18n2["default"];
        });
        if (currentValue <= min) {
            if (displayCheckPrompt) prompt(local['msgMin']);
            currentMinusDisabled = true;
            currentValue = min;
        }
        if (currentValue >= max) {
            if (displayCheckPrompt) prompt(local['msgMax']);
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
    };

    this.handleChange = function (value) {
        var _props2 = _this2.props,
            onChange = _props2.onChange,
            toNumber = _props2.toNumber,
            max = _props2.max,
            min = _props2.min,
            displayCheckPrompt = _props2.displayCheckPrompt;

        if (value === '') {
            onChange && onChange(value);
            _this2.setState({
                value: value
            });
            return;
        }
        value = unThousands(value);
        // if(Number(value)>max){
        //     if(!displayCheckPrompt) return;
        //     this.prompt(`输入的数字不能大于 ${max}`);
        //     return;
        // }
        // if(Number(value)<min){
        //     if(!displayCheckPrompt) return;
        //     this.prompt(`输入的数字不能小于 ${min}`);
        //     return;
        // }
        if (isNaN(value) && value !== '.' && value !== '-') return;
        _this2.setState({
            value: value,
            showValue: toThousands(value)
        });
        if (value === '-') {
            onChange && onChange(value);
        }
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

    this.handleFocus = function (value, e) {
        _this2.focus = true;
        var _props3 = _this2.props,
            onFocus = _props3.onFocus,
            min = _props3.min,
            max = _props3.max;

        onFocus && onFocus(value, e);
    };

    this.handleBlur = function (v, e) {
        _this2.focus = false;
        var _props4 = _this2.props,
            onBlur = _props4.onBlur,
            precision = _props4.precision,
            onChange = _props4.onChange,
            toNumber = _props4.toNumber,
            max = _props4.max,
            min = _props4.min,
            displayCheckPrompt = _props4.displayCheckPrompt;

        var local = (0, _tool.getComponentLocale)(_this2.props, _this2.context, 'InputNumber', function () {
            return _i18n2["default"];
        });
        if (v === '') {
            _this2.setState({
                value: v
            });
            onBlur && onBlur(v, e);
            onChange && onChange(v);
            return;
        }
        v = unThousands(v);
        var value = Number(v);
        if (value > max) {
            if (displayCheckPrompt) prompt(local['msgMax']);
            value = max;
        }
        if (value < min) {
            if (displayCheckPrompt) prompt(local['msgMin']);
            value = min;
        }
        if (_this2.props.hasOwnProperty('precision')) {
            value = value.toFixed(precision);
        }
        _this2.setState({
            value: value,
            showValue: toThousands(value)
        });
        _this2.detailDisable(value);
        if (toNumber) {
            onBlur && onBlur(Number(value), e);
            onChange && onChange(Number(value));
        } else {
            onBlur && onBlur(value, e);
            onChange && onChange(value);
        }
    };

    this.detailDisable = function (value) {
        var _props5 = _this2.props,
            max = _props5.max,
            min = _props5.min,
            step = _props5.step;


        if (value >= max || Number(value) + Number(step) > max) {
            _this2.setState({
                plusDisabled: true
            });
        } else {
            _this2.setState({
                plusDisabled: false
            });
        }
        if (value <= min || value - step < min) {
            _this2.setState({
                minusDisabled: true
            });
        } else {
            _this2.setState({
                minusDisabled: false
            });
        }
    };

    this.minus = function (value) {
        var _props6 = _this2.props,
            min = _props6.min,
            max = _props6.max,
            step = _props6.step,
            onChange = _props6.onChange,
            toNumber = _props6.toNumber;

        value = value === '-' ? 0 : value;
        if (typeof min === "undefined") {
            value = _this2.detail(value, step, 'reduce');
        } else {
            if (value < min) {
                value = min;
            } else {
                var reducedValue = _this2.detail(value, step, 'reduce');
                if (reducedValue >= min) {
                    value = reducedValue;
                }
            }
        }

        if (value > max) {
            value = max;
        }

        _this2.setState({
            value: value,
            showValue: toThousands(value)
        });
        toNumber ? onChange && onChange(Number(value)) : onChange && onChange(value);
        _this2.detailDisable(value);
    };

    this.plus = function (value) {
        var _props7 = _this2.props,
            max = _props7.max,
            min = _props7.min,
            step = _props7.step,
            onChange = _props7.onChange,
            toNumber = _props7.toNumber;

        value = value === '-' ? 0 : value;
        if (typeof max === "undefined") {
            value = _this2.detail(value, step, 'add');
        } else {
            if (value > max) {
                value = max;
            } else {
                var addedValue = _this2.detail(value, step, 'add');
                if (addedValue <= max) {
                    value = addedValue;
                }
            }
        }
        if (value < min) {
            value = min;
        }
        _this2.setState({
            value: value,
            showValue: toThousands(value)
        });
        toNumber ? onChange && onChange(Number(value)) : onChange && onChange(value);
        _this2.detailDisable(value);
    };

    this.detail = function (value, step, type) {
        var precision = _this2.props.precision;


        var valueFloat = _this2.separate(value);
        var stepFloat = _this2.separate(step);

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

    this.separate = function (value) {
        value = value !== null && value.toString();
        if (value.indexOf('.') > -1) {
            return value.split('.')[1];
        } else {
            return "";
        }
    };

    this.clear = function () {
        if (_this2.timer) {
            clearTimeout(_this2.timer);
        }
    };

    this.handlePlusMouseDown = function (e) {
        e.preventDefault();
        var _props8 = _this2.props,
            delay = _props8.delay,
            disabled = _props8.disabled;

        if (disabled) return;
        var value = _this2.state.value;

        _this2.plus(value);
        _this2.clear();
        _this2.timer = setTimeout(function () {
            _this2.handlePlusMouseDown();
        }, delay);
    };

    this.handleReduceMouseDown = function (e) {
        e.preventDefault();
        var _props9 = _this2.props,
            delay = _props9.delay,
            disabled = _props9.disabled;

        if (disabled) return;
        var value = _this2.state.value;

        _this2.minus(value);
        _this2.clear();
        _this2.timer = setTimeout(function () {
            _this2.handleReduceMouseDown();
        }, delay);
    };
};

;

InputNumber.defaultProps = defaultProps;
InputNumber.propTypes = propTypes;
InputNumber.contextTypes = {
    beeLocale: _propTypes2["default"].object
};
exports["default"] = InputNumber;
module.exports = exports['default'];