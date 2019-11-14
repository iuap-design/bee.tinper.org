import React from 'react';
import classnames from 'classnames';
import FormControl from 'bee-form-control';
import PropTypes from 'prop-types';

const propTypes = {
    value: PropTypes.any,
    show: PropTypes.bool,
    options: PropTypes.array,
    onChange: PropTypes.func,
    onSelectOption: PropTypes.func,
};
const defaultProps = {
    value: "",
    show: false,
    options: [],
    clsPrefix: 'u-autocomplete',
    onBlur: () => {},
    onKeyDown: () => {},
    onValueChange: () => {},
    onChange: () => {},
    onSelectOption: () => {}
};

class AutoComplete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: props.show, //控制自动匹配列表的显示与隐藏
            displayValue: '',
            activeItemIndex: -1,
            options: props.options,
            value: props.value,
            placeholder: props.placeholder
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleChangeList = this.handleChangeList.bind(this);
        this.moveItem = this.moveItem.bind(this);
        this.handLeBlur = this.handLeBlur.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps && nextProps.value !== this.props.value) {
            let value = nextProps.value;
            this.setState({
                value: value
            })
        }
        if ('options' in nextProps && nextProps.options !== this.props.options) {
            let options = nextProps.options;
            this.setState({
                options: options
            })
        }
        if ('show' in nextProps && nextProps.show !== this.props.show) {
            let show = nextProps.show;
            this.setState({
                show: show
            })
        }
    }

    handleChange(value) {
        let arr = [];
        let valueArr = this.props.options;
        valueArr.sort();
        if (value.replace(/(^\s*)|(\s*$)/g, '') == "") {
            this.setState({
                value: "",
                activeItemIndex: -1,
                show: false
            })
            this.props.onValueChange(value);
            this.props.onChange(value);
            return;
        }

        for (var i = 0; i < valueArr.length; i++) {
            if (valueArr[i].indexOf(value) != -1) {
                arr.push(valueArr[i]);
            }
        }
        this.setState({
            options: arr,
            show: true,
            activeItemIndex: -1,
            displayValue: '',
            value: value
        })
        this.props.onValueChange(value);
        this.props.onChange(value);
    }

    /**
     * 自动匹配的列表被选中其中某一个
     * @param {*} value
     */
    handleChangeList(value) {
        this.setState({
            show: false,
            displayValue: ''
        })
        this.props.onValueChange(value);
        this.props.onChange(value);
        this.props.onSelectOption(value);
    }

    handleKeyDown(e) {
        const {displayValue, activeItemIndex} = this.state;
        const {options, onValueChange, onKeyDown, onChange} = this.props;
        onKeyDown(e);
        switch (e.keyCode) {
            // 13为回车键的键码（keyCode）
            case 13: {
                this.setState({
                    show: false
                });
                onValueChange(displayValue, activeItemIndex);
                onChange(displayValue, activeItemIndex);
                break;
            }
            // 38为上方向键，40为下方向键
            case 38:
            case 40: {
                e.preventDefault();
                // 使用moveItem方法对更新或取消选中项
                this.moveItem(e.keyCode === 38 ? 'up' : 'down');
                break;
            }
        }
    }

    moveItem(direction) {
        const {activeItemIndex, options} = this.state;
        const lastIndex = options.length - 1;
        let newIndex = -1;

        // 计算新的activeItemIndex
        if (direction === 'up') {
            if (activeItemIndex === -1) {
                // 如果没有选中项则选择最后一项
                newIndex = lastIndex;
            } else {
                newIndex = activeItemIndex - 1;
            }
        } else {
            if (activeItemIndex < lastIndex) {
                newIndex = activeItemIndex + 1;
            }
        }

        // 获取新的displayValue
        let newDisplayValue = '';
        if (newIndex >= 0) {
            newDisplayValue = options[newIndex];
        }

        // 更新状态
        this.setState({
            displayValue: newDisplayValue,
            activeItemIndex: newIndex
        });
    }

    handleEnter(index) {
        const currentItem = this.props.options[index];
        this.setState({activeItemIndex: index, displayValue: currentItem});
    }

    handleLeave() {
        this.setState({activeItemIndex: -1, displayValue: ''});
    }

    handLeBlur() {
        this.props.onBlur(this.state.value)
        setTimeout(() => {
            this.setState({
                show: false
            });
        }, 300)
    }

    render() {
        const {show, displayValue, activeItemIndex, options} = this.state;
        const {disabled, clsPrefix, onKeyDown, onBlur, onValueChange, onChange, value, placeholder,...props} = this.props;
        let optionList = options.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={index === activeItemIndex ? "active" : ''}
                                    onMouseEnter={() => this.handleEnter(index)}
                                    onClick={() => this.handleChangeList(item)}
                                >
                                    {item.text || item}
                                </li>
                            );
                        })
        return (
            <div className={classnames(clsPrefix, this.props.className)} >
                <FormControl
                    {
                        ...props
                    }
                    value={displayValue || this.state.value}
                    disabled={disabled}
                    onChange={(value) => {
                        this.handleChange(value)
                    }}
                    onKeyDown={this.handleKeyDown}
                    placeholder={this.state.placeholder}
                    onBlur={this.handLeBlur}
                />
                {show && options.length > 0 && (
                    <ul className={`${clsPrefix}-options`} onMouseLeave={this.handleLeave}>
                        { optionList }
                    </ul>
                )}
            </div>
        );
    }
}


AutoComplete.propTypes = propTypes;
AutoComplete.defaultProps = defaultProps;
export default AutoComplete;