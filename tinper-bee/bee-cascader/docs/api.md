# 级联菜单 Cascader

级联选择框。

## 何时使用
- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。

- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。

- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## 如何使用

```
import { Cascader } from 'tinper-bee';

or

import Cascader from 'bee-cascader';
import 'bee-cascader/build/Cascader.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|placeholder	|input提示信息|	string	|""|
|options	|下拉列表数据	|json|	必填，无默认值|
|defaultValue|默认的选中项|	string[]|[]|
|changeOnSelect|当此项为 true 时，点选每级菜单选项值都会发生变化|	boolean|false|
|disabled|禁用|	boolean|false|
|expandTrigger|次级菜单的展开方式，可选 'click' 和 'hover'|	string|'click'|
|size|输入框大小，可选 lg md sm|	string|'md'|
|onChange   |选择完成后的回调| Function(value, selectedOptions)|	-|
|onClick	|选中节点的钩子函数，返回array选中的节点| function |	-|

## 注意事项

暂无

## 更新日志