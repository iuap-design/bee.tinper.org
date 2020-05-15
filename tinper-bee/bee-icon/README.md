# bee-icon
[![npm version](https://img.shields.io/npm/v/bee-icon.svg)](https://www.npmjs.com/package/bee-icon)
[![Build Status](https://img.shields.io/travis/tinper-bee/generator-tinper-bee/master.svg)](https://travis-ci.org/tinper-bee/bee-icon)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-icon.svg)](https://david-dm.org/tinper-bee/bee-icon#info=devDependencies)

字体图标

## 使用

使用单独的bee-icon包
#### 组件引入
先进行下载bee-icon包
```
npm install --save bee-icon
```
组件调用
```js
import ReactDom from 'react-dom';
import InputGroup from 'bee-icon';

ReactDom.render(<Icon type="uf-bell"></Icon>, document.getElementById('target'))

```





#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-input-group
$ cd bee-input-group
$ npm install
$ npm run dev
```