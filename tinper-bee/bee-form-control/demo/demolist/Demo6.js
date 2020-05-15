/**
 * @title 清空按钮
 * @description 通过设置 showClose 属性，让FormControl组件有清空功能
 */

import React, {Component} from 'react';
import Button from 'bee-button';
import FormControl from '../../src';

export default class Demo6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "test"
        }
    }

    onChange = (value) => {
        this.setState({value: value});
    }

    onSearch = (value) => {
        console.log(value);
    }

    render() {
        return (
            <div className="demo6">
                <FormControl
                    className="demo6-input"
                    value={this.state.value}
                    onChange={this.onChange}
                    showClose
                />
            </div>

        )
    }
}