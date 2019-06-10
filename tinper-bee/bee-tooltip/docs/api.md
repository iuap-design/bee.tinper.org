# 文字提示 Tooltip


## 何时使用
需要简单的文字提示

## 如何使用

```
import { Tooltip } from 'tinper-bee';

or

import Tooltip from 'bee-tooltip';
import 'bee-tooltip/build/Tooltip.css';

```
## 代码演示

## API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|id|弹出层id|string / number|-|
|className|类名|string|-|
|placement|弹出位置|可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`|`right`|
|inverse|反白显示|bool|false|
|trigger|触发叠加层的事件|`click` / `hover` / `focus` | `hover` / `focus` |
|delay|叠加层显示和隐藏的延迟时间|number|-|
|delayShow|叠加层显示的延迟时间|number|-|
|delayHide|叠加层隐藏的延迟时间|number|-|
|defaultOverlayShown|覆盖Overlay设置的默认显隐状态|boolean|false|
|overlay|叠加层|element/string/function|-|
|onBlur|失去焦点触发的时间|function|-|
|onClick|点击事件|function|-|
|onFocus|焦点事件|function|-|
|onMouseOut|鼠标离开事件|function|-|
|onMouseOver|鼠标滑过事件|function|-|
|rootClose|是否点击除弹出层任意地方隐藏|boolean|true|
|visible|是否控制弹出层的显示|boolean|-|
|onVisibleChange|使用控制弹出层显示时的钩子函数|function|-|
|onHide|弹出层隐藏时的回调|function|-|
|container|容器|DOM元素/React组件/或者返回React组件的函数|-|

## 注意事项

暂无

## 更新日志
