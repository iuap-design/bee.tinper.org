/**
*
* @title 带tip的slider
* @description 和 tip展示 组件保持同步。
*
*/

import React, { Component } from 'react';
import Slider from '../../src';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const RangeTooltip = createSliderWithTooltip(Slider.Range);
const SliderTooltip = createSliderWithTooltip(Slider);

class Demo8 extends Component {
	log = (value) =>{
	console.log(value); //eslint-disable-line
	}

	render () {
		const wrapperStyle = { width: 400, margin: 50 };
		return (
      <div>
        <div style={wrapperStyle}>
          <p>Slider with Tooltip</p>
          <SliderTooltip min={0} max={100} defaultValue={45} tipFormatter={value => `${value}%`}/>
        </div>
        <div style={wrapperStyle}>
          <p>Range with Tooltip</p>
          <RangeTooltip min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
        </div>
      </div>
		)
	}
}

export default Demo8;