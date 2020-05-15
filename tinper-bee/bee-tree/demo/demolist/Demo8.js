/**
 *
 * @title Tree 节点可编辑
 * @description 鼠标移动到节点上点击编辑图标进行编辑。e.node.props.eventKey代表当前节点key值。editKey指当前操作的节点key
 */


import React, {
	Component
} from 'react';
import Tree from '../../src';
import Button from 'bee-button';
import Icon from 'bee-icon';

const TreeNode = Tree.TreeNode;

class Demo8 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			treeData: [],
			isHover: "",
			editKey: ""
		};

	}


	onMouseEnter = (e) => {
		this.setState({
			isHover: e.node.props.eventKey
		})
	}
	onMouseLeave = (e, treenode) => {
		this.setState({
			isHover: "",
			editKey: ""
		})

	}

	editRender = (item) => {
		this.setState({
			editKey: item.key
		});
	}
	nodechange = (item, value) => {
		item.name = value;
	}
	renderTreeTitle = (item) => {
		let titleIcon, titleInfo;
		//编辑时input框
		if (this.state.editKey == item.key) {
			titleInfo = <input type="text" id="itemKey" defaultValue={item.name} onChange={(e) => this.nodechange(item, e.target.value)} />
		} else {
			titleInfo = <span className="title-middle">{item.name}</span>
		}
		//编辑图标
		if (this.state.isHover == item.key) {
			titleIcon = <Icon className="title-middle edit-icon" type="uf-pencil" onClick={(e) => this.editRender(item)}></Icon>;
		}
		return (<div className="title-con">

			{titleInfo}
			{titleIcon}
		</div>);
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				treeData: [{
					name: 'pNode 01',
					key: '0-0',
					children: [{
						name: 'leaf 0-0-0',
						key: '0-0-0'
					}, {
						name: 'leaf 0-0-1',
						key: '0-0-1'
					}]
				}, {
					name: 'pNode 02',
					key: '0-1',
					children: [{
						name: 'leaf 0-1-0',
						key: '0-1-0'
					}, {
						name: 'leaf 0-1-1',
						key: '0-1-1'
					}]
				}, {
					name: 'pNode 03',
					key: '0-2',
					isLeaf: true
				}, ],
			});
		
		}, 100);
	}
	render() {
		const loop = data => data.map((item) => {
			if (item.children) {
				return <TreeNode title={this.renderTreeTitle(item)} key={item.key}>{loop(item.children)}</TreeNode>;
			}
			return <TreeNode title={this.renderTreeTitle(item)} key={item.key} isLeaf={item.isLeaf} disabled={item.key === '0-0-0'} />;
		});
		const treeNodes = loop(this.state.treeData);
		return (
			<Tree onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className="myCls">
				{treeNodes}
			</Tree>

		);
	}
}



export default Demo8;