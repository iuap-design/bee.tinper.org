/**
 * @title 不可用状态
 * @description 添加 disabled 属性即可让输入框处于不可用状态
 */

import React, {Component} from 'react';
import FormControl from '../../src';

export default class Demo1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="demo8">
                <FormControl disabled value="test" className="demo8-input"/>
            </div>

        )
    }
}