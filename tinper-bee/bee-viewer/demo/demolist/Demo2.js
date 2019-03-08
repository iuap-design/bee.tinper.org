/**
*
* @title 图片列表查看
* @description 图片列表查看。 img 的 data-original 写高清大图地址。src写缩略图地址
*
*/
import React, { Component } from 'react';
import Viewer from '../../src'

class Demo2 extends Component {

    render () {
        return (
            <div className='demo'>
                <Viewer>
                    <div>
                        <img data-original="http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-5-min.jpg" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg' alt="Picture"/>
                        <img data-original="http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-4-min.jpg" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-2-min.jpg' alt="Picture"/>
                        <img data-original="http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-3-min.jpg" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-3-min.jpg' alt="Picture"/>
                        <img data-original="http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-2-min.jpg" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-4-min.jpg' alt="Picture"/>
                        <img data-original="http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-5-min.jpg' alt="Picture"/>
                    </div>
                </Viewer>
            </div>
            
        )
    }
}
export default Demo2;