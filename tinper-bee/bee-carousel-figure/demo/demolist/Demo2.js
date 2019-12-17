/**
*
* @title 位置
* @description 位置有 4 个方向。
*
*/
import React, { Component } from 'react';
import Radio from 'bee-radio';
import CarouselFigure from '../../src';

class Demo2 extends Component {
    state = {
        dotPosition: 'left',
    };
    handlePositionChange = (dotPosition) => {
        this.setState({ dotPosition });
    }
    render () {
        const { dotPosition } = this.state;
        return (
            <div>
                <Radio.RadioGroup
                onChange={this.handlePositionChange}
                value={dotPosition}
                style={{ marginBottom: 8 }}
                >
                    <Radio.RadioButton value="top">Top</Radio.RadioButton>
                    <Radio.RadioButton value="bottom">Bottom</Radio.RadioButton>
                    <Radio.RadioButton value="left">Left</Radio.RadioButton>
                    <Radio.RadioButton value="right">Right</Radio.RadioButton>
                </Radio.RadioGroup>
                <CarouselFigure dotPosition={dotPosition}>
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
            </div>
        )
    }
}
export default Demo2