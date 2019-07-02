# bee-form

[![npm version](https://img.shields.io/npm/v/bee-form.svg)](https://www.npmjs.com/package/bee-form)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-form/master.svg)](https://travis-ci.org/tinper-bee/bee-form)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-form/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-form?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-form.svg)](https://david-dm.org/tinper-bee/bee-form#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-form.svg?style=flat)](https://npmjs.org/package/bee-form)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-form.svg)](http://isitmaintained.com/project/tinper-bee/bee-form "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-form.svg)](http://isitmaintained.com/project/tinper-bee/bee-form "Percentage of issues still open")


react bee-form component for tinper-bee



## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```
/**
 *
 * @title 基本form校验
 * @description 登录示例
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src';
import FormControl from 'bee-form-control';
import Label from 'bee-label';
import Button from 'bee-button';
const FormItem = Form.FormItem;

class Demo2 extends Component {

    submit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
            } else {
                console.log('提交成功', values)
            }
        });
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="demo2">
                <Form >
                    <FormItem>
                        <Label>用户名：</Label>
                        <FormControl placeholder="请输入用户名"
                            {...getFieldProps('username', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true, message: '请输入用户名',
                                }],
                            }) }
                        />
                        <span className='error'>
                            {getFieldError('username')}
                        </span>
                    </FormItem>
                    <FormItem>
                        <Label>密码：</Label>
                        <FormControl placeholder="请输入密码" type='password'
                            {...getFieldProps('password', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true, message: '请输入密码',
                                }],
                            }) }
                        />
                        <span className='error'>
                            {getFieldError('password')}
                        </span>
                    </FormItem>
                    <div className='submit'>
                        <Button colors="primary" className="login" onClick={this.submit}>登陆</Button>
                        <Button shape="border" className="reset">取消</Button>
                    </div>
                </Form>
            </div>
        )
    }
}
export default Form.createForm()(Demo2);
```



## API

# Form

## 代码演示

## API

> 基于 [rc-form](http://react-component.github.io/form/)。

### 使用注意，写在最前面

- 同一个表单中，表单元素不能设置相同的name
- 使用 `getFieldProps` 后，不能使用 ref 。 可以使用 ` this.props.form.getFieldInstance('ref') `

### Form 

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|form|经过`Form.createForm`包装后的组件，都带有`this.props.form`属性|Object|-|
|prefixCls|类名前缀|String|u-form|
|className|类名|String|-|
|onSubmit|提交事件|Function|-|
|style|样式|Object|-|


### FormItem 

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|prefixCls|类名前缀|String|u-form|
|className|类名|String|-|
|style|样式|Object|-|


### this.props.form 

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|getFieldProps|配置受控表单元素，经过此方法包装的表单元素才可以使用`this.props.form`中的其它方法，此表单元素需要有`onChange`方法，并且`onChange`回调的第一个值为此表单元素当前值|-|-|
|getFieldDecorator|类似`getFieldProps`|-|-|
|getFieldsValue([fieldNames: String[]])|根据`name`获取多个表单元素的值|-|-|
|getFieldValue(fieldName: String)|根据`name`获取单个表单元素的值|-|-|
|getFieldInstance(fieldName: String)|根据`name`获取表单元素|-|-|
|setFieldsValue(obj: Object)|根据`name`设置多个表单元素的值|-|-|
|setFieldsInitialValue(obj: Object)|根据`name`设置多个表单元素的默认值|-|-|
|setFields(obj: Object)|根据`name`设置多个表单元素的属性|-|-|
|validateFields([fieldNames: String[]], [options: Object], callback: (errors, values) => void)|校验表单。options.force(bool):是否校验已经校验过的字段;|-|-|
|getFieldsError(names)|获取多个表单元素的错误信息|-|-|
|getFieldError(name)|获取单个表单元素的错误信息|-|-|
|isFieldValidating(name: String)|单个表单元素是否正在校验|-|-|
|isFieldsValidating(names: String[])|多个表单元素是否正在校验|-|-|
|isFieldTouched(names: String[])|单个表单元素的值是否已经被用户更改|-|-|
|isFieldsValidating(names: String[])|多个表单元素的值是否已经被用户更改|-|-|
|resetFields([names: String[]])|重置表单|-|-|
|isSubmitting()|表单是否正在提交|-|-|
|submit(callback: Function)|表单正在提交返回true，callback执行后返回false|-|-|

#### getFieldProps(name, option): Object { [valuePropName], [trigger], [validateTrigger] }

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|name|设置表单元素name，不可以重复|String|-|
|option.valuePropName|设置表单元素取值的属性|String|value|
|option.getValueProps|根据表单元素属性获得值|function|(value)=>({value})|
|option.getValueFromEvent|根据表单元素方法获得值|function|(value)=>({value})|
|option.normalize|格式化值|function|-|
|option.trigger|侦听以收集表单数据的事件|String|'onChange'|
|option.initialValue|设置默认值|any|-|
|option.validateTrigger|设置校验时机|String|onChange|
|option.rules|设置校验规则|Object|-|
|option.validateFirst|当第一个校验失败时候是否阻止校验下一个校验规则|boolean|false|
|option.hidden|是否在验证时忽略当前字段|boolean|false|
|option.onChange|代替组件上的onChange方法|function|-|

#### getFieldDecorator(name:String, option: Object) => (React.Node) => React.Node

与 `getFieldProps` 作用类似。 例如

```
<Form>

  {getFieldDecorator('name', otherOptions)(<FormControl />)}

</Form>

```


#### rules 常用

参考 [async-validator](https://github.com/yiminghe/async-validator)

| 参数 | 说明 | 类型 | 默认值 |
|:---|:-----|:----|:------|
| required | 是否必选 | boolean | `false` |
| type | 内建校验类型(string字符串/number数字/boolean布尔/method函数/integer整数/float带小数点的数字/array数组[使用Array.isArray判断]/object对象且不是array/enum枚举/date日期/url链接/email邮箱)， | string | 'string' |
| pattern | 正则表达式校验 | RegExp | - |
| min/max | 使用min和max属性定义范围。对于字符串和数组类型与长度进行比较，对于数字类型，数字不能小于min也不能大于max | - | - |
| len | 若要验证字段的确切长度，请指定len属性。对于长度属性执行字符串和数组类型比较，对于数字类型，此属性指示数字的精确匹配，即，它只能严格等于len。如果len属性与min和max范围属性组合，len优先。 | - | - |
| enum | 值为枚举类型中的一个。 例如：`rules:[{type: "enum", enum: ['admin', 'user', 'guest']}]` | - | - |
| transform | 校验前转换字段值 | function(value) => transformedValue:any | - |
| validator | 自定义校验（注意，callback 必须被调用） | function(rule, value, callback) | - |
| whitespace | 通常将仅包含空格的所需字段视为错误。若要为仅由空格组成的字符串添加额外的测试，值设置为true的规则添加空格属性。规则必须是字符串类型。 | boolean | `false` |
| fields | 如果需要验证深对象属性，可以通过向规则的字段属性分配嵌套规则来验证对象或数组类型的验证规则。 | Object | - |




### createForm(option: Object) => (WrappedComponent: React.Component) => React.Component

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|option.validateMessages|`async-validator`的预制消息|-|-|
|option.onFieldsChange|表单元素更改的回调，参数:(props, changed, all)|function|-|
|option.onValuesChange|表单元素值更改的回调，参数:(props, changed, all)|function|-|
|option.mapProps|将新的属性转义到WrappedComponent上|function|props => props|
|option.mapPropsToFields|将新的值从属性转义到表单元素上|function|-|
|option.fieldNameProp|设置存取 `getFieldProps` 名称的store|string|-|
|option.fieldMetaProp|设置存取 `getFieldProps` 原数据的store|string|-|
|option.fieldDataProp|设置存取 `getFieldProps` 数据的store|string|-|
|option.withRef(deprecated)|是否为包装组件实例维护ref，使用refs.wrappedComponent进行访问|boolean|false|


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-form
$ cd bee-form
$ npm install
$ npm run dev
```
