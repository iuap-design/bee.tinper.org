# 全键盘操作

tinper-bee 支持快捷键从 V1.6.3 开始就有部分组件支持快捷键，但之前都是零零散散的，目前 V1.6.9的版本是最稳定的版本，支持的快捷键下面将详细描述。(官方建议使用 tinper-bee 请使用 V1.6.9版本) 

## tinper-bee(V1.6.9)快捷键规范定义

| 组件名称 | 快捷键 | 快捷键描述 |
| --- | --- | --- |
| bee-select | ↑、↓、esc、enter |   ↑(上箭)、↓(下箭) 切换选项功能。 esc 关闭下拉项。enter 选中下拉框。 
| bee-datePicker | esc、delete、↓(下箭) |  esc 关闭面板。 ↓(下箭) 打开日期面板。|
| bee-modal | esc | 支持 esc 关闭。|
| bee-message | esc | 支持 esc 关闭。|
| bee-notification | esc | 支持 esc 关闭。|
| bee-tree | tab、↑、↓、←、→ |  focusable API 是否开启快捷键。 tab 进入焦点，且选中第一行。 ↑(上箭)、↓(下箭) 上一行、下一行。 ←(左箭)、→(右箭) 收起、展开。 |
| bee-table | (tab、↑、↓) |  tab 进入焦点，且选中第一行。↑(上箭)、↓(下箭) 上一行、下一行。 且提供onKeyTab、onKeyUp、onKeyDown、onTableKeyDown、tabIndex 等一系列api |
| bee-menu | (Enter、↑、↓、←、→) | Enter 确认选中行。 ↑(上箭)、↓(下箭) 上一行、下一行。 ←(左箭)、→(右箭)  |
| bee-radio | (Space、↑、↓、←、→) |  Space: 如未选中，则检查聚焦单选按钮，反之则改变选中。  →(右箭)、↓(下箭):  将焦点移动到下一个按钮上，依次循环选中。  ←(左箭)、↑(上箭):  将焦点移动到上一个按钮上，依次循环选中。 |
| bee-checkbox | Space(空格键) | 当复选框具有焦点时，Space按键会更改复选框的状态 |
| bee-timePicker | delete、esc| delete清空日期。esc关闭面板|
| bee-transfer | tab、Shift+tab、Space(空格键)、esc、↑、↓、←、→| tab从前向后选择拖拽目标。Shift+tab从后向前选择拖拽目标。Space(空格键)选择/取消选择。↑、↓、←、→开始拖拽穿梭动作。esc取消拖动|

> 部分快捷键需要参考该组件的示例。

## 快捷键示例操作说明

1. 【bee-table】 鼠标焦点进入到input中，按tab 切换焦点，进入到table的焦点中，且默认选中第一行，按下 ↓(下箭)  选中下一条、↑(上箭) 选中上一条

2. 【bee-tree】 按tab 焦点进入到tree示例中，按下 ↑(上箭)、↓(下箭) 上一行、下一行。 ←(左箭)、→(右箭) 收起。
  
3. 【bee-datepicker】 鼠标焦点进入到input中，按tab 切换焦点，当焦点在输入框中，按下 ↓(下箭) 即可 打开日期面板。esc 即可关闭面板

## 示例点击

[参考链接](https://tinper-acs.github.io/ac-keyboard-example/index.html) 


## 自定义组件键盘操作解决方案

这里推荐使用组件库 [react-hot-keys](https://github.com/jaywcjlove/react-hotkeys)

## 问题反馈

[反馈地址](https://github.com/iuap-design/tinper-bee/issues)

