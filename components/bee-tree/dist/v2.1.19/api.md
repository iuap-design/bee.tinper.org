# 树形控件 Tree

## 何时使用
文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## 如何使用
```
import { Tree } from 'tinper-bee';

or

import Tree from 'bee-tree';
import 'bee-tree/build/Tree.css';

```

## 代码演示

## API

### Tree

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|multiple|是否允许选择多个树节点|bool|false
|checkable|节点前添加 Checkbox 复选框|bool|false
|defaultExpandAll|默认展开所有树节点|bool|false
|defaultExpandedKeys|默认展开指定的树节点|String[]|[]
|expandedKeys|（受控）展开指定的树节点|String[]|[]
|autoExpandParent|是否自动展开父节点|bool|true
|defaultCheckedKeys|默认选中复选框的树节点|String[]|[]
|checkedKeys|（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置checkable和checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联|String[]/{checked:Array,halfChecked:Array}|[]
|checkStrictly|checkable 状态下节点选择完全受控（父子节点选中状态不再关联）|bool|false
|defaultSelectedKeys|默认选中的树节点|String[]|[]
|selectedKeys|（受控）设置选中的树节点|String[]|-
|cancelUnSelect|选中的节点第二次点击时还是选中，不自动取消选中|bool|false
|showLine|是否显示连接线|bool|false
|openIcon|自定义展开节点图标的名称[参考这里](http://bee.tinper.org/tinper-bee/bee-icon)String[]|-
|closeIcon|自定义关闭节点图标的名称[参考这里](http://bee.tinper.org/tinper-bee/bee-icon)String[]|-
|onExpand|展开/收起节点时触发的回调函数|function(expandedKeys, {expanded: bool, node})|-
|onCheck|点击复选框触发的回调方法|function(checkedKeys, e:{checked: bool, checkedNodes, node, event})|-
|onSelect|点击树节点触发的回调函数|function(selectedKeys, e:{selected: bool, selectedNodes, node, event})|-
|filterTreeNode|按需筛选树节点（高亮）,当返回true,相关联的节点会高亮|function(node)|-
|loadData|异步加载数据|function(node)|-
|onRightClick|当用户点击右键触发的回调函数|function({event,node})|-
|draggable|树是否可拖拽（IE>8| bool|false
|onDragStart|当树节点刚开始拖拽所触发的放方法|function({event,node})|-
|onDragEnter|当拖拽进入触发的方法|function({event,node,expandedKeys})|-
|onDragOver|当拖拽经过触发的方法|function({event,node})|-
|onDragLeave|当拖拽离开触发的方法|function({event,node})|-
|onDragEnd|当拖拽结束触发的方法|function({event,node})|-
|onDrop|当节点放下触发方法|function({event, node, dragNode, dragNodesKeys})|-
|onDoubleClick|当双击发生触发的方法|function(checkedKeys, e:{node, event})|-
|focusable|是否开启快捷键功能，使用Tab 键导航获取焦点↓↑选中下、上一个节点，→←展开或者收起一个节点,enter键为节点双击事件|bool|-
|tabIndexValue|节点获取焦点时，自定义tabIndex的值|Number|0
|children|必填，TreeNode组件|node|-
|mustExpandable|支持disabled的节点可以自定义展开收起，默认disabled的节点不可以展开收起。【tinper-bee@2.1.1 新增】|bool|false
|autoSelectWhenFocus|使用“↑、↓”快捷键切换焦点时，是否自动选中树节点|bool|false
|expandWhenDoubleClick|双击树节点的时候，是否触发收起/展开动作|bool|false
|treeData|treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）|array\<{key, title, children, [disabled, selectable]}>|-
|lazyLoad|是否使用懒加载（适用于大数据场景），[如何使用](http://bee.tinper.org/tinper-bee/bee-tree#%E6%BB%9A%E5%8A%A8%E5%8A%A0%E8%BD%BD%E6%A0%91%E8%8A%82%E7%82%B9)|bool|false
|renderTitle|使用 treeData 渲染树时使用，可通过此函数自定义树节点内容|Function(item)|-
|renderTreeNodes|使用 treeData 渲染树节点时，可使用该函数自定义节点显示内容（非必须）|Function(data)|-
|getScrollContainer|用于滚动加载场景，自定义滚动事件监听的容器|Function(data)|-


### TreeNode

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|disabled|节点是否不可用|bool|false
|disableCheckbox|节点的checkbox是否不可用|bool|false
|selectable|设置节点是否可被选中|bool|true
|title|名称标题|String/element  |--
|key|节点key,和(default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys一起用，必须是唯一的|String|-
|isLeaf|是否是叶子节点|bool|false
|titleClass|名称类名|String|-
|titleStyle|名称样式|Object|-
|switcherClass|switcher类名|String|-
|switcherStyle|switcher样式|Object|-
|children|TreeNode组件/无|node|-



### 快捷键API

| 快捷键 | 类型 |快捷键说明 | 
|  --- | :---: | --- |
| focusable | bool |  是否开启快捷键 |
| tab | - |  tab 进入焦点，且选中第一行。|
| ↑、↓ | - | ↑(上箭)、↓(下箭) 选中上一行、选中下一行。 |
| ←、→ | - |  ←(左箭)、→(右箭) 收起、展开。 |

## 注意事项

暂无

## 更新日志