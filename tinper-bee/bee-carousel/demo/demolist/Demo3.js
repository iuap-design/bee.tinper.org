
/**
 *
 * @title 进度条轮播
 * @description 切换进度可在上边1️以进度条的形式展现
 *
 */
import React from 'react';
import Carousel from '../../src';

class Demo3 extends React.Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',  //将页码改成进度条形式
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return(
        <div className="carousel-demo-three">
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

export default Demo3;