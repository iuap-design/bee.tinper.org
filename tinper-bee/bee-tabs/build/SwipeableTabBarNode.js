'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _reactHammerjs = require('react-hammerjs');

var _reactHammerjs2 = _interopRequireDefault(_reactHammerjs);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-tabs.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/tabs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var SwipeableTabBarNode = function (_React$Component) {
  _inherits(SwipeableTabBarNode, _React$Component);

  function SwipeableTabBarNode(props) {
    _classCallCheck(this, SwipeableTabBarNode);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var _this$checkPagination = _this.checkPaginationByKey(_this.props.activeKey),
        hasPrevPage = _this$checkPagination.hasPrevPage,
        hasNextPage = _this$checkPagination.hasNextPage;

    _this.state = {
      hasPrevPage: hasPrevPage,
      hasNextPage: hasNextPage
    };
    return _this;
  }

  SwipeableTabBarNode.prototype.componentDidMount = function componentDidMount() {
    var swipe = this.props.getRef('swipe');
    var nav = this.props.getRef('nav');
    var activeKey = this.props.activeKey;

    this.swipeNode = _reactDom2["default"].findDOMNode(swipe); // dom which scroll (9999px)
    this.realNode = _reactDom2["default"].findDOMNode(nav); // dom which visiable in screen (viewport)
    this.setCache();
    this.setSwipePositionByKey(activeKey);
  };

  SwipeableTabBarNode.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.setCache();
    if (this.props.activeKey && this.props.activeKey !== prevProps.activeKey || this.props.panels.length !== prevProps.panels.length || this.props.pageSize !== prevProps.pageSize) {
      this.setSwipePositionByKey(this.props.activeKey);
    }
  };

  SwipeableTabBarNode.prototype.setCache = function setCache() {
    var _props = this.props,
        tabBarPosition = _props.tabBarPosition,
        pageSize = _props.pageSize,
        panels = _props.panels;

    var _isVertical = (0, _utils.isVertical)(tabBarPosition);
    var _viewSize = (0, _utils.getStyle)(this.realNode, _isVertical ? 'height' : 'width');
    var _tabWidth = _viewSize / pageSize;
    this.cache = _extends({}, this.cache, {
      vertical: _isVertical,
      totalAvaliableDelta: _tabWidth * panels.length - _viewSize,
      tabWidth: _tabWidth
    });
  };

  /**
   * used for props.activeKey setting, not for swipe callback
   */


  SwipeableTabBarNode.prototype.getDeltaByKey = function getDeltaByKey(activeKey) {
    var pageSize = this.props.pageSize;

    var index = this.getIndexByKey(activeKey);
    var centerTabCount = Math.floor(pageSize / 2);
    var tabWidth = this.cache.tabWidth;

    var delta = (index - centerTabCount) * tabWidth;
    // in rtl direction tabs are ordered from right to left, so delta should be positive in order to 
    // push swiped element to righ side (start of view)
    if (!this.isRtl()) {
      delta *= -1;
    }
    return delta;
  };

  SwipeableTabBarNode.prototype.getIndexByKey = function getIndexByKey(activeKey) {
    var panels = this.props.panels;

    var length = panels.length;
    for (var i = 0; i < length; i++) {
      if (panels[i].key === activeKey) {
        return i;
      }
    }
    return -1;
  };

  SwipeableTabBarNode.prototype.setSwipePositionByKey = function setSwipePositionByKey(activeKey) {
    var _checkPaginationByKey = this.checkPaginationByKey(activeKey),
        hasPrevPage = _checkPaginationByKey.hasPrevPage,
        hasNextPage = _checkPaginationByKey.hasNextPage;

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
      delta = this.isRtl() ? totalAvaliableDelta : -totalAvaliableDelta;
    } else if (hasNextPage) {
      // the middle page
      delta = this.getDeltaByKey(activeKey);
    }
    this.cache.totalDelta = delta;
    this.setSwipePosition();
  };

  SwipeableTabBarNode.prototype.setSwipePosition = function setSwipePosition() {
    var _cache = this.cache,
        totalDelta = _cache.totalDelta,
        vertical = _cache.vertical;

    (0, _utils.setPxStyle)(this.swipeNode, totalDelta, vertical);
  };

  SwipeableTabBarNode.prototype.checkPaginationByKey = function checkPaginationByKey(activeKey) {
    var _props2 = this.props,
        panels = _props2.panels,
        pageSize = _props2.pageSize;

    var index = this.getIndexByKey(activeKey);
    var centerTabCount = Math.floor(pageSize / 2);
    // the basic rule is to make activeTab be shown in the center of TabBar viewport
    return {
      hasPrevPage: index - centerTabCount > 0,
      hasNextPage: index + centerTabCount < panels.length
    };
  };

  SwipeableTabBarNode.prototype.checkPaginationByDelta = function checkPaginationByDelta(delta) {
    var totalAvaliableDelta = this.cache.totalAvaliableDelta;

    return {
      hasPrevPage: delta < 0,
      hasNextPage: -delta < totalAvaliableDelta
    };
  };

  SwipeableTabBarNode.prototype.isRtl = function isRtl() {
    return this.props.direction === 'rtl';
  };

  SwipeableTabBarNode.prototype.render = function render() {
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
    var events = {
      onPan: this.onPan
    };
    return _react2["default"].createElement(
      'div',
      {
        className: (0, _classnames4["default"])((_classnames2 = {}, _defineProperty(_classnames2, clsPrefix + '-nav-container', 1), _defineProperty(_classnames2, clsPrefix + '-nav-swipe-container', 1), _defineProperty(_classnames2, clsPrefix + '-prevpage', hasPrevPage), _defineProperty(_classnames2, clsPrefix + '-nextpage', hasNextPage), _classnames2)),
        key: 'container',
        ref: this.props.saveRef('container')
      },
      _react2["default"].createElement(
        'div',
        { className: clsPrefix + '-nav-wrap', ref: this.props.saveRef('navWrap') },
        _react2["default"].createElement(
          _reactHammerjs2["default"],
          _extends({}, events, {
            direction: (0, _utils.isVertical)(tabBarPosition) ? 'DIRECTION_ALL' : 'DIRECTION_HORIZONTAL',
            options: hammerOptions
          }),
          _react2["default"].createElement(
            'div',
            { className: clsPrefix + '-nav-swipe', ref: this.props.saveRef('swipe') },
            _react2["default"].createElement(
              'div',
              { className: navClasses, ref: this.props.saveRef('nav') },
              this.props.children
            )
          )
        )
      )
    );
  };

  return SwipeableTabBarNode;
}(_react2["default"].Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onPan = function (e) {
    var _cache2 = _this2.cache,
        vertical = _cache2.vertical,
        totalAvaliableDelta = _cache2.totalAvaliableDelta,
        totalDelta = _cache2.totalDelta;
    var speed = _this2.props.speed;
    // calculate touch distance

    var nowDelta = vertical ? e.deltaY : e.deltaX;
    nowDelta *= speed / 10;

    // calculate distance dom need transform
    var _nextDelta = nowDelta + totalDelta;

    if (_this2.isRtl()) {
      // calculate distance from right when direction is right-to-left 
      if (_nextDelta <= 0) {
        _nextDelta = 0;
      } else if (_nextDelta >= totalAvaliableDelta) {
        _nextDelta = totalAvaliableDelta;
      }
    }
    // calculate distance from left when direction is left-to-right 
    else if (_nextDelta >= 0) {
        _nextDelta = 0;
      } else if (_nextDelta <= -totalAvaliableDelta) {
        _nextDelta = -totalAvaliableDelta;
      }

    _this2.cache.totalDelta = _nextDelta;
    _this2.setSwipePosition();

    // calculate pagination display

    var _checkPaginationByDel = _this2.checkPaginationByDelta(_this2.cache.totalDelta),
        hasPrevPage = _checkPaginationByDel.hasPrevPage,
        hasNextPage = _checkPaginationByDel.hasNextPage;

    if (hasPrevPage !== _this2.state.hasPrevPage || hasNextPage !== _this2.state.hasNextPage) {
      _this2.setState({
        hasPrevPage: hasPrevPage,
        hasNextPage: hasNextPage
      });
    }
  };
};

exports["default"] = SwipeableTabBarNode;


SwipeableTabBarNode.propTypes = {
  activeKey: _propTypes2["default"].string,
  panels: _propTypes2["default"].node,
  pageSize: _propTypes2["default"].number,
  tabBarPosition: _propTypes2["default"].oneOf(['left', 'right', 'top', 'bottom']),
  clsPrefix: _propTypes2["default"].string,
  children: _propTypes2["default"].node,
  hammerOptions: _propTypes2["default"].object,
  speed: _propTypes2["default"].number,
  saveRef: _propTypes2["default"].func,
  getRef: _propTypes2["default"].func,
  direction: _propTypes2["default"].string
};

SwipeableTabBarNode.defaultProps = {
  panels: null,
  tabBarPosition: 'top',
  clsPrefix: '',
  children: null,
  hammerOptions: {},
  pageSize: 5, // per page show how many tabs
  speed: 7, // swipe speed, 1 to 10, more bigger more faster
  saveRef: function saveRef() {},
  getRef: function getRef() {}
};
module.exports = exports['default'];