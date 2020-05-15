# bee-button-group

[![npm version](https://img.shields.io/npm/v/bee-button-group.svg)](https://www.npmjs.com/package/bee-button-group)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-button-group/master.svg)](https://travis-ci.org/tinper-bee/bee-button-group)

[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-button-group/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-button-group?branch=master)



react bee-button-group component for tinper-bee

可组合按钮的组合组件



## 使用

### 使用单独的bee-button-group包
#### 组件引入
先进行下载bee-button-group包
```
npm install --save bee-button-group
```
组件调用
```js
import ButtonGroup from 'bee-button-group';
import Button from 'bee-button';
ReactDOM.render(
    <ButtonGroup vertical>
        <Button size="lg" type="primary">按钮一</Button>
        <Button size="lg" type="primary">按钮二</Button>
        <Button size="lg" type="primary">按钮三</Button>
    </ButtonGroup>
    , document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下ButtonGroup.css
```
<link rel="stylesheet" href="./node_modules/build/bee-button-group.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/ButtonGroup.scss"
//或是
import "./node_modules/build/bee-button-group.css"
```

### 使用tinper-bee组件库
(tinper-bee组件库使用方法)[]



## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|vertical|是否垂直|boolean|false|
|justified|水平均分|boolean|false|
|block|是否充满父元素（只有垂直排列时，可使用）|boolean|false|
|className|类名|string|''|
|list|按钮信息列表（如果你不想自己写按钮，也可以写一些描述信息，自动生成按钮）|array(要有key,title,其它Button支持的props)|[]|


#### setup develop environment

```sh
$ git clone https://github.com/tinper-bee/bee-button-group
$ cd bee-button-group
$ npm install -g bee-tools
$ npm install
$ npm run dev
```
