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

const content = '您喜欢使用tinper-bee组件库吗？';

class Demo extends Component {
    render () {
        return (
            <Popconfirm trigger="click" placement="left" content={content}>
              <Button colors="primary">向左!</Button>
            </Popconfirm>
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

### Popconfirm

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|defaultOverlayShown|默认是否显示|bool|false|
|content|显示的组件|node/string|-|
|onClick|点击事件的钩子函数|function|-|
|onClose|确认按钮的点击事件|function|-|
|onCancel|取消按钮的点击事件|function|-|
|rootClose|是否点击除弹出层任意地方隐藏|boolean|false|
|onRootClose|点击除弹出层任意地方隐藏的回调|func|-|
|transition|过度动画组件|component|-|
|onEnter|开始显示时的钩子函数|function|-|
|onEntering|显示时的钩子函数|function|-|
|onEntered|显示完成后的钩子函数|function|-|
|onExit|隐藏开始时的钩子函数|function|-|
|onExiting|隐藏进行时的钩子函数|function|-|
|onExited|隐藏结束时的钩子函数|function|-|
|placement|弹出位置|top/left/right/bottom|right|
|secondPlacement|当placement放不下时的弹出位置|top/left/right/bottom|right|
|locale|显示文字语言对象|object|{lang: 'zh-cn', ok: '确认', cancel: '取消'}|
|container|标题|node/function|body|
|stopbubble|是否阻止冒泡(1-阻止，0-不阻止)|number|0|
|animation|是否要使用动画|bool|true|
|show|显示隐藏是否受控|bool|-|
|cancel_btn|自定义的取消按钮|node/function|-|
|close_btn|自定义的确定按钮|node/function|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-popconfirm
$ cd bee-popconfirm
$ npm install
$ npm run dev
```
