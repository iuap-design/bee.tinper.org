import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 *  badge 默认显示内容1
 */


const propTypes = {
  /**
   * @title 颜色
   */
  colors: PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger','default']),
  /**
   * @title 边角显示内容
   */
  dataBadge: PropTypes.oneOfType([
  		PropTypes.node,
  		PropTypes.string,
  		PropTypes.object
  ]),
  dataBadgePlacement: PropTypes.oneOf(['top,bottom'])
};


const defaultProps = {
	clsPrefix: 'u-badge'
};


class Badge extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let {colors,className,children,clsPrefix,dataBadge,dataBadgePlacement, ...others} = this.props;
		let clsObj = {};
		if(className){
			clsObj[className] = true;
		}
		/**
		 *  以u-badge起头的颜色类判断
		 */
		if(colors){
			clsObj[`${clsPrefix}-${colors}`] = true;
		}
		if(dataBadge) {
			clsObj[`data-badge`] = true;
		}
		if(dataBadgePlacement) {
			clsObj[`data-badge-${dataBadgePlacement}`] = true;
		}
		let classNames = classnames(clsPrefix,clsObj);

		return(
			<span className={classNames} {...others}>
				{dataBadge && (<span>{children}<span className="data-icon">{dataBadge}</span></span>)}
				{!dataBadge && (<span className="badge-single">{children}</span>)}
			</span>
		);
	}
}

Badge.defaultProps = defaultProps;

export default Badge;