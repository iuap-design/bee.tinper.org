import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Dropdown from '../src/index';


describe('verifiy click', function () {
  it('dropdown li exist', function () {

    let dropdown = shallow(<Dropdown colors="primary"  title="test" select activeKey="B">
        <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
        <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
        <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
        <Dropdown.Item divider></Dropdown.Item>
        <Dropdown.Item href="http://www.pagurian.com">Link Item</Dropdown.Item>
        </Dropdown>);

        expect(dropdown.state('title')).to.equal('Active Item');
        expect(dropdown.hasClass('u-dropdown')).to.equal(true);


  });


});


describe('verifiy toggle click', function () {
  it('dropdown li exist', function () {
      let flag = true;
     const onButtonClick = function  ()  {
         flag = false;
     };

    let dropdown = mount(<Dropdown colors="primary" activeKey="B" onToggle={ onButtonClick }>
        <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
        <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
        <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
        <Dropdown.Item divider></Dropdown.Item>
        <Dropdown.Item href="http://www.pagurian.com">Link Item</Dropdown.Item>
        </Dropdown>);
        dropdown.find('.dropdown-toggle').simulate('click');
        expect(dropdown.find('li').length).to.equal(5);
        expect(dropdown.find('.u-menu-item').length).to.equal(4);
        expect(flag).to.equal(false);
        expect(dropdown.state('open')).to.equal(true);

  });

});

describe('verifiy toggle click', function () {
  it('dropdown li exist', function () {
      let item = "B";
     const onItemSelect = function (eventKey) {
         console.log(111);
         item = eventKey;
     }
    let dropdown = mount(<Dropdown colors="primary" activeKey="B"  onSelect={ onItemSelect }>
        <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
        <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
        <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
        <Dropdown.Item divider></Dropdown.Item>
        <Dropdown.Item href="http://www.pagurian.com">Link Item</Dropdown.Item>
        </Dropdown>);
        dropdown.find('.dropdown-toggle').simulate('click');

        dropdown.find('.u-menu-item').at(0).simulate('click');
        //expect(item).to.equal("A");
  });

});
