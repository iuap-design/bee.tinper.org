/**
 *
 * @title 单个元素拖拽把手
 * @description 设置 handle，值为选择器，例如 '.handle'
 *              设置不可拖拽区域 cancel，值为选择器，例如 '.handle'
 */

import React, { Component } from 'react';
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
                        <div className="demo4 ">
                            <div className="handle">我是把手</div>
                            <div className="drag-context">需要拖拽把手</div>
                        </div>
                    </Dnd>
                </div>
                <div>
                    <Dnd cancel=".handle" >
                        <div className="demo4 ">
                            <div className="handle">我是把手</div>
                            <div className="drag-context">不要拖拽把手</div>
                        </div>
                    </Dnd>
                </div>
            </div>


        );
    }
}

export default Demo4;