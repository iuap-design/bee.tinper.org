# bee-tree

[![npm version](https://img.shields.io/npm/v/bee-tree.svg)](https://www.npmjs.com/package/bee-tree)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-tree/master.svg)](https://travis-ci.org/tinper-bee/bee-tree)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-tree/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-tree?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-tree.svg)](https://david-dm.org/tinper-bee/bee-tree#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-tree.svg?style=flat)](https://npmjs.org/package/bee-tree)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-tree.svg)](http://isitmaintained.com/project/tinper-bee/bee-tree "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-tree.svg)](http://isitmaintained.com/project/tinper-bee/bee-tree "Percentage of issues still open")

## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


## 使用

### 使用单独的Tree包
#### 组件引入
先进行下载Tree包
```
npm install --save bee-tree
```
组件调用
```js
import Tree from 'bee-tree';

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
	      <Tree className="myCls" showLine checkable
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
	            <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
	          </TreeNode>
	        </TreeNode>
	      </Tree>
	    );
	}
}

React.render(<Demo1 />, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下tree.css
```
<link rel="stylesheet" href="./node_modules/build/bee-tree.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Tree.scss"
//或是
import "./node_modules/build/bee-tree.css"
```




## API


## Tree
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
multiple|是否允许选择多个树节点|bool|false
checkable|是否支持添加在树节点前添加Checkbox|bool|false
defaultExpandAll|默认是否展开所有节点|bool|false
defaultExpandedKeys|默认展开指定的节点|String[]|[]
expandedKeys|指定展开的节点(controlled)String[]|[]
autoExpandParent|是否自定展开父节点|bool|true
defaultCheckedKeys|指定默认被选中的节点key|String[]|[]
checkedKeys|指定被选中的节点(controlled)（PS：当指定的是父节点，所有的子节点也会被指定；当指定的是子节点，父节点也会被选中。当checkable和checkStrictly都为true,子节点与父节点的选择情况都不会影响到对方|String[]/{checked:Array,halfChecked:Array}|[]
checkStrictly|精细的检查每个节点|bool|false
defaultSelectedKeys|指定选中的节点key|String[]|[]
selectedKeys|指定选中的节点keys(controlled)|String[]|-
onExpand|当打开或关闭树节点触发的方法|function(expandedKeys, {expanded: bool, node})|-
onCheck|当选择事件发生触发的方法|function(checkedKeys, e:{checked: bool, checkedNodes, node, event})|-
onSelect|当用户选择树节点触发的回调函数|function(selectedKeys, e:{selected: bool, selectedNodes, node, event})|-
filterTreeNode|过滤树节点的方法（highlight）,当返回true,相关联的节点会高亮|function(node)|-
loadData|异步加载数据|function(node)|-
onRightClick|当用户点击右键触发的回调函数|function({event,node})|-
draggable|树是否可拖拽（IE>8|	bool|false
onDragStart|当树节点刚开始拖拽所触发的放方法|function({event,node})|-
onDragEnter|当拖拽进入触发的方法|function({event,node,expandedKeys})|-
onDragOver|当拖拽经过触发的方法|function({event,node})|-
onDragLeave|当拖拽离开触发的方法|function({event,node})|-
onDragEnd当拖拽结束触发的方法|function({event,node})|-
onDrop|当节点放下触发方法function({event, node, dragNode, dragNodesKeys})|-
onDoubleClick|当双击发生触发的方法|function(checkedKeys, e:{node, event})|-
Children|必填，TreeNode组件|node|-

## TreeNode
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
disabled|节点是否不可用|bool|false
disableCheckbox|节点的checkbox是否不可用|bool|false
title|名称标题|String/element	|--
key|节点key,和(default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys一起用，必须是唯一的|String|-
isLeaf|是否是叶子节点|bool|false
titleClass|名称类名|String|-
titleStyle|名称样式|Object|-
switcherClass|switcher类名|String|-
switcherStyle|switcher样式|Object|-
Children|TreeNode组件/无|node|-


## 快捷键API

| 快捷键 | 类型 |快捷键说明 | 
|  --- | :---: | --- |
| focusable | function |  是否开启快捷键 |
| tab | - |  tab 进入焦点，且选中第一行。|
| ↑、↓ | - | ↑(上箭)、↓(下箭) 选中上一行、选中下一行。 |
| ←、→ | - |  ←(左箭)、→(右箭) 收起、展开。 |


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-tree
$ cd bee-tree
$ npm install
$ npm run dev
```
