# bee-panel

[![npm version](https://img.shields.io/npm/v/bee-panel.svg)](https://www.npmjs.com/package/bee-panel)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-panel/master.svg)](https://travis-ci.org/tinper-bee/bee-panel)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-panel/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-panel?branch=master)


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


react bee-panel component for tinper-bee

展示板组件

## 使用方法

```js
import {Panel} from 'bee-panel';

const title = (
  <h3>Panel title</h3>
)

ReactDOM.render(
    <Panel header={title} footer='Panel footer'>
      Panel content
    </Panel>
        , document.getElementById('target'));
```

```js
import { Panel, PanelGroup } from 'bee-panel';

class Demo extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      activeKey: '1'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
          <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
          <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
        </PanelGroup>
    );
  }
}
```

#### 样式引入
- 可以使用link引入build目录下Panel.css
```
<link rel="stylesheet" href="./node_modules/bee-panel/build/Panel.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-panel/src/Panel.scss"
//或是
import "./node_modules/bee-panel/build/Panel.css"
```


## API

#### Panel

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|copyable|是否可复制内容|boolean|-|
|collapsible|是否添加折叠|boolean|-|
|onSelect|有折叠效果时选中的效果|function|-|
|defaultExpanded|默认是否打开|boolean|false|
|expanded|折叠是否展开|object|-|
|onEnter|开始显示时的钩子函数|function|-|
|onEntering|显示时的钩子函数|function|-|
|onEntered|显示完成后的钩子函数|function|-|
|onExit|隐藏开始时的钩子函数|function|-|
|onExiting|隐藏进行时的钩子函数|function|-|
|onExited|隐藏结束时的钩子函数|function|-|
|header|头部|node|-|
|headerStyle|传递给头部的style|object|-|
|footer|尾部|node|-|
|footerStyle|传递给尾部的style|object|-|
|eventKey|当多个panel存在时,每个panel的标记|any|-|
|colors|panel的颜色|primary\accent\success\info\warning\danger\default\bordered|default|

#### PanelGroup

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|accordion|是否是手风琴效果|boolean|false|
|activeKey|当前展开的项|any|-|
|defaultActiveKey|默认展开的项|any|-|
|onSelect|选中的钩子函数|function|-|
|className|传入的class|any|-|
|style|传入的style|pbject|-|


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-panel
$ cd bee-panel
$ npm install
$ npm run dev
```
