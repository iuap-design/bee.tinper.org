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

var _tinperBeeCore = require("tinper-bee-core");

var _Picker = require("./rc-calendar/Picker");

var _Picker2 = _interopRequireDefault(_Picker);

var _beeFormControl = require("bee-form-control");

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _Panel = require("rc-time-picker/lib/Panel");

var _Panel2 = _interopRequireDefault(_Panel);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _beeInputGroup = require("bee-input-group");

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

var _zh_CN = require("./locale/zh_CN");

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chief on 17/4/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var timePickerElement = _react2["default"].createElement(_Panel2["default"], { defaultValue: (0, _moment2["default"])((0, _moment2["default"])().format("HH:mm:ss"), "HH:mm:ss") });

var timerDatePicker = true;

var DatePicker = function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props, context) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _initialiseProps.call(_this);

    _this.state = {
      type: "month",
      value: props.value || props.defaultValue || _moment2["default"].Moment,
      open: props.open || false,
      inputValue: props.value && props.value.format(props.format) || props.defaultValue && props.defaultValue.format(props.format) || '',
      showClose: false
    };

    return _this;
  }

  DatePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ("value" in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
    if ("open" in nextProps) {
      this.setState({
        open: nextProps.open
      });
    }
    if ("renderIcon" in nextProps) {
      this.setState({
        renderIcon: nextProps.renderIcon
      });
    }
  };

  DatePicker.prototype.render = function render() {
    var _this2 = this;

    var state = this.state;
    var props = this.props;
    var value = state.value;
    var pickerChangeHandler = {};
    var calendarHandler = {};
    var autofocus = this.props.autofocus ? { autofocus: 'autofocus' } : null;

    if (props.showTime) {
      calendarHandler = {
        // fix https://github.com/ant-design/ant-design/issues/1902
        onSelect: this.handleChange
      };
    } else {
      pickerChangeHandler = {
        onChange: this.handleChange
      };
    }

    var calendar = _react2["default"].createElement(_rcCalendar2["default"], _extends({
      timePicker: props.showTime ? timePickerElement : null
    }, props, {
      onSelect: this.handleSelect,
      onChange: this.handleCalendarChange,
      value: this.state.value
    }));

    var keyboardInputProps = {};
    if (props.keyboardInput) {
      keyboardInputProps.readOnly = false;
      keyboardInputProps.onChange = this.inputChange;
      keyboardInputProps.value = state.inputValue;
    } else {
      keyboardInputProps.readOnly = true;
      keyboardInputProps.value = value && value.format(props.format) || "";
    }
    var classes = (0, _classnames2["default"])(props.className, "datepicker-container");
    return _react2["default"].createElement(
      "div",
      { className: classes },
      _react2["default"].createElement(
        _Picker2["default"],
        _extends({
          animation: "slide-up"
        }, props, pickerChangeHandler, {
          onOpenChange: this.onOpenChange,
          calendar: calendar,
          mode: 'year',
          open: this.state.open,
          value: state.value
        }),
        function () {
          return _react2["default"].createElement(
            _beeInputGroup2["default"],
            { simple: true, className: "datepicker-input-group",
              onMouseEnter: _this2.onMouseEnter,
              onMouseLeave: _this2.onMouseLeave
            },
            _react2["default"].createElement(_beeFormControl2["default"], _extends({
              ref: function ref(_ref) {
                return _this2.outInput = _ref;
              },
              disabled: props.disabled,
              placeholder: _this2.props.placeholder,
              onClick: function onClick(event) {
                _this2.onClick(event);
              },
              focusSelect: props.defaultSelected,
              onFocus: function onFocus(v, e) {
                _this2.outInputFocus(e);
              },
              onKeyDown: _this2.outInputKeydown
            }, keyboardInputProps, autofocus)),
            _this2.state.value && _this2.state.showClose && !props.disabled ? _react2["default"].createElement(
              _beeInputGroup2["default"].Button,
              { shape: "border",
                onClick: _this2.clear },
              _react2["default"].createElement("i", { className: "uf uf-close-c" })
            ) : _react2["default"].createElement(
              _beeInputGroup2["default"].Button,
              { shape: "border",
                onClick: function onClick(e) {
                  props.keyboardInput ? _this2.iconClick(e) : '';
                } },
              props.renderIcon()
            )
          );
        }
      )
    );
  };

  return DatePicker;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onChange = function (value) {
    var props = _this3.props;

    _this3.setState({ value: value });
  };

  this.inputFocus = function () {
    var input = document.querySelector('.rc-calendar-input');
    if (input) {
      if (input.value) {
        input.select();
      } else {
        input.focus();
      }
      input.onkeydown = function (e) {
        if (e.keyCode == _tinperBeeCore.KeyCode.DELETE) {
          input.value = '';
          _this3.props.onChange('', '');
        } else if (e.keyCode == _tinperBeeCore.KeyCode.ESC || e.keyCode == _tinperBeeCore.KeyCode.ENTER) {
          _this3.setState({
            open: false
          });
          var v = _this3.state.value;
          _this3.props.onOpenChange(false, v, v && v.format(_this3.props.format) || '');
          _reactDom2["default"].findDOMNode(_this3.outInput).focus(); // 按esc时候焦点回到input输入框
        }
      };
    }
  };

  this.onOpenChange = function (open) {
    var props = _this3.props;
    var self = _this3;
    _this3.setState({
      open: open
    }, function () {
      if (open) {
        setTimeout(function () {
          self.inputFocus();
        }, 0);
      }
    });
    var value = self.state.value;
    props.onOpenChange(open, value, value && value.format(props.format) || '');
    if (open) {
      setTimeout(function () {
        self.inputFocus();
      }, 200);
    }
  };

  this.handleCalendarChange = function (value) {
    var props = _this3.props;
    _this3.setState({ value: value, inputValue: value && value.format(props.format) || '' });
    //props.onChange(value, (value && value.format(props.format)) || '');
  };

  this.handleChange = function (value) {
    var props = _this3.props;
    _this3.setState({ value: value, inputValue: value && value.format(props.format) || '' });
    if (timerDatePicker) {
      clearTimeout(_this3.timerout);
      props.onChange(value, value && value.format(props.format) || '');
      timerDatePicker = false;
      _this3.timerout = window.setTimeout(function () {
        timerDatePicker = true;
      }, 300);
    }
  };

  this.onClick = function (e) {
    var props = _this3.props;
    if (props.keyboardInput) e.stopPropagation();
    var value = _this3.state.value;
    if (props.keyboardInput) {
      props.onClick && props.onClick(e.nativeEvent, value || null, _this3.state.inputValue);
    } else {
      props.onClick && props.onClick(e.nativeEvent, value || null, value && value.format(props.format) || '');
    }
  };

  this.inputChange = function (value, e) {
    if (_this3.props.keyboardInput) e.stopPropagation();
    _this3.setState({
      inputValue: value
    });
    if ((0, _moment2["default"])(value, _this3.props.format).isValid()) {
      _this3.setState({
        value: (0, _moment2["default"])(value, _this3.props.format)
      });
      value = (0, _moment2["default"])(value, _this3.props.format);
      _this3.props.onChange(value, value && value.format(_this3.props.format) || '');
    } else {
      _this3.props.onChange(null, value);
    }
  };

  this.outInputFocus = function (e) {
    if (_this3.props.hasOwnProperty('open')) e.stopPropagation();
    _this3.props.outInputFocus && _this3.props.outInputFocus(e);
  };

  this.iconClick = function (e) {
    _this3.props.iconClick && _this3.props.iconClick(e);
  };

  this.outInputKeydown = function (e) {
    if (e.keyCode == _tinperBeeCore.KeyCode.DELETE) {
      _this3.setState({
        inputValue: ''
      });
      _this3.props.onChange('', '');
    } else if (e.keyCode == _tinperBeeCore.KeyCode.ESC) {
      _this3.setState({
        open: false
      });
      var value = _this3.state.inputValue;
      if ((0, _moment2["default"])(value, _this3.props.format).isValid()) {
        _this3.setState({
          value: (0, _moment2["default"])(value, _this3.props.format)
        });
        value = (0, _moment2["default"])(value, _this3.props.format);
        _this3.props.onChange(value, value && value.format(_this3.props.format) || '');
      } else {
        _this3.props.onChange(null, value);
      }
    }
    _this3.props.outInputKeydown && _this3.props.outInputKeydown(e);
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

  this.clear = function (e) {
    e.stopPropagation();
    _this3.setState({
      inputValue: '',
      value: ''
    });
    _this3.props.onChange && _this3.props.onChange('', '');
  };

  this.handleSelect = function (value) {
    _this3.setState({
      value: value
    });
    _this3.props.onSelect && _this3.props.onSelect(value, value && value.format(_this3.props.format) || '');
    // ReactDOM.findDOMNode(this.outInput).focus()
  };
};

DatePicker.defaultProps = {
  renderIcon: function renderIcon() {
    return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-calendar" });
  },
  focusOnOpen: true,
  defultSelect: false,
  onOpenChange: function onOpenChange() {},
  onChange: function onChange() {},
  locale: _zh_CN2["default"],
  showMonthInput: false
};

exports["default"] = DatePicker;
module.exports = exports["default"];