# 表单 Form

基于 [rc-form](http://react-component.github.io/form/)。

## 何时使用
需要校验表单数据，提交表单数据时

## 如何使用

```
import { Form } from 'tinper-bee';

or

import Form from 'bee-form';
import 'bee-form/build/Form.css';

```

表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。

这里我们封装了表单域 <Form.FormItem/> 。

```
const FormItem = Form.FormItem;

<FormItem  {...props}>{children}</FormItem>
```

## 代码演示

## API


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

## 注意事项

- 同一个表单中，表单元素不能设置相同的name
- 使用 `getFieldProps` 后，不能使用 ref 。 可以使用 ` this.props.form.getFieldInstance('ref') `


## 更新日志