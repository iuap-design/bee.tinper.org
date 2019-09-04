import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import isEqual from 'lodash.isequal'


const propTypes = {
    clsPrefix:PropTypes.string,
    value:PropTypes.array,
    onChange:PropTypes.func,
    disabled: PropTypes.bool,
    options: PropTypes.array,
    defaultValue: PropTypes.array
};

const defaultProps = {
    clsPrefix:'u-checkbox-group',
    onChange:()=>{},
    disabled: false,
    options: []
};
class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: props.value || props.defaultValue || [],
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
        const { onChange } = this.props;
        if (onChange) {
            const options = this.getOptions();
            onChange(
                values
                .filter(val => values.indexOf(val) !== -1)
                .sort((a, b) => {
                    const indexA = options.findIndex(opt => opt.value === a);
                    const indexB = options.findIndex(opt => opt.value === b);
                    return indexA - indexB;
                }),
            );
        }
    }

    getOptions() {
        const { options } = this.props;
        return (options).map(option => {
          if (typeof option === 'string') {
            return {
              label: option,
              value: option,
            }
          }
          return option;
        });
    }

    render() {
        let state = this.state;
        let props = this.props;
        let { clsPrefix, className, disabled, children, options } = props;
        let classes = clsPrefix;
        if(className)classes += ' '+className;
        if (options && options.length > 0) {
            children = this.getOptions().map(option => (
                <Checkbox
                key={option.value.toString()}
                disabled={'disabled' in option ? option.disabled : props.disabled}
                value={option.value}
                checked={state.values.indexOf(option.value) !== -1}
                onChange={option.onChange}
                >
                    {option.label}
                </Checkbox>
            ));
        }
        return (
            <div className={classes} >
               {
                   React.Children.map(children,child=>React.cloneElement(child,
                        {
                            onChange:()=>{this.changeHandle(child.props.value)},
                            checked:state.values.indexOf(child.props.value)!=-1,
                            disabled: child.props.disabled || disabled
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
