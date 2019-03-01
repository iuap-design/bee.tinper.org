## ref-multiple-table 表格参照

> 华新丽华专项表格参照

## 代码演示
```sh
$ npm install ref-multiple-table@walsin --save
```

```javascript
/**
 *
 * @title ref-multiple-table 复杂查询表格参照
 * @description 复杂查询表格参照
 *
 */
import React, { Component } from 'react';
import RefMultipleTableWithInput from 'ref-multiple-table';
import 'ref-multiple-table/dist/index.css';
import Form from "bee-form";


const option = {
    title: '复杂表格参照',
    backdrop: true,
    disabled: false,
    multiple: true,
    strictMode: true,
    param:{//url请求参数
        refCode:'neworganizition_grid'
    },
    refModelUrl:{
         tableBodyUrl:'/pap_basedoc/common-ref/blobRefTreeGrid',//表体请求
            refInfo:'/pap_basedoc/common-ref/refInfo',//表头请求
    },
    matchUrl: '/pap_basedoc/common-ref/matchPKRefJSON',
    filterUrl: '/pap_basedoc/common-ref/filterRefJSON',
    valueField: "refpk",
    displayField: "{refname}-{refcode}",
    fliterColumn: [{
        dataIndex: "code",
        filterDropdown: "show",
        filterDropdownType: "string",
        filterType: "text",
        filterDropdownIncludeKeys: ['LIKE', 'ULIKE', 'EQ']
    },{
        dataIndex: "name",
        filterDropdown: "show",
        filterDropdownType: "string",
        filterType: "text",
        filterDropdownIncludeKeys: ['LIKE', 'ULIKE', 'EQ']
    },{
        dataIndex: "level",
        filterDropdown: "show",
        filterDropdownType: "string",
        filterType: "dropdown",
        filterDropdownIncludeKeys: ['LIKE', 'ULIKE', 'EQ']
    }]
    
}
class Demo1 extends Component {
    render () {
        const { getFieldError, getFieldProps } = this.props.form;
        return (
            <div className="demoPadding">
                <RefMultipleTableWithInput
                    {...option}
                    {...getFieldProps('valueField', {
                        initialValue:'{\"refname\":\"高级-T3\",\"refpk\":\"level5\"}',
                        rules:[{
                            message: '请输入姓名',
                            pattern: /[^{"refname":"","refpk":""}]/
                        }]
                    })}
                /> 

                <span className='error'>
                    {getFieldError('valueField')}
                </span>

                <button onClick={() => {
                    this.props.form.validateFields((err, values) => {
                        console.log(err, values)
                    });
                }}>submit</button>
                <button onClick={() => {
                    this.props.form.resetFields();
                }}>resetFields</button>
            </div>
        )
    }
}

export default Form.createForm()(Demo1);

 /> 
```

## 表格参照分类为下列四种

### RefMultipleTable
    
      参照弹出窗，没有输入框，使用时可根据自己需要定义具体的文本框。

### RefMultipleTableWithInput
    
    带文本框的参照弹出窗。在 RefMultipleTable 基础上封装实现。

### createRefMultipleTableModal
    
    非 ReactJS 调用方式，与 RefMultipleTable 相同没有输入框，使用时可根据自己需要定义具体的文本框。

### createRefMultipleTable
   
    非ReactJS调用方式，与RefMultipleTableWithInput相同

## API

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
title |``string``|空 |打开上传的模态框显示的标题文字 | 否
className |`string`|空 | 参照class样式，作用于弹出层的样式，默认为空。 | 否
<span style="color:red;">*</span> strictMode|`bool`|false |严格模式，此配置项为业务优化使用，当为 true（启用） 时每次打开弹出层都会刷新数据，若不启用时第一次数据加载正常且部为第一页数据时不再刷新数据 | 否
multiple |`bool`| false |是否单选， true 多选，false 单选， 同时多选时不会有确认和取消按钮，多选时会出现复选框 | 否
backdrop |`bool`| true |弹出层是否有模态层，true 显示，false 不显示 | 否
param|`object`| {} |refModelUrl 中接口请求的参数 | 否
refModelUrl |`object`|{tableBodyUrl:'',refInfo:''} |弹出层数据接口地址，为了兼容其他参照保留了多连接配置。<br/>如：<br/>{ <br/>tableBodyUrl:'blobRefTreeGrid',//表体请求<br />tableBarUrl:'refInfo',//表头请求<br />} | 是
matchUrl| ``string``|空|查询并校验 value 中的 refpk 对应参照的详细记录。|否
filterUrl| ``string``|空|快捷录入接口。|否
<s>fliterColumn| ``array``|空|<s>行内筛选配置的筛选项，无则没有，详情请查看参数详解</s>|否</s>
lang|`string`| `zh_TW` |多语配置，详情查看参数详解 | 否
buttons|`object`| - |{buttons:{cancelText:'',confirmText:'',okText:''}} 按钮文字展示| 否
emptyBut| `bool` | false| 清空按钮是否展示 |否
onSave |`function( record:object )`|-- |保存回调函数，返回已选择的记录详细数据。 | 否
onCancel  |`function()` | -- | 关闭弹出层 | 否
jsonp| `bool` | false | refInfo和matchUrl的request请求传参jsonp| 否
headers| -- | -- | refInfo、tableBodyUrl和matchUrl的request请求传参headers| 否
onMatchInitValue| `function(data)` | -- | 返回matchUrl请求的全部数据|否
onAfterAjax| `function(data)`| -- |tableBodyUrl请求后的回调，返回全部数据| 否
miniSearch| `Boolean`|true|默认是简单搜索|否
size|`String`|'lg'|modal的size|否
onClear|`function`|-|复杂搜索清空操作回调|否
onSearch|`function`|-|复杂搜索搜索操作回调，返回搜索values|否





## RefTreeTableWithInput 增量 API
<span style="color: red; font-size: 15px;">注意:以下参数为 `<RefTreeTableWithInput/>`独有。对其他两个类型的引用无效。</span>

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
displayField |<code>string 或 function</code>|'{refname}' |记录中显示的键。<br/>当为字符串时则会根据`{}`包裹的增则匹配替换。<br/>如：`'人员姓名：{refname}，编号：{refcode}'`<br/>当为函数时则需自定义返回内容，参数为迭代已选择的记录。<br/>如：<br/>displayField: (record)=>  ${record.refname}-${record.refname}| 否
valueField |``string``|'refcode' |待提交的 value 的键。 | 否
value| ``string``|空|默认值，例如 `'{"refname":"初级-T1","refpk":"level1"}'`。|否
disabled|`bool`| false |禁用整个参照 | 否
wrapClassName|`string`|空 | 文本框的class样，默认为空。 | 否
placeholder|`string`| 空 |文本框的 placeholder | 否
style| `object`| {width:200}| 文本框的style，默认宽度200px | 否 
onChange|`function(values, record)`|--|value改变、快捷录入和保存时数据回调|否
canClickGoOn|`function()`| ()=>{return true}|当点击文本框右侧弹出按钮时是否打开modal<br>适用于级联情况下当选择不全时的处理| 否 
canInputGoOn|`function()`| ()=>{return true}|当点击文本框触发快捷录入时是否可以录入<br>适用于级联情况下当选择不全时的处理| 否 


## 参数详解

```js
eg:
   此次分页符为强制分页符，同时只有一页数据的时候不会显示。
   
   //行内删选配置 详情请查阅 http://bee.tinper.org/bee-table#bee-table 中“组合过滤和其他功能使用”
   fliterColumn: [{
        dataIndex: "type",
        filterDropdown: "show",
        filterDropdownType: "string",
        filterType: "text",
        filterDropdownIncludeKeys: ['LIKE', 'ULIKE', 'EQ']
    },{
        dataIndex: "level",
        filterDropdown: "show",
        filterDropdownType: "string",
        filterType: "dropdown",
        filterDropdownIncludeKeys: ['LIKE', 'ULIKE', 'EQ']
    }]

    lang:
      "zh_CN" // 中文
      "en_US" // 英文
      "zh_TW" // 繁体中文
      "fr_FR" // 法文
      "de_DE" // 德文
      "ja_JP" // 日文
```
## 示例
```javascript
   
```

## 开发调试

```sh

$ cd 

ac-refer/packages/ref-multiple-table

$ npm install

$ npm run dev

```

