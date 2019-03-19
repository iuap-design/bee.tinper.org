'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                  * This source code is quoted from rc-tabs.
                                                                                                                                                                                                                                                                  * homepage: https://github.com/react-component/tabs
                                                                                                                                                                                                                                                                  */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InkTabBarMixin = require('./InkTabBarMixin');

var _InkTabBarMixin2 = _interopRequireDefault(_InkTabBarMixin);

var _SwipeableTabBarMixin = require('./SwipeableTabBarMixin');

var _SwipeableTabBarMixin2 = _interopRequireDefault(_SwipeableTabBarMixin);

var _TabBarMixin = require('./TabBarMixin');

var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SwipeableInkTabBar = (0, _createReactClass2["default"])({
  mixins: [_TabBarMixin2["default"], _InkTabBarMixin2["default"], _SwipeableTabBarMixin2["default"]],

  getSwipeableTabs: function getSwipeableTabs() {
    var _this = this;

    var props = this.props;
    var children = props.panels;
    var activeKey = props.activeKey;
    var rst = [];
    var clsPrefix = props.clsPrefix;

    var tabStyle = {
      display: 'flex',
      flex: '0 0 ' + 1 / props.pageSize * 100 + '%'
    };

    _react2["default"].Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      var key = child.key;
      var cls = activeKey === key ? clsPrefix + '-tab-active' : '';
      cls += ' ' + clsPrefix + '-tab';
      var events = {};
      if (child.props.disabled) {
        cls += ' ' + clsPrefix + '-tab-disabled';
      } else {
        events = {
          onClick: _this.onTabClick.bind(_this, key)
        };
      }
      var ref = {};
      if (activeKey === key) {
        ref.ref = 'activeTab';
      }
      rst.push(_react2["default"].createElement(
        'div',
        _extends({
          role: 'tab',
          style: tabStyle,
          'aria-disabled': child.props.disabled ? 'true' : 'false',
          'aria-selected': activeKey === key ? 'true' : 'false'
        }, events, {
          className: cls,
          key: key
        }, ref),
        child.props.tab
      ));
    });

    return rst;
  },
  render: function render() {
    var inkBarNode = this.getInkBarNode();
    var tabs = this.getSwipeableTabs();
    var scrollbarNode = this.getSwipeBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  }
});

exports["default"] = SwipeableInkTabBar;
module.exports = exports['default'];