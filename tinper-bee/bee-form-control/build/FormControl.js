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

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
    size: 'md',
    debounceDelay: 0
};

var FormControl = function (_React$Component) {
    _inherits(FormControl, _React$Component);

    function FormControl(props) {
        _classCallCheck(this, FormControl);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleSearchChange = function (e) {
            var onChange = _this.props.onChange;

            var value = _this.input.value;
            _this.setState({
                value: value,
                showSearch: value == null || value === ""
            });
            if (onChange) {
                onChange(value, e);
            }
        };

        _this.handleChange = function (e) {
            var now = new Date().getTime();
            if (now - _this.lastScrollCall < _this.props.debounceDelay) return;
            _this.lastScrollCall = now;

            var onChange = _this.props.onChange;

            var value = _this.input.value;
            _this.setState({
                showClose: true
            });
            if (onChange) {
                onChange(value, e);
            }
        };

        _this.clearValue = function () {
            var onChange = _this.props.onChange;

            _this.setState({
                showSearch: true,
                value: "",
                showClose: false
            });
            if (onChange) {
                onChange("");
            }
            _this.input.focus();
        };

        _this.handleKeyDown = function (e) {
            var _this$props = _this.props,
                onSearch = _this$props.onSearch,
                type = _this$props.type,
                onKeyDown = _this$props.onKeyDown;

            if (e.keyCode === 13 && type === "search") {
                if (onSearch) {
                    onSearch(_this.input.value);
                }
            }
            onKeyDown && onKeyDown(e);
        };

        _this.handleSearch = function (e) {
            var onSearch = _this.props.onSearch;

            if (onSearch) onSearch(_this.input.value);
        };

        _this.handleBlur = function (e) {
            var value = _this.state.value;
            var onBlur = _this.props.onBlur;


            if (onBlur) {
                onBlur(value, e);
            }
        };

        _this.handleFocus = function (e) {
            var value = _this.state.value;
            var onFocus = _this.props.onFocus;

            if (_this.props.focusSelect) {
                _this.input.select();
            }
            if (onFocus) {
                onFocus(value, e);
            }
        };

        _this.renderInput = function () {
            var _this$props2 = _this.props,
                Component = _this$props2.componentClass,
                type = _this$props2.type,
                className = _this$props2.className,
                size = _this$props2.size,
                clsPrefix = _this$props2.clsPrefix,
                value = _this$props2.value,
                onChange = _this$props2.onChange,
                onSearch = _this$props2.onSearch,
                onBlur = _this$props2.onBlur,
                showClose = _this$props2.showClose,
                focusSelect = _this$props2.focusSelect,
                others = _objectWithoutProperties(_this$props2, ['componentClass', 'type', 'className', 'size', 'clsPrefix', 'value', 'onChange', 'onSearch', 'onBlur', 'showClose', 'focusSelect']);
            // input[type="file"] 不应该有类名 .form-control.


            var classes = {};
            if (size) {
                classes['' + size] = true;
            }

            var classNames = void 0;
            if (type !== 'file') {
                classNames = (0, _classnames2["default"])(clsPrefix, classes);
            }

            return showClose ? _react2["default"].createElement(
                'div',
                { className: (0, _classnames2["default"])(clsPrefix + '-close', clsPrefix + '-affix-wrapper', className) },
                _react2["default"].createElement(Component, _extends({}, others, {
                    type: type,
                    ref: function ref(el) {
                        return _this.input = el;
                    },
                    value: value,
                    onChange: _this.handleChange,
                    onBlur: _this.handleBlur,
                    onFocus: _this.handleFocus,
                    className: (0, _classnames2["default"])(classNames)
                })),
                _react2["default"].createElement(
                    'div',
                    { className: clsPrefix + '-suffix' },
                    _this.state.showClose ? _react2["default"].createElement(_beeIcon2["default"], { onClick: _this.clearValue, type: 'uf-close-c' }) : ''
                )
            ) : _react2["default"].createElement(Component, _extends({}, others, {
                type: type,
                ref: function ref(el) {
                    return _this.input = el;
                },
                value: value,
                onChange: _this.handleChange,
                onBlur: _this.handleBlur,
                onFocus: _this.handleFocus,
                className: (0, _classnames2["default"])(className, classNames)
            }));
        };

        _this.renderSearch = function () {
            var _this$props3 = _this.props,
                Component = _this$props3.componentClass,
                type = _this$props3.type,
                className = _this$props3.className,
                size = _this$props3.size,
                clsPrefix = _this$props3.clsPrefix,
                value = _this$props3.value,
                onChange = _this$props3.onChange,
                onSearch = _this$props3.onSearch,
                onBlur = _this$props3.onBlur,
                others = _objectWithoutProperties(_this$props3, ['componentClass', 'type', 'className', 'size', 'clsPrefix', 'value', 'onChange', 'onSearch', 'onBlur']);
            // input[type="file"] 不应该有类名 .form-control.


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
                            return _this.input = el;
                        },
                        onChange: _this.handleSearchChange,
                        value: value,
                        onKeyDown: _this.handleKeyDown,
                        onBlur: _this.handleBlur,
                        onFocus: _this.handleFocus,
                        className: (0, _classnames2["default"])(clsPrefix, classes)
                    })),
                    _react2["default"].createElement(
                        'div',
                        { className: clsPrefix + '-suffix' },
                        _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-search', onClick: _this.handleSearch })
                    )
                );
            }
        };

        _this.state = {
            showSearch: !props.value,
            value: props.value == null ? "" : props.value,
            showClose: false
        };
        _this.input = {};
        return _this;
    }

    FormControl.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProp) {
        if (nextProp.value !== this.state.value) {
            this.setState({ value: nextProp.value });
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

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;

exports["default"] = FormControl;
module.exports = exports['default'];