/**
 *
 * @title 气泡确认框修改显示语言
 *
 */
import React, { Component } from 'react';
import Button from 'bee-button';
import Popconfirm from '../../src';

class Demo3 extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const content = 'Do you like tinper-bee UI Components Library？';
        let locale = {
            lang: 'en',
            ok: 'OK',
            cancel: 'Cancel'
        };
        return (
            <div className="demoPadding">
                <Popconfirm trigger="click" placement="right" content={content} locale={locale}>
                    <Button colors="primary">Click me</Button>
                </Popconfirm>
            </div>
        )
    }
}

export default Demo3;
