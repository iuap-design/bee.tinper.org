/**
 *
 * @title 多语示例
 * @description 设置locale属性，并设置moment语言
 */

import React, {Component} from "react";
import {Row, Col} from "bee-layout";
import DatePicker from "../../src";
import zhCN from "../../src/locale/zh_CN";//1、引入日期组件语言包
import enUS from "../../src/locale/en_US";

import moment from "moment";//2、引入 moment

moment.locale('zh-cn');//3、设置moment语言，更多语言参考 http://momentjs.cn/docs/#/i18n/

const format = "YYYY-MM-DD dddd";

class Demo12 extends Component {
    
    onChange = (d, dataString) => {
        console.log('change')
        console.log(d, dataString)
    };
    render() {
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <DatePicker
                            locale={zhCN}//4、将需要的语言包传入到日期组件locale属性
                            format={format}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo12;
