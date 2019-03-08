/**
 * @title 可控 Input
 * @description
 */

import React, {Component} from 'react';
import Button from 'bee-button';
import FormControl from '../../src';

export default class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "我是这样",
            select:false
        }
    }

    onChange = (value) => {
        this.setState({value: value});
    }

    onHander = () => {
        this.setState({
            value: "我改变了",
            select:true
        })
    }

    render() {
        return (
            <div className="demo2">
                <Button colors="primary" onClick={this.onHander}>修改输入框值</Button>
                <FormControl focusSelect={this.state.select} className="demo2-input" value={this.state.value} onChange={this.onChange}/>
            </div>

        )
    }
}