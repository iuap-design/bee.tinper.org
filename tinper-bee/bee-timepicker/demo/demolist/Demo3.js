/**
 *
 * @title 限定时间
 * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。
 *
 */

import React, { Component } from 'react';
import Timepicker from '../../src/index';
import moment from 'moment';

const showSecond = true;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';

class Demo3 extends Component {

    onChange(value) {
        console.log(value && value.format(str));
    }

    generateOptions(length, excludedOptions) {
        const arr = [];
        for (let value = 0; value < length; value++) {
            if (excludedOptions.indexOf(value) < 0) {
                arr.push(value);
            }
        }
        return arr;
    }

    disabledHours() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
    }

    disabledMinutes(h) {
        switch (h) {
            case 9:
                return this.generateOptions(60, [30]);
            case 21:
                return this.generateOptions(60, [0]);
            default:
                return this.generateOptions(60, [0, 30]);
        }
    }

    disabledSeconds(h, m) {
        return [h + m % 60];
    }

    render() {
        const format = 'h:mm a';
        const now = moment().hour(0).minute(0);
        return (
            <div>
                <Timepicker
                    showSecond={showSecond}
                    defaultValue={now}
                    onChange={this.onChange.bind(this)}
                    disabledHours={this.disabledHours}
                    disabledMinutes={this.disabledMinutes.bind(this)}
                    disabledSeconds={this.disabledSeconds.bind(this)}
                />
            </div>
        )
    }
}

export default Demo3;