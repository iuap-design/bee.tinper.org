# Table

表格是以结构化的方式来展示大量的信息最佳方法，使信息更易于阅读与理解。
表格轻易就能用简洁和易读的方式来组织数据。它们可用于保存和展示大量的数据，小量的信息，静态数据以及不断地变动的数据。


## 引入机制

import Table from "bee-table";
import 'bee-table/build/Table.css';


## API

### Table

| 参数                     | 说明                                       | 类型                                     | 默认值             |
| :--------------------- | :--------------------------------------- | :------------------------------------- | :-------------- |
| data                   | 传入的表格数据（key值必需，否则会导致部分功能出现问题。建议使用唯一的值，如id）   | array                                  | []              |
| bordered                | 是否展示外边框和列边框                            | boolean                                  | false               |
| columns                | 列的配置表，具体配置见下表                            | array                                  | -               |
| defaultExpandAllRows   | 默认是否展开所有行                                | bool                                   | false           |
| expandedRowKeys        | 展开的行，控制属性                                | array                                  | -               |
| defaultExpandedRowKeys | 初始扩展行键                                   | array                                  | []              |
| useFixedHeader         | 是否使用固定表头                                 | bool                                   | false           |
| bodyStyle              | 添加到tablebody上的style                      | object                                 | {}              |
| style                  | 添加到table上的style                          | object                                 | {}              |
| rowKey                 | 如果rowKey是字符串，`record [rowKey]`将被用作键。如果rowKey是function，`rowKey（record, index）`的返回值将被用作键。 | string or Function(record, index):string      | 'key'           |
| rowClassName           | 获取行的classname                            | Function(record, index, indent):string | () => ''        |
| expandedRowClassName   | 获取展开行的className                          | Function(recode, index, indent):string | () => ''        |
| onExpand               | 展开行时的钩子函数                                | Function(expanded, record)             | () => ''        |
| onExpandedRowsChange   | 函数在扩展行更改时调用                              | Function(expandedRows)                 | () => ''        |
| indentSize             | indentSize为每个级别的data.i.children，更好地使用column.width指定 | number                                 | 15              |
| onRowClick             | 行的点击事件钩子函数                               | Function(record, index, event)         | () => ''        |
| onRowDoubleClick       | 行的双击事件钩子函数                               | Function(record, index, event)         | () => ''        |
| expandIconAsCell       | 是否将expandIcon作为单元格                       | bool                                   | false           |
| expandIconColumnIndex  | expandIcon的索引，当expandIconAsCell为false时，将插入哪个列 | number                                 | 0               |
| showHeader             | 是否显示表头                                   | bool                                   | true            |
| title                  | 表格标题                                     | Function                               | -               |
| footer                 | 表格尾部                                     | Function                               | -               |
| emptyText              | 无数据时显示的内容                                | Function                               | () => 'No Data' |
| scroll                 | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：{ x: true, y: 300 } | object                                 | {}              |
| rowRef                 | 获取行的ref                                  | Function(record, index, indent):string | () => null      |
| getBodyWrapper         | 添加对table body的包装                         | Function(body)                         | body => body    |
| expandedRowRender      | 额外的展开行                                   | Function(record, index, indent):node | -               |
| expandIconAsCell      | 展开按钮是否单独作为一个单元格                                   | bool                               | false               |
| expandRowByClick       | 设置展开行是否通过点击行触发，此参数需要与上面参数搭配使用（默认是通过点击行前面的加号展开行 | bool                                   | false           |
| footerScroll       | 表尾和body是否公用同一个横向滚动条。（ 如果footer中也是一个table组件，并且也具有滚动条，那么也需要加入footerScroll参数。 ） | bool                                   | false           |
| loading       | 表格是否加载中 | bool|object(详情可以参考上面示例)                                   | false           |
| haveExpandIcon       | 控制是否显示行展开icon.**注：该参数只有在和expandedRowRender同时使用才生效** | Function(record, index):bool   | () =>false |


*注意: data参数中的key值必需，否则会导致部分功能出现问题！建议使用唯一的值，如id*


### Column

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|key|列的键|string|-|
|className|传入列的classname|String	|-|
|colSpan|该列的colSpan，设置列合并|Number|-|
|title|列的标题|node|-|
|dataIndex|	显示数据记录的字段|String|-|
|width|宽度的特定比例根据列的宽度计算|String/Number|-|
|fixed|	当表水平滚动时，此列将被固定：true或'left'或'right'| true/'left'/'right'|-|
|render|cell的render函数有三个参数：这个单元格的文本，这行的记录，这行的索引，它返回一个对象：{children：value，props：{colSpan：1，rowSpan：1}} ==>'children'是这个单元格的文本，props是这个单元格的一些设置，可以设置单元格行/列合并|-|
|onCellClick|单击列的单元格时调用|Function(row, event)|-|
| order | 设置排序 | string（"descend"、"ascend"） | -|

{% include "mixin.md"%}


{% include "rendertype.md"%}


### 使用注意

- 如果使用了固定列，请给固定的列设定固定宽度既width属性。

- 在使用expandedRowRender属性扩展表格时，如果同时使用了固定列。
需要给expandedRowRender中返回的对象添加`style=\{{height: xxx}\}`,来使扩展后的固定列扩展成一样高度。

