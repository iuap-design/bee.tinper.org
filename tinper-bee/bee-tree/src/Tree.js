/* eslint no-console:0 */
import React from 'react';
import TreeNode  from './TreeNode';
import InfiniteScroll from './infiniteScroll';
import classNames from 'classnames';
import {
  loopAllChildren,
  isInclude,
  getOffset,
  filterParentPosition,
  handleCheckState,
  getCheck,
  getStrictlyValue,
  arraysEqual,
  closest,
  convertListToTree,
} from './util';
import PropTypes from 'prop-types';
import { KeyCode } from 'tinper-bee-core';
import CONFIG from './config';
import createStore from './createStore';
import omit from 'omit.js';

function noop() {}

class Tree extends React.Component {
  constructor(props) {
    super(props);
    ['onKeyDown', 'onCheck',"onUlFocus","_focusDom","onUlMouseEnter","onUlMouseLeave"].forEach((m) => {
      this[m] = this[m].bind(this);
    });
    this.contextmenuKeys = [];
    this.checkedKeysChange = true;
    this.selectKeyDomPos = '0-0';
    this.state = {
      expandedKeys: this.getDefaultExpandedKeys(props),
      checkedKeys: this.getDefaultCheckedKeys(props),
      selectedKeys: this.getDefaultSelectedKeys(props),
      dragNodesKeys: '',
      dragOverNodeKey: '',
      dropNodeKey: '',
      focusKey: '', //上下箭头选择树节点时，用于标识focus状态
      treeData: [], //Tree结构数组(全量)
      flatTreeData: [], //一维数组(全量)
      prevProps: null
    };
    //默认显示20条，rowsInView根据定高算的。在非固定高下，这个只是一个大概的值。
    this.rowsInView = CONFIG.defaultRowsInView;
    //一次加载多少数据
    this.loadCount = CONFIG.loadBuffer ? this.rowsInView + CONFIG.loadBuffer * 2 : 16;
    this.flatTreeKeysMap = {}; //存储所有 key-value 的映射，方便获取各节点信息
    this.startIndex = 0;
    this.endIndex = this.startIndex + this.loadCount;
    this.cacheTreeNodes = []; //缓存 treenode 节点数组
    this.store = createStore({ rowHeight: 24 }); //rowHeight 树节点的高度，此变量在滚动加载场景很关键
  }

  /**
   * 在 lazyload 情况下，需要获取树节点的真实高度
   */
  componentDidMount() {
    const { lazyLoad } = this.props;
    // 此处为了区分数据是不是异步渲染的，prevProps 作为标识
    if(this.hasTreeNode()){
        this.setState({
            prevProps: this.props
        })
    }
    // ncc制造，树参照包含下级需求，checkStrictly 动态改变后，拿到组件内部属性 this.checkedKeys
    if(this.props._getTreeObj){
      this.props._getTreeObj(this);
    }
    // 启用懒加载，计算树节点真实高度
    if(!lazyLoad) return;
    const treenodes = this.tree.querySelectorAll('.u-tree-treenode-close')[0];
    if(!treenodes) return;
    let rowHeight = treenodes.getBoundingClientRect().height;
    this.store.setState({
      rowHeight: rowHeight
    });
  }
  
  // 判断初始化挂载时，有没有渲染树节点
  hasTreeNode = () => {
    const { children, treeData } = this.props;
    let noTreeNode = children === null || typeof children === 'undefined' || (typeof children === 'object' && children.length === 0) || (typeof treeData === 'object' && treeData.length === 0);
    return !noTreeNode;
  }

  componentWillMount() {
    const { treeData,lazyLoad } = this.props;
    let sliceTreeList = [];
    //启用懒加载，把 Tree 结构拍平，为后续动态截取数据做准备
    if(lazyLoad) {
      let flatTreeData = this.deepTraversal(treeData);
      flatTreeData.forEach((element) => {
        if(sliceTreeList.length >= this.loadCount) return;
        sliceTreeList.push(element);
      });
      this.handleTreeListChange(sliceTreeList);
      this.setState({
        flatTreeData
      })
    } else {
      this.setState({
        treeData
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    const {startIndex,endIndex,props,state} = this;
    const {prevProps} = state;
    const expandedKeys = this.getDefaultExpandedKeys(nextProps, true);
    const checkedKeys = this.getDefaultCheckedKeys(nextProps, true);
    const selectedKeys = this.getDefaultSelectedKeys(nextProps, true);
    const st = {
        prevProps:nextProps
    };
    // 用于记录这次data内容有没有变化
    this.dataChange = false;
    function needSync(name) {
        return (!prevProps && name in nextProps) || (prevProps && prevProps[name] !== nextProps[name]);
    }
    // ================ expandedKeys =================
    if (needSync('expandedKeys') || (prevProps && needSync('autoExpandParent')) || (prevProps && prevProps['expandedKeys'] !== expandedKeys)) {
        st.expandedKeys = expandedKeys;
    } else if ((!prevProps && props.defaultExpandAll) || (!prevProps && props.defaultExpandedKeys)) {
        st.expandedKeys = this.getDefaultExpandedKeys(nextProps);
    } 
    if(st.expandedKeys){
        //缓存 expandedKeys
        this.cacheExpandedKeys = new Set(expandedKeys);
        if(nextProps.lazyLoad) {
            let flatTreeData = this.deepTraversal(nextProps.treeData);
            this.cacheExpandedKeys = null;
            st.flatTreeData = flatTreeData;
            let newTreeList = flatTreeData.slice(startIndex,endIndex);
            this.handleTreeListChange(newTreeList, startIndex, endIndex);
        }
    }

    // ================ checkedKeys =================
    if (checkedKeys) {
      if (nextProps.checkedKeys === this.props.checkedKeys) {
        this.checkedKeysChange = false;
      } else {
        this.checkedKeysChange = true;
      }
      st.checkedKeys = checkedKeys;
    }

    // ================ selectedKeys =================
    if (selectedKeys) {
      st.selectedKeys = selectedKeys;
    }

    // ================ treeData =================
    if(nextProps.hasOwnProperty('treeData') && nextProps.treeData !== this.props.treeData){
      this.dataChange = true;
      //treeData更新时，需要重新处理一次数据
      if(nextProps.lazyLoad) {
        let flatTreeData = this.deepTraversal(nextProps.treeData);
        st.flatTreeData = flatTreeData;
        let newTreeList = flatTreeData.slice(startIndex,endIndex);
        this.handleTreeListChange(newTreeList, startIndex, endIndex);
      } else {
        st.treeData = nextProps.treeData;
      }
    }

    // ================ children =================
    if(nextProps.children !== this.props.children){
      this.dataChange = true;
    }
    this.setState(st);
  }

  onDragStart(e, treeNode) {
    this.dragNode = treeNode;
    this.dragNodesKeys = this.getDragNodes(treeNode);
    const st = {
      dragNodesKeys: this.dragNodesKeys,
    };
    const expandedKeys = this.getExpandedKeys(treeNode, false);
    if (expandedKeys) {
      // Controlled expand, save and then reset
      this.getRawExpandedKeys();
      st.expandedKeys = expandedKeys;
    }
    this.setState(st);
    this.props.onDragStart({
      event: e,
      node: treeNode,
    });
    this._dropTrigger = false;
  }

  onDragEnterGap(e, treeNode) {
    const offsetTop = (0, getOffset)(treeNode.selectHandle).top;
    const offsetHeight = treeNode.selectHandle.offsetHeight;
    const pageY = e.pageY;
    const gapHeight = 2;
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
  }

  onDragEnter(e, treeNode) {
    const enterGap = this.onDragEnterGap(e, treeNode);
    if (this.dragNode.props.eventKey === treeNode.props.eventKey && enterGap === 0) {
      this.setState({
        dragOverNodeKey: '',
      });
      return;
    }
    const st = {
      dragOverNodeKey: treeNode.props.eventKey,
    };
    const expandedKeys = this.getExpandedKeys(treeNode, true);
    if (expandedKeys) {
      this.getRawExpandedKeys();
      st.expandedKeys = expandedKeys;
    }
    this.setState(st);
    this.props.onDragEnter({
      event: e,
      node: treeNode,
      expandedKeys: expandedKeys && [...expandedKeys] || [...this.state.expandedKeys],
    });
  }

  onDragOver(e, treeNode) {
    this.props.onDragOver({
      event: e,
      node: treeNode
    });
  }

  onDragLeave(e, treeNode) {
    this.props.onDragLeave({
      event: e,
      node: treeNode
    });
  }

  onDrop(e, treeNode) {
    const key = treeNode.props.eventKey;
    this.setState({
      dragOverNodeKey: '',
      dropNodeKey: key,
    });
    if (this.dragNodesKeys.indexOf(key) > -1) {
      if (console.warn) {
        console.warn('can not drop to dragNode(include it\'s children node)');
      }
      return false;
    }

    const posArr = treeNode.props.pos.split('-');
    const res = {
      event: e,
      node: treeNode,
      dragNode: this.dragNode,
      dragNodesKeys: [...this.dragNodesKeys],
      dropPosition: this.dropPosition + Number(posArr[posArr.length - 1]),
    };
    if (this.dropPosition !== 0) {
      res.dropToGap = true;
    }
    if ('expandedKeys' in this.props) {
      res.rawExpandedKeys = [...this._rawExpandedKeys] || [...this.state.expandedKeys];
    }
    this.props.onDrop(res);
    this._dropTrigger = true;
  }

  onDragEnd(e, treeNode) {
    this.setState({
      dragOverNodeKey: '',
    });
    this.props.onDragEnd({
      event: e,
      node: treeNode
    });
  }
/**
 *
 *
 * @param {*} treeNode 当前操作的节点
 * @param {*} keyType 键盘事件通用的key类型 left 为收起，right为展开
 * @returns
 * @memberof Tree
 */
onExpand(treeNode,keyType) {
    const { treeData,lazyLoad } = this.props;
    let expanded = !treeNode.props.expanded;
    const controlled = 'expandedKeys' in this.props;
    const expandedKeys = [...this.state.expandedKeys];
    const index = expandedKeys.indexOf(treeNode.props.eventKey);

    if(keyType == 'left'){
      expanded = false;
    }else if(keyType == 'right'){
      expanded = true;
    }
  
    if (expanded && index === -1) {
      expandedKeys.push(treeNode.props.eventKey);
    } else if (!expanded && index > -1) {
      expandedKeys.splice(index, 1);
    }
    if (!controlled) {
      this.setState({
        expandedKeys
      });
    }
    this.props.onExpand(expandedKeys, {
      node: treeNode,
      expanded
    });

    // after data loaded, need set new expandedKeys
    if (expanded && this.props.loadData) {
      return this.props.loadData(treeNode).then(() => {
        if (!controlled) {
          this.setState({
            expandedKeys
          });
        }
      });
    }
    //收起和展开时，缓存 expandedKeys
    this.cacheExpandedKeys = new Set(expandedKeys);
    //启用懒加载，把 Tree 结构拍平，为后续动态截取数据做准备
    if(lazyLoad) {
      let flatTreeData = this.deepTraversal(treeData);
      this.cacheExpandedKeys = null;
      this.setState({
        flatTreeData
      })
    }
  }

  onCheck(treeNode) {
    let checked = !treeNode.props.checked;
    if (treeNode.props.halfChecked) {
      checked = true;
    }
    const key = treeNode.props.eventKey;
    let checkedKeys = [...this.state.checkedKeys];
    const index = checkedKeys.indexOf(key);

    const newSt = {
      event: 'check',
      node: treeNode,
      checked,
    };


    if (this.props.checkStrictly) {
      let rsCheckedKeys = [];
      if (checked && index === -1) {
        checkedKeys.push(key);
      }
      if (!checked && index > -1) {
        checkedKeys.splice(index, 1);
      }
      this.treeNodesStates[treeNode.props.pos].checked = checked;
      newSt.checkedNodes = [];
      loopAllChildren(this.props.children, (item, ind, pos, keyOrPos) => {
        if (checkedKeys.indexOf(keyOrPos) !== -1) {
          newSt.checkedNodes.push(item);
          rsCheckedKeys.push(keyOrPos);
        }
      });
      if (!('checkedKeys' in this.props)) {
        this.setState({
          checkedKeys:rsCheckedKeys
        });
      }
      const halfChecked = this.props.checkedKeys ? this.props.checkedKeys.halfChecked : [];
      this.props.onCheck(getStrictlyValue(rsCheckedKeys, halfChecked), newSt);
    } else {
      if (checked && index === -1) {
        this.treeNodesStates[treeNode.props.pos].checked = true;
        const checkedPositions = [];
        Object.keys(this.treeNodesStates).forEach(i => {
          if (this.treeNodesStates[i].checked) {
            checkedPositions.push(i);
          }
        });
        handleCheckState(this.treeNodesStates, filterParentPosition(checkedPositions), true);
      }
      if (!checked) {
        this.treeNodesStates[treeNode.props.pos].checked = false;
        this.treeNodesStates[treeNode.props.pos].halfChecked = false;
        handleCheckState(this.treeNodesStates, [treeNode.props.pos], false);
      }
      const checkKeys = getCheck(this.treeNodesStates);
      newSt.checkedNodes = checkKeys.checkedNodes;
      newSt.checkedNodesPositions = checkKeys.checkedNodesPositions;
      newSt.halfCheckedKeys = checkKeys.halfCheckedKeys;
      this.checkKeys = checkKeys;

      this._checkedKeys = checkedKeys = checkKeys.checkedKeys;
      if (!('checkedKeys' in this.props)) {
        this.setState({
          checkedKeys,
        });
      }
      this.props.onCheck(checkedKeys, newSt);
    }
  }

  onSelect(treeNode) {
    const props = this.props;
    const selectedKeys = [...this.state.selectedKeys];
    const eventKey = treeNode.props.eventKey || treeNode.key;
    const index = selectedKeys.indexOf(eventKey);
    let selected;
    //cancelUnSelect为true时第二次点击时不取消选中
    if(props.cancelUnSelect){
      if (index == -1) {
        selected = true;
        if (!props.multiple) {
          selectedKeys.length = 0;
        }
        selectedKeys.push(eventKey);
      }
    }else{
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
    
    const selectedNodes = [];
    if (selectedKeys.length) {
      loopAllChildren(this.props.children, (item) => {
        if (selectedKeys.indexOf(item.key) !== -1) {
          selectedNodes.push(item);
        }
      });
    }
    const newSt = {
      event: 'select',
      node: treeNode,
      selected,
      selectedNodes,
    };
    if (!('selectedKeys' in this.props)) {
      this.setState({
        selectedKeys,
      });
    }
    props.onSelect(selectedKeys, newSt);
  }


  onDoubleClick(treeNode){
     const props = this.props;
     const eventKey = treeNode.props.eventKey;
     const newSt = {
      event: 'dblclick',
      node: treeNode
    };
    if(props.expandWhenDoubleClick) {
      this.onExpand(treeNode);
    }
    props.onDoubleClick(eventKey,newSt);
  }

  onMouseEnter(e, treeNode) {
    this.props.onMouseEnter({
      event: e,
      node: treeNode
    });
  }

  onMouseLeave(e, treeNode) {
    this.props.onMouseLeave({
      event: e,
      node: treeNode
    });
  }



  onContextMenu(e, treeNode) {
    const selectedKeys = [...this.state.selectedKeys];
    const eventKey = treeNode.props.eventKey;
    if (this.contextmenuKeys.indexOf(eventKey) === -1) {
      this.contextmenuKeys.push(eventKey);
    }
    this.contextmenuKeys.forEach((key) => {
      const index = selectedKeys.indexOf(key);
      if (index !== -1) {
        selectedKeys.splice(index, 1);
      }
    });
    if (selectedKeys.indexOf(eventKey) === -1) {
      selectedKeys.push(eventKey);
    }
    this.setState({
      selectedKeys,
    });
    this.props.onRightClick({
      event: e,
      node: treeNode
    });
  }

  getTreeNode(){
    const props = this.props;
 
  }

  goDown(currentPos,currentIndex,e,treeNode){
    const props = this.props;
    const state = this.state;
    let treeChildren = props.children ? props.children : this.cacheTreeNodes; //最终渲染在 Tree 标签中的子节点
    const nextIndex =  parseInt(currentIndex) + 1;
      
    let nextPos,backNextPos;
    let nextTreeNode,backNextTreeNode;
    const backNextPosArr=[],backNextTreeNodeArr = [],tempBackNextPosArr=[];
    //是否为展开的节点，如果展开获取第一个子节点的信息，如果没有取相邻节点，若也没有相邻节点则获取父节点的下一个节点
    if(state.expandedKeys.indexOf(treeNode.props.eventKey)>-1){
      nextPos = currentPos + '-0';
    }else{
      nextPos = currentPos.substr(0,currentPos.lastIndexOf('-')+1)+nextIndex;
     
      
    }
    //若向下的节点没有了，找到父级相邻节点
    let tempPosArr = currentPos.split('-');
    let tempPosArrLength = tempPosArr.length;
    //将可能是下一个节点的的位置都备份一遍
    while(tempPosArrLength>1){
      backNextPos = tempPosArrLength>1 && tempPosArr.slice(0,tempPosArrLength-1).join('-')+'-' + (parseInt(tempPosArr[tempPosArrLength-1])+1)
      tempBackNextPosArr.push(backNextPos);
      tempPosArr = tempPosArr.slice(0,tempPosArrLength-1)
      tempPosArrLength = tempPosArr.length;
    }
    //选中下一个相邻的节点
    loopAllChildren(treeChildren,function(itemNode,index,pos,newKey){
      if(pos == nextPos){
        nextTreeNode = itemNode;
      }
      tempBackNextPosArr.forEach(item=>{
        if(item && item == pos){
          // backNextTreeNode = item;
          backNextTreeNodeArr.push(itemNode);
          backNextPosArr.push(pos);
        }
      })
      
    })
    //如果没有下一个节点，则获取父节点的下一个节点
    if(!nextTreeNode){
     for(let i=0;i<backNextTreeNodeArr.length;i++){
       if(backNextTreeNodeArr[i]){
        nextTreeNode = backNextTreeNodeArr[i];
        nextPos = backNextPosArr[i];
        break;
       }
     }

   
    }
   
    //查询的下一个节点不为空的话，则选中
    if(nextTreeNode){
      const queryInfo = `a[pos="${nextPos}"]`;
      const parentEle = closest(e.target,".u-tree")
      const focusEle = parentEle?parentEle.querySelector(queryInfo):null;
      focusEle && focusEle.focus()
      const eventKey = nextTreeNode.props.eventKey || nextTreeNode.key;
      this.setState({
        focusKey: eventKey
      })
      if(props.autoSelectWhenFocus){
        this.onSelect(nextTreeNode);
      }
    }
  }

  goUp(currentPos,currentIndex,e,treeNode){
    const props = this.props;
    const state = this.state;
    if(currentIndex == 0 && currentPos.length === 3){
      return
    }
    // 向上键Up
    const preIndex =  parseInt(currentIndex) - 1;
    let prePos;
    if(preIndex>= 0){
      prePos = currentPos.substr(0,currentPos.lastIndexOf('-')+1)+preIndex;
    }else{
      prePos = currentPos.substr(0,currentPos.lastIndexOf('-'));
    }
    
    let prevTreeNode,preElement;
    //选中上一个相邻的节点
    loopAllChildren(props.children,function(item,index,pos,newKey){
      if(pos == prePos){
        prevTreeNode = item;
      }
    })
    //查询的上一个节点不为空的话，则选中
    if(prevTreeNode){
      if(preIndex >=0){
        //如果上面的节点展开则默认选择最后一个子节点
        if(state.expandedKeys.indexOf(prevTreeNode.key)>-1){
          const preElementArr =  e.target.parentElement.previousElementSibling.querySelectorAll('a');
          preElement = preElementArr[preElementArr.length-1];
          prePos = preElement.getAttribute('pos');
          loopAllChildren(props.children,function(item,index,pos,newKey){
            if(pos == prePos){
              prevTreeNode = item;
            }
          })
        }else{
          //上一个节点没有展开
          preElement =  e.target.parentElement.previousElementSibling.querySelector('a')
        }
      }else{
        // 不存在上一个节点时，选中它的父节点
        preElement =  e.target.parentElement.parentElement.parentElement.querySelector('a')
      }
      
      
    }
    preElement && preElement.focus();
    const eventKey = prevTreeNode.props.eventKey || prevTreeNode.key;
    this.setState({
      focusKey: eventKey
    })
    if(props.autoSelectWhenFocus){
      this.onSelect(prevTreeNode);
    }
  }
  // all keyboard events callbacks run from here at first
  onKeyDown(e,treeNode) {
    // e.stopPropagation();
   
    const props = this.props;
    const currentPos = treeNode.props.pos;
    const currentIndex = currentPos.substr(currentPos.lastIndexOf('-')+1);
    //向下键down
    if(e.keyCode == KeyCode.DOWN){
      this.goDown(currentPos,currentIndex,e,treeNode);
    }else if(e.keyCode == KeyCode.UP){
      this.goUp(currentPos,currentIndex,e,treeNode);
    }else if(e.keyCode == KeyCode.LEFT && !treeNode.props.isLeaf){
      // 收起树节点
      this.onExpand(treeNode,'left');
    }else if (e.keyCode == KeyCode.RIGHT && !treeNode.props.isLeaf){
      // 展开树节点
      this.onExpand(treeNode,'right');
    }else if (e.keyCode == KeyCode.SPACE){
      this.onSelect(treeNode);
      // 如果是多选tree则进行选中或者反选该节点
      props.checkable && this.onCheck(treeNode);
    }else if(e.keyCode == KeyCode.ENTER){
      if(props.onDoubleClick) {
        this.onDoubleClick(treeNode);
      } else {
        this.onSelect(treeNode);
        props.checkable && this.onCheck(treeNode);
      }
    }
     this.props.keyFun && this.props.keyFun(e,treeNode);
    // e.preventDefault();
    
  }

  _focusDom(selectKeyDomPos,targetDom){
    const queryInfo = `a[pos="${selectKeyDomPos}"]`;
    const parentEle = closest(targetDom,".u-tree")
    const focusEle = parentEle?parentEle.querySelector(queryInfo):null;
    if(document.activeElement !== focusEle){
      focusEle && focusEle.focus();
    }
  }

  /**
   * 此方法为了解决树快捷键，当有的元素隐藏，按tab键也要显示的问题
   * @param {*} e 
   */
  onUlFocus(e){ 
    const targetDom = e.target;
 
    // 如果当前tree节点不包括上一个焦点节点会触发此方法
    if(this.tree == targetDom && !this.isIn && !this.tree.contains(e.relatedTarget)){
      const {onFocus, children} = this.props;
      const {selectedKeys=[]} = this.state;
      let tabIndexKey = selectedKeys[0]
      let isExist = false;
      const treeNode = children.length && children[0];
      let eventKey = treeNode.props.eventKey || treeNode.key;
      if((this.selectKeyDomExist && tabIndexKey) || !tabIndexKey){
        isExist = true;
        const queryInfo = `a[pos="${this.selectKeyDomPos}"]`;
        const parentEle = closest(e.target,".u-tree")
        const focusEle = parentEle?parentEle.querySelector(queryInfo):null;
        focusEle && focusEle.focus();
        // TAB键选中树后，默认聚焦在第一个（已选中）节点，并显示 focus 状态。
        this.setState({
          focusKey: tabIndexKey || eventKey
        })
      }
      let onFocusRes = onFocus && onFocus(isExist);
        if(onFocusRes instanceof Promise){
          onFocusRes.then(()=>{
            this._focusDom(this.selectKeyDomPos,targetDom);
          });
        }else{
          this._focusDom(this.selectKeyDomPos,targetDom);
        } 
      }
  }


  onUlMouseEnter(e){
    this.isIn = true;
    // console.log('onUlMouseEnter----isIn-----',this.isIn);
  }
  onUlMouseLeave(e){
    this.isIn = false;
    // console.log('onUlMouseLeave----isIn-----',this.isIn);

  }
  
  getFilterExpandedKeys(props, expandKeyProp, expandAll) {
    const keys = props[expandKeyProp];
    if (!expandAll && !props.autoExpandParent) {
      return keys || [];
    }
    const expandedPositionArr = [];
    if (props.autoExpandParent) {
      loopAllChildren(props.children, (item, index, pos, newKey) => {
        if (keys.indexOf(newKey) > -1) {
          expandedPositionArr.push(pos);
        }
      });
    }
    const filterExpandedKeys = [];
    loopAllChildren(props.children, (item, index, pos, newKey) => {
      if (expandAll) {
        filterExpandedKeys.push(newKey);
      } else if (props.autoExpandParent) {
        expandedPositionArr.forEach(p => {
          if ((p.split('-').length > pos.split('-').length && isInclude(pos.split('-'), p.split('-')) || pos === p) && filterExpandedKeys.indexOf(newKey) === -1) {
            filterExpandedKeys.push(newKey);
          }
        });
      }
    });
    return filterExpandedKeys.length ? filterExpandedKeys : keys;
  }

  getDefaultExpandedKeys(props, willReceiveProps) {
    let expandedKeys = willReceiveProps ? undefined :
      this.getFilterExpandedKeys(props, 'defaultExpandedKeys',
        props.defaultExpandedKeys.length ? false : props.defaultExpandAll);
    if ('expandedKeys' in props) {
      expandedKeys = (props.autoExpandParent ?
        this.getFilterExpandedKeys(props, 'expandedKeys', false) :
        props.expandedKeys) || [];
    }
    return expandedKeys;
  }

  getDefaultCheckedKeys(props, willReceiveProps) {
    let checkedKeys = willReceiveProps ? undefined : props.defaultCheckedKeys;
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
  }

  getDefaultSelectedKeys(props, willReceiveProps) {
    const getKeys = (keys) => {
      if (props.multiple) {
        return [...keys];
      }
      if (keys.length) {
        return [keys[0]];
      }
      return keys;
    };
    let selectedKeys = willReceiveProps ? undefined : getKeys(props.defaultSelectedKeys);
    if ('selectedKeys' in props) {
      selectedKeys = getKeys(props.selectedKeys);
    }
    return selectedKeys;
  }

  getRawExpandedKeys() {
    if (!this._rawExpandedKeys && ('expandedKeys' in this.props)) {
      this._rawExpandedKeys = [...this.state.expandedKeys];
    }
  }

  getOpenTransitionName() {
    const props = this.props;
    let transitionName = props.openTransitionName;
    const animationName = props.openAnimation;
    if (!transitionName && typeof animationName === 'string') {
      transitionName = `${props.prefixCls}-open-${animationName}`;
    }
    return transitionName;
  }

  getDragNodes(treeNode) {
    const dragNodesKeys = [];
    const tPArr = treeNode.props.pos.split('-');
    loopAllChildren(this.props.children, (item, index, pos, newKey) => {
      const pArr = pos.split('-');
      if (treeNode.props.pos === pos || tPArr.length < pArr.length && isInclude(tPArr, pArr)) {
        dragNodesKeys.push(newKey);
      }
    });
    return dragNodesKeys;
  }

  getExpandedKeys(treeNode, expand) {
    const key = treeNode.props.eventKey;
    const expandedKeys = this.state.expandedKeys;
    const expandedIndex = expandedKeys.indexOf(key);
    let exKeys;
    if (expandedIndex > -1 && !expand) {
      exKeys = [...expandedKeys];
      exKeys.splice(expandedIndex, 1);
      return exKeys;
    }
    if (expand && expandedKeys.indexOf(key) === -1) {
      return expandedKeys.concat([key]);
    }
  }

  filterTreeNode(treeNode) {
    const filterTreeNode = this.props.filterTreeNode;
    if (typeof filterTreeNode !== 'function' || treeNode.props.disabled) {
      return false;
    }
    return filterTreeNode.call(this, treeNode);
  }

  /**
   * 将截取后的 List 数组转换为 Tree 结构，并更新 state
   */
  handleTreeListChange = (treeList, startIndex, endIndex) => {
    // 属性配置设置
    let attr = {
      id: 'key',
      parendId: 'parentKey',
      name: 'title',
      rootId: null,
      isLeaf: 'isLeaf'
    };
    let treeData = convertListToTree(treeList, attr, this.flatTreeKeysMap);

    this.startIndex = typeof(startIndex) !== "undefined" ? startIndex : this.startIndex;
    this.endIndex = typeof(endIndex) !== "undefined" ? endIndex : this.endIndex;
    this.setState({
      treeData : treeData
    })
  }
  
  /**
   * 深度遍历 treeData，把Tree数据拍平，变为一维数组
   * @param {*} treeData 
   * @param {*} parentKey 标识父节点
   * @param {*} isShown 该节点是否显示在页面中，当节点的父节点是展开状态 或 该节点是根节点时，该值为 true
   */
  deepTraversal = (treeData, parentKey=null, isShown) => {
    let {expandedKeys} = this.state,
        expandedKeysSet = this.cacheExpandedKeys ? this.cacheExpandedKeys : new Set(expandedKeys),
        flatTreeData = [],
        flatTreeKeysMap = this.flatTreeKeysMap, //存储所有 key-value 的映射，方便获取各节点信息
        dataCopy = treeData;
    if(Array.isArray(dataCopy)){
      for (let i=0, l=dataCopy.length; i<l; i++) {
        let { key, title, children, ...props } = dataCopy[i],
            dataCopyI = new Object(),
            isLeaf = children ? false : true;
        //如果父节点是收起状态，则子节点的展开状态无意义。（一级节点或根节点直接判断自身状态即可）
        let isExpanded = (parentKey === null || expandedKeysSet.has(parentKey)) ? expandedKeysSet.has(key) : false;
        dataCopyI = Object.assign(dataCopyI,{
          key,
          title,
          isExpanded,
          parentKey : parentKey || null,
          isShown,
          isLeaf
        },{...props});
        //该节点的父节点是展开状态 或 该节点是根节点
        if(isShown || parentKey === null){
          flatTreeData.push(dataCopyI); // 取每项数据放入一个新数组
          flatTreeKeysMap[key] = dataCopyI;
        }
        if (Array.isArray(children) && children.length > 0){
          // 若存在children则递归调用，把数据拼接到新数组中，并且删除该children
          flatTreeData = flatTreeData.concat(this.deepTraversal(children, key, isExpanded));
        }
      }
    }
    return flatTreeData;
  }

  /**
   * 根据 treeData 渲染树节点
   * @param data 树形结构的数组
   * @param preHeight 前置占位高度
   * @param sufHeight 后置占位高度
   */
  renderTreefromData = (data) => {
    let {renderTitle,renderTreeNodes} = this.props;
    if(renderTreeNodes) {
      return renderTreeNodes(data);
    }
    const loop = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeNode key={item.key} title={renderTitle ? renderTitle(item) : item.key} isLeaf={item.isLeaf}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={renderTitle ? renderTitle(item) : item.key} isLeaf={true}/>;
    });
    return loop(data);
  }

  /**
   * @description 计算懒加载时的前置占位和后置占位
   * @param start {Number} 开始截取数据的位置
   * @param end {Number} 结束截取数据的位置
   * @return sumHeight {Number} 空白占位的高度
   */
  getSumHeight = (start, end) => {
    let sumHeight = 0;
    if(start > end) {
      return sumHeight;
    }
    let span = Math.abs(end - start);
    if(span) {
      sumHeight = span * this.store.getState().rowHeight;
    }
    return sumHeight;
  }

  renderTreeNode(child, index, level = 0) {
    const pos = `${level}-${index}`;
    const key = child.key || pos;
    
    const state = this.state;
    const props = this.props;
    const {selectedKeys=[]} = this.state;
    let tabIndexKey = selectedKeys[0]
    if(tabIndexKey && key == tabIndexKey){
       this.selectKeyDomExist = true;
       this.selectKeyDomPos = pos;
    }
    // prefer to child's own selectable property if passed
    let selectable = props.selectable;
    if (child.props.hasOwnProperty('selectable')) {
      selectable = child.props.selectable;
    }
    let draggable = props.draggable;
    if(child.props.hasOwnProperty('draggable')){
      draggable = child.props.draggable;
    }
    let isLeaf = null;
    if(child.props.hasOwnProperty('isLeaf')){
      isLeaf = child.props.isLeaf;
    }
  
    const cloneProps = {
      root: this,
      eventKey: key,
      pos,
      selectable,
      loadData: props.loadData,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onRightClick: props.onRightClick,
      onDoubleClick:props.onDoubleClick,
      onKeyDown:props.onKeyDown,
      prefixCls: props.prefixCls,
      showLine: props.showLine,
      showIcon: props.showIcon,
      draggable,
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
      focusable:props.focusable,
      tabIndexKey: state.selectedKeys[0],
      tabIndexValue:props.tabIndexValue,
      ext:child.props.ext,
      mustExpandable:props.mustExpandable,
      isLeaf
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
      Object.assign(cloneProps, this.treeNodesStates[pos].siblingPosition);
    }
    return React.cloneElement(child, cloneProps);
  }

  render() {
    const props = this.props;
    const { 
      showLine, prefixCls, className, focusable, checkable, loadData, checkStrictly, tabIndexValue, lazyLoad, getScrollContainer, 
      defaultExpandedKeys, defaultSelectedKeys, defaultCheckedKeys, openAnimation, draggable,
      ...others 
    } = this.props;
    const customProps = {...omit(others, [
      'showIcon',
      'cancelUnSelect',
      'onCheck',
      'selectable',
      'autoExpandParent',
      'defaultExpandAll',
      'onExpand',
      'autoSelectWhenFocus',
      'expandWhenDoubleClick',
      'expandedKeys',
      'keyFun',
      'openIcon',
      'closeIcon',
      'treeData',
      'checkedKeys',
      'selectedKeys',
      'renderTreeNodes',
      'mustExpandable',
      'onMouseEnter',
      'onMouseLeave',
      'onDoubleClick'
    ])}
    const { treeData,flatTreeData } = this.state;
    let { startIndex, endIndex } = this, //数据截取的开始位置和结束位置
        preHeight = 0, //前置占位高度
        sufHeight = 0, //后置占位高度
        treeNode = [], //根据传入的 treeData 生成的 treeNode 节点数组
        treeChildren = props.children; //最终渲染在 Tree 标签中的子节点
    if(lazyLoad){
      preHeight = this.getSumHeight(0, startIndex);
      sufHeight = this.getSumHeight(endIndex, flatTreeData.length);
    }
    if(!props.children && treeData) { //传入json数据
      treeNode = this.renderTreefromData(treeData);
      this.cacheTreeNodes = treeNode;
      treeChildren = treeNode;
    }
    let showLineCls = "";
    if (showLine) {
      showLineCls = `${prefixCls}-show-line`;
    }
    const domProps = {
      className: classNames(className, prefixCls, showLineCls),
      role: 'tree-node',
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
    const getTreeNodesStates = () => {
      this.treeNodesStates = {};
      loopAllChildren(treeChildren, (item, index, pos, keyOrPos, siblingPosition) => {
        this.treeNodesStates[pos] = {
          siblingPosition,
        };
      });
    };
    if (showLine && !checkable ) {
      getTreeNodesStates();
    }
    if (checkable && (this.checkedKeysChange || loadData ||  this.dataChange)) {
      if (checkStrictly) {
        getTreeNodesStates();
      } else if (props._treeNodesStates) {
        this.treeNodesStates = props._treeNodesStates.treeNodesStates;
        this.halfCheckedKeys = props._treeNodesStates.halfCheckedKeys;
        this.checkedKeys = props._treeNodesStates.checkedKeys;
      } else {
        const checkedKeys = this.state.checkedKeys;
        let checkKeys;
        if (!loadData && this.checkKeys && this._checkedKeys &&
          arraysEqual(this._checkedKeys, checkedKeys) && !this.dataChange) {
          // if checkedKeys the same as _checkedKeys from onCheck, use _checkedKeys.
          checkKeys = this.checkKeys;
        } else {
          const checkedPositions = [];
          this.treeNodesStates = {};
          loopAllChildren(treeChildren, (item, index, pos, keyOrPos, siblingPosition) => {
            this.treeNodesStates[pos] = {
              node: item,
              key: keyOrPos,
              checked: false,
              halfChecked: false,
              siblingPosition,
            };
            if (checkedKeys.indexOf(keyOrPos) !== -1) {
              this.treeNodesStates[pos].checked = true;
              checkedPositions.push(pos);
            }
          });
          // if the parent node's key exists, it all children node will be checked
          handleCheckState(this.treeNodesStates, filterParentPosition(checkedPositions), true);
          checkKeys = getCheck(this.treeNodesStates);
        }
        this.halfCheckedKeys = checkKeys.halfCheckedKeys;
        this.checkedKeys = checkKeys.checkedKeys;
      }
    }
    this.selectKeyDomExist = false;
    return (
      lazyLoad ? 
        <InfiniteScroll
          className="u-tree-infinite-scroll"
          treeList={flatTreeData}
          handleTreeListChange={this.handleTreeListChange}
          getScrollParent={getScrollContainer}
          store={this.store}
        >
          <ul {...domProps} unselectable="true" ref={(el)=>{this.tree = el}}  tabIndex={focusable && tabIndexValue} {...customProps}>
              <li style={{height : preHeight}} className='u-treenode-start' key={'tree_node_start'}></li>
              { React.Children.map(treeChildren, this.renderTreeNode, this) }
              <li style={{height : sufHeight}} className='u-treenode-end' key={'tree_node_end'}></li>
          </ul>
        </InfiniteScroll>
        :
        <ul {...domProps} unselectable="true" ref={(el)=>{this.tree = el}}  tabIndex={focusable && tabIndexValue} {...customProps}>
            { React.Children.map(treeChildren, this.renderTreeNode, this) }
        </ul>
    );
  }
}

Tree.propTypes = {
  prefixCls: PropTypes.string,
  children: PropTypes.any,
  showLine: PropTypes.bool,
  showIcon: PropTypes.bool,
  selectable: PropTypes.bool,
  multiple: PropTypes.bool,
  checkable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
  ]),
  _treeNodesStates: PropTypes.object,
  checkStrictly: PropTypes.bool,
  draggable: PropTypes.bool,
  autoExpandParent: PropTypes.bool,
  defaultExpandAll: PropTypes.bool,
  defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),
  expandedKeys: PropTypes.arrayOf(PropTypes.string),
  defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),
  checkedKeys: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object,
  ]),
  defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  onExpand: PropTypes.func,
  onCheck: PropTypes.func,
  onSelect: PropTypes.func,
  loadData: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onRightClick: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func,
  onDragEnd: PropTypes.func,
  filterTreeNode: PropTypes.func,
  openTransitionName: PropTypes.string,
  focusable: PropTypes.bool,
  openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  lazyLoad: PropTypes.bool,
  treeData: PropTypes.array,
  renderTreeNodes: PropTypes.func,
  autoSelectWhenFocus: PropTypes.bool,
  getScrollContainer: PropTypes.func,
  expandWhenDoubleClick: PropTypes.bool
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
  tabIndexValue:0,
  lazyLoad: false,
  autoSelectWhenFocus: false,
  getScrollContainer: noop,
  expandWhenDoubleClick: false
};

export default Tree;