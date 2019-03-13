import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {

    colors: PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger', 'primary']),

    disabled: PropTypes.bool,

    inverse: PropTypes.bool

};

const defaultProps = {
    disabled: false,
    inverse: false,
    colors: 'primary',
    clsPrefix: 'u-checkbox',
    defaultChecked: false,
    onClick: function () {}
};
const clsPrefix = 'u-checkbox';
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: 'checked' in props ? props.checked : props.defaultChecked
        }
        this.doubleClickFlag = null;
    }

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
              checked: nextProps.checked,
            });
        }
    }

    changeState = (e) => {
        const { props } = this;
        const { checked } = this.state;
        clearTimeout(this.doubleClickFlag);
        if(props.onClick instanceof Function){
            props.onClick(e);
        }
        if(props.onDoubleClick instanceof Function){
            this.doubleClickFlag = setTimeout(() => {
                //do function在此处写单击事件要执行的代码
                this.change(props, checked)
            },300);
        }else{
            this.change(props, checked)
        }
        e.stopPropagation();
        e.preventDefault();
        //执行延时
    }

    change = (props, checked) => {
        if (props.disabled) {
            return;
        }
        if (!('checked' in props)) {
            this.setState({
                checked: !checked,
            });
        }

        if (props.onChange instanceof Function) {
            props.onChange(!checked);
        }
    }


    handledbClick = (e) => {
        const { onDoubleClick } = this.props;
        clearTimeout(this.doubleClickFlag);
        onDoubleClick && onDoubleClick(this.state.checked, e);
    }

    render() {
        const {
            disabled,
            inverse,
            colors,
            size,
            className,
            indeterminate,
            onClick,
            children,
            checked,
            clsPrefix,
            onDoubleClick,
            onChange,
            ...others
        } = this.props;


        const input = (
            <input
                {...others}
                type="checkbox"
                disabled={this.props.disabled}
            />
        );

        let classes = {
            'is-checked': this.state.checked,
            disabled
        };

        if (inverse) {
            classes[`${clsPrefix}-inverse`] = true;
        }

        if (colors) {
            classes[`${clsPrefix}-${colors}`] = true;
        }

        if (size) {
            classes[`${clsPrefix}-${size}`] = true;
        }

        if (!checked && indeterminate) {
            classes[`${clsPrefix}-indeterminate`] = true;
        }

        let classNames = classnames(clsPrefix, classes);


        return (
            <label
                className={classnames(classNames, className)}
                onDoubleClick={this.handledbClick}
                onClick={this.changeState}>
                {input}
                <label className={clsPrefix+'-label'}>{children}</label>
            </label>
        );
    }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
