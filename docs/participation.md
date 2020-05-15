# 参与贡献

开发者可以一起参与为`tinper-bee`贡献代码，同时也可以基于`tinper-bee`进行二次开发或封装插件。这边文章简要介绍组件库代码管理，提交`issue`，如何开发一个标准组件等问题

## issue 的提交

在你发现组件 bug 或者 希望组件增加一些功能的时候，可以通过提交`issue`的方法告知我们。在提交issue的时候，为了更方便的了解你的问题，我们希望你能提供信息：   [点击这里提交给我们](https://github.com/iuap-design/tinper-bee/issues/new)

```
## 环境及版本信息

- `tinper-bee` 版本号:  
<!-- 请填具体版本号 -->

- 若使用单个组件，请标明该组件版本号：
<!-- 请填具体版本号 -->

- 当前项目中`react`的版本号：
<!-- 请填具体版本号 -->

- 所使用的操作系统：
<!-- Windows/Mac -->

- 所使用的浏览器：
<!-- 浏览器及版本 -->

## 描述这个问题:

### 代码
<!-- 请详细说明问题 -->
<!-- 截图说明 -->

### 报错信息
<!-- 请详细说明问题 -->
<!-- 截图说明 -->

## 当前的行为：效果（可截图说明）及动作描述
<!-- 请详细描述当前行为，以便我们复现及定位问题 -->
<!-- 截图说明 -->

## 期望的行为:
<!-- 请详细描述期望达到的行为及效果，以便我们准确理解需求 -->

```
## 组件库分支管理

我们的发布的组件都基于`master`。如果你要修改一个bug，请向`master`提交`pull request`。如果你要增加一个新功能，请重新开分支，并向我们说明，我们评估过后合并到`master`分支并发布新版本

## 如何提交 pull request

如果你对`github pull request`不熟悉，请先阅读[说明](https://help.github.com/en/articles/creating-a-pull-request)。我们会持续关注 `pull request`

## 如何开发一个标准的组件

我们组件都是使用 [`bee-tools`](https://github.com/tinper-bee/bee-tools)脚手架来开发的。`bee-tools` 具备以下功能：


| # | Scripts 脚本命令 | Description 功能描述 |
| --- | --- | --- |
| 1 | bee-tools run dev | 打开浏览器，调试代码和demo |
| 2 | bee-tools run build | 打包代码到build文件夹 |
| 3 | bee-tools run dep | 下载依赖 |
| 4 | bee-tools run update | 更新依赖 |
| 5 | bee-tools run pub | 集成了(发布npm包、提交github、生成changelog)功能|
| 6 | bee-tools run changelogInit | 初始化cz-conventional-changelog |
| 7 | bee-tools run changelog | 生成CHANGELOG.md |
| 8 | bee-tools create ac-xx/bee-xx | 创建项目(应用组件、基础组件) |
| 9 | bee-tools run releases | 创建releases |

[这里](https://github.com/tinper-bee/react-components-docs)我们提供了详细的组件开发文档、代码规范、组件库的简介等

## 问题反馈

如在使用过程中遇到任何问题，可以在这里提交issue反馈

或者直接fork代码到你的github仓库，提交pull request给我们。

有紧急问题可以直接邮件给我们（Email：guoyff@yonyou.com）

