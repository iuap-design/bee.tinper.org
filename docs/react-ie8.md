# 使你的 React 应用兼容 IE8

> 一个令人失望的消息：[从 React v15 开始，React DOM 将不会再支持 IE8 了][Discontinuing IE 8 Support in React DOM]。而[中国还有超过 18% 的人在使用 IE8][IE8-in-China]。
>
> 无论如何，`react-ie8` 仍会提供一系列的[示例][Examples]，还会收集 issues，以便于给遇到兼容性问题的人一个参考。
>
> 快去查看 `react-ie8` [示例][Examples]吧，也欢迎[提交 issue][Open an issue]。

## 如何兼容 IE8

首先，你不应该使用 React v15 或更高版本。使用仍然支持 IE8 的 React v0.14 即可。

如果你需要查看 React v0.14 的文档，请访问：http://react-ie8.xcatliu.com

### 使用 CommonJS

强烈推荐使用 CommonJS 风格来引入需要的模块。

首先安装这些模块：

```shell
npm install --save es5-shim console-polyfill
```

然后把以下代码插入到*入口文件最前面*：

```js
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
```

参考一个真实的例子：[React IE8 Hello World Example][Hello World]。

### 使用 React Static Boilerplate

[React Static Boilerplate](https://github.com/jun0205/react-static-boilerplate) 一个创建好的支持 IE8 的 React 静态模板，可以查看[演示](http://react-ie8.getfuli.com/)

### 其他问题

一些问题其实并不是 `React` 的问题，不过我也把他们列出来了：

错误信息 | 原因 | 解决方案 | 相关 Issue | 示例
-------- | ---- | -------- | ---------- | ----
`Expected identifier` | 代码中或者第三方模块中使用了保留字，比如 `default` | 使用 [es3ify] 或者 [es3ify-loader] | [#1] | [Fetch IE8]
`Exception thrown and not caught` | babel 把 `export * from 'xxx'` 编译成了 `Object.defineProperty`，而 IE8 中不支持 accessor property | 把 `require('es5-shim')` `require('es5-shim/es5-sham')` 插入到入口文件的最上方，并且在代码中不要使用 `export * from 'xxx'` | [#2][#2] [#32][#32] | [Hello World]
`Object expected` | 可能你使用了 `fetch` | 用 `es6-promise` 和 `fetch-ie8` polyfill | [#4] | [Fetch IE8]
`'Promise' is undefined` | `Promise` 需要 polyfill | 用 `es6-promise` polyfill | [#5] | [Fetch IE8]
`Object doesn't support this property or method` | 可能你使用了 `Object.assign` | 用 `core-js` polyfill | [#7] | [Object Assign]
`'JSON' is undefined` | 需要使用 IE8 Standards Mode | 添加 `<!DOCTYPE html>` 和 `<meta http-equiv="X-UA-Compatible" content="IE=EDGE"/>` | [#8] | [Hello World]


如果你遇到了其他问题，可以[提交一个 issue][Open an issue]。