/**
 *
 * @title 单个元素拖拽把手
 * @description 设置 handle，值为选择器，例如 '.handle'
 *              设置不可拖拽区域 cancel，值为选择器，例如 '.handle'
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Dnd from '../../src/index';

class Demo4 extends Component {

    onStart=()=>{
        console.log('start');
    }
    onStop=()=>{
        console.log('stop');
    }

    render() {
        return (
            <div className="demo-4">
                <div>
                    <Dnd handle=".handle" onStart={this.onStart} onStop={this.onStop}>
                        <div className="demo4 demo">
                            需要拖拽把手
                            <div className="handle"><Icon type="uf-move"></Icon></div>
                        </div>
                    </Dnd>
                </div>
            </div>


        );
    }
}

export default Demo4;