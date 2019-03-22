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

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
| show| 是否显示抽屉组件 | `string` | 
| placement| 抽屉的位置。有四个预置的选项: `left`,`right`,`top`,`bottom` | `string` | `right` | 
| hasHeader| 是否显示抽屉的头部 | `boolean` | `true` | 
| title|  抽屉的头部的标题 | `string` | - |  
| className| 抽屉容器的class, 用来自定义组件样式 | `string` | 
| showMask| 是否显示遮罩 | `boolean` | `true` | 
| maskClosable|  点击遮罩是否可以关闭抽屉 | `boolean` | `false` | 
| zIndex| 抽屉容器的层级，可以修改层级 | `number` | `100000` | 
| showClose| 是否显示关闭按钮 | `boolean`  | `false` | 
| width | 抽屉的宽度| `number` `string` | - | 
| height| 抽屉的高度 | `number` `string` | - | 
| destroyOnClose| 关闭时候是否销毁抽屉的内容 | `boolean` |  


## 注意事项

暂无

## 更新日志


