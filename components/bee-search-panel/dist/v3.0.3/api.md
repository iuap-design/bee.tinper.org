# 查询面板 SearchPanel

查询面板组件

## 何时使用

例如：表格数据筛选条件时

## 如何使用

```
import { SearchPanel } from 'tinper-bee';

or

import SearchPanel from 'bee-search-panel';
import 'bee-search-panel/build/SearchPanel.css';

```
## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|isExpandedBtn|是否显示展开按钮|boolean|true|
|defaultExpanded|展开和收起的默认状态|boolean|false|
|expanded|是否默认展开|boolean|false|
|onSearch|点击查询的回调|function|-|
|onReset|点击查询的回调|function|-|
|title|查询面板标题|string|'默认筛选'|
|onPanelChangeStart|显示或隐藏开始回调|function|-|
|onPanelChangeIng|显示或隐藏进行中回调|function|-|
|onPanelChangeEnd|显示或隐藏结束回调|function|-|
|onChange|点击显示或隐藏回调|function|-|
|showOperation|是否显示 查询，清空操作按钮|bool|true|
|locale|多语言设置|object|-|

## 注意事项

暂无

## 更新日志