# Tree

## 代码演示

## API

## Tree
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|multiple|是否允许选择多个树节点|bool|false
|checkable|是否支持添加在树节点前添加Checkbox|bool|false
|defaultExpandAll|默认是否展开所有节点|bool|false
|defaultExpandedKeys|默认展开指定的节点|String[]|[]
|expandedKeys|指定展开的节点(controlled)|String[]|[]
|autoExpandParent|是否自定展开父节点|bool|true
|defaultCheckedKeys|指定默认被选中的节点key|String[]|[]
|checkedKeys|指定被选中的节点(controlled)（PS：当指定的是父节点，所有的子节点也会被指定；当指定的是子节点，父节点也会被选中。当checkable和checkStrictly都为true,子节点与父节点的选择情况都不会影响到对方|String[]/{checked:Array,halfChecked:Array}|[]
|checkStrictly|checkable状态下节点选择完全受控（父子节点选中状态不再关联）|bool|false
|defaultSelectedKeys|指定选中的节点key|String[]|[]
|selectedKeys|指定选中的节点keys(controlled)|String[]|-
|cancelUnSelect|选中的节点第二次点击时还是选中，不自动取消选中|bool|false
|showLine|是否显示连接线|bool|false
|openIcon|自定义展开节点图标的名称[参考这里](http://bee.tinper.org/bee-icon)String[]|-
|closeIcon|自定义关闭节点图标的名称[参考这里](http://bee.tinper.org/bee-icon)String[]|-
|onExpand|当打开或关闭树节点触发的方法|function(expandedKeys, {expanded: bool, node})|-
|onCheck|当选择事件发生触发的方法|function(checkedKeys, e:{checked: bool, checkedNodes, node, event})|-
|onSelect|当用户选择树节点触发的回调函数|function(selectedKeys, e:{selected: bool, selectedNodes, node, event})|-
|filterTreeNode|过滤树节点的方法（highlight）,当返回true,相关联的节点会高亮|function(node)|-
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
|Children|必填，TreeNode组件|node|-

## TreeNode
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|disabled|节点是否不可用|bool|false
|disableCheckbox|节点的checkbox是否不可用|bool|false
|title|名称标题|String/element  |--
|key|节点key,和(default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys一起用，必须是唯一的|String|-
|isLeaf|是否是叶子节点|bool|false
|titleClass|名称类名|String|-
|titleStyle|名称样式|Object|-
|switcherClass|switcher类名|String|-
|switcherStyle|switcher样式|Object|-
|Children|TreeNode组件/无|node|-



## 快捷键API

| 快捷键 | 类型 |快捷键说明 | 
|  --- | :---: | --- |
| focusable | function |  是否开启快捷键 |
| tab | - |  tab 进入焦点，且选中第一行。|
| ↑、↓ | - | ↑(上箭)、↓(下箭) 选中上一行、选中下一行。 |
| ←、→ | - |  ←(左箭)、→(右箭) 收起、展开。 |