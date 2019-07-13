/**
 *
 * @title 不同大小的模态框
 * @description 通过size属性控制模态框大小
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Modal from '../../src';

class Demo3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalSize: ''
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.changeSize = this.changeSize.bind(this);

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

    changeSize(size) {
        this.setState({
            modalSize: size
        });
    }

    render() {
        return (
            <div>
                <Button
                    bordered
                    className="demo-margin"
                    onClick={ ()=>{this.changeSize("sm");this.open();} }>
                    小号模态框
                </Button>
                <Button
                    bordered
                    className="demo-margin"
                    onClick={ ()=>{this.changeSize("lg");this.open();} }>
                    大号模态框
                </Button>
                <Button
                    bordered
                    className="demo-margin"
                    onClick={ ()=>{this.changeSize("xlg");this.open();} }>
                    超大号模态框
                </Button>
                <Modal show={ this.state.showModal } size={ this.state.modalSize } onHide={ this.close } className="demo3-modal">
                    <Modal.Header closeButton>
                        <Modal.Title > 我来组成头部 </Modal.Title>
                    </Modal.Header >
                    <Modal.Body>
                        <h4> 这是一个沉默的标题 </h4>

                        <p> 一些描述。。。 </p>
                        <hr/>

                        <p> 用创想与技术推动商业和社会进步 </p>

                        <p> 我们基于创造性的思想与先进的技术（ 现阶段是信息技术）， 创新和运营高客户价值的产品与服务， 帮助客户实现发展目标， 进而推动商业和社会进步。
                        </p>

                        <p> 全球领先的企业与公共组织软件、 云服务、 金融服务提供商。 </p>

                        <p> 员工快乐工作， 成就事业， 分享成功的平台。 </p>

                        <p> 企业和公共组织是我们持续服务的客户。 软件、 云服务、 金融服务是用友新发展阶段的核心业务。 全球领先是我们必须达成的目标。 </p>

                        <p> 在努力实现产业发展目标的同时， 员工在用友快乐工作、 成就事业、 分享成功也是公司的追求。 </p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button colors="secondary" onClick={ this.close }> 关闭 </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Demo3;
