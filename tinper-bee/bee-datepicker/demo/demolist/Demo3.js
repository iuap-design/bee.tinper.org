/**
 *
 * @title 不可选择日期和时间
 * @description 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src";
import moment from "moment";

const { MonthPicker, RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}

class Demo3 extends Component {
  render() {
    return (
      <div className='demo3'>
        <Row className='demo3-item'>
            <DatePicker
              placeholder="选择日期"
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledDate}
              disabledTime={disabledDateTime}
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            />
        </Row>
        <Row className='demo3-item'>
            <MonthPicker disabledDate={disabledDate} placeholder="选择月份" />
        </Row>
        <Row className='demo3-item'>
            <RangePicker
              placeholder={'开始 ~ 结束'}
              disabledDate={disabledDate}
              disabledTime={disabledRangeTime}
              showTime={{
                hideDisabledOptions: true,
                defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
              }}
              format="YYYY-MM-DD HH:mm:ss"
            />
        </Row>
      </div>
    );
  }
}

export default Demo3;
