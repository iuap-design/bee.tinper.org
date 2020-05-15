import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Alert from '../src/index';

describe('Enzyme Shallow', function() {
	it('Alert should be exist', function() {
		let alert = shallow(<Alert/>);
		expect(alert.hasClass('u-alert')).to.equal(true);
	})
})
describe('Alert styles', function() {
	it('danger alert', function() {
		let alert = shallow(<Alert colors="danger"/>);
		expect(alert.hasClass('u-alert-danger')).to.equal(true);
	})
	it('warning alert', function() {
		let alert = shallow(<Alert colors="warning"/>);
		expect(alert.hasClass('u-alert-warning')).to.equal(true);
	})
	it('info alert', function() {
		let alert = shallow(<Alert colors="info"/>);
		expect(alert.hasClass('u-alert-info')).to.equal(true);
	})
	it('news alert', function() {
		let alert = shallow(<Alert colors="news"/>);
		expect(alert.hasClass('u-alert-news')).to.equal(true);
	})
	it('success alert', function() {
		let alert = shallow(<Alert colors="success"/>);
		expect(alert.hasClass('u-alert-success')).to.equal(true);
	})

})
describe('Should call onDismiss callback on dismiss click',function(){
	it('Alert close button', function() {
		let clickFlag = false;
		let alertClick = function (){
			clickFlag = true;
		};
		let alert = mount(<Alert onDismiss={ alertClick } />);
		alert.find('.close').simulate('click');
		expect(clickFlag).to.equal(true);
	})
 })