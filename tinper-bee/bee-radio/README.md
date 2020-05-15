# bee-radio
[![npm version](https://img.shields.io/npm/v/bee-radio.svg)](https://www.npmjs.com/package/bee-radio)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-radio/master.svg)](https://travis-ci.org/tinper-bee/bee-radio)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-radio/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-radio?branch=master)

单选.

## 使用
使用单独的bee-radio包
#### 组件引入
先进行下载bee-radio包

```
npm install --save bee-radio
```
组件调用
```js
import Radio from 'bee-radio';
RadioGroup = Radio.RadioGroup;

const RadioApp = React.createClass({
  getInitialState() {
    return {selectedValue: 'apple'};
  },

  handleChange(value) {
    this.setState({selectedValue: value});
  },

  render() {
    return (
      <RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}>
        <label>
          <Radio colors="warning" value="apple" >apple</Radio>
        </label>
        <label>
          <Radio value="orange" >Orange</Radio>
        </label>
        <label>
          <Radio value="watermelon" >Watermelon</Radio>
        </label>
      </RadioGroup>
    );
  }
});

React.render(<RadioApp />, document.getElementById('target'));

```
#### 样式引入
- 可以使用link引入dist目录下bee-radio.css
```
<link rel="stylesheet" href="./node_modules/build/bee-radio.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Radio.scss"
//或是
import "./node_modules/build/bee-radio.css"
```


## API

## Radio

|参数|说明|类型|默认值|
|---|----|---|------|
|color|one of: `primary` `success` `info` `danger`  `warning` `dark`|string|''|
|disabled|是否可用|bool|false|
| style  | 添加style | object| {} |
|className|传入列的classname|String	|-|
|inverse|设置选中为红色填充|bool|false|

## RadioButton

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|color|one of: `primary` `success` `info` `danger`  `warning` `dark`|string|-|
|size|one of: `lg` `sm`|string|-|
|disabled|是否可用|bool|false|

## RadioGroup

|参数|说明|类型|默认值|
|---|----|---|------|
|onChange|暴露在外层的触发radio是否选中的方法|func|''|
|selectedValue|被选中的radio值|string|''|
|name|radio组名|string|''|
|Children|必填，Radio子组件|node|-|

## 已支持的键盘操作

|按键|功能|
|:---|:----|
|space |选中/反选Radio|
|→(右箭)、↓(下箭) |将焦点移动到下一个Radio上，依次循环选中|
|←(左箭)、↑(上箭) |将焦点移动到上一个Radio上，依次循环选中|

#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-radio
$ cd bee-radio-group
$ npm install
$ npm run dev
```
