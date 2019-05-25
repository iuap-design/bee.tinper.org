/**
*
* @title treeSelect 多选
* @description 添加multiple属性，下拉树选项可以多选
*
*/
import React, { Component } from 'react';
import TreeSelect,{TreeNode} from '../../src';

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


class Demo3 extends Component {
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
            multiple
            treeDefaultExpandAll
            onChange={this.onChange}
        />

    )
  }
}
export default Demo3