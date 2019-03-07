## ref-combobox combobox参照

> 华新丽华专项combobox参照

## 代码演示
```sh
$ npm install ref-combobox@walsin --save
```

```javascript

/**
 *
 * @title 应用组件名称
 * @description 应用组件描述
 *
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from "bee-form";
import RefComboBox, {ComboStore,ComboItem} from 'ref-combobox';
import Button from 'bee-button';
import Icon from 'bee-icon';
class Demo1 extends Component {
    render () {
        
        const { getFieldError, getFieldProps } = this.props.form;
        return (
            <div className="demoPadding">
                <RefComboBox 
                    displayField={'{refname}-{refcode}'}
                    valueField={'refpk'}
                    onClickItem={(record) =>{
                        console.log(record)
                    }}
                    filterUrl = '/pap_basedoc/common-ref/filterRefJSON'
                    {...getFieldProps('valueField', {
                         initialValue:'{"refpk":"level1","refname":"初级"}',  //M0000000000002
                    })}
                    
                >
                    <ComboStore 
                        ajax = {{
                            url: '/pap_basedoc/common-ref/blobRefTreeGrid',
                            params: {
                                refCode:'neworganizition_grid'
                            },
                            
                        }}
                        strictMode = {true}
                        displayField={(record)=>{
                            return <div > <Icon type="uf-personin-o" style={{color: 'red'}}/> {record.refname}-{record.refcode}-{record.type}</div>
                        }}
                    />
                </RefComboBox>
                <Button 
                    colors="primary"
                    onClick={() => {
                        this.props.form.validateFields((err, values) => {
                            console.log(err, values)
                        });
                    }}>
                    submit
                </Button>
            </div>
        )
    }
}


export default Form.createForm()(Demo1);


```

## combobox参照内容

### RefComboBox
    
      带有输入框，下拉选择参照数据

### ComboStore
    
    可走缓存数据的下拉

### ComboItem
    
    下拉的单条数据

## API

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
className |`string`|空 | 参照class样式，作用于整个参照的样式，默认为空。 | 否
style| `object`|{} | 参照style样式，作用域整个参照最外层|否
displayField |<code>string 或 function</code>|'{refname}' |记录中显示的键。<br/>当为字符串时则会根据`{}`包裹的增则匹配替换。<br/>如：`'人员姓名：{refname}，编号：{refcode}'`<br/>当为函数时则需自定义返回内容，参数为迭代已选择的记录。<br/>如：<br/>displayField: (record)=>  ${record.refname}-${record.refname}| 否
valueField |`string`|'refcode' |待提交的 value 的键。 | 否
value| `string` | ''|输入框展示的值| 否
<s>filterUrl</s>| `string` | -- | 过滤url | 否
onClickItem | `function(record)`| -- | 下拉选中，返回缓存的数据对应的完整| 否
onChange| `function(record)`| -- | 下拉选中，返回选中数据的value字段| 否
sliderWidth|`number`或者`String`| 'auto'| 下拉菜单的宽度|否



## ComboStore 增量 API
><span style="color: red; font-size: 15px;">注意:以下参数为 `<ComboStore/>`独有。对其他两个类型的引用无效。</span>

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
ajax| `object` | | ajax={url:'',param:{}}|否
<span style="color:red;">*</span> strictMode|`bool`|false |严格模式，此配置项为业务优化使用，当为 true（启用） 时每次打开弹出层都会刷新数据，若不启用时第一次数据加载正常且部为第一页数据时不再刷新数据 | 否



## 参数详解

```js

```
## 示例
```javascript
   
```

## 开发调试

```sh

$ cd 

ac-refer/packages/ref-combobox

$ npm install

$ npm run dev

```

