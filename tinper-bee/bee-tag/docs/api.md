# 标签 Tag

标签组件是一种进行标记和分类的小标签。

## 何时使用

需要对事物的属性和维度进行标记或者进行分类的时使用。

## 如何使用

```
import { Tag } from 'tinper-bee';

or

import Tag from 'bee-tag';
import Tag/build/Tag.css;

```

## 代码演示


## API

|参数|说明|类型|默认值|
|:---|:----:|:---:|------:|
|colors|颜色(dark/light/success/warning/primary/message/danger)|string|''|
|disabled|是否禁用(`disabled` 或 `true` `false`)|boolean|false|
|bordered|是否为边框类型(`bordered` 或 `true` `false`)|boolean|false|
|deleted|是否可以删除(`deleted` 或 `true` `false`)|boolean|false|
|visible|标签是否显示关闭图标(`visible` 或 `true` `false`)|boolean|false|
|onClose|标签删除时的回调|(e) => void|-|
|select|是否可以选择(`select` 或 `true` `false`)|boolean|false|
|className|增加额外的class|string|''|
|style|style 属性|object|''|

## 注意事项

暂无

## 更新日志