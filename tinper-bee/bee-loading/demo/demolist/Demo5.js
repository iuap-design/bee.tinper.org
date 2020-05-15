/**
 *
 * @title 不同尺寸的Loading
 * @description 通过设置`size`属性，来控制loading图标的大小
 *
 */

import React, { Component } from 'react';
import Loading from '../../src';


class Demo5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.a = null;
    }


    render() {
        return (
                <div className="demo5">
                    <Loading size="sm" container={this} show={this.state.show} />
                    <Loading container={this} show={this.state.show} />
                    <Loading size="lg" container={this} show={this.state.show} />
                </div>
        )
    }
}


export default Demo5;