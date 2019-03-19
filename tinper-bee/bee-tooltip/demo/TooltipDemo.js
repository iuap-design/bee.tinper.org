import Tooltip from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import  { OverlayTrigger }  from 'bee-overlay';



		const tooltip1 = function () {
			return (
			  <Tooltip id="tooltip1"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
			);
		}
		const Demo = function () {
			return (
				<div>
				    <OverlayTrigger overlay = {tooltip1()}  placement="bottom">
				    	<span>tooltip</span>
				    </OverlayTrigger>
				    <br/>
				    <OverlayTrigger overlay = {tooltip2()}  placement="bottom">
				    	<span>tooltip</span>
				    </OverlayTrigger>
				    <br/>
				    <OverlayTrigger overlay = {tooltip3()}  placement="bottom">
				    	<span>tooltip</span>
				    </OverlayTrigger>
				</div>
			);
		}


export default Demo;
