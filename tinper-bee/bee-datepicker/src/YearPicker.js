/**
 * Created by chief on 17/4/6.
 */

import YearPanel from "./rc-calendar/year/YearPanel";
import React, { Component } from "react";
import Picker from "./rc-calendar/Picker";
import FormControl from "bee-form-control";
import InputGroup from 'bee-input-group';
import Icon from "bee-icon";
import classnames from 'classnames';
import moment from "moment";

//去掉focus报错
Picker.prototype.componentDidUpdate = ()=>{}

class YearPicker extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            type: "year",
            value: props.value || props.defaultValue || '' ,
            open: props.open||false,
            showClose: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if ("value" in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
        this.setState({
            renderIcon: nextProps.renderIcon,
            open: nextProps.open
        });

    }

    onChange = value => {
        this.setState({
            value
        });
    };


    onOpenChange = open => {
        this.setState({
            open
        });
    };

    handleChange = value => {
        const props = this.props;
        this.setState({ value });
        props.onChange(value, (value && value.format(props.format)) || '');
    }
    onMouseLeave = (e) => {
        this.setState({
          showClose: false
        })
      }
      onMouseEnter = (e) => {
        this.setState({
          showClose: true
        })
      }
      clear = (e) => {
        e.stopPropagation();
        this.setState({
          value: ''
        })
        this.props.onChange && this.props.onChange('', '');
      }

    render() {
        let state = this.state;

        let props = this.props;
        let value = state.value;

        const Calendar = <YearPanel 
        prefixCls={'rc-calendar-picker'} 
        rootPrefixCls={'rc-calendar'}  
        {...props} focus={()=>{}} 
        showDateInput={true}
        />;
        let classes = classnames(props.className, "datepicker-container");
        return (
            <div className={classes}>
                <Picker
                    animation="slide-up"
                    {...props}
                    onOpenChange={this.onOpenChange}
                    onChange={this.handleChange}
                    calendar={Calendar}
                    prefixCls={'rc-calendar'}
                    value={state.value||moment()}
                >
                    {({  }) => {
                        return (
                            <InputGroup simple className="datepicker-input-group" 
                                onMouseEnter={this.onMouseEnter}
                                onMouseLeave={this.onMouseLeave}
                            >
                                <FormControl
                                    placeholder={this.props.placeholder}
                                    className={this.props.className}
                                    disabled={props.disabled}
                                    readOnly
                                    value={(value && value.format(props.format)) || ""}
                                />
                               {
                                    this.state.value&&this.state.showClose&&(!props.disabled)?(
                                    <InputGroup.Button shape="border" 
                                        onClick={this.clear}>
                                        <i className="uf uf-close-c"></i>
                                    </InputGroup.Button>
                                    ):<InputGroup.Button shape="border">
                                        { props.renderIcon() }
                                    </InputGroup.Button>
                                }
                            </InputGroup>
                        );
                    }}
                </Picker>
            </div>
        );
    }
}


YearPicker.defaultProps = {
    renderIcon: () => <Icon type="uf-calendar" />,
    disabled:false
}

export default YearPicker;
