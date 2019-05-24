'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _utils = require('./utils');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                  * This source code is quoted from rc-tabs.
                                                                                                                                                                                                                  * homepage: https://github.com/react-component/tabs
                                                                                                                                                                                                                  */


var TabContent = (0, _createReactClass2["default"])({
  propTypes: {
    animated: _propTypes2["default"].bool,
    animatedWithMargin: _propTypes2["default"].bool,
    clsPrefix: _propTypes2["default"].string,
    children: _propTypes2["default"].any,
    activeKey: _propTypes2["default"].string,
    style: _propTypes2["default"].any,
    tabBarPosition: _propTypes2["default"].string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      animated: true
    };
  },
  getTabPanes: function getTabPanes() {
    var props = this.props;
    var activeKey = props.activeKey;
    var children = props.children;
    var newChildren = [];

    _react2["default"].Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      var key = child.key;
      var active = activeKey === key;
      newChildren.push(_react2["default"].cloneElement(child, {
        active: active,
        destroyInactiveTabPane: props.destroyInactiveTabPane,
        rootclsPrefix: props.clsPrefix
      }));
    });

    return newChildren;
  },
  render: function render() {
    var _classnames;

    var props = this.props;
    var clsPrefix = props.clsPrefix,
        children = props.children,
        activeKey = props.activeKey,
        tabBarPosition = props.tabBarPosition,
        animated = props.animated,
        animatedWithMargin = props.animatedWithMargin;
    var style = props.style;

    var classes = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, clsPrefix + '-content', true), _defineProperty(_classnames, animated ? clsPrefix + '-content-animated' : clsPrefix + '-content-no-animated', true), _classnames));
    if (animated) {
      var activeIndex = (0, _utils.getActiveIndex)(children, activeKey);
      if (activeIndex !== -1) {
        var animatedStyle = animatedWithMargin ? (0, _utils.getMarginStyle)(activeIndex, tabBarPosition) : (0, _utils.getTransformPropValue)((0, _utils.getTransformByIndex)(activeIndex, tabBarPosition));
        style = _extends({}, style, animatedStyle);
      } else {
        style = _extends({}, style, {
          display: 'none'
        });
      }
    }
    return _react2["default"].createElement(
      'div',
      {
        className: classes,
        style: style
      },
      this.getTabPanes()
    );
  }
});

exports["default"] = TabContent;
module.exports = exports['default'];