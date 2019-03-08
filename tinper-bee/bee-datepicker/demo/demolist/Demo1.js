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
    onSelect = d => {
        console.log(d);
    }
    onChange = (d, dataString) => {
        console.log(dataString);
    };
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
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo1;
