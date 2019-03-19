/**
 *
 * @title Tree基本使用示例
 * @description 如何获取选中对象自定义对象和数据
 *
 */


import React, {
	Component
} from 'react';
import Tree from '../../src';

const TreeNode = Tree.TreeNode;

const defaultProps = {
	keys: ['0-0-0', '0-0-1']
}
class Demo10 extends Component {
	constructor(props) {
		super(props);
		const keys = this.props.keys;
		this.state = {
			defaultExpandedKeys: keys,
			defaultSelectedKeys: keys,
			defaultCheckedKeys:keys
			// checkedKeys: {checked:keys},
		};
    }
    /**
     * 获取当前选中行的item对象。
     * @param {*} value 
     */
	onSelect(selectedKeys, e) {
        console.log(`${selectedKeys} selected`);//获取key
        let currentObject = {};
        currentObject.title = e.node.props.title; //获取选中对象的数据
        currentObject.key = e.node.props.eventKey;
        console.log(currentObject); 
	}
	onCheck = (checkedKeys) => {
		let self = this;
		console.log('onCheck', checkedKeys);
		const cks = {
			checked: checkedKeys.checked || checkedKeys,
		};
		// this.setState({checkedKeys:cks});
	}

	onDoubleClick=(key,treeNode)=>{
		console.log('---onDblClick---'+key+'--treeNode--'+treeNode);
	}
	render() {
	
		return (
			<Tree className="myCls" showLine checkable
                defaultExpandedKeys={this.state.defaultExpandedKeys}
                defaultSelectedKeys={this.state.defaultSelectedKeys}
                defaultCheckedKeys = {this.state.defaultCheckedKeys}
                checkStrictly
                onSelect={this.onSelect} onCheck={this.onCheck}
                onDoubleClick={this.onDoubleClick}
            >
                <TreeNode title="parent 1" key="0-0" >
                <TreeNode title="parent 1-0" key="0-0-0" disabled>
                    <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                    <TreeNode title="leaf" key="0-0-0-1" />
                </TreeNode>
                <TreeNode title="parent 1-1" key="0-0-1">
                    <TreeNode title={<span>sss</span>} key="0-0-1-0" />
                </TreeNode>
                <TreeNode title="parent 1-2" key="0-0-2" >
                    <TreeNode title="leaf" key="0-0-2-0" />
                    <TreeNode title="leaf" key="0-0-2-1" />
                </TreeNode>
                </TreeNode>
	      </Tree>
		);
	}
}

Demo10.defaultProps = defaultProps;


export default Demo10;