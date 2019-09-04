/**
 *
 * @title 容器
 * @description 指定`container`属性为`this`，可显示在该组件的上面。
 *
 */

import React, { Component } from 'react';
import Loading from '../../src';

class Demo2 extends Component {
    render() {
        return (
            <div className="demo2">
                <Loading container={this} show={true}/>
            </div>
        )
    }
}

export default Demo2;