/**
*
* @title offsetTop Affix
* @description 触发固定的距离屏幕顶部高度等于offetTop
*
*/

import React, { Component } from 'react';
import Affix from '../../src';

class Demo2 extends Component {
  render () {
    //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body
    let container = document.getElementsByClassName('page-container u-container example')[0]? document.getElementsByClassName('page-container u-container example')[0] : document.getElementById('tinperBeeDemo');

    return (
      <div className="outer-box" id="outer-box2">
        <label>基本的Affix，具体屏幕顶部距离等于offetTop `zIndex={2001} offsetTop=200`</label>
        <Affix container={container} zIndex={2001} offsetTop={200}>
          <div className='content'>
            <span>affix</span>
          </div>
        </Affix>
      </div>
    )
  }
}


export default Demo2;