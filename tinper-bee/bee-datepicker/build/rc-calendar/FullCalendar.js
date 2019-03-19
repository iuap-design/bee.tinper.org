'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _DateTable = require('./date/DateTable');

var _DateTable2 = _interopRequireDefault(_DateTable);

var _MonthTable = require('./month/MonthTable');

var _MonthTable2 = _interopRequireDefault(_MonthTable);

var _CalendarMixin = require('./mixin/CalendarMixin');

var _CommonMixin = require('./mixin/CommonMixin');

var _CalendarHeader = require('./full-calendar/CalendarHeader');

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var FullCalendar = function (_React$Component) {
  _inherits(FullCalendar, _React$Component);

  function FullCalendar(props) {
    _classCallCheck(this, FullCalendar);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var type = void 0;
    if ('type' in props) {
      type = props.type;
    } else {
      type = props.defaultType;
    }

    _this.state = {
      type: type,
      value: props.value || props.defaultValue || (0, _moment2["default"])(),
      selectedValue: props.selectedValue || props.defaultSelectedValue
    };
    return _this;
  }

  FullCalendar.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
    var newState = {};
    var value = nextProps.value,
        selectedValue = nextProps.selectedValue;


    if ('type' in nextProps) {
      newState = {
        type: nextProps.type
      };
    }
    if ('value' in nextProps) {
      newState.value = value || nextProps.defaultValue || (0, _CalendarMixin.getNowByCurrentStateValue)(state.value);
    }
    if ('selectedValue' in nextProps) {
      newState.selectedValue = selectedValue;
    }

    return newState;
  };

  FullCalendar.prototype.render = function render() {
    var props = this.props;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        fullscreen = props.fullscreen,
        showHeader = props.showHeader,
        headerComponent = props.headerComponent,
        headerRender = props.headerRender,
        disabledDate = props.disabledDate;
    var _state = this.state,
        value = _state.value,
        type = _state.type;


    var header = null;
    if (showHeader) {
      if (headerRender) {
        header = headerRender(value, type, locale);
      } else {
        var TheHeader = headerComponent || _CalendarHeader2["default"];
        header = _react2["default"].createElement(TheHeader, _extends({
          key: 'calendar-header'
        }, props, {
          prefixCls: prefixCls + '-full',
          type: type,
          value: value,
          onTypeChange: this.setType,
          onValueChange: this.setValue
        }));
      }
    }

    var table = type === 'date' ? _react2["default"].createElement(_DateTable2["default"], {
      dateRender: props.dateCellRender,
      contentRender: props.dateCellContentRender,
      locale: locale,
      prefixCls: prefixCls,
      onSelect: this.onSelect,
      value: value,
      disabledDate: disabledDate
    }) : _react2["default"].createElement(_MonthTable2["default"], {
      cellRender: props.monthCellRender,
      contentRender: props.monthCellContentRender,
      locale: locale,
      onSelect: this.onMonthSelect,
      prefixCls: prefixCls + '-month-panel',
      value: value,
      disabledDate: disabledDate
    });

    var children = [header, _react2["default"].createElement(
      'div',
      { key: 'calendar-body', className: prefixCls + '-calendar-body' },
      table
    )];

    var className = [prefixCls + '-full'];

    if (fullscreen) {
      className.push(prefixCls + '-fullscreen');
    }

    return this.renderRoot({
      children: children,
      className: className.join(' ')
    });
  };

  return FullCalendar;
}(_react2["default"].Component);

FullCalendar.propTypes = _extends({}, _CalendarMixin.calendarMixinPropTypes, _CommonMixin.propType, {
  defaultType: _propTypes2["default"].string,
  type: _propTypes2["default"].string,
  prefixCls: _propTypes2["default"].string,
  locale: _propTypes2["default"].object,
  onTypeChange: _propTypes2["default"].func,
  fullscreen: _propTypes2["default"].bool,
  monthCellRender: _propTypes2["default"].func,
  dateCellRender: _propTypes2["default"].func,
  showTypeSwitch: _propTypes2["default"].bool,
  Select: _propTypes2["default"].func.isRequired,
  headerComponents: _propTypes2["default"].array,
  headerComponent: _propTypes2["default"].object, // The whole header component
  headerRender: _propTypes2["default"].func,
  showHeader: _propTypes2["default"].bool,
  disabledDate: _propTypes2["default"].func,
  value: _propTypes2["default"].object,
  defaultValue: _propTypes2["default"].object,
  selectedValue: _propTypes2["default"].object,
  defaultSelectedValue: _propTypes2["default"].object
});
FullCalendar.defaultProps = _extends({}, _CalendarMixin.calendarMixinDefaultProps, _CommonMixin.defaultProp, {
  defaultType: 'date',
  fullscreen: false,
  showTypeSwitch: true,
  showHeader: true,
  onTypeChange: function onTypeChange() {}
});

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onMonthSelect = function (value) {
    _this2.onSelect(value, {
      target: 'month'
    });
  };

  this.setType = function (type) {
    if (!('type' in _this2.props)) {
      _this2.setState({
        type: type
      });
    }
    _this2.props.onTypeChange(type);
  };
};

(0, _reactLifecyclesCompat.polyfill)(FullCalendar);

exports["default"] = (0, _CalendarMixin.calendarMixinWrapper)((0, _CommonMixin.commonMixinWrapper)(FullCalendar));
module.exports = exports['default'];