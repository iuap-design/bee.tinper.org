### 快速上手

Iuap Design React 致力于提供给程序员愉悦快速的开发体验


在开始之前，推荐学习 <a href="http://facebook.github.io/react">React</a> 和 <a href="http://www.nodeclass.com/api/ECMAScript6.html">ES2016</a>

#### 标准开发

实际项目开发中，你会需要对 ES2015 和 JSX 代码的构建、调试、代理、打包部署等一系列工程化的需求。 我们提供了一套 `uba` 的开发工具链来辅助开发。

# tinper-bee-admin

> 基于webpack+react+tinper-bee搭建基本快速开发脚手架并使用强大的集成开发工具[ uba ](https://github.com/iuap-design/tinper-uba)

### 说明

- 基于[tinper-bee](http://tinper.org/)组件库编写的admin实例工程。

- 依赖于前端集成开发工具[ uba ](https://github.com/iuap-design/tinper-uba)，项目生成的时候需要安装全局工具命令来使用，参与开发人员无需重复安装全局使用。

- 集成市面上常规的使用插件等配置，可以满足常规开发需求，无需繁琐复杂的配置项，简单、干净、舒服。

- 依赖强大的集成开发工具 `uba` 内置 `数据模拟`、`代理请求`、`静态托管`、`开放配置`等功能.

- 方便开发人员在快速搭建`react`前端开发项目，无需学习复杂配置环境，拆箱即用.

### 安装与使用

1. 安装`uba` 命令：`npm install uba -g`.

2. 执行`uba`命令来查看帮助.

3. 生成本脚手架 命令：`uba init`选择`template-tinper-bee-admin`回车继续等待安装即可。(可以使用默认的npm来安装，也可以手动后续来安装)

4. 启动开发`npm run dev`,稍等片刻会自动打开默认浏览器显示.

5. 开发完毕后，使用命令`npm run build`来产出所需的静态资源依赖文件.

6. 享受集成开发工具`uba`给你带来的方便体验来开发吧！

### 默认内置

- `react`、`react-dom`、`webpack3`.
- `babel`、`ES5\6`、`postcss`、`Less`、`图片处理`、`字体处理`、`热部署`.

### 资源展示

```base

├── assets
│   └── README.md
├── components
│   ├── EditTableCell
│   │   ├── index.css
│   │   └── index.jsx
│   ├── Header
│   │   ├── index.css
│   │   └── index.jsx
│   ├── Loading
│   │   ├── index.css
│   │   └── index.jsx
│   ├── LoadingTable
│   │   ├── index.css
│   │   └── index.jsx
│   ├── Menus
│   │   ├── index.css
│   │   └── index.jsx
│   ├── MyComponent
│   │   ├── index.css
│   │   └── index.jsx
│   ├── SimpleReference
│   │   ├── index.css
│   │   └── index.jsx
│   └── index.js
├── containers
│   ├── App
│   │   ├── index.css
│   │   └── index.jsx
│   ├── Dashbroad
│   │   ├── index.css
│   │   └── index.jsx
│   ├── DataTable
│   │   ├── index.css
│   │   └── index.jsx
│   ├── Editor
│   │   ├── index.css
│   │   └── index.jsx
│   ├── Reference
│   │   ├── index.css
│   │   └── index.jsx
│   ├── UserManager
│   │   ├── index.css
│   │   └── index.jsx
│   └── index.js
├── index.html
├── index.js
├── lib
│   └── index.js
├── redux
│   ├── configureStore.js
│   └── reducers.js
├── routes
│   └── index.js
└── serve
    └── index.js

```

### 修改默认配置

项目核心文件`uba.config.js`里面包含所有的配置，主要是基于`webpack3`配置，修改需谨慎。

数据模拟配置文件`uba.mock.js`可以配置需要模拟的请求方式，简单易懂，默认带完整配置。支出8种请求模式(`OPTIONS`,`HEAD`,`GET`,`POST`,`PUT`,`DELETE`,`TRACE`,`CONNECT`)

#### 常见问题说明

1. 服务器IP或端口冲突需要修改：

  ```js
  //服务启动设置
  const svrConfig = {
    host: "127.0.0.1",
    port: 3000
  };
  ```

2. 代理服务的设置：
如下配置，`proxyConfig`是一个数组对象参数，可以配置多个，当`enable:true`的时候，启用该代理功能，`router:"proxy"`代理的路径是哪个，当配置成proxy的时候，访问我们的项目`http://127.0.0.1:3000/proxy/你的代理路径资源地址`这样来访问就可以了。
例子里面的地址是`url:"cnodejs.org"`，远程的接口访问是：`http://cnodejs.org/api/v1/topics`；本地代理过去访问地址就是：`http://127.0.0.1:3000/proxy/api/v1/topics`，也可以去掉`proxy`这个代理路由，但是这样会导致路由跟现有的项目冲突，这样会有问题的。最好在请求数据的时候去配置一个可控制的参数来切换数据模拟和代理线上的问题。

  当有需要排除不需要代理的情况，可以设置`filter`该参数，来编程去实现哪些资源是走代理，哪些不走代理。具体需要查询文档[proxy](https://www.npmjs.com/package/express-http-proxy)

  ```js
  //远程代理访问，可以配置多个代理服务
  const proxyConfig = [{
    enable: true,//true启用代理,mock服务失效.
    router: "/proxy",//代理本地对外的路径
    url: "cnodejs.org",
    options : {
      filter : function(req,res){
        return (req.url.indexOf("webpack_hmr") > -1 ? false : true);
      }
    }
  }];
  ```

3. 如何开启静态资源托管：

  ```js
  //静态服务托管
  const staticConfig = {
    folder: "src/static"
  };
  ```

  找到该配置，直接设置`src/static`文件夹为直接对外开启静态目录功能，不受webpack影响，单独存在的，访问资源地址是：`http://127.0.0.1:3000/js/demo.js`，访问到的资源：`src/static/*`下的所有资源。

4. 不想配置模拟数据路由直接访问`mock`下的`json` :

  `uba-server`插件默认加载根目录`mock`文件夹内的资源托管，可以直接访问里面的`json`文件。`http://127.0.0.1:3000/api/user/get.json`->`./mock/api/user/get.json`。

5. `devConfig`是开发环境，是给`uba-server`插件读取用的，`prodConfig`是生产环境，是给`uba-build`构建资源读取用的。
