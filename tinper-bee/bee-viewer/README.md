# bee-viewer

[![npm version](https://img.shields.io/npm/v/bee-viewer.svg)](https://www.npmjs.com/package/bee-viewer)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-viewer/master.svg)](https://travis-ci.org/tinper-bee/bee-viewer)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-viewer/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-viewer?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-viewer.svg)](https://david-dm.org/tinper-bee/bee-viewer#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-viewer.svg?style=flat)](https://npmjs.org/package/bee-viewer)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-viewer.svg)](http://isitmaintained.com/project/tinper-bee/bee-viewer "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-viewer.svg)](http://isitmaintained.com/project/tinper-bee/bee-viewer "Percentage of issues still open")


react bee-viewer component for tinper-bee

some description...

## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```

import React, { Component } from 'react';
import Viewer from '../../src'

class Demo1 extends Component {

    shown=(e)=>{
        console.log(e,'shwon')
    }
    hidden=(e)=>{
        console.log(e,'hidden')
    }
    render () {
        return (
            <Viewer shown={this.shown} hidden={this.hidden}>
                <img id="image" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg' alt="Picture"/>
            </Viewer>
        )
    }
}
export default Demo1

```



## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|asyncLoad|图片是否异步加载|bool|false|
|inline|启用 inline 模式|bool|false|
|button|显示右上角关闭按钮|bool|true|
|navbar|显示缩略图导航|bool|true|
|title|显示当前图片的alt属性及图片尺寸|bool|true|
|toolbar|显示工具栏|bool|true|
|tooltip|显示缩放百分比|bool|true|
|movable|图片是否可移动|bool|true|
|zoomable|图片是否可缩放|bool|true|
|rotatable|图片是否可旋转|bool|true|
|scalable|图片是否可翻转|bool|true|
|transition|使用 CSS3 过度|bool|true|
|fullscreen|播放时是否全屏|bool|true|
|keyboard|是否支持键盘|bool|true|
|interval|播放间隔，单位为毫秒|number|5000|
|zoomRatio|鼠标滚动时的缩放比例|number|0.1|
|minZoomRatio|最小缩放比例|number|0.01|
|maxZoomRatio|最大缩放比例|number|100|
|zIndex|设置图片查看器 modal 模式时的 z-index|number|2015|
|zIndexInline|设置图片查看器 inline 模式时的 z-index|number|0|
|container|设置图片查看器 modal 模式的容器，inline 模式无效|element|body|
|shown|图片查看器显示后的回调|func|()=>{}|
|hidden|图片查看器关闭后的回调|func|()=>{}|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-viewer
$ cd bee-viewer
$ npm install
$ npm run dev
```
