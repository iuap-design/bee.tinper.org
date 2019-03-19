import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Clipboard from '../src/index';

describe('Enzyme Shallow', function () {
    it('Clipboard should be exist', function () {
        let button = shallow(<Clipboard className="u-clipboard"/>);
        expect(button.hasClass('u-clipboard')).to.equal(true);
    });
});