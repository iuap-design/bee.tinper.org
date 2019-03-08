/**
 *
 * @title 其它评分样式
 * @description character的使用
 *
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Rate from '../../src';

class Demo4 extends Component {
    constructor(props){
        super(props);
        this.state={
            v1:1,
            v2:2,
            v3:3,
            v4:4
        };
    }
    handChange=(value,type)=>{
        switch(type){
            case 1:
            this.setState({
                v1:value
            });
            break;
            case 2:
            this.setState({
                v2:value
            });
            break;
            case 3:
            this.setState({
                v3:value
            });
            break;
            case 4:
            this.setState({
                v4:value
            });
            break;
        }
    }
    render() {
        return (
            <ul style={{"listStyle":"none"}}>
                <li><Rate character="A" value={this.state.v1} onChange={(v)=>{this.handChange(v,1)}} /></li>
                <li><Rate character="字" value={this.state.v2} onChange={(v)=>{this.handChange(v,2)}} /></li>
                <li><Rate character={<Icon type="uf-bell" />} value={this.state.v3} onChange={(v)=>{this.handChange(v,3)}} /></li>
                <li><Rate character={<Icon type="uf-heart" />} value={this.state.v4} onChange={(v)=>{this.handChange(v,4)}}/></li>
            </ul>
        )
    }
}

export default Demo4;