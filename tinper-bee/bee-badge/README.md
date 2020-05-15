# bee-badge 
[![npm version](https://img.shields.io/npm/v/bee-badge.svg)](https://www.npmjs.com/package/bee-badge)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-badge/master.svg)](https://travis-ci.org/tinper-bee/bee-badge)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-badge/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-badge?branch=master)


用来醒目的展示新的或未读的信息条目

#### 安装步骤

```sh
$ git clone https://github.com/tinper-bee/bee-badge
$ cd bee-badge
$ npm install
$ npm run dev
```

## 使用
使用单独的bee-badge包
#### 组件引入
先进行下载bee-badge包

```
npm install --save bee-badge
```
组件调用
```js
import Badge from 'bee-badge';

React.render(<div>
    <div>
        <Badge color="primary">a</Badge>
    </div>
</div>, document.getElementById('target'));

```
#### 样式引入
- 可以使用link引入dist目录下bee-badge.css
```
<link rel="stylesheet" href="./node_modules/build/bee-badge.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Badge.scss"
//或是
import "./node_modules/build/bee-badge.css"
```


## API
|参数|说明|类型|默认值|
|---|----|---|------|
|color|one of: `primary` `success` `info` `error`  `warning` `dark`|string|''|
|className|增加额外的class|string|''|

