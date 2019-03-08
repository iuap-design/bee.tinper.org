/**
 * @title 获取Input对象句柄
 * @description 获取对象句柄，两种方式。
 */

import React, {Component} from 'react';
import Button from 'bee-button';
import FormControl from '../../src';

class Demo3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "test"
        }
    }

    onHander = () => {
        this.textInput.input.focus();
    }

    render() {
        return (
            <div className="demo3">
                <Button colors="primary" onClick={this.onHander}>获取input对象句柄</Button>

                <FormControl
                    className="demo3-input"
                    defaultValue={this.state.value}
                    ref={(input) => {this.textInput = input}}
                />
                <FormControl
                    className="demo3-input"
                    defaultValue={this.state.value}
                    ref="test"
                />
            </div>

        )
    }
}
export default Demo3;