# bee-tag

[![npm version](https://img.shields.io/npm/v/bee-tag.svg)](https://www.npmjs.com/package/bee-tag)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-tag/master.svg)](https://travis-ci.org/tinper-bee/bee-tag)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-tag/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-tag?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-tag.svg)](https://david-dm.org/tinper-bee/bee-tag#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-tag.svg?style=flat)](https://npmjs.org/package/bee-tag)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-tag.svg)](http://isitmaintained.com/project/tinper-bee/bee-tag "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-tag.svg)](http://isitmaintained.com/project/tinper-bee/bee-tag "Percentage of issues still open")


react bee-tag component for tinper-bee

可定制的标签组件

## 使用

### 使用单独的tag包
#### 组件引入
先进行下载bee-tag包
```
npm install --save bee-button
```
组件调用
```js
import Tag from 'bee-tag';
ReactDOM.render(
        <Tag style={{color: '#000'}}>Tag</Tag>
        , document.getElementById('target'));
```
#### 样式引入

- 可以使用link引入build目录下Tag.css
```
<link rel="stylesheet" href="./node_modules/bee-tag/build/Tag.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-tag/src/Tag.scss"
```
## API

|参数|说明|类型|默认值|
|:---|:----:|:---:|------:|
|colors|颜色(dark/light/success/warning/message/danger)|string|''|
|disabled|是否禁用(`disabled` 或 `true` `false`)|boolean|false|
|bordered|是否为边框类型(`bordered` 或 `true` `false`)|boolean|false|
|deleted|是否可以删除(`deleted` 或 `true` `false`)|boolean|false|
|visible|标签是否显示关闭图标(`visible` 或 `true` `false`)|boolean|false|
|onClose|标签删除时的回调|(e) => void|-|
|select|是否可以选择(`select` 或 `true` `false`)|boolean|false|
|className|增加额外的class|string|''|
|style|style 属性|object|''|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-tag
$ cd bee-tag
$ npm install
$ npm run dev
```
