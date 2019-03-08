import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Breadcrumb from '../src/index';

describe('Breadcrumb test', function() {
	it('Breadcrumb should be exist', function() {
		let breadcrumb = shallow(<Breadcrumb><Breadcrumb.Item>Home</Breadcrumb.Item><Breadcrumb.Item>Library</Breadcrumb.Item><Breadcrumb.Item>Data</Breadcrumb.Item></Breadcrumb>);
		expect(breadcrumb.hasClass('u-breadcrumb')).to.equal(true);
	})
	it('Breadcrumb item should be exist', function() {
		let breadcrumb = mount(<Breadcrumb><Breadcrumb.Item>Home</Breadcrumb.Item><Breadcrumb.Item>Library</Breadcrumb.Item><Breadcrumb.Item>Data</Breadcrumb.Item></Breadcrumb>);
		expect(breadcrumb.find("li").length).to.equal(3);
	})
	
})
