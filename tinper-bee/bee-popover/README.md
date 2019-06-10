# bee-popconfirm

[![npm version](https://img.shields.io/npm/v/bee-popconfirm.svg)](https://www.npmjs.com/package/bee-popconfirm)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-popconfirm/master.svg)](https://travis-ci.org/tinper-bee/bee-popconfirm)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-popconfirm/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-popconfirm?branch=master)


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


react bee-popconfirm component for tinper-bee

some description...

## 使用方法

```js
const popoverLeft = (
  <Popconfirm id="popover-positioned-left" title="左侧弹出">
    您喜欢使用tinper-bee组件库吗？
  </Popconfirm>
);

class Demo extends Component {
    render () {
        return (
              <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                <Button colors="primary">向左!</Button>
              </OverlayTrigger>
        )
    }
}
```

#### 样式引入
- 可以使用link引入build目录下Popconfirm.css
```
<link rel="stylesheet" href="./node_modules/bee-popconfirm/build/Popconfirm.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-popconfirm/src/Popconfirm.scss"
//或是
import "./node_modules/bee-popconfirm/build/Popconfirm.css"
```

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|id|标示弹出层|string/number|-|
|title|卡片标题|string/ReactNode|-|
|content|卡片内容|string/ReactNode|-|
|placement|弹出位置|可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`|`right`|
|positionTop|弹出框向上偏移量|string/number|-|
|positionLeft|弹出框向左偏移量|string/number|-|
|container|容器|ReactNode/function|body|
|trigger|触发现实和隐藏的事件类型|click/hover/focus|hover|
|show|控制显示和隐藏|bool|-|
|defaultOverlayShown|默认显示的状态|bool|false|
|onHide|隐藏时的回调|function|-|


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-popconfirm
$ cd bee-popconfirm
$ npm install
$ npm run dev
```
