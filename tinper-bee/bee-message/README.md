# bee-message

[![npm version](https://img.shields.io/npm/v/bee-message.svg)](https://www.npmjs.com/package/bee-message)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-message/master.svg)](https://travis-ci.org/tinper-bee/bee-message)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-message/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-message?branch=master)


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


react bee-message component for tinper-bee

全局展示操作反馈信息。

应用场景：
- 可提供成功、警告和错误等反馈信息。
- 当需要提醒但是不打断操作时，是一种不打断用户操作的轻量级提示方式。

## 使用方法

```
const info = function () {
  Message.create({content: 'This is a Info message', color: 'info'});
};

class Demo extends Component {
    render () {
        return (
            <Button
                colors="info"
                onClick={info}>
                info
            </Button>
        )
    }
}
```

#### 样式引入

- 可以使用link引入build目录下Message.css

```
<link rel="stylesheet" href="./node_modules/bee-message/build/Message.css">
```
- 可以在js中import样式

```
import "./node_modules/bee-message/src/Message.scss"
//或是
import "./node_modules/bee-message/build/Message.css"
```


## API

#### 函数api

```
//设置默认设置
Message.config({
    top: 20,  //顶上显示时距顶部的位置
    bottom: 20, //左下右下显示时距底部的位置
    defaultBottom: 20, //底部显示时距底部的位置
    duration: 20, //显示持续时间
    width: 500 //左下左上右下右上显示时的宽度
    });

//销毁所有消息
Message.destroy();

//创建消息
Messsage.create({});

```

#### message函数参数

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|content|内容|string/number|-|
|duration|显示时间|number|3|
|color|颜色|`dark / light / success / danger / warning / info / successlight / dangerlight / warninglight / infolight`|`light`|
|onClose|关闭时的钩子函数|function|-|
|position|弹出框显示的位置|`top / bottom / topRight / topLeft / bottomRight / bottomLeft`|`top`|
|style|样式|object|{}|
|keyboard|esc触发关闭|boolean|true|
|onEscapeKeyUp|响应ESC键时的钩子函数|function|-|
|showIcon|是否显示icon|boolean|true|


#### 已支持的键盘操作

|按键|功能|
|:---|:----|
|esc |关闭message|


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-message
$ cd bee-message
$ npm install
$ npm run dev
```
