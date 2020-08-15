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
    displayCheckPrompt: _propTypes2["default"].bool, //是否显示超出限制范围之后的检验提示
    minusRight: _propTypes2["default"].bool, //负号是否在右边
    handleBtnClick: _propTypes2["default"].func, //加减按钮点击回调
    hideActionButton: _propTypes2["default"].bool //隐藏加减按钮
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
    locale: {},
    handleBtnClick: function handleBtnClick() {}
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

function setCaretPosition(ctrl, pos, need) {

    if (ctrl && need) {
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(pos, pos);
            // IE8 and below
        } else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }
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
            showValue: toThousands(data.value),
            placeholderShow: true
        };

        _this.timer = null;
        _this.focus = false;
        _this.selectionStart = 0;
        return _this;
    }

    // unThousands = (number) =>{
    //     if(!number || number === "")return number;
    //     number = number.toString();
    //     return number.replace(new RegExp(this.props.formatSymbol,'g'),'');
    //     // return number.replace(/\,/g,'');
    // }

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
     *  @memberof InputNumber
     * type 是否要四舍五入(此参数无效,超长不让输入)
     */

    /**
     * 恢复科学技术法的问题
     */

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
        var _classes,
            _this2 = this;

        var _props = this.props,
            toThousands = _props.toThousands,
            minusRight = _props.minusRight,
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
            hideActionButton = _props.hideActionButton,
            others = _objectWithoutProperties(_props, ['toThousands', 'minusRight', 'max', 'min', 'step', 'disabled', 'clsPrefix', 'className', 'delay', 'onBlur', 'onFocus', 'iconStyle', 'autoWidth', 'onChange', 'format', 'precision', 'toNumber', 'hideActionButton']);

        var classes = (_classes = {}, _defineProperty(_classes, clsPrefix + '-auto', autoWidth), _defineProperty(_classes, '' + clsPrefix, true), _defineProperty(_classes, clsPrefix + '-lg', others.size === "lg"), _defineProperty(_classes, clsPrefix + '-sm', others.size === "sm"), _classes);

        var _state = this.state,
            value = _state.value,
            minusDisabled = _state.minusDisabled,
            plusDisabled = _state.plusDisabled,
            showValue = _state.showValue;

        value = precision != null && !this.focus ? this.getPrecision(value) : value;
        value = format && !this.focus ? format(value) : value;
        value = String(value).indexOf("e") !== -1 ? this.getFullNum(value) : value;
        if (minusRight && String(value).indexOf('-') != -1) {
            value = String(value).replace("-", "") + "-";
        }
        var disabledCursor = disabled ? ' disabled-cursor' : '';
        var disabledCon = disabled ? ' disabled-con' : '';
        return _react2["default"].createElement(
            'div',
            { className: clsPrefix + '-out' },
            iconStyle === 'double' ? _react2["default"].createElement(
                _beeInputGroup2["default"],
                { className: (0, _classnames2["default"])(className, classes, disabledCon) },
                this.isIE() && !value ? _react2["default"].createElement(
                    'div',
                    { onClick: this.placeholderClick, style: { 'display': this.state.placeholderShow ? 'block' : 'none' }, className: clsPrefix + '-placeholder' },
                    this.props.placeholder
                ) : '',
                hideActionButton ? '' : _react2["default"].createElement(
                    _beeInputGroup2["default"].Addon,
                    {
                        // onClick={()=>{minusDisabled?'':this.handleBtnClick('down')}}
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
                    onChange: this.handleChange,
                    ref: function ref(_ref) {
                        return _this2.input = _ref;
                    }
                })),
                hideActionButton ? '' : _react2["default"].createElement(
                    _beeInputGroup2["default"].Addon,
                    {
                        // onClick={()=>{plusDisabled?'':this.handleBtnClick('up')}}
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
                this.isIE() && !value ? _react2["default"].createElement(
                    'div',
                    { onClick: this.placeholderClick, style: { 'display': this.state.placeholderShow ? 'block' : 'none' }, className: clsPrefix + '-placeholder' },
                    this.props.placeholder
                ) : '',
                _react2["default"].createElement(_beeFormControl2["default"], _extends({}, others, {
                    value: toThousands ? showValue : value,
                    disabled: disabled,
                    onBlur: this.handleBlur,
                    onFocus: this.handleFocus,
                    onChange: this.handleChange,
                    ref: function ref(_ref2) {
                        return _this2.input = _ref2;
                    }
                })),
                hideActionButton ? '' : _react2["default"].createElement(
                    _beeInputGroup2["default"].Button,
                    null,
                    _react2["default"].createElement(
                        'div',
                        { className: (0, _classnames2["default"])("icon-group") },
                        _react2["default"].createElement(
                            'span',
                            {
                                // onClick={()=>{plusDisabled?'':this.handleBtnClick('up')}}
                                onMouseDown: this.handlePlusMouseDown,
                                onMouseLeave: this.clear,
                                onMouseUp: this.clear,
                                className: (0, _classnames2["default"])('plus', { 'disabled': plusDisabled, 'disabled-cursor': disabledCursor }) },
                            _react2["default"].createElement('span', { className: 'uf uf-arrow-up' })
                        ),
                        _react2["default"].createElement(
                            'span',
                            {
                                // onClick={()=> minusDisabled?'':this.handleBtnClick('down')}
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
    var _this3 = this;

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

        if (props.minusRight) {
            value = value.toString();
            if (value.indexOf('-') != -1) {
                //所有位置的负号转到前边
                value = value.replace('-', '');
                value = '-' + value;
            }
            value = Number(value);
        }
        if (value != undefined && value != null) {
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
        } //lse if (min&&(value!='')) {//mdd中提出bug
        //currentValue = min;
        //} 
        else if (value === '0' || value === 0) {
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
        var local = (0, _tool.getComponentLocale)(props, _this3.context, 'InputNumber', function () {
            return _i18n2["default"];
        });
        if (min && currentValue <= min) {
            if (displayCheckPrompt) prompt(local['msgMin']);
            currentMinusDisabled = true;
            currentValue = min;
        }
        if (max && currentValue >= max) {
            if (displayCheckPrompt) prompt(local['msgMax']);
            currentPlusDisabled = true;
            currentValue = max;
        }

        if (props.hasOwnProperty('precision')) {
            // currentValue = Number(currentValue).toFixed(precision);
            currentValue = _this3.getPrecision(currentValue);
        }
        if (props.minusRight) {
            currentValue = currentValue.toString();
            if (currentValue.indexOf('-') != -1) {
                //负号转到后边
                currentValue = currentValue.replace('-', '');
                currentValue = currentValue + '-';
            }
        }

        return {
            value: currentValue,
            minusDisabled: currentMinusDisabled,
            plusDisabled: currentPlusDisabled
        };
    };

    this.numToFixed = function (value, fixed, type) {
        value = String(value);
        if (!value && value !== "0") return value;
        if (!fixed && String(fixed) !== "0") return value;
        var preIndex = value.indexOf(".");
        if (value.indexOf(".") === -1) return value;
        preIndex++;
        var endIndex = preIndex + fixed;
        var precValue = value.substr(preIndex, endIndex) + "0000000000";
        if (type) {
            return Number(value).toFixed(fixed);
        }
        return value.split(".")[0] + "." + precValue.substr(0, fixed);
    };

    this.handleChange = function (value) {
        var selectionStart = _this3.input.selectionStart == undefined ? _this3.input.input.selectionStart : _this3.input.selectionStart;
        _this3.selectionStart = selectionStart;
        var _props2 = _this3.props,
            onChange = _props2.onChange,
            toNumber = _props2.toNumber,
            minusRight = _props2.minusRight;

        if (value === '') {
            onChange && onChange(value);
            _this3.setState({
                value: value,
                showValue: ''
            });
            return;
        }
        // value = this.unThousands(value);
        if (minusRight) {
            if (value.match(/-/g) && value.match(/-/g).length > 1) return;
        }
        if (isNaN(value) && value !== '.' && value !== '-') return;
        if (value.indexOf(".") !== -1) {
            //小数最大值处理
            var prec = String(value.split(".")[1]).replace("-", "");
            if (_this3.props.precision === 0 && (prec === "" || prec != "")) return;
            if (_this3.props.precision && prec.length > _this3.props.precision) return;
            if (prec.length > 8) return;
        }
        _this3.setState({
            value: value,
            showValue: toThousands(value)
        });
        if (value === '-') {
            onChange && onChange(value);
        } else if (value == '.' || value.indexOf('.') == value.length - 1) {
            //当输入小数点的时候
            onChange && onChange(value);
        } else if (value[value.indexOf('.') + 1] == 0) {
            //当输入 d.0 的时候，不转换Number
            onChange && onChange(value);
        } else {
            toNumber ? onChange && onChange(Number(value)) : onChange && onChange(value);
        }
        if (_this3.props.toThousands) {
            var stateShowValue = toThousands(_this3.state.value);
            var showValue = toThousands(value);
            var addNumber = 0;
            var delNumber = 0;
            var reg = /[0-9]/;
            for (var i = 0; i < selectionStart; i++) {
                if (!reg.test(showValue[i])) addNumber += 1;
            }
            for (var j = 0; j < selectionStart; j++) {
                if (stateShowValue[j]) {
                    if (!reg.test(stateShowValue[j])) delNumber += 1;
                }
            }
            var position = selectionStart + addNumber - delNumber;
            setCaretPosition(_this3.input && _this3.input.input, position, true);
        }
    };

    this.handleFocus = function (value, e) {
        _this3.focus = true;
        var _props3 = _this3.props,
            onFocus = _props3.onFocus,
            min = _props3.min,
            max = _props3.max;

        onFocus && onFocus(_this3.getPrecision(_this3.state.value), e);
    };

    this.getFullNum = function (num) {
        //处理非数字
        if (isNaN(num)) {
            return num;
        };

        //处理不需要转换的数字
        var str = '' + num;
        if (!/e/i.test(str)) {
            return num;
        };
        var _precision = _this3.props.precision ? _this3.props.precision : 18;
        return Number(num).toFixed(_precision).replace(/\.?0+$/, "");
    };

    this.handleBlur = function (v, e) {
        _this3.focus = false;
        var _props4 = _this3.props,
            onBlur = _props4.onBlur,
            precision = _props4.precision,
            onChange = _props4.onChange,
            toNumber = _props4.toNumber,
            max = _props4.max,
            min = _props4.min,
            displayCheckPrompt = _props4.displayCheckPrompt,
            minusRight = _props4.minusRight,
            round = _props4.round;

        var local = (0, _tool.getComponentLocale)(_this3.props, _this3.context, 'InputNumber', function () {
            return _i18n2["default"];
        });
        v = _this3.state.value; //在onBlur的时候不需要活输入框的只，而是要获取state中的值，因为有format的时候就会有问题。
        if (v === '' || !v) {
            _this3.setState({
                value: v
            });
            onChange && onChange(v);
            onBlur && onBlur(v, e);
            return;
        }
        // let value = this.unThousands(v); 
        var value = _this3.numToFixed(v, precision, round);
        if (minusRight) {
            if (value.indexOf('-') != -1) {
                //所有位置的负号转到前边
                value = value.replace('-', '');
                value = '-' + value;
            }
        }
        value = isNaN(Number(value)) ? 0 : Number(value);
        if ((max || max === 0) && value > max) {
            if (displayCheckPrompt) prompt(local['msgMax']);
            value = max;
        }
        if ((min || min === 0) && value < min) {
            if (displayCheckPrompt) prompt(local['msgMin']);
            value = min;
        }
        if (_this3.props.hasOwnProperty('precision')) {
            // value = value.toFixed(precision);
            value = _this3.getPrecision(value);
        }
        value = value.toString();
        if (minusRight && value.indexOf('-') != -1) {
            //负号转到后边
            value = value.replace('-', '');
            value = value + '-';
        }
        _this3.setState({
            value: value,
            showValue: toThousands(value),
            placeholderShow: true
        });
        _this3.detailDisable(value);
        if (toNumber && !minusRight) {
            onChange && onChange(value);
            onBlur && onBlur(value, e);
        } else {
            onChange && onChange(value);
            onBlur && onBlur(value, e);
        }
    };

    this.detailDisable = function (value) {
        var _props5 = _this3.props,
            max = _props5.max,
            min = _props5.min,
            step = _props5.step;

        if (max && (value >= max || Number(value) + Number(step) > max)) {
            _this3.setState({
                plusDisabled: true
            });
        } else {
            _this3.setState({
                plusDisabled: false
            });
        }
        if (min && (value <= min || value - step < min)) {
            _this3.setState({
                minusDisabled: true
            });
        } else {
            _this3.setState({
                minusDisabled: false
            });
        }
    };

    this.minus = function (value) {
        var _props6 = _this3.props,
            min = _props6.min,
            max = _props6.max,
            step = _props6.step,
            onChange = _props6.onChange,
            toNumber = _props6.toNumber;

        value = value === '-' ? 0 : value;
        if (typeof min === "undefined") {
            value = _this3.detail(value, step, 'reduce');
        } else {
            min = Number(min);
            if (value < min) {
                value = min;
            } else {
                var reducedValue = _this3.detail(value, step, 'reduce');
                if (reducedValue >= min) {
                    value = reducedValue;
                }
            }
        }
        if (max) {
            max = Number(max);
            if (value > max) {
                value = max;
            }
        }

        _this3.setState({
            value: value,
            showValue: toThousands(value)
        }, function () {
            _this3.input.input.focus && _this3.input.input.focus();
        });
        toNumber ? onChange && onChange(Number(value)) : onChange && onChange(value);
        _this3.handleBtnClick('down', value);
        _this3.detailDisable(value);
    };

    this.plus = function (value) {
        var _props7 = _this3.props,
            max = _props7.max,
            min = _props7.min,
            step = _props7.step,
            onChange = _props7.onChange,
            toNumber = _props7.toNumber;

        value = value === '-' ? 0 : value;
        if (typeof max === "undefined") {
            value = _this3.detail(value, step, 'add');
        } else {
            max = Number(max);
            if (max && value > max) {
                value = max;
            } else {
                var addedValue = _this3.detail(value, step, 'add');
                if (max && addedValue <= max) {
                    value = addedValue;
                }
            }
        }
        if (min) {
            min = Number(min);
            if (value < min) {
                value = min;
            }
        }

        _this3.setState({
            value: value,
            showValue: toThousands(value)
        }, function () {
            _this3.input.input.focus && _this3.input.input.focus();
        });
        toNumber ? onChange && onChange(Number(value)) : onChange && onChange(value);
        _this3.handleBtnClick('up', value);
        _this3.detailDisable(value);
    };

    this.detail = function (value, step, type) {
        var precision = _this3.props.precision;


        var valueFloat = _this3.separate(value);
        var stepFloat = _this3.separate(step);

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
        if (value == null || value == undefined) {
            return "";
        } else {
            value = value.toString();
            if (value.indexOf('.') > -1) {
                return value.split('.')[1];
            } else {
                return "";
            }
        }
    };

    this.clear = function () {
        if (_this3.timer) {
            clearTimeout(_this3.timer);
        }
    };

    this.handlePlusMouseDown = function (e) {
        e.preventDefault && e.preventDefault();
        var _props8 = _this3.props,
            delay = _props8.delay,
            disabled = _props8.disabled;
        var value = _this3.state.value;

        if (disabled) return;
        _this3.plus(value);
        _this3.clear();
        _this3.timer = setTimeout(function () {
            _this3.handlePlusMouseDown(e);
        }, delay);
    };

    this.handleReduceMouseDown = function (e) {
        e.preventDefault && e.preventDefault();
        var _props9 = _this3.props,
            delay = _props9.delay,
            disabled = _props9.disabled;
        var value = _this3.state.value;

        if (disabled) return;
        _this3.minus(value);
        _this3.clear();
        _this3.timer = setTimeout(function () {
            _this3.handleReduceMouseDown(e);
        }, delay);
    };

    this.getPrecision = function (value) {
        if (value == null || value == undefined) return value;
        if (!value && value === "") return value;
        value = String(value);
        value = value.indexOf("e") !== -1 ? _this3.getFullNum(value) : value;
        var precision = _this3.props.precision;

        if (precision === 0) return value;
        if (precision == undefined || value.indexOf(".") !== -1 && String(value.split(".")[1]).length === precision) {
            return value;
        }
        var before = value.substring(0, 1),
            len = value.length,
            after = value.substring(len - 1, len);
        before = before === "-" ? before : "";
        after = after === "-" ? after : "";
        //是科学计数法，不replace - 
        if (before) value = value.substring(1, len);
        if (after) value = value.substring(0, len - 1);
        // value = value.replace("-",'');
        var precV = "000000000000000000000000000000000000000000000000000000000000000000000000";
        if (value.indexOf(".") === -1) {
            precV = precV.substr(0, precision);
            precV = precV ? "." + precV : precV;
            if (!isNaN(value) && (value.indexOf('-') != -1 || value.indexOf('+') != -1) && value.indexOf('e') != -1) {//是科学计数法，不拼接0000000

            } else {
                value = value + precV;
            }
        }
        return before + Number(value).toFixed(precision) + after;
    };

    this.handleBtnClick = function (type, value) {
        _this3.props.handleBtnClick(type, value);
    };

    this.isIE = function () {
        if (window) {
            if (!!window.ActiveXObject || "ActiveXObject" in window) return true;
        }
        return false;
    };

    this.placeholderClick = function () {
        _this3.input.input.focus();
        _this3.setState({
            placeholderShow: false
        });
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