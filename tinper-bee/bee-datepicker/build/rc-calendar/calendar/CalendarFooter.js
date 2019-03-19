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

var _mapSelf = require('rc-util/lib/Children/mapSelf');

var _mapSelf2 = _interopRequireDefault(_mapSelf);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TodayButton = require('../calendar/TodayButton');

var _TodayButton2 = _interopRequireDefault(_TodayButton);

var _OkButton = require('../calendar/OkButton');

var _OkButton2 = _interopRequireDefault(_OkButton);

var _TimePickerButton = require('../calendar/TimePickerButton');

var _TimePickerButton2 = _interopRequireDefault(_TimePickerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var CalendarFooter = function (_React$Component) {
  _inherits(CalendarFooter, _React$Component);

  function CalendarFooter() {
    _classCallCheck(this, CalendarFooter);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  CalendarFooter.prototype.onSelect = function onSelect(value) {
    this.props.onSelect(value);
  };

  CalendarFooter.prototype.getRootDOMNode = function getRootDOMNode() {
    return _reactDom2["default"].findDOMNode(this);
  };

  CalendarFooter.prototype.render = function render() {
    var props = this.props;
    var value = props.value,
        prefixCls = props.prefixCls,
        showOk = props.showOk,
        timePicker = props.timePicker,
        renderFooter = props.renderFooter,
        mode = props.mode;

    var footerEl = null;
    var extraFooter = renderFooter && renderFooter(mode);
    if (props.showToday || timePicker || extraFooter) {
      var nowEl = void 0;
      if (props.showToday) {
        nowEl = _react2["default"].createElement(_TodayButton2["default"], _extends({}, props, { value: value }));
      }
      var okBtn = void 0;
      if (showOk === true || showOk !== false && !!props.timePicker) {
        okBtn = _react2["default"].createElement(_OkButton2["default"], props);
      }
      var timePickerBtn = void 0;
      if (!!props.timePicker) {
        timePickerBtn = _react2["default"].createElement(_TimePickerButton2["default"], props);
      }

      var footerBtn = void 0;
      if (nowEl || timePickerBtn || okBtn || extraFooter) {
        footerBtn = _react2["default"].createElement(
          'span',
          { className: prefixCls + '-footer-btn' },
          extraFooter,
          (0, _mapSelf2["default"])([nowEl, timePickerBtn, okBtn])
        );
      }
      var cls = (0, _classnames2["default"])(prefixCls + '-footer', _defineProperty({}, prefixCls + '-footer-show-ok', okBtn));
      footerEl = _react2["default"].createElement(
        'div',
        { className: cls },
        footerBtn
      );
    }
    return footerEl;
  };

  return CalendarFooter;
}(_react2["default"].Component);

CalendarFooter.propTypes = {
  prefixCls: _propTypes2["default"].string,
  showDateInput: _propTypes2["default"].bool,
  disabledTime: _propTypes2["default"].any,
  timePicker: _propTypes2["default"].element,
  selectedValue: _propTypes2["default"].any,
  showOk: _propTypes2["default"].bool,
  onSelect: _propTypes2["default"].func,
  value: _propTypes2["default"].object,
  renderFooter: _propTypes2["default"].func,
  defaultValue: _propTypes2["default"].object,
  mode: _propTypes2["default"].string
};
exports["default"] = CalendarFooter;
module.exports = exports['default'];