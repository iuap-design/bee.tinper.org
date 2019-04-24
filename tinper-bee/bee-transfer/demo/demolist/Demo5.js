/**
*
* @title 拖拽穿梭
* @description 通过`draggable`参数设置是否可以通过拖拽进行穿梭和排序
*
*/


import React, { Component } from 'react';
import Transfer from '../../src';

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,

  });
}

const targetKeys = mockData
        .filter(item => +item.key % 3 > 1)
        .map(item => item.key);

class Demo5 extends React.Component {
  state = {
    targetKeys,
    selectedKeys: [],
    showModal: false,
    modalSize: ''
  }

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  }

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  }

  handleScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  }


  render() {
    const state = this.state;
    // targetKeys需要通过数组的扩展运算符进行赋值
    const targetKeys = [...this.state.targetKeys];
    return (
       <Transfer
          draggable={true}
          showCheckbox={false}
          dataSource={mockData}
          titles={['Source', 'Target']}
          targetKeys={targetKeys}
          selectedKeys={state.selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={item => item.title}
        />
    );
  }
}


export default Demo5
