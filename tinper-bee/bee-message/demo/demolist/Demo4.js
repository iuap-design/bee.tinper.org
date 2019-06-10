/**
 *
 * @title 不同显示位置的消息提醒
 * @description 一个页面的message只能设置一中显示位置，提供六种位置选择，查看每种示例，需每次刷新
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Message from '../../src';

 const top = function () {
    Message.destroy();
    Message.create({content: '审批单据提交成功，你可以在审批中心关注单据审批状态。', position: 'top', color: 'successlight'});
 };
 const bottom = function () {
    Message.destroy();
    Message.create({content: '审批单据提交成功，你可以在审批中心关注单据审批状态。', position: 'bottom', color: 'successlight'});
 };
 const topRight = function () {
    Message.destroy();
    Message.create({content: '审批单据提交成功，你可以在审批中心关注单据审批状态。', position: 'topRight', color: 'successlight'});
 };
 const topLeft = function () {
    Message.destroy();
    Message.create({content: '审批单据提交成功，你可以在审批中心关注单据审批状态。', position: 'topLeft', color: 'successlight'});
 };
 const bottomRight = function () {
    Message.destroy();
    Message.create({content: '审批单据提交成功，你可以在审批中心关注单据审批状态。', position: 'bottomRight', color: 'successlight'});
 };
 const bottomLeft = function () {
    Message.destroy();
    Message.create({content: '审批单据提交成功，你可以在审批中心关注单据审批状态。', position: 'bottomLeft', color: 'successlight'});
 };
class Demo4 extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="paddingDemo">
            <Button
                colors="secondary"
                onClick={top}>
                top
            </Button>
            <Button
                colors="secondary"
                onClick={bottom}>
                bottom
            </Button>
            <Button
                colors="secondary"
                onClick={topRight}>
                topRight
            </Button>
            <Button
                colors="secondary"
                onClick={topLeft}>
                topLeft
            </Button>
            <Button
                colors="secondary"
                onClick={bottomRight}>
                bottomRight
            </Button>
            <Button
                colors="secondary"
                onClick={bottomLeft}>
                bottomLeft
            </Button>
            </div>
        )
    }
}

export default Demo4;
