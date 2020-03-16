'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames5 = require('classnames');

var _classnames6 = _interopRequireDefault(_classnames5);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

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


var ScrollableTabBarNode = function (_React$Component) {
  _inherits(ScrollableTabBarNode, _React$Component);

  function ScrollableTabBarNode(props) {
    _classCallCheck(this, ScrollableTabBarNode);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.prevTransitionEnd = function (e) {
      if (e.propertyName !== 'opacity') {
        return;
      }
      var container = _this.props.getRef('container');
      _this.scrollToActiveTab({
        target: container,
        currentTarget: container
      });
    };

    _this.scrollToActiveTab = function (e) {
      var activeTab = _this.props.getRef('activeTab');
      var navWrap = _this.props.getRef('navWrap');
      if (e && e.target !== e.currentTarget || !activeTab) {
        return;
      }

      // when not scrollable or enter scrollable first time, don't emit scrolling
      var needToSroll = _this.isNextPrevShown() && _this.lastNextPrevShown;
      _this.lastNextPrevShown = _this.isNextPrevShown();
      if (!needToSroll) {
        return;
      }

      var activeTabWH = _this.getScrollWH(activeTab);
      var navWrapNodeWH = _this.getOffsetWH(navWrap);
      var offset = _this.offset;

      var wrapOffset = _this.getOffsetLT(navWrap);
      var activeTabOffset = _this.getOffsetLT(activeTab);
      if (wrapOffset > activeTabOffset) {
        offset += wrapOffset - activeTabOffset;
        _this.setOffset(offset);
      } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
        offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);
        _this.setOffset(offset);
      }
    };

    _this.prev = function (e) {
      _this.props.onPrevClick(e);
      var navWrapNode = _this.props.getRef('navWrap');
      var navWrapNodeWH = _this.getOffsetWH(navWrapNode);
      var offset = _this.offset;

      _this.setOffset(offset + navWrapNodeWH);
    };

    _this.next = function (e) {
      _this.props.onNextClick(e);
      var navWrapNode = _this.props.getRef('navWrap');
      var navWrapNodeWH = _this.getOffsetWH(navWrapNode);
      var offset = _this.offset;

      _this.setOffset(offset - navWrapNodeWH);
    };

    _this.offset = 0;

    _this.state = {
      next: false,
      prev: false
    };
    return _this;
  }

  ScrollableTabBarNode.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.componentDidUpdate();
    this.debouncedResize = (0, _debounce2["default"])(function () {
      _this2.setNextPrev();
      _this2.scrollToActiveTab();
    }, 200);
    this.resizeObserver = new _resizeObserverPolyfill2["default"](this.debouncedResize);
    this.resizeObserver.observe(this.props.getRef('container'));
  };

  ScrollableTabBarNode.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
      this.setOffset(0);
      return;
    }
    var nextPrev = this.setNextPrev();
    // wait next, prev show hide
    /* eslint react/no-did-update-set-state:0 */
    if (this.isNextPrevShown(this.state) !== this.isNextPrevShown(nextPrev)) {
      this.setState({}, this.scrollToActiveTab);
    } else if (!prevProps || props.activeKey !== prevProps.activeKey) {
      // can not use props.activeKey
      this.scrollToActiveTab();
    }
  };

  ScrollableTabBarNode.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.debouncedResize && this.debouncedResize.cancel) {
      this.debouncedResize.cancel();
    }
  };

  ScrollableTabBarNode.prototype.setNextPrev = function setNextPrev() {
    var navNode = this.props.getRef('nav');
    var navTabsContainer = this.props.getRef('navTabsContainer');
    var navNodeWH = this.getScrollWH(navTabsContainer || navNode);
    // Add 1px to fix `offsetWidth` with decimal in Chrome not correct handle
    // https://github.com/ant-design/ant-design/issues/13423
    var containerWH = this.getOffsetWH(this.props.getRef('container')) + 1;
    var navWrapNodeWH = this.getOffsetWH(this.props.getRef('navWrap'));
    var offset = this.offset;

    var minOffset = containerWH - navNodeWH;
    var _state = this.state,
        next = _state.next,
        prev = _state.prev;

    if (minOffset >= 0) {
      next = false;
      this.setOffset(0, false);
      offset = 0;
    } else if (minOffset < offset) {
      next = true;
    } else {
      next = false;
      // Fix https://github.com/ant-design/ant-design/issues/8861
      // Test with container offset which is stable
      // and set the offset of the nav wrap node
      var realOffset = navWrapNodeWH - navNodeWH;
      this.setOffset(realOffset, false);
      offset = realOffset;
    }

    if (offset < 0) {
      prev = true;
    } else {
      prev = false;
    }

    this.setNext(next);
    this.setPrev(prev);
    return {
      next: next,
      prev: prev
    };
  };

  ScrollableTabBarNode.prototype.getOffsetWH = function getOffsetWH(node) {
    var tabBarPosition = this.props.tabBarPosition;
    var prop = 'offsetWidth';
    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      prop = 'offsetHeight';
    }
    return node[prop];
  };

  ScrollableTabBarNode.prototype.getScrollWH = function getScrollWH(node) {
    var tabBarPosition = this.props.tabBarPosition;
    var prop = 'scrollWidth';
    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      prop = 'scrollHeight';
    }
    return node[prop];
  };

  ScrollableTabBarNode.prototype.getOffsetLT = function getOffsetLT(node) {
    var tabBarPosition = this.props.tabBarPosition;
    var prop = 'left';
    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      prop = 'top';
    }
    return node.getBoundingClientRect()[prop];
  };

  ScrollableTabBarNode.prototype.setOffset = function setOffset(offset) {
    var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var target = Math.min(0, offset);
    if (this.offset !== target) {
      this.offset = target;
      var navOffset = {};
      var tabBarPosition = this.props.tabBarPosition;
      var navStyle = this.props.getRef('nav').style;
      var transformSupported = (0, _utils.isTransformSupported)(navStyle);
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        if (transformSupported) {
          navOffset = {
            value: 'translate3d(0,' + target + 'px,0)'
          };
        } else {
          navOffset = {
            name: 'top',
            value: target + 'px'
          };
        }
      } else if (transformSupported) {
        if (this.props.direction === 'rtl') {
          target = -target;
        }
        navOffset = {
          value: 'translate3d(' + target + 'px,0,0)'
        };
      } else {
        navOffset = {
          name: 'left',
          value: target + 'px'
        };
      }
      if (transformSupported) {
        (0, _utils.setTransform)(navStyle, navOffset.value);
      } else {
        navStyle[navOffset.name] = navOffset.value;
      }
      if (checkNextPrev) {
        this.setNextPrev();
      }
    }
  };

  ScrollableTabBarNode.prototype.setPrev = function setPrev(v) {
    if (this.state.prev !== v) {
      this.setState({
        prev: v
      });
    }
  };

  ScrollableTabBarNode.prototype.setNext = function setNext(v) {
    if (this.state.next !== v) {
      this.setState({
        next: v
      });
    }
  };

  ScrollableTabBarNode.prototype.isNextPrevShown = function isNextPrevShown(state) {
    if (state) {
      return state.next || state.prev;
    }
    return this.state.next || this.state.prev;
  };

  ScrollableTabBarNode.prototype.render = function render() {
    var _classnames, _classnames2, _classnames3, _classnames4;

    var _state2 = this.state,
        next = _state2.next,
        prev = _state2.prev;
    var _props = this.props,
        clsPrefix = _props.clsPrefix,
        scrollAnimated = _props.scrollAnimated,
        navWrapper = _props.navWrapper,
        prevIcon = _props.prevIcon,
        nextIcon = _props.nextIcon;

    var showNextPrev = prev || next;

    var prevButton = _react2["default"].createElement(
      'span',
      {
        onClick: prev ? this.prev : null,
        unselectable: 'unselectable',
        className: (0, _classnames6["default"])((_classnames = {}, _defineProperty(_classnames, clsPrefix + '-tab-prev', 1), _defineProperty(_classnames, clsPrefix + '-tab-btn-disabled', !prev), _defineProperty(_classnames, clsPrefix + '-tab-arrow-show', showNextPrev), _classnames)),
        onTransitionEnd: this.prevTransitionEnd
      },
      prevIcon || _react2["default"].createElement('span', { className: clsPrefix + '-tab-prev-icon' })
    );

    var nextButton = _react2["default"].createElement(
      'span',
      {
        onClick: next ? this.next : null,
        unselectable: 'unselectable',
        className: (0, _classnames6["default"])((_classnames2 = {}, _defineProperty(_classnames2, clsPrefix + '-tab-next', 1), _defineProperty(_classnames2, clsPrefix + '-tab-btn-disabled', !next), _defineProperty(_classnames2, clsPrefix + '-tab-arrow-show', showNextPrev), _classnames2))
      },
      nextIcon || _react2["default"].createElement('span', { className: clsPrefix + '-tab-next-icon' })
    );

    var navClassName = clsPrefix + '-nav';
    var navClasses = (0, _classnames6["default"])((_classnames3 = {}, _defineProperty(_classnames3, navClassName, true), _defineProperty(_classnames3, scrollAnimated ? navClassName + '-animated' : navClassName + '-no-animated', true), _classnames3));

    return _react2["default"].createElement(
      'div',
      {
        className: (0, _classnames6["default"])((_classnames4 = {}, _defineProperty(_classnames4, clsPrefix + '-nav-container', 1), _defineProperty(_classnames4, clsPrefix + '-nav-container-scrolling', showNextPrev), _classnames4)),
        key: 'container',
        ref: this.props.saveRef('container')
      },
      prevButton,
      nextButton,
      _react2["default"].createElement(
        'div',
        { className: clsPrefix + '-nav-wrap', ref: this.props.saveRef('navWrap') },
        _react2["default"].createElement(
          'div',
          { className: clsPrefix + '-nav-scroll' },
          _react2["default"].createElement(
            'div',
            { className: navClasses, ref: this.props.saveRef('nav') },
            navWrapper(this.props.children)
          )
        )
      )
    );
  };

  return ScrollableTabBarNode;
}(_react2["default"].Component);

exports["default"] = ScrollableTabBarNode;


ScrollableTabBarNode.propTypes = {
  activeKey: _propTypes2["default"].string,
  getRef: _propTypes2["default"].func.isRequired,
  saveRef: _propTypes2["default"].func.isRequired,
  tabBarPosition: _propTypes2["default"].oneOf(['left', 'right', 'top', 'bottom']),
  clsPrefix: _propTypes2["default"].string,
  scrollAnimated: _propTypes2["default"].bool,
  onPrevClick: _propTypes2["default"].func,
  onNextClick: _propTypes2["default"].func,
  navWrapper: _propTypes2["default"].func,
  children: _propTypes2["default"].node,
  prevIcon: _propTypes2["default"].node,
  nextIcon: _propTypes2["default"].node,
  direction: _propTypes2["default"].node
};

ScrollableTabBarNode.defaultProps = {
  tabBarPosition: 'left',
  clsPrefix: '',
  scrollAnimated: true,
  onPrevClick: function onPrevClick() {},
  onNextClick: function onNextClick() {},
  navWrapper: function navWrapper(ele) {
    return ele;
  }
};
module.exports = exports['default'];