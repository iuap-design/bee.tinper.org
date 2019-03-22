# 图片查看器 Viewer

## 何时使用
图片查看器

## 如何使用
```
import { Viewer } from 'tinper-bee';

or

import Viewer from 'bee-viewer';
import bee-viewer/build/Viewer.css;

```

## 代码演示

## API


|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|asyncLoad|图片是否异步加载|bool|false|
|inline|启用 inline 模式|bool|false|
|button|显示右上角关闭按钮|bool|true|
|navbar|显示缩略图导航|bool|true|
|title|显示当前图片的alt属性及图片尺寸|bool|true|
|toolbar|显示工具栏|bool|true|
|tooltip|显示缩放百分比|bool|true|
|movable|图片是否可移动|bool|true|
|zoomable|图片是否可缩放|bool|true|
|rotatable|图片是否可旋转|bool|true|
|scalable|图片是否可翻转|bool|true|
|transition|使用 CSS3 过度|bool|true|
|fullscreen|播放时是否全屏|bool|true|
|keyboard|是否支持键盘|bool|true|
|interval|播放间隔，单位为毫秒|number|5000|
|zoomRatio|鼠标滚动时的缩放比例|number|0.1|
|minZoomRatio|最小缩放比例|number|0.01|
|maxZoomRatio|最大缩放比例|number|100|
|zIndex|设置图片查看器 modal 模式时的 z-index|number|2015|
|zIndexInline|设置图片查看器 inline 模式时的 z-index|number|0|
|container|设置图片查看器 modal 模式的容器，inline 模式无效|element|body|
|url|图片查看器中图片的地址|string|data-original|
|shown|图片查看器显示后的回调|func|()=>{}|
|hidden|图片查看器关闭后的回调|func|()=>{}|

## 注意事项

暂无

## 更新日志