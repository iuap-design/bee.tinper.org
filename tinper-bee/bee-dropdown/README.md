# bee-dropdown

[![npm version](https://img.shields.io/npm/v/bee-dropdown.svg)](https://www.npmjs.com/package/bee-dropdown)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-dropdown/master.svg)](https://travis-ci.org/tinper-bee/bee-dropdown)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-dropdown/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-dropdown?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-dropdown.svg)](https://david-dm.org/tinper-bee/bee-dropdown#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-dropdown.svg?style=flat)](https://npmjs.org/package/bee-dropdown)


## 浏览器支持

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


下拉列表组件

## 使用方法

先进行下载bee-button包
```
npm install --save bee-dropdown
```

```js

import Dropdown from 'bee-dropdown';
import Button from 'bee-button';
import Menu, { MenuItem } from 'bee-menus';

class Demo extends Component {
   render () {

       const menu = (
             <Menu multiple>
               <MenuItem key="1">借款合同</MenuItem>
               <MenuItem key="2">抵/质押合同</MenuItem>
               <MenuItem key="3">担保合同</MenuItem>
               <MenuItem key="4">联保合同</MenuItem>
               <MenuItem key="5">合同审批</MenuItem>
               <MenuItem key="6">抵/质押合同跟踪</MenuItem>
             </Menu>
         );
       return (
            <Dropdown
                trigger={['click']}
                overlay={menu}
                animation="slide-up">
                <Button colors='primary'>点击显示</Button>
            </Dropdown>
       )
   }
}

```

#### 样式引入
- 可以使用link引入build目录下Dropdown.css
```
<link rel="stylesheet" href="./node_modules/bee-dropdown/build/Dropdown.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-dropdown/src/Dropdown.scss"
//或是
import "./node_modules/bee-dropdown/build/Dropdown.css"
```

## API

|参数|说明|类型|默认值|
|:--|:---|:----|:---|
|transitionName|下拉显示动画|-|-|
|trigger|触发的事件数组|array|['hover']|
|placement|触发的位置|支持bottomLeft/bottomCenter/bottomRight/topLeft/topCenter/topRight|'bottomLeft'|
|overlay|要显示的菜单|element/reactComponent|-|
|animation|触发时的动画|string|-|
|overlayClassName|传递给弹出菜单的className|string|''|
|align|对齐方式|object|{}|
|overlayStyle|传递给弹出菜单的style|object|{}|
|onVisibleChange|下拉菜单显示与否的钩子函数|function|() => {}|
|showAction|显示时的钩子函数数组|array|[]|
|hideAction|隐藏时的钩子函数数组|array|[]|
|getPopupContainer|获取要添加的容器|function|默认是body|
|getDocument|点击隐藏的容器，适用于出现iframe的情况|function|document|
|disabled|是否禁用|bool|false|
|delay|延迟显示隐藏时间，单位毫秒|number|-|
|delayShow|延迟显示时间，单位毫秒|number|-|
|delayHide|延迟隐藏时间，单位毫秒|number|-|
|minOverlayWidthMatchTrigger|是否设置下拉的最小宽度|bool|true|


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-dropdown
$ cd bee-dropdown
$ npm install
$ npm run dev
```
