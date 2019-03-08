/**
 * @title 图片列表`Upload`
 * @description 图片文件列表以图片的形式展示。关键参数 `listType:picture`。
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Button from 'bee-button';
import Upload from '../../src';

const demo4props = {
  action: '/upload.do',
  listType: 'picture',
  defaultFileList: [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'http://design.yyuap.com/images/icon1.png',
    thumbUrl: 'http://design.yyuap.com/images/icon1.png',
  }, {
    uid: -2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://design.yyuap.com/images/icon1.png',
    thumbUrl: 'http://design.yyuap.com/images/icon1.png',
  }],
};

class Demo3 extends Component {
  render(){
    return( 
      <div>
        <Upload {...demo4props}>
          <Button type="primary" shape="border">
            <Icon type="uf-upload" /> upload
          </Button>
        </Upload>
      </div>
    )
  }
}

export default Demo3;