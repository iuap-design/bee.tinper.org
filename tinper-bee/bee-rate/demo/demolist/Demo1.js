/**
 *
 * @title 默认Rate
 * @description 这是描述
 *
 */

import React, { Component } from 'react';
import Rate from '../../src';

class Demo1 extends Component {
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
            <Rate value={this.state.value} onChange={this.handChange}/>
        ) 
    }
}

export default Demo1;