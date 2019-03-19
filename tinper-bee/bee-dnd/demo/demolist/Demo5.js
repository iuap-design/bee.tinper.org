
/**
 *
 * @title 每次拖拽移动距离
 * @description 设置 grid={[x,y]}
 *
 */

import React, { Component } from 'react';
import Dnd from '../../src/index';

class Demo5 extends Component {

    onStart=()=>{
        console.log('start');
    }
    onStop=()=>{
        console.log('stop');
    }
    render() {
        return (
            <div>
                <Dnd grid={[25, 25]} onStart={this.onStart}  onStop={this.onStop}>
                    <div className="demo">我每次拖拽可移动25px</div>
                </Dnd>
            </div>

        );
    }
}

export default Demo5;