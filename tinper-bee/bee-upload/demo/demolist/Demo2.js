/**
 * @title 已上传的文件列表
 * @description 使用 `defaultFileList` 自定义已上传的文件列表。
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Button from 'bee-button';
import Upload from '../../src';

const demo2props = {
  action: '/upload.do',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file);
      console.log(info.fileList);
    }
  },
  defaultFileList: [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: -2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }],
};
class Demo2 extends Component {
  render(){
    return( 
      <Upload {...demo2props}>
        <Button type="primary" shape="border">
          <Icon type="uf-upload" /> 点击上传
        </Button>
      </Upload>
    )
  }
}

export default Demo2;