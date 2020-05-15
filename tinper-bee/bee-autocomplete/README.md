# bee-auto-complete

[![npm version](https://img.shields.io/npm/v/bee-auto-complete.svg)](https://www.npmjs.com/package/bee-auto-complete)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-auto-complete/master.svg)](https://travis-ci.org/tinper-bee/bee-auto-complete)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-auto-complete/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-auto-complete?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-auto-complete.svg)](https://david-dm.org/tinper-bee/bee-auto-complete#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-auto-complete.svg?style=flat)](https://npmjs.org/package/bee-auto-complete)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-auto-complete.svg)](http://isitmaintained.com/project/tinper-bee/bee-auto-complete "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-auto-complete.svg)](http://isitmaintained.com/project/tinper-bee/bee-auto-complete "Percentage of issues still open")


react bee-auto-complete component for tinper-bee

根据用户的输入，进行自动匹配显示列表，用户可以进行按需选择自己需要的内容在输入框展示

## 使用方法

```
class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            options: ['10000(博宇)', '10001(波波)', '10002(李刚)'],
            placeholder: "查找关键字,请输入1",
            disabled: false
        }
        this.onFormChange = this.onFormChange.bind(this);
    }
    onFormChange(value) {
        this.setState({
            value: value
        })

    }
    render() {
        let { value, options, placeholder,disabled} = this.state;
        return (
            <div className="demo" style={{ "marginBottom": "90px" }}>
                <AutoComplete
                    value={value}
                    disabled={disabled}
                    options={options}
                    placeholder={placeholder}
                    onValueChange={value => this.onFormChange(value)}
                />

            </div>
        )
    }
}

```



## API
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|value|传入的输入框的值|any|-|
|options|自动匹配列表|array|[]|
|placeholder|输入框的默认提示|string|-|
|show|控制自动匹配列表的展开和隐藏|boolean|false|
|disabled|是否禁用输入框|boolean|false|
|onChange| 输入框值更改时触发的回调函数 |function|-|
|onValueChange| 输入框值更改时触发的回调函数 |function|-|
|onKeyDown| 监听input的键盘事件，调用此函数|handleKeyDown()|-|
|onBlur| input 的失去焦点时，调用此函数|function|-|
|onSelectOption| 被选中时调用，参数为选中项的 value 值|function|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-auto-complete
$ cd bee-auto-complete
$ npm install
$ npm run dev
```
