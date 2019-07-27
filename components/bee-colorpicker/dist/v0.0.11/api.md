# 取色板 ColorPicker

## 何时使用

提供预制色块的取色板  
[色板链接](http://tinper.org/dist/neoui/global/color.html#)

## 如何使用

```
import { ColorPicker } from 'tinper-bee';

or

import ColorPicker from 'bee-colorpicker';
import 'bee-colorpicker/build/ColorPicker.css';

```
## 代码演示

## API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|className|类名|string|-|
|value|input当前值|string|-|
|required|是否是必输项|bool|false|
|disabled|是否禁用|bool|false|
|disabledAlpha|是否禁用透明度|bool|false|
|placeholder|input中的提示信息|string|-|
|onChange|input值发生改变触发的回调|func|-|
|autoCalculate|根据选中的颜色自动计算比其 浅一色度/深一色度 的色值|func|-|
|title|自定义标题|string|-|
|cacelBtn|自定义取消按钮文字|string|-|
|confirmBtn|自定义确认按钮提示|string|-|

## 注意事项

暂无

## 更新日志