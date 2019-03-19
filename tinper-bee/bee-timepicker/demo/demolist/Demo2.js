/**
 *
 * @title 12小时制时间选择
 * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。
 *
 */

import React, { Component } from 'react';
import Timepicker from '../../src/index';
import moment from 'moment';


class Demo2 extends Component {

    onChange(time,timeString){
        console.log(time, timeString);
    }
    render() {
        const format = 'h:mm a';
        const now = moment().hour(0).minute(0);
        return (
            <div>
                <Timepicker
                    format={format}
                    showSecond={false}
                    defaultValue={now}
                    placeholder="选择时间"
                    onChange={this.onChange.bind(this)}
                    use12Hours
                />
            </div>
        )
    }
}

export default Demo2;