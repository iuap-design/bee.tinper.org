'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputNumber = require('./InputNumber');

var _InputNumber2 = _interopRequireDefault(_InputNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var noop = function noop() {};

var propsTypes = {
    clsfix: _propTypes2["default"].string,
    className: _propTypes2["default"].string,
    value: _propTypes2["default"].array,
    onChange: _propTypes2["default"].func,
    onBlur: _propTypes2["default"].func,
    onFocus: _propTypes2["default"].func,
    placeholder: _propTypes2["default"].array,

    max: _propTypes2["default"].number,
    min: _propTypes2["default"].number,
    step: _propTypes2["default"].number,
    precision: _propTypes2["default"].number,
    format: _propTypes2["default"].func,
    delay: _propTypes2["default"].number,
    disabled: _propTypes2["default"].bool,
    toThousands: _propTypes2["default"].bool,
    toNumber: _propTypes2["default"].bool
};

var defaultProps = {
    clsfix: 'u-input-number',
    className: '',
    value: [],
    placeholder: [],
    onChange: noop,
    onBlur: noop,
    onFocus: noop
};

var InputNumberGroup = function (_Component) {
    _inherits(InputNumberGroup, _Component);

    function InputNumberGroup(props) {
        _classCallCheck(this, InputNumberGroup);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onChange = function (index, v) {
            var value = _this.state.value;

            value[index] = v;
            _this.setState({
                value: value
            });
            _this.props.onChange(value);
        };

        _this.onFocus = function (index, v) {
            var value = _this.state.value;

            value[index] = v;
            _this.setState({
                value: value
            });
            _this.props.onFocus(value);
        };

        _this.onBlur = function (index, v) {
            var value = _this.state.value;

            if (index == 1) {
                if (v < value[0]) {
                    console.warn('The second value must be greater than or equal to the first value');
                }
            }
            value[index] = v;
            _this.setState({
                value: value
            });

            _this.props.onBlur(value);
        };

        _this.state = {
            value: props.value || []
        };
        return _this;
    }

    InputNumberGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
    };

    InputNumberGroup.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            className = _props.className,
            clsfix = _props.clsfix,
            value = _props.value,
            onChange = _props.onChange,
            placeholder = _props.placeholder,
            split = _props.split,
            onBlur = _props.onBlur,
            onFocus = _props.onFocus,
            other = _objectWithoutProperties(_props, ['className', 'clsfix', 'value', 'onChange', 'placeholder', 'split', 'onBlur', 'onFocus']);

        var stateValue = this.state.value;

        return _react2["default"].createElement(
            'div',
            { className: clsfix + '-group ' + className },
            _react2["default"].createElement(_InputNumber2["default"], _extends({
                onChange: function onChange(value) {
                    _this2.onChange(0, value);
                },
                onBlur: function onBlur(value) {
                    _this2.onBlur(0, value);
                },
                onFocus: function onFocus(value) {
                    _this2.onFocus(0, value);
                },
                value: stateValue[0],
                placeholder: placeholder[0]
            }, other)),
            split ? split : _react2["default"].createElement(
                'span',
                { className: clsfix + '-group-split' },
                '~'
            ),
            _react2["default"].createElement(_InputNumber2["default"], _extends({
                onChange: function onChange(value) {
                    _this2.onChange(1, value);
                },
                onBlur: function onBlur(value) {
                    _this2.onBlur(1, value);
                },
                onFocus: function onFocus(value) {
                    _this2.onFocus(1, value);
                },
                value: stateValue[1],
                placeholder: placeholder[1]
            }, other))
        );
    };

    return InputNumberGroup;
}(_react.Component);

InputNumberGroup.displayName = 'InputNumberGroup';


InputNumberGroup.propsTypes = propsTypes;
InputNumberGroup.defaultProps = defaultProps;

exports["default"] = InputNumberGroup;
module.exports = exports['default'];