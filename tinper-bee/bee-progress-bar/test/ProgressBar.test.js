import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import ProgressBar from '../src/index'


describe('ProgressBar test', function() {
	
	it('ProgressBar should be exist', function() {
		
		let progressbar = shallow(<ProgressBar now={10} />);

		expect(progressbar.hasClass('u-progress')).to.equal(true);
		
	})
	it('the percent of ProgressBar should be right', function() {

		
		let progressbar = mount(<ProgressBar now={10} />);

		expect(progressbar.find(".u-progress-bar").prop('style').width).to.equal('10%');
		
	})
	it('the percent of ProgressBar should be right while the min and max have bee reset', function() {
		
		let progressbar = mount(<ProgressBar now={30} min={10} max={110}/>);

		expect(progressbar.find(".u-progress-bar").prop('style').width).to.equal('20%');
		
	})
	it('The ProgressBar should be mean warning', function() {
		
		let progressbar = mount(<ProgressBar now={10} colors="warning"/>);

		expect(progressbar.find(".u-progress-bar").hasClass('u-progress-bar-warning')).to.equal(true);
		
	})
	it('The ProgressBar should be mean danger', function() {
		
		let progressbar = mount(<ProgressBar now={10} colors="danger"/>);

		expect(progressbar.find(".u-progress-bar").hasClass('u-progress-bar-danger')).to.equal(true);
		
	})
	it('The ProgressBar should be mean info', function() {
		
		let progressbar = mount(<ProgressBar now={10} colors="info"/>);

		expect(progressbar.find(".u-progress-bar").hasClass('u-progress-bar-info')).to.equal(true);
		
	})
	it('The ProgressBar should be mean success', function() {
		
		let progressbar = mount(<ProgressBar now={10} colors="success"/>);

		expect(progressbar.find(".u-progress-bar").hasClass('u-progress-bar-success')).to.equal(true);
		
	})
})

describe('ProgressBar group test', function() {

	it('There is only one wrapper', function() {
		
		let progressbar = mount(<ProgressBar><ProgressBar now={10} colors="success"/><ProgressBar now={20} colors="info"/></ProgressBar>);

		expect(progressbar.find('.u-progress').length).to.equal(1);
		
	})
	
	it('The length of ProgressBar children should be right', function() {
		
		let progressbar = mount(<ProgressBar><ProgressBar now={10} colors="success"/><ProgressBar now={20} colors="info"/></ProgressBar>);

		expect(progressbar.find(".u-progress-bar").length).to.equal(2);
		
	})
})
