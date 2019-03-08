import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import { Col, Row, Con } from '../src/index';

describe('test con', function () {
    it('Con',function () {
        let con = shallow(<Con />);
        expect(con.hasClass('u-container')).to.equal(true);
    });
    it('Con fluid',function () {
        let con = shallow(<Con fluid />);
        expect(con.hasClass('u-container-fluid')).to.equal(true);
    });
});
describe('test row', function () {
    it('row',function () {
        let row = shallow(<Row />);
        expect(row.hasClass('u-row')).to.equal(true);
    });
});
describe('test col', function () {
    it('col md',function () {
        let colMd = shallow(<Col md={6} />);
        expect(colMd.hasClass('u-col-md-6')).to.equal(true);
    });
    it('col lg',function () {
        let colLg = shallow(<Col lg={6} />);
        expect(colLg.hasClass('u-col-lg-6')).to.equal(true);
    });
    it('col sm',function () {
        let colSm = shallow(<Col sm={6} />);
        expect(colSm.hasClass('u-col-sm-6')).to.equal(true);
    });
    it('col xs',function () {
        let colXs= shallow(<Col xs={6} />);
        expect(colXs.hasClass('u-col-xs-6')).to.equal(true);
    });
    it('col pull',function () {
        let col = shallow(<Col mdPull={4} md={6} />);
        expect(col.hasClass('u-col-md-pull-4')).to.equal(true);
    });
    it('col push',function () {
        let col = shallow(<Col  mdPush={4} md={6}  />);
        expect(col.hasClass('u-col-md-push-4')).to.equal(true);
    });
    it('col offset',function () {
        let col = shallow(<Col  mdOffset={4} md={6}  />);
        expect(col.hasClass('u-col-md-offset-4')).to.equal(true);
    });
});
