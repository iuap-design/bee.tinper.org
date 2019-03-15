# Dnd

## 何时使用
拖拽组件

## 如何使用
```
import Dnd from "tinper-bee/lib/Dnd";

or

import Dnd from 'bee-dnd';
import bee-dnd/build/Dnd.css;

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




### 说明

> 本组件提供三种使用方式，第一种：模块拖拽。第二种：拖拽排序，包括：横向排序、纵向排序、两个纵向交换、两个横向交换。第三种，更复杂的拖拽排序，可用 Dnd 组件内的 `DragDropContext, Droppable, Draggable`，并参考 [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)。

## 注意事项

暂无

## 更新日志