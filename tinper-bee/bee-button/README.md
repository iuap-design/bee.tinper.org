# button

[![npm version](https://img.shields.io/npm/v/bee-button.svg)](https://www.npmjs.com/package/bee-button)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-button/master.svg)](https://travis-ci.org/tinper-bee/bee-button)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-button/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-button?branch=master)


react button component for tinper-bee

可定制的按钮组件

## 使用

### 使用单独的button包
#### 组件引入
先进行下载bee-button包
```
npm install --save bee-button
```
组件调用
```js
import Button from 'bee-button';
ReactDOM.render(
        <Button type="primary" size="lg" style={{color: '#000'}}>Button</Button>
        , document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入build目录下Button.css
```
<link rel="stylesheet" href="./node_modules/bee-button/build/Button.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-button/src/Button.scss"
//或是
import "./node_modules/bee-button/build/Button.css"
```




## API

|参数|说明|类型|默认值|
|:---|:----:|:---:|------:|
|size|按钮大小(`lg` `xg` `md` `sm`)|string|-|
|colors|颜色(primary/secondary/accent/success/info/warning/danger/dark/light/default)|string|''|
|shape|形状(block/border/round/squared/floating/pillRight/pillLeft/icon)|string|''|
|disabled|是否禁用(`disabled` 或 `true` `false`)|boolean|false|
|bordered|是否是边框型(`bordered` 或 `true` `false`)|boolean|false|
|className|增加额外的class|string|''|
|htmlType|html dom 的 type 属性(`submit` `button` `reset`)|string|button|
|style|style 属性|object|''|

#### setup develop environment

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-button
$ cd bee-button
$ npm install
$ npm run dev
```
