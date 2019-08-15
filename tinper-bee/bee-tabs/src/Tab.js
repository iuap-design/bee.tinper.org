import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    active:PropTypes.bool,//是否active
    value:PropTypes.string,//唯一标示
}

const defaultProps = {
    active:false
}

class Tab extends React.Component{

    click=()=>{
        this.props.tabClick(this.props.value);
        this.props.onClick&&this.props.onClick(this.props.value);
    }

    render(){
        let { clsfix,children,active,value } = this.props;
        let classes = `${clsfix}-item`;
        if(active)classes += ' active'
        return (
            <span className={classes} onClick={this.click} value={value}>
                { children }
            </span>
        )
    }
}


Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;