/**
 *
 * @title 不同遮罩层状态的模态框
 * @description 遮罩层可以通过backdrop属性控制状态，可以为不响应事件，可以不显示。
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Modal from '../../src';


class Demo4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalDropup: true
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.changeDropup = this.changeDropup.bind(this);

    }

    close() {
        this.setState({
            showModal: false
        });
    }

    open() {
        this.setState({
            showModal: true
        });
    }

    changeDropup(state) {
        this.setState({
            modalDropup: state
        });
    }

    render() {
        return (
            <div>
                <Button
                    bordered
                    className="demo-margin"
                    onClick={ ()=>{this.changeDropup(false);this.open();} }>
                    无遮罩层模态框
                </Button>
                <Button
                    bordered
                    className="demo-margin"
                    onClick={ ()=>{this.changeDropup("static");this.open();} }>
                    遮罩无事件模态框
                </Button>
                <Modal
                    className="demo4-modal"
                    show={ this.state.showModal }
                    backdrop={ this.state.modalDropup }
                    onHide={ this.close }>
                    <Modal.Header closeButton>
                        <Modal.Title > 我来组成头部 </Modal.Title>
                    </Modal.Header >
                    <Modal.Body >
                        <h4> 这是一个沉默的标题 </h4>

                        <p> 一些描述。。。 </p>
                        <hr/>

                        <p> 用创想与技术推动商业和社会进步 </p>

                        <p> 我们基于创造性的思想与先进的技术（ 现阶段是信息技术）， 创新和运营高客户价值的产品与服务， 帮助客户实现发展目标， 进而推动商业和社会进步。 </p>

                        <p> 全球领先的企业与公共组织软件、 云服务、 金融服务提供商。 </p>

                        <p> 员工快乐工作， 成就事业， 分享成功的平台。 </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button colors="secondary" onClick={ this.close }> 关闭 </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Demo4;
