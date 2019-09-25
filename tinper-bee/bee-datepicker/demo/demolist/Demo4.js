/**
 *
 * @title 选择年，年月，周，日期范围
 * @description 选择年，年月，周，日期范围基本示例
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src/index";
import moment from "moment";
import zhCN from "../../src/locale/zh_CN";
const { YearPicker,MonthPicker,WeekPicker,RangePicker } = DatePicker;


class Demo4 extends Component {
    onChange = (d, dataString) => {
        console.log('change')
        console.log(d);
        console.log(dataString);
    };
    onSelect = d => {
        console.log('select')
        console.log(d);
    }
    onClear = () => {
        console.log('clear')
    }
    /**
     *@param e 事件对象
     *@param startValue 开始时间
     *@param array 包含开始时间和结束时间的数组
     */
    onStartInputBlur = (e,startValue,array) => {
        console.log('RangePicker面板 左输入框的失焦事件',startValue,array)
    }
    /**
     *@param e 事件对象
     *@param endValue 结束时间
     *@param array 包含开始时间和结束时间的数组
     */
    onEndInputBlur = (e,endValue,array) => {
        console.log('RangePicker面板 右输入框的失焦事件',endValue,array)
    }
    render() {
        return (
            <div>
                <Row style={{'marginBottom':'10px'}}>
                    <Col md={6}>
                        <YearPicker
                            format="YYYY"
                            onChange={this.onChange}
                            onSelect={this.onSelect}
                            locale={zhCN}
                            placeholder="选择年"
                            defaultValue={moment()}
                            showClose={false}
                        />
                    </Col>
                    <Col md={6} style={{'marginBottom':'10px'}}>
                        <MonthPicker
                            format="YYYY-MM"
                            onSelect={this.onSelect}
                            onChange={this.onChange}
                            locale={zhCN}
                            defaultValue={moment()}
                            placeholder="选择年月"
                            onClear={this.onClear} 
                            showClose={false}
                        />
                    </Col>
                    <Col md={6} style={{'marginBottom':'10px'}}>
                        <WeekPicker 
                        defaultValue={moment()}
                        onSelect={this.onSelect}
                        onChange={this.onChange}
                        placeholder="选择周" 
                        showClose={false}
                        />
                    </Col>
                    <Col md={6} style={{'marginBottom':'10px'}}>
                        <RangePicker
                            placeholder={'开始 ~ 结束'}
                            dateInputPlaceholder={['开始', '结束']}
                            showClear={true}
                            onChange={this.onChange}
                            onPanelChange={(v)=>{console.log('onPanelChange',v)}}
                            showClose={true}
                            onStartInputBlur={this.onStartInputBlur}
                            onEndInputBlur={this.onEndInputBlur}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo4;
