# bee-timeline

[![npm version](https://img.shields.io/npm/v/bee-timeline.svg)](https://www.npmjs.com/package/bee-timeline)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-timeline/master.svg)](https://travis-ci.org/tinper-bee/bee-timeline)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-timeline/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-timeline?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-timeline.svg)](https://david-dm.org/tinper-bee/bee-timeline#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-timeline.svg?style=flat)](https://npmjs.org/package/bee-timeline)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-timeline.svg)](http://isitmaintained.com/project/tinper-bee/bee-timeline "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-timeline.svg)](http://isitmaintained.com/project/tinper-bee/bee-timeline "Percentage of issues still open")


常用于当一系列的信息按时间排序的时候或者做个可视化的连接



## 使用
使用单独的bee-timeline包
#### 组件引入
先进行下载bee-timeline包
```
npm install --save bee-timeline
```
```js
import Timeline from 'bee-timeline';
class Demo1 extends Component {
    render () {
        return (
            <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        )
    }
}

render(Demo1,document.getElementById('app'));

```


## API

### Timeline

|Property|Description|Type|Default|
|:---|:-----|:----|:------|
|pending|设置最后一个虚线节点|(boolean,string,ReactNode)|-|

### Timeline.item

|Property|Description|Type|Default|
|:---|:-----|:----|:------|
|color|设置圆环的颜色|(blue,blue,green)或者其他自定义颜色|-|
|dot|自定义的时间节点|string,ReactNode |-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-timeline
$ cd bee-timeline
$ npm install
$ npm run dev
```
