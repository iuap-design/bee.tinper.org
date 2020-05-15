/**
*
* @title 单个图片查看
* @description 单个图片查看
*
*/
import React, { Component } from 'react';
import Viewer from '../../src'

class Demo1 extends Component {

    shown=(e)=>{
        console.log(e,'shwon')
    }
    hidden=(e)=>{
        console.log(e,'hidden')
    }
    render () {
        return (
            <div className='demo'>
                <Viewer shown={this.shown} hidden={this.hidden}>
                    <img id="image" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg' alt="Picture"/>
                </Viewer>
            </div>
        )
    }
}
export default Demo1