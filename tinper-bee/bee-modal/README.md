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

### Modal

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|backdrop|是否弹出遮罩层|boolean|true|
|backdropClosable|遮罩层点击是否触发关闭|boolean|true|
|keyboard|esc触发关闭|boolean|-|
|animation|显隐时是否使用动画|boolean|true|
|dialogComponentClass|传递给模态框使用的元素|string/element|-|
|dialogClassName|传递给模态框的样式| class |-|
|autoFocus|自动设置焦点|boolean|true|
|enforceFocus|防止打开时焦点离开模态框|boolean|true|
|show|是否打开模态框|boolean|-|
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
|backdropStyle|添加到背景元素的style|object|-|
|backdropClassName|添加到背景元素的class|string|-|
|transition|动画组件|function|-|
|dialogTransitionTimeout|设置动画超时时间|function|-|
|backdropTransitionTimeout|设置背景动画超时时间|function|-|
|manager|管理模态框状态的组件|required|-|
|draggable|设置模态框是否可拖拽|bool|false|
|resizable|设置模态框是否可resize|bool|false|
|resizeClassName|设置拖拽dom的class名称|string|-|
|onResizeStart|resize开始时的回调|function|-|
|onResize|resize时的回调|function|-|
|onResizeStop|resize结束时的回调|function|-|
|minWidth|resize时模态框的最小宽度|number/string|200|
|minHeight|resize时模态框的最小高度|number/string|150|
|maxWidth|resize时模态框的最大宽度|number/string|-|
|maxHeight|resize时模态框的最大高度|number/string|-|

### Modal.Header

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|closeButton|是否显示关闭按钮|boolean|false|

### Modal.method()
包括：
- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.warning`
- `Modal.confirm`

以上均为一个函数，参数为 object，具体属性如下：
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|cancelText|取消按钮文字|string|取消|
|okText|确认按钮文字|string|确定|
|okType|确认按钮类型，取值范围(primary/secondary/success/info/warning/danger/dark/light)|string|primary|
|title|标题|string/ReactNode|-|
|content|内容|string/ReactNode|-|
|className|容器类名|string|-|
|icon|自定义图标|ReactNode|`<Icon type="uf-qm-c"/>`|
|backdrop|是否弹出遮罩层/点击遮罩层是否触发关闭|boolean/"static"|true|
|width|宽度|string/number|400|
|onCancel|取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭|function|-|
|onOk|点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭|function|-|

以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。
```
const modal = Modal.info();

modal.update({
  title: '修改的标题',
  content: '修改的内容',
});

modal.destroy();
```
- `Modal.destroyAll`
使用 Modal.destroyAll() 可以销毁弹出的确认窗（即上述的 Modal.info、Modal.success、Modal.error、Modal.warning、Modal.confirm）。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题，而不用各处去使用实例的返回值进行关闭（modal.destroy() 适用于主动关闭，而不是路由这样被动关闭）
```
import { browserHistory } from 'react-router';

// router change
browserHistory.listen(() => {
  Modal.destroyAll();
});
```


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
