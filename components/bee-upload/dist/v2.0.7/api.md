# 上传 Upload

过Upload可以将资源（web page,text,picture,video...）传到远程服务器

## 何时使用

代替原生 `input type='file'`

## 如何使用

```
import { Upload } from 'tinper-bee';

or

import Upload from 'bee-upload';
import 'bee-upload/build/Upload.css';

```

## 代码演示


## API

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|accept|接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)|string|无|
|name|发到后台的文件参数名|string|'file'|
|defaultFileList|默认已上传的文件列表|object[]|-|
|fileList|已上传的文件列表,多用于onChange事件里|array|-|
|action|上传的服务器地址|string|(file) => `Promise`|-|
|data|上传所需参数或返回上传参数的方法|	object|(file) => object|-|
|size|上传文件的大小限制单位是byte|number|1024000|
|headers|设置请求的头部信息 兼容ie10以上|object|-|
|showUploadList|是否展示文件列表, 可设为一个对象，用于单独设定 `showPreviewIcon` 和 `showRemoveIcon`|Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean }|true|
|multiple|是否支持多文件上传 兼容ie10以上|bool|false|
|accept|设置文件接收类型|string|-|
|beforeUpload|上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）。注意：IE9 不支持该方法。|(file, fileList) => `boolean | Promise`|-|
|customRequest|通过覆盖默认的上传行为，可以自定义自己的上传实现|Function|-|
|onChange|当上传状态改变之后执行的回调函数|Function|-|
|listType|内置的样式，支持text和picture|string|'text'|
|onRemove|点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。|Function(file): boolean | Promise|-|
|supportServerRender|服务端渲染时需要打开这个|boolean|false|
|disabled|是否禁用，设置为 true 后前端禁止删除已上传文件|boolean|false|
|withCredentials|上传请求时是否携带 cookie|boolean|false|

### onChange

当文件正在上传，上传成功和上传失败触发的回调函数。
当上传状态发生变化，返回下列参数。

```
{
  file: {
	   uid: 'uid',      // 唯一性id
	   name: 'xx.png'   // 文件名
	   status: 'done',  // 参数：uploading, done, error, removed
	   response: '{"status": "success"}',  // 服务器返回的参数
	},
  fileList: [ /* ... */ ], //当前文件列表
  event: { /* ... */ }, //服务器响应：包括上传进度  不兼容老的浏览器
}
```


## 注意事项

暂无

## 更新日志