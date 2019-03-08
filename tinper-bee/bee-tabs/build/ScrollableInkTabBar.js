'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InkTabBarMixin = require('./InkTabBarMixin');

var _InkTabBarMixin2 = _interopRequireDefault(_InkTabBarMixin);

var _ScrollableTabBarMixin = require('./ScrollableTabBarMixin');

var _ScrollableTabBarMixin2 = _interopRequireDefault(_ScrollableTabBarMixin);

var _TabBarMixin = require('./TabBarMixin');

var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ScrollableInkTabBar = (0, _createReactClass2["default"])({
  mixins: [_TabBarMixin2["default"], _InkTabBarMixin2["default"], _ScrollableTabBarMixin2["default"]],

  render: function render() {
    var inkBarNode = this.getInkBarNode();
    var tabs = this.getTabs();
    var scrollbarNode = this.getScrollBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  }
}); /**
    * This source code is quoted from rc-tabs.
    * homepage: https://github.com/react-component/tabs
    */
exports["default"] = ScrollableInkTabBar;
module.exports = exports['default'];