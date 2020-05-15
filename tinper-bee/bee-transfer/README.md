# bee-transfer

[![npm version](https://img.shields.io/npm/v/bee-transfer.svg)](https://www.npmjs.com/package/bee-transfer)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-transfer/master.svg)](https://travis-ci.org/tinper-bee/bee-transfer)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-transfer/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-transfer?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-transfer.svg)](https://david-dm.org/tinper-bee/bee-transfer#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-transfer.svg?style=flat)](https://npmjs.org/package/bee-transfer)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-transfer.svg)](http://isitmaintained.com/project/tinper-bee/bee-transfer "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-transfer.svg)](http://isitmaintained.com/project/tinper-bee/bee-transfer "Percentage of issues still open")


两框之间的元素迁移，非常直观且有效。一个或多个元素选择后点击方向按钮转到另一列框中。左栏是“源”，右边是“目标”

## 使用

### 使用单独的transfer包
#### 组件引入
先进行下载bee-transfer包
```
npm install --save bee-transfer
```
组件调用
```js
import Transfer from 'bee-transfer';

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}


ReactDOM.render(
        <Transfer
		    dataSource={mockData}
		    titles={['Source', 'Target']}
		    render={item => item.title}
		  />
        , document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入build目录下Transfer.css
```
<link rel="stylesheet" href="./node_modules/bee-transfer/build/Transfer.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-transfer/src/Transfer.scss"
//或是
import "./node_modules/bee-transfer/build/Transfer.css"
```






## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|dataSource|设置数据源。当有targetKey props存在时，dataSource的数据刨去targetKey数据,剩下的都放在左边列表|[]|[]|
|render|每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 label 字段为 ReactElement，value 字段为 title|Function(record)|-|
|targetKeys|展示在右边列表的数据集|[]|[]|
|selectedKeys|所有选中的item的keys|[]|[]|
|onChange|当item在穿梭成功后的回调 参数(targetKeys, direction, moveKeys)|func|-|
|onSelectChange| 当选中的item发生改变时的回调 参数(sourceSelectedKeys, targetSelectedKeys)|fun|-|
|onScroll| 当滑动可选的item列表的回调	参数(direction, event)|func|-|
|listStyle|自定义的columns的样式表|object	|-|
|className|class|string|''|''|
|titles|两columns的title|[]|-|
|operations|自定义按钮操作|[]|'>', '<'|
|showSearch|是否显示搜索框|boolean	|false|
|filterOption|搜索过滤方法	参数(inputValue, option)|func或者boolean	|-|
|searchPlaceholder|搜索框的默认显示文字|string|'Search'|
|notFoundContent|当没有相关内容的显示内容|string或ReactNode|	'Not Found'|
|footer|渲染底部的dom|ReactNode|-|
|lazy|懒加载dom|object|当tranfer放在bee-modal里 添加参数 lazy={{container:"modal"}}|
|onSearchChange|当搜索域变化的回调函数 参数(direction: 'left'|'right', event: Event)|func|-|
|showCheckbox|是否显示Checkbox复选框|bool|true|
|draggable|是否可以通过拖拽进行穿梭和排序|bool|false|
|appendToBottom|是否将已选项追加到右侧列表末尾|bool|false|


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-transfer
$ cd bee-transfer
$ npm install
$ npm run dev
```
