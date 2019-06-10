/**
 *
 * @title 选择日期
 * @description 以「日期」为基本单位，基础的日期选择控件
 */

import React, {Component} from "react";
import {Row, Col} from "bee-layout";
import DatePicker from "../../src/index";

const format = "YYYY-MM-DD dddd";
const dateInputPlaceholder = "选择日期";

class Demo1 extends Component {
    onSelect = (d, dataString)  => {
        console.log('select')
        console.log(d, dataString);
    }
    onClick = d => {
        console.log('click')
    }
    onChange = (d, dataString) => {
        console.log('change')
        console.log(d, dataString)
    };
    onDateInputBlur = (e,v) => {
        console.log(e,v);
    }
    render() {
        var self = this;
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <DatePicker
                            format={format}
                            onSelect={this.onSelect}
                            onChange={this.onChange}
                            onClick={this.onClick}
                            onDateInputBlur={this.onDateInputBlur}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo1;
