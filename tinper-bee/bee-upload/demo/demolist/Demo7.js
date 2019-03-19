/**
 * @title 限制文件大小
 * @description 限制自定义上传文件的大小。选中文件后触发beforeUpload回调，通过true/false来确定是否继续上传【file.size/1024*100 单位 KB、file.size/1024 单位 M 】
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Button from 'bee-button';
import Upload from '../../src';

const demo7props = {
  name: 'file',
  action: '/upload.do',
  accept:"image/*",
  size:300,
  headers: {
    authorization: 'authorization-text',
  },
  beforeUpload(file){
      let maxsize = 3000;
      return (file.size/1024*100)>= maxsize?false:true;
  },
};

class Demo7 extends Component {
	render(){
		return( 
			<Upload {...demo7props}>
        <Button shape="border">
          <Icon type="uf-upload" /> Click to Upload
        </Button>
      </Upload>
		)
	}
}

export default Demo7;