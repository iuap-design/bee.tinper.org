import React ,{ Component }from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import ReactDom from 'react-dom';
import Select  from '../src';

const Option = Select.Option;

describe('Select single test', function() {
	
	it('Select should be exist', function() {
		let handleChange = function(value) {
	  		console.log(`selected ${value}`);
		};
		let select = mount(<Select defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}></Select>);
		expect(select.find('.u-select').length).to.equal(1);
	})
	it('large Select should be exist', function() {
		let handleChange = function(value) {
	  		console.log(`selected ${value}`);
		};
		let select = mount(<Select size="lg" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}></Select>);
		expect(select.find('.u-select-lg').length).to.equal(1);
	})
	it('small Select should be exist', function() {
		let handleChange = function(value) {
	  		console.log(`selected ${value}`);
		};
		let select = mount(<Select size="sm" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}></Select>);
		expect(select.find('.u-select-sm').length).to.equal(1);
	})

	it('Option Select should be exist', function() {
		class Demo1 extends Component {
			constructor() {
				super();
				this.handleChange = this.handleChange.bind(this);
			}
			handleChange(value) {
		  		console.log(`selected ${value}`);
			}
			render(){	
				return( 
					<div>
					    <Select size="lg" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
					      <Option value="jack">Jack</Option>
					      <Option value="lucy">Lucy</Option>
					      <Option value="disabled" disabled>Disabled</Option>
					      <Option value="yiminghe">Yiminghe</Option>
					    </Select>
					    <Select defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
					      <Option value="jack">Jack</Option>
					      <Option value="lucy">Lucy</Option>
					      <Option value="disabled" disabled>Disabled</Option>
					      <Option value="yiminghe">Yiminghe</Option>
					    </Select>
					    <Select size="sm" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
					      <Option value="jack">Jack</Option>
					      <Option value="lucy">Lucy</Option>
					      <Option value="disabled" disabled>Disabled</Option>
					      <Option value="yiminghe">Yiminghe</Option>
					    </Select>
					</div>
				)
			}
		}
		let select = mount(<Demo1 />, { attachTo: document.body});
		let selCli = select.find('.u-select').at(0);

		selCli.simulate("click");
		let option = window.document.querySelector('.u-select-dropdown');
		console.log(option);
		//expect(option.length).to.equal(1);
	})
	
	
	
})