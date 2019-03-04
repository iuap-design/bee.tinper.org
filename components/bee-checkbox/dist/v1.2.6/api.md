## Checkbox

从选中选择多个值

## 代码演示

### API

## Checkbox

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


## CheckboxGroup

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|className|类名|string|-|
|onChange|监听改变|function|-|
|value|设置默认值|array|[]|
