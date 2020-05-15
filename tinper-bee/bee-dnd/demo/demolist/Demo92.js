
/**
 *
 * @title 两列横向拖拽
 * @description 设置 type='betweenVertical'
 *
 */

import React, { Component } from 'react';
import Dnd from '../../src/Dnd';

class Demo90 extends Component {
    onDragStart=(result,list)=>{
        console.log('开始');
    }
    onDragEnd=(result,listObj)=>{
        console.log('结束');
        console.log(listObj)
    }
    render() {
        let list1=['第一','第二','第三','第四','第五'];
        let list2=['1','2','3','4','5'];
        return (
           <Dnd list={list1} otherList={list2} type='betweenHorizontal' onStart={this.onDragStart} onStop={this.onDragEnd} />
        );
    }
}

export default Demo90