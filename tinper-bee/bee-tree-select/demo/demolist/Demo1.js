/**
*
* @title treeSelect基本使用
* @description treeSelect基本使用—单选
*
*/
import React, { Component } from 'react';
import TreeSelect,{TreeNode} from '../../src';
class Demo1 extends Component {
    state = {
    value: undefined,
  }

  onChange = (value) => {
    this.setState({ value });
  }
  onSelect = (value, node, extra) =>{
    console.log('--value--'+value);
  }

  render () {
    return (
      <TreeSelect
      showSearch
      style={{ width: 300 }}
      value={this.state.value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="请选择"
      allowClear
      treeDefaultExpandAll
      onChange={this.onChange}
      onSelect={this.onSelect}
      >
        <TreeNode value="parent 1" title="parent 1" key="0-1">
          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
            <TreeNode value="leaf1" title="my leaf" key="random" />
            <TreeNode value="leaf2" title="your leaf" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
            <TreeNode value="sss" title="sss" key="random3" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    )
  }
}
export default Demo1