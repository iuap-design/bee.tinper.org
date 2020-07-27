/**
 *
 * @title 设置container容器示例
 * @description 在DidMount里初始化notification，传入container
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Notification from '../../src';


class Demo1 extends Component {

    componentDidMount(){
      Notification.newInstance({
        position: 'bottomRight',
        container:()=>document.getElementById('container')
      }, n => this.notification = n);
    }
    simpleFn=()=> {
      this.notification.notice({
        content: <span>这是一个提示</span>,
        onClose() {
          console.log('simple close');
        },
      });
    }
    render () {

        return (
            <div className="demoPadding" id='container'>
                <Button colors="secondary" onClick={this.simpleFn}>simple show</Button>
            </div>
        )
    }
}

export default Demo1;
