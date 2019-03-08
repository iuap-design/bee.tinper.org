import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Loadingstate from '../src/index';

describe('Enzyme Shallow', function() {
	it('Loadingstate should be exist', function() {
		let loadingstate = shallow(<Loadingstate/>);
		expect(loadingstate.length).to.equal(1);
	})
})
