/**
 * @title 图片列表
 * @description 设置 `listType = picture`，图片文件列表以图片的形式展示。
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Upload from '../../src';
import Button from 'bee-button';

const demo3props = {
  action: '/upload.do',
  listType: 'picture',
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

class Demo3 extends Component {
  render(){
    return(
      <div>
        <Upload {...demo3props}>
          <Button type="primary" shape="border">
            <Icon type="uf-upload" /> 上传
          </Button>
        </Upload>
      </div>
    )
  }
}

export default Demo3;
