# ref-tree-table树表参照

>具有单选多选的树表形参照

## 代码演示

```sh

$ npm install ref-tree-table --save
或
$ ynpm install @yonyou/ref-tree-table --save

引入

import RefTreeTableWithInput,{RefTreeTable, createRefTreeTable,createRefTreeTableModal} from 'ref-tree-table';
或
import RefTreeTableWithInput,{RefTreeTable, createRefTreeTable,createRefTreeTableModal} from '@yonyou/ref-tree-table';

```

```javascirpt
/**
 *
 * @title ref-tree-table树表参照
 * @description 具有单选多选的树表形参照
 *
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RefTreeTableWithInput from 'ref-tree-table';
import Button from 'bee-button';
import 'bee-button/build/Button.css'
import Form from "bee-form";

class Demo1 extends Component {
    constructor() {
        super();
        this.state = {
            value: '' 
        }

    }
    render() {

        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <div className="demo-label">
                    <span >组织人员：</span>
                    <RefTreeTableWithInput
                        title='组织部门人员'
                        textOption={{
                            menuTitle: '组织',
                            tableTitle: '人员',
                        }}
                        param={{//url请求参数
                            refCode: 'neworgdeptstaff_treegrid',
                        }}
                        multiple={true}
                        refModelUrl={{
                            treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                            refInfo: '/pap_basedoc/common-ref/refInfo',//表头请求
                            tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',//表体请求
                        }}
                        matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
                        filterUrl='/pap_basedoc/common-ref/filterRefJSON'
                        displayField='{refname}'
                        valueField='refpk'
                        lang={this.props.lang}
                        {...getFieldProps('code', {
                            initialValue: '{"refname":"","refpk":""}',
                            rules: [{
                                message: '提示：请选择',
                                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                            }]
                        })}
                    />
                    <span style={{
                        color: 'red'
                    }}>
                        {
                            getFieldError('code')
                        }
                    </span>
                </div>
            </div>
        )
    }
};

export default Form.createForm()(Demo1);



```


## 树形参照分类为下列三种

### RefTreeTable
    
    参照弹出窗，没有输入框，使用时可根据自己需要定义具体的文本框。

### RefTreeTableWithInput
    
    带文本框的参照弹出窗。在 RefTreeTable 基础上封装实现。

### createRefTreeTable
    
    非 ReactJS 调用方式，与 RefTreeTable 相同没有输入框，使用时可根据自己需要定义具体的文本框。

### createRefTreeTableModal

    非 ReactJS 调用方式，与  RefTreeTableWithInput 相同带文本框的参照弹出窗。

## API

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
title |``string``|空 |打开上传的模态框显示的标题文字 | 否
className |`string`|空 | 参照class样式，作用于弹出层和 RefTreeTableWithInput 输入框的样式，默认为空。 | 否
searchable |`bool`|true |是否显示搜索框，弹出层是否带有搜索框，true 显示，false 不显示。 | 否
multiple |`bool`| false |是否单选， true 单选，false 多选 | 否
backdrop |`bool`| true |弹出层是否有模态层，true 显示，false 不显示 | 否
lang|`string`| `zh_TW` |多语配置，详情查看参数详解 | 否
buttons |`object`| `okText`: "确认", //确认按钮<br/>`cancelText`: "取消", //取消按钮<br/>`clearText`: "清空已选" //清空已选按钮|弹出层工具栏三个按钮的文字，若 
hasPage |`bool`|true |是否有分页条，true 有，false 没有 | 否
tabData |`array`|true |当参照有多个类型的数据时可启用tab标签页来区分，当个点击页签的时候，会根据配置的key再去查询。如：<br />[<br />{"title":"常用","key":"commonUse"},<br /> {"title":"全部","key":"total"},<br />{"title":"推荐","key":"recommed"}<br />] | 否
defaultExpandAll |`bool`|false |展开所有节点 true 展开，false 不展开 | 否
checkStrictly |`bool`|false|heckable状态下节点选择完全受控（父子节点选中状态不再关联）, false 关联选择，true 不关联| 否
param |`objecet`|{} |接口请求参数 | 是
refModelUrl |`object`|{treeUrl:'',tableBodyUrl:'',refInfo:'',保留了多连接配置。<br/>如：<br/>{ <br/> treeUrl: '/api/user/treeUrl.json',<br/>tableBodyUrl:'blobRefTreeTableGrid',//表体请求<br />refInfo:'refInfo',//表头请求<br />} | 是
onSave |`function( record:object )`|-- |保存回调函数，返回已选择的记录详细数据。 | 否
onCancel | `function(  )`|-- |关闭弹出层 | 否
jsonp| `bool` | false | treeUrl、tableBodyUrl、refInfo、matchUrl的request请求传参jsonp| 否
onAfterAjax| `function(data)`| -- |treeUrl和tableBodyUrl请求后的回调，返回全部数据| 否
onTreeLoading | `function(state)` | --|回调函数，三种结果'loaded'、'loading'、'fail',表示树的请求三种状态|否
menuTitle | `String` | ''| 左树的标题| 否
tableTitle | `String` | '' | 右表的标题 | 否
nodeDisplay |<code>string 或 function</code>| `{refname}` |节点渲染时可匹配的内容，这里为了提供根据数据渲染节点图标使用 | 否
lazyModal |`bool`| false |数据懒加载模式，true 启用，false 不启用 | 否
param|`object`| {} |refModelUrl 中接口请求的参数 | 否
searchable |`bool`|true |是否显示搜索框，弹出层是否带有搜索框，true 显示，false 不显示。 | 否
defaultExpandAll |`bool`|false |展开所有节点 true 展开，false 不展开。前提lazyModal是true| 否
onChange| `function(checkedArray)`| -- | 左树选中回调函数| 否
checkAllChildren| `boolean`| false|选中子节点|否
<s>emptyBut|`bool`|true |是否显示清空按钮，true 显示，false 不显示、sebottomButton 为 false 则该配置无效。| 否 </s>
<s> bottomButton |`bool`|true | 是否显示弹出层下边框工具栏， false不显示 true 显示`注意该属性为临时兼容配置后期可能随时会弃用` | 否 </s>
miniSearch(右表)| `Boolean`|true|左表默认是简单搜索|否
matchUrl（右表）| ``string``|空|查询并校验 value 中的 refpk 对应参照的详细记录。|否
headers(右表)| -- | -- | refInfo、tableBodyUrl和matchUrl的request请求传参headers| 否
onMatchInitValue(右表)| `function(data)` | -- | 返回matchUrl请求的全部数据|否

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

checkedArray:
//需要组装出详细记录，但只要保证 displayField 和 valueField 所标记的字段存在即可， 如：
[
    { "refpk": "857c41b","refcode": "wujd", "refname": "吴惊道" },
    { "refpk": "65c2c42", "refcode": "ms", "refname": "马帅" }
]
```

## 开发调试

```sh

$ cd 

ac-refer/packages/ref-tree-table

$ npm install

$ npm run dev

```