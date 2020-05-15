
/**
 *
 * @title 基础拖拽
 * @description 将某个元素设置为可拖拽
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Dnd from '../../src/index';

class Demo1 extends Component {

    onStart=()=>{
        console.log('start');
    }
    onStop=()=>{
        console.log('stop');
    }
    render() {
        return (
            <div>
                <Dnd onStart={this.onStart} onStop={this.onStop}>
                    <div className="demo">我可随意拖拽</div>
                </Dnd>
            </div>

        );
    }
}

export default Demo1;