# bee-tooltip
[![npm version](https://img.shields.io/npm/v/bee-tooltip.svg)](https://www.npmjs.com/package/bee-tooltip)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-tooltip/master.svg)](https://travis-ci.org/tinper-bee/bee-tooltip)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-tooltip/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-tooltip?branch=master)

react bee-tooltip component for tinper-bee.

 > cz test 0

#### setup develop environment 

```sh
$ git clone https://github.com/tinper-bee/bee-tooltip
$ cd bee-tooltip
$ npm install
$ npm run dev
```


## 使用

### 使用单独的tooltip包
#### 组件引入
先进行下载tooltip包
```
npm install --save bee-tooltip
```
组件调用
```js
import Tooltip from 'bee-tooltip';
React.render(
    <Tooltip
        onMouseOut={this.handle}
        inverse overlay={tip}>
        <Button colors="primary">
            请拂过我的脸庞
        </Button>
     </Tooltip>, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下tooltip.css
```
<link rel="stylesheet" href="./node_modules/build/Tooltip.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Tooltip.scss"
//或是
import "./node_modules/build/Tooltip.css"
```

### 使用tinper-bee组件库
(tinper-bee组件库使用方法)[]

```
import { Tooltip } from 'tinper-bee';
```


## API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|className|类名|string|-|
|placement|显示位置(`top` `left` `right` `bottom`)|string|top|
|inverse|反白显示|bool|false|
|trigger|触发叠加层的事件|click/hover/focus|hover/focus|
|delay|叠加层显示和隐藏的延迟时间|number|-|
|delayShow|叠加层显示的延迟时间|number|-|
|delayHide|叠加层隐藏的延迟时间|number|-|
|defaultOverlayShown|覆盖Overlay设置的默认显隐状态|boolean|false|
|overlay|叠加层|element/string/function|-|
|onBlur|失去焦点触发的时间|function|-|
|onClick|点击事件|function|-|
|onFocus|焦点事件|function|-|
|onMouseOut|鼠标离开事件|function|-|
|onMouseOver|鼠标滑过事件|function|-|
|placement|显示位置设置|top\left\bottom\right|right|
|rootClose|是否点击除弹出层任意地方隐藏|boolean|true|
|visible|是否控制弹出层的显示|boolean|-|
|onVisibleChange|使用控制弹出层显示时的钩子函数|function|-|
|container|容器|DOM元素/React组件/或者返回React组件的函数|-|
