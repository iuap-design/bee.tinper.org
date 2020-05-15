# bee-carousel

[![npm version](https://img.shields.io/npm/v/bee-carousel.svg)](https://www.npmjs.com/package/bee-carousel)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-carousel/master.svg)](https://travis-ci.org/tinper-bee/bee-carousel)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-carousel/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-carousel?branch=master)
[![dependencies Status](https://david-dm.org/tinper-bee/bee-carousel/status.svg)](https://david-dm.org/tinper-bee/bee-carousel)
[![NPM downloads](http://img.shields.io/npm/dm/bee-carousel.svg?style=flat)](https://npmjs.org/package/bee-carousel)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-carousel.svg)](http://isitmaintained.com/project/tinper-bee/bee-carousel "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-carousel.svg)](http://isitmaintained.com/project/tinper-bee/bee-carousel "Percentage of issues still open")


react bee-carousel component for tinper-bee

Carousel 可自定义手动点击滑动和左右滑动，可兼容移动端。基于swiper.js开发.继承swiper.js的所有方法和属性。

## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```js
import React from 'react';
import Carousel from 'bee-carousel';

class Demo1 extends React.Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 30
    }

    return(
      <Carousel {...params}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Carousel>
    )
  }
}

export default Demo1;

ReactDOM.render(Demo1, document.getElementById('target'));

```



## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|:---:|
|containerClass|Carousel 容器 class name|String|swiper-container|
|wrapperClass|Carousel 父元素 class name|String|swiper-wrapper|
|slideClass|Carousel 单个元素 class name|String|	swiper-slide|
|prevButtonCustomizedClass|Carousel 前一个按钮 class name|String|''|
|nextButtonCustomizedClass|Carousel 下一个按钮 class name|String|''|
|paginationCustomizedClass|Carousel 页码 class name|String|''|
|shouldSwiperUpdate|当元素发生变是否更新Carousel|Boolea|false|
|rebuildOnUpdate|当元素更新是否重新渲染Carousel|Boolean|false|
|noSwiping|根据条件是否禁用滑动|Boolean|false|
|activeSlideKey|定义最初的激活态slide|String or Number|''|

你也可以直接用swiper.js的原始参数 [这里](http://idangero.us/swiper/api/)api/

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-carousel
$ cd bee-carousel
$ npm install
$ npm run dev
```
