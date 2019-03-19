/**
 *
 * @title 控制显示和隐藏
 *
 */

import React, {Component} from 'react';
import Button from 'bee-button';
import Popconfirm from '../../src';

class Demo4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    cancel = () => {
        this.setState({
            show: false
        })
    }

    close = () => {
        this.setState({
            show: false
        })
    }

    onRootClose = () => {
        this.setState({
            show: false
        })
    }

    render() {
        let {show} = this.state;
        const content = '您喜欢使用tinper-bee组件库吗？';
        return (
            <div className="demoPadding">
                <div className="demoPadding-btn-box">
                    <Button colors="primary" onClick={this.handleShow}>{show ? "隐藏popConfirm" : "显示popConfirm"}</Button>
                </div>
                <Popconfirm 
                    trigger="click" 
                    placement="right" 
                    content={content}
                    show={show}
                    onClick={() => console.log(1234)}
                    onCancel={this.cancel}
                    onClose={this.close}
                    rootClose
                    onRootClose={this.onRootClose}
                >
                    <Button colors="primary">向右!</Button>
                </Popconfirm>
            </div>
        )
    }
}

export default Demo4;
