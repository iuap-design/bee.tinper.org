'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _MonthPicker = require('./MonthPicker');

var _MonthPicker2 = _interopRequireDefault(_MonthPicker);

var _RangePicker = require('./RangePicker');

var _RangePicker2 = _interopRequireDefault(_RangePicker);

var _WeekPicker = require('./WeekPicker');

var _WeekPicker2 = _interopRequireDefault(_WeekPicker);

var _YearPicker = require('./YearPicker');

var _YearPicker2 = _interopRequireDefault(_YearPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_DatePicker2["default"].MonthPicker = _MonthPicker2["default"];
_DatePicker2["default"].RangePicker = _RangePicker2["default"];
_DatePicker2["default"].WeekPicker = _WeekPicker2["default"];
_DatePicker2["default"].YearPicker = _YearPicker2["default"];

exports["default"] = _DatePicker2["default"];
module.exports = exports['default'];