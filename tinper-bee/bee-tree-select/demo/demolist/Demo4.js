/**
*
* @title treeSelect 勾选框树
* @description 使用勾选框实现多选功能。
*
*/
import React, { Component } from 'react';
import TreeSelect,{TreeNode} from '../../src';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [{
  title: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    title: 'Child Node1',
    value: '0-0-1',
    key: '0-0-1',
  }, {
    title: 'Child Node2',
    value: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: 'Node2',
  value: '0-1',
  key: '0-1',
}];


class Demo4 extends Component {
    state = {
    value: undefined,
  }
  onChange = (value) => {
    this.setState({ value });
  }
  render () {
    return (

              <TreeSelect
                style={{ width: 300 }}
                value={this.state.value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                treeCheckable= {true}
                showCheckedStrategy={SHOW_PARENT}
                treeDefaultExpandAll
                onChange={this.onChange}
            />

    )
  }
}
export default Demo4