'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('./util');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 处理滚动加载逻辑
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var InfiniteScroll = function (_Component) {
  _inherits(InfiniteScroll, _Component);

  function InfiniteScroll(props) {
    _classCallCheck(this, InfiniteScroll);

    //默认显示20条，rowsInView根据定高算的。在非固定高下，这个只是一个大概的值。
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.eventListenerOptions = function () {
      var options = _this.props.useCapture;

      if (_this.isPassiveSupported()) {
        options = {
          useCapture: _this.props.useCapture,
          passive: true
        };
      }
      return options;
    };

    _this.mousewheelListener = function (e) {
      // Prevents Chrome hangups
      // See: https://stackoverflow.com/questions/47524205/random-high-content-download-time-in-chrome/47684257#47684257
      if (e.deltaY === 1 && !_this.isPassiveSupported()) {
        e.preventDefault();
      }
    };

    _this.scrollListener = function () {
      var el = _this.scrollComponent;

      var parentNode = _this.getParentElement(el);

      _this.scrollTop = parentNode.scrollTop;
      (0, _util.throttle)(_this.handleScrollY, 500)();
    };

    _this.handleScrollY = function () {
      var currentIndex = _this.currentIndex,
          startIndex = _this.startIndex,
          endIndex = _this.endIndex,
          treeList = _this.treeList,
          loadCount = _this.loadCount,
          rowsInView = _this.rowsInView;

      var index = 0;
      var tempScrollTop = _this.scrollTop;
      //根据 scrollTop 计算 currentIndex
      while (tempScrollTop > 0) {
        tempScrollTop -= _config2["default"].defaultHeight;
        if (tempScrollTop > 0) {
          index += 1;
        }
      }

      //true 为向下滚动， false 为向上滚动
      var isScrollDown = index - currentIndex > 0 ? true : false;

      if (index < 0) index = 0;
      //如果之前的索引和下一次的不一样则重置索引和滚动的位置
      _this.currentIndex = currentIndex !== index ? index : currentIndex;

      // 如果rowsInView 小于 缓存的数据则重新render
      // 向下滚动 下临界值超出缓存的endIndex则重新渲染
      if (isScrollDown && rowsInView + index > endIndex - _config2["default"].rowDiff) {
        startIndex = index - _config2["default"].loadBuffer > 0 ? index - _config2["default"].loadBuffer : 0;
        endIndex = startIndex + loadCount;
        if (endIndex > treeList.length) {
          endIndex = treeList.length;
        }
        if (endIndex > _this.endIndex) {
          _this.startIndex = startIndex;
          _this.endIndex = endIndex;
          _this.sliceTreeList(_this.startIndex, _this.endIndex);
        }
      }
      // 向上滚动，当前的index是否已经加载（currentIndex），若干上临界值小于startIndex则重新渲染
      if (!isScrollDown && index < startIndex + _config2["default"].rowDiff) {
        startIndex = index - _config2["default"].loadBuffer;
        if (startIndex < 0) {
          startIndex = 0;
        }
        if (startIndex <= _this.startIndex) {
          _this.startIndex = startIndex;
          _this.endIndex = _this.startIndex + loadCount;
          _this.sliceTreeList(_this.startIndex, _this.endIndex);
        }
      }
    };

    _this.sliceTreeList = function (startIndex, endIndex) {
      var newTreeList = []; //存储截取后的新数据
      // console.log(
      //   "**startIndex**" + startIndex,
      //   "**endIndex**" + endIndex
      // );
      newTreeList = _this.treeList.slice(startIndex, endIndex);
      // console.log(JSON.stringify(newTreeList))
      _this.props.handleTreeListChange && _this.props.handleTreeListChange(newTreeList, startIndex, endIndex);
    };

    _this.rowsInView = _config2["default"].defaultRowsInView;
    //一维数组
    _this.treeList = props.treeList;
    //一次加载多少数据
    _this.loadCount = _config2["default"].loadBuffer ? _this.rowsInView + _config2["default"].loadBuffer * 2 : 16;
    //可视区第一条数据的 index
    _this.currentIndex = 0;
    _this.startIndex = _this.currentIndex; //数据开始位置
    _this.endIndex = _this.currentIndex + _this.loadCount; //数据结束位置
    return _this;
  }

  InfiniteScroll.prototype.componentDidMount = function componentDidMount() {
    this.options = this.eventListenerOptions();
    this.attachScrollListener();
  };

  InfiniteScroll.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var newTreeList = nextProps.treeList;
    var oldTreeList = this.props.treeList;

    if (newTreeList !== oldTreeList) {
      this.treeList = newTreeList;
      this.handleScrollY();
    }
  };

  InfiniteScroll.prototype.componentWillUnmount = function componentWillUnmount() {
    this.detachScrollListener();
    this.detachMousewheelListener();
  };

  InfiniteScroll.prototype.isPassiveSupported = function isPassiveSupported() {
    var passive = false;

    var testOptions = {
      get passive() {
        passive = true;
      }
    };

    try {
      document.addEventListener('test', null, testOptions);
      document.removeEventListener('test', null, testOptions);
    } catch (e) {
      // ignore
    }
    return passive;
  };

  /**
   * 解除mousewheel事件监听
   */
  InfiniteScroll.prototype.detachMousewheelListener = function detachMousewheelListener() {
    var scrollEl = window;
    if (this.props.useWindow === false) {
      scrollEl = this.scrollComponent.parentNode;
    }

    scrollEl.removeEventListener('mousewheel', this.mousewheelListener, this.options ? this.options : this.props.useCapture);
  };
  /**
   * 解除scroll事件监听
   */


  InfiniteScroll.prototype.detachScrollListener = function detachScrollListener() {
    var scrollEl = window;
    if (this.props.useWindow === false) {
      scrollEl = this.getParentElement(this.scrollComponent);
    }

    scrollEl.removeEventListener('scroll', this.scrollListener, this.options ? this.options : this.props.useCapture);
    scrollEl.removeEventListener('resize', this.scrollListener, this.options ? this.options : this.props.useCapture);
  };
  /**
   * 获取父组件(用户自定义父组件或者当前dom的parentNode)
   * @param {*} el 
   */


  InfiniteScroll.prototype.getParentElement = function getParentElement(el) {
    var scrollParent = this.props.getScrollParent && this.props.getScrollParent();
    if (scrollParent != null) {
      return scrollParent;
    }
    return el && el.parentNode;
  };

  InfiniteScroll.prototype.filterProps = function filterProps(props) {
    return props;
  };
  /**
   * 绑定scroll事件
   */


  InfiniteScroll.prototype.attachScrollListener = function attachScrollListener() {
    var parentElement = this.getParentElement(this.scrollComponent);

    if (!parentElement) {
      return;
    }

    var scrollEl = parentElement;
    var scrollY = scrollEl && scrollEl.clientHeight;

    //默认显示20条，rowsInView根据定高算的。在非固定高下，这个只是一个大概的值。
    this.rowsInView = scrollY ? Math.floor(scrollY / _config2["default"].defaultHeight) : _config2["default"].defaultRowsInView;

    scrollEl.addEventListener('scroll', this.scrollListener, this.options ? this.options : this.props.useCapture);
    scrollEl.addEventListener('resize', this.scrollListener, this.options ? this.options : this.props.useCapture);
  };
  /**
   * 滚动事件监听
   */


  /**
   * @description 根据返回的scrollTop计算当前的索引。
   */


  /**
   * 根据 startIndex 和 endIndex 截取数据
   * @param startIndex
   * @param endIndex
   */


  InfiniteScroll.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        element = _props.element,
        ref = _props.ref,
        getScrollParent = _props.getScrollParent,
        treeList = _props.treeList,
        props = _objectWithoutProperties(_props, ['children', 'element', 'ref', 'getScrollParent', 'treeList']);

    props.ref = function (node) {
      _this2.scrollComponent = node;
      if (ref) {
        ref(node);
      }
    };

    var childrenArray = [children];

    return _react2["default"].createElement(element, props, childrenArray);
  };

  return InfiniteScroll;
}(_react.Component);

InfiniteScroll.propTypes = {
  children: _propTypes2["default"].node.isRequired,
  element: _propTypes2["default"].node,
  ref: _propTypes2["default"].func,
  getScrollParent: _propTypes2["default"].func,
  treeList: _propTypes2["default"].array,
  handleTreeListChange: _propTypes2["default"].func
};
InfiniteScroll.defaultProps = {
  element: 'div',
  ref: null,
  getScrollParent: null,
  treeList: [],
  handleTreeListChange: function handleTreeListChange() {}
};
exports["default"] = InfiniteScroll;
module.exports = exports['default'];