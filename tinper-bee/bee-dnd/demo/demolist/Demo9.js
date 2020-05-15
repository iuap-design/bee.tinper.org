
/**
 *
 * @title DOM集合拖拽列表排序
 * @description list传dom集合
 *
 */

import React, { Component } from 'react';
import Dnd from '../../src/index';

class Demo9 extends Component {

    onDragStart=(result,list)=>{
        console.log('开始');
    }
    onDragEnd=(result,list)=>{
        console.log('结束');
    }
    render() {
        let list=[<div>DOM第一</div>,<div>DOM第二</div>,<div>DOM第三</div>,<div>DOM第四</div>,<div>DOM第五</div>];
        return (
           <Dnd list={list} onStart={this.onDragStart} onStop={this.onDragEnd} />
        );
    }
}

export default Demo9