# 下拉按钮 Dropdown

以条形菜单栏和菜单栏中每个菜单项的弹出菜单窗口两部分组成，一般作为应用系统的主菜单使用。

## 何时使用
可作为下拉菜单等使用

## 如何使用

```
import { Dropdown } from 'tinper-bee';

or

import Dropdown from 'bee-dropdown';
import 'bee-dropdown/build/Dropdown.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:--|:---|:----|:---|
|transitionName|下拉显示动画|-|-|
|trigger|触发的事件数组|array|['hover']|
|placement|触发的位置|支持bottomLeft/bottomCenter/bottomRight/topLeft/topCenter/topRight|'bottomLeft'|
|overlay|要显示的菜单|element/reactComponent|-|
|animation|触发时的动画|string|-|
|overlayClassName|传递给弹出菜单的className|string|''|
|align|对齐方式|object|{}|
|overlayStyle|传递给弹出菜单的style|object|{}|
|onVisibleChange|下拉菜单显示与否的钩子函数|function|() => {}|
|showAction|显示时的钩子函数数组|array|[]|
|hideAction|隐藏时的钩子函数数组|array|[]|
|getPopupContainer|获取要添加的容器|document.body|
|getDocument|点击隐藏的document，适用于出现iframe的情况|function|document|
|disabled|是否禁用|bool|false|
|delay|延迟显示隐藏时间，单位毫秒|number|-|
|delayShow|延迟显示时间，单位毫秒|number|-|
|delayHide|延迟隐藏时间，单位毫秒|number|-|
|minOverlayWidthMatchTrigger|是否设置下拉的最小宽度|bool|true|

## 注意事项

暂无

## 更新日志