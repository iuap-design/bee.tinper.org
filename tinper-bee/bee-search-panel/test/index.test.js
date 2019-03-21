import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import SearchPanel from '../src/index';

describe('Enzyme Shallow', function () {
    it('SearchPanel should be exist', function () {
        let searchPanel = shallow(<SearchPanel/>);
        expect(searchPanel.hasClass('u-search')).to.equal(true);
    });
});