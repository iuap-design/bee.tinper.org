/**
*
* @title 自定义右侧已选列表的排列顺序
* @description `appendToBottom` 参数控制是否将已选项追加到右侧列表末尾，其默认值为false（即将已选项添加到右侧列表最上方）。可在项目中动态改变参数数组targetKeys，穿梭框会根据targetKeys中的顺序进行排序。应用场景：通过上移/下移改变右侧数据顺序。
*
*/


import React, { Component } from 'react';
import Button from 'bee-button';
import Icon from 'bee-icon';
import Transfer from '../../src';

const AllTargetKeys = [];
const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
  AllTargetKeys.push(i.toString());
}

const targetKeys = mockData
        .filter(item => +item.key % 7 === 0)
        .map(item => item.key);

class Demo7 extends React.Component {
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

    moveAllToRight = () => {
        this.setState({
        targetKeys: AllTargetKeys
        })
    }
    moveAllToLeft = () => {
        this.setState({
        targetKeys: []
        })
    }

    swapItems(arr, index1, index2) {
		arr[index1] = arr.splice(index2, 1, arr[index1])[0];
		return arr;
	};

    scopeupRecord(arr, $index) {
		if ($index == 0) {
			return;
		}
		this.swapItems(arr, $index, $index - 1);
	};
    
    scopedownRecord(arr, $index) {
		if ($index == arr.length - 1) {
			return;
		}
		this.swapItems(arr, $index, $index + 1);
	};

    moveUp = () => {
        let { targetKeys, selectedKeys } = this.state
		let selectedTargetKeys = []
		targetKeys.forEach((v, i) => {
			selectedKeys.forEach((v2, i2) => {
				if (v2 == v) {
					selectedTargetKeys.push({ key: v, index: i })
				}
			})
		})
		if (selectedTargetKeys.length == 1) {
			this.scopeupRecord(targetKeys, selectedTargetKeys[0].index)
			this.setState({
				targetKeys
			});
		}
    }

    moveDown = () => {
        let { targetKeys, selectedKeys } = this.state
		let selectedTargetKeys = []
		targetKeys.forEach((v, i) => {
			selectedKeys.forEach((v2, i2) => {
				if (v2 == v) {
					selectedTargetKeys.push({ key: v, index: i })
				}
			})
		})
		console.log(targetKeys, selectedKeys, selectedTargetKeys)
		if (selectedTargetKeys.length == 1) {
			this.scopedownRecord(targetKeys, selectedTargetKeys[0].index)
			this.setState({
				targetKeys
			});
		}
    }

    render() {
        const state = this.state;
        const targetKeys = [...this.state.targetKeys];
        return (
        <div className="demo7">
            <Button onClick={this.moveUp} size="sm" className="moveUpBtn moveBtn"><Icon type="uf-arrow-up" /></Button>
            <Button onClick={this.moveDown} size="sm" className="moveDownBtn moveBtn"><Icon type="uf-arrow-down" /></Button>
            <Transfer
            appendToBottom={true}
            dataSource={mockData}
            titles={['Source', 'Target']}
            targetKeys={targetKeys}
            selectedKeys={state.selectedKeys}
            onChange={this.handleChange}
            onSelectChange={this.handleSelectChange}
            render={item => item.title}
            />
        </div>
        );
    }
}


export default Demo7
