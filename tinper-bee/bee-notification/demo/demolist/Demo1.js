/**
 *
 * @title 默认提醒
 * @description
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Notification from '../../src';

let notification = null;
Notification.newInstance({position: 'bottomRight'}, n => notification = n);


class Demo1 extends Component {

    simpleFn() {
      notification.notice({
        content: <span>这是一个提示</span>,
        onClose() {
          console.log('simple close');
        },
      });
    }
    render () {

        return (
            <div className="demoPadding">
                <Button colors="secondary" onClick={this.simpleFn}>simple show</Button>
            </div>
        )
    }
}

export default Demo1;
