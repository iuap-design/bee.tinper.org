'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CalendarHeader = require('../calendar/CalendarHeader');

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _DateTable = require('../date/DateTable');

var _DateTable2 = _interopRequireDefault(_DateTable);

var _DateInput = require('../date/DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

var _index = require('../util/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var CalendarPart = function (_React$Component) {
  _inherits(CalendarPart, _React$Component);

  function CalendarPart() {
    _classCallCheck(this, CalendarPart);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  CalendarPart.prototype.render = function render() {
    var props = this.props;
    var prefixCls = props.prefixCls,
        value = props.value,
        hoverValue = props.hoverValue,
        selectedValue = props.selectedValue,
        mode = props.mode,
        direction = props.direction,
        locale = props.locale,
        format = props.format,
        placeholder = props.placeholder,
        disabledDate = props.disabledDate,
        timePicker = props.timePicker,
        disabledTime = props.disabledTime,
        timePickerDisabledTime = props.timePickerDisabledTime,
        showTimePicker = props.showTimePicker,
        onInputChange = props.onInputChange,
        onInputSelect = props.onInputSelect,
        enablePrev = props.enablePrev,
        enableNext = props.enableNext,
        clearIcon = props.clearIcon,
        renderError = props.renderError,
        inputTabIndex = props.inputTabIndex,
        onInputBlur = props.onInputBlur;

    var shouldShowTimePicker = showTimePicker && timePicker;
    var disabledTimeConfig = shouldShowTimePicker && disabledTime ? (0, _index.getTimeConfig)(selectedValue, disabledTime) : null;
    var rangeClassName = prefixCls + '-range';
    var newProps = {
      locale: locale,
      value: value,
      prefixCls: prefixCls,
      showTimePicker: showTimePicker
    };
    var index = direction === 'left' ? 0 : 1;
    var timePickerEle = shouldShowTimePicker && _react2["default"].cloneElement(timePicker, _extends({
      showHour: true,
      showMinute: true,
      showSecond: true
    }, timePicker.props, disabledTimeConfig, timePickerDisabledTime, {
      onChange: onInputChange,
      defaultOpenValue: value,
      value: selectedValue[index]
    }));

    var dateInputElement = props.showDateInput && _react2["default"].createElement(_DateInput2["default"], {
      isRange: true,
      format: format,
      locale: locale,
      prefixCls: prefixCls,
      timePicker: timePicker,
      disabledDate: disabledDate,
      placeholder: placeholder,
      disabledTime: disabledTime,
      value: value,
      showClear: false,
      selectedValue: selectedValue[index],
      onChange: onInputChange,
      onSelect: onInputSelect,
      clearIcon: clearIcon,
      renderError: renderError,
      inputTabIndex: inputTabIndex,
      onBlur: onInputBlur
    });

    return _react2["default"].createElement(
      'div',
      {
        className: rangeClassName + '-part ' + rangeClassName + '-' + direction
      },
      dateInputElement,
      _react2["default"].createElement(
        'div',
        { style: { outline: 'none' }, tabIndex: props.tabIndex, className: rangeClassName + '-out' },
        _react2["default"].createElement(_CalendarHeader2["default"], _extends({}, newProps, {
          mode: mode,
          enableNext: enableNext,
          enablePrev: enablePrev,
          onValueChange: props.onValueChange,
          onPanelChange: props.onPanelChange,
          disabledMonth: props.disabledMonth
        })),
        showTimePicker ? _react2["default"].createElement(
          'div',
          { className: prefixCls + '-time-picker' },
          _react2["default"].createElement(
            'div',
            { className: prefixCls + '-time-picker-panel' },
            timePickerEle
          )
        ) : null,
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-body' },
          _react2["default"].createElement(_DateTable2["default"], _extends({}, newProps, {
            hoverValue: hoverValue,
            selectedValue: selectedValue,
            dateRender: props.dateRender,
            onSelect: props.onSelect,
            onDayHover: props.onDayHover,
            disabledDate: disabledDate,
            showWeekNumber: props.showWeekNumber
          }))
        )
      )
    );
  };

  return CalendarPart;
}(_react2["default"].Component);

CalendarPart.propTypes = {
  prefixCls: _propTypes2["default"].string,
  value: _propTypes2["default"].any,
  hoverValue: _propTypes2["default"].any,
  selectedValue: _propTypes2["default"].any,
  direction: _propTypes2["default"].any,
  locale: _propTypes2["default"].any,
  showDateInput: _propTypes2["default"].bool,
  showTimePicker: _propTypes2["default"].bool,
  format: _propTypes2["default"].any,
  placeholder: _propTypes2["default"].any,
  disabledDate: _propTypes2["default"].any,
  timePicker: _propTypes2["default"].any,
  disabledTime: _propTypes2["default"].any,
  onInputChange: _propTypes2["default"].func,
  onInputSelect: _propTypes2["default"].func,
  timePickerDisabledTime: _propTypes2["default"].object,
  enableNext: _propTypes2["default"].any,
  enablePrev: _propTypes2["default"].any,
  clearIcon: _propTypes2["default"].node
};
exports["default"] = CalendarPart;
module.exports = exports['default'];