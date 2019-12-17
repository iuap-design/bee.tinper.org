
/**
 *
 * @title 响应式轮播
 * @description 根据滑动的力度，定位轮播当前active的进度
 */
import React from 'react';
import Carousel from '../../src';

class Demo5 extends React.Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 5,  //单屏显示几个slider
      spaceBetween: 50,
      breakpoints: {  //设置不同尺寸下 单屏显示几个slider 
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    }

    return(
        <div className="carousel-demo-five">
            <Carousel {...params}>
                <div className="carousel-demo-1"></div>
                <div className="carousel-demo-2"></div>
                <div className="carousel-demo-3"></div>
                <div className="carousel-demo-4"></div>
                <div className="carousel-demo-5"></div>
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

export default Demo5;