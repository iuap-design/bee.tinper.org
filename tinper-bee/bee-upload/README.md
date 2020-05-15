# bee-upload
[![npm version](https://img.shields.io/npm/v/bee-upload.svg)](https://www.npmjs.com/package/bee-upload)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-upload/master.svg)](https://travis-ci.org/tinper-bee/bee-upload)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-upload.svg)](https://david-dm.org/tinper-bee/bee-upload#info=devDependencies)

通过Upload可以将资源（web page,text,picture,video...）传到远程服务器

## 使用

### 使用单独的Upload包
#### 组件引入
先进行下载Upload包
```
npm install --save bee-upload
```
组件调用
```js
import { Upload } from 'bee-upload';

const props = {
  name: 'file',
  action: '/upload.do',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      console.log(`${info.file.name} file upload failed.`);
    }
  },
};

class Demo1 extends Component {
	render(){
		return( 
			<Upload {...props}>
        <Button type="primary" shape="border">
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
		)
	}
}

React.render(<Demo1 />, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下upload.css
```
<link rel="stylesheet" href="./node_modules/build/bee-upload.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Upload.scss"
//或是
import "./node_modules/build/bee-upload.css"
```



## API

|参数|说明|类型|默认值|
|---|----|---|------|
|name|文件名|string|file|
|defaultFileList|默认已上传的文件列表|array|-|
|fileList|已上传的文件列表,多用于onChange事件里|array|-|
|action|上传的服务器地址|array|-|
|data|上传参数或者函数|Object or function|-|
|size|上传文件的大小限制单位是byte|number|1024000|
|headers|设置请求的头部信息 兼容ie10以上|object|-|
|showUploadList|是否显示上传列表|bool|true|
|multiple|是否支持多文件上传 兼容ie10以上|bool|false|
|accept|设置文件接收类型|string|-|
|beforeUpload|在上传之前执行的函数，当Promise返回false或者被拒绝，函数被中指。不兼容老ie|func|-|
|customRequest|覆盖默认的XHR,可定制自己的XMLHttpRequest|func|-|
|onChange|当上传状态改变之后执行的回调函数|func|-|
|onPreview|点击预览时执行的回调方法，参数为当前点击的上传文件对象，若要阻止默认预览需return false|func|-|
|preventDefaultPreview|点击预览时，如果要阻止默认预览请设置为true，默认值为false|func|-|
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

## IE兼容

IE8/9 Note

下载弹出窗口问题

使用iframe方式上传时,响应response的`content-type`应该是 `text/plain`或者 `text/html.referense`

此外，在iframe模式下，响应的状态应始终为200 OK，否则可能会在IE 8/9中获得Access被拒绝的错误。

域问题

如果页面设置`document.domain`，则服务器应根据`_documentDomain`参数输出`document.domain`。

```
var ret = '';
if (postData._documentDomain) {
  ret += '<script>document.domain="'+postData._documentDomain+'";</script>';
}
this.body = ret + '{"url":"xx.jpq"}';

```

#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-upload
$ cd bee-upload
$ npm install
$ npm run dev
```
