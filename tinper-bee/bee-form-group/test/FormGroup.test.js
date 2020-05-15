import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import FormGroup from '../src/index';


describe('Enzyme Shallow', function () {
  it('FormGroup should be exist', function () {
    let formGroup = shallow(<FormGroup/>);
    expect(formGroup.hasClass('u-form-group')).to.equal(true);
  });
});
describe('ValidateState should be displayed', function () {
  it('error state should be displayed', function () {
    let formGroup = shallow(<FormGroup validationState="error"/>);
    expect(formGroup.hasClass('has-error')).to.equal(true);
  });
  it('success state should be displayed', function () {
    let formGroup = shallow(<FormGroup validationState="success"/>);
    expect(formGroup.hasClass('has-success')).to.equal(true);
  });
  it('warning state should be displayed', function () {
    let formGroup = shallow(<FormGroup validationState="warning"/>);
    expect(formGroup.hasClass('has-warning')).to.equal(true);
  });
  it('children should be displayed', function () {
    let formGroup = mount(<FormGroup validationState="warning"><span class="test">test</span></FormGroup>);
    expect(formGroup.find('span').length).to.equal(1);
  });
});