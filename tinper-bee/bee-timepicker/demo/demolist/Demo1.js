/**
 *
 * @title 基本时间选择
 * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。
 *
 */



import React, { Component } from 'react';
import Timepicker from '../../src/index';
import moment from 'moment';

class Demo1 extends Component {

    onChange(time){
        console.log(time);
    }
    getPopupContainer() {
        return this.d || document.getElementById('d');
    }
    render() {
        return (
            <div id={"d"}>
                <Timepicker getPopupContainer={this.getPopupContainer} placeholder="选择时间" onChange={this.onChange.bind(this)} />
            </div>
        )
    }
}


export default Demo1;