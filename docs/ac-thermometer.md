# 温度计、液位计组件
[![npm version](https://img.shields.io/npm/v/ac-thermometer.svg)](https://www.npmjs.com/package/ac-thermometer)              

[![NPM downloads](http://img.shields.io/npm/dt/ac-thermometer.svg?style=flat)](https://npmjs.org/package/ac-thermometer)

<img src="http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/ynpm/image/wenduji.gif" width="90%">
---

### 1. 简介

温度计、液位计 应用组件
查看更多应用组件前往 [https://github.com/tinper-acs](https://github.com/tinper-acs)

本组件包含温度计`Thermometer`、液位计`ContentGage`两种组件

### 2. 安装

- 通过npm下载使用 `npm install ac-thermometer -S`


### 3. 使用

```js
import React, { Component } from 'react';
import { Col, Row } from 'tinper-bee';//加载组件库
import { Thermometer, ContentGage } from 'ac-thermometer';//导入应用组件
import 'tinper-bee/assets/tinper-bee.css';//加载组件库样式
import 'ac-thermometer/build/style.css';//加载温度计、液位计样式


class Demo extends Component {
    constructor() {
        super();
        this.state = {
            num: 0
        }
    }
    componentDidMount = () => {
        setInterval(() => {
            let num = Math.floor(Math.random() * (100 - 0 + 1) + 0);
            this.setState({ num });
        }, 3000);
    }
    render() {
        let { num } = this.state;
        return (
            <div>
                <Row style={{ "paddingTop": "30px" }}>
                    <Col md={2}>
                        <Thermometer
                            theme="light"
                            value={num}
                            max="100"
                            steps="5"
                            format="°C"
                            size="small"
                            height="400"
                        />
                    </Col>
                    <Col md={2}>
                        <Thermometer
                            theme="light"
                            value={num}
                            max="100"
                            steps="5"
                            format="°C"
                            size="normal"
                            height="400"
                        />
                    </Col>
                    <Col md={2}>
                        <Thermometer
                            theme="light"
                            value={num}
                            max="100"
                            steps="5"
                            format="°C"
                            size="large"
                            height="400"
                        />
                    </Col>
                    <Col md={1}>
                        <ContentGage
                            theme="light"
                            value={num}
                            max="100"
                            steps="5"
                            format="L"
                            size="small"
                            height="400"
                        />
                    </Col>
                    <Col md={1}>
                        <ContentGage
                            theme="light"
                            value={num}
                            max="100"
                            steps="5"
                            format="L"
                            size="normal"
                            height="400"
                        />
                    </Col>
                    <Col md={1}>
                        <ContentGage
                            theme="light"
                            value={num}
                            max="100"
                            steps="5"
                            format="L"
                            size="large"
                            height="400"
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo;

```
### 4. API

参数 | 类型 | 说明 | 默认值
---|---|---|---
theme|String|Light or Dark|light
value|Number|温度值|0
max|Number|温度计最大值|100
steps|Number|温度计分隔|0
format|String|单位格式|""
size|String|温度计的尺寸.可以是小的(small)、正常(normal)或者大的(large)|normal
height|Number|温度计的高度|200