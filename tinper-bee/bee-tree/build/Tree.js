'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TreeNode = require('./TreeNode');

var _TreeNode2 = _interopRequireDefault(_TreeNode);

var _infiniteScroll = require('./infiniteScroll');

var _infiniteScroll2 = _interopRequireDefault(_infiniteScroll);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinperBeeCore = require('tinper-bee-core');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint no-console:0 */


function noop() {}

var Tree = function (_React$Component) {
  _inherits(Tree, _React$Component);

  function Tree(props) {
    _classCallCheck(this, Tree);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    ['onKeyDown', 'onCheck', "onUlFocus", "_focusDom", "onUlMouseEnter", "onUlMouseLeave"].forEach(function (m) {
      _this[m] = _this[m].bind(_this);
    });
    _this.contextmenuKeys = [];
    _this.checkedKeysChange = true;
    _this.selectKeyDomPos = '0-0';
    _this.state = {
      expandedKeys: _this.getDefaultExpandedKeys(props),
      checkedKeys: _this.getDefaultCheckedKeys(props),
      selectedKeys: _this.getDefaultSelectedKeys(props),
      dragNodesKeys: '',
      dragOverNodeKey: '',
      dropNodeKey: '',
      focusKey: '', //上下箭头选择树节点时，用于标识focus状态
      treeData: [], //Tree结构数组(全量)
      flatTreeData: [] //一维数组(全量)
    };
    //默认显示20条，rowsInView根据定高算的。在非固定高下，这个只是一个大概的值。
    _this.rowsInView = _config2["default"].defaultRowsInView;
    //一次加载多少数据
    _this.loadCount = _config2["default"].loadBuffer ? _this.rowsInView + _config2["default"].loadBuffer * 2 : 16;
    _this.flatTreeKeysMap = {}; //存储所有 key-value 的映射，方便获取各节点信息
    _this.startIndex = 0;
    _this.endIndex = _this.startIndex + _this.loadCount;
    _this.cacheTreeNodes = []; //缓存 treenode 节点数组
    return _this;
  }

  Tree.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        treeData = _props.treeData,
        lazyLoad = _props.lazyLoad;

    var sliceTreeList = [];
    //启用懒加载，把 Tree 结构拍平，为后续动态截取数据做准备
    if (lazyLoad) {
      var flatTreeData = this.deepTraversal(treeData);
      flatTreeData.forEach(function (element) {
        if (sliceTreeList.length >= _this2.loadCount) return;
        sliceTreeList.push(element);
      });
      this.handleTreeListChange(sliceTreeList);
      this.setState({
        flatTreeData: flatTreeData
      });
    } else {
      this.setState({
        treeData: treeData
      });
    }
  };

  Tree.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var expandedKeys = this.getDefaultExpandedKeys(nextProps, true);
    var checkedKeys = this.getDefaultCheckedKeys(nextProps, true);
    var selectedKeys = this.getDefaultSelectedKeys(nextProps, true);
    var st = {};
    // 用于记录这次data内容有没有变化
    this.dataChange = false;
    if (expandedKeys) {
      st.expandedKeys = expandedKeys;
    }
    if (checkedKeys) {
      if (nextProps.checkedKeys === this.props.checkedKeys) {
        this.checkedKeysChange = false;
      } else {
        this.checkedKeysChange = true;
      }
      st.checkedKeys = checkedKeys;
    }
    if (selectedKeys) {
      st.selectedKeys = selectedKeys;
    }
    if (nextProps.hasOwnProperty('treeData') && nextProps.treeData !== this.props.treeData) {
      this.dataChange = true;
      st.treeData = nextProps.treeData;
    }
    if (nextProps.children !== this.props.children) {
      this.dataChange = true;
    }
    this.setState(st);
  };

  Tree.prototype.onDragStart = function onDragStart(e, treeNode) {
    this.dragNode = treeNode;
    this.dragNodesKeys = this.getDragNodes(treeNode);
    var st = {
      dragNodesKeys: this.dragNodesKeys
    };
    var expandedKeys = this.getExpandedKeys(treeNode, false);
    if (expandedKeys) {
      // Controlled expand, save and then reset
      this.getRawExpandedKeys();
      st.expandedKeys = expandedKeys;
    }
    this.setState(st);
    this.props.onDragStart({
      event: e,
      node: treeNode
    });
    this._dropTrigger = false;
  };

  Tree.prototype.onDragEnterGap = function onDragEnterGap(e, treeNode) {
    var offsetTop = (0, _util.getOffset)(treeNode.selectHandle).top;
    var offsetHeight = treeNode.selectHandle.offsetHeight;
    var pageY = e.pageY;
    var gapHeight = 2;
    if (pageY > offsetTop + offsetHeight - gapHeight) {
      this.dropPosition = 1;
      return 1;
    }
    if (pageY < offsetTop + gapHeight) {
      this.dropPosition = -1;
      return -1;
    }
    this.dropPosition = 0;
    return 0;
  };

  Tree.prototype.onDragEnter = function onDragEnter(e, treeNode) {
    var enterGap = this.onDragEnterGap(e, treeNode);
    if (this.dragNode.props.eventKey === treeNode.props.eventKey && enterGap === 0) {
      this.setState({
        dragOverNodeKey: ''
      });
      return;
    }
    var st = {
      dragOverNodeKey: treeNode.props.eventKey
    };
    var expandedKeys = this.getExpandedKeys(treeNode, true);
    if (expandedKeys) {
      this.getRawExpandedKeys();
      st.expandedKeys = expandedKeys;
    }
    this.setState(st);
    this.props.onDragEnter({
      event: e,
      node: treeNode,
      expandedKeys: expandedKeys && [].concat(_toConsumableArray(expandedKeys)) || [].concat(_toConsumableArray(this.state.expandedKeys))
    });
  };

  Tree.prototype.onDragOver = function onDragOver(e, treeNode) {
    this.props.onDragOver({
      event: e,
      node: treeNode
    });
  };

  Tree.prototype.onDragLeave = function onDragLeave(e, treeNode) {
    this.props.onDragLeave({
      event: e,
      node: treeNode
    });
  };

  Tree.prototype.onDrop = function onDrop(e, treeNode) {
    var key = treeNode.props.eventKey;
    this.setState({
      dragOverNodeKey: '',
      dropNodeKey: key
    });
    if (this.dragNodesKeys.indexOf(key) > -1) {
      if (console.warn) {
        console.warn('can not drop to dragNode(include it\'s children node)');
      }
      return false;
    }

    var posArr = treeNode.props.pos.split('-');
    var res = {
      event: e,
      node: treeNode,
      dragNode: this.dragNode,
      dragNodesKeys: [].concat(_toConsumableArray(this.dragNodesKeys)),
      dropPosition: this.dropPosition + Number(posArr[posArr.length - 1])
    };
    if (this.dropPosition !== 0) {
      res.dropToGap = true;
    }
    if ('expandedKeys' in this.props) {
      res.rawExpandedKeys = [].concat(_toConsumableArray(this._rawExpandedKeys)) || [].concat(_toConsumableArray(this.state.expandedKeys));
    }
    this.props.onDrop(res);
    this._dropTrigger = true;
  };

  Tree.prototype.onDragEnd = function onDragEnd(e, treeNode) {
    this.setState({
      dragOverNodeKey: ''
    });
    this.props.onDragEnd({
      event: e,
      node: treeNode
    });
  };
  /**
   *
   *
   * @param {*} treeNode 当前操作的节点
   * @param {*} keyType 键盘事件通用的key类型 left 为收起，right为展开
   * @returns
   * @memberof Tree
   */


  Tree.prototype.onExpand = function onExpand(treeNode, keyType) {
    var _this3 = this;

    var _props2 = this.props,
        treeData = _props2.treeData,
        lazyLoad = _props2.lazyLoad;

    var expanded = !treeNode.props.expanded;
    var controlled = 'expandedKeys' in this.props;
    var expandedKeys = [].concat(_toConsumableArray(this.state.expandedKeys));
    var index = expandedKeys.indexOf(treeNode.props.eventKey);

    if (keyType == 'left') {
      expanded = false;
    } else if (keyType == 'right') {
      expanded = true;
    }

    if (expanded && index === -1) {
      expandedKeys.push(treeNode.props.eventKey);
    } else if (!expanded && index > -1) {
      expandedKeys.splice(index, 1);
    }
    if (!controlled) {
      this.setState({
        expandedKeys: expandedKeys
      });
    }
    this.props.onExpand(expandedKeys, {
      node: treeNode,
      expanded: expanded
    });

    // after data loaded, need set new expandedKeys
    if (expanded && this.props.loadData) {
      return this.props.loadData(treeNode).then(function () {
        if (!controlled) {
          _this3.setState({
            expandedKeys: expandedKeys
          });
        }
      });
    }
    //收起和展开时，缓存 expandedKeys
    this.cacheExpandedKeys = expandedKeys;
    //启用懒加载，把 Tree 结构拍平，为后续动态截取数据做准备
    if (lazyLoad) {
      var flatTreeData = this.deepTraversal(treeData);
      this.cacheExpandedKeys = null;
      this.setState({
        flatTreeData: flatTreeData
      });
    }
  };

  Tree.prototype.onCheck = function onCheck(treeNode) {
    var _this4 = this;

    var checked = !treeNode.props.checked;
    if (treeNode.props.halfChecked) {
      checked = true;
    }
    var key = treeNode.props.eventKey;
    var checkedKeys = [].concat(_toConsumableArray(this.state.checkedKeys));
    var index = checkedKeys.indexOf(key);

    var newSt = {
      event: 'check',
      node: treeNode,
      checked: checked
    };

    if (this.props.checkStrictly) {
      var rsCheckedKeys = [];
      if (checked && index === -1) {
        checkedKeys.push(key);
      }
      if (!checked && index > -1) {
        checkedKeys.splice(index, 1);
      }
      this.treeNodesStates[treeNode.props.pos].checked = checked;
      newSt.checkedNodes = [];
      (0, _util.loopAllChildren)(this.props.children, function (item, ind, pos, keyOrPos) {
        if (checkedKeys.indexOf(keyOrPos) !== -1) {
          newSt.checkedNodes.push(item);
          rsCheckedKeys.push(keyOrPos);
        }
      });
      if (!('checkedKeys' in this.props)) {
        this.setState({
          checkedKeys: rsCheckedKeys
        });
      }
      var halfChecked = this.props.checkedKeys ? this.props.checkedKeys.halfChecked : [];
      this.props.onCheck((0, _util.getStrictlyValue)(rsCheckedKeys, halfChecked), newSt);
    } else {
      if (checked && index === -1) {
        this.treeNodesStates[treeNode.props.pos].checked = true;
        var checkedPositions = [];
        Object.keys(this.treeNodesStates).forEach(function (i) {
          if (_this4.treeNodesStates[i].checked) {
            checkedPositions.push(i);
          }
        });
        (0, _util.handleCheckState)(this.treeNodesStates, (0, _util.filterParentPosition)(checkedPositions), true);
      }
      if (!checked) {
        this.treeNodesStates[treeNode.props.pos].checked = false;
        this.treeNodesStates[treeNode.props.pos].halfChecked = false;
        (0, _util.handleCheckState)(this.treeNodesStates, [treeNode.props.pos], false);
      }
      var checkKeys = (0, _util.getCheck)(this.treeNodesStates);
      newSt.checkedNodes = checkKeys.checkedNodes;
      newSt.checkedNodesPositions = checkKeys.checkedNodesPositions;
      newSt.halfCheckedKeys = checkKeys.halfCheckedKeys;
      this.checkKeys = checkKeys;

      this._checkedKeys = checkedKeys = checkKeys.checkedKeys;
      if (!('checkedKeys' in this.props)) {
        this.setState({
          checkedKeys: checkedKeys
        });
      }
      this.props.onCheck(checkedKeys, newSt);
    }
  };

  Tree.prototype.onSelect = function onSelect(treeNode) {
    var props = this.props;
    var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
    var eventKey = treeNode.props.eventKey || treeNode.key;
    var index = selectedKeys.indexOf(eventKey);
    var selected = void 0;
    //cancelUnSelect为true时第二次点击时不取消选中
    if (props.cancelUnSelect) {
      if (index == -1) {
        selected = true;
        if (!props.multiple) {
          selectedKeys.length = 0;
        }
        selectedKeys.push(eventKey);
      }
    } else {
      if (index !== -1) {
        selected = false;
        selectedKeys.splice(index, 1);
      } else {
        selected = true;
        if (!props.multiple) {
          selectedKeys.length = 0;
        }
        selectedKeys.push(eventKey);
      }
    }

    var selectedNodes = [];
    if (selectedKeys.length) {
      (0, _util.loopAllChildren)(this.props.children, function (item) {
        if (selectedKeys.indexOf(item.key) !== -1) {
          selectedNodes.push(item);
        }
      });
    }
    var newSt = {
      event: 'select',
      node: treeNode,
      selected: selected,
      selectedNodes: selectedNodes
    };
    if (!('selectedKeys' in this.props)) {
      this.setState({
        selectedKeys: selectedKeys
      });
    }
    props.onSelect(selectedKeys, newSt);
  };

  Tree.prototype.onDoubleClick = function onDoubleClick(treeNode) {
    var props = this.props;
    var eventKey = treeNode.props.eventKey;
    var newSt = {
      event: 'dblclick',
      node: treeNode
    };
    if (props.expandWhenDoubleClick) {
      this.onExpand(treeNode);
    }
    props.onDoubleClick(eventKey, newSt);
  };

  Tree.prototype.onMouseEnter = function onMouseEnter(e, treeNode) {
    this.props.onMouseEnter({
      event: e,
      node: treeNode
    });
  };

  Tree.prototype.onMouseLeave = function onMouseLeave(e, treeNode) {
    this.props.onMouseLeave({
      event: e,
      node: treeNode
    });
  };

  Tree.prototype.onContextMenu = function onContextMenu(e, treeNode) {
    var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
    var eventKey = treeNode.props.eventKey;
    if (this.contextmenuKeys.indexOf(eventKey) === -1) {
      this.contextmenuKeys.push(eventKey);
    }
    this.contextmenuKeys.forEach(function (key) {
      var index = selectedKeys.indexOf(key);
      if (index !== -1) {
        selectedKeys.splice(index, 1);
      }
    });
    if (selectedKeys.indexOf(eventKey) === -1) {
      selectedKeys.push(eventKey);
    }
    this.setState({
      selectedKeys: selectedKeys
    });
    this.props.onRightClick({
      event: e,
      node: treeNode
    });
  };

  Tree.prototype.getTreeNode = function getTreeNode() {
    var props = this.props;
  };

  Tree.prototype.goDown = function goDown(currentPos, currentIndex, e, treeNode) {
    var props = this.props;
    var treeChildren = props.children ? props.children : this.cacheTreeNodes; //最终渲染在 Tree 标签中的子节点
    var nextIndex = parseInt(currentIndex) + 1;

    var nextPos = void 0,
        backNextPos = void 0;
    var nextTreeNode = void 0,
        backNextTreeNode = void 0;
    var backNextPosArr = [],
        backNextTreeNodeArr = [],
        tempBackNextPosArr = [];
    //是否为展开的节点，如果展开获取第一个子节点的信息，如果没有取相邻节点，若也没有相邻节点则获取父节点的下一个节点
    if (props.expandedKeys.indexOf(treeNode.props.eventKey) > -1) {
      nextPos = currentPos + '-0';
    } else {
      nextPos = currentPos.substr(0, currentPos.lastIndexOf('-') + 1) + nextIndex;
    }
    //若向下的节点没有了，找到父级相邻节点
    var tempPosArr = currentPos.split('-');
    var tempPosArrLength = tempPosArr.length;
    //将可能是下一个节点的的位置都备份一遍
    while (tempPosArrLength > 1) {
      backNextPos = tempPosArrLength > 1 && tempPosArr.slice(0, tempPosArrLength - 1).join('-') + '-' + (parseInt(tempPosArr[tempPosArrLength - 1]) + 1);
      tempBackNextPosArr.push(backNextPos);
      tempPosArr = tempPosArr.slice(0, tempPosArrLength - 1);
      tempPosArrLength = tempPosArr.length;
    }
    //选中下一个相邻的节点
    (0, _util.loopAllChildren)(treeChildren, function (itemNode, index, pos, newKey) {
      if (pos == nextPos) {
        nextTreeNode = itemNode;
      }
      tempBackNextPosArr.forEach(function (item) {
        if (item && item == pos) {
          // backNextTreeNode = item;
          backNextTreeNodeArr.push(itemNode);
          backNextPosArr.push(pos);
        }
      });
    });
    //如果没有下一个节点，则获取父节点的下一个节点
    if (!nextTreeNode) {
      for (var i = 0; i < backNextTreeNodeArr.length; i++) {
        if (backNextTreeNodeArr[i]) {
          nextTreeNode = backNextTreeNodeArr[i];
          nextPos = backNextPosArr[i];
          break;
        }
      }
    }

    //查询的下一个节点不为空的话，则选中
    if (nextTreeNode) {
      var queryInfo = 'a[pos="' + nextPos + '"]';
      var parentEle = (0, _util.closest)(e.target, ".u-tree");
      var focusEle = parentEle ? parentEle.querySelector(queryInfo) : null;
      focusEle && focusEle.focus();
      var eventKey = nextTreeNode.props.eventKey || nextTreeNode.key;
      this.setState({
        focusKey: eventKey
      });
      if (props.autoSelectWhenFocus) {
        this.onSelect(nextTreeNode);
      }
    }
  };

  Tree.prototype.goUp = function goUp(currentPos, currentIndex, e, treeNode) {
    var props = this.props;
    if (currentIndex == 0 && currentPos.length === 3) {
      return;
    }
    // 向上键Up
    var preIndex = parseInt(currentIndex) - 1;
    var prePos = void 0;
    if (preIndex >= 0) {
      prePos = currentPos.substr(0, currentPos.lastIndexOf('-') + 1) + preIndex;
    } else {
      prePos = currentPos.substr(0, currentPos.lastIndexOf('-'));
    }

    var prevTreeNode = void 0,
        preElement = void 0;
    //选中上一个相邻的节点
    (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
      if (pos == prePos) {
        prevTreeNode = item;
      }
    });
    //查询的上一个节点不为空的话，则选中
    if (prevTreeNode) {
      if (preIndex >= 0) {
        //如果上面的节点展开则默认选择最后一个子节点
        if (props.expandedKeys.indexOf(prevTreeNode.key) > -1) {
          var preElementArr = e.target.parentElement.previousElementSibling.querySelectorAll('a');
          preElement = preElementArr[preElementArr.length - 1];
          prePos = preElement.getAttribute('pos');
          (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
            if (pos == prePos) {
              prevTreeNode = item;
            }
          });
        } else {
          //上一个节点没有展开
          preElement = e.target.parentElement.previousElementSibling.querySelector('a');
        }
      } else {
        // 不存在上一个节点时，选中它的父节点
        preElement = e.target.parentElement.parentElement.parentElement.querySelector('a');
      }
    }
    preElement && preElement.focus();
    var eventKey = prevTreeNode.props.eventKey || prevTreeNode.key;
    this.setState({
      focusKey: eventKey
    });
    if (props.autoSelectWhenFocus) {
      this.onSelect(prevTreeNode);
    }
  };
  // all keyboard events callbacks run from here at first


  Tree.prototype.onKeyDown = function onKeyDown(e, treeNode) {
    // e.stopPropagation();

    var props = this.props;
    var currentPos = treeNode.props.pos;
    var currentIndex = currentPos.substr(currentPos.lastIndexOf('-') + 1);
    //向下键down
    if (e.keyCode == _tinperBeeCore.KeyCode.DOWN) {
      this.goDown(currentPos, currentIndex, e, treeNode);
    } else if (e.keyCode == _tinperBeeCore.KeyCode.UP) {
      this.goUp(currentPos, currentIndex, e, treeNode);
    } else if (e.keyCode == _tinperBeeCore.KeyCode.LEFT && !treeNode.props.isLeaf) {
      // 收起树节点
      this.onExpand(treeNode, 'left');
    } else if (e.keyCode == _tinperBeeCore.KeyCode.RIGHT && !treeNode.props.isLeaf) {
      // 展开树节点
      this.onExpand(treeNode, 'right');
    } else if (e.keyCode == _tinperBeeCore.KeyCode.SPACE) {
      this.onSelect(treeNode);
      // 如果是多选tree则进行选中或者反选该节点
      props.checkable && this.onCheck(treeNode);
    } else if (e.keyCode == _tinperBeeCore.KeyCode.ENTER) {
      this.onDoubleClick(treeNode);
    }
    this.props.keyFun && this.props.keyFun(e, treeNode);
    // e.preventDefault();
  };

  Tree.prototype._focusDom = function _focusDom(selectKeyDomPos, targetDom) {
    var queryInfo = 'a[pos="' + selectKeyDomPos + '"]';
    var parentEle = (0, _util.closest)(targetDom, ".u-tree");
    var focusEle = parentEle ? parentEle.querySelector(queryInfo) : null;
    if (document.activeElement !== focusEle) {
      focusEle && focusEle.focus();
    }
  };

  /**
   * 此方法为了解决树快捷键，当有的元素隐藏，按tab键也要显示的问题
   * @param {*} e 
   */


  Tree.prototype.onUlFocus = function onUlFocus(e) {
    var _this5 = this;

    var targetDom = e.target;

    // 如果当前tree节点不包括上一个焦点节点会触发此方法
    if (this.tree == targetDom && !this.isIn && !this.tree.contains(e.relatedTarget)) {
      var onFocus = this.props.onFocus;
      var _state$selectedKeys = this.state.selectedKeys,
          selectedKeys = _state$selectedKeys === undefined ? [] : _state$selectedKeys;

      var tabIndexKey = selectedKeys[0];
      var isExist = false;
      if (this.selectKeyDomExist && tabIndexKey || !tabIndexKey) {
        isExist = true;
        var queryInfo = 'a[pos="' + this.selectKeyDomPos + '"]';
        var parentEle = (0, _util.closest)(e.target, ".u-tree");
        var focusEle = parentEle ? parentEle.querySelector(queryInfo) : null;
        focusEle && focusEle.focus();
      }
      var onFocusRes = onFocus && onFocus(isExist);
      if (onFocusRes instanceof Promise) {
        onFocusRes.then(function () {
          _this5._focusDom(_this5.selectKeyDomPos, targetDom);
        });
      } else {
        this._focusDom(this.selectKeyDomPos, targetDom);
      }
    }
  };

  Tree.prototype.onUlMouseEnter = function onUlMouseEnter(e) {
    this.isIn = true;
    // console.log('onUlMouseEnter----isIn-----',this.isIn);
  };

  Tree.prototype.onUlMouseLeave = function onUlMouseLeave(e) {
    this.isIn = false;
    // console.log('onUlMouseLeave----isIn-----',this.isIn);
  };

  Tree.prototype.getFilterExpandedKeys = function getFilterExpandedKeys(props, expandKeyProp, expandAll) {
    var keys = props[expandKeyProp];
    if (!expandAll && !props.autoExpandParent) {
      return keys || [];
    }
    var expandedPositionArr = [];
    if (props.autoExpandParent) {
      (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
        if (keys.indexOf(newKey) > -1) {
          expandedPositionArr.push(pos);
        }
      });
    }
    var filterExpandedKeys = [];
    (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
      if (expandAll) {
        filterExpandedKeys.push(newKey);
      } else if (props.autoExpandParent) {
        expandedPositionArr.forEach(function (p) {
          if ((p.split('-').length > pos.split('-').length && (0, _util.isInclude)(pos.split('-'), p.split('-')) || pos === p) && filterExpandedKeys.indexOf(newKey) === -1) {
            filterExpandedKeys.push(newKey);
          }
        });
      }
    });
    return filterExpandedKeys.length ? filterExpandedKeys : keys;
  };

  Tree.prototype.getDefaultExpandedKeys = function getDefaultExpandedKeys(props, willReceiveProps) {
    var expandedKeys = willReceiveProps ? undefined : this.getFilterExpandedKeys(props, 'defaultExpandedKeys', props.defaultExpandedKeys.length ? false : props.defaultExpandAll);
    if ('expandedKeys' in props) {
      expandedKeys = (props.autoExpandParent ? this.getFilterExpandedKeys(props, 'expandedKeys', false) : props.expandedKeys) || [];
    }
    return expandedKeys;
  };

  Tree.prototype.getDefaultCheckedKeys = function getDefaultCheckedKeys(props, willReceiveProps) {
    var checkedKeys = willReceiveProps ? undefined : props.defaultCheckedKeys;
    if ('checkedKeys' in props) {
      checkedKeys = props.checkedKeys || [];
      if (props.checkStrictly) {
        if (props.checkedKeys.checked) {
          checkedKeys = props.checkedKeys.checked;
        } else if (!Array.isArray(props.checkedKeys)) {
          checkedKeys = [];
        }
      }
    }
    return checkedKeys;
  };

  Tree.prototype.getDefaultSelectedKeys = function getDefaultSelectedKeys(props, willReceiveProps) {
    var getKeys = function getKeys(keys) {
      if (props.multiple) {
        return [].concat(_toConsumableArray(keys));
      }
      if (keys.length) {
        return [keys[0]];
      }
      return keys;
    };
    var selectedKeys = willReceiveProps ? undefined : getKeys(props.defaultSelectedKeys);
    if ('selectedKeys' in props) {
      selectedKeys = getKeys(props.selectedKeys);
    }
    return selectedKeys;
  };

  Tree.prototype.getRawExpandedKeys = function getRawExpandedKeys() {
    if (!this._rawExpandedKeys && 'expandedKeys' in this.props) {
      this._rawExpandedKeys = [].concat(_toConsumableArray(this.state.expandedKeys));
    }
  };

  Tree.prototype.getOpenTransitionName = function getOpenTransitionName() {
    var props = this.props;
    var transitionName = props.openTransitionName;
    var animationName = props.openAnimation;
    if (!transitionName && typeof animationName === 'string') {
      transitionName = props.prefixCls + '-open-' + animationName;
    }
    return transitionName;
  };

  Tree.prototype.getDragNodes = function getDragNodes(treeNode) {
    var dragNodesKeys = [];
    var tPArr = treeNode.props.pos.split('-');
    (0, _util.loopAllChildren)(this.props.children, function (item, index, pos, newKey) {
      var pArr = pos.split('-');
      if (treeNode.props.pos === pos || tPArr.length < pArr.length && (0, _util.isInclude)(tPArr, pArr)) {
        dragNodesKeys.push(newKey);
      }
    });
    return dragNodesKeys;
  };

  Tree.prototype.getExpandedKeys = function getExpandedKeys(treeNode, expand) {
    var key = treeNode.props.eventKey;
    var expandedKeys = this.state.expandedKeys;
    var expandedIndex = expandedKeys.indexOf(key);
    var exKeys = void 0;
    if (expandedIndex > -1 && !expand) {
      exKeys = [].concat(_toConsumableArray(expandedKeys));
      exKeys.splice(expandedIndex, 1);
      return exKeys;
    }
    if (expand && expandedKeys.indexOf(key) === -1) {
      return expandedKeys.concat([key]);
    }
  };

  Tree.prototype.filterTreeNode = function filterTreeNode(treeNode) {
    var filterTreeNode = this.props.filterTreeNode;
    if (typeof filterTreeNode !== 'function' || treeNode.props.disabled) {
      return false;
    }
    return filterTreeNode.call(this, treeNode);
  };

  /**
   * 将截取后的 List 数组转换为 Tree 结构，并更新 state
   */


  /**
   * 深度遍历 treeData，把Tree数据拍平，变为一维数组
   * @param {*} treeData 
   * @param {*} parentKey 标识父节点
   * @param {*} isShown 该节点是否显示在页面中，当节点的父节点是展开状态 或 该节点是根节点时，该值为 true
   */


  /**
   * 根据 treeData 渲染树节点
   * @param data 树形结构的数组
   * @param preHeight 前置占位高度
   * @param sufHeight 后置占位高度
   */


  /**
   * @description 计算懒加载时的前置占位和后置占位
   * @param start {Number} 开始截取数据的位置
   * @param end {Number} 结束截取数据的位置
   * @return sumHeight {Number} 空白占位的高度
   */


  Tree.prototype.renderTreeNode = function renderTreeNode(child, index) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var pos = level + '-' + index;
    var key = child.key || pos;

    var state = this.state;
    var props = this.props;
    var _state$selectedKeys2 = this.state.selectedKeys,
        selectedKeys = _state$selectedKeys2 === undefined ? [] : _state$selectedKeys2;

    var tabIndexKey = selectedKeys[0];
    if (tabIndexKey && key == tabIndexKey) {
      this.selectKeyDomExist = true;
      this.selectKeyDomPos = pos;
    }
    // prefer to child's own selectable property if passed
    var selectable = props.selectable;
    if (child.props.hasOwnProperty('selectable')) {
      selectable = child.props.selectable;
    }
    var draggable = props.draggable;
    if (child.props.hasOwnProperty('draggable')) {
      draggable = child.props.draggable;
    }
    var isLeaf = null;
    if (child.props.hasOwnProperty('isLeaf')) {
      isLeaf = child.props.isLeaf;
    }

    var cloneProps = {
      root: this,
      eventKey: key,
      pos: pos,
      selectable: selectable,
      loadData: props.loadData,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onRightClick: props.onRightClick,
      onDoubleClick: props.onDoubleClick,
      onKeyDown: props.onKeyDown,
      prefixCls: props.prefixCls,
      showLine: props.showLine,
      showIcon: props.showIcon,
      draggable: draggable,
      dragOver: state.dragOverNodeKey === key && this.dropPosition === 0,
      dragOverGapTop: state.dragOverNodeKey === key && this.dropPosition === -1,
      dragOverGapBottom: state.dragOverNodeKey === key && this.dropPosition === 1,
      _dropTrigger: this._dropTrigger,
      expanded: state.expandedKeys.indexOf(key) !== -1,
      selected: state.selectedKeys.indexOf(key) !== -1,
      focused: state.focusKey === key,
      openTransitionName: this.getOpenTransitionName(),
      openAnimation: props.openAnimation,
      filterTreeNode: this.filterTreeNode.bind(this),
      openIcon: props.openIcon,
      closeIcon: props.closeIcon,
      focusable: props.focusable,
      tabIndexKey: state.selectedKeys[0],
      tabIndexValue: props.tabIndexValue,
      ext: child.props.ext,
      mustExpandable: props.mustExpandable,
      isLeaf: isLeaf
    };
    if (props.checkable) {
      cloneProps.checkable = props.checkable;
      if (props.checkStrictly) {
        if (state.checkedKeys) {
          cloneProps.checked = state.checkedKeys.indexOf(key) !== -1 || false;
        }
        if (props.checkedKeys && props.checkedKeys.halfChecked) {
          cloneProps.halfChecked = props.checkedKeys.halfChecked.indexOf(key) !== -1 || false;
        } else {
          cloneProps.halfChecked = false;
        }
      } else {
        if (this.checkedKeys) {
          cloneProps.checked = this.checkedKeys.indexOf(key) !== -1 || false;
        }
        cloneProps.halfChecked = this.halfCheckedKeys.indexOf(key) !== -1;
      }
    }
    if (this.treeNodesStates && this.treeNodesStates[pos]) {
      _extends(cloneProps, this.treeNodesStates[pos].siblingPosition);
    }
    return _react2["default"].cloneElement(child, cloneProps);
  };

  Tree.prototype.render = function render() {
    var _this6 = this;

    var props = this.props;
    var _props3 = this.props,
        showLine = _props3.showLine,
        prefixCls = _props3.prefixCls,
        className = _props3.className,
        focusable = _props3.focusable,
        checkable = _props3.checkable,
        loadData = _props3.loadData,
        checkStrictly = _props3.checkStrictly,
        tabIndexValue = _props3.tabIndexValue,
        lazyLoad = _props3.lazyLoad,
        getScrollContainer = _props3.getScrollContainer;
    var _state = this.state,
        treeData = _state.treeData,
        flatTreeData = _state.flatTreeData;
    var startIndex = this.startIndex,
        endIndex = this.endIndex,
        preHeight = 0,
        sufHeight = 0,
        treeNode = [],
        treeChildren = props.children; //最终渲染在 Tree 标签中的子节点

    if (lazyLoad) {
      preHeight = this.getSumHeight(0, startIndex);
      sufHeight = this.getSumHeight(endIndex, flatTreeData.length);
    }
    if (!props.children && treeData) {
      //传入json数据
      treeNode = this.renderTreefromData(treeData);
      this.cacheTreeNodes = treeNode;
      treeChildren = treeNode;
    }
    var showLineCls = "";
    if (showLine) {
      showLineCls = prefixCls + '-show-line';
    }
    var domProps = {
      className: (0, _classnames2["default"])(className, prefixCls, showLineCls),
      role: 'tree-node'
    };

    if (focusable) {
      domProps.onFocus = this.onUlFocus;
      domProps.onMouseEnter = this.onUlMouseEnter;
      domProps.onMouseLeave = this.onUlMouseLeave;
    }

    // if (props.focusable) {
    //   // domProps.tabIndex = '0';//需求改成了默认选择第一个节点或者选中的节点
    //   // domProps.onKeyDown = this.onKeyDown;//添加到具体的treeNode上了
    // }
    var getTreeNodesStates = function getTreeNodesStates() {
      _this6.treeNodesStates = {};
      (0, _util.loopAllChildren)(treeChildren, function (item, index, pos, keyOrPos, siblingPosition) {
        _this6.treeNodesStates[pos] = {
          siblingPosition: siblingPosition
        };
      });
    };
    if (showLine && !checkable) {
      getTreeNodesStates();
    }
    if (checkable && (this.checkedKeysChange || loadData || this.dataChange)) {
      if (checkStrictly) {
        getTreeNodesStates();
      } else if (props._treeNodesStates) {
        this.treeNodesStates = props._treeNodesStates.treeNodesStates;
        this.halfCheckedKeys = props._treeNodesStates.halfCheckedKeys;
        this.checkedKeys = props._treeNodesStates.checkedKeys;
      } else {
        var checkedKeys = this.state.checkedKeys;
        var checkKeys = void 0;
        if (!loadData && this.checkKeys && this._checkedKeys && (0, _util.arraysEqual)(this._checkedKeys, checkedKeys) && !this.dataChange) {
          // if checkedKeys the same as _checkedKeys from onCheck, use _checkedKeys.
          checkKeys = this.checkKeys;
        } else {
          var checkedPositions = [];
          this.treeNodesStates = {};
          (0, _util.loopAllChildren)(treeChildren, function (item, index, pos, keyOrPos, siblingPosition) {
            _this6.treeNodesStates[pos] = {
              node: item,
              key: keyOrPos,
              checked: false,
              halfChecked: false,
              siblingPosition: siblingPosition
            };
            if (checkedKeys.indexOf(keyOrPos) !== -1) {
              _this6.treeNodesStates[pos].checked = true;
              checkedPositions.push(pos);
            }
          });
          // if the parent node's key exists, it all children node will be checked
          (0, _util.handleCheckState)(this.treeNodesStates, (0, _util.filterParentPosition)(checkedPositions), true);
          checkKeys = (0, _util.getCheck)(this.treeNodesStates);
        }
        this.halfCheckedKeys = checkKeys.halfCheckedKeys;
        this.checkedKeys = checkKeys.checkedKeys;
      }
    }
    this.selectKeyDomExist = false;
    return lazyLoad ? _react2["default"].createElement(
      _infiniteScroll2["default"],
      {
        className: 'u-tree-infinite-scroll',
        treeList: flatTreeData,
        handleTreeListChange: this.handleTreeListChange,
        getScrollParent: getScrollContainer
      },
      _react2["default"].createElement(
        'ul',
        _extends({}, domProps, { unselectable: 'true', ref: function ref(el) {
            _this6.tree = el;
          }, tabIndex: focusable && tabIndexValue }),
        _react2["default"].createElement('li', { style: { height: preHeight }, className: 'u-treenode-start', key: 'tree_node_start' }),
        _react2["default"].Children.map(treeChildren, this.renderTreeNode, this),
        _react2["default"].createElement('li', { style: { height: sufHeight }, className: 'u-treenode-end', key: 'tree_node_end' })
      )
    ) : _react2["default"].createElement(
      'ul',
      _extends({}, domProps, { unselectable: 'true', ref: function ref(el) {
          _this6.tree = el;
        }, tabIndex: focusable && tabIndexValue }),
      _react2["default"].Children.map(treeChildren, this.renderTreeNode, this)
    );
  };

  return Tree;
}(_react2["default"].Component);

var _initialiseProps = function _initialiseProps() {
  var _this7 = this;

  this.handleTreeListChange = function (treeList, startIndex, endIndex) {
    // 属性配置设置
    var attr = {
      id: 'key',
      parendId: 'parentKey',
      name: 'title',
      rootId: null,
      isLeaf: 'isLeaf'
    };
    var treeData = (0, _util.convertListToTree)(treeList, attr, _this7.flatTreeKeysMap);

    _this7.startIndex = typeof startIndex !== "undefined" ? startIndex : _this7.startIndex;
    _this7.endIndex = typeof endIndex !== "undefined" ? endIndex : _this7.endIndex;
    _this7.setState({
      treeData: treeData
    });
  };

  this.deepTraversal = function (treeData) {
    var parentKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isShown = arguments[2];
    var expandedKeys = _this7.state.expandedKeys,
        flatTreeData = [],
        flatTreeKeysMap = _this7.flatTreeKeysMap,
        dataCopy = treeData;

    if (Array.isArray(dataCopy)) {
      for (var i = 0, l = dataCopy.length; i < l; i++) {
        var _dataCopy$i = dataCopy[i],
            key = _dataCopy$i.key,
            title = _dataCopy$i.title,
            children = _dataCopy$i.children,
            props = _objectWithoutProperties(_dataCopy$i, ['key', 'title', 'children']);

        var dataCopyI = new Object();
        var isLeaf = children ? false : true,
            isExpanded = _this7.cacheExpandedKeys ? _this7.cacheExpandedKeys.indexOf(key) !== -1 : expandedKeys.indexOf(key) !== -1;
        dataCopyI = _extends(dataCopyI, {
          key: key,
          title: title,
          isExpanded: isExpanded,
          parentKey: parentKey || null,
          isShown: isShown,
          isLeaf: isLeaf
        }, _extends({}, props));
        //该节点的父节点是展开状态 或 该节点是根节点
        if (isShown || parentKey === null) {
          flatTreeData.push(dataCopyI); // 取每项数据放入一个新数组
          flatTreeKeysMap[key] = dataCopyI;
        }
        if (Array.isArray(children) && children.length > 0) {
          // 若存在children则递归调用，把数据拼接到新数组中，并且删除该children
          flatTreeData = flatTreeData.concat(_this7.deepTraversal(children, key, isExpanded));
        }
      }
    }
    return flatTreeData;
  };

  this.renderTreefromData = function (data) {
    var _props4 = _this7.props,
        renderTitle = _props4.renderTitle,
        renderTreeNodes = _props4.renderTreeNodes;

    if (renderTreeNodes) {
      return renderTreeNodes(data);
    }
    var loop = function loop(data) {
      return data.map(function (item) {
        if (item.children) {
          return _react2["default"].createElement(
            _TreeNode2["default"],
            { key: item.key, title: renderTitle ? renderTitle(item) : item.key, isLeaf: item.isLeaf },
            loop(item.children)
          );
        }
        return _react2["default"].createElement(_TreeNode2["default"], { key: item.key, title: renderTitle ? renderTitle(item) : item.key, isLeaf: true });
      });
    };
    return loop(data);
  };

  this.getSumHeight = function (start, end) {
    var sumHeight = 0;
    if (start > end) {
      return sumHeight;
    }
    var span = Math.abs(end - start);
    if (span) {
      sumHeight = span * _config2["default"].defaultHeight;
    }
    return sumHeight;
  };
};

Tree.propTypes = {
  prefixCls: _propTypes2["default"].string,
  children: _propTypes2["default"].any,
  showLine: _propTypes2["default"].bool,
  showIcon: _propTypes2["default"].bool,
  selectable: _propTypes2["default"].bool,
  multiple: _propTypes2["default"].bool,
  checkable: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].node]),
  _treeNodesStates: _propTypes2["default"].object,
  checkStrictly: _propTypes2["default"].bool,
  draggable: _propTypes2["default"].bool,
  autoExpandParent: _propTypes2["default"].bool,
  defaultExpandAll: _propTypes2["default"].bool,
  defaultExpandedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
  expandedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
  defaultCheckedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
  checkedKeys: _propTypes2["default"].oneOfType([_propTypes2["default"].arrayOf(_propTypes2["default"].string), _propTypes2["default"].object]),
  defaultSelectedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
  selectedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
  onExpand: _propTypes2["default"].func,
  onCheck: _propTypes2["default"].func,
  onSelect: _propTypes2["default"].func,
  loadData: _propTypes2["default"].func,
  onMouseEnter: _propTypes2["default"].func,
  onMouseLeave: _propTypes2["default"].func,
  onRightClick: _propTypes2["default"].func,
  onDragStart: _propTypes2["default"].func,
  onDragEnter: _propTypes2["default"].func,
  onDragOver: _propTypes2["default"].func,
  onDragLeave: _propTypes2["default"].func,
  onDrop: _propTypes2["default"].func,
  onDragEnd: _propTypes2["default"].func,
  filterTreeNode: _propTypes2["default"].func,
  openTransitionName: _propTypes2["default"].string,
  focusable: _propTypes2["default"].bool,
  openAnimation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
  lazyLoad: _propTypes2["default"].bool,
  treeData: _propTypes2["default"].array,
  renderTreeNodes: _propTypes2["default"].func,
  autoSelectWhenFocus: _propTypes2["default"].bool,
  getScrollContainer: _propTypes2["default"].func,
  expandWhenDoubleClick: _propTypes2["default"].bool
};

Tree.defaultProps = {
  prefixCls: 'rc-tree',
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  checkStrictly: false,
  draggable: false,
  autoExpandParent: true,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  onExpand: noop,
  onCheck: noop,
  onSelect: noop,
  onDragStart: noop,
  onDragEnter: noop,
  onDragOver: noop,
  onDragLeave: noop,
  onDrop: noop,
  onDragEnd: noop,
  tabIndexValue: 0,
  lazyLoad: false,
  autoSelectWhenFocus: false,
  getScrollContainer: noop,
  expandWhenDoubleClick: false
};

exports["default"] = Tree;
module.exports = exports['default'];