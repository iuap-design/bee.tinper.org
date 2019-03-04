## Notification 通知

Notification通知不同于操作类型的信息反馈，是一种主动推送的信息。

## 代码演示

### API

#### Notice

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|duration|显示时间|number|4.5|
|onClose|关闭时触发的钩子函数|function|-|
|closable|是否可手动关闭|boolean|true|
|color|显示颜色|success/info/danger/warning/dark|-|
|className|类名|string|-|
|style|样式|object|-|

#### Notification

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|show|是否显示|boolean|true|
|transition|动画|element|Fade|
|position|显示位置|topRight/BottomRight|topRight|
|timeout|延迟时间|number|-|
|onEnter|开始显示时的钩子函数|function|-|
|onEntering|显示时的钩子函数|function|-|
|onEntered|显示完成后的钩子函数|function|-|
|onExit|隐藏开始时的钩子函数|function|-|
|onExiting|隐藏进行时的钩子函数|function|-|
|onExited|隐藏结束时的钩子函数|function|-|
|className|类名|string|-|
|style|样式|object|-|
|keyboard|esc触发关闭|boolean|true|
|onEscapeKeyUp|响应ESC键时的钩子函数|function|-|
