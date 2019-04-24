# 按需打包 babel-plugin-import-bee


## 能力及特性

当你的项目只用到了部分组件，你想要更小的打包体积的时候，我们提供了按需加载的能力。

```js
import { Button } from 'tinper-bee';        // 这样会把整个组件库全部打包加载进来
// 转换为：
import Button from 'tinper-bee/lib/Button'; // 单独使用组件，按需使用
```



## 安装与配置

通过`npm`下载安装插件

```bash
npm install babel-plugin-import-bee -D 
```
## 使用

### 一般项目使用

编辑`.babelrc`文件,添加下面的配置：

```js
{
  "plugins": [
    ["import-bee", {
      "libraryName": "tinper-bee",
      "libraryDirectory": "lib"
    }]
  ]
}
```

### UCF-WEB 使用

编辑`ucf.config`添加如下配置：
```bash
babel_plugins: [
    [require.resolve("babel-plugin-import-bee"),
    {
        "libraryName": "tinper-bee",
        "libraryDirectory": "lib"
    }]
]
```

## 注意事项说明

1. 本插件不能与`CommonChunk`、`cacheGroups`一起使用，会造成体积更大，原因是优化提取代码后，会把组件库一起优化进去，导致两头都在优化代码会产生冲突重复。
2. 多页面入口不适用，会导致`vendor`失效后，每一个`entry`会有一份`node_modules`的第三方代码+按需组件的代码，冗余过多，体积大。
3. 适合普通SPA项目使用。

**注意：插件目前是不支持vendor，CommonChunk插件和本插件不能同时使用，否则会出现vendor过大重复的问题，同时也不适合多页面程序，会导致构建体积过大重复的问题，切记。**