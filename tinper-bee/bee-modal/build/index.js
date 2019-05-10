'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _confirm = require('./confirm');

var _confirm2 = _interopRequireDefault(_confirm);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Modal2["default"].info = function (props) {
    var config = _extends({
        type: 'info',
        icon: _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-i-c-2' }),
        okCancel: false
    }, props);
    return (0, _confirm2["default"])(config);
};

_Modal2["default"].success = function (props) {
    var config = _extends({
        type: 'success',
        icon: _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-correct' }),
        okCancel: false
    }, props);
    return (0, _confirm2["default"])(config);
};

_Modal2["default"].error = function (props) {
    var config = _extends({
        type: 'error',
        icon: _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-exc-c' }),
        okCancel: false
    }, props);
    return (0, _confirm2["default"])(config);
};

_Modal2["default"].warning = function (props) {
    var config = _extends({
        type: 'warning',
        icon: _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-exc-t' }),
        okCancel: false
    }, props);
    return (0, _confirm2["default"])(config);
};

_Modal2["default"].confirm = function (props) {
    var config = _extends({
        type: 'confirm',
        okCancel: true
    }, props);
    return (0, _confirm2["default"])(config);
};

_Modal2["default"].destroyAll = function () {
    while (_Modal.destroyFns.length) {
        var close = _Modal.destroyFns.pop();
        if (close) {
            close();
        }
    }
};
exports["default"] = _Modal2["default"];
module.exports = exports['default'];