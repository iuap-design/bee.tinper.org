# bee-input-number

[![npm version](https://img.shields.io/npm/v/bee-input-number.svg)](https://www.npmjs.com/package/bee-input-number)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-input-number/master.svg)](https://travis-ci.org/tinper-bee/bee-input-number)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-input-number/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-input-number?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-input-number.svg)](https://david-dm.org/tinper-bee/bee-input-number#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-input-number.svg?style=flat)](https://npmjs.org/package/bee-input-number)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-input-number.svg)](http://isitmaintained.com/project/tinper-bee/bee-input-number "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-input-number.svg)](http://isitmaintained.com/project/tinper-bee/bee-input-number "Percentage of issues still open")

## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


react bee-input-number component for tinper-bee


组织所有form元素的集合地


## 使用
使用单独的bee-input-number包
#### 组件引入
先进行下载bee-input-number包

```
npm install --save bee-input-number
```
组件调用
```js

React.render(
	<InputNumber/>
, document.getElementById('target'));

```
#### 样式引入
- 可以使用link引入dist目录下bee-form.css
```
<link rel="stylesheet" href="./node_modules/build/bee-input-number.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/InputNumber.scss"
//或是
import "./node_modules/build/bee-input-number.css"
```



## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|className|类名|string|-|
|max|最大值|number|-|
|min|最小值|number|-|
|step|间隔值|number|1|
|value|默认值|number|0|
|format|显示内容的格式化|function|-|
|precision|显示精度。如要输入小数，此属性必须设置|number|显示小数点后面的位数|
|delay|当持续按住增减按钮式，变换的速度（毫秒）|number|300|
|disabled|是否可编辑|string|-|
|toNumber|回调内的值是否转换为number类型。当正在输入小数点或者小数点后第一位为0时，不能转换为number类型|bool|true|
|toThousands|是否显示千分符|bool|false|


#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-form
$ cd bee-form
$ npm install
$ npm run dev
```
