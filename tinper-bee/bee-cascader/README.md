# bee-cascader

[![npm version](https://img.shields.io/npm/v/bee-cascader.svg)](https://www.npmjs.com/package/bee-cascader)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-cascader/master.svg)](https://travis-ci.org/tinper-bee/bee-cascader)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-cascader/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-cascader?branch=master)


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


react bee-cascader component for tinper-bee

#### 组件引入
先进行下载cascader包
```
npm install --save bee-cascader
```
组件调用
```js
import { Cascader } from 'bee-cascader';
React.render(<div>
    <div>
        <Cascader />
    </div>
</div>, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下cascader
```
<link rel="stylesheet" href="./node_modules/build/bee-cascader.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/cascader"
//或是
import "./node_modules/build/bee-cascader.css"
```



## API

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|placeholder	|input提示信息|	string	|""|
|options	|下拉列表数据	|json|	必填，无默认值|
|defaultValue|默认的选中项|	string[]|[]|
|changeOnSelect|当此项为 true 时，点选每级菜单选项值都会发生变化|	boolean|false|
|disabled|禁用|	boolean|false|
|expandTrigger|次级菜单的展开方式，可选 'click' 和 'hover'|	string|'click'|
|size|输入框大小，可选 lg md sm|	string|'md'|
|onChange   |选择完成后的回调| Function(value, selectedOptions)|	-|
|onClick	|选中节点的钩子函数，返回array选中的节点| function |	-|
|inputValue	|自定义输入框展示内容| string |	-|


options格式如下：
```bash
const options = [
	label: '浙江',
	value: 'zj',
	children: [{
		label: '杭州',
		value: 'hz',
		children: [{
			label: '西湖',
			value: 'xh',
			children: [{
				label: '白娘子',
				value: 'bnz'
			},{
				label: '许仙',
				value: 'xx'
			}]
		}]
	}]
	},
	{
		label: '江苏',
		value: 'js',
		children: [{
			label: '南京',
			value: 'nj',
			children: [{
				label: '中华门',
				value: 'zhm'
			}]
		}]
 	},
 	{
		label: '山东',
 	    value: 'sd'
 	}
];
```

#### setup develop environment

```sh
$ git clone https://github.com/tinper-bee/bee-cascader
$ cd bee-cascader
$ npm install
$ npm run dev
```
### TODO
- test


