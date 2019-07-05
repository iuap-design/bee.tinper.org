'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeAnimate = require('bee-animate');

var _beeAnimate2 = _interopRequireDefault(_beeAnimate);

var _util = require('./util');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinperBeeCore = require('tinper-bee-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var browserUa = typeof window !== 'undefined' ? (0, _util.browser)(window.navigator) : '';
var ieOrEdge = /.*(IE|Edge).+/.test(browserUa);
// const uaArray = browserUa.split(' ');
// const gtIE8 = uaArray.length !== 2 || uaArray[0].indexOf('IE') === -1 || Number(uaArray[1]) > 8;

var defaultTitle = '---';

var TreeNode = function (_React$Component) {
  _inherits(TreeNode, _React$Component);

  function TreeNode(props) {
    _classCallCheck(this, TreeNode);

    var _this2 = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this2.getNodeChildren = function () {
      var children = _this2.props.children;

      var originList = (0, _util.toArray)(children).filter(function (node) {
        return node;
      });
      var targetList = (0, _util.getNodeChildren)(originList);

      if (originList.length !== targetList.length) {
        (0, _util.warnOnlyTreeNode)();
      }

      return targetList;
    };

    ['onExpand', 'onCheck', 'onContextMenu', 'onMouseEnter', 'onMouseLeave', 'onDragStart', 'onDragEnter', 'onDragOver', 'onDragLeave', 'onDrop', 'onDragEnd', 'onDoubleClick', 'onKeyDown'].forEach(function (m) {
      _this2[m] = _this2[m].bind(_this2);
    });
    _this2.state = {
      dataLoading: false,
      dragNodeHighlight: false
    };
    return _this2;
  }

  TreeNode.prototype.componentDidMount = function componentDidMount() {
    if (!this.props.root._treeNodeInstances) {
      this.props.root._treeNodeInstances = [];
    }
    this.props.root._treeNodeInstances.push(this);
  };
  // shouldComponentUpdate(nextProps) {
  //   if (!nextProps.expanded) {
  //     return false;
  //   }
  //   return true;
  // }

  TreeNode.prototype.onCheck = function onCheck() {

    this.props.root.onCheck(this);
  };

  TreeNode.prototype.onSelect = function onSelect() {
    clearTimeout(this.doubleClickFlag);
    var _this = this;
    if (this.props.onDoubleClick) {
      //执行延时
      this.doubleClickFlag = setTimeout(function () {
        //do function在此处写单击事件要执行的代码
        _this.props.root.onSelect(_this);
      }, 300);
    } else {
      _this.props.root.onSelect(_this);
    }
  };

  TreeNode.prototype.onDoubleClick = function onDoubleClick() {
    clearTimeout(this.doubleClickFlag);
    this.props.root.onDoubleClick(this);
  };

  TreeNode.prototype.onMouseEnter = function onMouseEnter(e) {
    e.preventDefault();
    this.props.root.onMouseEnter(e, this);
  };

  TreeNode.prototype.onMouseLeave = function onMouseLeave(e) {
    e.preventDefault();
    this.props.root.onMouseLeave(e, this);
  };

  TreeNode.prototype.onContextMenu = function onContextMenu(e) {
    e.preventDefault();
    this.props.root.onContextMenu(e, this);
  };

  TreeNode.prototype.onDragStart = function onDragStart(e) {
    // console.log('dragstart', this.props.eventKey, e);
    // e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragNodeHighlight: true
    });
    this.props.root.onDragStart(e, this);
    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', '');
    } finally {
      // empty
    }
  };

  TreeNode.prototype.onDragEnter = function onDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.root.onDragEnter(e, this);
  };

  TreeNode.prototype.onDragOver = function onDragOver(e) {
    // todo disabled
    e.preventDefault();
    e.stopPropagation();
    this.props.root.onDragOver(e, this);
    return false;
  };

  TreeNode.prototype.onDragLeave = function onDragLeave(e) {
    e.stopPropagation();
    this.props.root.onDragLeave(e, this);
  };

  TreeNode.prototype.onDrop = function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragNodeHighlight: false
    });
    this.props.root.onDrop(e, this);
  };

  TreeNode.prototype.onDragEnd = function onDragEnd(e) {
    e.stopPropagation();
    this.setState({
      dragNodeHighlight: false
    });
    this.props.root.onDragEnd(e, this);
  };

  TreeNode.prototype.onExpand = function onExpand() {
    var _this3 = this;

    var callbackPromise = this.props.root.onExpand(this);
    if (callbackPromise && (typeof callbackPromise === 'undefined' ? 'undefined' : _typeof(callbackPromise)) === 'object') {
      var setLoading = function setLoading(dataLoading) {
        _this3.setState({
          dataLoading: dataLoading
        });
      };
      setLoading(true);
      callbackPromise.then(function () {
        setLoading(false);
      }, function () {
        setLoading(false);
      });
    }
  };

  // keyboard event support


  TreeNode.prototype.onKeyDown = function onKeyDown(e) {
    this.props.root.onKeyDown(e, this);
    if (e.keyCode == _tinperBeeCore.KeyCode.SPACE || e.keyCode == _tinperBeeCore.KeyCode.DOWN || e.keyCode == _tinperBeeCore.KeyCode.LEFT || e.keyCode == _tinperBeeCore.KeyCode.RIGHT || e.keyCode == _tinperBeeCore.KeyCode.UP) {
      e.preventDefault();
    }
  };

  TreeNode.prototype.renderSwitcher = function renderSwitcher(props, expandedState) {
    var stateIcon = void 0;
    var prefixCls = props.prefixCls;
    var switcherCls = _defineProperty({}, prefixCls + '-switcher', true);
    if (!props.showLine) {
      switcherCls[prefixCls + '-noline_' + expandedState] = true;
    } else if (props.pos === '0-0') {
      switcherCls[prefixCls + '-roots_' + expandedState] = true;
    } else {
      switcherCls[prefixCls + '-center_' + expandedState] = !props.last;
      switcherCls[prefixCls + '-bottom_' + expandedState] = props.last;
    }

    if (expandedState === 'open' && props.openIcon) {
      stateIcon = props.openIcon;
      switcherCls['icon-none'] = true;
    }
    if (expandedState === 'close' && props.closeIcon) {
      stateIcon = props.closeIcon;
      switcherCls['icon-none'] = true;
    }
    //switcherCls[stateIcon] = stateIcon;
    props.switcherClass ? switcherCls['' + props.switcherClass] = true : '';
    if (props.disabled && !props.mustExpandable) {
      switcherCls[prefixCls + '-switcher-disabled'] = true;
      return _react2["default"].createElement(
        'span',
        { className: (0, _classnames2["default"])(switcherCls), style: props.switcherStyle },
        stateIcon
      );
    }
    return _react2["default"].createElement(
      'span',
      { className: (0, _classnames2["default"])(switcherCls), style: props.switcherStyle, onClick: this.onExpand },
      stateIcon
    );
  };

  TreeNode.prototype.renderCheckbox = function renderCheckbox(props) {
    var prefixCls = props.prefixCls;
    var checkboxCls = _defineProperty({}, prefixCls + '-checkbox', true);
    if (props.checked) {
      checkboxCls[prefixCls + '-checkbox-checked'] = true;
    } else if (props.halfChecked) {
      checkboxCls[prefixCls + '-checkbox-indeterminate'] = true;
    }
    var customEle = null;
    if (typeof props.checkable !== 'boolean') {
      customEle = props.checkable;
    }
    if (props.disabled || props.disableCheckbox) {
      checkboxCls[prefixCls + '-checkbox-disabled'] = true;
      return _react2["default"].createElement(
        'span',
        { className: (0, _classnames2["default"])(checkboxCls) },
        customEle
      );
    }
    return _react2["default"].createElement(
      'span',
      {
        className: (0, _classnames2["default"])(checkboxCls),
        onClick: this.onCheck
      },
      customEle
    );
  };

  TreeNode.prototype.renderChildren = function renderChildren(props) {
    var renderFirst = this.renderFirst;
    this.renderFirst = 1;
    var transitionAppear = true;
    if (!renderFirst && props.expanded) {
      transitionAppear = false;
    }
    var children = props.children;
    var newChildren = children;
    // 确定所有子节点是否是TreeNode
    var allTreeNode = false;
    if (Array.isArray(children)) {
      for (var index = 0; index < children.length; index++) {
        var item = children[index];
        allTreeNode = item.type.isTreeNode == 1;
        if (!allTreeNode) {
          //当检查到子节点中有不是 TreeNode 的，则直接结束检查。同时不会渲染所有子节点
          break;
        }
      }
    } else if (children && children.type && children.type.isTreeNode == 1) {
      allTreeNode = true;
    }
    //  如果props.children的长度大于0才可以生成子对象
    if (allTreeNode && _react2["default"].Children.count(children)) {
      var _cls;

      var cls = (_cls = {}, _defineProperty(_cls, props.prefixCls + '-child-tree', true), _defineProperty(_cls, props.prefixCls + '-child-tree-open', props.expanded), _cls);
      if (props.showLine) {
        cls[props.prefixCls + '-line'] = !props.last;
      }
      var animProps = {};
      if (props.openTransitionName) {
        animProps.transitionName = props.openTransitionName;
      } else if (_typeof(props.openAnimation) === 'object') {
        animProps.animation = _extends({}, props.openAnimation);
        if (!transitionAppear) {
          delete animProps.animation.appear;
        }
      }
      newChildren = _react2["default"].createElement(
        _beeAnimate2["default"],
        _extends({}, animProps, {
          showProp: 'data-expanded',
          transitionAppear: transitionAppear,
          component: ''
        }),
        !props.expanded ? null : _react2["default"].createElement(
          'ul',
          { className: (0, _classnames2["default"])(cls), 'data-expanded': props.expanded },
          _react2["default"].Children.map(children, function (item, index) {
            return props.root.renderTreeNode(item, index, props.pos);
          }, props.root)
        )
      );
    }
    return newChildren;
  };

  /**
   *判断是否为叶子节点，isLeaf的优先级>props.children。如果是异步加载是根据isLeaf的值进行判断的
   *
   * @returns
   * @memberof TreeNode
   */
  TreeNode.prototype.checkIsLeaf = function checkIsLeaf() {
    var _props = this.props,
        isLeaf = _props.isLeaf,
        loadData = _props.loadData;

    var rs = isLeaf;
    if (rs === false || rs === true) {
      return rs;
    } else {
      var hasChildren = this.getNodeChildren().length !== 0;
      return !loadData && !hasChildren;
    }
  };

  TreeNode.prototype.render = function render() {
    var _iconEleCls,
        _this4 = this;

    var props = this.props;
    var prefixCls = props.prefixCls;
    var expandedState = props.expanded ? 'open' : 'close';
    var iconState = expandedState;

    var canRenderSwitcher = true;
    var content = props.title;
    var newChildren = this.renderChildren(props);
    var openIconCls = false,
        closeIconCls = false;

    //以下变量控制是否鼠标单机双击方法中的变量
    var timer = 0;
    var delay = 500;
    var prevent = false;

    // if (!newChildren || newChildren === props.children) {
    //   // content = newChildren;
    //   newChildren = null;
    //   if (!props.loadData || props.isLeaf) {
    //     canRenderSwitcher = false;
    //     iconState = 'docu';
    //   }
    // }
    if (this.checkIsLeaf()) {
      canRenderSwitcher = false;
      iconState = 'docu';
    }
    // For performance, does't render children into dom when `!props.expanded` (move to Animate)
    // if (!props.expanded) {
    //   newChildren = null;
    // }

    var iconEleCls = (_iconEleCls = {}, _defineProperty(_iconEleCls, prefixCls + '-iconEle', true), _defineProperty(_iconEleCls, prefixCls + '-icon_loading', this.state.dataLoading), _defineProperty(_iconEleCls, prefixCls + '-icon__' + iconState, true), _iconEleCls);
    var selectHandle = function selectHandle() {
      var titleClass = props.titleClass ? prefixCls + '-title' + ' ' + props.className : prefixCls + '-title';
      // const icon = (props.showIcon || props.loadData && this.state.dataLoading) ?
      //   <span className={classNames(iconEleCls)}></span> : null;
      var icon = void 0;
      if (props.showIcon && props.icon) {
        icon = _react2["default"].createElement(
          'span',
          {
            className: (0, _classnames2["default"])(prefixCls + '-iconEle', prefixCls + '-icon__customize')
          },
          typeof currentIcon === 'function' ? _react2["default"].createElement(props.icon, _extends({}, _this4.props)) : props.icon
        );
      } else if (props.showIcon || props.loadData && _this4.state.dataLoading) {
        icon = _react2["default"].createElement('span', { className: (0, _classnames2["default"])(iconEleCls) });
      }
      var title = _react2["default"].createElement(
        'span',
        { className: titleClass, style: props.titleStyle },
        content
      );
      var wrap = prefixCls + '-node-content-wrapper';
      var domProps = {
        className: wrap + ' ' + wrap + '-' + (iconState === expandedState ? iconState : 'normal')
      };
      if (!props.disabled) {
        if (props.selected || !props._dropTrigger && _this4.state.dragNodeHighlight) {
          domProps.className += ' ' + prefixCls + '-node-selected';
        }
        domProps.onClick = function (e) {
          var _this = _this4;
          e.preventDefault();
          if (props.selectable) {
            _this.onSelect();
          }

          // not fire check event
          // if (props.checkable) {
          //   this.onCheck();
          // }
        };

        if (props.onDoubleClick) {
          domProps.onDoubleClick = _this4.onDoubleClick;
        }

        if (props.onRightClick) {
          domProps.onContextMenu = _this4.onContextMenu;
        }
        if (props.onMouseEnter) {
          domProps.onMouseEnter = _this4.onMouseEnter;
        }
        if (props.onMouseLeave) {
          domProps.onMouseLeave = _this4.onMouseLeave;
        }

        if (props.draggable) {
          domProps.className += ' draggable';
          if (ieOrEdge) {
            // ie bug!
            domProps.href = '#';
          }
          domProps.draggable = true;
          domProps['aria-grabbed'] = true;
          domProps.onDragStart = _this4.onDragStart;
        }
      }
      //设置tabIndex
      if (props.focusable) {
        domProps.onKeyDown = _this4.onKeyDown;
        domProps.tabIndex = -1;
        if (props.tabIndexKey) {
          if (props.eventKey == props.tabIndexKey) {
            domProps.tabIndex = props.tabIndexValue;
          }
        } else if (props.pos == '0-0') {
          domProps.tabIndex = props.tabIndexValue;
        }
      }

      return _react2["default"].createElement(
        'a',
        _extends({ ref: function ref(el) {
            _this4.selectHandle = el;
          }, pos: props.pos, title: typeof content === 'string' ? content : '' }, domProps),
        icon,
        title
      );
    };

    var liProps = {};
    if (props.liAttr) {
      liProps = _extends({}, props.liAttr);
    }
    if (props.draggable) {
      liProps.onDragEnter = this.onDragEnter;
      liProps.onDragOver = this.onDragOver;
      liProps.onDragLeave = this.onDragLeave;
      liProps.onDrop = this.onDrop;
      liProps.onDragEnd = this.onDragEnd;
    }
    var disabledCls = '';
    var dragOverCls = '';
    if (props.disabled) {
      disabledCls = prefixCls + '-treenode-disabled';
    } else if (props.dragOver) {
      dragOverCls = 'drag-over';
    } else if (props.dragOverGapTop) {
      dragOverCls = 'drag-over-gap-top';
    } else if (props.dragOverGapBottom) {
      dragOverCls = 'drag-over-gap-bottom';
    }

    var filterCls = props.filterTreeNode ? props.filterTreeNode(this) ? 'filter-node' : '' : '';

    var noopSwitcher = function noopSwitcher() {
      var _cls2;

      var cls = (_cls2 = {}, _defineProperty(_cls2, prefixCls + '-switcher', true), _defineProperty(_cls2, prefixCls + '-switcher-noop', true), _cls2);
      if (props.showLine) {
        // console.log('line---------');
        cls[prefixCls + '-center_docu'] = !props.last;
        cls[prefixCls + '-bottom_docu'] = props.last;
      } else {
        cls[prefixCls + '-noline_docu'] = true;
      }
      return _react2["default"].createElement('span', { className: (0, _classnames2["default"])(cls) });
    };
    var selectedCls = props.selected ? prefixCls + '-treenode-selected' : '';
    var focusedCls = props.focused ? prefixCls + '-treenode-focused' : '';
    return _react2["default"].createElement(
      'li',
      _extends({}, liProps, { style: props.style,
        className: (0, _classnames2["default"])(props.className, disabledCls, dragOverCls, filterCls, selectedCls, focusedCls)
      }),
      canRenderSwitcher ? this.renderSwitcher(props, expandedState) : noopSwitcher(),
      props.checkable ? this.renderCheckbox(props) : null,
      selectHandle(),
      newChildren
    );
  };

  return TreeNode;
}(_react2["default"].Component);

TreeNode.isTreeNode = 1;

TreeNode.propTypes = {
  prefixCls: _propTypes2["default"].string,
  disabled: _propTypes2["default"].bool,
  disableCheckbox: _propTypes2["default"].bool,
  expanded: _propTypes2["default"].bool,
  isLeaf: _propTypes2["default"].bool,
  root: _propTypes2["default"].object,
  onSelect: _propTypes2["default"].func,
  openIcon: _propTypes2["default"].element,
  closeIcon: _propTypes2["default"].element,
  style: _propTypes2["default"].object,
  className: _propTypes2["default"].string,
  titleClass: _propTypes2["default"].string,
  titleStyle: _propTypes2["default"].object,
  switcherClass: _propTypes2["default"].string,
  switcherStyle: _propTypes2["default"].object
};

TreeNode.defaultProps = {
  title: defaultTitle,
  tabIndexValue: 0,
  mustExpandable: false
};

exports["default"] = TreeNode;
module.exports = exports['default'];