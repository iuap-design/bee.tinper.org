/**
 *
 * @title 禁用日期
 * @description 设置 disabled
 */

import React, {Component} from "react";
import {Row, Col} from "bee-layout";
import DatePicker from "../../src/index";
import moment from "moment";

const format = "YYYY-MM-DD dddd";
const dateInputPlaceholder = "选择日期";

class Demo2 extends Component {
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
                            disabled
                            defaultValue={moment()}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo2;
