## ref-tree 参照-树形

>华新丽华专项树形参照

## 代码演示
```sh
$ npm install ref-tree@walsin --save
```

```javascript

import RefTreeWithInput, {RefTree, createRefTree} from 'ref-tree';

    <RefTreeWithInput 
            title={'部门'}
            multiple={false}
            searchable= {true}
            param= { {
                    "refCode":"newdept",
            }}
            checkStrictly={true}
            displayField='{refname}'
            valueField='refpk'
            refModelUrl= {{
                treeUrl: '/blobRefTree', //树请求
            }}
            matchUrl='/matchPKRefJSON'
            filterUrl='/filterRefJSON'
            {...getFieldProps('valueField', {
                initialValue:'{\"refname\":\"高级-T3\",\"refpk\":\"level5\"}',
                rules:[{
                    message: '请输入姓名',
                    pattern: /[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/
                }]
            })}
        >
```


## 树形参照分类为下列三种

### RefTree
    
    参照弹出窗，没有输入框，使用时可根据自己需要定义具体的文本框。

### RefTreeWithInput
    
    带文本框的参照弹出窗。在 RefTree 基础上封装实现。

### createRefTree
    
    非 ReactJS 调用方式，与 RefTree 相同没有输入框，使用时可根据自己需要定义具体的文本框。

## API

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
title |``string``|空 |打开上传的模态框显示的标题文字 | 否
className |`string`|空 | 参照class样式，作用于弹出层的样式，默认为空。 | 否
<span style="color:red;">*</span> strictMode|`bool`|false |严格模式，此配置项为业务优化使用，当为 true（启用） 时每次打开弹出层都会刷新数据，若不启用时第一次数据加载正常且部为第一页数据时不再刷新数据 | 否
multiple |`bool`| false |是否单选， true 多选，false 单选， 同时多选时不会有确认和取消按钮，多选时会出现复选框 | 否
backdrop |`bool`| true |弹出层是否有模态层，true 显示，false 不显示 | 否
param|`object`| {} |refModelUrl 中接口请求的参数 | 否
searchable |`bool`|true |是否显示搜索框，弹出层是否带有搜索框，true 显示，false 不显示。 | 否
defaultExpandAll |`bool`|false |展开所有节点 true 展开，false 不展开 | 否
checkStrictly |`bool`|false|heckable状态下节点选择完全受控（父子节点选中状态不再关联）, false 关联选择，true 不关联| 否
refModelUrl |`object`|{treeUrl:''} |弹出层数据接口地址，为了兼容其他参照保留了多连接配置。| 是
matchUrl| ``string``|空|查询并校验 value 中的 refpk 对应参照的详细记录。|否
filterUrl| ``string``|空|快捷录入接口。|否
lang|`string`| `zh_TW` |多语配置，详情查看参数详解 | 否
onSave |`function( record:object )`|-- |保存回调函数，返回已选择的记录详细数据。 | 否
onCancel `|function(  )`|-- |关闭弹出层 | 否


## RefTreeWithInput 增量 API
><span style="color: red; font-size: 15px;">注意:以下参数为 `<RefTreeWithInput/>`独有。对其他两个类型的引用无效。</span>

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
displayField |<code>string 或 function</code>|'{refname}' |记录中显示的键。<br/>当为字符串时则会根据`{}`包裹的增则匹配替换。<br/>如：`'人员姓名：{refname}，编号：{refcode}'`<br/>当为函数时则需自定义返回内容，参数为迭代已选择的记录。<br/>如：<br/>displayField: (record)=>  ${record.refname}-${record.refname}| 否
valueField |``string``|'refcode' |待提交的 value 的键。 | 否
value| ``string``|空|默认值，例如 `'{"refname":"初级-T1","refpk":"level1"}'`。|否
disabled|`bool`| false |禁用参照 | 否
wrapClassName|`string`|空 | 文本框的class样，默认为空。 | 否
placeholder|`string`| 空 |文本框的 placeholder | 否
## 参数详解

```js
eg:


    refModelUrl:{
    // treeUrl 为 ref-tree 的数据来源。
        treeUrl: 'http://workbench.yyuap.com/ref/rest/iref_ctr/commonRefsearch'
    }
    lang:
      "zh_CN" // 中文
      "en_US" // 英文
      "zh_TW" // 繁体中文
      "fr_FR" // 法文
      "de_DE" // 德文
      "ja_JP" // 日文
```

## 开发调试

```sh

$ cd 

ac-refer/packages/ref-tree

$ npm install

$ npm run dev

```
