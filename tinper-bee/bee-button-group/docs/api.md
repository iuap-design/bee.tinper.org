# 按钮组 ButtonGroup

## 何时使用
按钮组组件

多个按钮组合容器

## 如何使用

```
import { ButtonGroup } from 'tinper-bee';

or

import ButtonGroup from 'bee-button-group';
import 'bee-button-group/build/ButtonGroup.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|vertical|是否垂直|boolean|false|
|justified|水平均分|boolean|false|
|block|是否充满父元素（只有垂直排列时，可使用）|boolean|false|
|className|类名|string|''|
|list|按钮信息列表（如果你不想自己写按钮，也可以写一些描述信息，自动生成按钮）|array(要有key,title,其它Button支持的props)|[]|

## 注意事项

暂无

## 更新日志