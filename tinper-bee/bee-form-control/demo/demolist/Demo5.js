/**
 * @title 搜索框
 * @description 通过设置type="search"属性，让FormControl组件有搜索功能。type="search"下showClose不可用
 */

import React, {Component} from 'react';
import Button from 'bee-button';
import FormControl from '../../src';

export default class Demo5 extends Component {
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
        console.log("搜索" + value);
    }

    render() {
        return (
            <div className="demo5">
                <FormControl
                    className="demo5-input"
                    value={this.state.value}
                    onSearch={this.onSearch}
                    onChange={this.onChange}
                    type="search"
                />
            </div>

        )
    }
}