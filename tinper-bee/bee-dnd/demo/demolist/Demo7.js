
/**
 *
 * @title 在指定容器中拖拽
 * @description 设置只可以在指定容器中移动
 * bounds的也可以设置为选择器,bounds=".demo8-parent"意为在class=demo8-parent的容器中移动
 */

import React, { Component } from 'react';
import Dnd from '../../src/index';

class Demo7 extends Component {

    onStart=()=>{
        console.log('start');
    }
    onStop=()=>{
        console.log('stop');
    }
    render() {
        return (
            <div>
                <div className="demo7-parent">
                    <Dnd bounds=".demo7-parent" onStart={this.onStart} onStop={this.onStop}>
                        <div className="demo">我只能在父级元素中移动</div>
                    </Dnd>
                </div>
            </div>


        );
    }
}

export default Demo7;