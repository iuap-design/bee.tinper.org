/**
 *
 * @title 连接线Tree
 * @description 
 *
 */


import React, {
	Component
} from 'react';
import Tree from '../../src';

const TreeNode = Tree.TreeNode;
class Demo9 extends Component {
	constructor(props) {
		super(props);
		const keys = this.props.keys;
		this.state = {
			defaultExpandedKeys: keys
		};

	}

	render() {
		return (
			<Tree className="myCls" showLine checkable  defaultExpandAll={true}>
	        <TreeNode title="parent 1" key="0-0">
	          <TreeNode title="parent 1-0" key="0-0-0" >
	            <TreeNode title="leaf" key="0-0-0-0"  />
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

export default Demo9;