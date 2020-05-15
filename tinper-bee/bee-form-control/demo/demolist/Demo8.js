/**
 * @title onChange事件防抖
 * @description
 */

import React, {Component} from 'react';
import FormControl from '../../src';

export default class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "test"
        }
    }

    onChange = (v) => {
        this.setState({value: v});
        console.log('onChange事件防抖')
    }
    onBlur = (v) => {
        console.log(v);
    }

    render() {
        return (
            <div className="demo8">
                <FormControl
                    className="demo8-input"
                    value={this.state.value}
                    onChange={this.onChange}
                    debounceDelay={1500}
                />
            </div>

        )
    }
}