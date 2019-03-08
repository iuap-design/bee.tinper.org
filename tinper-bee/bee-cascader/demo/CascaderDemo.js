import Cascader from '../src/index';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const options = [
	{
	  value: '浙江',
	  children: [
		  {
		    value: '杭州',
		    children: [
			    {
			      value: '西湖',
			      children: [
				    {
				      value: '白娘子'
				    },
				    {
				      value: '许仙'
				    }]
			    }]
		  }
	  ]
	}, 
	{
	  value: '江苏',
	  children: [
		  {
		    value: '南京',
		    children: [
			    {
			      value: '中华门'
			    }]
		  }
	  ]
	},
	{
	  value: '山东'
	}
];
class Demo extends Component {
	render(){
		return( 
			<Cascader options = {options} /> 
		)
	}
}
export default Demo;