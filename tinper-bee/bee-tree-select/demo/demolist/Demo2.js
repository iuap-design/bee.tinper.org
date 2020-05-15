/**
*
* @title treeSelect 使用JSON数据
* @description 使用 treeData 把 JSON 数据直接生成树结构。
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


class Demo2 extends Component {
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
                  placeholder="Please select"
                  treeDefaultExpandAll
                  onChange={this.onChange}
              />

    )
  }
}
export default Demo2