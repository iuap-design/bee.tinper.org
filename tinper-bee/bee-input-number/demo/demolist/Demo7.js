/**
 *
* @title 显示千分符示例
 * @description 设置toThousands={true}  只会在显示的时候带有千分符，onChange里的回调还是原来不带千分符的值
 *
 */


import React, {Component} from 'react';
import InputNumber from '../../src';

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    handleChange = (value) => {
        console.log('onChange:   '+value)
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div>
                <InputNumber toThousands={true} precision={2} min={0} value={this.state.value} onChange={ this.handleChange }/>
            </div>
        )
    }
}

export default Demo1;