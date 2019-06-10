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
| show| 是否显示抽屉组件 | `string` | 
| placement| 抽屉的位置。有四个预置的选项: `left`,`right`,`top`,`bottom` | `string` | `right` | 
| hasHeader| 是否显示抽屉的头部 | `boolean` | `true` | 
| title|  抽屉的头部的标题 | `string` | - |  
| className| 抽屉容器的class, 用来自定义组件样式 | `string` | 
| showMask| 是否显示遮罩 | `boolean` | `true` | 
| maskClosable|  点击遮罩是否可以关闭抽屉 | `boolean` | `false` | 
| zIndex| 抽屉容器的层级，可以修改层级 | `number` | `100000` | 
| showClose| 是否显示关闭按钮 | `boolean`  | `false` | 
| closeIcon| 自定义关闭图标 | `ReactNode` | `<Icon type="uf-close"/>` |
| width | 抽屉的宽度| `number` `string` | - | 
| height| 抽屉的高度 | `number` `string` | - | 
| destroyOnClose| 关闭时候是否销毁抽屉的内容 | `boolean` |  

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-drawer
$ cd bee-drawer
$ npm install
$ npm run dev
```
