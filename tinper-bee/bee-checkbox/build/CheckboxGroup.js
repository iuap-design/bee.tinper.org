'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    clsPrefix: _propTypes2["default"].string,
    value: _propTypes2["default"].array,
    onChange: _propTypes2["default"].func,
    disabled: _propTypes2["default"].bool,
    options: _propTypes2["default"].array,
    defaultValue: _propTypes2["default"].array
};

var defaultProps = {
    clsPrefix: 'u-checkbox-group',
    onChange: function onChange() {},
    disabled: false,
    options: []
};

var CheckboxGroup = function (_React$Component) {
    _inherits(CheckboxGroup, _React$Component);

    function CheckboxGroup(props) {
        _classCallCheck(this, CheckboxGroup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.changeHandle = function (v) {
            var values = _this.state.values;
            if (values.indexOf(v) != -1) {
                values.splice(values.indexOf(v), 1);
            } else {
                values.push(v);
            }
            _this.setState({
                values: values
            });
            var onChange = _this.props.onChange;

            if (onChange) {
                var options = _this.getOptions();
                onChange(values.filter(function (val) {
                    return values.indexOf(val) !== -1;
                }).sort(function (a, b) {
                    var indexA = options.findIndex(function (opt) {
                        return opt.value === a;
                    });
                    var indexB = options.findIndex(function (opt) {
                        return opt.value === b;
                    });
                    return indexA - indexB;
                }));
            }
        };

        _this.state = {
            values: props.value || props.defaultValue || []
        };
        return _this;
    }

    CheckboxGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!(0, _lodash2["default"])(nextProps.value, this.state.values)) {
            this.setState({
                values: nextProps.value
            });
        }
    };

    CheckboxGroup.prototype.getOptions = function getOptions() {
        var options = this.props.options;

        return options.map(function (option) {
            if (typeof option === 'string') {
                return {
                    label: option,
                    value: option
                };
            }
            return option;
        });
    };

    CheckboxGroup.prototype.render = function render() {
        var _this2 = this;

        var state = this.state;
        var props = this.props;
        var clsPrefix = props.clsPrefix,
            className = props.className,
            disabled = props.disabled,
            children = props.children,
            options = props.options;

        var classes = clsPrefix;
        if (className) classes += ' ' + className;
        if (options && options.length > 0) {
            children = this.getOptions().map(function (option) {
                return _react2["default"].createElement(
                    _Checkbox2["default"],
                    {
                        key: option.value.toString(),
                        disabled: 'disabled' in option ? option.disabled : props.disabled,
                        value: option.value,
                        checked: state.values.indexOf(option.value) !== -1,
                        onChange: option.onChange
                    },
                    option.label
                );
            });
        }
        return _react2["default"].createElement(
            'div',
            { className: classes },
            _react2["default"].Children.map(children, function (child) {
                return _react2["default"].cloneElement(child, {
                    onChange: function onChange() {
                        _this2.changeHandle(child.props.value);
                    },
                    checked: state.values.indexOf(child.props.value) != -1,
                    disabled: child.props.disabled || disabled
                });
            })
        );
    };

    return CheckboxGroup;
}(_react2["default"].Component);

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;

exports["default"] = CheckboxGroup;
module.exports = exports['default'];