# babel-plugin-import-bee 按需打包

[![npm version](https://img.shields.io/npm/v/babel-plugin-import-bee.svg)](https://www.npmjs.com/package/babel-plugin-import-bee)
[![NPM downloads](http://img.shields.io/npm/dt/babel-plugin-import-bee.svg?style=flat)](https://npmjs.org/package/babel-plugin-import-bee)

## 说明

当你的项目只用到了部分组件，你想要更小的打包体积的时候，我们提供了按需加载的能力。

**注意：插件目前是不支持vendor，CommonChunk插件和本插件不能同时使用，否则会出现vendor过大重复的问题，切记。具体查看https://github.com/ant-design/babel-plugin-import#note**


## 安装

通过`npm`下载安装插件

```bash
npm install -D babel-plugin-import-bee
```

然后编辑`.babelrc`文件,添加下面的配置

```js
{
    "plugins": [["import-bee"] ]
}
```

如果你需要自动帮助你引用组件的样式，设置`style:true`，如果不需要，无需设置该属性

```js
{
    "plugins": [["import-bee",{ style : true }] ]
}
```