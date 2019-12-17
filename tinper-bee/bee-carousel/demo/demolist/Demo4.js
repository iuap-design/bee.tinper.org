
/**
 *
 * @title 触摸轮播
 * @description 触发方式多用于手机端 最简单的触摸模式
 *
 */
import React from 'react';
import Carousel from '../../src';

class Demo4 extends React.Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
      },
      spaceBetween: 30
    }

    return(
        <div className="carousel-demo-four">
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

export default Demo4;