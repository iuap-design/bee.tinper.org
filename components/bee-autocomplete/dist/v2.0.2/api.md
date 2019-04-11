# 自动完成 Autocomplete
根据用户的输入，进行自动匹配显示列表，用户可以进行按需选择自己需要的内容

## 何时使用

需要根据用户输入，匹配内容。例如：联想搜索框

## 如何使用

```
import { Autocomplete } from 'tinper-bee';

or

import Autocomplete from 'bee-autocomplete';
import bee-autocomplete/build/Autocomplete.css;

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|value|传入的输入框的值|any|-|
|options|自动匹配列表|array|[]|
|placeholder|输入框的默认提示|string|-|
|show|控制自动匹配列表的展开和隐藏|boolean|false|
|onChange| input 的 value 变化时，调用此函数|function|-|
|onKeyDown| 监听input的键盘事件，调用此函数|handleKeyDown()|-|
|onBlur| input 的失去焦点时，调用此函数|function|-|
|onSelectOption| 被选中时调用，参数为选中项的 value 值|function|-|

## 注意事项

暂无

## 更新日志