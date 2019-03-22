# bee-drawer

[![npm version](https://img.shields.io/npm/v/bee-drawer.svg)](https://www.npmjs.com/package/bee-drawer)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-drawer/master.svg)](https://travis-ci.org/tinper-bee/bee-drawer)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-drawer/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-drawer?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-drawer.svg)](https://david-dm.org/tinper-bee/bee-drawer#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-drawer.svg?style=flat)](https://npmjs.org/package/bee-drawer)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-drawer.svg)](http://isitmaintained.com/project/tinper-bee/bee-drawer "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-drawer.svg)](http://isitmaintained.com/project/tinper-bee/bee-drawer "Percentage of issues still open")


react bee-drawer component for tinper-bee

some description...

## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```javascript
import Drawer from 'ac-drawer';
import 'ac-drawer/dist/ac-drawer.css';

<Drawer title={'basic drawer'} show={true} placement={'right'} onClose={this.fCloseDrawer}>
    <div className="con">
        <p>这是第一行文字</p>
        <p>这是第二行文字</p>
        <p>这是第三行文字，啦啦啦~</p>                                                 
    </div>
</Drawer>
```



## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
show | `string` | | 是否显示抽屉组件
placement | `string` | `right` | 抽屉的位置。有四个预置的选项: `left`,`right`,`top`,`bottom`
hasHeader | `boolean` | `true` | 是否显示抽屉的头部
title | `string` |  |  抽屉的头部的标题
className | `string` | | 抽屉容器的class, 用来自定义组件样式
showMask | `boolean` | `true` | 是否显示遮罩
maskClosable | `boolean` | `false` |  点击遮罩是否可以关闭抽屉
zIndex | `number` | `100000` | 抽屉容器的层级，可以修改层级
showClose | `boolean`  | `false` | 是否显示关闭按钮
width | `number` `string` |  | 抽屉的宽度
height | `number` `string` |  | 抽屉的高度
destroyOnClose | `boolean` |  | 关闭时候是否销毁抽屉的内容

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-drawer
$ cd bee-drawer
$ npm install
$ npm run dev
```
