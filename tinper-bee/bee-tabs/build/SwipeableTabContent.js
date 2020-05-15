'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                  * This source code is quoted from rc-tabs.
                                                                                                                                                                                                                                                                  * homepage: https://github.com/react-component/tabs
                                                                                                                                                                                                                                                                  */


var _TabContent = require('./TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHammerjs = require('react-hammerjs');

var _reactHammerjs2 = _interopRequireDefault(_reactHammerjs);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = require('./utils');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RESISTANCE_COEF = 0.6;

function computeIndex(_ref) {
  var maxIndex = _ref.maxIndex,
      startIndex = _ref.startIndex,
      delta = _ref.delta,
      viewSize = _ref.viewSize;

  var index = startIndex + -delta / viewSize;
  if (index < 0) {
    index = Math.exp(index * RESISTANCE_COEF) - 1;
  } else if (index > maxIndex) {
    index = maxIndex + 1 - Math.exp((maxIndex - index) * RESISTANCE_COEF);
  }
  return index;
}

function getIndexByDelta(e) {
  var delta = (0, _utils.isVertical)(this.props.tabBarPosition) ? e.deltaY : e.deltaX;
  var currentIndex = computeIndex({
    maxIndex: this.maxIndex,
    viewSize: this.viewSize,
    startIndex: this.startIndex,
    delta: delta
  });
  var showIndex = delta < 0 ? Math.floor(currentIndex + 1) : Math.floor(currentIndex);
  if (showIndex < 0) {
    showIndex = 0;
  } else if (showIndex > this.maxIndex) {
    showIndex = this.maxIndex;
  }
  if (this.children[showIndex].props.disabled) {
    return undefined;
  }
  return currentIndex;
}

var SwipeableTabContent = (0, _createReactClass2["default"])({
  propTypes: {
    tabBarPosition: _propTypes2["default"].string,
    onChange: _propTypes2["default"].func,
    children: _propTypes2["default"].any,
    hammerOptions: _propTypes2["default"].any,
    animated: _propTypes2["default"].bool,
    activeKey: _propTypes2["default"].string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      animated: true
    };
  },
  componentDidMount: function componentDidMount() {
    this.rootNode = _reactDom2["default"].findDOMNode(this);
  },
  onPanStart: function onPanStart() {
    var _props = this.props,
        tabBarPosition = _props.tabBarPosition,
        children = _props.children,
        activeKey = _props.activeKey,
        animated = _props.animated;

    var startIndex = this.startIndex = (0, _utils.getActiveIndex)(children, activeKey);
    if (startIndex === -1) {
      return;
    }
    if (animated) {
      (0, _utils.setTransition)(this.rootNode.style, 'none');
    }
    this.startDrag = true;
    this.children = (0, _utils.toArray)(children);
    this.maxIndex = this.children.length - 1;
    this.viewSize = (0, _utils.isVertical)(tabBarPosition) ? this.rootNode.offsetHeight : this.rootNode.offsetWidth;
  },
  onPan: function onPan(e) {
    if (!this.startDrag) {
      return;
    }
    var tabBarPosition = this.props.tabBarPosition;

    var currentIndex = getIndexByDelta.call(this, e);
    if (currentIndex !== undefined) {
      (0, _utils.setTransform)(this.rootNode.style, (0, _utils.getTransformByIndex)(currentIndex, tabBarPosition));
    }
  },
  onPanEnd: function onPanEnd(e) {
    if (!this.startDrag) {
      return;
    }
    this.end(e);
  },
  onSwipe: function onSwipe(e) {
    this.end(e, true);
  },
  end: function end(e, swipe) {
    var _props2 = this.props,
        tabBarPosition = _props2.tabBarPosition,
        animated = _props2.animated;

    this.startDrag = false;
    if (animated) {
      (0, _utils.setTransition)(this.rootNode.style, '');
    }
    var currentIndex = getIndexByDelta.call(this, e);
    var finalIndex = this.startIndex;
    if (currentIndex !== undefined) {
      if (currentIndex < 0) {
        finalIndex = 0;
      } else if (currentIndex > this.maxIndex) {
        finalIndex = this.maxIndex;
      } else if (swipe) {
        var delta = (0, _utils.isVertical)(tabBarPosition) ? e.deltaY : e.deltaX;
        finalIndex = delta < 0 ? Math.ceil(currentIndex) : Math.floor(currentIndex);
      } else {
        var floorIndex = Math.floor(currentIndex);
        if (currentIndex - floorIndex > 0.6) {
          finalIndex = floorIndex + 1;
        } else {
          finalIndex = floorIndex;
        }
      }
    }
    if (this.children[finalIndex].props.disabled) {
      return;
    }
    if (this.startIndex === finalIndex) {
      if (animated) {
        (0, _utils.setTransform)(this.rootNode.style, (0, _utils.getTransformByIndex)(finalIndex, this.props.tabBarPosition));
      }
    } else {
      this.props.onChange((0, _utils.getActiveKey)(this.props.children, finalIndex));
    }
  },
  render: function render() {
    var _props3 = this.props,
        tabBarPosition = _props3.tabBarPosition,
        hammerOptions = _props3.hammerOptions,
        animated = _props3.animated;

    var direction = {};
    if ((0, _utils.isVertical)(tabBarPosition)) {
      direction = {
        vertical: true
      };
    }
    var events = {
      onSwipe: this.onSwipe,
      onPanStart: this.onPanStart
    };
    if (animated !== false) {
      events = _extends({}, events, {
        onPan: this.onPan,
        onPanEnd: this.onPanEnd
      });
    }
    return _react2["default"].createElement(
      _reactHammerjs2["default"],
      _extends({}, events, direction, {
        options: hammerOptions
      }),
      _react2["default"].createElement(_TabContent2["default"], this.props)
    );
  }
});

exports["default"] = SwipeableTabContent;
module.exports = exports['default'];