'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./rc/index');

var _index2 = _interopRequireDefault(_index);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {};
var defaultProps = {
    focusOnOpen: true,
    clearIcon: _react2["default"].createElement('i', { className: 'uf uf-close-c' }),
    onKeyDown: function onKeyDown() {}
};

var Timepicker = function (_Component) {
    _inherits(Timepicker, _Component);

    function Timepicker(props) {
        _classCallCheck(this, Timepicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.initValue = function () {};

        _this.state = {
            value: props.value
        };
        return _this;
    }

    Timepicker.prototype.componentWillMount = function componentWillMount() {
        //判断初始值是否合法，不合法则格式化，并触发onChange回调
        var value = this.props.value;
        if (value) {
            if (typeof value == 'string') {
                value = (0, _moment2["default"])((0, _moment2["default"])().format('YYYY-MM-DD') + ' ' + value);
                this.setState({
                    value: value
                });
                this.props.onChange && this.props.onChange(value);
            } else if (value.format) {
                if (!value.isValid()) {
                    value = (0, _moment2["default"])((0, _moment2["default"])().format('YYYY-MM-DD') + ' ' + value._i);
                    this.setState({
                        value: value
                    });
                    this.props.onChange && this.props.onChange(value);
                }
            }
        } else {
            value = null;
        }
    };

    Timepicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            var value = nextProps.value;
            if (value) {
                if (typeof value == 'string') {
                    value = (0, _moment2["default"])((0, _moment2["default"])().format('YYYY-MM-DD') + ' ' + value);
                } else if (value.format) {
                    if (!value.isValid()) {
                        value = (0, _moment2["default"])((0, _moment2["default"])().format('YYYY-MM-DD') + ' ' + value._i);
                    }
                }
            } else {
                value = null;
            }
            this.setState({
                value: value
            });
        }
    };

    Timepicker.prototype.render = function render() {
        var _props = this.props,
            value = _props.value,
            other = _objectWithoutProperties(_props, ['value']);

        return _react2["default"].createElement(_index2["default"], _extends({ prefixCls: 'u-time-picker', value: this.state.value }, other));
    };

    return Timepicker;
}(_react.Component);

;
Timepicker.propTypes = propTypes;
Timepicker.defaultProps = defaultProps;
exports["default"] = Timepicker;
module.exports = exports['default'];