## 快速上手

&nbsp;&nbsp;tinper-bee 组件库 致力于提供给程序员愉悦快速的开发体验。



### 一、安装 tinper-bee 

```js

  ynpm install --save tinper-bee
```


### 二、项目中使用 tinper-bee

>为了方便用户单独处理样式和js文件，所以我们对js和css进行了单独的打包。

```js
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


### 三、使用CDN

> [更多CDN服务](http://tinper.org/dist/cdn/index.html)

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
...
externals: {
   'tinper-bee': 'TinperBee'
}
...
```

### 三、单个使用个别组件
> 无法使用主题定制

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


## 四、注意事项

由于一些历史原因，我们的示例上，组件的引入方式描述不正确，统一使用如下方式：

```js

import { Button } from 'tinper-bee'；

```

另外，有几个组件因为使用的第三方的包比较大，所以我们没有将它们打包进tinper-bee.js。

这些组件是Datepicker日期选择组件、Timepicker时间选择组件、Dnd拖拽组件、Calendar日历组件。


这些组件使用如下方式引入，不需要单独引入样式。

```js

import Datepicker from 'tinper-bee/lib/Datepicker';

import Timepicker from 'tinper-bee/lib/Timepicker';

import Dnd from 'tinper-bee/lib/Dnd';

import Calendar from 'tinper-bee/lib/Calendar';

import Carousel from 'tinper-bee/lib/Carousel';

```


## 六、更多学习资源
 
&nbsp;&nbsp;1、 项目脚手架可以使用 ucf-web 工具来初始化项目,一个专注于性能与效率的前端微应用开发框架 [快速上手使用](https://github.com/iuap-design/ucf-web/blob/master/README.md)

&nbsp;&nbsp;2、 包的下载管理可以使用ynpm。ynpm是一款基于用友内部的镜像库，为用友内部打造一个优质的代码共享平台、业务组件的多样性、组件能力最大化的输出。ynpm还提供组件的上传、下载的以及热门组件的统计。
[快速上手使用](https://package.yonyoucloud.com/#/guide)


&nbsp;&nbsp;3、CDN 使用自己定制的主题tinper-bee，生成CDN地址[工具上手连接](https://github.com/iuap-design/tinper-bee-theme-cli/blob/master/README.md)