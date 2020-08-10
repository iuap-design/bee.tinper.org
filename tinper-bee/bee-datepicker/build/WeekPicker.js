"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rcCalendar = require("./rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _Picker = require("./rc-calendar/Picker");

var _Picker2 = _interopRequireDefault(_Picker);

var _beeFormControl = require("bee-form-control");

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _zh_CN = require("./locale/zh_CN");

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _en_US = require("./locale/en_US");

var _en_US2 = _interopRequireDefault(_en_US);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeInputGroup = require("bee-input-group");

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

require("moment/locale/zh-cn");

require("moment/locale/en-gb");

var _omit = require("omit.js");

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chief on 17/4/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var cn = typeof window !== 'undefined' ? location.search.indexOf("cn") !== -1 : true;

var now = (0, _moment2["default"])();
if (cn) {
  now.locale("zh-cn").utcOffset(8);
} else {
  now.locale("en-gb").utcOffset(0);
}

var format = "YYYY-Wo";

var style = "\n.week-calendar .rc-calendar-tbody > tr:hover\n.rc-calendar-date {\n  background: #ebfaff;\n}\n\n.week-calendar .rc-calendar-tbody > tr:hover\n.rc-calendar-selected-day .rc-calendar-date {\n    background: #3fc7fa;\n}\n.week-calendar .week-calendar-footer {\n  position:absolute;\n  top:0;\n  left:0;\n  bottom:0;\n  width:100%;\n  border-right: 1px solid #ccc;\n}\n";

var WeekPicker = function (_Component) {
  _inherits(WeekPicker, _Component);

  function WeekPicker(props, context) {
    _classCallCheck(this, WeekPicker);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _initialiseProps.call(_this);

    _this.state = {
      value: _this.initValue(props),
      open: false,
      showClose: false
    };
    return _this;
  }

  WeekPicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ("value" in nextProps) {
      this.setState({
        value: this.initValue(nextProps)
      });
    }
  };

  WeekPicker.prototype.render = function render() {
    var _this2 = this;

    var state = this.state;
    var props = this.props;

    var showClose = props.showClose,
        others = _objectWithoutProperties(props, ["showClose"]);

    var value = state.value;
    var calendar = _react2["default"].createElement(_rcCalendar2["default"], {
      className: "week-calendar",
      showWeekNumber: true,
      showMonthInput: false,
      renderFooter: this.renderFooter,
      dateRender: this.dateRender,
      locale: cn ? _zh_CN2["default"] : _en_US2["default"],
      format: format,
      dateInputPlaceholder: this.props.placeholder,
      defaultValue: now,
      showDateInput: true,
      onChange: this.handleCalendarChange,
      showToday: false,
      onClear: this.onClear
    });
    var classes = (0, _classnames2["default"])(props.className, "datepicker-container");
    return _react2["default"].createElement(
      "div",
      _extends({ className: classes
      }, (0, _omit2["default"])(others, ['closeIcon', 'renderIcon', 'format', 'locale', 'placeholder'])),
      _react2["default"].createElement(
        _Picker2["default"],
        _extends({
          animation: "slide-up"
        }, props, {
          onOpenChange: this.onOpenChange,
          open: this.state.open,
          calendar: calendar,
          value: state.value
        }),
        function (_ref) {
          _objectDestructuringEmpty(_ref);

          return _react2["default"].createElement(
            _beeInputGroup2["default"],
            { simple: true, className: "datepicker-input-group",
              onMouseEnter: _this2.onMouseEnter,
              onMouseLeave: _this2.onMouseLeave
            },
            _react2["default"].createElement(_beeFormControl2["default"], {
              placeholder: _this2.props.placeholder,
              disabled: props.disabled,
              readOnly: true,
              tabIndex: "-1",
              className: _this2.props.className,
              value: value && value.format(format) || ""
            }),
            showClose && _this2.state.value && _this2.state.showClose && !props.disabled ? _react2["default"].createElement(
              _beeInputGroup2["default"].Button,
              { shape: "border",
                onClick: _this2.onClear },
              props.closeIcon()
            ) : _react2["default"].createElement(
              _beeInputGroup2["default"].Button,
              { shape: "border" },
              props.renderIcon()
            )
          );
        }
      )
    );
  };

  return WeekPicker;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.initValue = function (props) {
    var value = props.value || props.defaultValue || '';
    var format = props.format;
    if (value) {
      if (typeof value == 'string') {
        if ((0, _moment2["default"])(value, format).isValid()) {
          value = (0, _moment2["default"])(value, format);
        } else {
          console.error('value is not in the correct format');
          value = '';
        }
      } else if (value.format && value.isValid()) {
        value = value;
      } else {
        console.error('value is not in the correct format');
        value = '';
      }
    }

    return value;
  };

  this.onChange = function (value) {
    _this3.setState({
      value: value
    });
  };

  this.onOpenChange = function (open) {
    _this3.setState({
      open: open
    });
  };

  this.dateRender = function (current) {
    var selectedValue = _this3.state.value;
    if (selectedValue && current.year() === selectedValue.year() && current.week() === selectedValue.week()) {
      return _react2["default"].createElement(
        "div",
        { className: "rc-calendar-selected-day" },
        _react2["default"].createElement(
          "div",
          { className: "rc-calendar-date" },
          current.date()
        )
      );
    }
    return _react2["default"].createElement(
      "div",
      { className: "rc-calendar-date" },
      current.date()
    );
  };

  this.lastWeek = function () {
    var value = _this3.props.value || now;
    value.add(-1, "weeks");
    _this3.setState({
      value: value,
      open: false
    });
  };

  this.nextWeek = function () {
    var value = _this3.props.value || now;
    value.add(+1, "weeks");
    _this3.setState({
      value: value,
      open: false
    });
  };

  this.nowWeek = function () {
    var value = now;
    _this3.setState({
      value: value,
      open: false
    });
  };

  this.renderFooter = function () {
    return _react2["default"].createElement(
      "div",
      { className: "week-calendar-footer", key: "footer" },
      _react2["default"].createElement(
        "span",
        {
          className: "week-calendar-footer-button",
          onClick: _this3.lastWeek.bind(_this3),
          style: { 'float': 'left' }
        },
        _this3.props.locale.lastWeek
      ),
      _react2["default"].createElement(
        "span",
        {
          className: "week-calendar-footer-button",
          onClick: _this3.nowWeek.bind(_this3)
        },
        _this3.props.locale.nowWeek
      ),
      _react2["default"].createElement(
        "span",
        {
          className: "week-calendar-footer-button",
          onClick: _this3.nextWeek.bind(_this3),
          style: { 'float': 'right' }
        },
        _this3.props.locale.nextWeek
      )
    );
  };

  this.onTypeChange = function (type) {
    _this3.setState({
      type: type
    });
  };

  this.handleCalendarChange = function (value) {
    _this3.setState({
      value: value && _extends(value, { _type: 'week' }) || value
    });
  };

  this.onMouseLeave = function (e) {
    _this3.setState({
      showClose: false
    });
  };

  this.onMouseEnter = function (e) {
    _this3.setState({
      showClose: true
    });
  };

  this.onClear = function (e) {
    e && e.stopPropagation && e.stopPropagation();
    _this3.setState({
      value: ''
    });
    _this3.props.onChange && _this3.props.onChange('', '');
  };
};

WeekPicker.defaultProps = {
  closeIcon: function closeIcon() {
    return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-close-c" });
  },
  renderIcon: function renderIcon() {
    return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-calendar" });
  },
  locale: _zh_CN2["default"],
  showClose: true,
  format: "YYYY-Wo"
};

exports["default"] = WeekPicker;
module.exports = exports["default"];