# 输入框 FormControl

用 `<FormControl>` 来代替 `<input>`, `<textarea>`


## 何时使用
代替原生 input

## 如何使用

```
import { FormControl } from 'tinper-bee';

or

import FormControl from 'bee-form-control';
import 'bee-form-control/build/FormControl.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|className|类名|string|-|
|componentClass|说明表单类型(`input`,`textarea`)|string|'input'|
|type|类型(`text`,`search`, `submit`,'checkbox',...详情http://www.w3school.com.cn/html5/att_input_type.asp)|string|'text'|
|onChange|input值发生改变触发的回调|func|-|
|debounceDelay|函数防抖时间间隔|number|-|
|onKeyDown|keydown回调|func|-|
|value|input当前值|string|-|
|defaultValue|input默认值|string|-|
|onSearch|input type="search" 回车和点击搜索按钮的回调|func|-|
|showClose|是否显示清空按钮|bool|-|
|focusSelect|设置当focus的时候是否选择内容|bool|false|

## 注意事项

暂无

## 更新日志
