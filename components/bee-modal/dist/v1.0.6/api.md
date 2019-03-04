## Modal 模态框

模态框（Modal）是覆盖在父窗体上的子窗体，位于页面最上层。通常，目的是显示来自一个单独的源的内容，可以在不离开父窗体的情况下有一些互动。子窗体可提供信息、交互，如查看、创建、编辑、向导等。

## 代码演示
## API
### Modal

|参数|说明|类型|默认值|
|:--|:----|:---|:----|
|backdrop|是否弹出遮罩层/遮罩层点击是否触发关闭|boolean/"static"|true|
|keyboard|esc触发关闭|boolean|-|
|animation|显隐时是否使用动画|boolean|true|
|dialogComponentClass|传递给模态框使用的元素|string/element|-|
|dialogClassName|传递给模态框的样式| class |-|
|autoFocus|自动设置焦点|boolean|true|
|enforceFocus|防止打开时焦点离开模态框|boolean|-|
|show|是否打开模态框|string|-|
|onHide|关闭时的钩子函数|function|-|
|size|模态框尺寸|sm/lg/xlg|-|
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
