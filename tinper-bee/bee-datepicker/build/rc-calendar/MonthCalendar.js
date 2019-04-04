'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _KeyCode = require('rc-util/lib/KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _CalendarHeader = require('./calendar/CalendarHeader');

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _CalendarFooter = require('./calendar/CalendarFooter');

var _CalendarFooter2 = _interopRequireDefault(_CalendarFooter);

var _CalendarMixin = require('./mixin/CalendarMixin');

var _CommonMixin = require('./mixin/CommonMixin');

var _DateInput = require('./date/DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var MonthCalendar = function (_React$Component) {
  _inherits(MonthCalendar, _React$Component);

  function MonthCalendar(props) {
    _classCallCheck(this, MonthCalendar);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onKeyDown = function (event) {
      var keyCode = event.keyCode;
      var ctrlKey = event.ctrlKey || event.metaKey;
      var stateValue = _this.state.value;
      var disabledDate = _this.props.disabledDate;

      var value = stateValue;
      switch (keyCode) {
        case _KeyCode2["default"].DOWN:
          value = stateValue.clone();
          value.add(3, 'months');
          break;
        case _KeyCode2["default"].UP:
          value = stateValue.clone();
          value.add(-3, 'months');
          break;
        case _KeyCode2["default"].LEFT:
          value = stateValue.clone();
          if (ctrlKey) {
            value.add(-1, 'years');
          } else {
            value.add(-1, 'months');
          }
          break;
        case _KeyCode2["default"].RIGHT:
          value = stateValue.clone();
          if (ctrlKey) {
            value.add(1, 'years');
          } else {
            value.add(1, 'months');
          }
          break;
        case _KeyCode2["default"].ENTER:
          if (!disabledDate || !disabledDate(stateValue)) {
            _this.onSelect(stateValue);
          }
          event.preventDefault();
          return 1;
        default:
          return undefined;
      }
      if (value !== stateValue) {
        _this.setValue(value);
        event.preventDefault();
        return 1;
      }
    };

    _this.handlePanelChange = function (_, mode) {
      if (mode !== 'date') {
        _this.setState({ mode: mode });
      }
    };

    _this.onInputChange = function (value) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          format = _this$props.format;

      _this.setState({
        value: value ? value : (0, _moment2["default"])()
      });
      _this.setValue(value);
      onChange && onChange(value);
    };

    _this.onClear = function () {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          format = _this$props2.format,
          onClear = _this$props2.onClear;

      _this.setState({
        value: (0, _moment2["default"])()
      });
      _this.setValue((0, _moment2["default"])());
      onChange && onChange('', '');
      onClear && onClear('', '');
    };

    _this.state = {
      mode: 'month',
      value: props.value || props.defaultValue || (0, _moment2["default"])(),
      selectedValue: props.selectedValue || props.defaultSelectedValue
    };
    return _this;
  }

  MonthCalendar.prototype.render = function render() {
    var props = this.props,
        state = this.state;
    var mode = state.mode,
        value = state.value;

    value = value ? value : (0, _moment2["default"])();
    var prefixCls = props.prefixCls,
        locale = props.locale,
        format = props.format,
        showDateInput = props.showDateInput,
        onChange = props.onChange,
        onSelect = props.onSelect,
        onClear = props.onClear,
        showMonthInput = props.showMonthInput;

    var children = _react2["default"].createElement(
      'div',
      { className: props.prefixCls + '-month-calendar-content' },
      _react2["default"].createElement(
        'div',
        { className: props.prefixCls + '-month-header-wrap' },
        showDateInput && showMonthInput ? _react2["default"].createElement(_DateInput2["default"], {
          value: value,
          prefixCls: prefixCls,
          showClear: true,
          locale: locale,
          format: format,
          onChange: this.onInputChange,
          selectedValue: value,
          onClear: this.onClear
        }) : '',
        _react2["default"].createElement(_CalendarHeader2["default"], {
          prefixCls: props.prefixCls,
          mode: mode,
          value: value,
          locale: props.locale,
          disabledMonth: props.disabledDate,
          monthCellRender: props.monthCellRender,
          monthCellContentRender: props.monthCellContentRender,
          onMonthSelect: this.onSelect,
          onValueChange: this.setValue,
          onPanelChange: this.handlePanelChange
          // onChange={onChange}
          , onClear: onClear
        })
      ),
      _react2["default"].createElement(_CalendarFooter2["default"], {
        prefixCls: props.prefixCls,
        renderFooter: props.renderFooter
      })
    );
    return this.renderRoot({
      className: props.prefixCls + '-month-calendar',
      children: children
    });
  };

  return MonthCalendar;
}(_react2["default"].Component);

MonthCalendar.propTypes = _extends({}, _CalendarMixin.calendarMixinPropTypes, _CommonMixin.propType, {
  monthCellRender: _propTypes2["default"].func,
  dateCellRender: _propTypes2["default"].func,
  value: _propTypes2["default"].object,
  defaultValue: _propTypes2["default"].object,
  selectedValue: _propTypes2["default"].object,
  defaultSelectedValue: _propTypes2["default"].object,
  disabledDate: _propTypes2["default"].func
});
MonthCalendar.defaultProps = _extends({
  showDateInput: false
}, _CommonMixin.defaultProp, _CalendarMixin.calendarMixinDefaultProps);
exports["default"] = (0, _CalendarMixin.calendarMixinWrapper)((0, _CommonMixin.commonMixinWrapper)(MonthCalendar));
module.exports = exports['default'];