'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FullCalendar = require('rc-calendar/lib/FullCalendar');

var _FullCalendar2 = _interopRequireDefault(_FullCalendar);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSelect = require('rc-select');

var _rcSelect2 = _interopRequireDefault(_rcSelect);

var _zh_CN = require('rc-calendar/lib/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _en_US = require('rc-calendar/lib/locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {};
var defaultProps = {};

var format = 'YYYY-MM-DD';
var cn = location.search.indexOf('cn') !== -1;

var now = (0, _moment2["default"])();
if (cn) {
    now.locale('zh-cn').utcOffset(8);
} else {
    now.locale('en-gb').utcOffset(0);
}

var defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

var Calendar = function (_Component) {
    _inherits(Calendar, _Component);

    function Calendar(props, context) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.state = {
            type: 'month'
        };
        return _this;
    }

    Calendar.prototype.onTypeChange = function onTypeChange(type) {
        this.setState({
            type: type
        });
    };

    Calendar.prototype.render = function render() {
        return _react2["default"].createElement(_FullCalendar2["default"], _extends({
            prefixCls: 'u-calendar',
            Select: _rcSelect2["default"],
            defaultValue: now,
            locale: cn ? _zh_CN2["default"] : _en_US2["default"]
        }, this.props));
    };

    return Calendar;
}(_react.Component);

;
Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;

exports["default"] = Calendar;
module.exports = exports['default'];