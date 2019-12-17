/**
*
* @title 基本
* @description 最简单的用法。
*
*/
import React, { Component } from 'react';
import CarouselFigure from '../../src';

function beforeChange(from, to) {
    console.log(from, to);
}

function onChange(a, b, c) {
    console.log(a, b, c);
}

class Demo1 extends Component {
    render () {
        return (
            <CarouselFigure beforeChange={beforeChange} afterChange={onChange}>
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
export default Demo1