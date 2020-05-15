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
|title|卡片标题|string/ReactNode|-|
|content|卡片内容|string/ReactNode|-|
|placement|弹出位置|可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`|`right`|
|positionTop|弹出框向上偏移量|string/number|-|
|positionLeft|弹出框向左偏移量|string/number|-|
|container|容器|ReactNode/function|body|
|trigger|触发现实和隐藏的事件类型|click/hover/focus|hover|
|show|控制显示和隐藏，注意：需要和 onHide 事件结合使用|bool|-|
|defaultOverlayShown|默认显示的状态|bool|false|
|onHide|隐藏时的回调|function|-|
|onVisibleChange|显示状态改变时触发的回调|function|-|

## 注意事项
- trigger 为 "click" 时，点击除弹出层外的任意地方，默认会隐藏弹出层。
- 若设置了参数 show ，来控制显示和隐藏的话，需要结合 onHide 事件一起使用，避免出现：在点击除弹出层外的任意地方时，组件状态未及时更新的问题。具体代码如下：
```
<Popover
    id="demo2"
    placement="right"
    title={<h3>请确认您的包裹已签收！</h3>}
    content={content}
    show={this.state.show}
    onHide={this.onHide}
>
    <Button colors="primary" onClick={ this.show }>确认按钮</Button>
</Popover>
```


## 更新日志