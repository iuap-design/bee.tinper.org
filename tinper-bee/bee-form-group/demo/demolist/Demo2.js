/**
 * @title FormGroup 动态校验实例
 * @description 限制只能输入数字
 */
import React, { Component } from 'react';
import FormControl from 'bee-form-control';
import FormGroup from '../../src';

class Demo2 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    validateState () {

        if ( this.state.value == "" ) {
            return "warning";
        }
        if ( /^[0-9]*$/.test(this.state.value) ) {
            return "success";
        } else {
            return "error"
        }
    }

    handerChange (e) {
        this.setState({value:e});
    }
    render (){
        return( 
            <div className="demo-form-control">
                <FormGroup ref='demo3FormGroup' validationState={this.validateState()}>
                    <FormControl ref="demo3FormControl" placeholder="只能输入数字" value={this.state.value} onChange={this.handerChange.bind(this)}/> 
                </FormGroup>
            </div>
        )
    }

}

export default Demo2