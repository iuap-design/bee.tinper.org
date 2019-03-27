'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaultProps;

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

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormItem = _beeForm2["default"].FormItem;
var Option = _beeSelect2["default"].Option;

var propTypes = {
    clsPrefix: _propTypes2["default"].string,
    value: _propTypes2["default"].string,
    label: _propTypes2["default"].string,
    className: _propTypes2["default"].string,
    required: _propTypes2["default"].bool,
    autoCalculate: _propTypes2["default"].func,
    onChange: _propTypes2["default"].func
};
var defaultProps = (_defaultProps = {
    clsPrefix: "u-colorpicker",
    value: "",
    label: "",
    required: false,
    autoCalculate: false
}, _defineProperty(_defaultProps, 'autoCalculate', function autoCalculate() {}), _defineProperty(_defaultProps, 'onChange', function onChange() {}), _defaultProps);

var ColorPicker = function (_Component) {
    _inherits(ColorPicker, _Component);

    function ColorPicker(props) {
        _classCallCheck(this, ColorPicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleClick = function () {
            _this.setState({ displayColorPicker: !_this.state.displayColorPicker });
        };

        _this.handleClose = function () {
            _this.setState({ displayColorPicker: false });
        };

        _this.submit = function () {
            var autoCalculate = _this.props.autoCalculate;

            _this.setState({
                formValue: _this.state.selectedHexValue,
                displayColorPicker: false
            });
            if (autoCalculate) {
                autoCalculate(_this.state.selectedColor, _this.state.selectedScale);
            }
        };

        _this.handleSelectChange = function (value) {
            _this.setState({
                selectedColor: value,
                selectedScale: "600",
                selectedRgbValue: "",
                selectedHexValue: ""
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
            _colors2["default"].map(function (item) {
                opts.push(_react2["default"].createElement(
                    Option,
                    { key: item.key, value: item.key, className: clsPrefix + '-select-option clearfix' },
                    _react2["default"].createElement('div', { className: 'option-overview bg-' + item.key + '-600' }),
                    _react2["default"].createElement(
                        'span',
                        null,
                        item.name
                    )
                ));
            });
            return opts;
        };

        _this.renderColorPlate = function (selectedColor) {
            var selectedScale = _this.state.selectedScale;

            var list = [];
            var color = {};
            _colors2["default"].forEach(function (item) {
                if (item.key === selectedColor) {
                    color = item;
                }
            });
            color.scale.map(function (item) {
                list.push(_react2["default"].createElement(
                    'li',
                    { key: item.key, className: 'bg-' + color.key + '-' + item, onClick: function onClick(e) {
                            return _this.handleSelectScale(item, e);
                        } },
                    selectedScale === item ? _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-correct-2' }) : ""
                ));
            });
            return list;
        };

        _this.handleChange = function (value) {
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(value);
            }
            _this.setState({
                formValue: value
            });
        };

        var initValue = "";
        if ('value' in props) {
            initValue = props.value;
        }
        _this.state = {
            displayColorPicker: false,
            selectedColor: "red",
            selectedScale: "600",
            selectedRgbValue: "",
            selectedHexValue: "",
            formValue: initValue
        };
        _this.input = {};
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


    // 关闭色板


    // 点击弹框确定按钮


    // 下拉框值更改


    // 选择色度


    // 渲染下拉框选项


    // 渲染预制的色板，提供可选择的颜色示例


    // 把RGB颜色转换为16进制颜色
    ColorPicker.prototype.colorRGBtoHex = function colorRGBtoHex(color) {
        var rgb = color.split(',');
        var r = parseInt(rgb[0].split('(')[1]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2].split(')')[0]);
        var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return hex;
    };

    // 输入框值更改事件


    ColorPicker.prototype.render = function render() {
        var self = this;

        var _props = this.props,
            clsPrefix = _props.clsPrefix,
            onChange = _props.onChange,
            value = _props.value,
            label = _props.label,
            required = _props.required,
            className = _props.className,
            others = _objectWithoutProperties(_props, ['clsPrefix', 'onChange', 'value', 'label', 'required', 'className']);

        var _state = this.state,
            selectedColor = _state.selectedColor,
            selectedScale = _state.selectedScale,
            selectedRgbValue = _state.selectedRgbValue,
            selectedHexValue = _state.selectedHexValue,
            formValue = _state.formValue;
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
                _react2["default"].createElement(
                    _beeLabel2["default"],
                    null,
                    required ? _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-mi', className: 'mast' }) : "",
                    label
                ),
                _react2["default"].createElement(_beeFormControl2["default"], {
                    placeholder: '\u8BF7\u8F93\u5165\u5341\u516D\u8FDB\u5236\u8272\u503C',
                    value: formValue,
                    onChange: this.handleChange
                    // {...getFieldProps('hexadecimal', {
                    //     initialValue: formValue,
                    //     validateTrigger: 'onBlur',
                    //     rules: rules,
                    //     onChange(value) {
                    //         if (onChange) {
                    //             onChange(value);
                    //         }
                    //     }
                    // }) }
                }),
                _react2["default"].createElement('div', {
                    className: clsPrefix + '-form-color-demo bg-' + selectedColor + '-' + selectedScale,
                    onClick: this.handleClick })
            ),
            _react2["default"].createElement(
                'div',
                { className: 'error' },
                getFieldError('hexadecimal')
            ),
            _react2["default"].createElement(
                _beeModal2["default"],
                {
                    width: '800',
                    className: clsPrefix + '-modal',
                    show: this.state.displayColorPicker,
                    onHide: this.handleClose,
                    backdropClosable: false },
                _react2["default"].createElement(
                    _beeModal2["default"].Header,
                    { closeButton: true },
                    _react2["default"].createElement(
                        _beeModal2["default"].Title,
                        null,
                        'MD\u8272\u677F'
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
                                defaultValue: 'red',
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
                            _beeLayout.Col,
                            { md: 7, xs: 7, sm: 7 },
                            _react2["default"].createElement(
                                'ul',
                                { className: clsPrefix + '-panel-color-plate clearfix' },
                                this.renderColorPlate(selectedColor)
                            )
                        ),
                        _react2["default"].createElement(
                            _beeLayout.Col,
                            { md: 4, xs: 4, sm: 4 },
                            _react2["default"].createElement(
                                'div',
                                { className: clsPrefix + '-panel-color-info' },
                                _react2["default"].createElement('div', { className: 'selected-color bg-' + selectedColor + '-' + selectedScale }),
                                _react2["default"].createElement(
                                    _beeLabel2["default"],
                                    null,
                                    'Class\uFF1A',
                                    selectedColor + '-' + selectedScale
                                ),
                                _react2["default"].createElement('br', null),
                                _react2["default"].createElement(
                                    _beeLabel2["default"],
                                    null,
                                    'RGB\uFF1A',
                                    '' + selectedRgbValue
                                ),
                                _react2["default"].createElement('br', null),
                                _react2["default"].createElement(
                                    _beeLabel2["default"],
                                    null,
                                    'HEX\uFF1A',
                                    '' + selectedHexValue
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
                        '\u53D6\u6D88'
                    ),
                    _react2["default"].createElement(
                        _beeButton2["default"],
                        { onClick: this.submit, colors: 'primary' },
                        '\u786E\u5B9A'
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