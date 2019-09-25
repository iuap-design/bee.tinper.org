/**
 *
 * @title 额外的页脚
 * @description 在浮层中加入额外的页脚，以满足某些定制信息的需求。
 */

import React, {Component} from "react";
import {Row, Col} from "bee-layout";
import DatePicker from "../../src/index";

const { RangePicker, MonthPicker } = DatePicker;

class Demo9 extends Component {
    render() {
        return (
            <div className="demo9">
                <Row>
                    <Col md={6}>
                        <DatePicker renderFooter={() => '额外页脚'} placeholder="选择日期"/>
                    </Col>
                    
                    <Col md={6}>
                        <DatePicker renderFooter={() => '额外页脚'} showTime placeholder="选择日期"/>
                    </Col>
                    
                    <Col md={6}>
                        <RangePicker renderFooter={() => '额外页脚'} placeholder={'开始 ~ 结束'}/>
                    </Col>
                    
                    <Col md={6}>
                        <RangePicker renderFooter={() => '额外页脚'} showTime placeholder={'开始 ~ 结束'}/>
                    </Col>
                    
                    <Col md={6}>
                        <MonthPicker renderFooter={() => '额外页脚'} placeholder="选择月" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo9;
