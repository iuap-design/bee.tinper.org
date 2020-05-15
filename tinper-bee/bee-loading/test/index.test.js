import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Loading from '../src/index';

describe('verifiy size', function () {
    it('Loading should be lg', function () {
        let loading = shallow(<Loading size="lg" />);
        expect(loading.hasClass('u-loader-rotate-lg')).to.equal(true);

    });
    it('Loading should be sm', function () {
        let loading = shallow(<Loading size="sm" />);
        expect(loading.hasClass('u-loader-rotate-sm')).to.equal(true);
    });

});


describe('verifiy type', function () {
    it('Loading should be primary', function () {
        let loading = shallow(<Loading colors="primary" />);
        expect(loading.hasClass('u-loader-rotate-primary')).to.equal(true);
    });

    it('Loading should be success', function () {
        let loading = shallow(<Loading colors="success" />);
        expect(loading.hasClass('u-loader-rotate-success')).to.equal(true);
    });
    it('Loading should be warning', function () {
        let loading = shallow(<Loading colors="warning" />);
        expect(loading.hasClass('u-loader-rotate-warning')).to.equal(true);
    });
});
describe('verifiy ladingType', function () {
    it('Loading should be rotate', function () {
        let loading = shallow(<Loading lodingType="rotate" />);
        expect(loading.hasClass('u-loader-rotate')).to.equal(true);
    });
    it('Loading should be line', function () {
        let loading = shallow(<Loding loadingType="line" />);
        expect(loading.hasClass('u-loader-line')).to.equal(true);
    });

});

