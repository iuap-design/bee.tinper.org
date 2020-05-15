/**
 *
 * @title 容器
 * @description 通过document对象的方法，指定`container`属性。
 *
 */

import React, { Component } from 'react';
import Loading from '../../src';

class Demo4 extends Component {
    constructor(props) {
        super(props);
    }
    getElement =()=>{
        return document.querySelector('.demo4')
    }
    render() {
        return (
            <div className="demo4">
                <Loading container={this.getElement} show={true} />
            </div>
        )
    }
}


export default Demo4;
