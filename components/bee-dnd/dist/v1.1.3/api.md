# 拖拽 Dnd

## 何时使用
拖拽组件

## 如何使用
```
import Dnd from 'bee-dnd';
import 'bee-dnd/build/Dnd.css';

```

## 代码演示

## API

### 模块拖拽API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|onStart|拖拽开始的钩子函数|function|-|
|onDrag|拖拽中的钩子函数|function|-|
|onStop|拖拽结束的钩子函数|function|-|
|dragClass|拖拽元素的class|string|-|
|dragingClass|拖拽中的class|string|-|
|draggedClass|拖拽过后的class|string|-|
|axis|设置可拖拽的方向|string|-|
|handle|设置把手|string|-|
|cancel|设置不可拖拽区域|string|-|
|grid|设置每次拖拽移动的距离|array|-|
|bounds|设置移动范围|object/string|-|

### 拖拽排序API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|list|需要遍历的数组|array|[]|
|onStart|拖拽开始的钩子函数|function|-|
|onDragUpdate|拖拽中列表有更新时的钩子函数|function|-|
|onStop|拖拽结束的钩子函数|function|-|
|dropClass|拖动面板drop的class|string|-|
|dropOverClass|拖动面板drop被经过的class|string|-|
|dragClass|拖拽元素drag的class|string|-|
|dragingClass|拖拽元素正在被拖拽的class|string|-|
|type|设置拖拽列类型`vertical`单列纵向,`horizontal`单列横向,`betweenVertical`两列纵向,`betweenHorizontal`两列横向|`vertical`/`horizontal`/`betweenVertical`/`betweenHorizontal`|-|
|otherList|`type=betweenVertical/betweenHorizontal`时需要的第二个数组|array|[]|
|showKey|拖拽数组需要显示的`key`值，如 示例8|string|-|


### 拖拽排序回调函数参数说明

- `destination` Draggable完成的位置。如果用户在不超过Droppable的情况下掉落，则目标将为空

- `draggableId` 被拖动的Draggable的ID

- `source`  Draggable开始的位置

### 网格排序API
#### Grid Layout Props

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|width|容器的初始宽度|number|-|
|autoSize|如果为true，容器高度会膨胀并收缩以适合内容|boolean|-|
|cols|此布局中的列数|number|12|
|draggableCancel|用于不可拖动的标记的CSS选择器|string|''|
|draggableHandle|用作标记的CSS选择器，用作可拖动句柄|string|''|
|verticalCompact|如果为true，布局将垂直压缩|boolean|true|
|compactType|压缩类型|（ ' vertical '  |  ' horizo​​ntal '）|'vertical '|
|layout|Layout是一个对象数组，格式为：`{x：number，y：number，w：number，h：number}`|number|-|
|margin|各网格项之间的 margin，单位 px |[number, number]|[10, 10]|
|containerPadding|容器内的padding，单位 px|[number, number]|[10, 10]|
|rowHeight|静态行高|number|150|
|isDraggable|是否可拖拽改变位置|boolean|true|
|isResizable|是否可拖拽改变宽高|boolean|true|
|useCSSTransforms|使用 CSS3 translate() 代替 position top/left |boolean|true|
|preventCollision|如果为true，则拖动时网格项不会改变位置|boolean|false|
|onLayoutChange|layout改变时触发的回调函数|function|(layout: Layout) => void|
|onDragStart|拖拽开始的钩子函数|function|-|
|onDrag|拖拽中的钩子函数|function|-|
|onDragStop|拖拽结束的钩子函数|function|-|
|onResizeStart|resize开始时的回调|function|-|
|onResize|resize时的回调|function|-|
|onResizeStop|resize结束时的回调|function|-|

#### Grid Item Props

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|i|跟网格项组件关联的 key 值|string|-|
|x|网格项在网格容器中的 x 坐标，单位：网格单元（非像素值）|number|-|
|y|网格项在网格容器中的 y 单位：网格单元（非像素值）|number|-|
|w|网格项的宽度，单位：网格单元（非像素值）|number|-|
|h|网格项的高度，单位：网格单元（非像素值）|number|-|
|minW|网格项的最小宽度|number|0|
|maxW|网格项的最大宽度|number|Infinity|
|minH|网格项的最小高度|number|0|
|maxH|网格项的最大宽度|number|Infinity|
|static|如果为 true，等同于 `isDraggable: false, isResizable: false`|boolean|false|
|isDraggable|是否可拖拽|boolean|true|
|isResizable|是否可拖拽改变大小|boolean|true|

## 注意事项

本组件提供四种使用方式，第一种：模块拖拽。第二种：拖拽排序，包括：横向排序、纵向排序、两个纵向交换、两个横向交换。第三种，自定义拖拽排序，可用 Dnd 组件内的 `DragDropContext, Droppable, Draggable`，并参考 [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)。第四种，网格排序，可参考 [react-grid-layout](https://github.com/STRML/react-grid-layout)。

## 更新日志