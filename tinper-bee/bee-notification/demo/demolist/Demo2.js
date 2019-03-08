/**
 *
 * @title 不同颜色的提醒
 * @description 默认提供两种颜色，一黑一白。
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Notification from '../../src';

let notification = null;
Notification.newInstance({position: 'bottomRight'}, n => notification = n);

class Demo2 extends Component {

 simpleLight() {
      notification.notice({
         title: '通知',
        content: '明天下午李总召开会议，请您参加',
        color: 'light'
      });
    }
    simpleDark() {
         notification.notice({
            title: '邮箱',
           content: '您收到一封邮件'
         });
       }
    render () {
        return (
            <div className="demoPadding">
                <Button onClick={this.simpleLight}>light notification</Button>
                <Button onClick={this.simpleDark} style={{ background: '#404040', color: '#fff' }}>dark notification</Button>
            </div>
        )
    }
}

export default Demo2;
