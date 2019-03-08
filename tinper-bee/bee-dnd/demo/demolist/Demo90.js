
/**
 *
 * @title 横向拖拽列表排序
 * @description type='horizontal'
 *
 */

import React, { Component } from 'react';
import Dnd from '../../src/Dnd';

class Demo90 extends Component {

    render() {
        let list=['第一','第二','第三','第四','第五'];
        return (
           <Dnd list={list} type='horizontal'  />
        );
    }
}

export default Demo90