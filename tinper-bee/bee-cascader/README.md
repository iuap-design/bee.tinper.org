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
|placeholder	|input提示信息|	string	|"请输入信息"|
|options	|下拉列表数据	|json|	必填，无默认值|
|onClick	|选中节点的钩子函数，返回array选中的节点| function |	必填，无默认值|


options格式如下：
```bash
const options = [
	{
	  value: '浙江',
	  children: [
		  {
		    value: '杭州',
		    children: [
			    {
			      value: '西湖',
			      children: [
				    {
				      value: '白娘子'
				    },
				    {
				      value: '许仙'
				    }]
			    }]
		  }
	  ]
	},
	{
	  value: '江苏',
	  children: [
		  {
		    value: '南京',
		    children: [
			    {
			      value: '中华门'
			    }]
		  }
	  ]
	},
	{
	  value: '山东'
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


