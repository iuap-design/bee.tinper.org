import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import isEqual from 'lodash.isequal'


const propTypes = {
    clsPrefix:PropTypes.string,
    value:PropTypes.array,
    onChange:PropTypes.func
};

const defaultProps = {
    clsPrefix:'u-checkbox-group',
    value:[],
    onChange:()=>{}
};
class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values:props.value
        }
    }
    componentWillReceiveProps(nextProps){
        if(!isEqual(nextProps.value,this.state.values)){
            this.setState({
                values:nextProps.value
            })
        }
    }
    changeHandle=(v)=>{
        let values = this.state.values;
        if(values.indexOf(v)!=-1){
            values.splice(values.indexOf(v),1)
        }else{
            values.push(v)
        }
        this.setState({
            values
        })
        this.props.onChange(values)
    }

    render() {
        let { clsPrefix, className } = this.props;
        let classes = clsPrefix;
        if(className)classes += ' '+className
        return (
            <div className={classes} >
               {
                   React.Children.map(this.props.children,child=>React.cloneElement(child,
                        {
                            onChange:()=>{this.changeHandle(child.props.value)},
                            checked:this.state.values.indexOf(child.props.value)!=-1
                        }
                    ))
               }
            </div>
        );
    }
}

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;

export default CheckboxGroup;
