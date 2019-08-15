# 数字框 InputNumber

数字输入框

## 何时使用

代替原生 `input type='number'`

## 如何使用

```
import { InputNumber } from 'tinper-bee';

or

import InputNumber from 'bee-input-number';
import 'bee-input-number/build/InputNumber.css';

```
## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|className|类名|string|-|
|onChange|值改变的回调函数|function|-|
|max|最大值|number|-|
|min|最小值|number|-|
|step|间隔值|number|1|
|value|默认值|number|0|
|format|显示内容的格式化|function|-|
|precision|显示精度。如要输入小数，此属性必须设置|number|显示小数点后面的位数|
|delay|当持续按住增减按钮式，变换的速度（毫秒）|number|300|
|disabled|是否可编辑|string|-|
|toNumber|onChange回调内的值是否转换为number类型。当正在输入小数点或者小数点后第一位为0时，不能转换为number类型|bool|false|
|toThousands|是否显示千分符|bool|false|
|split|InputNumberGroup自定义分隔符|node|~|


## 注意事项

暂无

## 更新日志