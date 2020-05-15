# 气泡弹窗 Popconfirm 

点击元素弹出对话框。

## 何时使用
目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户

## 如何使用

```
import { Popconfirm } from 'tinper-bee';

or

import Popconfirm from 'bee-popconfirm';
import 'bee-popconfirm/build/Popconfirm.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|defaultOverlayShown|默认是否显示|bool|false|
|content|显示的组件|node/string|-|
|onClick|点击事件的钩子函数|function|-|
|onClose|确认按钮的点击事件|function|-|
|onCancel|取消按钮的点击事件|function|-|
|rootClose|是否点击除弹出层任意地方隐藏|boolean|false|
|onRootClose|点击除弹出层任意地方隐藏的回调|func|-|
|transition|过度动画组件|component|-|
|onEnter|开始显示时的钩子函数|function|-|
|onEntering|显示时的钩子函数|function|-|
|onEntered|显示完成后的钩子函数|function|-|
|onExit|隐藏开始时的钩子函数|function|-|
|onExiting|隐藏进行时的钩子函数|function|-|
|onExited|隐藏结束时的钩子函数|function|-|
|placement|弹出位置|top/left/right/bottom|right|
|secondPlacement|当placement放不下时的弹出位置|top/left/right/bottom|right|
|locale|显示文字语言对象|object|{lang: 'zh-cn', ok: '确认', cancel: '取消'}|
|container|标题|node/function|body|
|stopbubble|是否阻止冒泡(1-阻止，0-不阻止)|number|0|
|animation|是否要使用动画|bool|true|
|show|显示隐藏是否受控|bool|-|
|cancel_btn|自定义的取消按钮|node/function|-|
|close_btn|自定义的确定按钮|node/function|-|

## 注意事项

暂无

## 更新日志