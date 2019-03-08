/**
 *
 * @title 将Loading渲染到容器中
 * @description 通过设置`container`属性，通过传入function的方式，来控制loading渲染位置
 *
 */

import React, { Component } from 'react';
import Loading from '../../src';


class Demo4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.a = null;
    }
    getElement =()=>{
        return document.getElementById('demo4')
    }


    render() {
        return (
                <div className="demo4">
                    <p>
                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。
                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。
                        如果非要在这份爱上加上一个期限，我希望是……
                        一万年
                    </p>
                    <p id="demo4">
                    
                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。
                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。
                        如果非要在这份爱上加上一个期限，我希望是……
                        一万年
                    </p>
                    <Loading container={this.getElement} show={this.state.show} />
                </div>
        )
    }
}


export default Demo4;
