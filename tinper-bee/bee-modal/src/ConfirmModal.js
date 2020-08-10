import React, { Component } from 'react';
import PropTypes from "prop-types";
import Button from 'bee-button';
import Icon from 'bee-icon';
import Modal from './Modal';


const propTypes = {
    title: PropTypes.string,
    keywords: PropTypes.string,
    content: PropTypes.string,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    show: PropTypes.bool,
    locale:PropTypes.object
};

const defaultProps = {
    // title: "提示信息",
    onOk: ()=>{},
    onCancel: ()=>{},
    content: "确认要删除吗 ?",
    show: false,
    keyword: '删除',
    locale: {
        'ok':'确定',
        'gotit':'知道了',
        'cancel':'取消',
    }
};

class AlertDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }  

    render() {
        let { close, title, keyword, content, onOk, onCancel,locale } = this.props;
        //按钮组 
        return (
            <span >
                <Modal
                    show={this.state.show}
                    className='ac-confirm'
                    onHide={close} 
                    draggable={true}
                    resizable={true}
                    width={400}
                    >
                    {
                        title?
                        <Modal.Header closeButton className='ac-confirm-header'>
                            <Modal.Title className='ac-confirm-header-title'>{title}</Modal.Title>
                        </Modal.Header>
                        : null
                    }

                    <Modal.Body className='ac-confirm-body'>
                        <span className='ac-confirm-body-title'>
                            <Icon type='uf-exc-c-2' className='ac-confirm-body-title-icon'></Icon>
                            <span className='ac-confirm-body-title-keyword'>{keyword}</span>
                        </span>
                        <span className='ac-confirm-body-content'>{content}</span>
                    </Modal.Body>

                    <Modal.Footer className='ac-confirm-footer'>
                        <Button colors="secondary" onClick={()=>{
                                        this.setState({
                                            show:false
                                        })
                                        onCancel()
                                    }}>
                            {locale.cancel}
                        </Button>
                        <Button colors="primary" onClick={()=>{
                            this.setState({
                                show:false
                            })
                            onOk()
                        }}>
                            {locale.ok}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </span>
        )
    }
}

AlertDialog.propTypes = propTypes;
AlertDialog.defaultProps = defaultProps;
export default AlertDialog;
