import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string
  
};
/**
 *  badge 默认显示内容1
 */
const defaultProps = {
	clsPrefix: 'uf'
};

class Icon extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		let {type,className,clsPrefix, ...others} = this.props;
		let clsObj = {};
		
		let classNames = classnames(clsPrefix,type);

		return(
			<i {...others} className={classnames(classNames,className)}></i> 
		)
	}
}
Icon.defaultProps = defaultProps;
Icon.propTypes = propTypes;

export default Icon;