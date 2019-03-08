/**
 *
 * @title 可控制的提醒
 * @description 通过设置duration:6来设置时间，null为自动控制
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Notification from '../../src';

let notification = null;
Notification.newInstance({position: 'bottomRight'}, n => notification = n);

class Demo3 extends Component {
    constructor(props){
        super(props);
        this.manualClose = this.manualClose.bind(this);
    }
 closableFn() {
      notification.notice({
        content: <span>只可以自动关闭的提示</span>,
        duration: null,
        onClose() {
          console.log('closable close');
        },
        duration: 6,
        closable: false
      });
    }

 close(key) {
      notification.removeNotice(key);
    }

 manualClose() {
      const key = Date.now();
      notification.notice({
        content: <div>
          <span>只可以点击关闭的提示</span>
          <Button onClick={this.close.bind(this, key)} size="sm" style={{ position: 'absolute', right: 15, bottom: 15}}>知道了</Button>
        </div>,
        key,
        duration: null,
        closable: false
      });
    }
    render () {
        return (
            <div className="demoPadding">
                <Button colors="primary" onClick={this.closableFn}>自动关闭</Button>
                <Button colors="primary" onClick={this.manualClose}>手动关闭</Button>
            </div>
        )
    }
}

export default Demo3;
