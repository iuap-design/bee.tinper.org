# bee-switch

[![npm version](https://img.shields.io/npm/v/bee-switch.svg)](https://www.npmjs.com/package/bee-switch)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-switch/master.svg)](https://travis-ci.org/tinper-bee/bee-switch)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-switch/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-switch?branch=master)
[![dependencies Status](https://david-dm.org/tinper-bee/bee-switch/status.svg)](https://david-dm.org/tinper-bee/bee-switch)
[![NPM downloads](http://img.shields.io/npm/dm/bee-switch.svg?style=flat)](https://npmjs.org/package/bee-switch)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-switch.svg)](http://isitmaintained.com/project/tinper-bee/bee-switch "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-switch.svg)](http://isitmaintained.com/project/tinper-bee/bee-switch "Percentage of issues still open")


两种状态切换的开关



## 使用

### 使用单独的switch包
#### 组件引入
先进行下载switch包
```
npm install --save bee-switch
```
组件调用
```js
import { Switch } from 'bee-switch';
React.render(<div>
            <Switch />
        </div>, document.getElementById('target'));
```
#### 样式引入

- 可以使用link引入dist目录下switch.css
```
<link rel="stylesheet" href="./node_modules/build/bee-switch.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Switch.scss"
//或是
import "./node_modules/build/bee-switch.css"
```



### API

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|checked	|指定当前是否选中|	Boolean	|false|
|defaultChecked	|初始是否选中	|Boolean|	false |
|onChange	|变化时回调函数,自定义参照demo	|Function(checked:Boolean) |
|disabled|设置是否禁用|Boolean|false|
|checkedChildren	|选中时的内容	|React| Node |
|unCheckedChildren	|非选中时的内容	|React| Node|
|size|	大小设置，oneOf：`sm`, `lg`|string|''|
|colors| 颜色设置，oneOf：`primary`,`success`,`info`,`dark`,`warning`|	string	|''|
|onKeyDown| 键盘回调 |	Function	| - |
|enterKeyDown| 是否启用 enter 和 space 键 | Boolean | true |

#### setup develop environment

```sh
$ git clone https://github.com/tinper-bee/bee-switch
$ cd bee-switch
$ npm install
$ npm run dev
```
