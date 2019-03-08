/**
 * @title Checkbox
 * @description `checked` 参数设置是否选中，`disabled`设置是否可用。
 */


import React, {Component} from 'react';
import Checkbox from '../../src';

class Demo1 extends Component {
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

    handleDblClick = (state) => {
		console.log(state);
    }

    render() {
        return (
            <div className="demo-checkbox">
                <Checkbox
                    disabled
                    className="test" >
                </Checkbox>
                <Checkbox
                    onDoubleClick={ this.handleDblClick }
                    ref="test"
                    checked={this.state.checkedFlag}
                    onChange={this.onChange}>
                    全选
                </Checkbox>
                <Checkbox
                    ref="test"
                    indeterminate
                    onChange={this.onChange}>
                    半选
                </Checkbox>
            </div>
        )
    }
}

export default Demo1;