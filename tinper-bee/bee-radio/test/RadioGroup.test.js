import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import RadioGroup from '../src/RadioGroup.js';
import App from '../demo/RadioGroupDemo.js'


describe('radioGroup should be exist', function() {
	
	it('radio1 should be selected', function() {

		let handerChange = function () {
			console.log("1");

		}
		let radioGroup = mount(<RadioGroup selectedValue="1" onChange={handerChange}> <RadioGroup.Radio value="1" /><RadioGroup.Radio vlaue="2" /></RadioGroup>);
		
		expect(radioGroup.find('.is-checked').find('input').prop('value')).to.equal("1");
		
	})
	
})

describe('colors test', function() {
	
	it('warning radio should be selected', function() {

		let handerChange = function () {
			console.log("1");

		}
		let radioGroup = mount(<RadioGroup selectedValue="1" onChange={handerChange}> <RadioGroup.Radio colors="warning" value="1" /><RadioGroup.Radio vlaue="2" /></RadioGroup>);
		
		console.log(radioGroup.find('.u-radio').first());

		expect(radioGroup.find('.u-radio').first().hasClass('u-radio-warning')).to.equal(true);
		
	})
	it('primary radio should be selected', function() {

		let handerChange = function () {
			console.log("1");

		}
		let radioGroup = mount(<RadioGroup selectedValue="1" onChange={handerChange}> <RadioGroup.Radio colors="primary" value="1" /><RadioGroup.Radio vlaue="2" /></RadioGroup>);
		

		expect(radioGroup.find('.u-radio').first().hasClass('u-radio-primary')).to.equal(true);
		
	})
	it('success radio should be selected', function() {

		let handerChange = function () {
			console.log("1");

		}
		let radioGroup = mount(<RadioGroup selectedValue="1" onChange={handerChange}> <RadioGroup.Radio colors="success" value="1" /><RadioGroup.Radio vlaue="2" /></RadioGroup>);
		

		expect(radioGroup.find('.u-radio').first().hasClass('u-radio-success')).to.equal(true);
		
	})
	it('info radio should be selected', function() {

		let handerChange = function () {
			console.log("1");

		}
		let radioGroup = mount(<RadioGroup selectedValue="1" onChange={handerChange}> <RadioGroup.Radio colors="info" value="1" /><RadioGroup.Radio vlaue="2" /></RadioGroup>);
		

		expect(radioGroup.find('.u-radio').first().hasClass('u-radio-info')).to.equal(true);
		
	})
	it('danger radio should be selected', function() {

		let handerChange = function () {
			console.log("1");

		}
		let radioGroup = mount(<RadioGroup selectedValue="1" onChange={handerChange}> <RadioGroup.Radio colors="danger" value="1" /><RadioGroup.Radio vlaue="2" /></RadioGroup>);
		

		expect(radioGroup.find('.u-radio').first().hasClass('u-radio-danger')).to.equal(true);
		
	})
	
})

describe('App test', function() {
	it('orange should be selected', function() {
		let app = mount(<App />);

		app.find('.u-radio').at(1).simulate('click');

		expect(app.state('selectedValue')).to.equal("orange");
		
	})
	it('apple should be selected', function() {
		let app = mount(<App />);

		app.find('.u-radio').at(0).simulate('click');

		expect(app.state('selectedValue')).to.equal("apple");
		
	})
	it('watermelon should be selected', function() {
		let app = mount(<App />);
		
		app.find('.u-radio').last().simulate('click');

		expect(app.state('selectedValue')).to.equal("watermelon");
		
	})
})