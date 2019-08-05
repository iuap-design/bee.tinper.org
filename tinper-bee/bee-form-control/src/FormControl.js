import React, {Component} from 'react';
import classnames from 'classnames';
import Icon from 'bee-icon';
import PropTypes from  'prop-types';

const propTypes = {
    componentClass: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]),
    type: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    onSearch: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    showClose: PropTypes.bool,
    focusSelect:PropTypes.bool,
    debounceDelay:PropTypes.number,
};

const defaultProps = {
    componentClass: 'input',
    clsPrefix: 'u-form-control',
    type: 'text',
    size: 'md',
    debounceDelay:0
};


class FormControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearch: !props.value,
            value: props.value == null ? "" : props.value,
            showClose:false
        }
        this.input = {};
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.value !== this.state.value) {
            this.setState({value: nextProp.value});
        }
    }

    handleSearchChange = (e) => {
        const {onChange} = this.props;
        const value = this.input.value;
        this.setState({
            value: value,
            showSearch: value == null || value === ""
        });
        if (onChange) {
            onChange(value,e);
        }
    }

    handleChange = (e) => {
        const now = new Date().getTime()
        if (now - this.lastScrollCall < this.props.debounceDelay) return
        this.lastScrollCall = now
        
        const {onChange} = this.props;
        let value = this.input.value;
        this.setState({
            showClose:true
        })
        if (onChange) {
            onChange(value,e);
        }
    }

    clearValue = () => {
        const {onChange} = this.props;
        this.setState({
            showSearch: true, 
            value: "",
            showClose:false
        });
        if (onChange) {
            onChange("");
        }
        this.input.focus();
    }

    handleKeyDown = (e) => {
        const {onSearch, type,onKeyDown} = this.props;
        if (e.keyCode === 13 && type === "search") {
            if (onSearch) {
                onSearch(this.input.value);
            }
        }
        onKeyDown&&onKeyDown(e);
    }
    handleSearch =(e)=>{
        const { onSearch } = this.props;
        if(onSearch)onSearch(this.input.value);
    }
    handleBlur = (e) => {
        const { value } = this.state;
        const { onBlur } = this.props;

        if(onBlur){
            onBlur(value, e);
        }
    }

    handleFocus = (e) => {
        const { value } = this.state;
        const { onFocus } = this.props;
        if(this.props.focusSelect){
            this.input.select()
        }
        if(onFocus){
            onFocus(value, e);
        }
    }

    renderInput = () => {
        const {
            componentClass: Component,
            type,
            className,
            size,
            clsPrefix,
            value,
            onChange,
            onSearch,
            onBlur,
            showClose,
            focusSelect,
            ...others
        } = this.props;
        // input[type="file"] 不应该有类名 .form-control.
        let classes = {};
        if (size) {
            classes[`${size}`] = true;
        }

        let classNames;
        if (type !== 'file') {
            classNames = classnames(clsPrefix, classes);
        }

        return (
            showClose?(
                <div className={classnames(`${clsPrefix}-close`,`${clsPrefix}-affix-wrapper`, className)}>
                    <Component
                        {...others}
                        type={type}
                        ref={(el) => this.input = el }
                        value={value}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}
                        className={classnames(classNames)}
                    />
                    <div className={`${clsPrefix}-suffix`}>
                        {
                            this.state.showClose? <Icon onClick={this.clearValue} type="uf-close-c"/>:''
                        }
                    </div>
                </div>
            ):(
                <Component
                    {...others}
                    type={type}
                    ref={(el) => this.input = el }
                    value={value}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    className={classnames(className, classNames)}
                />
            )
           
        );
    }

    renderSearch = () => {
        const {
            componentClass: Component,
            type,
            className,
            size,
            clsPrefix,
            value,
            onChange,
            onSearch,
            onBlur,
            ...others
        } = this.props;
        // input[type="file"] 不应该有类名 .form-control.
        let classes = {};
        if (size) {
            classes[`${size}`] = true;
        }
        classes[`${clsPrefix}-search`] = true;

        if (type === "search") {
            return (
                <div className={classnames(`${clsPrefix}-search`,`${clsPrefix}-affix-wrapper`, className)}>
                    <Component
                        {...others}
                        type={type}
                        ref={(el) => this.input = el }
                        onChange={this.handleSearchChange}
                        value={value}
                        onKeyDown={this.handleKeyDown}
                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}
                        className={classnames(clsPrefix, classes)}
                    />
                    <div className={`${clsPrefix}-suffix`}>
                        <Icon type="uf-search" onClick={this.handleSearch}/>
                    </div>
                </div>
            );
        }
    }

    render() {

        if (this.props.type === "search") {
            return this.renderSearch()
        }

        return this.renderInput()
    }
}

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;

export default FormControl;