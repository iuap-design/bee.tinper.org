/**
*
* @title 滚动加载树节点
* @description 适用于大数据场景。注意：使用懒加载，需要通过 treeData 属性传入完整的数据结构，并设置 lazyLoad = {true}。可视区域的高度可以自定义，在 Tree 组件外层包裹一层div即可。
*/

import React, { Component } from 'react';
import Tree from '../../src';

const x = 1000;
const y = 1;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({ title: key, key });
        if (i < y) {
            children.push(key);
        }
    }
    if (_level < 0) {
        return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children);
    });
};
generateData(z);

class Demo13 extends Component{
  constructor(props) {
  	super(props);
    this.state = {
      expandedKeys: ['0-0','0-1','0-2','0-3', '0-4','0-5','0-6','0-0-0','0-0-1'],
      autoExpandParent: true,
      checkedKeys: ['0-0-0'],
      selectedKeys: [],
    };
    this.onExpand = this.onExpand.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }
  onExpand(expandedKeys,nodeInfo) {
    // console.log('onExpand---显示ext数据', nodeInfo.node.props.ext.data);

    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }
  onCheck(checkedKeys) {
    this.setState({
      checkedKeys,
      selectedKeys: ['0-3', '0-4'],
    });
  }
  onSelect(selectedKeys, info) {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  }
  // keydown的钩子事件
  onKeyDown = (e,treeNode)=>{
    console.log('***',e);
    return false;
  }

  //自定义树节点内容
  renderTitle = item => {
    return item.key
  }

  render() {
    return (
      <div style={{height:'300px', border:'1px solid', overflow:'auto'}}>
        <Tree
          checkable
          focusable
          treeData={gData}
          lazyLoad={true}
          renderTitle={this.renderTitle}
          onExpand={this.onExpand}
          defaultExpandAll={true} 
          expandedKeys={this.state.expandedKeys}
          autoExpandParent={this.state.autoExpandParent}
          onCheck={this.onCheck} 
          onSelect={this.onSelect} 
          keyFun={this.onKeyDown}
        >
        </Tree>
      </div>
    );
  }
};


export default Demo13;