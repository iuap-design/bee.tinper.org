# bee-carousel-figure

[![npm version](https://img.shields.io/npm/v/bee-carousel-figure.svg)](https://www.npmjs.com/package/bee-carousel-figure)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-carousel-figure/master.svg)](https://travis-ci.org/tinper-bee/bee-carousel-figure)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-carousel-figure/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-carousel-figure?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-carousel-figure.svg)](https://david-dm.org/tinper-bee/bee-carousel-figure#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-carousel-figure.svg?style=flat)](https://npmjs.org/package/bee-carousel-figure)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-carousel-figure.svg)](http://isitmaintained.com/project/tinper-bee/bee-carousel-figure "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-carousel-figure.svg)](http://isitmaintained.com/project/tinper-bee/bee-carousel-figure "Percentage of issues still open")


react bee-carousel-figure component for tinper-bee

some description...

## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```js

```

## API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|afterChange |切换面板的回调|function(current)|无|
|autoplay |是否自动切换|boolean|false|
|beforeChange |切换面板的回调|function(from, to)|false|
|dotPosition |面板指示点位置，可选 `top` `bottom` `left` `right`|string|bottom|
|dots |是否显示面板指示点|boolean|true|
|easing |动画效果|string|linear|
|effect |动画效果函数，可取 scrollx, fade|string|scrollx|

## 方法

|名称|描述|
|:--|:---|
|goTo(slideNumber, dontAnimate) |切换到指定面板, dontAnimate = true 时，不使用动画|
|next() |切换到下一面板|
|prev() |切换到上一面板|

更多参数可参考：https://github.com/akiran/react-slick

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-carousel-figure
$ cd bee-carousel-figure
$ npm install
$ npm run dev
```
