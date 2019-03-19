# bee-form-group
[![npm version](https://img.shields.io/npm/v/bee-form-group.svg)](https://www.npmjs.com/package/bee-form-group)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-form-group/master.svg)](https://travis-ci.org/tinper-bee/bee-form-group)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-form-group/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-form-group?branch=master)


`FormGroup` 组件用来包裹像 `form control` `lable` `help text` `validate state`的元素

#### 安装步骤

```sh
$ git clone https://github.com/tinper-bee/bee-form-group
$ cd bee-form-group
$ npm install
$ npm run dev
```

## 使用

使用单独的bee-form-group包
#### 组件引入
先进行下载bee-form-group包
```
npm install --save bee-form-group
```
组件调用
```js
import FormGroup from 'bee-form-group';
import FormControl from 'bee-form-control';
React.render(<div>
    <div>
		<FormGroup> 
			<FormControl type="text" />
		</FormGroup>
    </div>
</div>, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下bee-form-group.css
```
<link rel="stylesheet" href="./node_modules/build/bee-form-group.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/FormGroup.scss"
//或是
import "./node_modules/build/bee-form-group.css"
```




## API
|参数|说明|类型|默认值|
|---|----|---|------|
|validationState|oneOf:`success` `error` `warning`|string|''|

