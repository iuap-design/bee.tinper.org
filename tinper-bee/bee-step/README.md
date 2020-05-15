# bee-step

[![npm version](https://img.shields.io/npm/v/bee-step.svg)](https://www.npmjs.com/package/bee-step)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-step/master.svg)](https://travis-ci.org/tinper-bee/bee-step)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-step/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-step?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-step.svg)](https://david-dm.org/tinper-bee/bee-step#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-step.svg?style=flat)](https://npmjs.org/package/bee-step)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-step.svg)](http://isitmaintained.com/project/tinper-bee/bee-step "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-step.svg)](http://isitmaintained.com/project/tinper-bee/bee-step "Percentage of issues still open")

## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |



当任务复杂或具有子任务的系列一定的序列，我们可以将它分解成几个步骤，让事情变得更容易。

## 使用
使用单独的bee-step包
#### 组件引入
先进行下载bee-step包

```js
```
npm install --save bee-step

```
```js
import Step from 'bee-step';
const Steps = Step.Steps;
class Demo1 extends Component {
    render () {
        return (
            <Step.Steps current={1}>
	            <Step title="Finished" description="This is a description." />
	            <Step title="In Progress" description="This is a description." />
	            <Step title="Waiting" description="This is a description." />
	        </Step.Steps>
        )
    }
}

render(Demo1,document.getElementById('app'));

```


## API

|Property|Description|Type|Default|
|:---|:-----|:----|:------|
|status|自动设置当前step的状态（wait,process,finish,error）|string|-|
|title|step的标题|（string,ReactNode）|-|
|description|step的细节描述，可选的属性|（string,ReactNode）|-|
|icon|设置当前step为icon,可选的属性|string,ReactNode|-|

### Step.Steps
|Property|Description|Type|Default|
|:---|:-----|:----|:------|
|current|设置当前步骤，从0开始计数。可以使用步骤状态重写此状态。|number|0|
|status|指定当前步骤的状态(danger,info,news,warning,sucess,process)|string|process|
|size|设置step bar的大小(default,samll)|string|default|
|direction|设置step bar的方向(horizontal,vertical)|string|horizontal|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-step
$ cd bee-step
$ npm install
$ npm run dev
```
