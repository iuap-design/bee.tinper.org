/**
 * @title 基础LoadingState
 * @description  点击按钮，呈现等待。
 */

import React, { Component } from 'react';
import LoadingState from '../../src';


class Demo1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
            show: false
		}
	}

	handleClick = () => {
		this.setState({
			show: true
		});

		setTimeout(() => {
            this.setState({
                show: false
            })
		}, 3000)
	}

	render () {
		return (
			<LoadingState
				showBackDrop={false}
				onClick={ this.handleClick }
				show={ this.state.show }
				colors="primary">
				confirm
			</LoadingState>
		)
	}
}



export default Demo1;