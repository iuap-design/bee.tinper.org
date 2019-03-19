# bee-loading-state
[![npm version](https://img.shields.io/npm/v/bee-loading-state.svg)](https://www.npmjs.com/package/bee-loading-state)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-loading-state/master.svg)](https://travis-ci.org/tinper-bee/bee-loading-state)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-loading-state/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-loading-state?branch=master)


bee-loading-state 组件常用于在按钮上加载状态

#### 安装步骤

```sh
$ git clone https://github.com/tinper-bee/bee-loading-state
$ cd bee-loading-state
$ npm install
$ npm run dev
```
## 使用

loading-state依赖于button,使用loading-state还需把button组件down下来
```sh
$ npm install bee-loading-state
$ npm run dev
```
#### 组件引入
先进行下载loading-state包
```
npm install --save bee-loading-state
```
组件调用
```js
import LoadingState from 'bee-loading-state';
React.render(<div>
    <div>
        <LoadingState loadingTime="4000" loadingText="loading...">Confirm</LoadingState>
    </div>
</div>, document.getElementById('target'));
```
#### 样式引入
- 使用link引入build目录下LoadingState.css
```
<link rel="stylesheet" href="./node_modules/build/LoadingState.css">
```
- 同理,在js中import样式也是LoadingState的样式
```js

import "bee-loading-state/build/LoadingState.css"
```

### 使用tinper-bee组件库
(tinper-bee组件库使用方法)[]




## API

button的参数在loading-state同样适用，可以使用其他Button组件的props，来设置LoadingState组件中按钮的props。
loading-state扩展的参数如下。


|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|className|类名|string|-|
|loadingText|自定义loading时显示文字内容|string|loading|
|show|是否显示loading|boolean|false|
|showBackDrop|是否显示loading时给button显示遮罩层|boolean|true|


