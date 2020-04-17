/**
 *
 * @title 选择日期
 * @description 以「日期」为基本单位，基础的日期选择控件
 */

import React, {Component} from "react";
import {Row, Col} from "bee-layout";
import DatePicker from "../../src";

const format = ["YYYY.MM.DD","DD.MM.YYYY","YYYYMMDD","DDMMYYYY"];
const dateInputPlaceholder = "选择日期";

class Demo1 extends Component {
    onSelect = (d, dataString)  => {
        console.log('select')
        console.log(d, dataString);
    }
    onChange = (d, dataString) => {
        console.log('change')
        console.log(d, dataString)
    };

    render() {
        var self = this;
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <DatePicker
                            format={format}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo1;
