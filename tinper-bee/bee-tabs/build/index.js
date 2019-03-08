'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // export default from './Tabs';
// 20181211animated，scrollAnimated（ScrollableTabBarMixin），inkBarAnimated（InkTabBarMixin）都是默认为true的
// 去掉所有的动画


var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('./Tabs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tabs = (0, _createReactClass2["default"])({
    render: function render() {
        var disableProps = {
            animated: false,
            scrollAnimated: false, // scrollableBar的class
            inkBarAnimated: false, // inkBar的class
            useTransform3d: false //是否使用translate3d來实现线条
        };
        return _react2["default"].createElement(_Tabs.Tabs, _extends({}, this.props, disableProps));
    }
});
Tabs.TabPane = _Tabs.Tabs.TabPane;
exports["default"] = Tabs;
module.exports = exports['default'];