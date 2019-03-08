/**
 *
 * @title Tree基本使用示例
 * @description 示例涵盖 checkbox如何选择，disable状态和部分选择状态。checkStrictly为true时，子节点与父节点的选择情况都不会影响到对方
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
			defaultCheckedKeys:keys,
			checkedKeys: {checked:keys},
		};
	}
	onSelect(info) {
		console.log('selected', info);
	}
	onCheck = (checkedKeys,newst) => {
		//用户可以自定义当前选中和半选中的节点。
		console.log('onCheck', checkedKeys);
		const cks = {
			checked: checkedKeys.checked || checkedKeys,
			halfChecked:checkedKeys.halfChecked
		};
		this.setState({checkedKeys:cks});
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
					showIcon
					cancelUnSelect={true}
					onSelect={this.onSelect} onCheck={this.onCheck}
					onDoubleClick={this.onDoubleClick}
	      >
	        <TreeNode title="parent 1" key="0-0"  icon={<Icon type="uf-treefolder" />}>
	          <TreeNode title="parent 1-0" key="0-0-0" disabled  icon={<Icon type="uf-treefolder" />}>
	            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox icon={<Icon type="uf-list-s-o" />}/>
	            <TreeNode title="leaf" key="0-0-0-1" icon={<Icon type="uf-list-s-o" />}/>
	          </TreeNode>
	          <TreeNode title="parent 1-1" key="0-0-1" icon={<Icon type="uf-treefolder" />}>
	            <TreeNode title={<span>sss</span>} key="0-0-1-0" icon={<Icon type="uf-list-s-o" />}/>
	          </TreeNode>
	        </TreeNode>
	      </Tree>
		);
	}
}

Demo1.defaultProps = defaultProps;


export default Demo1;