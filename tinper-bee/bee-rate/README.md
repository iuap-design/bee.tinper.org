# bee-rate

[![npm version](https://img.shields.io/npm/v/bee-rate.svg)](https://www.npmjs.com/package/bee-rate)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-rate/master.svg)](https://travis-ci.org/tinper-bee/bee-rate)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-rate/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-rate?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-rate.svg)](https://david-dm.org/tinper-bee/bee-rate#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-rate.svg?style=flat)](https://npmjs.org/package/bee-rate)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-rate.svg)](http://isitmaintained.com/project/tinper-bee/bee-rate "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-rate.svg)](http://isitmaintained.com/project/tinper-bee/bee-rate "Percentage of issues still open")


react bee-rate component for tinper-bee

评分组件

## 使用方法

```
import Rate from 'bee-rate';

class Rate extends Component {
    render() {
        return (
            <Rate/>
        )
    }
}
```
#### 样式引入
- 可以使用link引入build目录下Rate.css
```
<link rel="stylesheet" href="./node_modules/bee-rate/build/Rate.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-rate/src/Rate.scss"
//或是
import "./node_modules/bee-rate/build/Rate.css"
```


## API

|参数|说明|类型|默认值|
|:---|:---:|:--:|---:|
|count|star总数|`number`|5|
|value|当前数，受控值|`number`|-|
|defaultValue|默认值|`number`|0|
|onChange|选择时的回调|`function`|-|
|onHoverChange|鼠标经过时数值变化的回调|`function`|-|
|allowHalf|是否允许半选|`boolean`|false|
|disabled|只读，无法进行交互|`boolean`|false|
|character|自定义字符|`ReactNode`/`string`|<Icon type="uf-star" />|
|className|自定义样式类名|`string`|-|
|style|	自定义样式对象|`object`|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-rate
$ cd bee-rate
$ npm install
$ npm run dev
```
