### 快速上手

Iuap Design React 致力于提供给程序员愉悦快速的开发体验


在开始之前，推荐学习 <a href="http://facebook.github.io/react">React</a> 和 <a href="http://www.nodeclass.com/api/ECMAScript6.html">ES2016</a>

#### 标准开发

实际项目开发中，你会需要对 ES2015 和 JSX 代码的构建、调试、代理、打包部署等一系列工程化的需求。 我们提供了一套 npm + webpack 的开发工具链来辅助开发。

#### 获取开发脚手架

使用uba工具来初始化项目

```
npm install -g uba
uba init
```
然后在下面选项中，选择第一个,然后回车。
```
>uba-boilerplate-bee - 基于webpack构建并内置tinper-bee组件库
 uba-boilerplate-gulp-cloud - 基于gulp+director+require+less所构建基本web架构
 uba-boilerplate-multipage-app - 基于 webpack 的多页应用脚手架
 uba-boilerplate-portal - 基于tinper-bee所构建portal实践
 uba-boilerplate-vue - 基于webpack+vuejs所构建前端最佳实践
 uba-boilerplate-webapp - 基于Neoui+Kero+Director+Require构建并带有基本演示
 uba-boilerplate-webpack - 基于React+Webpack+Babel最佳实践
```
在下面的光标处输入你的项目的名称，回车。
```
? boilerplate name : (uba-boilerplate)
```
接下来会询问你时候自动安装npm依赖包，这里输入`Y`，回车。
```
? Automatically install NPM dependent packages? (Y/n)
```
这样项目我们就安装好了，接下来我们启动调试。
```
cd 你的项目名
npm run start:pre
npm run start
```
项目会自动打开你的默认浏览器，你就可以看到我们的预制的页面了。

#### 构建我的代码

打开src/components/MyComponent/index.jsx文件，你会看到如下代码：
```
import { Component } from 'react';

import './index.css';

class MyComponent extends Component {
  render() {
    return (
      <h1 className="demo">
        欢迎使用tinper-bee组件库。
      </h1>
    );
  }
}

export default MyComponent;
```
将“欢迎使用tinper-bee组件库。”改写成“Hello World!”。保存一下，接着打开我们刚刚打开的页面，你会看到改变。

#### 新组件编写

如果你想写一个新的组件，你可以执行以下步骤：

##### 1、创建文件
在src/components/下新建一个文件夹，名字是你的组件的名字，首字母大写，在文件夹内创建index.jsx和index.css两个文件。

##### 2、编写组件

在index.jsx内写下组件相关代码，如：

```

import { Row, Col, Button } from 'tinper-bee';

import React, { Component } from 'react';

import './index.css';

class Example extends Component {
  render() {
    return (
     <Row>
        <Col>
            <Button colors="primary">点我点我！</Button>
        </Col>
     </Row>
    );
  }
}

export default Example;

```
##### 3、导出组件

在src/components/index.js下进行导出

```
export Example from './Example/index.jsx';
```

##### 4、在容器中引入组件

最后在你需要引用的容器组件内，如在src/containers/App/index.jsx内引用

```
import { Example } from '../../components';

<div>
    <Header />
    <Con>
        <Example />
    </Con>
</div>

```
如果已经启动了工程，直接就可以在页面上，看到效果了。
如果没有，就运行
```
npm run start
```
查看效果。

#### 脚手架目录说明

```

│
├─conf //一些简单配置文件
├─src  //项目源代码
│   ├─components //编写组件
│   ├─containers //容器
|   ├─redux //数据及数据绑定相关文件
|   ├─routes //路由文件
│   ├─index.html //页面文件
│   ├─index.js   //入口js文件
│
├─test //编写页面测试用例
│      
│
└─


```

#### 脚手架指令说明

- npm run start:pre 项目运行第一次需使用这个命令，进行一些不变依赖的预打包
- npm run start 运行项目服务，进行开发调试
- npm run build 进行项目编译打包，输入静态文件
- npm run lint 执行语法测试
- npm run test 执行测试
- npm run test:watch 监听文件变化，自动执行测试
- npm run clean 清空build输出目录
