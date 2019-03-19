import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ViewerJs from 'viewerjs';

const propTypes = {
    ready:PropTypes.func,
    show:PropTypes.func,
    shown:PropTypes.func,
    hide:PropTypes.func,
    hidden:PropTypes.func,
    view:PropTypes.func,
    viewed:PropTypes.func,
    zoom:PropTypes.func,
    zoomed:PropTypes.func,
    asyncLoad:PropTypes.bool,
};
const defaultProps = {
    ready:()=>{},
    show:()=>{},
    shown:()=>{},
    hide:()=>{},
    hidden:()=>{},
    view:()=>{},
    viewed:()=>{},
    zoom:()=>{},
    zoomed:()=>{},
    asyncLoad:false
};

class Viewer extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(!this.props.asyncLoad){
            this.viewerCase = new ViewerJs(ReactDOM.findDOMNode(this.refs.views),{
                url: 'data-original',
                ...this.props
            })
        }
        
    }
    componentDidUpdate(){
        if(this.props.asyncLoad){
            if(this.viewerCase){
                this.viewerCase.update()
            }else{
                this.viewerCase = new ViewerJs(ReactDOM.findDOMNode(this.refs.views),{
                    url: 'data-original',
                    ...this.props
                })
            }
        }        
    }
    componentWillUnmount(){
        this.viewerCase.destroy()
    }
    render () {
        return (
            <div ref='views'>
                {this.props.children}
            </div>
        )
    }
};

Viewer.propTypes = propTypes;
Viewer.defaultProps = defaultProps;

export default Viewer;