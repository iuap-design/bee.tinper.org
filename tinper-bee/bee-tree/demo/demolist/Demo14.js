/**
*
* @title 自定义滚动容器
* @description 使用 getScrollParent 设置需要监听滚动事件的容器。
*/

import React, { Component } from 'react';
import Tree from '../../src';

const {TreeNode} = Tree;

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

class Demo14 extends Component{
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

  //使用 treeData 渲染树节点时，可使用该函数自定义节点显示内容（非必须）
  //注意：isLeaf 属性是必传的，否则节点层级和展示会有问题
  renderTreeNodes = (data) => {
    const loop = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeNode key={item.key} title={item.key} isLeaf={item.isLeaf}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={item.key} isLeaf={true}/>;
    });
    return loop(data);
  }

  render() {
    return (
        <div className="container" style={{height:'300px', overflow:'auto'}}>
            <div>
                <Tree
                checkable
                focusable
                treeData={gData}
                lazyLoad={true}
                renderTreeNodes={this.renderTreeNodes}
                onExpand={this.onExpand}
                defaultExpandAll={true} 
                expandedKeys={this.state.expandedKeys}
                autoExpandParent={this.state.autoExpandParent}
                onCheck={this.onCheck} 
                onSelect={this.onSelect} 
                keyFun={this.onKeyDown}
                getScrollContainer={() => {
                    return document.querySelector('.container')
                }}
                >
                </Tree>
            </div>
        </div>
    );
  }
};


export default Demo14;