import  Badge from '../src';
import React, { Component } from 'react'

class Demo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="u-col-md-12">
					<h2>不同背景的徽章</h2>
					<div className="margin-right-20 inline" clsPrefix = "ahua">
						<Badge colors="primary">a</Badge>
					</div>
					<div className="margin-right-20 inline">
						<Badge colors="primary">a</Badge>
					</div>
					<div className="margin-right-20 inline">
						<Badge colors="info">b</Badge>
					</div>
					<div className="margin-right-20 inline">
						<Badge colors="success">c</Badge>
					</div>
					<div className="margin-right-20 inline">
						<Badge colors="dark">d</Badge>
					</div>
					<div className="margin-right-20 inline">
						<Badge colors="warning">e</Badge>
					</div>
					<div className="margin-right-20 inline">
						<Badge colors="danger">f</Badge>
					</div>
				</div>
				<div className="u-col-md-12">
					<h2>不同内容的徽章</h2>
					<div className="margin-right-20 inline">
						<Badge colors="primary">
							<i className="uf uf-bellmusicaltool"></i>
						</Badge>
					</div>
					<div className="margin-right-20 inline">
						<Badge colors="primary">
							<i className="uf uf-femalesilhouette"></i>
						</Badge>
					</div>
				</div>
			</div>
		)
	}  
}

export default Demo;