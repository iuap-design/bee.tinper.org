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
import InputGroup from "bee-input-group";
import colors from './colors';

const FormItem = Form.FormItem;
const Option = Select.Option;

const propTypes = {
    clsPrefix: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    disabledAlpha: PropTypes.bool,
    autoCalculate: PropTypes.func,
    onChange: PropTypes.func,
    title: PropTypes.string,
    cacelBtn:PropTypes.string,
    confirmBtn:PropTypes.string,
    isParameterArea:PropTypes.bool,
    modalProps:PropTypes.object,
    disabledModal:PropTypes.bool,
};
const defaultProps = {
    clsPrefix: "u-colorpicker",
    value: "",
    label: "",
    placeholder: "",
    required: false,
    disabled: false,
    disabledAlpha: false,
    autoCalculate: () => {},
    onChange: () => {},
    title:'取色板',
    cacelBtn:'取消',
    confirmBtn:'确认',
    isParameterArea:true,
    disabledModal:false
};

const initRgb = colors['red'].rgbArr[6] ? `rgb(${colors['red'].rgbArr[6]})` : '';
class ColorPicker extends Component {
    constructor(props) {
        super(props);
        let initValue = "";
        let initHex = "";
        if ('value' in props) {
            initValue = props.value;
            initHex = this.colorRGBtoHex(initRgb);
        }
        this.state = {
            displayColorPicker: false,
            selectedColor: "red",
            selectedScale: "600",
            selectedRgbValue: initRgb,
            selectedHexValue: initHex,
            formValue: initValue,
            alpha: 100,
        };
        this.input = {};
        this.cache = {
            selectedColor: "red",
            selectedScale: "600",
            selectedRgbValue: initRgb,
            selectedHexValue: initHex,
            formValue: initValue,
            alpha: 100
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                formValue: nextProps.value
            })
        }
    }

    // 打开色板
    handleClick = (e) => {
        e.stopPropagation();
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    // 关闭色板/点击弹框取消按钮
    handleClose = () => {
        let { selectedColor,selectedScale,selectedRgbValue,selectedHexValue,alpha } = this.cache;
        this.setState({
            displayColorPicker: false,
            selectedColor,
            selectedScale,
            selectedRgbValue,
            selectedHexValue,
            alpha,
        });
    };

    // 点击弹框确定按钮
    submit = () => {
        let { autoCalculate, onChange } = this.props;
        let { selectedColor,selectedScale,selectedHexValue,alpha } = this.state;
        let tempRgb = this.colorHexToRgb(selectedHexValue,alpha);
        let obj = {
            class: `${selectedColor}-${selectedScale}`,
            rgba: tempRgb,
            hex: selectedHexValue
        }
        this.setState({
            formValue: selectedHexValue,
            displayColorPicker: false
        })
        this.cache = Object.assign(this.cache,{
            selectedColor,
            selectedScale,
            selectedRgbValue:tempRgb,
            selectedHexValue,
            formValue: selectedHexValue,
            alpha
        });
        if (autoCalculate) {
            let result = this.calcHoverAndActive(selectedColor, selectedScale,selectedHexValue);
            autoCalculate(result);
        }
        if (onChange) {
            onChange(obj);
        }
    }

    /**
     * 根据选中的颜色计算 深一色度和浅一色度 的色值
     * @param selectedColor
     * @param selectedScale
     */
    calcHoverAndActive = (selectedColor,selectedScale,selectedHexValue) => {
        let obj = {};
        let selectedRgbArr = colors[selectedColor] ? colors[selectedColor].rgbArr : '';
        let selectedScaleArr = colors[selectedColor] ? colors[selectedColor].scale : '';
        let index = selectedScaleArr.indexOf(selectedScale);
        let lighter = "", darker = "";
        if(index === 0){
            lighter = "";
            darker = `rgb(${selectedRgbArr[index + 1]})`;
            obj.lighter = lighter;
            obj.darker = darker;
        }else if(index === selectedRgbArr.length - 1){
            lighter = `rgb(${selectedRgbArr[index - 1]})`;
            darker = "";
            obj.lighter = lighter;
            obj.darker = darker;
        }else if(index > 0 && index < selectedRgbArr.length - 1){
            lighter = `rgb(${selectedRgbArr[index - 1]})`;
            darker = `rgb(${selectedRgbArr[index + 1]})`;
            obj.lighter = lighter;
            obj.darker = darker;
        }
        obj.clor = selectedHexValue;
        return obj;
    }

    // 下拉框值更改
    handleSelectChange = value => {
        let selectedRgb = `rgb(${colors[value].rgbArr[6]})` || '';
        let selectedHex = this.colorRGBtoHex(selectedRgb);
        this.setState({
            selectedColor: value,
            selectedScale: "600",
            selectedRgbValue: selectedRgb,
            selectedHexValue: selectedHex,
            alpha: 100
        })
    };

    // 选择色块
    handleSelectScale = (value, e) => {
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
        for (let prop in colors) {
            let item = colors[prop];
            opts.push( <Option key = { item.key }value = { item.key } className = { `${clsPrefix}-select-option clearfix` } >
                            <div className = { `option-overview bg-${item.key}-600` } > </div>
                            <span > { item.name } </span>
                       </Option > )
        }
        return opts;
    }

    // 渲染预制的色板，提供可选择的颜色示例
    renderColorPlate = (selectedColor) => {
        let { selectedScale, selectedRgbValue } = this.state;
        let list = [];
        let color = {};
        if(colors[selectedColor]){
            color = colors[selectedColor]
        }
        let iconClass = this.isDark(selectedRgbValue) ? 'dark-contrast' : 'light-contrast';
        color.scale.map((item) => {
            list.push(<li key={item.key} className={`bg-${color.key}-${item}`} onClick={ (e)=>this.handleSelectScale(item,e) }>
                        {
                            selectedScale === item?
                            <Icon type="uf-correct-2" className={iconClass}></Icon>
                            :
                            ""
                        }
                     </li>)
        })
        return list;
    }

    // 把16进制颜色转换为RGB颜色
    colorHexToRgb(color,alpha){
        let sColor = color;
        sColor = sColor.toLowerCase();
        //十六进制颜色值的正则表达式
        let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 如果是16进制颜色
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                let sColorNew = "#";
                for (let i=1; i<4; i+=1) {
                    sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i+1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            let sColorChange = [];
            for (let i=1; i<7; i+=2) {
                sColorChange.push(parseInt("0x"+sColor.slice(i, i+2)));
            }
            if( alpha ){
                sColorChange.push(alpha);
            }
            return "rgba(" + sColorChange.join(",") + ")";
        }
        return sColor;
    }

    // 把RGB颜色转换为16进制颜色
    colorRGBtoHex(color) {
        let that = color;
        let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if (/^(rgb|RGB)/.test(that)) {
            let aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
            let strHex = "#";
            for (let i=0; i<aColor.length; i++) {
                let hex = Number(aColor[i]).toString(16);
                if (hex.length < 2) {
                    hex = '0' + hex;
                }
                strHex += hex;
            }
            if (strHex.length !== 7) {
                strHex = that;
            }
            return strHex;
        } else if (reg.test(that)) {
            let aNum = that.replace(/#/,"").split("");
            if (aNum.length === 6) {
                return that;
            } else if(aNum.length === 3) {
                let numHex = "#";
                for (let i=0; i<aNum.length; i+=1) {
                    numHex += (aNum[i] + aNum[i]);
                }
                return numHex;
            }
        }
        return that;
    }

    /**
     * 根据RGB值判断 深色与浅色
     * @param rgbColor rgb色值
     * @return
     */
    isDark = (rgbColor) => {
        let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        let aColor;
        if (/^(rgb|RGB)/.test(rgbColor)) {
            aColor = rgbColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        }
        let r = aColor[0],
            g = aColor[1],
            b = aColor[2];
        if(r*0.299 + g*0.578 + b*0.114 >= 192){ //浅色
            return false;
        }else{  //深色
            return true;
        }
    }

    // 输入框值更改事件
    handleChange = (value) => {
        const { onChange } = this.props;
        let tempRgb = this.colorHexToRgb(value);
        let obj = {
            class: "",
            rgba: tempRgb,
            hex: value
        }
        if (onChange) {
            onChange(obj);
        }
        this.setState({
            formValue: value
        })
    }

    // alpha值更改事件
    handleAlphaChange = (value) => {
        let reg = /^(?:0|[1-9][0-9]?|100)$/;
        if(value == '' || reg.test(value)){
            this.setState({
                alpha: value
            })
        }
    }

    render() {
        let self = this;
        const {
            clsPrefix,
            onChange,
            value,
            label,
            required,
            placeholder,
            className,
            disabled,
            disabledAlpha,
            isParameterArea,
            disabledModal,
            ...others
        } = this.props;
        const {
            selectedColor,
            selectedScale,
            selectedRgbValue,
            selectedHexValue,
            formValue,
            alpha
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
                    {label?
                        <Label>
                            {required ? <Icon type="uf-mi" className='mast'></Icon> : "" }
                            {label}
                        </Label>
                        : ''
                    }
                    <span>
                        <FormControl
                            disabled={disabled}
                            placeholder={placeholder}
                            value={formValue}
                            onChange={this.handleChange}
                        />
                        <div style={{backgroundColor:formValue}}
                            className={`${clsPrefix}-form-color-demo ${disabledModal ? "disabled" : ''}`}
                            onClick={ !disabled && !disabledModal ? this.handleClick : null }>
                        </div>
                    </span>
                </FormItem>
                <div className='error'>
                    {getFieldError('hexadecimal')}
                </div>
                <Modal
                width = {isParameterArea?'600':'350'}
                className={`${clsPrefix}-modal`}
                show = { this.state.displayColorPicker }
                onHide = { this.handleClose }
                backdropClosable = { false }
                {...this.props.modalProps}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className={`${clsPrefix}-panel-header`}>
                            <div className={`${clsPrefix}-color-preview`}>
                                <div className={`${clsPrefix}-color-preview-demo bg-${selectedColor}-600`}></div>
                            </div>
                            <Select
                                defaultValue={selectedColor}
                                style={{ width: 200 }}
                                onChange={this.handleSelectChange}
                                >
                                {this.renderOption()}
                            </Select>
                        </div>
                        <div className={`${clsPrefix}-panel-content`}>
                            <Row>
                                <Col md={7} xs={7} sm={7} style={isParameterArea?{}:{width:'100%',marginLeft:'10.5px'}} className="col-7">
                                    <ul className={`${clsPrefix}-panel-color-plate clearfix`}>
                                        {this.renderColorPlate(selectedColor)}
                                    </ul>
                                </Col>
                                {isParameterArea&&<Col md={5} xs={5} sm={5} className="col-5">
                                    <div className={`${clsPrefix}-panel-color-info`}>
                                        <div className="transparent-bg">
                                            <div className={`selected-color bg-${selectedColor}-${selectedScale}`} style={{opacity:alpha/100}}></div>
                                        </div>
                                        <ul>
                                            <li><Label>Class：</Label>{`${selectedColor}-${selectedScale}`}</li>
                                            <li><Label>RGB：</Label>{`${selectedRgbValue}`}</li>
                                            <li><Label>HEX：</Label>{`${selectedHexValue}`}</li>
                                            <li>
                                                <FormItem>
                                                    <Label>Alpha</Label>
                                                    <InputGroup>
                                                        <FormControl size="sm" value={alpha} onChange={this.handleAlphaChange} disabled={disabledAlpha}/>
                                                        <InputGroup.Addon>%</InputGroup.Addon>
                                                    </InputGroup>
                                                </FormItem>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>}
                            </Row>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={ this.handleClose } shape="border" style={{marginRight: 15}}>{this.props.cacelBtn}</Button>
                        <Button onClick={ this.submit } colors="primary">{this.props.confirmBtn}</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            )
        }
    };

ColorPicker.propTypes = propTypes;
ColorPicker.defaultProps = defaultProps;
export default Form.createForm()(ColorPicker);
