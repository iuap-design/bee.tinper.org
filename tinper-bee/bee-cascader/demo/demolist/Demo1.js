/**
 *
 * @title 基础级联菜单
 * @description
 *
 */

import React, { Component } from 'react';
import {Row, Col } from 'bee-layout';
import Cascader from '../../src';
import Button from "bee-button";

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
 class Demo1 extends Component {
	constructor(props){
		super(props);
		this.state={
			options:options
		}
	}

	onClickHandler=(data)=>{
		console.log("data: ",data);
	}

	click=()=>{
		this.setState({
			options:[
				{
					value: '浙江1',
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
					value: '江苏1',
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
					value: '山东1'
				}
			]
		})
	}
 	render(){
 		return(
            <Row>
                <Col md={4}>
									<Button colors="primary" onClick={this.click} style={{marginBottom:8+'px'}}>点击</Button>
                    <div className="height-150">
                     	<Cascader options = {this.state.options} onClick={this.onClickHandler}/>
                    </div>
                </Col>
            </Row>
 		)
 	}
 }
export default Demo1;