import React from 'react';
import Enzyme, {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Button from '../src/index';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('verifiy size', function () {
  it('Button should be exist', function () {
    let button = shallow(<Button/>);
    expect(button.hasClass('u-button')).to.equal(true);
  });
  it('Button should be lg', function () {
    let button = shallow(<Button size="lg" />);
    expect(button.hasClass('u-button-lg')).to.equal(true);
  });
  it('Button should be sm', function () {
    let button = shallow(<Button size="sm" />);
    expect(button.hasClass('u-button-sm')).to.equal(true);
  });
  it('Button should be xg', function () {
    let button = shallow(<Button size="xg" />);
    expect(button.hasClass('u-button-xg')).to.equal(true);
  });
});


describe('verifiy type', function () {
  it('Button should be primary', function () {
    let button = shallow(<Button colors="primary" />);
    expect(button.hasClass('u-button-primary')).to.equal(true);
  });
  it('Button should be accent', function () {
    let button = shallow(<Button colors="accent" />);
    expect(button.hasClass('u-button-accent')).to.equal(true);
  });
  it('Button should be success', function () {
    let button = shallow(<Button colors="success" />);
    expect(button.hasClass('u-button-success')).to.equal(true);
  });
  it('Button should be info', function () {
    let button = shallow(<Button colors="info" />);
    expect(button.hasClass('u-button-info')).to.equal(true);
  });
  it('Button should be warning', function () {
    let button = shallow(<Button colors="warning" />);
    expect(button.hasClass('u-button-warning')).to.equal(true);
  });
  it('Button should be danger', function () {
    let button = shallow(<Button colors="danger" />);
    expect(button.hasClass('u-button-danger')).to.equal(true);
  });
});
describe('verifiy shape', function () {
  it('Button should be block', function () {
    let button = shallow(<Button shape="block" />);
    expect(button.hasClass('u-button-block')).to.equal(true);
  });
  it('Button should be round', function () {
    let button = shallow(<Button shape="round" />);
    expect(button.hasClass('u-button-round')).to.equal(true);
  });
  it('Button should be squared', function () {
    let button = shallow(<Button shape="squared" />);
    expect(button.hasClass('u-button-squared')).to.equal(true);
  });
  it('Button should be floating', function () {
    let button = shallow(<Button shape="floating" />);
    expect(button.hasClass('u-button-floating')).to.equal(true);
  });
  it('Button should be pillRight', function () {
    let button = shallow(<Button shape="pillRight" />);
    expect(button.hasClass('u-button-pill-right')).to.equal(true);
  });
  it('Button should be pillLeft', function () {
    let button = shallow(<Button shape="pillLeft"/>);
    expect(button.hasClass('u-button-pill-left')).to.equal(true);
  });

});


describe('Button click', function () {
  it('Button click change type', function () {
    let typeChange = "primary";
    function clickEvent (event) {
      typeChange = "accent";
    }
    let button = shallow(<Button onClick={ clickEvent } type = { typeChange } />);
    button.simulate('click');
      expect(typeChange == "accent").to.equal(true);
  });

});
