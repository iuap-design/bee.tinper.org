## Loading 加载组件

加载数据时显示动效。

## 代码演示

### API

|参数|说明|类型|默认值|
|:---|:----|:----|:------|
|loadingType|类型(`rotate` `line`)|string|rotate|
|size|加载大小(`large` `medium` `small`)|string|medium|
|color|颜色(`primary` `success``warning`)|string|''|
|container|渲染到的容器，通过this可以显示在该组件的上面，也可以通过function中return一个元素来显示在指定元素上面|this或者function|默认显示在body上面|
|showBackDrop|是否显示遮罩|boolean|true|
|fullScreen|是否全屏显示，或者只传入fullScreen即可|boolean|false|
|wrapperClassName|容器样式|string|''|
 