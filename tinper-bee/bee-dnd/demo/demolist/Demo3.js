
/**
 *
 * @title 设置元素不可拖拽
 * @description 设置 onStart 的返回值为false，则不可以拖拽
 *
 */

import React, { Component } from 'react';
import Dnd from '../../src/index';

class Demo3 extends Component {

    onStart=()=>{
        console.log('start');
        return false;
    }
    onStop=()=>{
        console.log('stop');
    }
    render() {
        return (
            <div>
                <Dnd onStart={this.onStart}  onStop={this.onStop}>
                    <div className="demo">我不可以拖拽</div>
                </Dnd>
            </div>

        );
    }
}
export default Demo3;