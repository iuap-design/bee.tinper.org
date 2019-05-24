/**
*
* @title treeSelect 动态加载树
* @description 点击父节点动态加载树
*
*/
import React, { Component } from 'react';
import TreeSelect,{TreeNode} from '../../src';
import { getNewTreeData, generateTreeNodes } from './util';


class Demo4 extends Component {
    static propTypes = {};

    state = {
      treeData: [
        { title: 'pNode 01', value: '0-0', key: '0-0' },
        { title: 'pNode 02', value: '0-1', key: '0-1' },
        { title: 'pNode 03', value: '0-2', key: '0-2', isLeaf: true },
      ],
      // value: '0-0',
      value: { value: '0-0-0-value', title: '0-0-0-title' },
    };
  
    onChange = (value) => {
      console.log(value);
      this.setState({
        value,
      });
    };
  
    onLoadData = (treeNode) => {
      console.log(treeNode);
      return new Promise((resolve) => {
        setTimeout(() => {
          const treeData = [...this.state.treeData];
          getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);
          this.setState({ treeData });
          resolve();
        }, 500);
      });
    };
  render () {
    return (

        <TreeSelect
        style={{ width: 300 }}
        treeData={this.state.treeData}
        labelInValue
        value={this.state.value}
        onChange={this.onChange}
        loadData={this.onLoadData}
      />

    )
  }
}
export default Demo4