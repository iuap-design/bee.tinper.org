import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import FormControl from '../src/index';

describe('Enzyme Shallow', function () {
  it('FormControl should be exist', function () {
    let formControl = shallow(<FormControl/>);
    expect(formControl.hasClass('u-form-control')).to.equal(true);
  });

});

