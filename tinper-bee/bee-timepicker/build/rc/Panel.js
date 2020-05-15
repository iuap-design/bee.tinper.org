'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Combobox = require('./Combobox');

var _Combobox2 = _interopRequireDefault(_Combobox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

function generateOptions(length, disabledOptions, hideDisabledOptions) {
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  var arr = [];
  for (var value = 0; value < length; value += step) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value);
    }
  }
  return arr;
}

function toNearestValidTime(time, hourOptions, minuteOptions, secondOptions) {
  var hour = hourOptions.slice().sort(function (a, b) {
    return Math.abs(time.hour() - a) - Math.abs(time.hour() - b);
  })[0];
  var minute = minuteOptions.slice().sort(function (a, b) {
    return Math.abs(time.minute() - a) - Math.abs(time.minute() - b);
  })[0];
  var second = secondOptions.slice().sort(function (a, b) {
    return Math.abs(time.second() - a) - Math.abs(time.second() - b);
  })[0];
  return (0, _moment2["default"])(hour + ':' + minute + ':' + second, 'HH:mm:ss');
}

var Panel = function (_Component) {
  _inherits(Panel, _Component);

  function Panel(props) {
    _classCallCheck(this, Panel);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.onChange = function (newValue) {
      var onChange = _this.props.onChange;

      _this.setState({ value: newValue });
      onChange(newValue);
    };

    _this.onAmPmChange = function (ampm) {
      var onAmPmChange = _this.props.onAmPmChange;

      onAmPmChange(ampm);
    };

    _this.onCurrentSelectPanelChange = function (currentSelectPanel) {
      _this.setState({ currentSelectPanel: currentSelectPanel });
    };

    _this.disabledHours = function () {
      var _this$props = _this.props,
          use12Hours = _this$props.use12Hours,
          disabledHours = _this$props.disabledHours;

      var disabledOptions = disabledHours();
      if (use12Hours && Array.isArray(disabledOptions)) {
        if (_this.isAM()) {
          disabledOptions = disabledOptions.filter(function (h) {
            return h < 12;
          }).map(function (h) {
            return h === 0 ? 12 : h;
          });
        } else {
          disabledOptions = disabledOptions.map(function (h) {
            return h === 12 ? 12 : h - 12;
          });
        }
      }
      return disabledOptions;
    };

    _this.state = {
      value: props.value
    };
    return _this;
  }

  Panel.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;
    if (value) {
      this.setState({
        value: value
      });
    }
  };

  // https://github.com/ant-design/ant-design/issues/5829
  Panel.prototype.close = function close() {
    var onEsc = this.props.onEsc;

    onEsc();
  };

  Panel.prototype.isAM = function isAM() {
    var defaultOpenValue = this.props.defaultOpenValue;
    var value = this.state.value;

    var realValue = value || defaultOpenValue;
    return realValue.hour() >= 0 && realValue.hour() < 12;
  };

  Panel.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        placeholder = _props.placeholder,
        disabledMinutes = _props.disabledMinutes,
        disabledSeconds = _props.disabledSeconds,
        hideDisabledOptions = _props.hideDisabledOptions,
        allowEmpty = _props.allowEmpty,
        showHour = _props.showHour,
        showMinute = _props.showMinute,
        showSecond = _props.showSecond,
        format = _props.format,
        defaultOpenValue = _props.defaultOpenValue,
        clearText = _props.clearText,
        onEsc = _props.onEsc,
        addon = _props.addon,
        use12Hours = _props.use12Hours,
        focusOnOpen = _props.focusOnOpen,
        onKeyDown = _props.onKeyDown,
        hourStep = _props.hourStep,
        minuteStep = _props.minuteStep,
        secondStep = _props.secondStep,
        inputReadOnly = _props.inputReadOnly,
        clearIcon = _props.clearIcon;
    var _state = this.state,
        value = _state.value,
        currentSelectPanel = _state.currentSelectPanel;

    var disabledHourOptions = this.disabledHours();
    var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
    var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
    var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions, hourStep);
    var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions, minuteStep);
    var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions, secondStep);

    var validDefaultOpenValue = toNearestValidTime(defaultOpenValue, hourOptions, minuteOptions, secondOptions);

    return _react2["default"].createElement(
      'div',
      {
        className: (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-inner', true), _defineProperty(_classNames, className, !!className), _classNames))
      },
      _react2["default"].createElement(_Header2["default"], {
        clearText: clearText,
        prefixCls: prefixCls,
        defaultOpenValue: validDefaultOpenValue,
        value: value,
        currentSelectPanel: currentSelectPanel,
        onEsc: onEsc,
        format: format,
        placeholder: placeholder,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: this.disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onChange: this.onChange,
        allowEmpty: allowEmpty,
        focusOnOpen: focusOnOpen,
        onKeyDown: onKeyDown,
        inputReadOnly: inputReadOnly,
        clearIcon: clearIcon
      }),
      _react2["default"].createElement(_Combobox2["default"], {
        prefixCls: prefixCls,
        value: value,
        defaultOpenValue: validDefaultOpenValue,
        format: format,
        onChange: this.onChange,
        onAmPmChange: this.onAmPmChange,
        showHour: showHour,
        showMinute: showMinute,
        showSecond: showSecond,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: this.disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onCurrentSelectPanelChange: this.onCurrentSelectPanelChange,
        use12Hours: use12Hours,
        isAM: this.isAM()
      }),
      addon(this)
    );
  };

  return Panel;
}(_react.Component);

Panel.propTypes = {
  clearText: _propTypes2["default"].string,
  prefixCls: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  defaultOpenValue: _propTypes2["default"].object,
  value: _propTypes2["default"].object,
  placeholder: _propTypes2["default"].string,
  format: _propTypes2["default"].string,
  inputReadOnly: _propTypes2["default"].bool,
  disabledHours: _propTypes2["default"].func,
  disabledMinutes: _propTypes2["default"].func,
  disabledSeconds: _propTypes2["default"].func,
  hideDisabledOptions: _propTypes2["default"].bool,
  onChange: _propTypes2["default"].func,
  onAmPmChange: _propTypes2["default"].func,
  onEsc: _propTypes2["default"].func,
  allowEmpty: _propTypes2["default"].bool,
  showHour: _propTypes2["default"].bool,
  showMinute: _propTypes2["default"].bool,
  showSecond: _propTypes2["default"].bool,
  use12Hours: _propTypes2["default"].bool,
  hourStep: _propTypes2["default"].number,
  minuteStep: _propTypes2["default"].number,
  secondStep: _propTypes2["default"].number,
  addon: _propTypes2["default"].func,
  focusOnOpen: _propTypes2["default"].bool,
  onKeyDown: _propTypes2["default"].func,
  clearIcon: _propTypes2["default"].node
};
Panel.defaultProps = {
  prefixCls: 'rc-time-picker-panel',
  onChange: noop,
  disabledHours: noop,
  disabledMinutes: noop,
  disabledSeconds: noop,
  defaultOpenValue: (0, _moment2["default"])(),
  use12Hours: false,
  addon: noop,
  onKeyDown: noop,
  onAmPmChange: noop,
  inputReadOnly: false
};
exports["default"] = Panel;
module.exports = exports['default'];