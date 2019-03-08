# bee-progress-bar
[![npm version](https://img.shields.io/npm/v/bee-progress-bar.svg)](https://www.npmjs.com/package/bee-progress-bar)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-progress-bar/master.svg)](https://travis-ci.org/tinper-bee/bee-progress-bar)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-progress-bar/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-progress-bar?branch=master)


记录进度或动态的显示进度变化

## 使用

使用单独的bee-progress-bar包
#### 组件引入
先进行下载bee-progress-bar包
```
npm install --save bee-progress-bar
```
组件调用
```js
import ProgressBar from 'bee-progress-bar';
React.render(
<ProgressBar now={10} />, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下bee-pagination.css
```
<link rel="stylesheet" href="./node_modules/build/bee-progress-bar.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/ProgressBar.scss"
//或是
import "./node_modules/build/bee-progress-bar.css"
```




## API
|参数|说明|类型|默认值|
|---|----|---|------|
|min|最小值|number|0|
|max|最大值|number|100|
|now|显示值|number |''|
|srOnly|label 只读不显示|bool|false|
|striped|条纹样式|bool|false|
|active|激活状态|bool|false|
|colors|颜色oneOf:danger,info,warning,success,primary,dark|string|''| 



### 顶部进度条API


#### ProgressBar.start()
开始显示顶部进度条

#### ProgressBar.set(arg)
设置显示百分比位置，arg: 0~1

#### ProgressBar.inc()
加快进度

#### ProgressBar.end()
直接结束进度

注：具体使用可以参考例四！


#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-progress-bar
$ cd bee-progress-bar
$ npm install
$ npm run dev
```
