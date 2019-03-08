/**
 * @title 限制文件类型
 * @description 自定义上传文件的类型。关键参数accept:image/* 所有图片格式  accept:image/png,image/gif  限制个别文件类型
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Button from 'bee-button';
import Upload from '../../src';

const demo6props = {
  name: 'file',
  action: '/upload.do',
  accept:"image/*",
  // accept:"image/png,image/gif", //限制个别图片类型
  size:300,
  headers: {
    authorization: 'authorization-text',
  }
};

class Demo6 extends Component {
	render(){
		return( 
			<Upload {...demo6props}>
        <Button shape="border">
          <Icon type="uf-upload" /> Click to Upload
        </Button>
      </Upload>
		)
	}
}

export default Demo6;