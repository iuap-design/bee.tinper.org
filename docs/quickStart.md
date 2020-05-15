# 快速开始

&nbsp;&nbsp;tinper-bee 组件库 致力于提供给程序员愉悦快速的开发体验。



## 一、安装 tinper-bee 
可使用 npm、cnpm、yarn 以及 ynpm 来安装组件库以及组件。

```
  npm install --save tinper-bee
```

## 二、项目中使用 tinper-bee

为了方便用户单独处理样式和js文件，所以我们对js和css进行了单独的打包。

```
import React,{ Component } from 'react';

//tinper-bee 组件库js引用
import { Button,Panel } from 'tinper-bee';

//tinper-bee 组件库 css 引用
import 'tinper-bee/assets/tinper-bee.css';

//项目样式
import './index.less';

class Example extends Component{
  constructor(props) {
   super(props);
 }

  render(){
    return (
    <Panel>
      hello world
    </Panel>)
  }
}

export default Example；

```

<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~~~~~~  o(￣▽￣)ｄ ~~~~~~  
<br/><br/>


## 三、使用CDN

[版本号查阅](http://bee.tinper.org/tinper-bee/changelog)

- css样式

```js
//引入指定版本号
<link href="//design.yonyoucloud.com/static/tinper-bee/[版本号]/assets/tinper-bee.css">

//始终引入最新版本
<link href="//design.yonyoucloud.com/static/tinper-bee/latest/assets/tinper-bee.css">
```

- js

```js
//始终引入最新版本
<script src="//design.yonyoucloud.com/static/tinper-bee/[版本号]/build/tinper-bee.js"></script>

//引入指定版本号
<script src="//design.yonyoucloud.com/static/tinper-bee/latest/build/tinper-bee.js"></script>

```

并且，在你的webpack处，配置

```
externals: {
   'tinper-bee': 'TinperBee'
}
```

## 四、单个使用个别组件
无法使用主题定制

```js
import React,{ Component } from 'react';

//Button  组件库js引用
import Button from 'bee-button';

//Button 组件库 css 引用
import 'bee-button/build/Button.css';

class Example extends Component{
 
  render(){
    return (
    <Button >Button</Button>)
  }
}

export default Example；
```
