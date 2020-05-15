import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Tile from '../src/index';

describe('Tile test', function() {
	it('Tile should be exist', function() {
		let tile = shallow(<Tile/>);
		expect(tile.hasClass('u-tile')).to.equal(true);
	})
	it('Tile border should be exist', function() {
		let tile = shallow(<Tile/>);
		expect(tile.hasClass('u-tile-bordered')).to.equal(true);
	})
	it('Tile border should be exist', function() {
		let tile = shallow(<Tile border={false}/>);
		expect(tile.hasClass('u-tile-bordered')).to.equal(false);
	})

})