'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _InkTabBarMixin = require('./InkTabBarMixin');

var _InkTabBarMixin2 = _interopRequireDefault(_InkTabBarMixin);

var _ScrollableTabBarMixin = require('./ScrollableTabBarMixin');

var _ScrollableTabBarMixin2 = _interopRequireDefault(_ScrollableTabBarMixin);

var _TabBarMixin = require('./TabBarMixin');

var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
* This source code is quoted from rc-tabs.
* homepage: https://github.com/react-component/tabs
*/
var ScrollableInkTabBar = (0, _createReactClass2["default"])({
  mixins: [_TabBarMixin2["default"], _InkTabBarMixin2["default"], _ScrollableTabBarMixin2["default"]],
  componentDidMount: function componentDidMount() {
    var _this = this;

    _reactDom2["default"].findDOMNode(this).addEventListener('DNDclick', function (e) {
      if (e && e.detail && e.detail.key) {
        _this.onTabClick.call(_this, e.detail.key);
      }
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    var _this2 = this;

    _reactDom2["default"].findDOMNode(this).removeEventListener('DNDclick', function (e) {
      if (e && e.detail && e.detail.key) {
        _this2.onTabClick.call(_this2, e.detail.key);
      }
    });
  },
  render: function render() {
    var inkBarNode = this.getInkBarNode();
    var tabs = this.getTabs();
    var scrollbarNode = this.getScrollBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  }
});

exports["default"] = ScrollableInkTabBar;
module.exports = exports['default'];