# bee-input-group
[![npm version](https://img.shields.io/npm/v/bee-input-group.svg)](https://www.npmjs.com/package/bee-input-group)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-input-group/master.svg)](https://travis-ci.org/tinper-bee/bee-input-group)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-input-group/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-input-group?branch=master)


InputGroup 是包装 `FormControl` `InputGroupButton` `InputGroupAddon`的元素，实际应用中 `InputGroupAddon` `InputGroupButton`被集成到InputGroup中使用，格式如：`InputGroup.Addon` `InputGroup.Button`。


## 使用

使用单独的bee-input-group包
#### 组件引入
先进行下载bee-input-group包
```
npm install --save bee-input-group
```
组件调用
```js
import InputGroup from 'bee-input-group';
import Button from 'bee-button'
React.render(<div>
	<InputGroup>
 		<InputGroup.Addon>.00</InputGroup.Addon>
        <FormControl type="text" />
    </InputGroup>
    <InputGroup>
 		<InputGroup.Button>
 			<Button>toggle</Button>
 		</InputGroup.Button>
        <FormControl type="text" />
    </InputGroup>
</div>, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下bee-input-group.css
```
<link rel="stylesheet" href="./node_modules/build/bee-input-group.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/InputGroup.scss"
//或是
import "./node_modules/build/bee-input-group.css"
```





#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-input-group
$ cd bee-input-group
$ npm install
$ npm run dev
```
