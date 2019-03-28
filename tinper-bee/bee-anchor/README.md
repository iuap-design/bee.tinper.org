# bee-anchor

[![npm version](https://img.shields.io/npm/v/bee-anchor.svg)](https://www.npmjs.com/package/bee-anchor)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-anchor/master.svg)](https://travis-ci.org/tinper-bee/bee-anchor)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-anchor/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-anchor?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-anchor.svg)](https://david-dm.org/tinper-bee/bee-anchor#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-anchor.svg?style=flat)](https://npmjs.org/package/bee-anchor)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-anchor.svg)](http://isitmaintained.com/project/tinper-bee/bee-anchor "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-anchor.svg)](http://isitmaintained.com/project/tinper-bee/bee-anchor "Percentage of issues still open")


react bee-anchor component for tinper-bee

基于 [gumshoejs](https://www.npmjs.com/package/gumshoejs) 的锚点组件

## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```
import Anchor from 'bee-anchor';
import 'bee-anchor/build/Anchor.css';

```



## API

|参数|说明|类型|默认值|
|:---|:----:|:---:|------:|
|selector|目标元素选择器|string|-|
|offset|向上偏移量,例如有固定header，则 offset=()=>return header.getBoundingClientRect().height|()=>{}|0|
|navClass|当前被激活锚点新增的类名|string|'active'|
|contentClass|当前被激活区域新增的类名|string|'active'|
|nested|是否有嵌套导航|bool|false|
|nestedClass|嵌套导航激活时父节点的类名|string|'active'|
|event|是否添加监听事件|bool|true|
|activeHandle|被激活的回调，三个参数,以基本示例为例，列表li、锚点a、激活区域p|func|()=>{})|
|deactiveHandle|激活后的回调|func|()=>{})|


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-anchor
$ cd bee-anchor
$ npm install
$ npm run dev
```
