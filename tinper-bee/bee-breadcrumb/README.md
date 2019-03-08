# bee-breadcrumb
[![npm version](https://img.shields.io/npm/v/bee-breadcrumb.svg)](https://www.npmjs.com/package/bee-breadcrumb)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-breadcrumb/master.svg)](https://travis-ci.org/tinper-bee/bee-breadcrumb)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-breadcrumb.svg)](https://david-dm.org/tinper-bee/bee-breadcrumb#info=devDependencies)

`Breadcrumb` 常用来指定当前页面位置，添加类`active`类激活Breadcrumb.Item.不要同时设置`active`和`href`,设置了`active`会将子元素渲染成`span`,覆盖`a`.

## 使用

使用单独的bee-breadcrumb包
#### 组件引入
先进行下载bee-breadcrumb包

```
npm install --save bee-breadcrumb
```
组件调用
```js
import Alert from 'bee-breadcrumb';

React.render(<div>
    <Breadcrumb>
	    <Breadcrumb.Item href="#">
	      Home
	    </Breadcrumb.Item>
	    <Breadcrumb.Item href='http://getbootstrap.com/components/#breadcrumbs'>
	      Library
	    </Breadcrumb.Item>
	    <Breadcrumb.Item active>
	      Data
	    </Breadcrumb.Item>
	</Breadcrumb>
</div>, document.getElementById('target'));

```
#### 样式引入
- 可以使用link引入dist目录下bee-alert.css
```
<link rel="stylesheet" href="./node_modules/build/bee-breadcrumb.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Breadcrumb.scss"
//或是
import "./node_modules/build/bee-breadcrumb.css"
```




## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|active|如果设置成true,渲染成span而不是a|bool|false|
|href|给内部a标签设置的属性|string|''|
|title|给内部a标签设置的属性|string|''|

#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-breadcrumb
$ cd bee-breadcrumb
$ npm install
$ npm run dev
```
