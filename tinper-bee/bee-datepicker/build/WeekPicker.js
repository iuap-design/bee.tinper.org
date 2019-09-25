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

    _this.onChange = function (value) {
      _this.setState({
        value: value
      });
    };

    _this.onOpenChange = function (open) {
      _this.setState({
        open: open
      });
    };

    _this.dateRender = function (current) {
      var selectedValue = _this.state.value;
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

    _this.lastWeek = function () {
      var value = _this.props.value || now;
      value.add(-1, "weeks");
      _this.setState({
        value: value,
        open: false
      });
    };

    _this.nextWeek = function () {
      var value = _this.props.value || now;
      value.add(+1, "weeks");
      _this.setState({
        value: value,
        open: false
      });
    };

    _this.nowWeek = function () {
      var value = now;
      _this.setState({
        value: value,
        open: false
      });
    };

    _this.renderFooter = function () {
      return _react2["default"].createElement(
        "div",
        { className: "week-calendar-footer", key: "footer" },
        _react2["default"].createElement(
          "span",
          {
            className: "week-calendar-footer-button",
            onClick: _this.lastWeek.bind(_this),
            style: { 'float': 'left' }
          },
          _this.props.locale.lastWeek
        ),
        _react2["default"].createElement(
          "span",
          {
            className: "week-calendar-footer-button",
            onClick: _this.nowWeek.bind(_this)
          },
          _this.props.locale.nowWeek
        ),
        _react2["default"].createElement(
          "span",
          {
            className: "week-calendar-footer-button",
            onClick: _this.nextWeek.bind(_this),
            style: { 'float': 'right' }
          },
          _this.props.locale.nextWeek
        )
      );
    };

    _this.onTypeChange = function (type) {
      _this.setState({
        type: type
      });
    };

    _this.handleCalendarChange = function (value) {
      _this.setState({
        value: value && _extends(value, { _type: 'week' }) || value
      });
    };

    _this.onMouseLeave = function (e) {
      _this.setState({
        showClose: false
      });
    };

    _this.onMouseEnter = function (e) {
      _this.setState({
        showClose: true
      });
    };

    _this.onClear = function (e) {
      e && e.stopPropagation && e.stopPropagation();
      _this.setState({
        value: ''
      });
      _this.props.onChange && _this.props.onChange('', '');
    };

    _this.stopPropagation = function (e) {
      e.stopPropagation();
    };

    _this.state = {
      value: props.value || props.defaultValue,
      open: false,
      showClose: false
    };
    return _this;
  }
  //阻止组件内部事件冒泡到组件外部容器


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
      _extends({ className: classes, onClick: this.stopPropagation, onMouseOver: this.stopPropagation
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

WeekPicker.defaultProps = {
  closeIcon: function closeIcon() {
    return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-close-c" });
  },
  renderIcon: function renderIcon() {
    return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-calendar" });
  },
  locale: _zh_CN2["default"],
  showClose: true
};

exports["default"] = WeekPicker;
module.exports = exports["default"];