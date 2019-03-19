'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _reactHammerjs = require('react-hammerjs');

var _reactHammerjs2 = _interopRequireDefault(_reactHammerjs);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                  * This source code is quoted from rc-tabs.
                                                                                                                                                                                                                  * homepage: https://github.com/react-component/tabs
                                                                                                                                                                                                                  */


exports["default"] = {
  getInitialState: function getInitialState() {
    var _checkPaginationByKey = this.checkPaginationByKey(this.props.activeKey),
        hasPrevPage = _checkPaginationByKey.hasPrevPage,
        hasNextPage = _checkPaginationByKey.hasNextPage;

    return {
      hasPrevPage: hasPrevPage,
      hasNextPage: hasNextPage
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      hammerOptions: {},
      pageSize: 5, // per page show how many tabs
      speed: 5 // swipe speed, 1 to 10, more bigger more faster
    };
  },
  checkPaginationByKey: function checkPaginationByKey(activeKey) {
    var _props = this.props,
        panels = _props.panels,
        pageSize = _props.pageSize;

    var index = this.getIndexByKey(activeKey);
    var centerTabCount = Math.floor(pageSize / 2);
    // the basic rule is to make activeTab be shown in the center of TabBar viewport
    return {
      hasPrevPage: index - centerTabCount > 0,
      hasNextPage: index + centerTabCount < panels.length
    };
  },

  /**
   * used for props.activeKey setting, not for swipe callback
   */
  getDeltaByKey: function getDeltaByKey(activeKey) {
    var pageSize = this.props.pageSize;

    var index = this.getIndexByKey(activeKey);
    var centerTabCount = Math.floor(pageSize / 2);
    var tabWidth = this.cache.tabWidth;

    var delta = (index - centerTabCount) * tabWidth * -1;
    return delta;
  },
  getIndexByKey: function getIndexByKey(activeKey) {
    return this.props.panels.findIndex(function (panel) {
      return panel.key === activeKey;
    });
  },
  checkPaginationByDelta: function checkPaginationByDelta(delta) {
    var totalAvaliableDelta = this.cache.totalAvaliableDelta;

    return {
      hasPrevPage: delta < 0,
      hasNextPage: -delta < totalAvaliableDelta
    };
  },
  setSwipePositionByKey: function setSwipePositionByKey(activeKey) {
    var _checkPaginationByKey2 = this.checkPaginationByKey(activeKey),
        hasPrevPage = _checkPaginationByKey2.hasPrevPage,
        hasNextPage = _checkPaginationByKey2.hasNextPage;

    var totalAvaliableDelta = this.cache.totalAvaliableDelta;

    this.setState({
      hasPrevPage: hasPrevPage,
      hasNextPage: hasNextPage
    });
    var delta = void 0;
    if (!hasPrevPage) {
      // the first page
      delta = 0;
    } else if (!hasNextPage) {
      // the last page
      delta = -totalAvaliableDelta;
    } else if (hasNextPage) {
      // the middle page
      delta = this.getDeltaByKey(activeKey);
    }
    this.setSwipePositionByDelta(delta);
  },
  setSwipePositionByDelta: function setSwipePositionByDelta(value) {
    var relativeDirection = this.cache.relativeDirection;

    (0, _utils.setPxStyle)(this.swipeNode, relativeDirection, value);
  },
  componentDidMount: function componentDidMount() {
    var _refs = this.refs,
        swipe = _refs.swipe,
        nav = _refs.nav;
    var _props2 = this.props,
        tabBarPosition = _props2.tabBarPosition,
        pageSize = _props2.pageSize,
        panels = _props2.panels,
        activeKey = _props2.activeKey;

    this.swipeNode = _reactDom2["default"].findDOMNode(swipe); // dom which scroll (9999px)
    this.realNode = _reactDom2["default"].findDOMNode(nav); // dom which visiable in screen (viewport)
    var _isVertical = (0, _utils.isVertical)(tabBarPosition);
    var _viewSize = (0, _utils.getStyle)(this.realNode, _isVertical ? 'height' : 'width');
    var _tabWidth = _viewSize / pageSize;
    this.cache = {
      vertical: _isVertical,
      relativeDirection: _isVertical ? 'top' : 'left',
      totalAvaliableDelta: _tabWidth * panels.length - _viewSize,
      tabWidth: _tabWidth
    };
    this.setSwipePositionByKey(activeKey);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey && nextProps.activeKey !== this.props.activeKey) {
      this.setSwipePositionByKey(nextProps.activeKey);
    }
  },
  onPan: function onPan(e) {
    var _cache = this.cache,
        vertical = _cache.vertical,
        relativeDirection = _cache.relativeDirection;
    var speed = this.props.speed;

    var nowDelta = vertical ? e.deltaY : e.deltaX;
    nowDelta = nowDelta * (speed / 10);
    var preDelta = (0, _utils.getStyle)(this.swipeNode, relativeDirection);
    var nextTotalDelta = nowDelta + preDelta;

    var _checkPaginationByDel = this.checkPaginationByDelta(nextTotalDelta),
        hasPrevPage = _checkPaginationByDel.hasPrevPage,
        hasNextPage = _checkPaginationByDel.hasNextPage;

    this.setState({
      hasPrevPage: hasPrevPage,
      hasNextPage: hasNextPage
    });
    if (hasPrevPage && hasNextPage) {
      this.setSwipePositionByDelta(nextTotalDelta);
    }
  },
  getSwipeBarNode: function getSwipeBarNode(tabs) {
    var _classnames2;

    var _props3 = this.props,
        clsPrefix = _props3.clsPrefix,
        hammerOptions = _props3.hammerOptions,
        tabBarPosition = _props3.tabBarPosition;
    var _state = this.state,
        hasPrevPage = _state.hasPrevPage,
        hasNextPage = _state.hasNextPage;

    var navClassName = clsPrefix + '-nav';
    var navClasses = (0, _classnames4["default"])(_defineProperty({}, navClassName, true));
    var direction = {};
    if ((0, _utils.isVertical)(tabBarPosition)) {
      direction = {
        vertical: true
      };
    }
    var events = {
      onPan: this.onPan
    };
    return _react2["default"].createElement(
      'div',
      {
        className: (0, _classnames4["default"])((_classnames2 = {}, _defineProperty(_classnames2, clsPrefix + '-nav-container', 1), _defineProperty(_classnames2, clsPrefix + '-nav-swipe-container', 1), _defineProperty(_classnames2, clsPrefix + '-prevpage', hasPrevPage), _defineProperty(_classnames2, clsPrefix + '-nextpage', hasNextPage), _classnames2)),
        key: 'container',
        ref: 'container'
      },
      _react2["default"].createElement(
        'div',
        { className: clsPrefix + '-nav-wrap', ref: 'navWrap' },
        _react2["default"].createElement(
          _reactHammerjs2["default"],
          _extends({}, events, direction, {
            options: hammerOptions
          }),
          _react2["default"].createElement(
            'div',
            { className: clsPrefix + '-nav-swipe', ref: 'swipe' },
            _react2["default"].createElement(
              'div',
              { className: navClasses, ref: 'nav' },
              tabs
            )
          )
        )
      )
    );
  }
};
module.exports = exports['default'];