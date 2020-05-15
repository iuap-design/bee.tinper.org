/**
 * @title 拖拽上传
 * @description 文件以拖拽的形式上传。
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Upload from '../../src';

const Dragger = Upload.Dragger;

const demo6props = {
  name: 'file',
  multiple: true,
  showUploadList: false,
  action: '/upload.do',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {

      console.log(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      console.log(`${info.file.name} file upload failed.`);
    }
  },
};


class Demo6 extends Component {
  render(){
    return( 
      <div style={{ marginTop: 16, height: 180 }}>
        <Dragger {...demo6props}>
          <p className="u-upload-drag-icon">
            <Icon type="inbox" className="uf-upload" />
          </p>
          <p className="u-upload-text">把文件拖入指定区域，完成上传，同样支持点击上传。</p>
          <p className="u-upload-hint">支持单个或批量上传。严禁上传公司数据或其他 band 文件。</p>
        </Dragger>
      </div>
    )
  }
}

export default Demo6;