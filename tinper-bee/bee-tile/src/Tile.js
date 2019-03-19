import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
	border: PropTypes.bool,
	hoverColors: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger']),
	className: PropTypes.string,
	children: PropTypes.oneOfType([
				PropTypes.element,
				PropTypes.object,
				PropTypes.node
		])
};
const defaultProps = {
	clsPrefix: 'u-tile',
	border: true,
	Component: 'div'
};

class Tile extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		const {Component,border,className,clsPrefix,children,hoverColors, ...others} = this.props;
		let classes = {};
		if(border) {
			classes[`${clsPrefix}-bordered`] = true;
		}
		if(hoverColors) {
			classes[`${clsPrefix}-hover-${hoverColors}`] = true;
		}
		let classNames = classnames(clsPrefix,classes);
		return(<Component {...others} className={classnames(className,classNames)}>{children}</Component> )
	}
};
Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;
export default Tile;