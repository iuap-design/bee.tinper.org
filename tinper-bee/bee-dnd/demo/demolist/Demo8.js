/**
 *
 * @title 数据集合拖拽列表排序
 * @description 增加list 可以为 [1,2,3]数组，
 *              也可以为 [{},{}...]，需要配置 showKey 。
 *              也可以为 dom集合，见后边示例
 *
 */

import React, { Component } from 'react';
import Dnd from '../../src/index';

class Demo8 extends Component {
    
    onDragStart=(result,list)=>{
        console.log('开始');
    }
    onDragEnd=(result,list)=>{   
        console.log('结束');
    }
    onDragUpdate=(result)=>{
        console.log('update')
    }
    render() {
        let list=[
            {
                name:'第一',
                code:'a'
            },
            {
                name:'第二',
                code:'b'
            },
            {
                name:'第三',
                code:'c'
            },
            {
                name:'第四',
                code:'d'
            },
            {
                name:'第五',
                code:'e'
            },
        ];
        return (
            <Dnd showKey='name' list={list} onDragUpdate={this.onDragUpdate} onStart={this.onDragStart} onStop={this.onDragEnd}/>
        );
    }
}

export default Demo8;