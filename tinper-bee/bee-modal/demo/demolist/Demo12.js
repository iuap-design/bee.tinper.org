/**
 *
 * @title 信息提示
 * @description 提供`info`、`success`、`error`、`warning`、`confirm` API
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Icon from 'bee-icon';
import Modal from '../../src';

const info = function () {
    Modal.info({
        title: '提示',
        content: (
          <div>
            <p>单据状态已更新，请在审批中心内查看。</p>
          </div>
        ),
        onOk() {},
    });
};
const success = function () {
    Modal.success({
        title: '提交成功',
        content: '单据提交成功，你可以在审批中心关注审批状态。',
    });
};
const error = function () {
    Modal.error({
        title: '提交失败',
        content: '单据状态更新失败，请重新尝试。',
        backdropClosable: false
    });
};
const warning = function () {
    Modal.warning({
        title: '警告',
        content: '单据状态异常，请重新提交',
    });
};
const confirm = function () {
    Modal.confirm({
        title: '确定要删除这条单据吗？',
        content: '单据删除后将不能恢复。',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    })
};
const confirm2 = function () {
    Modal.confirm({
        // title:'提示信息',
        keyword:'删除',
        content:"确定要删除吗?",
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
        confirmType:'two'
    })
};
const successLocale = function () {
    Modal.success({
        title: '提交成功',
        content: '单据提交成功，你可以在审批中心关注审批状态。',
        locale:{
            'ok':'ok',
            'gotit':'got it',
            'cancel':'cancel',
        }
    });
};
const confirmLocale = function () {
    Modal.confirm({
        title: '确定要删除这条单据吗？',
        content: '单据删除后将不能恢复。',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
        locale:{
            'ok':'ok',
            'gotit':'got it',
            'cancel':'cancel',
        }
    })
};

class Demo12 extends Component {
    render () {
        return (
            <div className="demo12">
                <Button colors="info" onClick={info}>Info</Button>
                <Button colors="success" onClick={success}>Success</Button>
                <Button colors="danger" onClick={error}>Error</Button>
                <Button colors="warning" onClick={warning}>Warning</Button>
                <Button bordered onClick={confirm}>Confirm</Button>
                <Button bordered onClick={confirm2}>Confirm2</Button>
                <Button colors="success" onClick={successLocale}>Success自定义文字</Button>
                <Button bordered onClick={confirmLocale}>Confirm自定义文字</Button>
            </div>
        )
    }
}

export default Demo12;
