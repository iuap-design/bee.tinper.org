'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _KeyCode = require('rc-util/lib/KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _DateTable = require('./date/DateTable');

var _DateTable2 = _interopRequireDefault(_DateTable);

var _CalendarHeader = require('./calendar/CalendarHeader');

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _CalendarFooter = require('./calendar/CalendarFooter');

var _CalendarFooter2 = _interopRequireDefault(_CalendarFooter);

var _CalendarMixin = require('./mixin/CalendarMixin');

var _CommonMixin = require('./mixin/CommonMixin');

var _DateInput = require('./date/DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

var _util = require('./util');

var _toTime = require('./util/toTime');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var Calendar = function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      mode: _this.props.mode || 'date',
      value: props.value || props.defaultValue || (0, _moment2["default"])(),
      selectedValue: props.selectedValue || props.defaultSelectedValue
    };
    return _this;
  }

  Calendar.prototype.componentDidMount = function componentDidMount() {
    if (this.props.showDateInput) {
      this.saveFocusElement(_DateInput2["default"].getInstance());
    }
  };

  Calendar.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
    var value = nextProps.value,
        selectedValue = nextProps.selectedValue;

    var newState = {};

    if ('mode' in nextProps && state.mode !== nextProps.mode) {
      newState = { mode: nextProps.mode };
    }
    if ('value' in nextProps) {
      newState.value = value || nextProps.defaultValue || (0, _CalendarMixin.getNowByCurrentStateValue)(state.value);
    }
    if ('selectedValue' in nextProps) {
      newState.selectedValue = selectedValue;
    }

    return newState;
  };

  Calendar.prototype.render = function render() {
    var props = this.props,
        state = this.state;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        disabledDate = props.disabledDate,
        dateInputPlaceholder = props.dateInputPlaceholder,
        timePicker = props.timePicker,
        disabledTime = props.disabledTime,
        clearIcon = props.clearIcon,
        renderFooter = props.renderFooter,
        showMonthInput = props.showMonthInput,
        renderError = props.renderError,
        onInputBlur = props.onInputBlur;
    var value = state.value,
        selectedValue = state.selectedValue,
        mode = state.mode;

    var showTimePicker = mode === 'time';
    var disabledTimeConfig = showTimePicker && disabledTime && timePicker ? (0, _util.getTimeConfig)(selectedValue, disabledTime) : null;

    var timePickerEle = null;

    if (timePicker && showTimePicker) {
      var timePickerProps = _extends({
        showHour: true,
        showSecond: true,
        showMinute: true
      }, timePicker.props, disabledTimeConfig, {
        onChange: this.onDateInputChange,
        value: selectedValue,
        disabledTime: disabledTime
      });

      if (timePicker.props.defaultValue !== undefined) {
        timePickerProps.defaultOpenValue = timePicker.props.defaultValue;
      }

      timePickerEle = _react2["default"].cloneElement(timePicker, timePickerProps);
    }
    var dateInputElement = props.showDateInput ? _react2["default"].createElement(_DateInput2["default"], {
      format: this.getFormat(),
      key: 'date-input',
      value: value,
      locale: locale,
      placeholder: dateInputPlaceholder,
      showClear: true,
      disabledTime: disabledTime,
      disabledDate: disabledDate,
      onClear: this.onClear,
      prefixCls: prefixCls,
      selectedValue: selectedValue,
      onChange: this.onDateInputChange,
      onSelect: this.onDateInputSelect,
      clearIcon: clearIcon,
      renderError: renderError,
      onBlur: onInputBlur
    }) : null;

    var children = [];
    if (props.renderSidebar) {
      children.push(props.renderSidebar());
    }
    children.push(_react2["default"].createElement(
      'div',
      { className: prefixCls + '-panel', key: 'panel' },
      dateInputElement,
      _react2["default"].createElement(
        'div',
        {
          tabIndex: this.props.focusablePanel ? 0 : undefined,
          className: prefixCls + '-date-panel',
          onMouseOver: this.onMouseOver
        },
        _react2["default"].createElement(_CalendarHeader2["default"], {
          locale: locale,
          mode: mode,
          value: value,
          onValueChange: this.setValue,
          onPanelChange: this.onPanelChange,
          renderFooter: renderFooter,
          showTimePicker: showTimePicker,
          prefixCls: prefixCls,
          showMonthInput: showMonthInput
        }),
        timePicker && showTimePicker ? _react2["default"].createElement(
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
          _react2["default"].createElement(_DateTable2["default"], {
            locale: locale,
            value: value,
            selectedValue: selectedValue,
            prefixCls: prefixCls,
            dateRender: props.dateRender,
            onSelect: this.onDateTableSelect,
            disabledDate: disabledDate,
            showWeekNumber: props.showWeekNumber
          })
        ),
        _react2["default"].createElement(_CalendarFooter2["default"], {
          showOk: props.showOk,
          mode: mode,
          renderFooter: props.renderFooter,
          locale: locale,
          prefixCls: prefixCls,
          showToday: props.showToday,
          disabledTime: disabledTime,
          showTimePicker: showTimePicker,
          showDateInput: props.showDateInput,
          timePicker: timePicker,
          selectedValue: selectedValue,
          value: value,
          disabledDate: disabledDate,
          okDisabled: props.showOk !== false && (!selectedValue || !this.isAllowedDate(selectedValue)),
          onOk: this.onOk,
          onSelect: this.onSelect,
          onToday: this.onToday,
          onOpenTimePicker: this.openTimePicker,
          onCloseTimePicker: this.closeTimePicker
        })
      )
    ));

    return this.renderRoot({
      children: children,
      className: props.showWeekNumber ? prefixCls + '-week-number' : ''
    });
  };

  return Calendar;
}(_react2["default"].Component);

Calendar.propTypes = _extends({}, _CalendarMixin.calendarMixinPropTypes, _CommonMixin.propType, {
  prefixCls: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  style: _propTypes2["default"].object,
  defaultValue: _propTypes2["default"].object,
  value: _propTypes2["default"].object,
  selectedValue: _propTypes2["default"].object,
  defaultSelectedValue: _propTypes2["default"].object,
  mode: _propTypes2["default"].oneOf(['time', 'date', 'month', 'year', 'decade']),
  locale: _propTypes2["default"].object,
  showDateInput: _propTypes2["default"].bool,
  showWeekNumber: _propTypes2["default"].bool,
  showToday: _propTypes2["default"].bool,
  showOk: _propTypes2["default"].bool,
  onSelect: _propTypes2["default"].func,
  onOk: _propTypes2["default"].func,
  onKeyDown: _propTypes2["default"].func,
  timePicker: _propTypes2["default"].element,
  dateInputPlaceholder: _propTypes2["default"].any,
  onClear: _propTypes2["default"].func,
  onChange: _propTypes2["default"].func,
  onPanelChange: _propTypes2["default"].func,
  disabledDate: _propTypes2["default"].func,
  disabledTime: _propTypes2["default"].any,
  dateRender: _propTypes2["default"].func,
  renderFooter: _propTypes2["default"].func,
  renderSidebar: _propTypes2["default"].func,
  clearIcon: _propTypes2["default"].node,
  focusablePanel: _propTypes2["default"].bool
});
Calendar.defaultProps = _extends({}, _CalendarMixin.calendarMixinDefaultProps, _CommonMixin.defaultProp, {
  showToday: true,
  showDateInput: true,
  timePicker: null,
  onOk: noop,
  onPanelChange: noop,
  focusablePanel: true
});

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onPanelChange = function (value, mode) {
    var props = _this2.props,
        state = _this2.state;

    if (!('mode' in props)) {
      _this2.setState({ mode: mode });
    }
    props.onPanelChange(value || state.value, mode);
  };

  this.onKeyDown = function (event) {
    if (event.target.nodeName.toLowerCase() === 'input') {
      return undefined;
    } else {
      _this2.props.onKeyDown && _this2.props.onKeyDown(event);
    }
    var keyCode = event.keyCode;
    // mac
    var ctrlKey = event.ctrlKey || event.metaKey;
    var disabledDate = _this2.props.disabledDate;
    var value = _this2.state.value;

    switch (keyCode) {
      case _KeyCode2["default"].DOWN:
        _this2.goTime(1, 'weeks');
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].UP:
        _this2.goTime(-1, 'weeks');
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].LEFT:
        if (ctrlKey) {
          _this2.goTime(-1, 'years');
        } else {
          _this2.goTime(-1, 'days');
        }
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].RIGHT:
        if (ctrlKey) {
          _this2.goTime(1, 'years');
        } else {
          _this2.goTime(1, 'days');
        }
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].HOME:
        _this2.setValue((0, _toTime.goStartMonth)(_this2.state.value));
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].END:
        _this2.setValue((0, _toTime.goEndMonth)(_this2.state.value));
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].PAGE_DOWN:
        _this2.goTime(1, 'month');
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].PAGE_UP:
        _this2.goTime(-1, 'month');
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].ENTER:
        if (!disabledDate || !disabledDate(value)) {
          _this2.onSelect(value, {
            source: 'keyboard'
          });
        }
        event.preventDefault();
        return 1;
    }
  };

  this.onClear = function () {
    _this2.onSelect(null);
    _this2.props.onClear();
  };

  this.onOk = function () {
    var selectedValue = _this2.state.selectedValue;

    if (_this2.isAllowedDate(selectedValue)) {
      _this2.props.onOk(selectedValue);
    }
  };

  this.onDateInputChange = function (value) {
    _this2.onSelect(value, {
      source: 'dateInput'
    });
  };

  this.onDateInputSelect = function (value) {
    _this2.onSelect(value, {
      source: 'dateInputSelect'
    });
  };

  this.onDateTableSelect = function (value) {
    var timePicker = _this2.props.timePicker;
    var selectedValue = _this2.state.selectedValue;

    if (!selectedValue && timePicker) {
      var timePickerDefaultValue = timePicker.props.defaultValue;
      if (timePickerDefaultValue) {
        (0, _util.syncTime)(timePickerDefaultValue, value);
      }
    }
    _this2.onSelect(value);
  };

  this.onToday = function () {
    var value = _this2.state.value;

    var now = (0, _util.getTodayTime)(value);
    _this2.onSelect(now, {
      source: 'todayButton'
    });
  };

  this.getRootDOMNode = function () {
    return _reactDom2["default"].findDOMNode(_this2);
  };

  this.openTimePicker = function () {
    _this2.onPanelChange(null, 'time');
  };

  this.closeTimePicker = function () {
    _this2.onPanelChange(null, 'date');
  };

  this.goTime = function (direction, unit) {
    _this2.setValue((0, _toTime.goTime)(_this2.state.value, direction, unit));
  };

  this.onMouseOver = function (e) {
    e.stopPropagation();
  };
};

(0, _reactLifecyclesCompat.polyfill)(Calendar);

exports["default"] = (0, _CalendarMixin.calendarMixinWrapper)((0, _CommonMixin.commonMixinWrapper)(Calendar));
module.exports = exports['default'];