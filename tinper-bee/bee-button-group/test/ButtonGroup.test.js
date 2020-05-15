import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import ButtonGroup from '../src/index';
import Button from 'bee-button';

describe('verifiy default', function () {
    it('verifiy buttonGroup exist', function () {
        let buttonGroup = shallow(<ButtonGroup/>);
        expect(buttonGroup.hasClass('u-button-group')).to.equal(true);
    });
    it('verifiy buttonGroup vertical', function () {
        let buttonGroup = shallow(
            <ButtonGroup vertical>
                <Button size="lg" type="primary">按钮一</Button>
                <Button size="lg" type="primary">按钮二</Button>
                <Button size="lg" type="primary">按钮三</Button>
            </ButtonGroup>
        );
        expect(buttonGroup.hasClass('u-button-group-vertical')).to.equal(true);
    });
    it('verifiy buttonGroup block', function () {
        let buttonGroup = shallow(
            <ButtonGroup vertical block>
                <Button size="lg" type="primary">按钮一</Button>
                <Button size="lg" type="primary">按钮二</Button>
                <Button size="lg" type="primary">按钮三</Button>
            </ButtonGroup>
        );
        expect(buttonGroup.hasClass('u-button-group-block')).to.equal(true);
    });
    it('verifiy buttonGroup justified', function () {
        let buttonGroup = shallow(
            <ButtonGroup justified>
                <Button size="lg" type="primary">按钮一</Button>
                <Button size="lg" type="primary">按钮二</Button>
                <Button size="lg" type="primary">按钮三</Button>
            </ButtonGroup>
        );
        expect(buttonGroup.hasClass('u-button-group-justified')).to.equal(true);
    });

});
