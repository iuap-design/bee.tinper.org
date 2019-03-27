import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Form from 'bee-form';
import FormControl from 'bee-form-control';
import Label from 'bee-label';
import Modal from 'bee-modal';
import Button from 'bee-button';
import Icon from 'bee-icon';
import Select from 'bee-select';
import { Col, Row } from 'bee-layout';
import colors from './colors';
const FormItem = Form.FormItem;
const Option = Select.Option;

const propTypes = {
    clsPrefix: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    required: PropTypes.bool,
    autoCalculate: PropTypes.func,
    onChange: PropTypes.func,
};
const defaultProps = {
    clsPrefix: "u-colorpicker",
    value: "",
    label: "",
    required: false,
    autoCalculate: false,
    autoCalculate: () => {},
    onChange: () => {}
};

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        let initValue = "";
        if('value' in props){
            initValue = props.value;
        }
        this.state = {
          displayColorPicker: false,
          selectedColor: "red",
          selectedScale: "600",
          selectedRgbValue: "",
          selectedHexValue: "",
          formValue: initValue,
        };
        this.input = {};
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.value !== this.props.value){
            this.setState({
                formValue: nextProps.value
            })
        }
    }

    // 打开色板
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    // 关闭色板
    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    // 点击弹框确定按钮
    submit = () => {
        let { autoCalculate } = this.props;
        this.setState({
            formValue: this.state.selectedHexValue,
            displayColorPicker: false
        })
        if(autoCalculate){
            autoCalculate(this.state.selectedColor,this.state.selectedScale);
        }
    }

    // 下拉框值更改
    handleSelectChange = value => {
        this.setState({
            selectedColor: value,
            selectedScale: "600",
            selectedRgbValue: "",
            selectedHexValue: ""
        })
    }; 

    // 选择色度
    handleSelectScale = (value,e) => {
        let rgb = e.currentTarget.currentStyle.backgroundColor;
        let hex = this.colorRGBtoHex(rgb);
        this.setState({
            selectedScale: value,
            selectedRgbValue: rgb,
            selectedHexValue: hex
        })
    }

    // 渲染下拉框选项
    renderOption = () => {
        const { clsPrefix } = this.props;
        let opts = [];
        colors.map((item) => {
            opts.push(<Option key={item.key} value={item.key} className={`${clsPrefix}-select-option clearfix`}>
                        <div className={`option-overview bg-${item.key}-600`}></div>
                        <span>{item.name}</span>
                    </Option>)
        })
        return opts;
    }

    // 渲染预制的色板，提供可选择的颜色示例
    renderColorPlate = (selectedColor) => {
        let { selectedScale } = this.state;
        let list = [];
        let color = {};
        colors.forEach((item)=>{if(item.key === selectedColor){color = item}})
        color.scale.map((item) => {
            list.push(<li key={item.key} className={`bg-${color.key}-${item}`} onClick={ (e)=>this.handleSelectScale(item,e) }>
                        {
                            selectedScale === item?
                            <Icon type="uf-correct-2"></Icon>
                            :
                            ""
                        }
                     </li>)
        })
        return list;
    }

    // 把RGB颜色转换为16进制颜色
    colorRGBtoHex(color) {
        var rgb = color.split(',');
        var r = parseInt(rgb[0].split('(')[1]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2].split(')')[0]);
        var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return hex;
    }

    // 输入框值更改事件
    handleChange = (value) => {
        const {onChange} = this.props;
        if (onChange) {
            onChange(value);
        }
        this.setState({
            formValue: value
        })
    }

    render(){
        let self = this;
        const {
            clsPrefix,
            onChange,
            value,
            label,
            required,
            className,
            ...others
        } = this.props;
        const { 
            selectedColor,
            selectedScale,
            selectedRgbValue,
            selectedHexValue,
            formValue
        } = this.state;
        const { getFieldProps, getFieldError } = this.props.form;

        let rules = required ? [{
            required: true, message: '请输入十六进制色值！',
        },{
            pattern: /^#[0-9a-fA-F]{6}$/, message: '色值格式不正确'
        }] : null;

        HTMLElement.prototype.__defineGetter__("currentStyle", function () { 
            return this.ownerDocument.defaultView.getComputedStyle(this, null); 
        });
        return(
            <div className={classnames(clsPrefix,className)}>
                <FormItem className={`${clsPrefix}-form`}>
                    <Label>
                        {required ? <Icon type="uf-mi" className='mast'></Icon> : "" }
                        {label}
                    </Label>
                    <FormControl 
                        placeholder='请输入十六进制色值' 
                        value={formValue} 
                        onChange={this.handleChange}
                        // {...getFieldProps('hexadecimal', {
                        //     initialValue: formValue,
                        //     validateTrigger: 'onBlur',
                        //     rules: rules,
                        //     onChange(value) {
                        //         if (onChange) {
                        //             onChange(value);
                        //         }
                        //     }
                        // }) }
                    />
                    <div 
                        className={`${clsPrefix}-form-color-demo bg-${selectedColor}-${selectedScale}`} 
                        onClick={ this.handleClick }>
                    </div>
                </FormItem>
                <div className='error'>
                    {getFieldError('hexadecimal')}
                </div>
                <Modal
                width = '800'
                className={`${clsPrefix}-modal`}
                show = { this.state.displayColorPicker }
                onHide = { this.handleClose } 
                backdropClosable = { false }>
                    <Modal.Header closeButton>
                        <Modal.Title>MD色板</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className={`${clsPrefix}-panel-header`}>
                            <div className={`${clsPrefix}-color-preview`}>
                                <div className={`${clsPrefix}-color-preview-demo bg-${selectedColor}-600`}></div>
                            </div>
                            <Select
                                defaultValue="red"
                                style={{ width: 200 }}
                                onChange={this.handleSelectChange}
                                >
                                {this.renderOption()}
                            </Select>
                        </div>
                        <div className={`${clsPrefix}-panel-content`}>
                            <Col md={7} xs={7} sm={7}>
                                <ul className={`${clsPrefix}-panel-color-plate clearfix`}>
                                    {this.renderColorPlate(selectedColor)}
                                </ul>
                            </Col>
                            <Col md={4} xs={4} sm={4}>
                                <div className={`${clsPrefix}-panel-color-info`}>
                                    <div className={`selected-color bg-${selectedColor}-${selectedScale}`}></div>
                                    <Label>Class：{`${selectedColor}-${selectedScale}`}</Label><br/>
                                    <Label>RGB：{`${selectedRgbValue}`}</Label><br/>
                                    <Label>HEX：{`${selectedHexValue}`}</Label>
                                </div>
                            </Col>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={ this.handleClose } shape="border" style={{marginRight: 15}}>取消</Button>
                        <Button onClick={ this.submit } colors="primary">确定</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
};

ColorPicker.propTypes = propTypes;
ColorPicker.defaultProps = defaultProps;
export default Form.createForm()(ColorPicker);