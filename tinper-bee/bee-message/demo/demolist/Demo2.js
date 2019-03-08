/**
 *
 * @title 不同显示位置的消息提醒
 * @description 一个页面的message只能设置一中显示位置，提供六种位置选择，查看每种示例，需每次刷新
 *
 */

import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import Button from 'bee-button';
import Message from '../../src';

 const top = function () {
   Message.create({content: 'This is a Info message', position: 'top'});
 };
 const bottom = function () {
   Message.create({content: 'This is a Info message', position: 'bottom'});
 };
 const topRight = function () {
   Message.create({content: 'This is a Info message', position: 'topRight'});
 };
 const topLeft = function () {
   Message.create({content: 'This is a Info message', position: 'topLeft'});
 };
 const bottomRight = function () {
   Message.create({content: 'This is a Info message', position: 'bottomRight'});
 };
 const bottomLeft = function () {
   Message.create({content: 'This is a Info message', position: 'bottomLeft'});
 };
class Demo2 extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="paddingDemo">
            <Button
                colors="info"
                onClick={top}>
                top
            </Button>
            <Button
                colors="info"
                onClick={bottom}>
                bottom
            </Button>
            <Button
                colors="info"
                onClick={topRight}>
                topRight
            </Button>
            <Button
                colors="info"
                onClick={topLeft}>
                topLeft
            </Button>
            <Button
                colors="info"
                onClick={bottomRight}>
                bottomRight
            </Button>
            <Button
                colors="info"
                onClick={bottomLeft}>
                bottomLeft
            </Button>
            </div>
        )
    }
}

export default Demo2;
