# 气泡卡片 Popover
点击元素弹出气泡弹出框。

## 何时使用
例如：table内确认删除气泡弹出框

## 如何使用

```
import { Popover } from 'tinper-bee';

or

import Popover from 'bee-popover';
import 'bee-popover/build/Popover.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|id|标示弹出层|string/number|-|
|placement|弹出位置|可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`|`right`|
|positionTop|弹出框向上偏移量|string/number|-|
|positionLeft|弹出框向左偏移量|string/number|-|
|arrowOffsetTop|弹出框箭头向上偏移量|string/number|-|
|arrowOffsetLeft|弹出框箭头向左偏移量|string/number|-|
|title|标题|node|-|
|container|标题|node/function|body|
|trigger|触发现实和隐藏的事件类型|click/hover/focus|hover|
|show|控制显示和隐藏|bool|-|
|defaultOverlayShown|默认显示的状态|bool|false|
|onHide|隐藏时的回调|function|-|

## 注意事项

暂无

## 更新日志