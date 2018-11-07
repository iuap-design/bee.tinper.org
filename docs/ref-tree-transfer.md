# ref-treetransfer树穿梭参照


## 代码演示

```
$ ynpm install @yonyou/ref-treetransfer --save

引入

import {RefTreeTransfer, RefTreeTransferWithInput, createRefTreeTransfer} from '@yonyou/ref-treetransfer';

```


## 树形参照分类为下列三种

### RefTreeTransfer
    
    参照弹出窗，没有输入框，使用时可根据自己需要定义具体的文本框。

### RefTreeTransferWithInput
    
    带文本框的参照弹出窗。在 RefTreeTransfer 基础上封装实现。

### createRefTreeTransfer
    
    非 ReactJS 调用方式，与 RefTreeTransfer 相同没有输入框，使用时可根据自己需要定义具体的文本框。


## API

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
title |``string``|空 |打开上传的模态框显示的标题文字 | 否
className |`string`|空 | 参照class样式，作用于弹出层和 RefMultipleSelectionWithInput 输入框的样式，默认为空。 | 否
searchable |`bool`|true |是否显示搜索框，弹出层是否带有搜索框，true 显示，false 不显示。 | 否
emptyBtn |`bool`|true |是否显示清空按钮，true 显示，false 不显示 | 否
multiple |`bool`| false |是否单选， true 单选，false 多选 | 否
backdrop |`bool`| true |弹出层是否有模态层，true 显示，false 不显示 | 否
buttons |`object`| `okText`: "确认", //确认按钮<br/>`cancelText`: "取消", //取消按钮<br/>`clearText`: "清空已选" //清空已选按钮|弹出层工具栏三个按钮的文字，若 bottomButton 为 true 则该配置无效。| 否
bottomButton |`bool`|true | 是否显示弹出层下边框工具栏， false true 显示`注意该属性为临时兼容配置后期可能随时会弃用` | 否
textOption | `object` | -- | 左边树和右边处穿梭框的标题<br /> 如：<br />{<br />    leftTitle:'树',<br />    rightTitle:'穿梭框'<br />}| 否
hasPage |`bool`|true |是否有分页条，true 有，false 没有 | 否
tabData |`array`|true |当参照有多个类型的数据时可启用tab标签页来区分，当个点击页签的时候，会根据配置的key再去查询。如：<br />[<br />{"title":"常用","key":"commonUse"},<br /> {"title":"全部","key":"total"},<br />{"title":"推荐","key":"recommed"}<br />] | 否
defaultExpandAll |`bool`|false |展开所有节点 true 展开，false 不展开 | 否
checkStrictly |`bool`|false|heckable状态下节点选择完全受控（父子节点选中状态不再关联）, false 关联选择，true 不关联| 否
param |`objecet`|{} |接口请求参数 | 是
refModelUrl |`object`|{tableBodyUrl:'',tableBarUrl:''} |弹出层数据接口地址，为了兼容其他参照保留了多连接配置。<br/>如：<br/>{ <br/>treeUrl: '/api/user/blobRefTreeTransfer.json',<br/>tableBodyUrl:'blobRefTreeTransferGrid',//表体请求<br />tableBarUrl:'refInfo',//表头请求<br />} | 是
onSave |`function( record:object )`|-- |保存回调函数，返回已选择的记录详细数据。 | 否
onCancel `|function(  )`|-- |关闭弹出层 | 否

## RefTreeTransferWithInput 增量 API
><span style="color: red; font-size: 15px;">注意:以下参数为 `<RefTreeTransferWithInput/>`独有。对其他两个类型的引用无效。</span>

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
displayField |<code>string 或 function</code>|'{refname}' |记录中显示的键。<br/>当为字符串时则会根据`{}`包裹的增则匹配替换。<br/>如：`'人员姓名：{refname}，编号：{refcode}'`<br/>当为函数时则需自定义返回内容，参数为迭代已选择的记录。<br/>如：<br/>displayField: (record)=>  ${record.refname}-${record.refname}| 否
valueField |``string``|'refcode' |待提交的 value 的键。 | 否
checkedArray|`array`|[]|已选的数据详细记录，此配置为本地配置不做缓存不做服务器校验。与 keyList 互斥，优先级高于 keyList。<br/>如：参考参数详解|否
keyList| `array`|[]| 已选的数据的 pk 列表，配合 filterRef 参数使用，用于获取列表中pk的名。因此若使用该配置必须设置 filterRef 。 与 checkedArray 互斥，优先级低于 checkedArray。| 否
filterRef| ``string``|空|查询 keyList 中的 pk 对应参照的详细记录。因此若使用该配置必须设置 keyList ，如果没有 keyList 则该配置无效|否
rules|`array`|[]|表单校验规则，参考 rc-from，或使用的 from 组件具体的校验规则写法。`如： rules：[{required: true, message: '请选择该引用',}]|否
form|`form：object`|{}|当前表单的 form 对象。|否

## 参数详解

```js
eg:

checkedArray:
[
    { "refpk": "857c41b7-e1a3-11e5-aa70-0242ac11001d","refcode": "wujd", "refname": "吴惊道" },
    { "refpk": "65c2c424-e1a3-11e5-aa70-0242ac11003d", "refcode": "ms", "refname": "马帅" }
]

```

## 开发调试

```sh

$ cd 

ac-refer/packages/ref-treetransfer

$ npm install

$ npm run dev
