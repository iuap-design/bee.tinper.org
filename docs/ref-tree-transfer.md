# ref-tree-transfer树穿梭参照
>具有单选多选的树穿梭参照
## 代码演示

```shell
$ ynpm install ref-tree-transfer --save
或
$ ynpm install @yonyou/ref-tree-transfer --save
```
```javascript

/**
 *
 * @title ref-treetransfer树穿梭参照
 * @description 具有单选多选的树穿梭参照
 *
 */

/**
 *
 * @title ref-treetransfer树穿梭参照
 * @description 具有单选多选的树穿梭参照
 *
 */

import React, { Component } from 'react';
import RefTreeTransferWithInput, { RefTreeTransfer, createRefTreeTransfer } from 'ref-tree-transfer;
import Form from "bee-form";

const option = {
    title: '穿梭',
    textOption: {
        leftTitle: '树',
        rightTitle: '表',
        leftTransferText: '',
        rightTransferText: '',

    },
    param: {//url请求参数
        refCode: 'test_treeTable',//test_common||test_grid||test_tree||test_treeTable
        tenantId: 'xxx',
        sysId: 'xxx',
        locale: 'en_US',
        refModelUrl: 'http://workbench.yyuap.com/ref/rest/testref_ctr/',
    },
    refModelUrl: {
        treeUrl: 'https://mock.yonyoucloud.com/mock/358/blobRefTree',
        tableBodyUrl: 'https://mock.yonyoucloud.com/mock/358/blobRefTreeGrid',
        tableBodyUrlSearch: ''
    },
    jsonp: true,
    hearders: {},
    displayField: '{refname}-{refcode}',//显示内容的键
    valueField: 'refcode',//真实 value 的键
    onCancel: function (p) {
        console.log(p)
    },
    onSave: function (sels) {
        console.log(sels);
    }
}
class Demo1 extends Component {
    render() {
        const { getFieldError, getFieldProps } = this.props.form;
        return (
            <div className="demoPadding">
                <RefTreeTransferWithInput {...option}
                    {...getFieldProps('valueField', {
                        initialValue: '{"refname":"李传忠-li","refpk":"li"}',
                        rules: [{
                            message: '请输入姓名',
                            pattern: /[^{"refname":"","refpk":""}]/
                        }]
                    })
                    }
                    // className='ref-walsin-modal'
                    emptyBut={false}
                />
                <span className='error'>
                    {getFieldError('valueField')}
                </span>
                <button onClick={() => {
                    this.props.form.validateFields((err, values) => {
                        console.log(err, values)
                    });
                }}>submit</button>
            </div>
        )
    }
}

export default Form.createForm()(Demo1);

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
className |`string`|空 | 参照class样式，作用于弹出层和 RefTreeTransferWithInput 输入框的样式，默认为空。 | 否
searchable |`bool`|true |是否显示搜索框，弹出层是否带有搜索框，true 显示，false 不显示。 | 否
emptyBtn |`bool`|true |是否显示清空按钮，true 显示，false 不显示 | 否
multiple |`bool`| false |是否单选， true 单选，false 多选 | 否
backdrop |`bool`| true |弹出层是否有模态层，true 显示，false 不显示 | 否
buttons |`object`| `okText`: "确认", //确认按钮<br/>`cancelText`: "取消", //取消按钮<br/>`clearText`: "清空已选" //清空已选按钮|弹出层工具栏三个按钮的文字，若 bottomButton 为 false 则该配置无效。| 否
bottomButton |`bool`|true | 是否显示弹出层下边框工具栏， false true 显示`注意该属性为临时兼容配置后期可能随时会弃用` | 否
textOption | `object` | -- | 左边树和右边处穿梭框的标题<br /> 如：<br />{<br />    leftTitle:'树',<br />    rightTitle:'穿梭框',<br />leftTransferText:'左侧穿梭框上标题',<br/>rightTransferText:'右侧穿梭框上标题'}| 否
hasPage |`bool`|true |是否有分页条，true 有，false 没有 | 否
tabData |`array`|true |当参照有多个类型的数据时可启用tab标签页来区分，当个点击页签的时候，会根据配置的key再去查询。如：<br />[<br />{"title":"常用","key":"commonUse"},<br /> {"title":"全部","key":"total"},<br />{"title":"推荐","key":"recommed"}<br />] | 否
defaultExpandAll |`bool`|false |展开所有节点 true 展开，false 不展开 | 否
checkStrictly |`bool`|false|heckable状态下节点选择完全受控（父子节点选中状态不再关联）, false 关联选择，true 不关联| 否
param |`objecet`|{} |接口请求参数 | 是
refModelUrl |`object`|{tableBodyUrl:'',treeUrl:''，tableBodyUrlSearch:''} |弹出层数据接口地址，为了兼容其他参照保留了多连接配置。<br/>如：<br/>{ <br/>treeUrl: '/api/user/blobRefTreeTransfer.json',<br/>tableBodyUrl:'blobRefTreeTransferGrid',//表体请求<br />tableBodyUrlSearch:'blobRefTreeTransferGrid',//搜索时表体请求} | 是
onSave |`function( record:object )`|-- |保存回调函数，返回已选择的记录详细数据。 | 否
onCancel `|function(  )`|-- |关闭弹出层 | 否
jsonp| `bool` | false | treeUrl、tableBodyUrl和tableBodyUrlSearch的request请求传参jsonp| 否
headers| -- | -- | matchUrl的request请求传参headers| 否
onMatchInitValue| `function(data)` | -- | 返回matchUrl请求的全部数据|否
onAfterAjax| `function(data)`| -- |treeUrl请求后的回调，返回全部数据| 否
defaultSelectNode| `object` | -- |已选的树节点并以此进行tableBodyUrl请求|否
isHasSearch| `bool` | false|穿梭框是否有搜索框 |否

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

defaultSelectNode:
//需要组装出详细记录，但只要保证 displayField 和 valueField 所标记的字段存在即可， 如：

{ "refpk": "857c41b","refcode": "wujd", "refname": "吴惊道" },
{ "refpk": "65c2c42", "refcode": "ms", "refname": "马帅" }

```

$ cd 

ac-refer/packages/ref-treetransfer

$ npm install

$ npm run dev
