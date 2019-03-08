import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Timeline from '../src/index';

describe('Enzyme Shallow', function() {
	it('Timeline should be exist', function() {
		let timeline = shallow(<Timeline/>);
		expect(timeline.hasClass('u-timeline')).to.equal(true);
	})
})
describe('Timeline styles', function() {
	// let timeline = (<Timeline>
	// 	<Timeline.Item color="success">Create a services site 2015-09-01</Timeline.Item>
	// 	<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
	// 	<Timeline.Item dot={<Icon type="uf-time-c-o" style={{ fontSize: '16px' }} />} color="danger">Technical testing 2015-09-01</Timeline.Item>
	// 	<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
	// </Timeline>);
	
	
	it('success Timeline', function() {
		console.log(timeline);
		// let timeline = shallow(<Timeline colors="success"/>);
		// expect(timeline.hasClass('u-Timeline-success')).to.equal(true);
	})

})
// describe('Should Timeline can custome node',function(){
// 	it('Timeline close button', function() {
// 		let clickFlag = false;
// 		let TimelineClick = function (){
// 			clickFlag = true;
// 		};
// 		let timeline = mount(<Timeline onDismiss={ TimelineClick } />);
// 		timeline.find('.close').simulate('click');
// 		expect(clickFlag).to.equal(true);
// 	})
//  })