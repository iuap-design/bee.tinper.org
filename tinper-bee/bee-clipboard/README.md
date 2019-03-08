# bee-clipboard

[![npm version](https://img.shields.io/npm/v/bee-clipboard.svg)](https://www.npmjs.com/package/bee-clipboard)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-clipboard/master.svg)](https://travis-ci.org/tinper-bee/bee-clipboard)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-clipboard/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-clipboard?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-clipboard.svg)](https://david-dm.org/tinper-bee/bee-clipboard#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-clipboard.svg?style=flat)](https://npmjs.org/package/bee-clipboard)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-clipboard.svg)](http://isitmaintained.com/project/tinper-bee/bee-clipboard "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-clipboard.svg)](http://isitmaintained.com/project/tinper-bee/bee-clipboard "Percentage of issues still open")

>基于clipboard.js封装的复制组件


react bee-clipboard component for tinper-bee

复制组件

## Browser Support

| <img src="https://clipboardjs.com/assets/images/chrome.png" width="48px" height="48px" alt="Chrome logo"> | <img src="https://clipboardjs.com/assets/images/edge.png" width="48px" height="48px" alt="Edge logo"> | <img src="https://clipboardjs.com/assets/images/firefox.png" width="48px" height="48px" alt="Firefox logo"> | <img src="https://clipboardjs.com/assets/images/ie.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://clipboardjs.com/assets/images/opera.png" width="48px" height="48px" alt="Opera logo"> | <img src="https://clipboardjs.com/assets/images/safari.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 42+ ✔ | 12+ ✔ | 41+ ✔ | 9+ ✔ | 29+ ✔ | 10+ ✔ |



## 使用方法

```js
import Clipboard from 'bee-clipboard';

class ClipboardDemo extends Component {
    render() {
        function success() {
            console.log('success');
        }

        function error() {
            console.log('error');
        }

        return (
            <Clipboard action="copy" text="我将被复制到剪切板" success={success} error={error}>

            </Clipboard>
        )
    }
}
```

#### 样式引入
- 可以使用link引入build目录下Clipboard.css
```
<link rel="stylesheet" href="./node_modules/bee-clipboard/build/Clipboard.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-clipboard/src/Clipboard.scss"
//或是
import "./node_modules/bee-clipboard/build/Clipboard.css"
```



## API

|参数|说明|类型|默认值|
|:---|:---:|:--:|---:|
|action|方法，可以传`copy`或者`cut`,`cut`只支持`textarea`|`string`|`copy`|
|text|要复制的文本内容|`string`|-|
|target|要复制内容的目标元素，可传选择器，如果选择器得出多个，会取第一个|`string`/dom选择器|-|
|success|复制成功之后的回调函数|`function`|-|
|error|复制失败之后的回调函数|`function`|-|
|locale|设置默认文字语言|object|中文|

### 多语设置

通过给Clipboard组件设置locale语言对象。

如：

```
export default {
    lang: 'zh-cn',
    copy: '复制',
    cut: '剪切',
    copyReady: '已复制',
    cutReady: '已剪切'
}
```

组件内默认中文，提供英文包。

```
import en from 'bee-clipboard/build/en_US.js';
```

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-clipboard
$ cd bee-clipboard
$ npm install
$ npm run dev
```
