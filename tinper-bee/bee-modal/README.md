# bee-modal

[![npm version](https://img.shields.io/npm/v/bee-modal.svg)](https://www.npmjs.com/package/bee-modal)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-modal/master.svg)](https://travis-ci.org/tinper-bee/bee-modal)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-modal/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-modal?branch=master)


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


react bee-modal component for tinper-bee

模态框组件

## 使用方法

```js
import Modal from 'bee-modal';

class ModalDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    render () {
        return (
            <div>
              <Button color="primary" size="large" onClick={this.open}>
                点击打开模态框
              </Button>
              <Modal show = {
                  this.state.showModal
              }
              onHide = {
                  this.close
              }>
                <Modal.Header>
                  <Modal.Title>标题</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  正文描述。。。
                </Modal.Body>

                <Modal.Footer>
                  <Button>关闭</Button>
                  <Button color="primary">确认</Button>
                </Modal.Footer>

              </Modal>
            </div>
        )
    }
}

);

ReactDOM.render(
        <ModalDemo />
        , document.getElementById('target'));
```

#### 样式引入
- 可以使用link引入build目录下Modal.css
```
<link rel="stylesheet" href="./node_modules/bee-modal/build/Modal.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-modal/src/Modal.scss"
//或是
import "./node_modules/bee-modal/build/Modal.css"
```


## API

Modal

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|backdrop|是否弹出遮罩层/遮罩层点击是否触发关闭|boolean/"static"|true|
|backdropClosable|遮罩层点击是否触发关闭|boolean|true|
|keyboard|esc触发关闭|boolean|-|
|animation|显隐时是否使用动画|boolean|true|
|dialogComponentClass|传递给模态框使用的元素|string/element|-|
|dialogClassName|传递给模态框的样式| class |-|
|autoFocus|自动设置焦点|boolean|true|
|enforceFocus|防止打开时焦点离开模态框|boolean|true|
|show|是否打开模态框|string|-|
|width|模态框宽度，如只传数字则会拼接默认单位 `px`。例如 `100px/100/100%/100rem/100em`|string/number|-|
|onHide|关闭时的钩子函数|function|-|
|size|模态框尺寸|sm/lg/xlg|-|
|width|自定义模态框尺寸|string/number|-|
|onEnter|开始显示时的钩子函数|function|-|
|onEntering|显示时的钩子函数|function|-|
|onEntered|显示完成后的钩子函数|function|-|
|onExit|隐藏开始时的钩子函数|function|-|
|onExiting|隐藏进行时的钩子函数|function|-|
|onExited|隐藏结束时的钩子函数|function|-|
|container|容器|DOM元素\React组件\或者返回React组件的函数|-|
|onShow|当模态框显示时的钩子函数|function|-|
|renderBackdrop|返回背景元素的函数|function|-|
|onEscapeKeyUp|响应ESC键时的钩子函数|function|-|
|onBackdropClick|点击背景元素的函数|function|-|
|backdropStyle|添加到背景元素的style|function|-|
|backdropClassName|添加到背景元素的class|function|-|
|containerClassName|添加到外部容器的class|function|-|
|transition|动画组件|function|-|
|dialogTransitionTimeout|设置动画超时时间|function|-|
|backdropTransitionTimeout|设置背景动画超时时间|function|-|
|manager|管理模态框状态的组件|required|-|

Modal.Header

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|closeButton|是否显示关闭按钮|boolean|false|


## 已支持的键盘操作

|按键|功能|
|:---|:----|
|esc |关闭模态框|


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-modal
$ cd bee-modal
$ npm install
$ npm run dev
```
