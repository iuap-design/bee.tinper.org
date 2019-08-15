import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    clsfix:PropTypes.string,
    onChange:PropTypes.func,
    value:PropTypes.string
};
const defaultProps = { 
    clsfix:'u-search-tabs',
    onChange:()=>{},
};

class SearchTabs extends Component {

    constructor(props){
        super(props);
        this.state={
            activeValue:props.value
        }
    }

    componentWillReceiveProps(nextProps){
        if('value' in nextProps && nextProps.value!=this.state.activeValue){
            this.setState({
                activeValue:nextProps.value
            })
        }
    }

    getChildren=()=>{
        let { children,clsfix } = this.props;
        let childs = [];
        if(children.length>1){
            React.Children.map(children,(child,index)=>{
                childs.push(
                    React.cloneElement(child,{
                        tabClick:this.childClick,
                        active:child.props.value==this.state.activeValue,
                        clsfix:clsfix
                    })
                )
                if(index < children.length-1){
                    childs.push(
                        <span className={`${clsfix}-split`}>|</span>
                    )
                }
            })
        }else{
            childs.push(
                React.cloneElement(children,{
                    tabClick:this.childClick,
                    active:children.props.value==this.state.activeValue,
                    clsfix:clsfix
                })
            )
        }
        return childs;
    }
    childClick=(activeValue)=>{
        this.setState({
            activeValue
        })
        this.props.onChange(activeValue)
    }

    render(){

        let { clsfix,children } = this.props;

        return(
            <div className={`${clsfix}`}>
                {
                    this.getChildren()
                }
            </div>
        )
    }
};
SearchTabs.propTypes = propTypes;
SearchTabs.defaultProps = defaultProps;
export default SearchTabs;