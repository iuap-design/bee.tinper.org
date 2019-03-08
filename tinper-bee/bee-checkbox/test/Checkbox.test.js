import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Checkbox from '../src/index';

describe('Checkbox should be exist', function() {
	it('Checkbox should be exist', function() {
		let checkbox = shallow(<Checkbox/>);
		expect(checkbox.hasClass('u-checkbox')).to.equal(true);
	})
	it('Checkbox info should be exist', function() {
		let checkbox = shallow(<Checkbox colors="info"/>);
		expect(checkbox.hasClass('u-checkbox-info')).to.equal(true);
	})
	it('Checkbox danger should be exist', function() {
		let checkbox = shallow(<Checkbox colors="danger"/>);
		expect(checkbox.hasClass('u-checkbox-danger')).to.equal(true);
	})
	it('Checkbox warning should be exist', function() {
		let checkbox = shallow(<Checkbox colors="warning"/>);
		expect(checkbox.hasClass('u-checkbox-warning')).to.equal(true);
	})
	it('Checkbox success should be exist', function() {
		let checkbox = shallow(<Checkbox colors="success"/>);
		expect(checkbox.hasClass('u-checkbox-success')).to.equal(true);
	})
	it('Checkbox dark should be exist', function() {
		let checkbox = shallow(<Checkbox colors="dark"/>);
		expect(checkbox.hasClass('u-checkbox-dark')).to.equal(true);
	})
})