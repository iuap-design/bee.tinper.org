/**
 *
* @title 数字区间基础示例 
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
            <div className='demo9'>
                <InputNumberGroup 
                iconStyle='two'
                value={this.state.value}
                onChange={this.handleChange} 
                placeholder={['请输入最小值','请输入最大值']}/>
            </div>
        )
    }
}

export default Demo9;