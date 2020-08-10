"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _MonthCalendar = require("./rc-calendar/MonthCalendar");

var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);

var _tinperBeeCore = require("tinper-bee-core");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Picker = require("./rc-calendar/Picker");

var _Picker2 = _interopRequireDefault(_Picker);

var _beeFormControl = require("bee-form-control");

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeInputGroup = require("bee-input-group");

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _zh_CN = require("./locale/zh_CN");

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _omit = require("omit.js");

var _omit2 = _interopRequireDefault(_omit);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _util = require("./rc-calendar/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chief on 17/4/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MonthPicker = function (_Component) {
  _inherits(MonthPicker, _Component);

  function MonthPicker(props, context) {
    _classCallCheck(this, MonthPicker);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _initialiseProps.call(_this);

    _this.state = {
      type: "month",
      value: props.value || props.defaultValue,
      open: false,
      showClose: false
    };
    return _this;
  }

  MonthPicker.prototype.componentDidMount = function componentDidMount() {
    var value = this.props.value || this.props.defaultValue;
    if (value) {
      if (typeof value == 'string') {
        if ((0, _moment2["default"])(value).isValid()) {
          value = (0, _moment2["default"])(value);
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
    this.setState({
      value: value
    });
  };

  MonthPicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      var value = nextProps.value;
      if (value) {
        if (value.format && value.isValid()) {} else {
          value = (0, _moment2["default"])(value);
        }
      } else {
        value = '';
      }
      this.setState({
        value: value
      });
    }
  };

  MonthPicker.prototype.render = function render() {
    var _this2 = this;

    var state = this.state;
    var props = this.props;

    var showClose = props.showClose,
        value = props.value,
        others = _objectWithoutProperties(props, ["showClose", "value"]);

    var monthCalendar = _react2["default"].createElement(_MonthCalendar2["default"], _extends({}, props, {
      value: state.value,
      onChange: this.handleCalendarChange
    }));
    var classes = (0, _classnames2["default"])(props.className, "datepicker-container");
    return _react2["default"].createElement(
      "div",
      _extends({ className: classes
      }, (0, _omit2["default"])(others, ['closeIcon', 'renderIcon', 'format', 'showDateInput', 'showMonthInput', 'locale', 'placeholder', 'onClear', 'renderFooter', 'renderError', 'disabledDate', 'disabledTime'])),
      _react2["default"].createElement(
        _Picker2["default"],
        _extends({}, props, {
          onOpenChange: this.onOpenChange,
          animation: 'animation' in props ? props.animation : "slide-up",
          calendar: monthCalendar,
          open: this.state.open,
          value: state.value,
          onChange: this.onChange,
          dropdownClassName: props.dropdownClassName,
          selectedValue: state.value,
          renderError: props.renderError
        }),
        function (_ref) {
          var value = _ref.value;

          if (value && value.format) value = (0, _util.formatDate)(value, props.format);
          return _react2["default"].createElement(
            _beeInputGroup2["default"],
            { simple: true, className: "datepicker-input-group",
              onMouseEnter: _this2.onMouseEnter,
              onMouseLeave: _this2.onMouseLeave
            },
            _react2["default"].createElement(_beeFormControl2["default"], {
              ref: function ref(_ref2) {
                return _this2.outInput = _ref2;
              },
              placeholder: _this2.props.placeholder,
              className: _this2.props.className,
              value: value,
              disabled: props.disabled
            }),
            showClose && _this2.state.value && _this2.state.showClose && !props.disabled ? _react2["default"].createElement(
              _beeInputGroup2["default"].Button,
              { shape: "border",
                onClick: _this2.clear },
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

  return MonthPicker;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleCalendarChange = function (value) {
    _this3.setState({
      value: value && _extends(value, { _type: 'month' }) || value
    });
  };

  this.onChange = function (value) {
    var _props = _this3.props,
        onChange = _props.onChange,
        onClear = _props.onClear,
        onSelect = _props.onSelect,
        format = _props.format;


    _this3.setState({
      value: value && _extends(value, { _type: 'month' }) || value
    });
    onChange && onChange(value, value ? (0, _util.formatDate)(value, format) : '');
  };

  this.inputFocus = function () {
    var self = _this3;
    var format = self.props.format;

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
          self.props.onChange && self.props.onChange('', '');
        } else if (e.keyCode == _tinperBeeCore.KeyCode.ESC) {
          self.setState({
            open: false
          });
          var v = self.state.value;
          self.props.onOpenChange && self.props.onOpenChange(false, v, v && (0, _util.formatDate)(v, self.props.format) || '');
          _reactDom2["default"].findDOMNode(self.outInput).focus(); // 按esc时候焦点回到input输入框
        } else if (e.keyCode == _tinperBeeCore.KeyCode.ENTER) {
          var parsed = (0, _moment2["default"])(input.value, format, true);
          if (parsed.isValid()) {
            self.setState({
              open: false
            });
            var _v = self.state.value;
            self.props.onOpenChange && self.props.onOpenChange(false, _v, _v && (0, _util.formatDate)(_v, format) || '');
            _reactDom2["default"].findDOMNode(self.outInput).focus();
          }
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
    props.onOpenChange && props.onOpenChange(open, value, value && (0, _util.formatDate)(value, self.props.format) || '');
    if (open) {
      setTimeout(function () {
        self.inputFocus();
      }, 200);
    }
  };

  this.onTypeChange = function (type) {
    _this3.setState({
      type: type
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

  this.clear = function (e) {
    e.stopPropagation();
    _this3.setState({
      value: ''
    });
    _this3.props.onChange && _this3.props.onChange('', '');
  };
};

MonthPicker.defaultProps = {
  closeIcon: function closeIcon() {
    return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-close-c" });
  },
  renderIcon: function renderIcon() {
    return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-calendar" });
  },
  format: 'YYYY-MM',
  renderError: function renderError() {},
  showDateInput: true,
  showMonthInput: true,
  locale: _zh_CN2["default"],
  showClose: true,
  validatorFunc: function validatorFunc() {
    return true;
  }
};

exports["default"] = MonthPicker;
module.exports = exports["default"];