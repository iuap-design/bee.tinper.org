
## 代码演示

```
$ npm install ref-multiple-selection --save
或
$ ynpm install @yonyou/ref-multiple-selection --save

引入

import {RefMultipleSelectionWithInput} from 'ref-multiple-selection';
或
import {RefMultipleSelectionWithInput} from '@yonyou/ref-multiple-selection';

```



## 类型说明

### RefMultipleSelection
    
    参照弹出窗，没有输入框，使用时可根据自己需要定义具体的文本框。

### RefMultipleSelectionWithInput
    
    带文本框的参照弹出窗。在 RefMultipleSelection 基础上封装实现。

### createRefMultipleSelection
    
   非 ReactJS 调用方式，与 RefMultipleSelection 相同没有输入框，使用时可根据自己需要定义具体的文本框。


## API

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
title |``string``|空 |打开上传的模态框显示的标题文字 | 否
className |`string`|空 | 参照class样式，作用于弹出层和 RefMultipleSelectionWithInput 输入框的样式，默认为空。 | 否
searchable |`bool`|true |是否显示搜索框，弹出层是否带有搜索框，true 显示，false 不显示。 | 否
emptyBtn |`bool`|true |是否显示清空按钮，true 显示，false 不显示 | 否
multiple |`bool`| false |是否单选， true 单选，false 多选 | 否
backdrop |`bool`| true |弹出层是否有模态层，true 显示，false 不显示 | 否
buttons |`object`| `okText`: "确认", //确认按钮<br/>`cancelText`: "取消", //取消按钮<br/>`clearText`: "清空已选" //清空已选按钮|弹出层工具栏三个按钮的文字，若 bottomButton 为  false 则该配置无效。| 否
bottomButton |`bool`|true | 是否显示弹出层下边框工具栏， false true 显示`注意该属性为临时兼容配置后期可能随时会弃用` | 否
param |`objecet`|{} |接口请求参数 | 是
refModelUrl |`object`|{gridUrl: ''} |弹出层数据接口地址，为了兼容其他参照保留了多连接配置。 | 是
onSave |`function( record:object )`|-- |保存回调函数，返回已选择的记录详细数据。 | 否
onCancel `|function(  )`|-- |关闭弹出层 | 否


## RefMultipleSelectionWithInput 增量 API
><span style="color: red; font-size: 15px;">注意:以下参数为 <code>`<RefMultipleSelectionWithInput/>`</code> 独有。对其他两个类型的引用无效。</span>

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
displayField |<code>string 或 function</code>|'{refname}' |记录中显示的键。<br/>当为字符串时则会根据`{}`包裹的增则匹配替换。<br/>如：`'人员姓名：{refname}，编号：{refcode}'`<br/>当为函数时则需自定义返回内容，参数为迭代已选择的记录。<br/>如：<br/>displayField: (record)=>  ${record.refname}-${record.refname}| 否
valueField |``string``|'refcode' |待提交的 value 的键。 | 否
checkedArray|`array`|[]|已选的数据详细记录，此配置为本地配置不做缓存不做服务器校验。`|否
matchUrl| ``string``|空|查询并校验 checkedArray 中的 valueField 对应参照的详细记录。|否
rules|`array`|[]|表单校验规则，参考 rc-from，或使用的 from 组件具体的校验规则写法。`如： rules：[{required: true, message: '请选择该引用',}]|否
form|`form：object`|{}|当前表单的 form 对象。|否.

## 参数详解

```js
eg:

checkedArray:
//需要组装出详细记录，但只要保证 displayField 和 valueField 所标记的字段存在即可， 如：
[
    { "refpk": "857c41b","refcode": "wujd", "refname": "吴惊道" },
    { "refpk": "65c2c42", "refcode": "ms", "refname": "马帅" }
]

refModelUrl:{
// gridUrl 为 ref-multiple-selection 的数据来源。
    gridUrl: 'http://workbench.yyuap.com/ref/rest/iref_ctr/commonRefsearch'
}
```


## 开发调试

```sh

$ cd 

ac-refer/packages/ref-multiple-selection

$ npm install

$ npm run dev

```
