/**
 *
 * @title 自定义加载图标
 * @description 如需自定义加载图标，需要同时设置 `loadingType` 属性和 `indicator` 属性。
 *
 */

import React, { Component } from 'react';
import Loading from '../../src';

let imgsrc = "http://design.yonyoucloud.com/static/bee.tinper.org-demo/loading.gif";

class Demo6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.a = null;
    }


    render() {
        const beeIcon = <img src={imgsrc} style={{width:'50px'}}/>;
        return (
            <div className="demo5">
                <Loading 
                    container={this} 
                    show={this.state.show} 
                    loadingType="custom"  //启用自定义图标
                    indicator={beeIcon}  //自定义图标的内容
                />
            </div>
        )
    }
}


export default Demo6;