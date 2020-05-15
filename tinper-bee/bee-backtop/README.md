# bee-backtop

[![npm version](https://img.shields.io/npm/v/bee-backtop.svg)](https://www.npmjs.com/package/bee-backtop)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-backtop/master.svg)](https://travis-ci.org/tinper-bee/bee-backtop)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-backtop/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-backtop?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-backtop.svg)](https://david-dm.org/tinper-bee/bee-backtop#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-backtop.svg?style=flat)](https://npmjs.org/package/bee-backtop)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-backtop.svg)](http://isitmaintained.com/project/tinper-bee/bee-backtop "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-backtop.svg)](http://isitmaintained.com/project/tinper-bee/bee-backtop "Percentage of issues still open")


react bee-backtop component for tinper-bee

返回顶部

## 使用方法

```
import BackTop from 'bee-backtop';

class BackTopDemo extends Component {
    render() {
        return (
            <BackTop/>
        )
    }
}
```
#### 样式引入
- 可以使用link引入build目录下BackTop.css
```
<link rel="stylesheet" href="./node_modules/bee-backtop/build/BackTop.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-backtop/src/BackTop.scss"
//或是
import "./node_modules/bee-backtop/build/BackTop.css"
```


## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|visibilityHeight|当滚动条高度达到多少显示backtop|`number`|400|
|target|设置要监听滚动事件的元素|`function`|() => window|
|click|点击backTop时的回调函数|`function`|-|
|character|自定义字符|`ReactNode`/`string`|<Icon type="uf-top-up"/>|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-backtop
$ cd bee-backtop
$ npm install
$ npm run dev
```
