/**
 *
 * @title 目标剪切
 * @description 剪切只适用于 textarea 元素
 *
 */

import React, { Component } from 'react';
import Clipboard from '../../src';

class Demo3 extends Component {
    render() {
        function success(){
            console.log('success');
        }
        function error(){
            console.log('error');
        }
        return (
            <div>
                <textarea id="cutContent" >我将被剪切到剪切板</textarea>
                <Clipboard action="cut" target='#cutContent' success={success} error={error}>
                </Clipboard>
            </div>
        )
    }
}

export default Demo3;