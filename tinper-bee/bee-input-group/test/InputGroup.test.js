import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import InputGroup from '../src/index';
//import InputGroupAddon from 'bee-input-group-addon';
//import InputGroupButton from 'bee-input-group-button';

describe('Enzyme Shallow', function() {
	it('InputGroup should be exist', function() {
		let inputgroup = shallow(<InputGroup/>);
		expect(inputgroup.hasClass('u-input-group')).to.equal(true);
	})
})
describe('InputGroup的附属组件', function() {
	it('InputGroupButton 作为 InputGroup的附属组件Button', function() {
		let inputgroupbutton = shallow(<InputGroup.Button/>);
		expect(inputgroupbutton.hasClass('u-input-group-btn')).to.equal(true);
	})
	it('InputGroupAddon 作为 InputGroup的附属组件Addon', function() {
		let inputgroupaddon = shallow(<InputGroup.Addon/>);
		expect(inputgroupaddon.hasClass('u-input-group-addon')).to.equal(true);
	})
})
