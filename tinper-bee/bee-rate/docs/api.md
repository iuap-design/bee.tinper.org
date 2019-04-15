# 评分 Rate
评分组件

## 何时使用
例如：对产品的评价评分

## 如何使用

```
import { Rate } from 'tinper-bee';

or

import Rate from 'bee-rate';
import 'bee-rate/build/Rate.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:---:|:--:|---:|
|count|star总数|`number`|5|
|value|当前数，受控值|`number`|-|
|defaultValue|默认值|`number`|0|
|onChange|选择时的回调|`function`|-|
|onHoverChange|鼠标经过时数值变化的回调|`function`|-|
|allowHalf|是否允许半选|`boolean`|false|
|disabled|只读，无法进行交互|`boolean`|false|
|character|自定义字符|`ReactNode`/`string`|<Icon type="uf-star" />|
|className|自定义样式类名|`string`|-|
|style|	自定义样式对象|`object`|-|

## 注意事项

暂无

## 更新日志