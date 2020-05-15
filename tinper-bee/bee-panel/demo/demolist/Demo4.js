/**
 *
 * @title 代码示例展示板
 * @description 可一键复制代码的展示板
 *
 */

import React, {Component} from 'react';
import {Panel} from '../../src';

const code = "<div>\n  hello world!\n</div>";

class Demo4 extends Component {
    render() {
        return (
            <div className="demoPadding">
                <Panel copyable>
                    <pre><code className="hljs javascript">{code}</code></pre>
                </Panel>
            </div>
        )
    }
}


export default Demo4;