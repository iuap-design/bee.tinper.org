## 安装和CDN



### 使用npm安装

推荐使用npm安装。不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。
可以通过 npm 直接安装到项目中，使用 import 或 require 进行引用。

```
npm install --save tinper-bee
```


#### 从github获取我们的源码

```

git clone git@github.com:iuap-design/tinper-bee.git

```
编译后的js代码在build文件夹内，包含压缩版本和非压缩版本。样式文件存放在assets文件夹内。

```

│
├─assets
│      tinper-bee.css
│
├─build
│      tinper-bee.js
│      tinper-bee.min.js
│
└─


```
然后从build目录下获取js源码，在assets目录下获取css样式文件，在style里面获取字体文件。在本地项目中进行相应引用。


### CDN

- css样式

```
<link href="//design.yonyoucloud.com/static/tinper-bee/1.1.0/assets/tinper-bee.css">

//其他版本

<link href="//design.yonyoucloud.com/static/tinper-bee/[版本号]/assets/tinper-bee.css">
```

- js

```
<script src="//design.yonyoucloud.com/static/tinper-bee/1.1.0/build/tinper-bee.js"></script>

//其他版本

<script src="//design.yonyoucloud.com/static/tinper-bee/[版本号]/build/tinper-bee.js"></script>

```

[更多CDN服务](http://tinper.org/dist/cdn/index.html)
