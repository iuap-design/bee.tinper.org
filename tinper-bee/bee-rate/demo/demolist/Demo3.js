/**
 *
 * @title 评分加显示文案
 * @description onChange和onHoverChange的使用
 *
 */

import React, { Component } from 'react';
import Rate from '../../src';

class Demo3 extends Component {
    constructor(props){
        super(props);
        this.state={
            value:3
        };
    }
    handleChange=(value)=>{
        this.setState({
            value:value
        })
    }
    render() {
        return (
            <div>
                <Rate value={this.state.value} onChange={this.handleChange} count={8}  />
                <span>{this.state.value}</span>
            </div>
        )
    }
}

export default Demo3;