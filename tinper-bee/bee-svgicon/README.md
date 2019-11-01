# bee-svgicon

[![npm version](https://img.shields.io/npm/v/bee-svgicon.svg)](https://www.npmjs.com/package/bee-svgicon)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-svgicon/master.svg)](https://travis-ci.org/tinper-bee/bee-svgicon)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-svgicon/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-svgicon?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-svgicon.svg)](https://david-dm.org/tinper-bee/bee-svgicon#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-svgicon.svg?style=flat)](https://npmjs.org/package/bee-svgicon)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-svgicon.svg)](http://isitmaintained.com/project/tinper-bee/bee-svgicon "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-svgicon.svg)](http://isitmaintained.com/project/tinper-bee/bee-svgicon "Percentage of issues still open")


react bee-svgicon component for tinper-bee



## 使用方法

```js
import SvgIcon from 'bee-svgicon';
import 'bee-svgicon/build/SvgIcon.css';

```


## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|className|自定义类名|string|-|
|type|图标类型。遵循图标的命名规范|string|-|
|theme|图标主题风格。可选纯色和彩色| 'pure' | 'colour' |'colour'|
|component|控制如何渲染图标，通常是一个渲染根标签为 <svg> 的 React 组件，会使 type 属性失效|ComponentType|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-svgicon
$ cd bee-svgicon
$ npm install
$ npm run dev
```
