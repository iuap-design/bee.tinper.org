import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Badge from '../src/index';

describe('Badge test', function() {
	it('Badge should be exist', function() {
		let badge = shallow(<Badge/>);
		expect(badge.hasClass('u-badge')).to.equal(true);
	})
	it('primary Badge should be exist', function() {
		let badge = shallow(<Badge colors="primary"/>);
		expect(badge.hasClass('u-badge-primary')).to.equal(true);
	})
	it('info Badge should be exist', function() {
		let badge = shallow(<Badge colors="info"/>);
		expect(badge.hasClass('u-badge-info')).to.equal(true);
	})
	it('dark Badge should be exist', function() {
		let badge = shallow(<Badge colors="dark"/>);
		expect(badge.hasClass('u-badge-dark')).to.equal(true);
	})
	it('danger Badge should be exist', function() {
		let badge = shallow(<Badge colors="danger"/>);
		expect(badge.hasClass('u-badge-danger')).to.equal(true);
	})
	it('warning Badge should be exist', function() {
		let badge = shallow(<Badge colors="warning"/>);
		expect(badge.hasClass('u-badge-warning')).to.equal(true);
	})
})
