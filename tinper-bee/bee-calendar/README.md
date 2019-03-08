# bee-calendar

[![npm version](https://img.shields.io/npm/v/bee-calendar.svg)](https://www.npmjs.com/package/bee-calendar)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-calendar/master.svg)](https://travis-ci.org/tinper-bee/bee-calendar)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-calendar/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-calendar?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-calendar.svg)](https://david-dm.org/tinper-bee/bee-calendar#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-calendar.svg?style=flat)](https://npmjs.org/package/bee-calendar)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-calendar.svg)](http://isitmaintained.com/project/tinper-bee/bee-calendar "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-calendar.svg)](http://isitmaintained.com/project/tinper-bee/bee-calendar "Percentage of issues still open")


react bee-calendar component for tinper-bee

some description...

## 使用方法

### 使用单独的calendar包
#### 组件引入
先进行下载bee-calendar包
```
npm install --save bee-calendar
```
组件调用
```js
import Calendar from 'bee-calendar';
ReactDOM.render(
        <Calendar></Calendar>
        , document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入build目录下Calendar.css
```
<link rel="stylesheet" href="./node_modules/bee-calendar/build/Calendar.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-calendar/src/Calendar.scss"
//或是
import "./node_modules/bee-calendar/build/Calendar.css"
```



## API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|prefixCls|prefixCls of this component|String|
|value|输入框当前的值|moment||
|defaultValue|输入框默认的值|moment||
|defaultType|默认渲染类型：日期／月份|string|date|
|type|面板的类型：日期／月份|string||
|onTypeChange|面板切换的回调函数|function(type)||
|fullscreen|铺满显示|bool|false|
|monthCellRender|月份显示回调函数|function||
|dateCellRender|日期显示回调函数|function||
|monthCellContentRender|月份内容渲染回调函数|function||
|dateCellContentRender|日期内容渲染回调函数|function||
|onSelect|日期选中回调函数|Function(date: moment)||


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-calendar
$ cd bee-calendar
$ npm install
$ npm run dev
```
