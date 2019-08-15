/**
 *
* @title 基础示例 
 * @description 最简单输入控制
 *
 */


import React, {Component} from 'react';
import InputNumber from '../../src';
import Form from 'bee-form';

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    handleChange = (value) => {
        console.log(value);
        this.setState({
            value: value
        })
    }

    render() {
        let {getFieldProps} = this.props.form;
        return (
            <div>
                {/* <InputNumber precision={2} min={0}  value={this.state.value} onChange={ this.handleChange }/> */}
                <InputNumber
                iconStyle="one"
                min={0}
                max={999999}
                {...getFieldProps("valueStd", {
                    initialValue: 0
                })}
                />
            </div>
        )
    }
}

export default Form.createForm()(Demo1);