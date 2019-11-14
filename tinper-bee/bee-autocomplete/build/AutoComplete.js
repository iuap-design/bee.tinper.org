'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeFormControl = require('bee-form-control');

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    value: _propTypes2["default"].any,
    show: _propTypes2["default"].bool,
    options: _propTypes2["default"].array,
    onChange: _propTypes2["default"].func,
    onSelectOption: _propTypes2["default"].func
};
var defaultProps = {
    value: "",
    show: false,
    options: [],
    clsPrefix: 'u-autocomplete',
    onBlur: function onBlur() {},
    onKeyDown: function onKeyDown() {},
    onValueChange: function onValueChange() {},
    onChange: function onChange() {},
    onSelectOption: function onSelectOption() {}
};

var AutoComplete = function (_React$Component) {
    _inherits(AutoComplete, _React$Component);

    function AutoComplete(props) {
        _classCallCheck(this, AutoComplete);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {
            show: props.show, //控制自动匹配列表的显示与隐藏
            displayValue: '',
            activeItemIndex: -1,
            options: props.options,
            value: props.value,
            placeholder: props.placeholder
        };
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleLeave = _this.handleLeave.bind(_this);
        _this.handleEnter = _this.handleEnter.bind(_this);
        _this.handleChangeList = _this.handleChangeList.bind(_this);
        _this.moveItem = _this.moveItem.bind(_this);
        _this.handLeBlur = _this.handLeBlur.bind(_this);
        return _this;
    }

    AutoComplete.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps && nextProps.value !== this.props.value) {
            var value = nextProps.value;
            this.setState({
                value: value
            });
        }
        if ('options' in nextProps && nextProps.options !== this.props.options) {
            var options = nextProps.options;
            this.setState({
                options: options
            });
        }
        if ('show' in nextProps && nextProps.show !== this.props.show) {
            var show = nextProps.show;
            this.setState({
                show: show
            });
        }
    };

    AutoComplete.prototype.handleChange = function handleChange(value) {
        var arr = [];
        var valueArr = this.props.options;
        valueArr.sort();
        if (value.replace(/(^\s*)|(\s*$)/g, '') == "") {
            this.setState({
                value: "",
                activeItemIndex: -1,
                show: false
            });
            this.props.onValueChange(value);
            this.props.onChange(value);
            return;
        }

        for (var i = 0; i < valueArr.length; i++) {
            if (valueArr[i].indexOf(value) != -1) {
                arr.push(valueArr[i]);
            }
        }
        this.setState({
            options: arr,
            show: true,
            activeItemIndex: -1,
            displayValue: '',
            value: value
        });
        this.props.onValueChange(value);
        this.props.onChange(value);
    };

    /**
     * 自动匹配的列表被选中其中某一个
     * @param {*} value
     */


    AutoComplete.prototype.handleChangeList = function handleChangeList(value) {
        this.setState({
            show: false,
            displayValue: ''
        });
        this.props.onValueChange(value);
        this.props.onChange(value);
        this.props.onSelectOption(value);
    };

    AutoComplete.prototype.handleKeyDown = function handleKeyDown(e) {
        var _state = this.state,
            displayValue = _state.displayValue,
            activeItemIndex = _state.activeItemIndex;
        var _props = this.props,
            options = _props.options,
            onValueChange = _props.onValueChange,
            onKeyDown = _props.onKeyDown,
            onChange = _props.onChange;

        onKeyDown(e);
        switch (e.keyCode) {
            // 13为回车键的键码（keyCode）
            case 13:
                {
                    this.setState({
                        show: false
                    });
                    onValueChange(displayValue, activeItemIndex);
                    onChange(displayValue, activeItemIndex);
                    break;
                }
            // 38为上方向键，40为下方向键
            case 38:
            case 40:
                {
                    e.preventDefault();
                    // 使用moveItem方法对更新或取消选中项
                    this.moveItem(e.keyCode === 38 ? 'up' : 'down');
                    break;
                }
        }
    };

    AutoComplete.prototype.moveItem = function moveItem(direction) {
        var _state2 = this.state,
            activeItemIndex = _state2.activeItemIndex,
            options = _state2.options;

        var lastIndex = options.length - 1;
        var newIndex = -1;

        // 计算新的activeItemIndex
        if (direction === 'up') {
            if (activeItemIndex === -1) {
                // 如果没有选中项则选择最后一项
                newIndex = lastIndex;
            } else {
                newIndex = activeItemIndex - 1;
            }
        } else {
            if (activeItemIndex < lastIndex) {
                newIndex = activeItemIndex + 1;
            }
        }

        // 获取新的displayValue
        var newDisplayValue = '';
        if (newIndex >= 0) {
            newDisplayValue = options[newIndex];
        }

        // 更新状态
        this.setState({
            displayValue: newDisplayValue,
            activeItemIndex: newIndex
        });
    };

    AutoComplete.prototype.handleEnter = function handleEnter(index) {
        var currentItem = this.props.options[index];
        this.setState({ activeItemIndex: index, displayValue: currentItem });
    };

    AutoComplete.prototype.handleLeave = function handleLeave() {
        this.setState({ activeItemIndex: -1, displayValue: '' });
    };

    AutoComplete.prototype.handLeBlur = function handLeBlur() {
        var _this2 = this;

        this.props.onBlur(this.state.value);
        setTimeout(function () {
            _this2.setState({
                show: false
            });
        }, 300);
    };

    AutoComplete.prototype.render = function render() {
        var _this3 = this;

        var _state3 = this.state,
            show = _state3.show,
            displayValue = _state3.displayValue,
            activeItemIndex = _state3.activeItemIndex,
            options = _state3.options;

        var _props2 = this.props,
            disabled = _props2.disabled,
            clsPrefix = _props2.clsPrefix,
            onKeyDown = _props2.onKeyDown,
            onBlur = _props2.onBlur,
            onValueChange = _props2.onValueChange,
            onChange = _props2.onChange,
            value = _props2.value,
            placeholder = _props2.placeholder,
            props = _objectWithoutProperties(_props2, ['disabled', 'clsPrefix', 'onKeyDown', 'onBlur', 'onValueChange', 'onChange', 'value', 'placeholder']);

        var optionList = options.map(function (item, index) {
            return _react2["default"].createElement(
                'li',
                {
                    key: index,
                    className: index === activeItemIndex ? "active" : '',
                    onMouseEnter: function onMouseEnter() {
                        return _this3.handleEnter(index);
                    },
                    onClick: function onClick() {
                        return _this3.handleChangeList(item);
                    }
                },
                item.text || item
            );
        });
        return _react2["default"].createElement(
            'div',
            { className: (0, _classnames2["default"])(clsPrefix, this.props.className) },
            _react2["default"].createElement(_beeFormControl2["default"], _extends({}, props, {
                value: displayValue || this.state.value,
                disabled: disabled,
                onChange: function onChange(value) {
                    _this3.handleChange(value);
                },
                onKeyDown: this.handleKeyDown,
                placeholder: this.state.placeholder,
                onBlur: this.handLeBlur
            })),
            show && options.length > 0 && _react2["default"].createElement(
                'ul',
                { className: clsPrefix + '-options', onMouseLeave: this.handleLeave },
                optionList
            )
        );
    };

    return AutoComplete;
}(_react2["default"].Component);

AutoComplete.propTypes = propTypes;
AutoComplete.defaultProps = defaultProps;
exports["default"] = AutoComplete;
module.exports = exports['default'];