/**
 *
* @title size 属性 
 * @description size="md" / "lg" / "sm" 分别表示中号(默认)、大号、小号
 *
 */


import React, { Component } from 'react';
import InputNumber from '../../src';

class Demo11 extends Component {
    render () {
        return (
            <div>
                <InputNumber
                    size='lg'
                    iconStyle="one"
                    min={-999999}
                    max={999999}
                />
                <br/>
                <InputNumber
                    size='sm'
                    iconStyle="one"
                    min={-999999}
                    max={999999}
                />
                <br/>
                <InputNumber
                    size='lg'
                    min={-999999}
                    max={999999}
                />
                <br/>
                <InputNumber
                    size='sm'
                    min={-999999}
                    max={999999}
                />
            </div>
        )
    }
}

export default Demo11;