# bee-notification

[![npm version](https://img.shields.io/npm/v/bee-notification.svg)](https://www.npmjs.com/package/bee-notification)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-notification/master.svg)](https://travis-ci.org/tinper-bee/bee-notification)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-notification/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-notification?branch=master)


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


react bee-notification component for tinper-bee

Notification通知不同于操作类型的信息反馈，是一种主动推送的信息。

## 使用方法

```js
let notification = null;
Notification.newInstance({position: 'bottomRight'}, n => notification = n);

class Demo1 extends Component {

    simpleFn() {
      notification.notice({
        content: <span>simple show</span>,
        onClose() {
          console.log('simple close');
        },
      });
    }
    render () {

        return (
            <div className="demoPadding">
                <Button onClick={this.simpleFn}>simple show</Button>
            </div>
        )
    }
}

```

#### 样式引入
- 可以使用link引入build目录下Notification.css
```
<link rel="stylesheet" href="./node_modules/bee-notification/build/Notification.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-notification/src/Notification.scss"
//或是
import "./node_modules/bee-notification/build/Notification.css"
```

## API

#### Notice

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|duration|显示时间|number|4.5|
|onClose|关闭时触发的钩子函数|function|-|
|closable|是否可手动关闭|boolean|true|
|color|显示颜色|success/info/danger/warning/dark|-|
|className|类名|string|-|
|style|样式|object|-|

#### Notification

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|show|是否显示|boolean|true|
|transition|动画|element|Fade|
|position|显示位置|topRight/BottomRight|topRight|
|timeout|延迟时间|number|-|
|onEnter|开始显示时的钩子函数|function|-|
|onEntering|显示时的钩子函数|function|-|
|onEntered|显示完成后的钩子函数|function|-|
|onExit|隐藏开始时的钩子函数|function|-|
|onExiting|隐藏进行时的钩子函数|function|-|
|onExited|隐藏结束时的钩子函数|function|-|
|className|类名|string|-|
|style|样式|object|-|
|keyboard|esc触发关闭|boolean|true|
|onEscapeKeyUp|响应ESC键时的钩子函数|function|-|

#### 已支持的键盘操作

|按键|功能|
|:---|:----|
|esc |关闭Notification|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-notification
$ cd bee-notification
$ npm install
$ npm run dev
```
