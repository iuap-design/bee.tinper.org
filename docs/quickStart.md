### 快速上手

tinper-bee组件库 致力于提供给程序员愉悦快速的开发体验


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
Available official templates:
? Please select :
  template-react-multiple-pages - React多页应用脚手架
❯ template-react-single-pages - React单页应用脚手架
  template-tinper-bee-admin - 采用tinper-bee组件库所构建的管理系统
  uba-boilerplate-bee - 基于webpack构建并内置tinper-bee组件库
  uba-boilerplate-cloud - 云服务脚手架 - Cloud Platform Boilerplate
  uba-boilerplate-gulp-cloud - 基于gulp+director+require+less所构建基本web架构
  uba-boilerplate-manage - 后台管理系统的示例工程
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
npm run dev
```
项目会自动打开你的默认浏览器，你就可以看到我们的预制的页面了。

#### 构建我的代码

先来看入口文件：

打开`/src/index.js`文件，你会看到如下代码：
```
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'containers';
import './index.css';

ReactDOM.render(
    <App />,
    document.querySelector("#app")
);
```

#### 新组件编写

如果你想写一个新的组件，你可以执行以下步骤：

##### 1、创建文件
在src/components/下新建一个文件夹Example，在文件夹内创建index.jsx和index.ss两个文件。

##### 2、编写组件

在index.jsx内写下组件相关代码，如：

```
import React,{ Component } from 'react';
import './index.less';

export default class Example extends Component{
  constructor(props) {
   super(props);
 }
  render(){
    return (
    <div>
      hello world
    </div>)
  }
}

```
##### 3、导出组件

在src/components目录下，新建index.js下进行导出

```
import Example from './Example/index.js';

export {
    Example
}
```

##### 4、在容器中引入组件

最后在你需要引用的容器组件内，如在sr/containers/App/index.js内引用

```
import {Welcome, Example} from 'components';

export default class App extends Component {
    render() {
        return (
        <div>
            <Welcome
                title="欢迎使用uba所构建的脚手架"
                content="本页面来自演示组件[src/components/Welcome]，你可以修改入口文件[src/entry/index.js]来设置不同的加载组件以及路由规则等。"
             />
             <Example />
        </div>
        )
    }
}
```
如果已经启动了工程，直接就可以在页面上，看到效果了。
如果没有，就运行
```
npm run dev
```
查看效果。

#### 脚手架目录说明

```
├── LICENSE
├── README.md
├── mock                               # 数据模拟存放文件夹
│   └── api
│       └── user
│           ├── get.json
│           └── post.json
├── package.json
├── postcss.config.js                  # postcss的基本配置文件
├── src                                # 开发源代码
│   ├── assets                         # 开发使用到的资源文件
│   │   └── images
│   │       ├── favicon.png
│   │       └── logo.png
│   ├── components                     # react组件存放
│   │   └── Test
│   │       ├── index.css
│   │       └── index.js
│   ├── static                         # 静态文件目录
│   │ 
│   │ 
│   ├── index.css
│   ├── index.html
│   └── index.js                       # react入口的文件
│ 
│ 
├── uba.config.js                      # uba的核心配置文件
└── uba.mock.js                        # uba配置数据模拟


```

#### 脚手架指令说明

- npm run dev 运行项目服务，进行开发调试
- npm run build 进行项目编译打包，输入静态文件
