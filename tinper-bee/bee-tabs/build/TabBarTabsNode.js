'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var TabBarTabsNode = function (_React$Component) {
  _inherits(TabBarTabsNode, _React$Component);

  function TabBarTabsNode(props) {
    _classCallCheck(this, TabBarTabsNode);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  TabBarTabsNode.prototype.onTabClick = function onTabClick(key) {
    this.props.onTabClick(key);
  };

  TabBarTabsNode.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.panels,
        activeKey = _props.activeKey,
        clsPrefix = _props.clsPrefix,
        tabBarGutter = _props.tabBarGutter,
        saveRef = _props.saveRef,
        tabBarPosition = _props.tabBarPosition,
        renderTabBarNode = _props.renderTabBarNode,
        direction = _props.direction;

    var rst = [];

    _react2["default"].Children.forEach(children, function (child, index) {
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
          onClick: _this2.onTabClick.bind(_this2, key)
        };
      }
      var ref = {};
      if (activeKey === key) {
        ref.ref = saveRef('activeTab');
      }

      var gutter = tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter;

      var marginProperty = direction === 'rtl' ? 'marginLeft' : 'marginRight';
      var style = _defineProperty({}, (0, _utils.isVertical)(tabBarPosition) ? 'marginBottom' : marginProperty, gutter);
      (0, _warning2["default"])('tab' in child.props, 'There must be `tab` property on children of Tabs.');

      var node = _react2["default"].createElement(
        'div',
        _extends({
          role: 'tab',
          'aria-disabled': child.props.disabled ? 'true' : 'false',
          'aria-selected': activeKey === key ? 'true' : 'false'
        }, events, {
          className: cls,
          key: key,
          style: style
        }, ref, {
          nid: child.props.nid,
          uitype: child.props.uitype,
          nodekey: key
        }),
        child.props.tab
      );

      if (renderTabBarNode) {
        node = renderTabBarNode(node);
      }

      rst.push(node);
    });

    return _react2["default"].createElement(
      'div',
      { ref: saveRef('navTabsContainer') },
      rst
    );
  };

  return TabBarTabsNode;
}(_react2["default"].Component);

exports["default"] = TabBarTabsNode;


TabBarTabsNode.propTypes = {
  activeKey: _propTypes2["default"].string,
  panels: _propTypes2["default"].node,
  clsPrefix: _propTypes2["default"].string,
  tabBarGutter: _propTypes2["default"].number,
  onTabClick: _propTypes2["default"].func,
  saveRef: _propTypes2["default"].func,
  renderTabBarNode: _propTypes2["default"].func,
  tabBarPosition: _propTypes2["default"].string,
  direction: _propTypes2["default"].string
};

TabBarTabsNode.defaultProps = {
  panels: [],
  clsPrefix: [],
  tabBarGutter: null,
  onTabClick: function onTabClick() {},
  saveRef: function saveRef() {}
};
module.exports = exports['default'];