# colorpicker

[![npm version](https://img.shields.io/npm/v/bee-colorpicker.svg)](https://www.npmjs.com/package/bee-colorpicker)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-colorpicker/master.svg)](https://travis-ci.org/tinper-bee/bee-colorpicker)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-colorpicker/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-colorpicker?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-colorpicker.svg)](https://david-dm.org/tinper-bee/bee-colorpicker#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-colorpicker.svg?style=flat)](https://npmjs.org/package/bee-colorpicker)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-colorpicker.svg)](http://isitmaintained.com/project/tinper-bee/bee-colorpicker "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-colorpicker.svg)](http://isitmaintained.com/project/tinper-bee/bee-colorpicker "Percentage of issues still open")


react colorpicker component for tinper-bee

可定制的取色板组件

## 使用

### 使用单独的colorpicker包
#### 组件引入
先进行下载bee-colorpicker包
```
npm install --save bee-colorpicker
```
组件调用
```js
import ColorPicker from 'bee-colorpicker';
ReactDOM.render(
        <ColorPicker label="颜色" />
        , document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入build目录下ColorPicker.css
```
<link rel="stylesheet" href="./node_modules/bee-colorpicker/build/ColorPicker.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-colorpicker/src/ColorPicker.scss"
//或是
import "./node_modules/bee-colorpicker/build/ColorPicker.css"
```


## API
|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|className|类名|string|-|
|value|input当前值|string|-|
|required|是否是必输项|bool|false|
|disabled|是否禁用|bool|false|
|disabledAlpha|是否禁用透明度|bool|false|
|placeholder|input中的提示信息|string|-|
|onChange|input值发生改变触发的回调|func|-|
|autoCalculate|根据选中的颜色自动计算比其 浅一色度/深一色度 的色值|func|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-colorpicker
$ cd bee-colorpicker
$ npm install
$ npm run dev
```
