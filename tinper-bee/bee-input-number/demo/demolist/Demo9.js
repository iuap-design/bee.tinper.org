/**
 *
* @title 日期区间基础示例 
 * @description 使用 InputNumberGroup
 *
 */


import React, {Component} from 'react';
import InputNumber from '../../src';

const InputNumberGroup = InputNumber.InputNumberGroup;

class Demo9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [10,12]
        }
    }

    handleChange = (value) => {
        console.log(value);
        this.setState({
            value
        })
    }

    render() {
        return (
            <div>
                <InputNumberGroup 
                iconStyle='two'
                onChange={this.handleChange} 
                placeholder={['请输入最小值','请输入最大值']}/>
            </div>
        )
    }
}

export default Demo9;