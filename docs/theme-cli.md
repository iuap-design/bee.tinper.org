# 主题定制 cli 工具(tinper-bee-theme-cli)

## 介绍

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tinper-bee-theme-cli 工具结合tinper-bee实现主题定制功能的cli工具，原理为cli工具在本地生成一个themeColor.json文件，然后通过文件进行在线构建组件库，生成一个自己编写的tinper-bee.css，提供CDN地址，供下载和link引用。

## 安装、使用

```md

$ npm install tinper-bee-theme-cli -g

$ mkdir theme && cd theme

$ tinper-theme init

```

> 会在当前目录下生成一个themeColor.json文件，然后修改各项色值(变量注解如下)，并且保存。

```md

$ tinper-theme build

```

  会提示你输入版本号，回车 等待一段时间后，会出现打包后的css的连接(目前css文件会托管到cdn上)通过连接下载。
  
> 目前只有tinper-bee@2.0.0以上的版本才支持主题定制。
> 稍等片刻安装结束后，会输出CDN地址为打包成功！


## api


项目根目录，使用以下命令完成对应功能。

>命令5会有一分钟的延时，请耐心等待。

| # | Scripts 脚本命令 | Description 功能描述 |
| --- | --- | --- |
| 1 | tinper-theme h | api 查询 |
| 2 | tinper-theme v | 版本查询 |
| 3 | tinper-theme init | 生成主题自定的必要文件|
| 4 | tinper-theme build | 打包编译生成自定义的css文件 |


## tinper-bee 主题样式文件注解(themeColor.json)

> 一下所有的色值均为rgba格式的数值

```css

/* 全局样式 */
$default-color               // 默认色

$primary-color               // 主题色

$font-family-primary         // 字体

$font-size-base              // 字号

$text-color-base             // 字体颜色

$border-color                // 边框色

$item-hover-bg-color-base    //条目hover背景色

$item-selected-bg-color-base //条目selected背景色

/* 按钮细化样式 */
$secondary-color                 // 次按钮背景色

$button-secondary-text-color     // 次按钮字体色

/*表格细化样式*/
$table-header-background-color   // 表头背景色

$table-header-text-color         // 表头文字颜色

$table-border-color-base         // 表格分割线颜色

```

## help
 

```bash
$ tinper-theme

  Usage :

  1. tinper-theme init           themeColor.json file has been created, please modify the theme file
  2. tinper-theme h              Help
  3. tinper-theme v              Version
  4. tinper-theme build         build tinper scss file

```

联系我们 [[问题反馈](https://github.com/iuap-design/tinper-bee-theme-cli/issues)]