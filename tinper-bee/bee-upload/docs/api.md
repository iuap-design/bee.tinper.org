# 上传 Upload

过Upload可以将资源（web page,text,picture,video...）传到远程服务器

## 何时使用

代替原生 `input type='file'`

## 如何使用

```
import { Upload } from 'tinper-bee';

or

import Upload from 'bee-upload';
import bee-upload/build/Upload.css;

```

## 代码演示


## API

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|name|文件名|string|file|
|defaultFileList|默认已上传的文件列表|array|-|
|fileList|已上传的文件列表,多用于onChange事件里|array|-|
|action|上传的服务器地址|array|-|
|data|上传参数或者函数	|Object or function|-|
|size|上传文件的大小限制单位是byte|number|1024000|
|headers|设置请求的头部信息 兼容ie10以上|object|-|
|showUploadList|是否显示上传列表|bool|true|
|multiple|是否支持多文件上传 兼容ie10以上|bool|false|
|accept|设置文件接收类型|string|-|
|beforeUpload|在上传之前执行的函数，当Promise返回false或者被拒绝，函数被中指。不兼容老ie|func|-|
|customRequest|覆盖默认的XHR,可定制自己的XMLHttpRequest|func|-|
|onChange|当上传状态改变之后执行的回调函数|func|-|
|listType|内置的样式，支持text和picture|string|'text'|
|onRemove|当删除按钮点击后触发的回调函数|func|-|
|supportServerRender|当服务器正在渲染时，是否需要打开|bool|false|

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