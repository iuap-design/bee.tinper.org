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

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

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

    _this.onChange = function (value) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onClear = _this$props.onClear,
          onSelect = _this$props.onSelect,
          format = _this$props.format;
      // if(value){
      //   this.setState({
      //     value:value
      //   });
      // }else{
      //   this.setState({
      //     value:moment()
      //   })
      // }

      _this.setState({
        value: value && _extends(value, { _type: 'month' }) || value
      });
      onChange && onChange(value, value ? value.format(format) : '');
    };

    _this.inputFocus = function () {
      var self = _this;
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
            self.props.onOpenChange && self.props.onOpenChange(false, v, v && v.format(self.props.format) || '');
            _reactDom2["default"].findDOMNode(self.outInput).focus(); // 按esc时候焦点回到input输入框
          }
        };
      }
    };

    _this.onOpenChange = function (open) {
      var self = _this;
      _this.setState({
        open: open
      });
      if (open) {
        setTimeout(function () {
          self.inputFocus();
        }, 200);
      }
    };

    _this.onTypeChange = function (type) {
      _this.setState({
        type: type
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

    _this.clear = function (e) {
      e.stopPropagation();
      _this.setState({
        value: ''
      });
      _this.props.onChange && _this.props.onChange('', '');
    };

    _this.stopPropagation = function (e) {
      e.stopPropagation();
    };

    _this.state = {
      type: "month",
      value: props.value || props.defaultValue,
      open: false,
      showClose: false
    };
    return _this;
  }
  //阻止组件内部事件冒泡到组件外部容器


  MonthPicker.prototype.render = function render() {
    var _this2 = this;

    var state = this.state;

    var props = this.props;
    var showClose = props.showClose;

    var monthCalendar = _react2["default"].createElement(_MonthCalendar2["default"], _extends({}, props, {
      onChange: this.onChange
    }));
    var classes = (0, _classnames2["default"])(props.className, "datepicker-container");
    return _react2["default"].createElement(
      "div",
      { className: classes, onClick: this.stopPropagation, onMouseOver: this.stopPropagation },
      _react2["default"].createElement(
        _Picker2["default"],
        {
          onOpenChange: this.onOpenChange,
          animation: 'animation' in props ? props.animation : "slide-up",
          calendar: monthCalendar,
          open: this.state.open,
          value: state.value,
          onChange: this.onChange,
          dropdownClassName: props.dropdownClassName
        },
        function (_ref) {
          var value = _ref.value;

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
              value: value && value.format(props.format) || "",
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

MonthPicker.defaultProps = {
  closeIcon: function closeIcon() {
    return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-close-c" });
  },
  renderIcon: function renderIcon() {
    return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-calendar" });
  },
  format: 'YYYY-MM',
  showDateInput: true,
  showMonthInput: true,
  locale: _zh_CN2["default"],
  showClose: true
};

exports["default"] = MonthPicker;
module.exports = exports["default"];