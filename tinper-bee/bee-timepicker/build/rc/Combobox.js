'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var formatOption = function formatOption(option, disabledOptions) {
  var value = '' + option;
  if (option < 10) {
    value = '0' + option;
  }

  var disabled = false;
  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }

  return {
    value: value,
    disabled: disabled
  };
};

var Combobox = function (_Component) {
  _inherits(Combobox, _Component);

  function Combobox() {
    var _temp, _this, _ret;

    _classCallCheck(this, Combobox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onItemChange = function (type, itemValue) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          defaultOpenValue = _this$props.defaultOpenValue,
          use12Hours = _this$props.use12Hours,
          propValue = _this$props.value,
          isAM = _this$props.isAM,
          onAmPmChange = _this$props.onAmPmChange;

      var value = (propValue || defaultOpenValue).clone();

      if (type === 'hour') {
        if (use12Hours) {
          if (isAM) {
            value.hour(+itemValue % 12);
          } else {
            value.hour(+itemValue % 12 + 12);
          }
        } else {
          value.hour(+itemValue);
        }
      } else if (type === 'minute') {
        value.minute(+itemValue);
      } else if (type === 'ampm') {
        var ampm = itemValue.toUpperCase();
        if (use12Hours) {
          if (ampm === 'PM' && value.hour() < 12) {
            value.hour(value.hour() % 12 + 12);
          }

          if (ampm === 'AM') {
            if (value.hour() >= 12) {
              value.hour(value.hour() - 12);
            }
          }
        }
        onAmPmChange(ampm);
      } else {
        value.second(+itemValue);
      }
      onChange(value);
    }, _this.onEnterSelectPanel = function (range) {
      var onCurrentSelectPanelChange = _this.props.onCurrentSelectPanelChange;

      onCurrentSelectPanelChange(range);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Combobox.prototype.getHourSelect = function getHourSelect(hour) {
    var _this2 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        hourOptions = _props.hourOptions,
        disabledHours = _props.disabledHours,
        showHour = _props.showHour,
        use12Hours = _props.use12Hours;

    if (!showHour) {
      return null;
    }
    var disabledOptions = disabledHours();
    var hourOptionsAdj = void 0;
    var hourAdj = void 0;
    if (use12Hours) {
      hourOptionsAdj = [12].concat(hourOptions.filter(function (h) {
        return h < 12 && h > 0;
      }));
      hourAdj = hour % 12 || 12;
    } else {
      hourOptionsAdj = hourOptions;
      hourAdj = hour;
    }

    return _react2["default"].createElement(_Select2["default"], {
      prefixCls: prefixCls,
      options: hourOptionsAdj.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: hourOptionsAdj.indexOf(hourAdj),
      type: 'hour',
      onSelect: this.onItemChange,
      onMouseEnter: function onMouseEnter() {
        return _this2.onEnterSelectPanel('hour');
      }
    });
  };

  Combobox.prototype.getMinuteSelect = function getMinuteSelect(minute) {
    var _this3 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        minuteOptions = _props2.minuteOptions,
        disabledMinutes = _props2.disabledMinutes,
        defaultOpenValue = _props2.defaultOpenValue,
        showMinute = _props2.showMinute,
        propValue = _props2.value;

    if (!showMinute) {
      return null;
    }
    var value = propValue || defaultOpenValue;
    var disabledOptions = disabledMinutes(value.hour());

    return _react2["default"].createElement(_Select2["default"], {
      prefixCls: prefixCls,
      options: minuteOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: minuteOptions.indexOf(minute),
      type: 'minute',
      onSelect: this.onItemChange,
      onMouseEnter: function onMouseEnter() {
        return _this3.onEnterSelectPanel('minute');
      }
    });
  };

  Combobox.prototype.getSecondSelect = function getSecondSelect(second) {
    var _this4 = this;

    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        secondOptions = _props3.secondOptions,
        disabledSeconds = _props3.disabledSeconds,
        showSecond = _props3.showSecond,
        defaultOpenValue = _props3.defaultOpenValue,
        propValue = _props3.value;

    if (!showSecond) {
      return null;
    }
    var value = propValue || defaultOpenValue;
    var disabledOptions = disabledSeconds(value.hour(), value.minute());

    return _react2["default"].createElement(_Select2["default"], {
      prefixCls: prefixCls,
      options: secondOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: secondOptions.indexOf(second),
      type: 'second',
      onSelect: this.onItemChange,
      onMouseEnter: function onMouseEnter() {
        return _this4.onEnterSelectPanel('second');
      }
    });
  };

  Combobox.prototype.getAMPMSelect = function getAMPMSelect() {
    var _this5 = this;

    var _props4 = this.props,
        prefixCls = _props4.prefixCls,
        use12Hours = _props4.use12Hours,
        format = _props4.format,
        isAM = _props4.isAM;

    if (!use12Hours) {
      return null;
    }

    var AMPMOptions = ['am', 'pm'] // If format has A char, then we should uppercase AM/PM
    .map(function (c) {
      return format.match(/\sA/) ? c.toUpperCase() : c;
    }).map(function (c) {
      return { value: c };
    });

    var selected = isAM ? 0 : 1;

    return _react2["default"].createElement(_Select2["default"], {
      prefixCls: prefixCls,
      options: AMPMOptions,
      selectedIndex: selected,
      type: 'ampm',
      onSelect: this.onItemChange,
      onMouseEnter: function onMouseEnter() {
        return _this5.onEnterSelectPanel('ampm');
      }
    });
  };

  Combobox.prototype.render = function render() {
    var _props5 = this.props,
        prefixCls = _props5.prefixCls,
        defaultOpenValue = _props5.defaultOpenValue,
        propValue = _props5.value;

    var value = propValue || defaultOpenValue;
    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-combobox' },
      this.getHourSelect(value.hour()),
      this.getMinuteSelect(value.minute()),
      this.getSecondSelect(value.second()),
      this.getAMPMSelect(value.hour())
    );
  };

  return Combobox;
}(_react.Component);

Combobox.propTypes = {
  format: _propTypes2["default"].string,
  defaultOpenValue: _propTypes2["default"].object,
  prefixCls: _propTypes2["default"].string,
  value: _propTypes2["default"].object,
  onChange: _propTypes2["default"].func,
  onAmPmChange: _propTypes2["default"].func,
  showHour: _propTypes2["default"].bool,
  showMinute: _propTypes2["default"].bool,
  showSecond: _propTypes2["default"].bool,
  hourOptions: _propTypes2["default"].array,
  minuteOptions: _propTypes2["default"].array,
  secondOptions: _propTypes2["default"].array,
  disabledHours: _propTypes2["default"].func,
  disabledMinutes: _propTypes2["default"].func,
  disabledSeconds: _propTypes2["default"].func,
  onCurrentSelectPanelChange: _propTypes2["default"].func,
  use12Hours: _propTypes2["default"].bool,
  isAM: _propTypes2["default"].bool
};
exports["default"] = Combobox;
module.exports = exports['default'];