# 多选 Checkbox

从选中选择多个值

## 何时使用
代替原生checkbox

## 如何使用

```
import { Checkbox } from 'tinper-bee';

or

import Checkbox from 'bee-checkbox';
import 'bee-checkbox/build/Checkbox.css';

```

## 代码演示

## API

### Checkbox

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|className|类名|string|-|
|color|one of: `primary` `success` `info` `danger`  `warning` `dark`|string|''|
|disabled|是否可用|bool|false|
|onChange|监听改变|function|-|
|defaultChecked|默认是否选中|bool|false|
|checked|是否选中|bool|-|
|indeterminate|部分选中|bool|-|
|onDoubleClick|双击事件|function|function(checked, event){}|
|onClick|单击事件|function|function(event){}|
|value|选中的值，需配合CheckboxGroup使用|string|-|
|inverse|设置选中为红色填充|bool|false|


### CheckboxGroup

|参数|说明|类型|默认值|版本|
|:--|:---|:--|:---|:---|
|className|类名|string|-| |
|onChange|监听改变|function|-| |
|value|设置默认值|array|[]| |
|disabled|是否可用|bool|false| |
|options|指定可选项|string[] | []|2.0.7+|
|defaultValue|默认选中的选项|string[] | []|2.0.7+|

### 已支持的键盘操作

|按键|功能|
|:---|:----|
|space |选中/反选Checkbox|

## 注意事项

暂无

## 更新日志

