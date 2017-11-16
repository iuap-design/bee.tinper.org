### 兼容解决方案

tinper-bee组件库本身兼容到ie9浏览器。

#### react 15

对于使用了`axios`这个请求库的项目，因为他使用了Promise语法，所以需要引入`es6-promise`的兼容包。

而对于使用其他es6语法的包或项目，需要使用`babel-polyfill`(包含promise)来进行语法兼容。

- 入口文件处引入

先下载安装

```
npm install -S babel-polyfill
```
再在入口文件处引入
```
import 'babel-ployfill'
```
- 使用script标签引入

```
<script src="http://design.yonyoucloud.com/static/babel-polyfill/6.7.2/polyfill.min.js"></script>

```


- webpack引入,修改wabpack配置文件的入口

```
module.exports = {
  entry: ["babel-polyfill", "./app/js"]
};
```


#### react 16

对于老浏览器（ie < 11）

因为reactv16使用了map和set需要使用引入babel-polyfill或者使用core-js

如果使用core-js,在入口处

```
import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
```

如果使用babel-polyfill

```
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
```

react也使用了`requestAnimationFrame`,可以使用`raf`包来兼容。

```
import 'raf/polyfill'
```