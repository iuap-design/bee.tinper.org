import Select from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

const Option = Select.Option;

class Demo extends Component {
	handleChange(value) {
  		console.log(`selected ${value}`);
	}
	render(){
		return( 
			<div>
			    <Select size="large" defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
			      <Option value="jack">Jack</Option>
			      <Option value="lucy">Lucy</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="yiminghe">Yiminghe</Option>
			    </Select>
			    <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
			      <Option value="jack">Jack</Option>
			      <Option value="lucy">Lucy</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="yiminghe">Yiminghe</Option>
			    </Select>
			    <Select size="small" defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
			      <Option value="jack">Jack</Option>
			      <Option value="lucy">Lucy</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="yiminghe">Yiminghe</Option>
			    </Select>
			</div>
		)
	}
}

export default Demo;