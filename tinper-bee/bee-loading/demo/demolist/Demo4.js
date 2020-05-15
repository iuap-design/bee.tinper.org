/**
 *
 * @title 自定义描述文案
 * @description 通过设置 `tip` 属性，来添加Loading的文字描述。
 *
 */

import React, { Component } from 'react';
import Loading from '../../src';


class Demo3 extends Component {
    constructor(props) {
        super(props);
        this.a = null;
    }

    render() {
        return (
            <div className="demo3">
                <p>
                    曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。
                    如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。
                    如果非要在这份爱上加上一个期限，我希望是……
                    一万年
                </p>
                <Loading
                container={this}
                show={true} 
                tip="Loading..."
                />
            </div>
        )
    }
}


export default Demo3;