## AC-Upload

[![npm version](https://img.shields.io/npm/v/ac-upload.svg)](https://www.npmjs.com/package/ac-upload)
[![NPM downloads](http://img.shields.io/npm/dt/ac-upload.svg?style=flat)](https://npmjs.org/package/ac-upload)



### 1. 简介

基于[tinper-bee](http://bee.tinper.org/)组件库封装开发

手动上传组件，可以帮助你打开一个模态框选择文件进行上传、也包括拖拽式的上传方式，支持单个文件以及多个文件一起上传使用，上传完毕后，组件会显示查看附件信息

<img src="https://user-images.githubusercontent.com/3817644/42263059-8e8317dc-7f9f-11e8-890f-6a45fd3e0e22.png" width="90%"/>

### 2. 安装

- 通过npm下载使用
```sh
$ npm install ac-upload -S
```

### 3. 使用

通过ES6的方式进行加载使用

```js
import AcUpload from 'ac-upload';//加载组件
import 'ac-upload/build/ac-upload.css';//加载组件样式
```
然后在render使用的时候传入相应组件需要的参数：

*注：只要放在AcUpload组件之间的一个按钮即可*

```js
<AcUpload
    title="图片上传"
    action="/iuap_pap_quickstart/fileMananger/fastDfs/imgUpload"
    name="filelist[]"
    data={{ "other": "params" }}
    accept="image/*"
    multiple={true}
    onError={(err) => console.log(err)}
    onSuccess={(data) => console.log(data)}
>
    <Button shape="border" colors="info">图片上传</Button>
</AcUpload>
```

### 4. API


序号 | 参数 | 类型 | 说明
---|---|---|---
1|title|string|打开上传的模态框显示的标题文字
2|defaultFileList|object[]|默认已经上传的文件列表
3|multiple|bool|是否允许多选
4|action|string|必选参数, 上传的地址
5|accept|string|接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)
6|data|object|随着上传的时候附加一些参数，接收JSON对象
7|name|string|上传设置的参数file名字默认`files[]`
8|onSuccess|function|上传成功后的回调，回调参数数组对象包含本次上传后的完成路径以及修改后的名称[{"accessAddress":"http://10.10.24.43:8080/wbalone/images/5441cbb2-27e6-4a9d-98b3-448f3f78de55_.png","fileName":"5441cbb2-27e6-4a9d-98b3-448f3f78de55_.png"}]
9|onError|function|上传失败后的回调，用于处理后续失败操作