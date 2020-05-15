# 锚点 Anchor

基于 [gumshoejs](https://www.npmjs.com/package/gumshoejs) 的锚点组件

## 何时使用

例如网站导航 

## 如何使用

```
import { Anchor } from 'tinper-bee';

or

import Anchor from 'bee-anchor';
import 'bee-anchor/build/Anchor.css';

```

## 代码演示


## API

|参数|说明|类型|默认值|
|:---|:----:|:---:|------:|
|selector|目标元素选择器|string|-|
|offset|向上偏移量,例如有固定header，则 offset=()=>return header.getBoundingClientRect().height|()=>{}|0|
|navClass|当前被激活锚点新增的类名|string|'active'|
|contentClass|当前被激活区域新增的类名|string|'active'|
|nested|是否有嵌套导航|bool|false|
|nestedClass|嵌套导航激活时父节点的类名|string|'active'|
|event|是否添加监听事件|bool|true|
|activeHandle|被激活的回调，三个参数,以基本示例为例，列表li、锚点a、激活区域p|func|()=>{})|
|deactiveHandle|激活后的回调|func|()=>{})|



## 注意事项

暂无

## 更新日志
