/**
 *
 * @title horizontal Affix
 * @description 基本的Affix，水平滚动affix距离左侧位置确定
 *
 */


import React, { Component } from 'react';
import Button from 'bee-button';
import Affix from '../../src';

class Demo3 extends Component {
    render() {
       //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body
        let container = document.getElementsByClassName('page-container u-container example')[0]? document.getElementsByClassName('page-container u-container example')[0] : document.getElementById('tinperBeeDemo');

        return (
          <div className = "demo3"id = "outer-box3" >
            <label > 基本的Affix，水平滚动affix距离左侧位置确定 `zIndex={2001} horizontal offsetTop=450 ` </label> 
            <div className="affix-container">
              <Affix container={container} zIndex={2001} horizontal={true} offsetTop = { 450 } >
                <Button colors="primary">450px to affix top</Button>
              </Affix> 
            </div>
          </div>
        )
    }
}

export default Demo3;