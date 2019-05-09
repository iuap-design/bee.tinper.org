# bee-collapse

[![npm version](https://img.shields.io/npm/v/bee-collapse.svg)](https://www.npmjs.com/package/bee-collapse)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-collapse/master.svg)](https://travis-ci.org/tinper-bee/bee-collapse)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-collapse/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-collapse?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-collapse.svg)](https://david-dm.org/tinper-bee/bee-collapse#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-collapse.svg?style=flat)](https://npmjs.org/package/bee-collapse)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-collapse.svg)](http://isitmaintained.com/project/tinper-bee/bee-collapse "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-collapse.svg)](http://isitmaintained.com/project/tinper-bee/bee-collapse "Percentage of issues still open")


react bee-collapse component for tinper-bee

在一个元素或者组件中添加折叠效果

## 使用方法

### 使用单独的Collapse包
#### 组件引入
先进行下载bee-collapse包
```
npm install --save bee-collapse
```
组件调用

```js
import Collapse from 'bee-collapse'
    
<Collapse in=true >
  折叠内容
</Collapse>
```
#### 样式引入
- 可以使用link引入build目录下Collapse.css
```
<link rel="stylesheet" href="./node_modules/bee-collapse/build/Collapse.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-collapse/src/Collapse.scss"
//或是
import "./node_modules/bee-collapse/build/Collapse.css"
```


## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|in|折叠的内容是否显示|boolean|false|
|unmountOnExit|组件折叠时，是否从DOM元素删除该组件|boolean|false|
|transitionAppear|组件内容初始化为显示时，是否添加动态效果|boolean|false|
|timeout|设置超时时间，防止出现问题，其值可设置为>=动画时间|number|300|
|onEnter|组件内容扩展之前调用的函数|func|-|
|onEntering|组件内容扩展时调用的函数|func|-|
|onEntered|组件内容扩展完成时调用的函数|func|-|
|onExit|组件内容隐藏前调用的函数|func|-|
|onExiting|组件内容隐藏时调用的函数|func|-|
|onExited|组件内容隐藏后调用的函数|func|-|
|dimension|折叠区展开效果是纵向的还是横向的（即height或者width改变）|"height"或者"width"或者func|height|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-collapse
$ cd bee-collapse
$ npm install
$ npm run dev
```
