import React , { Component } from 'react';
import PropTypes from 'prop-types'
import InputNumber from './InputNumber';

const noop = ()=>{};

const propsTypes = {
    clsfix:PropTypes.string,
    className:PropTypes.string,
    value:PropTypes.array,
    onChange:PropTypes.func,
    onBlur:PropTypes.func,
    onFocus:PropTypes.func,
    placeholder:PropTypes.array,

    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    precision: PropTypes.number,
    format: PropTypes.func,
    delay: PropTypes.number,
    disabled:PropTypes.bool,
    toThousands:PropTypes.bool,
    toNumber:PropTypes.bool
}

const defaultProps = {
    clsfix:'u-input-number',
    className:'',
    value:[],
    placeholder:[],
    onChange:noop,
    onBlur:noop,
    onFocus:noop
}

class InputNumberGroup extends Component {
    
    static displayName = 'InputNumberGroup';

    constructor(props){
        super(props);
        this.state={
            value:props.value||[]
        }
    }
    
    componentWillReceiveProps(nextProps){
        if('value' in nextProps){
            this.setState({
                value:nextProps.value
            })
        }
    }

    onChange=(index,v)=>{
        let { value } = this.state;
        value[index] = v;
        this.setState({
            value
        })
        this.props.onChange(value);
    }
    onFocus=(index,v)=>{
        let { value } = this.state;
        value[index] = v;
        this.setState({
            value
        })
        this.props.onFocus(value);
    }
    onBlur=(index,v)=>{
        let { value } = this.state;
        if(index==1){
            if(v<value[0]){
                console.warn('The second value must be greater than or equal to the first value');
            }
        }
        value[index] = v;
        this.setState({
            value
        })
        
        this.props.onBlur(value)
    }

    render(){
        let { className,clsfix,value,onChange,placeholder,split,onBlur,onFocus, ...other } = this.props;
        let { value:stateValue } = this.state;
        return (
            <div className={`${clsfix}-group ${className}`}>
                <InputNumber 
                    onChange={(value)=>{this.onChange(0,value)}} 
                    onBlur={(value)=>{this.onBlur(0,value)}} 
                    onFocus={(value)=>{this.onFocus(0,value)}} 
                    value={stateValue[0]} 
                    placeholder={placeholder[0]}
                    {...other}/>
                    {
                        split?split:<span className={`${clsfix}-group-split`}>~</span>
                    }
                <InputNumber 
                    onChange={(value)=>{this.onChange(1,value)}} 
                    onBlur={(value)=>{this.onBlur(1,value)}} 
                    onFocus={(value)=>{this.onFocus(1,value)}} 
                    value={stateValue[1]} 
                    placeholder={placeholder[1]}
                    {...other}/>
            </div>
        )
    }
}

InputNumberGroup.propsTypes = propsTypes;
InputNumberGroup.defaultProps = defaultProps;

export default InputNumberGroup;