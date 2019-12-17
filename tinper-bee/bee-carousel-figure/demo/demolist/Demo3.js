/**
*
* @title 自动切换
* @description 定时切换下一张。
*
*/
import React, { Component } from 'react';
import CarouselFigure from '../../src';

class Demo3 extends Component {
    render () {
        return (
             <CarouselFigure autoplay>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </CarouselFigure>
        )
    }
}
export default Demo3