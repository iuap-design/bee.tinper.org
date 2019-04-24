# 时间 TimePicker

时间输入框

## 何时使用

选择时间
## 如何使用

```
import { TimePicker } from 'tinper-bee';

or

import TimePicker from 'bee-timepicker';
import 'bee-timepicker/build/TimePicker.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|prefixCls|prefixCls of this component|String|'rc-time-picker'|
|clearText|clear tooltip of icon|String|'clear'|
|disabled|禁用时间组件|Boolean|false|
|allowEmpty|允许为空|Boolean|true|
|open|current open state of picker. controlled prop|Boolean|false|
|defaultValue|默认值|moment|null|
|defaultOpenValue|默认打开的值|moment|moment()|
|value|当前值|moment|null|
|placeholder|输入框的placeholder|String|''|
|className|time picker className|String|''|
|popupClassName|弹出面板的ClassName|String|''|
|showHour|显示小时|Boolean|true|
|showMinute|显示分钟|Boolean|true|
|showSecond|显示秒|Boolean|true|
|format|格式化|String|-|
|disabledHours|禁用的小时|Function|-|
|disabledMinutes|禁用的分钟|Function|-|
|disabledSeconds|禁用的秒|Function|-|
|use12Hours|切换12小时制|Boolean|false|
|hideDisabledOptions|是否隐藏禁用选项|Boolean|false|
|onChange|改变时的回调行数|Function|null|
|addon|从时间选择面板称为渲染一些插件在它的底部，像一个OK按钮。接收板实例作为参数|Function|-|
|placement|one of ['left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']|String|bottomLeft|
|transitionName|-|String|''|
|name|设置input的name属性|String|-|
|onOpen|打开时的回调|Function({ open })|-|
|onClose|关闭时的回调|Function({ open })|-|
|getPopupContainer|定义浮层的容器，默认为 body 上新建 div|Function|-|

## 注意事项

暂无

## 更新日志
