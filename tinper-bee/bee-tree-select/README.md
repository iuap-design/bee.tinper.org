# bee-tree-select

[![npm version](https://img.shields.io/npm/v/bee-tree-select.svg)](https://www.npmjs.com/package/bee-tree-select)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-tree-select/master.svg)](https://travis-ci.org/tinper-bee/bee-tree-select)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-tree-select/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-tree-select?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-tree-select.svg)](https://david-dm.org/tinper-bee/bee-tree-select#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-tree-select.svg?style=flat)](https://npmjs.org/package/bee-tree-select)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-tree-select.svg)](http://isitmaintained.com/project/tinper-bee/bee-tree-select "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-tree-select.svg)](http://isitmaintained.com/project/tinper-bee/bee-tree-select "Percentage of issues still open")

bee-tree-select 是树型选择控件，当select下拉框选项为树形结构时会用到该组件。例如层级之间的产品、学科系统、分类目录等等。


## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

#### 组件引入
先进行下载TreeSelect包
```
npm install --save bee-tree-select
```
组件调用
```js
import React, { Component } from 'react';
import TreeSelect,{TreeNode} from 'bee-tree-select';
class Demo1 extends Component {
    state = {
    value: undefined,
  }
  onChange = (value) => {
    console.log(arguments);
    this.setState({ value });
  }
  render () {
    return (

            <TreeSelect
            showSearch
            style={{ width: 300 }}
            value={this.state.value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={this.onChange}
            >
                <TreeNode value="parent 1" title="parent 1" key="0-1">
                  <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                    <TreeNode value="leaf1" title="my leaf" key="random" />
                    <TreeNode value="leaf2" title="your leaf" key="random1" />
                  </TreeNode>
                  <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                    <TreeNode value="sss" key="random3" />
                  </TreeNode>
                </TreeNode>
            </TreeSelect>

    )
  }
}
```
#### 样式引入
- 可以使用link引入dist目录下tree.css
```
<link rel="stylesheet" href="./node_modules/build/bee-tree-select.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/TreeSelect.scss"
//或是
import "./node_modules/build/bee-tree-select.css"
```

## API

### Tree props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 显示清除按钮 | boolean | false |
| className | 自定义输入框样式名 | string | - |
| defaultValue | 指定默认选中的条目 | string/string\[] | - |
| disabled | 是否禁用 | boolean | false |
| dropdownClassName | 下拉菜单的 className 属性 | string | - |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽 | boolean | true |
| dropdownStyle | 下拉菜单的样式 | object | - |
| notFoundContent | 设定搜索不到数据显示的内容 | String | '无匹配结果' |
| filterTreeNode | 是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值 | boolean\|Function(inputValue: string, treeNode: TreeNode) (函数需要返回bool值) | Function |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function(triggerNode) | () => document.body |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 value 类型从 `string` 变为 `{value: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] }` 的格式 | boolean | false |
| loadData | 异步加载数据 | function(node) | - |
| multiple | 支持多选（当设置 treeCheckable 时自动变为true） | boolean | false |
| placeholder | 选择框默认文字 | string | - |
| searchPlaceholder | 搜索框默认文字 | string | - |
| showCheckedStrategy | 定义选中项回填的方式。`TreeSelect.SHOW_ALL`: 显示所有选中节点(包括父节点). `TreeSelect.SHOW_PARENT`: 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点. | enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD } | TreeSelect.SHOW_CHILD |
| showSearch | 在下拉中显示搜索框(仅在单选模式下生效) | boolean | false |
| size | 选择框大小，可选 `large` `small` | string | 'default' |
| treeCheckable | 显示 checkbox | boolean | false |
| treeCheckStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 `labelInValue` 强制为 true | boolean | false |
| treeData | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一） | array&lt;{value, label, children, [disabled, disableCheckbox, selectable]}>(如果定义了title，label会被title覆盖) | \[] |
| treeDataSimpleMode | 使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', label:"test1",...},...], `pId` 是父节点的 id) | false\|Array&lt;{ id: string, pId: string, rootPId: null }> | false |
| treeDefaultExpandAll | 默认展开所有树节点 | boolean | false |
| treeDefaultExpandedKeys | 默认展开的树节点 | string\[] | - |
| treeNodeFilterProp | 输入项过滤对应的 treeNode 属性 | string | 'value' |
| treeNodeLabelProp | 作为显示的 prop 设置 | string | 'title' |
| value | 指定当前选中的条目 | string/string\[] | - |
| onChange | 选中树节点时调用此函数 | function(value, label, extra) | - |
| onSearch | 文本框值变化时回调 | function(value: string) | - |
| onSelect | 被选中时调用 | function(value, node, extra) | - |


### TreeNode props

> 建议使用 treeData 来代替 TreeNode，免去手工构造麻烦

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disableCheckbox | 禁掉 checkbox | boolean | false |
| disabled | 是否禁用 | boolean | false |
| isLeaf | 是否是叶子节点 | boolean | false |
| key | 此项必须设置（其值在整个树范围内唯一） | string | - |
| title | 树节点显示的内容 | string\|ReactNode | '---' |
| value | 默认根据此属性值进行筛选（其值在整个树范围内唯一） | string | - |
#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-tree-select
$ cd bee-tree-select
$ npm install
$ npm run dev
```
