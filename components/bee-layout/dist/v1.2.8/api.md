# 栅格布局 Layout 

## 何时使用
协助进行页面级整体布局。

## 如何使用

```
import { Col, Row } from 'tinper-bee';

or

import { Col, Row } from 'bee-layout';
import 'bee-layout/build/Layout.css';

```
通过基础的 12 分栏，迅速简便地创建布局。

## 代码演示

## API

### Row组件

|参数|说明|类型|默认值|
|:--|:----|:---|:----|
|componentClass|组件根元素|element/ReactElement|div|

### Col组件

|参数|说明|类型|默认值|
|:--|:----|:---|:----|
|xs|移动设备显示列数(<768px)|number|-|
|sm|小屏幕桌面设备显示列数(≥768px)|number|-|
|md|中等屏幕设备显示列数(≥992px)|number|-|
|lg|大屏幕设备显示列数(≥1200px)|number|-|
|xsPull|移动屏幕设备到右边距列数|number|-|
|smPull|小屏幕设备到右边距列数|number|-|
|mdPull|中等屏幕设备到右边距列数|number|-|
|lgPull|大屏幕设备到右边距列数|number|-|
|xsPush|移动屏幕设备到左边距列数|number|-|
|smPush|小屏幕设备到左边距列数|number|-|
|mdPush|中等屏幕设备到左边距列数|number|-|
|lgPush|大屏幕设备到左边距列数|number|-|
|xsOffset|移动设备偏移列数|number|-|
|smOffset|小屏幕设备偏移列数|number|-|
|mdOffset|中等屏幕设备偏移列数|number|-|
|lgOffset|大屏幕设备偏移列数|number|-|
|componentClass|组件根元素|element/ReactElement|div|

以上列数设置，只能设置1-12的数字。

## 注意事项

暂无

## 更新日志
