/**
 *
 * @title 不同颜色的消息提醒
 * @description 提供10种颜色，包括黑色白色及四个语义色及四个浅语义色
 *
 */

import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import Button from 'bee-button';
import Message from '../../src';

 const info = function () {
   let aa = Message.create({content: 'This is a Info message', color: 'info', duration: null});

 };
 const danger = function () {
   Message.create({content: 'This is a danger message', color: 'danger'});
 };
 const success = function () {
   Message.create({content: 'This is a success message', color: 'success'});
 };
 const warning = function () {
   Message.create({content: 'This is a warning message', color: 'warning'});
 };
 const loading = function () {
   Message.create({content: 'This is a dark message', color: 'dark'});
 };
 const light = function () {
   Message.create({content: 'This is a light message', color: 'light'});
 };
class Demo1 extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="paddingDemo">
            <Button
                colors="info"
                onClick={info}>
                info
            </Button>
            <Button
                colors="danger"
                onClick={danger}>
                danger
            </Button>
            <Button
                colors="warning"
                onClick={warning}>
                warning
            </Button>
            <Button
                colors="success"
                onClick={success}>
                success
            </Button>
            <Button
                colors="primary"
                onClick={loading}>
                dark
            </Button>
            <Button
                shape="border"
                onClick={light}>
                light
            </Button>
            </div>
        )
    }
}


export default Demo1;
