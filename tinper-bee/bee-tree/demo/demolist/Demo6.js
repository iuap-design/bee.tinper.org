/**
 *
 * @title Tree基本使用示例自定义图标
 * @description 添加openIcon、closeIcon属性
 *
 */


import React, {
	Component
} from 'react';
import Tree from '../../src';
import Icon from 'bee-icon';
const TreeNode = Tree.TreeNode;

const defaultProps = {
	keys: ['0-0-0', '0-0-1']
}
class Demo1 extends Component {
	constructor(props) {
		super(props);
		const keys = this.props.keys;
		this.state = {
			defaultExpandedKeys: keys,
			defaultSelectedKeys: keys,
			defaultCheckedKeys: keys,
		};
	}
	onSelect(info) {
		console.log('selected', info);
	}
	onCheck(info) {
		console.log('onCheck', info);
	}
	render() {
		return (

			<Tree className="myCls"  checkable openIcon={<Icon type="uf-minus" />} closeIcon={<Icon type="uf-plus" />}
	        defaultExpandedKeys={this.state.defaultExpandedKeys}
	        defaultSelectedKeys={this.state.defaultSelectedKeys}
	        defaultCheckedKeys={this.state.defaultCheckedKeys}
	        onSelect={this.onSelect} onCheck={this.onCheck}
	      >
	        <TreeNode title="parent 1" key="0-0">
	          <TreeNode title="parent 1-0" key="0-0-0" disabled>
	            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
	            <TreeNode title="leaf" key="0-0-0-1" />
	          </TreeNode>
	          <TreeNode title="parent 1-1" key="0-0-1">
	            <TreeNode title={<span>sss</span>} key="0-0-1-0" />
	          </TreeNode>
	        </TreeNode>
	      </Tree>
		);
	}
}

Demo1.defaultProps = defaultProps;


export default Demo1;