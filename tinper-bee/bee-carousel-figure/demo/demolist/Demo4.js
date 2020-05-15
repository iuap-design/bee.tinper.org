/**
*
* @title 渐显
* @description 切换效果为渐显。
*
*/
import React, { Component } from 'react';
import CarouselFigure from '../../src';

class Demo4 extends Component {
    render () {
        return (
             <CarouselFigure effect="fade">
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
export default Demo4