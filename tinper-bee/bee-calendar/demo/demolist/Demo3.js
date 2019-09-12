
/**
 *
 * @title 多语示例
 * @description 多语示例
 *
 */

import React, { Component } from 'react';
import Calendar from '../../src/index';
import zhCN from 'rc-calendar/lib/locale/zh_CN';

// 1、设置moment语言
// import moment from 'moment'
// moment.locale('zh-cn')

function onSelect(value) {
    console.log(value);
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

    render() {
        return (
            <div>
               <Calendar
                   style={{ margin: 10 }}
                   fullscreen
                   onSelect={onSelect}
                   type={this.state.type}
                   onTypeChange={this.onTypeChange.bind(this)}
                   locale={zhCN} // 2、设置 locale语言包
               />
            </div>
        )
    }
}

export  default Demo2