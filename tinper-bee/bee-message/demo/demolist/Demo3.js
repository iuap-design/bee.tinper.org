/**
 *
 * @title 不同语义的消息提醒
 * @description 提供四种语义色，每种语义色有深/浅两种风格，均通过 `color` 参数设置。
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Message from '../../src';

// 深语义色
const info = function () {
    Message.destroy();
    Message.create({content: '单据状态更新，请在审批中心查看最新状态。', color: 'info'});
};
const danger = function () {
    Message.destroy();
    Message.create({content: '单据状态更新失败，请重新尝试。', color: 'danger'});
};
const warning = function () {
    Message.destroy();
    Message.create({content: '单据状态异常，请重新提交。', color: 'warning'});
};
const success = function () {
    Message.destroy();
    Message.create({content: '单据提交成功。', color: 'success'});
};
// 浅语义色
const infolight = function () {
    Message.destroy();
    Message.create({content: '单据状态更新，请在审批中心查看最新状态。', color: 'infolight'});
};
const dangerlight = function () {
    Message.destroy();
    Message.create({content: '单据状态更新失败，请重新尝试。', color: 'dangerlight'});
};
const warninglight = function () {
    Message.destroy();
    Message.create({content: '单据状态异常，请重新提交。', color: 'warninglight'});
};
const successlight = function () {
    Message.destroy();
    Message.create({content: '单据提交成功。', color: 'successlight'});
};

class Demo3 extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="paddingDemo">
                <p>
                    <Button bordered onClick={info}>info</Button>
                    <Button bordered onClick={danger}>danger</Button>
                    <Button bordered onClick={warning}>warning</Button>
                    <Button bordered onClick={success}>success</Button>
                </p>
                <p>
                    <Button bordered onClick={infolight}>infolight</Button>
                    <Button bordered onClick={dangerlight}>dangerlight</Button>
                    <Button bordered onClick={warninglight}>warninglight</Button>
                    <Button bordered onClick={successlight}>successlight</Button>
                </p>
            </div>
        )
    }
}


export default Demo3;
