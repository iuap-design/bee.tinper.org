/**
 *
 * @title 旋转轮播
 * @description 切换动画是3d翻转形式
 *
 */
import React from 'react';
import Carousel from '../../src';

class Demo2 extends React.Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30,
      effect: 'flip' //设置3d翻转
    }

    return(
        <div className="carousel-demo-two">
            <Carousel {...params}>
                <div className="carousel-demo-1"></div>
                <div className="carousel-demo-2"></div>
                <div className="carousel-demo-3"></div>
                <div className="carousel-demo-4"></div>
                <div className="carousel-demo-5"></div>
            </Carousel>
        </div>
    )
  }
}

export default Demo2;