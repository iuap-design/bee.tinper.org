import React, {Component} from 'react';
import classnames from 'classnames';
import InputGroup from 'bee-input-group';
import FormControl from 'bee-form-control';
import Message from 'bee-message';
import PropTypes from 'prop-types';
import i18n from './i18n';
import { getComponentLocale } from 'bee-locale/build/tool';

const propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    autoWidth: PropTypes.bool,
    precision: PropTypes.number,
    format: PropTypes.func,
    delay: PropTypes.number,
    disabled:PropTypes.bool,
    toThousands:PropTypes.bool,
    locale:PropTypes.object,
    toNumber:PropTypes.bool, //回调函数内的值是否转换为数值类型
    displayCheckPrompt:PropTypes.bool, //是否显示超出限制范围之后的检验提示
    minusRight:PropTypes.bool,//负号是否在右边
    handleBtnClick:PropTypes.func,//加减按钮点击回调
    hideActionButton:PropTypes.bool,//隐藏加减按钮
};

const defaultProps = {
    value: "",
    step: 1,
    clsPrefix: 'u-input-number',
    iconStyle: 'double',
    autoWidth: false,
    delay: 300,
    toNumber:false,
    displayCheckPrompt:false,
    locale:{},
    handleBtnClick:()=>{}
};


//校验提示
function prompt (content)  {
    Message.destroy();
    Message.create({content: content, color: 'warninglight'});
}



/**
 * 千分符
 * @param {要转换的数据} num 
 */
function toThousands(number) {
    if(number==='')return '';
    if(number==='0')return '0';
    let num = (number || 0).toString();
    let integer = num.split('.')[0];
    let decimal = num.split('.')[1]||'';
    let result = '';
    while (integer.length > 3) {
        result = ',' + integer.slice(-3) + result;
        integer = integer.slice(0, integer.length - 3);
    }
    if (integer) { 
        result = integer + result ;
        if(num=='.'||num.indexOf('.')==num.length-1){
            result = result + '.'+decimal;
        }else if (decimal){
            result = result + '.'+decimal;
        }
     }
     if(result[0]=='-'){
        result = result.replace('-,','-')
    }
    return result;
}


function setCaretPosition(ctrl,pos,need) {
    
    if(ctrl&&need){
        if(ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(pos,pos);
            // IE8 and below
        } else if(ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
        
    }
    
}



class InputNumber extends Component {

    constructor(props) {
        super(props);
        // 初始化状态，加减按钮是否可用，根据当前值判断

        let data = this.judgeValue(props);
        this.state = {
            value:data.value,
            minusDisabled: data.minusDisabled,
            plusDisabled: data.plusDisabled,
            showValue:toThousands(data.value),
            placeholderShow:true
        }

        this.timer = null;
        this.focus = false;
        this.selectionStart = 0;
    }

    // unThousands = (number) =>{
    //     if(!number || number === "")return number;
    //     number = number.toString();
    //     return number.replace(new RegExp(this.props.formatSymbol,'g'),'');
    //     // return number.replace(/\,/g,'');
    // }

    /**
     * 校验value
     * @param {*} props 
     * @param {原来的值} oldValue 
     */
    judgeValue = (props,oldValue)=> {
        let currentValue;
        let currentMinusDisabled = false;
        let currentPlusDisabled = false;
        let { value,min,max,precision,onChange,displayCheckPrompt } = props;
        if(props.minusRight){
            value = value.toString();
            if(value.indexOf('-')!=-1){//所有位置的负号转到前边
                value = value.replace('-','');
                value = '-'+value;
            }
            value = Number(value);
        }
        if ((value!=undefined)&&(value!=null)) {
            if(value===''){
                currentValue='';
                return {
                    value: '',
                    minusDisabled: false,
                    plusDisabled: false
                }
            }else{
                currentValue = Number(value) ||0;
            }
        } //lse if (min&&(value!='')) {//mdd中提出bug
            //currentValue = min;
        //} 
        else if(value==='0'||value===0){
            currentValue = 0;
        }else{//NaN
            if(oldValue||(oldValue===0)||(oldValue==='0')){
                currentValue = oldValue;
            }else{//value为空
                return {
                    value: '',
                    minusDisabled: false,
                    plusDisabled: false
                }
            }
        }
        if(currentValue==-Infinity){
            return {
                value: min,
                minusDisabled: true,
                plusDisabled: false
            }
        }
        if(currentValue==Infinity){
            return {
                value: max,
                minusDisabled: false,
                plusDisabled: true
            }
        }
        const local = getComponentLocale(props, this.context, 'InputNumber', () => i18n);
        if (min&&currentValue <= min) {
            if(displayCheckPrompt)prompt(local['msgMin']);
            currentMinusDisabled = true;
            currentValue=min;
        }
        if (max&&currentValue >= max) {
            if(displayCheckPrompt)prompt(local['msgMax']);
            currentPlusDisabled = true;
            currentValue=max;
        }

        if(props.hasOwnProperty('precision')){
            // currentValue = Number(currentValue).toFixed(precision);
            currentValue = this.getPrecision(currentValue);
        }
        if(props.minusRight){
            currentValue = currentValue.toString();
            if(currentValue.indexOf('-')!=-1){//负号转到后边
                currentValue = currentValue.replace('-','');
                currentValue = currentValue+'-';
            }
        }
        
        return {
            value: currentValue,
            minusDisabled: currentMinusDisabled,
            plusDisabled: currentPlusDisabled
        }
    }

    componentDidMount(){
        this.setState({
            value: this.props.value,
            showValue:toThousands(this.props.value)
        });
    }
    componentWillReceiveProps(nextProps){
        if(this.focus){
            if(nextProps.value==Infinity||nextProps.value==-Infinity){
                
            }else{
                this.setState({
                    value: nextProps.value,
                    showValue:toThousands(nextProps.value),
                });
            }
            
        }else{
            let data = this.judgeValue(nextProps,this.state.value);
            this.setState({
                value: data.value,
                showValue:toThousands(data.value),
                minusDisabled: data.minusDisabled,
                plusDisabled: data.plusDisabled
            });
        }
    }

    ComponentWillUnMount() {
        this.clear();
    }

    /**
     *  @memberof InputNumber
     * type 是否要四舍五入(此参数无效,超长不让输入)
     */
    numToFixed = (value,fixed,type) => {
        value = String(value);
        if(!value && value !== "0")return value;
        if(!fixed && String(fixed) !== "0")return value;
        let preIndex = value.indexOf(".");
        if(value.indexOf(".") === -1)return value;
        preIndex++;
        let endIndex = (preIndex+fixed);
        let precValue = value.substr(preIndex,endIndex)+"0000000000";
        if(type){
            return Number(value).toFixed(fixed);
        }
        return value.split(".")[0] +"."+ precValue.substr(0,fixed);
    }

    handleChange = (value) => {
        let selectionStart = this.input.selectionStart==undefined?this.input.input.selectionStart:this.input.selectionStart;
        this.selectionStart = selectionStart;
        const { onChange,toNumber,minusRight} = this.props;
        if(value===''){
            onChange && onChange(value);
            this.setState({
                value,
                showValue:''
            })
            return;
        }
        // value = this.unThousands(value);
        if(minusRight){
            if(value.match(/-/g)&&value.match(/-/g).length>1)return
        }
        if(isNaN(value)&&(value!=='.')&&(value!=='-'))return;
        if(value.indexOf(".") !== -1){//小数最大值处理
            let prec = String(value.split(".")[1]).replace("-","");
            if(this.props.precision === 0 && (prec ==="" || prec !=""))return;
            if(this.props.precision && prec.length > this.props.precision)return;
            if(prec.length > 8)return;
        }
        this.setState({
            value,
            showValue:toThousands(value),
        });
        if(value==='-'){
            onChange && onChange(value);
        }else if(value=='.'||value.indexOf('.')==value.length-1){//当输入小数点的时候
            onChange && onChange(value);
        }else if(value[value.indexOf('.')+1]==0){//当输入 d.0 的时候，不转换Number
            onChange && onChange(value);
        }else{
            toNumber?onChange && onChange(Number(value)):onChange && onChange(value);
        }
        if(this.props.toThousands){
            let stateShowValue = toThousands(this.state.value);
            let showValue = toThousands(value)
            let addNumber = 0;
            let delNumber = 0;
            let reg = /[0-9]/
            for(let i =0;i<selectionStart;i++){
                if(!reg.test(showValue[i]))addNumber+=1;
            }
            for(let j= 0;j<selectionStart;j++){
                if(stateShowValue[j]){
                    if(!reg.test(stateShowValue[j]))delNumber+=1;
                }
            }
            let position = selectionStart+addNumber-delNumber;
            setCaretPosition(this.input&&this.input.input,position,true)
        }
    }
    

    handleFocus = (value,e) => {
        this.focus = true;
        let {onFocus, min, max } = this.props;
        onFocus && onFocus(this.getPrecision(this.state.value), e);
    }
    /**
     * 恢复科学技术法的问题
     */
    getFullNum = (num)=>{
        //处理非数字
        if(isNaN(num)){return num};
        
        //处理不需要转换的数字
        var str = ''+num;
        if(!/e/i.test(str)){return num;};
        let _precision = this.props.precision?this.props.precision:18;
        return (Number(num)).toFixed(_precision).replace(/\.?0+$/, "");
    }

    handleBlur = (v,e) => {
        this.focus = false;        
        const {onBlur,precision,onChange,toNumber,max,min,displayCheckPrompt,minusRight,round } = this.props;
        const local = getComponentLocale(this.props, this.context, 'InputNumber', () => i18n);
        v = this.state.value;//在onBlur的时候不需要活输入框的只，而是要获取state中的值，因为有format的时候就会有问题。
        if(v==='' || !v){
            this.setState({
                value:v
            })
            onChange && onChange(v);
            onBlur && onBlur(v,e);
            return;
        }
        // let value = this.unThousands(v); 
        let value = this.numToFixed(v,precision,round);
        if(minusRight){
            if(value.indexOf('-')!=-1){//所有位置的负号转到前边
                value = value.replace('-','');
                value = '-'+value;
            }
        }
        value = isNaN(Number(value)) ? 0 : Number(value);
        if((max || max===0) && value>max){
            if(displayCheckPrompt)prompt(local['msgMax']);
            value = max;
        }
        if((min || min===0) && value<min){
            if(displayCheckPrompt)prompt(local['msgMin']);
            value = min;
        }
        if(this.props.hasOwnProperty('precision')){
            // value = value.toFixed(precision);
            value = this.getPrecision(value);
        }
        value = value.toString();
        if(minusRight&&(value.indexOf('-')!=-1)){//负号转到后边
            value = value.replace('-','');
            value = value+'-';
        }
        this.setState({
            value,
            showValue:toThousands(value),
            placeholderShow:true
        });
        this.detailDisable(value);
        if(toNumber&&(!minusRight)){
            onChange && onChange(value);
            onBlur && onBlur(value,e);
        }else{
            onChange && onChange(value);
            onBlur && onBlur(value,e);
        }
    }
    /**
     * 设置增加减少按钮是否可用
     */
    detailDisable = (value) => {
        const { max, min, step } = this.props;
        if(max&&(value >= max || Number(value) + Number(step) > max)){
            this.setState({
                plusDisabled: true
            })
        }else{
            this.setState({
                plusDisabled: false
            })
        }
        if(min&&(value <= min || value -step < min)){
            this.setState({
                minusDisabled: true
            })
        }else{
            this.setState({
                minusDisabled: false
            })
        }

    }
    /**
     * 减法
     */
    minus = (value) => {
        let {min, max, step, onChange, toNumber} = this.props;
        value = (value === '-') ? 0 : value;
        if(typeof min === "undefined"){
            value = this.detail(value, step, 'reduce');
        }else{
            min = Number(min)
            if(value < min){
                value = min;
            }else{
                let reducedValue = this.detail(value, step, 'reduce');
                if(reducedValue >= min){
                    value = reducedValue;
                }
            }
        }
        if(max){
            max = Number(max)
            if(value > max){
                value = max;
            }
        }
        

        this.setState({
            value,
            showValue:toThousands(value)
        },()=>{
            this.input.input.focus&&this.input.input.focus()
        });
        toNumber?onChange && onChange(Number(value)):onChange && onChange(value);
        this.handleBtnClick('down',value);
        this.detailDisable(value);
    }
    /**
     * 加法
     */
    plus = (value) => {
        let {max, min, step, onChange, toNumber} = this.props;
        value = (value === '-') ? 0 : value;
        if(typeof max === "undefined"){
            value = this.detail(value, step, 'add');
        }else{
            max = Number(max)
            if(max&&value > max){
                value = max;
            }else{
                let addedValue = this.detail(value, step, 'add');
                if(max&&addedValue <= max){
                    value = addedValue;
                }
            }
        }
        if(min){
            min = Number(min)
            if(value < min){
                value = min;
            }
        }
        
        this.setState({
            value,
            showValue:toThousands(value)
        },()=>{
            this.input.input.focus&&this.input.input.focus()
        });
        toNumber?onChange && onChange(Number(value)):onChange && onChange(value);
        this.handleBtnClick('up',value);
        this.detailDisable(value);
    }


    detail = (value, step, type) => {
        let {precision} = this.props;

        let valueFloat = this.separate(value);
        let stepFloat = this.separate(step);

        let ans;
        let stepFloatLength = stepFloat.toString().length;
        let valueFloatLength = valueFloat.toString().length;

        if (typeof precision === 'undefined') {
            precision = Math.max(stepFloatLength, valueFloatLength);
        }
        let coefficient = Math.pow(10, Math.abs(stepFloatLength - valueFloatLength));
        if (type === 'add') {
            ans = (value * coefficient + step * coefficient) / coefficient;
        } else {
            ans = (value * coefficient - step * coefficient) / coefficient;
        }

        return ans.toFixed(precision);

    }

    /**
     * 分离小数和整数
     * @param value
     * @returns {*}
     */
    separate = (value) => {
        if(value==null||value==undefined){
            return ""
        }else{
            value = value.toString();
            if(value.indexOf('.') > -1){
                return value.split('.')[1];
            }else{
                return ""
            }
        } 
    }

    

    clear = () => {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    handlePlusMouseDown = (e) => {
        e.preventDefault && e.preventDefault();
        let {delay,disabled} = this.props;
        let {value} = this.state;
        if(disabled)return;
        this.plus(value);
        this.clear();
        this.timer = setTimeout(() => {
            this.handlePlusMouseDown(e);
        }, delay);
    }

    handleReduceMouseDown = (e) => {
        e.preventDefault && e.preventDefault();
        let {delay,disabled} = this.props;
        let {value} = this.state;
        if(disabled)return;
        this.minus(value);
        this.clear(); 
        this.timer = setTimeout(() => {
            this.handleReduceMouseDown(e);
        }, delay);
    }

    getPrecision = (value)=>{
        if(value==null||value==undefined)return value;
        if(!value && value === "")return value;
        value = String(value);
        value = value.indexOf("e") !== -1?this.getFullNum(value):value;
        const {precision} = this.props;
        if(precision === 0)return value;
        if (precision == undefined || (value.indexOf(".") !== -1 && String(value.split(".")[1]).length === precision)) {
            return value;
        }
        let before = value.substring(0,1),len = value.length,
        after = value.substring(len-1,len);
        before = before === "-"?before:"";
        after = after === "-"?after:"";
        //是科学计数法，不replace - 
        if(before)value = value.substring(1,len);
        if(after)value = value.substring(0,len-1);
        // value = value.replace("-",'');
        let precV = "000000000000000000000000000000000000000000000000000000000000000000000000";
        if(value.indexOf(".") === -1){
            precV = precV.substr(0,precision);
            precV = precV?"."+precV:precV;
            if((!isNaN(value))&&(value.indexOf('-')!=-1||value.indexOf('+')!=-1)&&(value.indexOf('e')!=-1)){//是科学计数法，不拼接0000000

            }else{
                value = value + precV;
            }
        }
        return before+Number(value).toFixed(precision)+after;
    }

    handleBtnClick = (type,value)=>{
        this.props.handleBtnClick(type,value)
    }
    isIE = ()=>{
        if(window){
            if (!!window.ActiveXObject || "ActiveXObject" in window)return true;
        }
        return false;
    }
    placeholderClick=()=>{
        this.input.input.focus()
        this.setState({
            placeholderShow:false
        })
    }

    render() {
        const {toThousands,minusRight, max, min, step,disabled, clsPrefix, className, delay, onBlur, onFocus, iconStyle, autoWidth, onChange, format, precision,toNumber, hideActionButton, ...others} = this.props;
        let classes = {
            [`${clsPrefix}-auto`]: autoWidth,
            [`${clsPrefix}`]: true,
            [`${clsPrefix}-lg`]: others.size === "lg",
            [`${clsPrefix}-sm`]: others.size === "sm",
        };

        let {value, minusDisabled, plusDisabled, showValue} = this.state;
        value = precision != null && !this.focus?this.getPrecision(value):value;
        value = format && !this.focus? format(value) : value;
        value = String(value).indexOf("e") !== -1?this.getFullNum(value):value;
        if(minusRight && String(value).indexOf('-')!=-1){
            value = String(value).replace("-","")+"-";
        }
        let disabledCursor = disabled? ' disabled-cursor':'';
        let disabledCon = disabled? ' disabled-con':'';
        return (
            <div className={`${clsPrefix}-out`}>
                {
                    iconStyle === 'double' ? (
                        <InputGroup className={classnames(className, classes,disabledCon)}>
                            {
                                this.isIE()&&(!value)?<div onClick={this.placeholderClick} style={{'display':this.state.placeholderShow?'block':'none'}} className={`${clsPrefix}-placeholder`}>{this.props.placeholder}</div>:''
                            }
                            { hideActionButton ? '' : 
                                <InputGroup.Addon
                                    // onClick={()=>{minusDisabled?'':this.handleBtnClick('down')}}
                                    className={(minusDisabled && 'disabled' ) + disabledCursor}
                                    onMouseDown={ this.handleReduceMouseDown}
                                    onMouseLeave={ this.clear }
                                    onMouseUp={ this.clear }>
                                    -
                                </InputGroup.Addon>
                            }
                            <FormControl
                                {...others}
                                value={toThousands?showValue:value}
                                disabled={disabled}
                                onBlur={ this.handleBlur }
                                onFocus={this.handleFocus}
                                onChange={ this.handleChange }
                                ref={ref=>this.input = ref}
                            />
                            { hideActionButton ? '' : 
                                <InputGroup.Addon
                                    // onClick={()=>{plusDisabled?'':this.handleBtnClick('up')}}
                                    className={(plusDisabled && 'disabled' ) + disabledCursor}
                                    onMouseDown={ this.handlePlusMouseDown}
                                    onMouseLeave={ this.clear }
                                    onMouseUp={ this.clear }>
                                    +
                                </InputGroup.Addon>
                            }
                        </InputGroup>
                    ) : (
                        <InputGroup
                            className={classnames(className, classes,disabledCon)}
                            simple
                        > 
                            {
                                this.isIE()&&(!value)?<div onClick={this.placeholderClick} style={{'display':this.state.placeholderShow?'block':'none'}} className={`${clsPrefix}-placeholder`}>{this.props.placeholder}</div>:''
                            }
                            <FormControl 
                                {...others}
                                value={toThousands?showValue:value}
                                disabled={disabled}
                                onBlur={ this.handleBlur }
                                onFocus={this.handleFocus}
                                onChange={ this.handleChange }
                                ref={ref=>this.input = ref}
                            />
                            { hideActionButton ? '' : 
                            <InputGroup.Button>
                                <div className={classnames("icon-group")}>
                                <span
                                    // onClick={()=>{plusDisabled?'':this.handleBtnClick('up')}}
                                    onMouseDown={ this.handlePlusMouseDown}
                                    onMouseLeave={ this.clear }
                                    onMouseUp={ this.clear }
                                    className={classnames('plus',{'disabled': plusDisabled,'disabled-cursor':disabledCursor})}>
                                    <span className="uf uf-arrow-up"/>
                                </span>
                                    <span
                                        // onClick={()=> minusDisabled?'':this.handleBtnClick('down')}
                                        onMouseDown={ this.handleReduceMouseDown}
                                        onMouseLeave={ this.clear }
                                        onMouseUp={ this.clear }
                                        className={classnames("reduce",{'disabled': minusDisabled,'disabled-cursor':disabledCursor})}>
                                        <span className=" uf uf-arrow-down"/>
                                </span>
                                </div>
                            </InputGroup.Button>
                            }
                        </InputGroup>
                    )
                }
            </div>
        );
    }
}
;

InputNumber.defaultProps = defaultProps;
InputNumber.propTypes = propTypes;
InputNumber.contextTypes = {
    beeLocale: PropTypes.object
};
export default InputNumber;
