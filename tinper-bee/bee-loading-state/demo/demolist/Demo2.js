/**
 * @title 自定义`LoadingState`
 * @description `loadingText`自定义等待文字.
 */


import React, { Component } from 'react';
import LoadingState from '../../src';

class Demo2 extends Component {
	constructor(props){
		super(props);
		this.state = {
			show: false
		}
	}

    handleClick = () => {
        this.setState({
            show: true
        })
        setTimeout(() => {
            this.setState({
                show: false
            })
        }, 3000)
    }
	render(){
		return (
			<LoadingState
				onClick={ this.handleClick }
				colors="dark"
				show={ this.state.show }
				loadingText="waiting...">
				confirm
			</LoadingState>
		)
	}
}

export default Demo2;