
/**
 *
 * @title 两列纵向拖拽
 * @description 设置 type='betweenVertical'。 如果不设置高度以及 overflow: scroll; 则高度会自动撑开
 *
 */

import React, { Component } from 'react';
import Dnd from '../../src/Dnd';

class Demo90 extends Component {

    render() {
        let list1=['第一','第二','第三','第四','第五'];
        let list2=['1','2','3','4','5'];
        return (
           <Dnd className='demo91' list={list1} otherList={list2} type='betweenVertical'  />
        );
    }
}

export default Demo90