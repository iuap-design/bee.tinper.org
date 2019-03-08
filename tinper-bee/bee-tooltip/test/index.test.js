import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Tooltip  from '../src/index';
import  { OverlayTrigger }  from 'bee-overlay';

describe('Enzyme Shallow', function () {
  it('Tooltip should be exist', function () {
    let tooltip = shallow(<Tooltip/>);
    expect(tooltip.length).to.equal(1);
  });

});

describe('Tooltip show or hide', function () {
  it('Tooltip show', function () {
    let tooltip = shallow(<Tooltip className="in"/>);
    expect(tooltip.hasClass('in')).to.equal(true);
  });
  it('Tooltip hide', function () {
    let tooltip = shallow(<Tooltip/>);
    expect(tooltip.hasClass('in')).to.equal(false);
  });
});

describe('Tooltip placement', function () {
  it('Tooltip display on top', function () {
    let tooltip = shallow(<Tooltip placement="top"/>);
    expect(tooltip.hasClass('top')).to.equal(true);
  });
  it('Tooltip display on right', function () {
    let tooltip = shallow(<Tooltip placement="right"/>);
    expect(tooltip.hasClass('right')).to.equal(true);
  });
  it('Tooltip display on bottom', function () {
    let tooltip = shallow(<Tooltip placement="bottom"/>);
    expect(tooltip.hasClass('bottom')).to.equal(true);
  });
  it('Tooltip display on left', function () {
    let tooltip = shallow(<Tooltip placement="left"/>);
    expect(tooltip.hasClass('left')).to.equal(true);
  });
});

