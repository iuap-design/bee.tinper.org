'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string]),
    type: _propTypes2["default"].string,
    size: _propTypes2["default"].oneOf(['sm', 'md', 'lg']),
    onSearch: _propTypes2["default"].func,
    onChange: _propTypes2["default"].func,
    onBlur: _propTypes2["default"].func,
    showClose: _propTypes2["default"].bool,
    focusSelect: _propTypes2["default"].bool,
    debounceDelay: _propTypes2["default"].number
};

var defaultProps = {
    componentClass: 'input',
    clsPrefix: 'u-form-control',
    type: 'text',
    size: 'md'
};

function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

var FormControl = function (_React$Component) {
    _inherits(FormControl, _React$Component);

    function FormControl(props) {
        _classCallCheck(this, FormControl);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
        _this.state = {
            showSearch: !props.value,
            value: value
        };
        _this.input = {};
        return _this;
    }

    FormControl.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProp) {
        if ("value" in nextProp) {
            if (nextProp.value !== this.state.value) {
                this.setState({ value: nextProp.value });
            }
        }
    };

    FormControl.prototype.render = function render() {

        if (this.props.type === "search") {
            return this.renderSearch();
        }

        return this.renderInput();
    };

    return FormControl;
}(_react2["default"].Component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.handleSearchChange = function (e) {
        var onChange = _this2.props.onChange;

        var value = _this2.input.value;
        _this2.setState({
            value: value,
            showSearch: value == null || value === ""
        });
        if (onChange) {
            onChange(value, e);
        }
    };

    this.handleChange = function (e) {
        var _props$debounceDelay = _this2.props.debounceDelay,
            debounceDelay = _props$debounceDelay === undefined ? 0 : _props$debounceDelay;

        var now = new Date().getTime();
        if (now - _this2.lastScrollCall < debounceDelay) return;
        _this2.lastScrollCall = now;

        var onChange = _this2.props.onChange;

        var value = _this2.input.value;
        if (!('value' in _this2.props)) {
            _this2.setState({ value: value });
        }
        if (onChange) {
            onChange(value, e);
        }
    };

    this.clearValue = function () {
        var onChange = _this2.props.onChange;

        _this2.setState({
            showSearch: true,
            value: ""
        });
        if (onChange) {
            onChange("");
        }
        _this2.input.focus();
    };

    this.handleKeyDown = function (e) {
        var _props = _this2.props,
            onSearch = _props.onSearch,
            type = _props.type,
            onKeyDown = _props.onKeyDown;

        if (e.keyCode === 13 && type === "search") {
            if (onSearch) {
                onSearch(_this2.input.value);
            }
        }
        onKeyDown && onKeyDown(e);
    };

    this.handleSearch = function (e) {
        var onSearch = _this2.props.onSearch;

        if (onSearch) onSearch(_this2.input.value);
    };

    this.handleBlur = function (e) {
        var value = _this2.state.value;
        var onBlur = _this2.props.onBlur;


        if (onBlur) {
            onBlur(value, e);
        }
    };

    this.handleFocus = function (e) {
        var value = _this2.state.value;
        var onFocus = _this2.props.onFocus;

        if (_this2.props.focusSelect) {
            _this2.input.select();
        }
        if (onFocus) {
            onFocus(value, e);
        }
    };

    this.renderInput = function () {
        var _props2 = _this2.props,
            Component = _props2.componentClass,
            type = _props2.type,
            className = _props2.className,
            size = _props2.size,
            clsPrefix = _props2.clsPrefix,
            onChange = _props2.onChange,
            onSearch = _props2.onSearch,
            onBlur = _props2.onBlur,
            showClose = _props2.showClose,
            focusSelect = _props2.focusSelect,
            prefix = _props2.prefix,
            suffix = _props2.suffix,
            others = _objectWithoutProperties(_props2, ['componentClass', 'type', 'className', 'size', 'clsPrefix', 'onChange', 'onSearch', 'onBlur', 'showClose', 'focusSelect', 'prefix', 'suffix']);
        // input[type="file"] 不应该有类名 .form-control.


        var value = _this2.state.value;

        var classes = {};
        if (size) {
            classes['' + size] = true;
        }

        var classNames = void 0;
        if (type !== 'file') {
            classNames = (0, _classnames2["default"])(clsPrefix, classes);
        }
        if (prefix || suffix) classNames += ' ' + clsPrefix + '-prefix-suffix';
        if (className) classNames += ' ' + className;
        // 加判断，是否有 前后缀，是否加 wrapper
        if (showClose || suffix || prefix) {
            return _react2["default"].createElement(
                'div',
                { className: (0, _classnames2["default"])(clsPrefix + '-close', clsPrefix + '-affix-wrapper ' + clsPrefix + '-affix-wrapper-' + size, className) },
                prefix ? _react2["default"].createElement(
                    'span',
                    { className: clsPrefix + '-simple-prefix' },
                    prefix
                ) : '',
                _react2["default"].createElement(Component, _extends({}, others, {
                    type: type,
                    ref: function ref(el) {
                        return _this2.input = el;
                    },
                    value: fixControlledValue(value),
                    onChange: _this2.handleChange,
                    onBlur: _this2.handleBlur,
                    onFocus: _this2.handleFocus,
                    className: (0, _classnames2["default"])(classNames)
                })),
                showClose ? _react2["default"].createElement(
                    'div',
                    { className: clsPrefix + '-suffix' },
                    value ? _react2["default"].createElement(_beeIcon2["default"], { onClick: _this2.clearValue, type: 'uf-close-c' }) : ''
                ) : '',
                suffix ? _react2["default"].createElement(
                    'span',
                    { className: clsPrefix + '-simple-suffix' },
                    suffix
                ) : ''
            );
        } else {
            return _react2["default"].createElement(Component, _extends({}, others, {
                type: type,
                ref: function ref(el) {
                    return _this2.input = el;
                },
                value: fixControlledValue(value),
                onChange: _this2.handleChange,
                onBlur: _this2.handleBlur,
                onFocus: _this2.handleFocus,
                className: (0, _classnames2["default"])(classNames)
            }));
        }
    };

    this.renderSearch = function () {
        var _props3 = _this2.props,
            Component = _props3.componentClass,
            type = _props3.type,
            className = _props3.className,
            size = _props3.size,
            clsPrefix = _props3.clsPrefix,
            onChange = _props3.onChange,
            onSearch = _props3.onSearch,
            onBlur = _props3.onBlur,
            others = _objectWithoutProperties(_props3, ['componentClass', 'type', 'className', 'size', 'clsPrefix', 'onChange', 'onSearch', 'onBlur']);
        // input[type="file"] 不应该有类名 .form-control.


        var value = _this2.state.value;

        var classes = {};
        if (size) {
            classes['' + size] = true;
        }
        classes[clsPrefix + '-search'] = true;

        if (type === "search") {
            return _react2["default"].createElement(
                'div',
                { className: (0, _classnames2["default"])(clsPrefix + '-search', clsPrefix + '-affix-wrapper', className) },
                _react2["default"].createElement(Component, _extends({}, others, {
                    type: type,
                    ref: function ref(el) {
                        return _this2.input = el;
                    },
                    onChange: _this2.handleSearchChange,
                    value: fixControlledValue(value),
                    onKeyDown: _this2.handleKeyDown,
                    onBlur: _this2.handleBlur,
                    onFocus: _this2.handleFocus,
                    className: (0, _classnames2["default"])(clsPrefix, classes)
                })),
                _react2["default"].createElement(
                    'div',
                    { className: clsPrefix + '-suffix' },
                    _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-search', onClick: _this2.handleSearch })
                )
            );
        }
    };
};

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;

exports["default"] = FormControl;
module.exports = exports['default'];