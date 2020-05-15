# 自动完成 AutoComplete
根据用户的输入，进行自动匹配显示列表，用户可以进行按需选择自己需要的内容

## 何时使用

需要根据用户输入，匹配内容。例如：联想搜索框

## 如何使用

```
import { AutoComplete } from 'tinper-bee';

or

import AutoComplete from 'bee-autocomplete';
import 'bee-autocomplete/build/AutoComplete.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|value|传入的输入框的值|any|-|
|options|自动匹配列表|array|[]|
|placeholder|输入框的默认提示|string|-|
|show|控制自动匹配列表的展开和隐藏|boolean|false|
|disabled|是否禁用输入框|boolean|false|
|onChange| 输入框值更改时触发的回调函数，参数为 value 值 |function|-|
|onValueChange| 输入框值更改时触发的回调函数 |function|-|
|onKeyDown| 监听input的键盘事件，调用此函数|handleKeyDown()|-|
|onBlur| input 的失去焦点时，调用此函数，参数为 value 值|function|-|
|onSelectOption| 被选中时调用，参数为选中项的 value 值|function|-|

## 注意事项

暂无

## 更新日志