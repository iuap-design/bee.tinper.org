# bee-form-control 
[![npm version](https://img.shields.io/npm/v/bee-form-control.svg)](https://www.npmjs.com/package/bee-form-control)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-form-control/master.svg)](https://travis-ci.org/tinper-bee/bee-form-control)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-form-control/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-form-control?branch=master)

用 `<FormControl>` 来代替 `<input>`, `<textarea>`, and `<select>`


#### 安装步骤

```sh
$ git clone https://github.com/tinper-bee/bee-form-control
$ cd bee-form-control
$ npm install
$ npm run dev
```

## 使用

使用单独的bee-form-control包
#### 组件引入
先进行下载bee-form-control包
```
npm install --save bee-form-control
```
组件调用
```js
import FormControl from 'bee-form-control';
React.render(<div>
    <div>
        <FormControl placeholder="input placeholder" ref="test" />
    </div>
</div>, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下bee-form-control.css
```
<link rel="stylesheet" href="./node_modules/build/bee-form-control.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/FormControl.scss"
//或是
import "./node_modules/build/bee-form-control.css"
```




## API
|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|className|类名|string|-|
|componentClass|说明表单类型(`input`,`textarea`)|string|'input'|
|type|类型(`text`,`search`, `submit`,'checkbox',...详情http://www.w3school.com.cn/html5/att_input_type.asp)|string|'text'|
|onChange|input值发生改变触发的回调|func|-|
|onKeyDown|keydown回调|func|-|
|value|input当前值|string|-|
|defaultValue|input默认值|string|-|
|onSearch|input type="search" 回车和点击搜索按钮的回调|func|-|
|showClose|是否显示清空按钮|bool|-|
|focusSelect|设置当focus的时候是否选择内容|bool|false|