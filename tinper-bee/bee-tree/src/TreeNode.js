import React from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames';
import Animate from 'bee-animate';
import {
  browser,
  getNodeChildren,
  toArray,
  warnOnlyTreeNode
} from './util';
import PropTypes from 'prop-types';
import { KeyCode } from 'tinper-bee-core';
const browserUa = typeof window !== 'undefined' ? browser(window.navigator) : '';
const ieOrEdge = /.*(IE|Edge).+/.test(browserUa);
// const uaArray = browserUa.split(' ');
// const gtIE8 = uaArray.length !== 2 || uaArray[0].indexOf('IE') === -1 || Number(uaArray[1]) > 8;

const defaultTitle = '---';

class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    [
      'onExpand',
      'onCheck',
      'onContextMenu',
      'onMouseEnter',
      'onMouseLeave',
      'onDragStart',
      'onDragEnter',
      'onDragOver',
      'onDragLeave',
      'onDrop',
      'onDragEnd',
      'onDoubleClick',
      'onKeyDown'
    ].forEach((m) => {
      this[m] = this[m].bind(this);
    });
    this.state = {
      dataLoading: false,
      dragNodeHighlight: false,
    };
  }

  componentDidMount() {
      if (!this.props.root._treeNodeInstances) {
        this.props.root._treeNodeInstances = [];
      }
      this.props.root._treeNodeInstances.push(this);
    }
    // shouldComponentUpdate(nextProps) {
    //   if (!nextProps.expanded) {
    //     return false;
    //   }
    //   return true;
    // }

  onCheck() {

    this.props.root.onCheck(this);
  }

  onSelect() {
    clearTimeout(this.doubleClickFlag);
    let _this = this;
    if(this.props.onDoubleClick){
    //执行延时
      this.doubleClickFlag = setTimeout(function(){
          //do function在此处写单击事件要执行的代码
          _this.props.root.onSelect(_this);
      },300);
    }else{
       _this.props.root.onSelect(_this);
    }
   
    
  }

  
  onDoubleClick() {
    clearTimeout(this.doubleClickFlag);
    this.props.root.onDoubleClick(this);
  }

  onMouseEnter(e) {
    e.preventDefault();
    this.props.root.onMouseEnter(e, this);
  }

  onMouseLeave(e) {
    e.preventDefault();
    this.props.root.onMouseLeave(e, this);
  }

  onContextMenu(e) {
    e.preventDefault();
    this.props.root.onContextMenu(e, this);
  }

  onDragStart(e) {
    // console.log('dragstart', this.props.eventKey, e);
    // e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragNodeHighlight: true,
    });
    this.props.root.onDragStart(e, this);
    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', '');
    } finally {
      // empty
    }
  }

  onDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.root.onDragEnter(e, this);
  }

  onDragOver(e) {
    // todo disabled
    e.preventDefault();
    e.stopPropagation();
    this.props.root.onDragOver(e, this);
    return false;
  }

  onDragLeave(e) {
    e.stopPropagation();
    this.props.root.onDragLeave(e, this);
  }

  onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragNodeHighlight: false,
    });
    this.props.root.onDrop(e, this);
  }

  onDragEnd(e) {
    e.stopPropagation();
    this.setState({
      dragNodeHighlight: false,
    });
    this.props.root.onDragEnd(e, this);
  }

  onExpand() {
    const callbackPromise = this.props.root.onExpand(this);
    if (callbackPromise && typeof callbackPromise === 'object') {
      const setLoading = (dataLoading) => {
        this.setState({
          dataLoading
        });
      };
      setLoading(true);
      callbackPromise.then(() => {
        setLoading(false);
      }, () => {
        setLoading(false);
      });
    }
  }

  // keyboard event support
  onKeyDown(e) {
    this.props.root.onKeyDown(e,this);
    if(e.keyCode == KeyCode.SPACE || e.keyCode == KeyCode.DOWN || e.keyCode == KeyCode.LEFT || e.keyCode == KeyCode.RIGHT ||e.keyCode == KeyCode.UP){
      e.preventDefault();
    }
    
  }

  renderSwitcher(props, expandedState) {
    let stateIcon;
    const prefixCls = props.prefixCls;
    const switcherCls = {
      [`${prefixCls}-switcher`]: true
    };
    if (!props.showLine) {
      switcherCls[`${prefixCls}-noline_${expandedState}`] = true;
    } else if (props.pos === '0-0') {
      switcherCls[`${prefixCls}-roots_${expandedState}`] = true;
    } else {
      switcherCls[`${prefixCls}-center_${expandedState}`] = !props.last;
      switcherCls[`${prefixCls}-bottom_${expandedState}`] = props.last;
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
    props.switcherClass?switcherCls[`${props.switcherClass}`]=true:'';
    if (props.disabled) {
      switcherCls[`${prefixCls}-switcher-disabled`] = true;
      return <span className={classNames(switcherCls)} style={props.switcherStyle}>{stateIcon}</span>;
    }
    return <span className={classNames(switcherCls)} style={props.switcherStyle} onClick={this.onExpand}>{stateIcon}</span>;
  }

  renderCheckbox(props) {
    const prefixCls = props.prefixCls;
    const checkboxCls = {
      [`${prefixCls}-checkbox`]: true,
    };
    if (props.checked) {
      checkboxCls[`${prefixCls}-checkbox-checked`] = true;
    } else if (props.halfChecked) {
      checkboxCls[`${prefixCls}-checkbox-indeterminate`] = true;
    }
    let customEle = null;
    if (typeof props.checkable !== 'boolean') {
      customEle = props.checkable;
    }
    if (props.disabled || props.disableCheckbox) {
      checkboxCls[`${prefixCls}-checkbox-disabled`] = true;
      return <span  className={classNames(checkboxCls)}>{customEle}</span>;
    }
    return (
      <span 
        className={classNames(checkboxCls) }
        onClick={this.onCheck}
      >{customEle}</span>);
  }

  renderChildren(props) {
    const renderFirst = this.renderFirst;
    this.renderFirst = 1;
    let transitionAppear = true;
    if (!renderFirst && props.expanded) {
      transitionAppear = false;
    }
    const children = props.children;
    let newChildren = children;
    // 确定所有子节点是否是TreeNode
    let allTreeNode = false;
    if (Array.isArray(children)) {
      for( let index = 0; index < children.length; index++ ){
        let item = children[index];
        allTreeNode = item.type.isTreeNode == 1;
        if( !allTreeNode ){
          //当检查到子节点中有不是 TreeNode 的，则直接结束检查。同时不会渲染所有子节点
          break;
        }
      }
      
    }else if(children && children.type && children.type.isTreeNode == 1){
      allTreeNode = true;
    }
    //  如果props.children的长度大于0才可以生成子对象
    if (allTreeNode && React.Children.count(children) ){
      const cls = {
        [`${props.prefixCls}-child-tree`]: true,
        [`${props.prefixCls}-child-tree-open`]: props.expanded,
      };
      if (props.showLine) {
        cls[`${props.prefixCls}-line`] = !props.last;
      }
      const animProps = {};
      if (props.openTransitionName) {
        animProps.transitionName = props.openTransitionName;
      } else if (typeof props.openAnimation === 'object') {
        animProps.animation = Object.assign({}, props.openAnimation);
        if (!transitionAppear) {
          delete animProps.animation.appear;
        }
      }
      newChildren = (
        <Animate {...animProps}
          showProp="data-expanded"
          transitionAppear={transitionAppear}
          component=""
        >
          {!props.expanded ? null : <ul className={classNames(cls)} data-expanded={props.expanded}>
            {React.Children.map(children, (item, index) => {
              return props.root.renderTreeNode(item, index, props.pos);
            }, props.root)}
          </ul>}
        </Animate>
      );
    }
    return newChildren;
  }

  getNodeChildren = () => {
    const { children } = this.props;
    const originList = toArray(children).filter(node => node);
    const targetList = getNodeChildren(originList);

    if (originList.length !== targetList.length) {
      warnOnlyTreeNode();
    }

    return targetList;
  };
  /**
   *判断是否为叶子节点，isLeaf的优先级>props.children。如果是异步加载是根据isLeaf的值进行判断的
   *
   * @returns
   * @memberof TreeNode
   */
  checkIsLeaf(){
    const { isLeaf, loadData } = this.props;  
    let rs = isLeaf
    if (rs === false || rs === true) {
      return rs;
    }else{
      const hasChildren = this.getNodeChildren().length !== 0;
      return (!loadData && !hasChildren);
    }

    
  }

  render() {
    const props = this.props;
    const prefixCls = props.prefixCls;
    const expandedState = props.expanded ? 'open' : 'close';
    let iconState = expandedState;

    let canRenderSwitcher = true;
    const content = props.title;
    let newChildren = this.renderChildren(props);
    let openIconCls = false,
      closeIconCls = false;

    //以下变量控制是否鼠标单机双击方法中的变量
    let timer = 0;
    let delay = 500;
    let prevent = false;

    // if (!newChildren || newChildren === props.children) {
    //   // content = newChildren;
    //   newChildren = null;
    //   if (!props.loadData || props.isLeaf) {
    //     canRenderSwitcher = false;
    //     iconState = 'docu';
    //   }
    // }
    if(this.checkIsLeaf()){
      canRenderSwitcher = false;
      iconState = 'docu';
    }
    // For performance, does't render children into dom when `!props.expanded` (move to Animate)
    // if (!props.expanded) {
    //   newChildren = null;
    // }

    const iconEleCls = {
      [`${prefixCls}-iconEle`]: true,
      [`${prefixCls}-icon_loading`]: this.state.dataLoading,
      [`${prefixCls}-icon__${iconState}`]: true
    };
    const selectHandle = () => {
      const titleClass=props.titleClass?prefixCls+'-title'+' '+props.className:prefixCls+'-title';
      // const icon = (props.showIcon || props.loadData && this.state.dataLoading) ?
      //   <span className={classNames(iconEleCls)}></span> : null;
      let icon;
      if(props.showIcon && props.icon){
        icon = <span
                  className={classNames(
                    `${prefixCls}-iconEle`,
                    `${prefixCls}-icon__customize`,
                  )}
                >
                  {typeof currentIcon === 'function' ?
                    React.createElement(props.icon, {
                      ...this.props,
                    }) : props.icon}
                </span>
      }else if(props.showIcon || props.loadData && this.state.dataLoading){
        icon = <span className={classNames(iconEleCls)}></span>
      }
      const title = <span className={titleClass} style={props.titleStyle} >{content}</span>;
      const wrap = `${prefixCls}-node-content-wrapper`;
      const domProps = {
        className: `${wrap} ${wrap}-${iconState === expandedState ? iconState : 'normal'}`,
      };
      if (!props.disabled) {
        if (props.selected || !props._dropTrigger && this.state.dragNodeHighlight) {
          domProps.className += ` ${prefixCls}-node-selected`;
        }
        domProps.onClick = (e) => {
          var _this = this;
          e.preventDefault();
          if (props.selectable) {
            _this.onSelect();
          }

          // not fire check event
          // if (props.checkable) {
          //   this.onCheck();
          // }
        };

        if(props.onDoubleClick){
          domProps.onDoubleClick = this.onDoubleClick;
        }

        if (props.onRightClick) {
          domProps.onContextMenu = this.onContextMenu;
        }
        if (props.onMouseEnter) {
          domProps.onMouseEnter = this.onMouseEnter;
        }
        if (props.onMouseLeave) {
          domProps.onMouseLeave = this.onMouseLeave;
        }
        

        if (props.draggable) {
          domProps.className += ' draggable';
          if (ieOrEdge) {
            // ie bug!
            domProps.href = '#';
          }
          domProps.draggable = true;
          domProps['aria-grabbed'] = true;
          domProps.onDragStart = this.onDragStart;
        }
      }
      //设置tabIndex
      if(props.focusable){
        domProps.onKeyDown = this.onKeyDown;
        domProps.tabIndex = -1;
        if(props.tabIndexKey){
          if(props.eventKey == props.tabIndexKey){
            domProps.tabIndex = props.tabIndexValue;
          }
        }else if(props.pos == '0-0'){
          domProps.tabIndex = props.tabIndexValue;
        }
      }
     

    
      return (
        <a ref={(el)=>{this.selectHandle=el}} pos={props.pos} title={typeof content === 'string' ? content : ''} {...domProps}>
          {icon}{title}
        </a>
      );
    };

    let liProps = {};
    if(props.liAttr){
      liProps = Object.assign({},props.liAttr);
    }
    if (props.draggable) {
      liProps.onDragEnter = this.onDragEnter;
      liProps.onDragOver = this.onDragOver;
      liProps.onDragLeave = this.onDragLeave;
      liProps.onDrop = this.onDrop;
      liProps.onDragEnd = this.onDragEnd;
    }
    let disabledCls = '';
    let dragOverCls = '';
    if (props.disabled) {
      disabledCls = `${prefixCls}-treenode-disabled`;
    } else if (props.dragOver) {
      dragOverCls = 'drag-over';
    } else if (props.dragOverGapTop) {
      dragOverCls = 'drag-over-gap-top';
    } else if (props.dragOverGapBottom) {
      dragOverCls = 'drag-over-gap-bottom';
    }

    const filterCls = props.filterTreeNode ? (props.filterTreeNode(this) ? 'filter-node' : '') : '';

    const noopSwitcher = () => {
      const cls = {
        [`${prefixCls}-switcher`]: true,
        [`${prefixCls}-switcher-noop`]: true,
      };
      if (props.showLine) {
        // console.log('line---------');
        cls[`${prefixCls}-center_docu`] = !props.last;
        cls[`${prefixCls}-bottom_docu`] = props.last;
      } else {
        cls[`${prefixCls}-noline_docu`] = true;
      }
      return <span className={classNames(cls)}></span>;
    };
    const selectedCls =  props.selected?`${prefixCls}-treenode-selected`:'';
    return (
      <li {...liProps}  style={props.style}
        className={classNames(props.className, disabledCls, dragOverCls, filterCls,selectedCls) }
      >
        {canRenderSwitcher ? this.renderSwitcher(props, expandedState) : noopSwitcher()}
        {props.checkable ? this.renderCheckbox(props) : null}
        {selectHandle()}
        {newChildren}
      </li>
    );
  }
}

TreeNode.isTreeNode = 1;

TreeNode.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  disableCheckbox: PropTypes.bool,
  expanded: PropTypes.bool,
  isLeaf: PropTypes.bool,
  root: PropTypes.object,
  onSelect: PropTypes.func,
  openIcon: PropTypes.element,
  closeIcon: PropTypes.element,
  style: PropTypes.object,
  className: PropTypes.string,
  titleClass:PropTypes.string,
  titleStyle:PropTypes.object,
  switcherClass:PropTypes.string,
  switcherStyle:PropTypes.object
};

TreeNode.defaultProps = {
  title: defaultTitle,
  tabIndexValue:0
};

export default TreeNode;