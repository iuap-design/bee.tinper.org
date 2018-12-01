## 快速上手

tinper-bee组件库 致力于提供给程序员愉悦快速的开发体验

在开始之前，推荐学习 <a href="http://facebook.github.io/react">React</a> 和 <a href="http://www.nodeclass.com/api/ECMAScript6.html">ES2016</a> 

项目脚手架可以使用uba工具来初始化项目 [详情点击](https://github.com/iuap-design/tinper-uba/blob/master/README.md)



### 一、安装tinper-bee

#### 使用npm安装

推荐使用npm安装。不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。
可以通过 npm 直接安装到项目中，使用 import 或 require 进行引用。

```
npm install --save tinper-bee
```

#### 使用CDN

- css样式

```
<link href="//design.yonyoucloud.com/static/tinper-bee/[版本号]/assets/tinper-bee.css">

```

- js

```
<script src="//design.yonyoucloud.com/static/tinper-bee/[版本号]/build/tinper-bee.js"></script>

```

[更多CDN服务](http://tinper.org/dist/cdn/index.html)




### 二、在项目中使用tinper-bee组件库

例如：

```
import React,{ Component } from 'react';
import { Button,Panel } from 'tinper-bee';
import './index.less';

export default class Example extends Component{
  constructor(props) {
   super(props);
 }
  render(){
    return (
    <Panel>
      hello world
      <Button>click me</Button>
    </Panel>)
  }
}

```

