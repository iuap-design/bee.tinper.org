# bee-locale

[![npm version](https://img.shields.io/npm/v/bee-locale.svg)](https://www.npmjs.com/package/bee-locale)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-locale/master.svg)](https://travis-ci.org/tinper-bee/bee-locale)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-locale/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-locale?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-locale.svg)](https://david-dm.org/tinper-bee/bee-locale#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-locale.svg?style=flat)](https://npmjs.org/package/bee-locale)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-locale.svg)](http://isitmaintained.com/project/tinper-bee/bee-locale "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-locale.svg)](http://isitmaintained.com/project/tinper-bee/bee-locale "Percentage of issues still open")


react bee-locale component for tinper-bee

tinper-bee 多语组件，通过传入语言包，来设置组件库的多语。

## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```js
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Locale from 'bee-locale';
import zhCn from 'bee-locale/src/zh_CN.js';

class App extends Component {
    render() {

        return (
            <div>
                xxx
            </div>
        )
    }
}


ReactDOM.render( (
        <Locale locale={zhCn}>
            <App />
        </Locale>
    )
}


```



## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|locale|设置的语言对象|object|中文语言包|

### 示例

```
export default {
    lang: 'zh_CN',
    Popconfirm: {
        'ok': '确认',
        'cancel': '取消'
    },
    Table: {
        'resetSettings': '还原设置',
        'include': '包含',
        'exclusive': '不包含',
        'equal': '等于',
        'unequal':'不等于',
        'begin':'以开始',
        'end':'以结尾',
    },
    Clipboard: {
        'copy': '复制',
        'cut': '剪切',
        'copyReady': '已复制',
        'cutReady': '已剪切',
        'copyToClipboard':'复制到剪切板',
        'close':'关闭',
    },
    Pagination:{
        'total': '共',
        'items': '条',
        'show': '显示',
        'goto': '跳至',
        'page': '页',
        'ok': '确认'
    },
    Grid:{
        'fixTitle': '锁定',
        'noFixTitle': '解锁',
        'hideTitle': '隐藏',
        'rowFilter':'行过滤'
    }
}
```

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-locale
$ cd bee-locale
$ npm install
$ npm run dev
```
