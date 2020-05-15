# 穿梭框 Transfer

两框之间的元素迁移，非常直观且有效。一个或多个元素选择后点击方向按钮转到另一列框中。左栏是“源”，右边是“目标”

## 何时使用

需要两框之间的元素迁移时

## 如何使用

```
import { Transfer } from 'tinper-bee';

or

import Transfer from 'bee-transfer';
import 'bee-transfer/build/Transfer.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|dataSource|设置数据源。当有targetKey props存在时，dataSource的数据刨去targetKey数据,剩下的都放在左边列表|[]|[]|
|render|每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 label 字段为 ReactElement，value 字段为 title|Function(record)|-|
|targetKeys|展示在右边列表的数据集|[]|[]|
|selectedKeys|所有选中的item的keys|[]|[]|
|onChange|当item在穿梭成功后的回调 参数(targetKeys, direction, moveKeys)|func|-|
|onSelectChange| 当选中的item发生改变时的回调 参数(sourceSelectedKeys, targetSelectedKeys)|fun|-|
|onScroll| 当滑动可选的item列表的回调	参数(direction, event)|func|-|
|listStyle|自定义的columns的样式表|object	|-|
|className|class|string|''|''|
|titles|两columns的title|[]|-|
|operations|自定义按钮操作|[]|'>', '<'|
|showSearch|是否显示搜索框|boolean	|false|
|filterOption|搜索过滤方法	参数(inputValue, option)|func或者boolean	|-|
|searchPlaceholder|搜索框的默认显示文字|string|'Search'|
|notFoundContent|当没有相关内容的显示内容|string或ReactNode|	'Not Found'|
|footer|渲染底部的dom|ReactNode|-|
|lazy|懒加载dom|object|当tranfer放在bee-modal里 添加参数 lazy={container:"modal"}|
|onSearchChange|当搜索域变化的回调函数 参数(direction: 'left'|'right', event: Event)|func|-|
|showCheckbox|是否显示Checkbox复选框|bool|true|
|draggable|是否可以通过拖拽进行穿梭和排序|bool|false|
|appendToBottom|是否将已选项追加到右侧列表末尾|bool|false|

## 注意事项
按照 React 的规范，所有的组件数组必须绑定 key。在 Transfer 中，dataSource里的数据值需要指定 key 值。对于 dataSource 默认将每列数据的 key 属性作为唯一的标识。

如果你的数据没有这个属性，务必使用 rowKey 来指定数据列的主键。

```
// 比如你的数据主键是 uid
return <Transfer rowKey={record => record.uid} />;
```

## 更新日志
