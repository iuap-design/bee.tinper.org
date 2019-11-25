
/**
 *
 * @title 选择日历
 * @description 一个通用的日历面板，支持年/月切换。
 *
 */

import React, { Component } from 'react';
import Calendar from '../../src';

function  onSelect(value) {
    console.log('onSelect',value);
}
class Demo2 extends Component {

    constructor(props, context) {
        super(props, context);

        this.state =  {
            type:'month',
        }
    }
    onTypeChange(type) {
        this.setState({
            type,
        });
    }

    onChange(value){
        console.log('onChange',value)
    }

    render() {
        return (
            <div>
               <Calendar
                   style={{ margin: 10 }}
                   fullscreen

                   onSelect={onSelect}
                   type={this.state.type}
                   onTypeChange={this.onTypeChange.bind(this)}
                   onChange={this.onChange.bind(this)}
               />
            </div>
        )
    }
}

export  default Demo2