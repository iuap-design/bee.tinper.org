# bee-timepicker

[![npm version](https://img.shields.io/npm/v/bee-timepicker.svg)](https://www.npmjs.com/package/bee-timepicker)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-timepicker/master.svg)](https://travis-ci.org/tinper-bee/bee-timepicker)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-timepicker/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-timepicker?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-timepicker.svg)](https://david-dm.org/tinper-bee/bee-timepicker#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-timepicker.svg?style=flat)](https://npmjs.org/package/bee-timepicker)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-timepicker.svg)](http://isitmaintained.com/project/tinper-bee/bee-timepicker "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-timepicker.svg)](http://isitmaintained.com/project/tinper-bee/bee-timepicker "Percentage of issues still open")


react bee-timepicker component for tinper-bee

可定制的时间组件

## 使用

### 使用单独的timepicker包
#### 组件引入
先进行下载bee-timepicker包
```
npm install --save bee-timepicker
```
组件调用
```js
import Timepicker from 'bee-timepicker';
ReactDOM.render(
        <TimePicker></TimePicker>
        , document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入build目录下TimePicker.css
```
<link rel="stylesheet" href="./node_modules/bee-timepicker/build/Timepicker.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-timepicker/src/Timepicker.scss"
//或是
import "./node_modules/bee-timepicker/build/Timepicker.css"
```



## API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|prefixCls|prefixCls of this component|String|'rc-time-picker'|
|clearText|clear tooltip of icon|String|'clear'|
|disabled|禁用时间组件|Boolean|false|
|allowEmpty|允许为空|Boolean|true|
|open|current open state of picker. controlled prop|Boolean|false|
|defaultValue|默认值|moment|null|
|defaultOpenValue|默认打开的值|moment|moment()|
|value|当前值|moment|null|
|placeholder|输入框的placeholder|String|''|
|className|time picker className|String|''|
|popupClassName|弹出面板的ClassName|String|''|
|showHour|显示小时|Boolean|true|
|showMinute|显示分钟|Boolean|true|
|showSecond|显示秒|Boolean|true|
|format|格式化|String|-|
|disabledHours|禁用的小时|Function|-|
|disabledMinutes|禁用的分钟|Function|-|
|disabledSeconds|禁用的秒|Function|-|
|use12Hours|切换12小时制|Boolean|false|
|hideDisabledOptions|是否隐藏禁用选项|Boolean|false|
|onChange|改变时的回调行数|Function|null|
|addon|从时间选择面板称为渲染一些插件在它的底部，像一个OK按钮。接收板实例作为参数|Function|-|
|placement|one of ['left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']|String|bottomLeft|
|transitionName|-|String|''|
|name|设置input的name属性|String|-|
|onOpen|打开时的回调|Function({ open })|-|
|onClose|关闭时的回调|Function({ open })|-|


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-timepicker
$ cd bee-timepicker
$ npm install
$ npm run dev
```
