# Form
## 代码演示
## API
> 参见 [rc-form](http://react-component.github.io/form/)。

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

### 校验规则
> 参见 [async-validator](https://github.com/yiminghe/async-validator)
| 参数 | 说明 | 类型 | 默认值 |
|:---|:-----|:----|:------|
| enum | 枚举类型 | string | - |
| len | 字段长度 | number | - |
| max | 最大长度 | number | - |
| message | 校验文案 | string | - |
| min | 最小长度 | number | - |
| pattern | 正则表达式校验 | RegExp | - |
| required | 是否必选 | boolean | `false` |
| transform | 校验前转换字段值 | function(value) => transformedValue:any | - |
| type | 内建校验类型，[可选项](https://github.com/yiminghe/async-validator#type) | string | 'string' |
| validator | 自定义校验（注意，callback 必须被调用） | function(rule, value, callback) | - |
| whitespace | 必选时，空格是否会被视为错误 | boolean | `false` |