import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Cascader from '../src/index';
const options = [
	{
	  value: '浙江',
	  children: [
		  {
		    value: '杭州',
		    children: [
			    {
			      value: '西湖',
			      children: [
				    {
				      value: '白娘子'
				    },
				    {
				      value: '许仙'
				    }]
			    }]
		  }
	  ]
	}, 
	{
	  value: '江苏',
	  children: [
		  {
		    value: '南京',
		    children: [
			    {
			      value: '中华门'
			    }]
		  }
	  ]
	},
	{
	  value: '山东'
	}
];
describe('是否打开cascader',function(){
	it('弹出面板',function(){
		let mCascader = mount(<Cascader options = {options} />);
		expect(mCascader.find('div').at(0).hasClass('cascader-container')).to.equal(true)
	})
})