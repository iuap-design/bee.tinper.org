/**
 * @title 配合toolTip使用
 * @description 
 */

import React, {Component} from 'react';
import Button from 'bee-button';
import FormControl from '../../src';
import Tooltip from 'bee-tooltip';

export default class Demo6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "test"
        }
    }

    onChange = (value) => {
        this.setState({value: value});
    }

    onSearch = (value) => {
        console.log(value);
    }

    render() {
        return (
            <div className="demo7">
                <Tooltip trigger="click" 
                inverse rootClose placement="right" 
                overlay={this.state.value}>
                    <FormControl
                        className="demo7-input"
                        value={this.state.value}
                        onChange={this.onChange}
                    />
				</Tooltip>
               
            </div>

        )
    }
}