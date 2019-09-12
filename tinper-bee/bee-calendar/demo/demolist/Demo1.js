
/**
 *
 * @title 卡片模式
 * @description 用于嵌套在空间有限的容器中
 *
 */

import React, { Component } from 'react';
import Calendar from '../../src/index';

function onSelect(value) {
    console.log(value);
}


class Demo1 extends Component {
    render() {
        return (
            <div>
               <Calendar
                   style={{ margin: 10 }}
                   fullscreen={false}
                   onSelect={onSelect}
               />
            </div>
        )
    }
}


export  default Demo1