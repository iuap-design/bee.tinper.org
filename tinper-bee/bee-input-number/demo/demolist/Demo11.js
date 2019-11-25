/**
 *
* @title size 属性 
 * @description size=md/lg/sm 分别表示中号(默认)、大号、小号
 *
 */


import React, { Component } from 'react';
import InputNumber from '../../src';
import Form from 'bee-form';

class Demo11 extends Component {
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

    render () {
        let { getFieldProps } = this.props.form;
        return (
            <div>
                <InputNumber
                    size='lg'
                    // iconStyle="one"
                    min={-999999}
                    max={999999}
                    {...getFieldProps("valueStd", {
                        initialValue: 0
                    })}
                />

            </div>
        )
    }
}

export default Form.createForm()(Demo11);