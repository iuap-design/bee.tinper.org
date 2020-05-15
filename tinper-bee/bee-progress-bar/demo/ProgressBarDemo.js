import ProgressBar from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

const now = 60;
class Demo extends Component {render(){
	return( 
			<div>
				<ProgressBar now = {now} />
				<ProgressBar now = {now} label = {`${now}%`} />
				<ProgressBar now = {now} label = {`${now}%`} srOnly/>
				<ProgressBar active now = {40}/> 
				<ProgressBar striped now = {now}/> 
				<ProgressBar colors="info" now = {now} />
				<ProgressBar colors="danger" now = {50} />
				<ProgressBar colors="success" now = {40} />
				<ProgressBar colors="warning" now = {30} />
				<ProgressBar>
					<ProgressBar colors="danger" now = {10} />
					<ProgressBar colors="success" now = {20} />
					<ProgressBar colors="warning" now = {30} />
				</ProgressBar>
			</div>
		)
	}
}
export default Demo;