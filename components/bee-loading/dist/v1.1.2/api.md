# 加载提示 Loading 

加载数据时显示动效。

## 何时使用


## 如何使用

```
import { Loading } from 'tinper-bee';

or

import Loading from 'bee-loading';
import 'bee-loading/build/Loading.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:----|:----|:------|
|loadingType|类型(`rotate` `line` `custom`)|string|rotate|
|indicator|加载图标，在 `loadingType` 值为 `custom` 时有效|ReactElement|-|
|size|加载大小(`lg` `md` `sm`)|string|md|
|color|颜色(`primary` `success``warning`)|string|''|
|container|渲染到的容器，通过this可以显示在该组件的上面，也可以通过function中return一个元素来显示在指定元素上面|this或者function|默认显示在body上面|
|showBackDrop|是否显示遮罩|boolean|true|
|fullScreen|是否全屏显示，或者只传入fullScreen即可|boolean|false|
|wrapperClassName|容器样式|string|''|

## 注意事项
- bee-loading v1.0.7之后的版本将废弃 `color` API

## 更新日志