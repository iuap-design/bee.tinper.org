# bee-alert
[![npm version](https://img.shields.io/npm/v/bee-alert.svg)](https://www.npmjs.com/package/bee-alert)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-alert/master.svg)](https://travis-ci.org/tinper-bee/bee-alert)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-alert/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-alert?branch=master)


页面内部针对用户行为操作的区域性提醒。根据信息类型不同提供相应的以背景颜色区分的alert。若需背景颜色加深需加`dark`类。

## 使用

使用单独的bee-alert包
#### 组件引入
先进行下载bee-alert包

```
npm install --save bee-alert
```
组件调用
```js
import Alert from 'bee-alert';

React.render(<div>
    <Alert />
    <Alert colors="info" className="dark" closeLabel="close" />
</div>, document.getElementById('target'));

```
#### 样式引入
- 可以使用link引入dist目录下bee-alert.css
```
<link rel="stylesheet" href="./node_modules/build/bee-alert.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Alert.scss"
//或是
import "./node_modules/build/bee-alert.css"
```




## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|className|类名|string||
|colors|oneOf:`info` `news` `success` `danger` `warning`|string|`warning`|
|controlLabel|关闭按钮文字|string||
|onDismiss|关闭alert触发的方法|func||
|dark|显示颜色深度|bool|false|


#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-alert
$ cd bee-alert
$ npm install
$ npm run dev
```
