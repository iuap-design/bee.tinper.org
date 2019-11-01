'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toArrayChildren = toArrayChildren;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function toArrayChildren(children) {
    var ret = [];
    _react2["default"].Children.forEach(children, function (c) {
        ret.push(c);
    });
    return ret;
}