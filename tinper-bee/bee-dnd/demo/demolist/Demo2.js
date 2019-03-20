
/**
 *
 * @title 单个元素沿x轴y轴拖拽
 * @description 设置axis="x"只可以沿着x轴拖拽，同理axis="y"只可以沿着y轴拖拽
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Dnd from '../../src/index';

class Demo2 extends Component {

    onStart=()=>{
        console.log('start');
    }
    onStop=()=>{
        console.log('stop');
    }
    render() {
        return (
            <div>
                <Dnd axis="x" onStart={this.onStart} onStop={this.onStop}>
                    <div className="demo">我只可延X轴拖拽</div>
                </Dnd>
            </div>

        );
    }
}

export default Demo2;