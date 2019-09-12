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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports["default"] = {
  getDefaultProps: function getDefaultProps() {
    return {
      styles: {},
      tabIndex: '0'
    };
  },
  onTabClick: function onTabClick(key) {
    // debugger
    this.props.onTabClick(key);
  },
  getTabs: function getTabs() {
    var _this = this;

    var props = this.props;
    var children = props.panels;
    var activeKey = props.activeKey;
    var rst = [];
    var clsPrefix = props.clsPrefix;

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
  getRootNode: function getRootNode(contents) {
    var _classnames;

    var _props = this.props,
        clsPrefix = _props.clsPrefix,
        onKeyDown = _props.onKeyDown,
        className = _props.className,
        extraContent = _props.extraContent,
        style = _props.style,
        tabIndex = _props.tabIndex,
        tabBarPosition = _props.tabBarPosition;

    var cls = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, clsPrefix + '-bar', 1), _defineProperty(_classnames, className, !!className), _classnames));
    var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
    var tabBarExtraContentStyle = topOrBottom ? { "float": 'right' } : {};
    var newChildren = contents;
    if (extraContent) {
      newChildren = [_react2["default"].cloneElement(_react2["default"].createElement(
        'div',
        {
          style: tabBarExtraContentStyle,
          key: 'extra',
          className: clsPrefix + '-extra-content'
        },
        extraContent
      )), _react2["default"].cloneElement(contents)];
      newChildren = topOrBottom ? newChildren : newChildren.reverse();
    }
    return _react2["default"].createElement(
      'div',
      {
        role: 'tablist',
        className: cls,
        tabIndex: tabIndex,
        ref: 'root',
        onKeyDown: onKeyDown,
        style: style
      },
      newChildren
    );
  }
};
module.exports = exports['default'];