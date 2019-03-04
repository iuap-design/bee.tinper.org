# Dnd

##代码演示

## API
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|list|需要遍历的数组|array|[]|
|onStart|拖拽开始的钩子函数|function|-|
|onStop|拖拽结束的钩子函数(拖拽元素，拖拽后数组)|function|-|
|axis|设置可拖拽的方向:x/y|string|-|
|handle|设置把手:dom选择器|string|-|
|cancel|设置不可拖拽区域:dom选择器|string|-|
|grid|设置每次拖拽移动的距离:{[x,y]}|object|-|
|bounds|设置移动范围:{top: -xxx, left: -xxx, right: xxx, bottom: xx}/dom选择器|object/string|-|
|clsPrefix|单元素基础样式名|string|u-drag|
|listClass|列表排序外层样式名|string|u-drag-list|
|listItemClass|列表排序被拖拽元素默认样式名|string|u-drag-item|
|draggingClass|被拖拽元素正在拖拽样式名|string|u-dragging|
|draggedClass|被拖拽元素拖拽完毕样式名|string|u-dragged|
