'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeForm = require('bee-form');

var _beeForm2 = _interopRequireDefault(_beeForm);

var _beeFormControl = require('bee-form-control');

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _beeLabel = require('bee-label');

var _beeLabel2 = _interopRequireDefault(_beeLabel);

var _beeModal = require('bee-modal');

var _beeModal2 = _interopRequireDefault(_beeModal);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeSelect = require('bee-select');

var _beeSelect2 = _interopRequireDefault(_beeSelect);

var _beeLayout = require('bee-layout');

var _beeInputGroup = require('bee-input-group');

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var FormItem = _beeForm2["default"].FormItem;
var Option = _beeSelect2["default"].Option;

var propTypes = {
    clsPrefix: _propTypes2["default"].string,
    value: _propTypes2["default"].string,
    label: _propTypes2["default"].string,
    className: _propTypes2["default"].string,
    placeholder: _propTypes2["default"].string,
    required: _propTypes2["default"].bool,
    disabled: _propTypes2["default"].bool,
    disabledAlpha: _propTypes2["default"].bool,
    autoCalculate: _propTypes2["default"].func,
    onChange: _propTypes2["default"].func,
    title: _propTypes2["default"].string,
    cacelBtn: _propTypes2["default"].string,
    confirmBtn: _propTypes2["default"].string,
    isParameterArea: _propTypes2["default"].bool,
    modalProps: _propTypes2["default"].object,
    disabledModal: _propTypes2["default"].bool
};
var defaultProps = {
    clsPrefix: "u-colorpicker",
    value: "",
    label: "",
    placeholder: "",
    required: false,
    disabled: false,
    disabledAlpha: false,
    autoCalculate: function autoCalculate() {},
    onChange: function onChange() {},
    title: '取色板',
    cacelBtn: '取消',
    confirmBtn: '确认',
    isParameterArea: true,
    disabledModal: false
};

var initRgb = _colors2["default"]['red'].rgbArr[6] ? 'rgb(' + _colors2["default"]['red'].rgbArr[6] + ')' : '';

var ColorPicker = function (_Component) {
    _inherits(ColorPicker, _Component);

    function ColorPicker(props) {
        _classCallCheck(this, ColorPicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleClick = function (e) {
            e.stopPropagation();
            _this.setState({ displayColorPicker: !_this.state.displayColorPicker });
        };

        _this.handleClose = function () {
            var _this$cache = _this.cache,
                selectedColor = _this$cache.selectedColor,
                selectedScale = _this$cache.selectedScale,
                selectedRgbValue = _this$cache.selectedRgbValue,
                selectedHexValue = _this$cache.selectedHexValue,
                alpha = _this$cache.alpha;

            _this.setState({
                displayColorPicker: false,
                selectedColor: selectedColor,
                selectedScale: selectedScale,
                selectedRgbValue: selectedRgbValue,
                selectedHexValue: selectedHexValue,
                alpha: alpha
            });
        };

        _this.submit = function () {
            var _this$props = _this.props,
                autoCalculate = _this$props.autoCalculate,
                onChange = _this$props.onChange;
            var _this$state = _this.state,
                selectedColor = _this$state.selectedColor,
                selectedScale = _this$state.selectedScale,
                selectedHexValue = _this$state.selectedHexValue,
                alpha = _this$state.alpha;

            var tempRgb = _this.colorHexToRgb(selectedHexValue, alpha);
            var obj = {
                "class": selectedColor + '-' + selectedScale,
                rgba: tempRgb,
                hex: selectedHexValue
            };
            _this.setState({
                formValue: selectedHexValue,
                displayColorPicker: false
            });
            _this.cache = _extends(_this.cache, {
                selectedColor: selectedColor,
                selectedScale: selectedScale,
                selectedRgbValue: tempRgb,
                selectedHexValue: selectedHexValue,
                formValue: selectedHexValue,
                alpha: alpha
            });
            if (autoCalculate) {
                var result = _this.calcHoverAndActive(selectedColor, selectedScale, selectedHexValue);
                autoCalculate(result);
            }
            if (onChange) {
                onChange(obj);
            }
        };

        _this.calcHoverAndActive = function (selectedColor, selectedScale, selectedHexValue) {
            var obj = {};
            var selectedRgbArr = _colors2["default"][selectedColor] ? _colors2["default"][selectedColor].rgbArr : '';
            var selectedScaleArr = _colors2["default"][selectedColor] ? _colors2["default"][selectedColor].scale : '';
            var index = selectedScaleArr.indexOf(selectedScale);
            var lighter = "",
                darker = "";
            if (index === 0) {
                lighter = "";
                darker = 'rgb(' + selectedRgbArr[index + 1] + ')';
                obj.lighter = lighter;
                obj.darker = darker;
            } else if (index === selectedRgbArr.length - 1) {
                lighter = 'rgb(' + selectedRgbArr[index - 1] + ')';
                darker = "";
                obj.lighter = lighter;
                obj.darker = darker;
            } else if (index > 0 && index < selectedRgbArr.length - 1) {
                lighter = 'rgb(' + selectedRgbArr[index - 1] + ')';
                darker = 'rgb(' + selectedRgbArr[index + 1] + ')';
                obj.lighter = lighter;
                obj.darker = darker;
            }
            obj.clor = selectedHexValue;
            return obj;
        };

        _this.handleSelectChange = function (value) {
            var selectedRgb = 'rgb(' + _colors2["default"][value].rgbArr[6] + ')' || '';
            var selectedHex = _this.colorRGBtoHex(selectedRgb);
            _this.setState({
                selectedColor: value,
                selectedScale: "600",
                selectedRgbValue: selectedRgb,
                selectedHexValue: selectedHex,
                alpha: 100
            });
        };

        _this.handleSelectScale = function (value, e) {
            var rgb = e.currentTarget.currentStyle.backgroundColor;
            var hex = _this.colorRGBtoHex(rgb);
            _this.setState({
                selectedScale: value,
                selectedRgbValue: rgb,
                selectedHexValue: hex
            });
        };

        _this.renderOption = function () {
            var clsPrefix = _this.props.clsPrefix;

            var opts = [];
            for (var prop in _colors2["default"]) {
                var item = _colors2["default"][prop];
                opts.push(_react2["default"].createElement(
                    Option,
                    { key: item.key, value: item.key, className: clsPrefix + '-select-option clearfix' },
                    _react2["default"].createElement(
                        'div',
                        { className: 'option-overview bg-' + item.key + '-600' },
                        ' '
                    ),
                    _react2["default"].createElement(
                        'span',
                        null,
                        ' ',
                        item.name,
                        ' '
                    )
                ));
            }
            return opts;
        };

        _this.renderColorPlate = function (selectedColor) {
            var _this$state2 = _this.state,
                selectedScale = _this$state2.selectedScale,
                selectedRgbValue = _this$state2.selectedRgbValue;

            var list = [];
            var color = {};
            if (_colors2["default"][selectedColor]) {
                color = _colors2["default"][selectedColor];
            }
            var iconClass = _this.isDark(selectedRgbValue) ? 'dark-contrast' : 'light-contrast';
            color.scale.map(function (item) {
                list.push(_react2["default"].createElement(
                    'li',
                    { key: item.key, className: 'bg-' + color.key + '-' + item, onClick: function onClick(e) {
                            return _this.handleSelectScale(item, e);
                        } },
                    selectedScale === item ? _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-correct-2', className: iconClass }) : ""
                ));
            });
            return list;
        };

        _this.isDark = function (rgbColor) {
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            var aColor = void 0;
            if (/^(rgb|RGB)/.test(rgbColor)) {
                aColor = rgbColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
            }
            var r = aColor[0],
                g = aColor[1],
                b = aColor[2];
            if (r * 0.299 + g * 0.578 + b * 0.114 >= 192) {
                //浅色
                return false;
            } else {
                //深色
                return true;
            }
        };

        _this.handleChange = function (value) {
            var onChange = _this.props.onChange;

            var tempRgb = _this.colorHexToRgb(value);
            var obj = {
                "class": "",
                rgba: tempRgb,
                hex: value
            };
            if (onChange) {
                onChange(obj);
            }
            _this.setState({
                formValue: value
            });
        };

        _this.handleAlphaChange = function (value) {
            var reg = /^(?:0|[1-9][0-9]?|100)$/;
            if (value == '' || reg.test(value)) {
                _this.setState({
                    alpha: value
                });
            }
        };

        var initValue = "";
        var initHex = "";
        if ('value' in props) {
            initValue = props.value;
            initHex = _this.colorRGBtoHex(initRgb);
        }
        _this.state = {
            displayColorPicker: false,
            selectedColor: "red",
            selectedScale: "600",
            selectedRgbValue: initRgb,
            selectedHexValue: initHex,
            formValue: initValue,
            alpha: 100
        };
        _this.input = {};
        _this.cache = {
            selectedColor: "red",
            selectedScale: "600",
            selectedRgbValue: initRgb,
            selectedHexValue: initHex,
            formValue: initValue,
            alpha: 100
        };
        return _this;
    }

    ColorPicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                formValue: nextProps.value
            });
        }
    };

    // 打开色板


    // 关闭色板/点击弹框取消按钮


    // 点击弹框确定按钮


    /**
     * 根据选中的颜色计算 深一色度和浅一色度 的色值
     * @param selectedColor
     * @param selectedScale
     */


    // 下拉框值更改


    // 选择色块


    // 渲染下拉框选项


    // 渲染预制的色板，提供可选择的颜色示例


    // 把16进制颜色转换为RGB颜色
    ColorPicker.prototype.colorHexToRgb = function colorHexToRgb(color, alpha) {
        var sColor = color;
        sColor = sColor.toLowerCase();
        //十六进制颜色值的正则表达式
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 如果是16进制颜色
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                var sColorNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for (var _i = 1; _i < 7; _i += 2) {
                sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
            }
            if (alpha) {
                sColorChange.push(alpha);
            }
            return "rgba(" + sColorChange.join(",") + ")";
        }
        return sColor;
    };

    // 把RGB颜色转换为16进制颜色


    ColorPicker.prototype.colorRGBtoHex = function colorRGBtoHex(color) {
        var that = color;
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if (/^(rgb|RGB)/.test(that)) {
            var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
            var strHex = "#";
            for (var i = 0; i < aColor.length; i++) {
                var hex = Number(aColor[i]).toString(16);
                if (hex.length < 2) {
                    hex = '0' + hex;
                }
                strHex += hex;
            }
            if (strHex.length !== 7) {
                strHex = that;
            }
            return strHex;
        } else if (reg.test(that)) {
            var aNum = that.replace(/#/, "").split("");
            if (aNum.length === 6) {
                return that;
            } else if (aNum.length === 3) {
                var numHex = "#";
                for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
                    numHex += aNum[_i2] + aNum[_i2];
                }
                return numHex;
            }
        }
        return that;
    };

    /**
     * 根据RGB值判断 深色与浅色
     * @param rgbColor rgb色值
     * @return
     */


    // 输入框值更改事件


    // alpha值更改事件


    ColorPicker.prototype.render = function render() {
        var self = this;

        var _props = this.props,
            clsPrefix = _props.clsPrefix,
            onChange = _props.onChange,
            value = _props.value,
            label = _props.label,
            required = _props.required,
            placeholder = _props.placeholder,
            className = _props.className,
            disabled = _props.disabled,
            disabledAlpha = _props.disabledAlpha,
            isParameterArea = _props.isParameterArea,
            disabledModal = _props.disabledModal,
            others = _objectWithoutProperties(_props, ['clsPrefix', 'onChange', 'value', 'label', 'required', 'placeholder', 'className', 'disabled', 'disabledAlpha', 'isParameterArea', 'disabledModal']);

        var _state = this.state,
            selectedColor = _state.selectedColor,
            selectedScale = _state.selectedScale,
            selectedRgbValue = _state.selectedRgbValue,
            selectedHexValue = _state.selectedHexValue,
            formValue = _state.formValue,
            alpha = _state.alpha;
        var _props$form = this.props.form,
            getFieldProps = _props$form.getFieldProps,
            getFieldError = _props$form.getFieldError;


        var rules = required ? [{
            required: true, message: '请输入十六进制色值！'
        }, {
            pattern: /^#[0-9a-fA-F]{6}$/, message: '色值格式不正确'
        }] : null;

        HTMLElement.prototype.__defineGetter__("currentStyle", function () {
            return this.ownerDocument.defaultView.getComputedStyle(this, null);
        });

        return _react2["default"].createElement(
            'div',
            { className: (0, _classnames2["default"])(clsPrefix, className) },
            _react2["default"].createElement(
                FormItem,
                { className: clsPrefix + '-form' },
                label ? _react2["default"].createElement(
                    _beeLabel2["default"],
                    null,
                    required ? _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-mi', className: 'mast' }) : "",
                    label
                ) : '',
                _react2["default"].createElement(
                    'span',
                    null,
                    _react2["default"].createElement(_beeFormControl2["default"], {
                        disabled: disabled,
                        placeholder: placeholder,
                        value: formValue,
                        onChange: this.handleChange
                    }),
                    _react2["default"].createElement('div', { style: { backgroundColor: formValue },
                        className: clsPrefix + '-form-color-demo ' + (disabledModal ? "disabled" : ''),
                        onClick: !disabled && !disabledModal ? this.handleClick : null })
                )
            ),
            _react2["default"].createElement(
                'div',
                { className: 'error' },
                getFieldError('hexadecimal')
            ),
            _react2["default"].createElement(
                _beeModal2["default"],
                _extends({
                    width: isParameterArea ? '600' : '350',
                    className: clsPrefix + '-modal',
                    show: this.state.displayColorPicker,
                    onHide: this.handleClose,
                    backdropClosable: false
                }, this.props.modalProps),
                _react2["default"].createElement(
                    _beeModal2["default"].Header,
                    { closeButton: true },
                    _react2["default"].createElement(
                        _beeModal2["default"].Title,
                        null,
                        this.props.title
                    )
                ),
                _react2["default"].createElement(
                    _beeModal2["default"].Body,
                    null,
                    _react2["default"].createElement(
                        'div',
                        { className: clsPrefix + '-panel-header' },
                        _react2["default"].createElement(
                            'div',
                            { className: clsPrefix + '-color-preview' },
                            _react2["default"].createElement('div', { className: clsPrefix + '-color-preview-demo bg-' + selectedColor + '-600' })
                        ),
                        _react2["default"].createElement(
                            _beeSelect2["default"],
                            {
                                defaultValue: selectedColor,
                                style: { width: 200 },
                                onChange: this.handleSelectChange
                            },
                            this.renderOption()
                        )
                    ),
                    _react2["default"].createElement(
                        'div',
                        { className: clsPrefix + '-panel-content' },
                        _react2["default"].createElement(
                            _beeLayout.Row,
                            null,
                            _react2["default"].createElement(
                                _beeLayout.Col,
                                { md: 7, xs: 7, sm: 7, style: isParameterArea ? {} : { width: '100%', marginLeft: '10.5px' }, className: 'col-7' },
                                _react2["default"].createElement(
                                    'ul',
                                    { className: clsPrefix + '-panel-color-plate clearfix' },
                                    this.renderColorPlate(selectedColor)
                                )
                            ),
                            isParameterArea && _react2["default"].createElement(
                                _beeLayout.Col,
                                { md: 5, xs: 5, sm: 5, className: 'col-5' },
                                _react2["default"].createElement(
                                    'div',
                                    { className: clsPrefix + '-panel-color-info' },
                                    _react2["default"].createElement(
                                        'div',
                                        { className: 'transparent-bg' },
                                        _react2["default"].createElement('div', { className: 'selected-color bg-' + selectedColor + '-' + selectedScale, style: { opacity: alpha / 100 } })
                                    ),
                                    _react2["default"].createElement(
                                        'ul',
                                        null,
                                        _react2["default"].createElement(
                                            'li',
                                            null,
                                            _react2["default"].createElement(
                                                _beeLabel2["default"],
                                                null,
                                                'Class\uFF1A'
                                            ),
                                            selectedColor + '-' + selectedScale
                                        ),
                                        _react2["default"].createElement(
                                            'li',
                                            null,
                                            _react2["default"].createElement(
                                                _beeLabel2["default"],
                                                null,
                                                'RGB\uFF1A'
                                            ),
                                            '' + selectedRgbValue
                                        ),
                                        _react2["default"].createElement(
                                            'li',
                                            null,
                                            _react2["default"].createElement(
                                                _beeLabel2["default"],
                                                null,
                                                'HEX\uFF1A'
                                            ),
                                            '' + selectedHexValue
                                        ),
                                        _react2["default"].createElement(
                                            'li',
                                            null,
                                            _react2["default"].createElement(
                                                FormItem,
                                                null,
                                                _react2["default"].createElement(
                                                    _beeLabel2["default"],
                                                    null,
                                                    'Alpha'
                                                ),
                                                _react2["default"].createElement(
                                                    _beeInputGroup2["default"],
                                                    null,
                                                    _react2["default"].createElement(_beeFormControl2["default"], { size: 'sm', value: alpha, onChange: this.handleAlphaChange, disabled: disabledAlpha }),
                                                    _react2["default"].createElement(
                                                        _beeInputGroup2["default"].Addon,
                                                        null,
                                                        '%'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2["default"].createElement(
                    _beeModal2["default"].Footer,
                    null,
                    _react2["default"].createElement(
                        _beeButton2["default"],
                        { onClick: this.handleClose, shape: 'border', style: { marginRight: 15 } },
                        this.props.cacelBtn
                    ),
                    _react2["default"].createElement(
                        _beeButton2["default"],
                        { onClick: this.submit, colors: 'primary' },
                        this.props.confirmBtn
                    )
                )
            )
        );
    };

    return ColorPicker;
}(_react.Component);

;

ColorPicker.propTypes = propTypes;
ColorPicker.defaultProps = defaultProps;
exports["default"] = _beeForm2["default"].createForm()(ColorPicker);
module.exports = exports['default'];