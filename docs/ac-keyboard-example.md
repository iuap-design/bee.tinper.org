## 全键盘操作

## tinper-bee(v1.6.8)快捷键APi

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

> 部分快捷键需要参考该组件的示例。

## 示例

## 代码演示

## 自定义组件键盘操作解决方案

这里推荐使用组件库 [react-hot-keys](https://github.com/jaywcjlove/react-hotkeys)

## [问题反馈](https://github.com/iuap-design/tinper-bee/issues)

