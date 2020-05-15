/**
 *
 * @title 默认的展示板
 * @description 默认的展示板由header,body和footer组成。
 *
 */

import React, {Component} from 'react';
import {Panel} from '../../src';


class Demo1 extends Component {
    render() {
        return (
            <div>
                <Panel header="Panel header" footer='Panel footer'>
                    Panel content
                </Panel>
            </div>

        )
    }
}


export default Demo1;
