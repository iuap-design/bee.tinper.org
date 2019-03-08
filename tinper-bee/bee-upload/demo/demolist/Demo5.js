/**
 * @title 拖拽`Upload`
 * @description 文件以拖拽的形式上传。
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Button from 'bee-button';
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


class Demo5 extends Component {
  render(){
    return( 
      <div style={{ marginTop: 16, height: 180 }}>
        <Dragger {...demo6props}>
          <p className="u-upload-drag-icon">
            <Icon type="inbox" className="uf-upload" />
          </p>
          <p className="u-upload-text">Click or drag file to this area to upload</p>
          <p className="u-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
        </Dragger>
      </div>
    )
  }
}

export default Demo5;