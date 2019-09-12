/**
 * @title 照片墙
 * @description 设置 `listType = picture-card`，支持图片预览。
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Upload from '../../src';

const demo4props = {
  action: '/upload.do',
  listType: 'picture-card',
  defaultFileList: [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'https://p0.ssl.qhimgs4.com/t01f7d55ce57edb3d46.jpg',
    thumbUrl: 'https://p0.ssl.qhimgs4.com/t01f7d55ce57edb3d46.jpg',
  }, {
    uid: -2,
    name: 'zzz.png',
    status: 'done',
    url: 'https://p0.ssl.qhimgs4.com/t010e11ecf2cbfe5fd2.png',
    thumbUrl: 'https://p0.ssl.qhimgs4.com/t010e11ecf2cbfe5fd2.png',
  }],
};

class Demo4 extends Component {
  render(){
    return(
      <div>
        <Upload {...demo4props}>
          <Icon type="uf-plus" style={{fontSize:'22px'}}/> 
          <p>上传</p>
        </Upload>
      </div>
    )
  }
}

export default Demo4;
