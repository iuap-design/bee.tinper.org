/**
 *
 * @title 默认按钮
 * @description 主按钮、次按钮用于按钮组合中的寓意[eg: 弹框中 确定，取消]、事件
 *
 */

import React, { Component } from 'react';
import Button from '../../src';

 class Demo1 extends Component {

    open() {
       alert("onClick");
    }

    render () {
        return (
            <div className="demoPadding">
                <Button colors="primary" onClick={ this.open } >主按钮</Button>
                <Button colors="secondary">次按钮</Button>
            </div>
        )
    }
}

export default Demo1;
