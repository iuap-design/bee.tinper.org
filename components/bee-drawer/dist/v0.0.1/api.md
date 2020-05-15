# Drawer

react的抽屉组件，可以从上下左右这些侧面弹出一个层，显示特定的内容

## 何时使用

例如：弹出列表中一项的信息

## 如何使用

```
import { Drawer } from 'tinper-bee';

or

import Drawer from 'bee-drawer';
import bee-drawer/build/Drawer.css;

```

## 代码演示


## API

Parameter | Type |Default| Description
--------- | ---- | ------|-----------
show | `string` | | 是否显示抽屉组件
placement | `string` | `right` | 抽屉的位置。有四个预置的选项: `left`,`right`,`top`,`bottom`
hasHeader | `boolean` | `true` | 是否显示抽屉的头部
title | `string` |  |  抽屉的头部的标题
className | `string` | | 抽屉容器的class, 用来自定义组件样式
showMask | `boolean` | `true` | 是否显示遮罩
maskClosable | `boolean` | `false` |  点击遮罩是否可以关闭抽屉
zIndex | `number` | `100000` | 抽屉容器的层级，可以修改层级
showClose | `boolean`  | `false` | 是否显示关闭按钮
width | `number` `string` |  | 抽屉的宽度
height | `number` `string` |  | 抽屉的高度
destroyOnClose | `boolean` |  | 关闭时候是否销毁抽屉的内容


## 注意事项

暂无

## 更新日志


