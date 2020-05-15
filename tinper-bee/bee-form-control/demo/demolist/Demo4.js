/**
 * @title 设置文本框焦点事件 autoFocus 属性
 * @description 设置文本框焦点事件 autoFocus 属性
 */

import React, {Component} from 'react';
import Button from 'bee-button';
import FormControl from '../../src';

class Demo4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "test"
        }
    }

    render() {
        return (
            <div className="demo4">
                <FormControl
                    className="demo4-input"
                    //autoFocus
                    defaultValue={this.state.value}
                />
            </div>
        )
    }
}
export default Demo4;