# 折叠 Collapse

## 何时使用
折叠组件

在一个元素或者组件中添加折叠效果

## 如何使用
```
import { Collapse } from 'tinper-bee';

or

import Collapse from 'bee-collapse';
import bee-collapse/build/Collapse.css;

```

## 代码演示

## API
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|in|折叠的内容是否显示|boolean|false|
|unmountOnExit|组件折叠时，是否从DOM元素删除该组件|boolean|false|
|transitionAppear|组件内容初始化为显示时，是否添加动态效果|boolean|false|
|timeout|设置超时时间，防止出现问题，其值可设置为>=动画时间|number|300|
|onEnter|组件内容扩展之前调用的函数|func|-|
|onEntering|组件内容扩展时调用的函数|func|-|
|onEntered|组件内容扩展完成时调用的函数|func|-|
|onExit|组件内容隐藏前调用的函数|func|-|
|onExiting|组件内容隐藏时调用的函数|func|-|
|onExited|组件内容隐藏后调用的函数|func|-|
|dimension|折叠区展开效果是纵向的还是横向的（即height或者width改变）|"height"或者"width"或者func|height|

## 注意事项

暂无

## 更新日志