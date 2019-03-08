/**
 *
 * @title 自定义展示日期面板，外层输入框可输入
 * @description open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input
 */

import React, {Component} from "react";
import {Row, Col} from "bee-layout";
import DatePicker from "../../src/index";
import zhCN from "../../src/locale/zh_CN";
import enUS from "../../src/locale/en_US";
import moment from "moment";
import Icon from 'bee-icon';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const format = "YYYY-MM-DD";

const dateInputPlaceholder = "选择日期";

class Demo7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            open: false
        };
    }
    onSelect = d=> {
        console.log(d);
    }
    onChange = (d, dataString) => {
        this.setState({
            value:d
        })
        console.log('onChange',dataString)
    };
    onOpenChange = open => {
        console.log(open)
    }
    open = d => {
        this.setState({
            open: !this.state.open
        })
    }
    onClick = (e,d,str) => {
        console.log(d);
    }
    outInputKeydown = ()=>{
        console.log('keydown')
    }
    render() {
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <DatePicker
                            format={format}
                            onSelect={this.onSelect}
                            onChange={this.onChange}
                            locale={zhCN}
                            open={this.state.open}
                            defaultValue={moment('2018-01-01')}
                            value={this.state.value}
                            onOpenChange={this.onOpenChange}
                            placeholder={dateInputPlaceholder}
                            className={"Demo7"}
                            onClick={this.onClick}
                            keyboardInput={true}
                            showDateInput={false}
                        />
                    </Col>
                    <Col md={3}>
                        <button className="u-button" onClick={this.open}>展开面板</button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo7;
