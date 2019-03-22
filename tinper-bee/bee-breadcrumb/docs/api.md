# 面包屑 Breadcrumb

`Breadcrumb` 常用来指定当前页面位置，添加类`active`类激活Breadcrumb.Item.不要同时设置`active`和`href`,设置了`active`会将子元素渲染成`span`,覆盖`a`.

## 何时使用
例如：使用面包屑作为导航标题

## 如何使用

```
import { Breadcrumb } from 'tinper-bee';

or

import Breadcrumb from 'bee-breadcrumb';
import bee-breadcrumb/build/Breadcrumb.css;

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|active|如果设置成true,渲染成span而不是a|bool|false|
|href|给内部a标签设置的属性|string|''|
|title|给内部a标签设置的属性|string|''|

## 注意事项

暂无

## 更新日志




