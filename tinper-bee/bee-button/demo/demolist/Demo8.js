/**
 *
 * @title 事件按钮
 * @description 点击按钮触发事件
 *
 */

import React, { Component } from 'react';
import Button from '../../src';

 class Demo2 extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        alert("谢谢你点我")
    }

    render() {
        return (
            <Button colors="primary" onClick={ this.handleClick }>事件按钮</Button>
        )
    }
}

export default Demo2;