/**
 * @title 红色填充的 Checkbox
 * @description `inverse` 参数设置选中为红色填充。
 */


import React, {Component} from 'react';
import Checkbox from '../../src';

class Demo6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedFlag: false
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log(e);
        this.setState({checkedFlag: e});
    }

    render() {
        return (
            <div className="demo-checkbox">
                <Checkbox
                    inverse
                    ref="test"
                    checked={this.state.checkedFlag}
                    onChange={this.onChange}>
                    全选
                </Checkbox>
                <Checkbox
                    inverse
                    ref="test"
                    indeterminate
                    onChange={this.onChange}>
                    半选
                </Checkbox>
            </div>
        )
    }
}

export default Demo6;