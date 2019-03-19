/**
 *
 * @title 自定义日期渲染父级容器，扩展底边栏	
 * @description getCalendarContainer自定义日期渲染父级容器，renderFooter扩展底边栏
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src/index";

import zhCN from "../../src/locale/zh_CN";
import enUS from "../../src/locale/en_US";
import moment from "moment";

const format = "YYYY-MM-DD";

const dateInputPlaceholder = "选择日期";

class Demo6 extends Component {
    constructor(props) {
        super(props);
    }
    getCalendarContainer() {
        return this.d || document.getElementById('d');
    }
    onChange = d => {
        console.log(d);
    };
    render() {
        return (
            <div id="d" >
                <Row>
                    <Col md={6}>
                        <DatePicker
                            format={format}
                            onChange={this.onChange}
                            locale={zhCN}
                            defaultValue={moment()}
                            placeholder={dateInputPlaceholder}
                            getCalendarContainer={this.getCalendarContainer}
                            showToday={false}//是否显示今天
                            renderFooter={()=>{
                                return (
                                    <span> 我是底部 </span>
                                )
                            }}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo6;
