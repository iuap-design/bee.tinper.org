# bee-tile

[![npm version](https://img.shields.io/npm/v/bee-tile.svg)](https://www.npmjs.com/package/bee-tile)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-tile/master.svg)](https://travis-ci.org/tinper-bee/bee-tile)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-tile/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-tile?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-tile.svg)](https://david-dm.org/tinper-bee/bee-tile#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-tile.svg?style=flat)](https://npmjs.org/package/bee-tile)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-tile.svg)](http://isitmaintained.com/project/tinper-bee/bee-tile "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-tile.svg)](http://isitmaintained.com/project/tinper-bee/bee-tile "Percentage of issues still open")

## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


多用于模块化功能场景，内容用户可随意自定义

## 使用

使用单独的bee-tile包
#### 组件引入
先进行下载bee-tile包

```
npm install --save bee-tile
```
组件调用
```js
import Tile from 'bee-tile';

React.render(
	<Tile style={{width:200}}>
		<h4>项目跟踪</h4>
		<span>进度</span>
		<h1>95%</h1>
	</Tile>, document.getElementById('target'));

```
#### 样式引入
- 可以使用link引入dist目录下bee-tile.css
```
<link rel="stylesheet" href="./node_modules/build/bee-tile.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Tile.scss"
//或是
import "./node_modules/build/bee-tile.css"
```




## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|className|类名|string||
|children|自定义磁铁内容|element/string/object|-|
|border|是否加边框|bool|true|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-tile
$ cd bee-tile
$ npm install
$ npm run dev
```
