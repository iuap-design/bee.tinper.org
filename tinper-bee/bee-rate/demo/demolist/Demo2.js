/**
 *
 * @title 支持选中半星
 * @description 将allowHalf设置为true即可
 *
 */

import React, { Component } from 'react';
import Rate from '../../src';

class Demo2 extends Component {
    constructor(props){
        super(props);
        this.state={
            value:3
        };
    }
    handChange=value=>{
        this.setState({
            value
        })
    }
    render() {
        return (
            <Rate allowHalf={true} value={this.state.value} onChange={this.handChange}/>
        )
    }
}

export default Demo2;