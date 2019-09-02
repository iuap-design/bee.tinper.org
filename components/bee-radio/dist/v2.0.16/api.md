# 单选 Radio

单选框组合

## 何时使用

表单中的单选框，代替原生radio

## 如何使用

```
import { Radio } from 'tinper-bee';

or

import Radio from 'bee-radio';
import 'bee-radio/build/Radio.css';

```

## 代码演示

## API

### Radio

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|color|one of: primary/success/info/danger/warning/dark|string|-|
|disabled|是否可用|bool|false|
| style  | 添加style | object| {} |
|className|传入列的classname|String	|-|
|inverse|设置选中为红色填充|bool|false|

### RadioButton

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|color|one of: primary/success/info/danger/warning/dark|string|-|
|size|one of: lg/sm|string|-|
|disabled|是否可用|bool|false|

### RadioGroup

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|onChange|暴露在外层的触发radio是否选中的方法|func|-|
|defaultValue|默认选中的radio值|string|-|
|selectedValue|被选中的radio值|string|-|
|name|radio组名|string|''|
|Children|必填，Radio子组件|node|-|


### 已支持的键盘操作

|按键|功能|
|:---|:----|
|→(右箭)、↓(下箭) |将焦点移动到下一个Radio上，依次循环选中|
|←(左箭)、↑(上箭) |将焦点移动到上一个Radio上，依次循环选中|

## 注意事项

暂无

## 更新日志
