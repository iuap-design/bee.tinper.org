[![npm version](https://img.shields.io/npm/v/bee-search-panel.svg)](https://www.npmjs.com/package/bee-search-panel)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-search-panel/master.svg)](https://travis-ci.org/tinper-bee/bee-search-panel)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-search-panel/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-search-panel?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-search-panel.svg)](https://david-dm.org/tinper-bee/bee-search-panel#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-search-panel.svg?style=flat)](https://npmjs.org/package/bee-search-panel)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-search-panel.svg)](http://isitmaintained.com/project/tinper-bee/bee-search-panel "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-search-panel.svg)](http://isitmaintained.com/project/tinper-bee/bee-search-panel "Percentage of issues still open")


react bee-search-panel component for tinper-bee

折叠查询条件

## 使用方法

```
import SearchPanel from 'bee-search-panel';

class SearchPanelDemo extends Component {
    render() {
        return (
            <SearchPanel/>
        )
    }
}
```
#### 样式引入
- 可以使用link引入build目录下SearchPanel.css
```
<link rel="stylesheet" href="./node_modules/bee-search-panel/build/SearchPanel.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-search-panel/src/SearchPanel.scss"
//或是
import "./node_modules/bee-search-panel/build/SearchPanel.css"
```


## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|expanded|是否展开|boolean|-|
|defaultExpanded|是否默认展开|boolean|false|
|onChange|点击收起展开按钮的回调|function|-|
|onSearch|点击搜索按钮的回调|function|-|
|onReset|点击清空按钮的回调|function|-|
|searchName|查询按钮的文字|string|查询|
|resetName|清空按钮的文字|string|清空|
|title|搜索面板名称|string|默认筛选|
|onPanelChangeStart|面板展开或者隐藏开始的回调(status)=>{//status="hide"或"visible"}|function|-|
|onPanelChangeIng|面板展开或者隐藏进行中的回调(status)=>{//status="hide"或"visible"}|function|-|
|onPanelChangeEnd|面板展开或者隐藏结束后的回调(status)=>{//status="hide"或"visible"}|function|-|
|bgColor|面板背景颜色|string|"#F7F9FB"|
|resident|常驻面板内容，不会隐藏|ReactNode|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-search-panel
$ cd bee-search-panel
$ npm install
$ npm run dev
```

