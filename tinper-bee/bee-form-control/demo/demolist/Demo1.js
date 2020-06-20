/**
 * @title 不同size Input
 * @description
 */

import React, {Component} from 'react';
import Button from 'bee-button';
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
    }
    onBlur = (v,e) => {
        console.log(v);
    }

    render() {
        return (
            <div className="demo1">
                <FormControl
                    className="demo1-input"
                    value={this.state.value}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    size="sm"
                    focusSelect={true}
                    showClose={true}
                    maxLength="3"
                />
                <FormControl
                    className="demo1-input"
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <FormControl
                    className="demo1-input"
                    value={this.state.value}
                    onChange={this.onChange}
                    size="lg"
                />
            </div>

        )
    }
}