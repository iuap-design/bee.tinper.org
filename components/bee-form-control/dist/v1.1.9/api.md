## FormControl

用 `<FormControl>` 来代替 `<input>`, `<textarea>`

## 代码演示

### API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|className|类名|string|-|
|componentClass|说明表单类型(`input`,`textarea`)|string|'input'|
|type|类型(`text`,`search`, `submit`,'checkbox',...详情http://www.w3school.com.cn/html5/att_input_type.asp)|string|'text'|
|onChange|input值发生改变触发的回调|func|-|
|value|input当前值|string|-|
|defaultValue|input默认值|string|-|
|onSearch|input type="search" 回车和点击搜索按钮的回调|func|-|
|showClose|是否显示清空按钮|bool|-|
|focusSelect|设置当focus的时候是否选择内容|bool|false|