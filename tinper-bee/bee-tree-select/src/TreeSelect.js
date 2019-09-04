/**
* This source code is quoted from rc-tree-select.
* homepage: https://github.com/react-component/tree-select
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RcTreeSelect,{TreeNode,SHOW_ALL, SHOW_PARENT, SHOW_CHILD} from 'rc-tree-select';
import Icon from 'bee-icon';
import classNames from 'classnames';
import warning from 'warning';
import omit from 'omit.js';

const defaultProps =   {
    prefixCls: 'u-select',
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    showSearch: false,
    notFoundContent:"无匹配结果"
};
const propTypes = {
    getPopupContainer: PropTypes.func,
};

class TreeSelect extends Component {
    static TreeNode = TreeNode;
    static SHOW_ALL = SHOW_ALL;
    static SHOW_PARENT = SHOW_PARENT;
    static SHOW_CHILD = SHOW_CHILD;

    constructor(props) {
        super(props);

        warning(
          props.multiple !== false || !props.treeCheckable,
          'TreeSelect',
          '`multiple` will alway be `true` when `treeCheckable` is true',
        );
    }
    focus() {
        this.rcTreeSelect.focus();
    }

    blur() {
        this.rcTreeSelect.blur();
    }

    saveTreeSelect = (node) => {
        this.rcTreeSelect = node;
    };

    renderSwitcherIcon = (prefixCls, { isLeaf, loading }) => {
        if (loading) {
          return <Icon type="loading" className={`${prefixCls}-switcher-loading-icon`} />;
        }
        if (isLeaf) {
          return null;
        }
        return <Icon type="uf-triangle-down" className={`${prefixCls}-switcher-icon`} />;
    };

    render(){
        const {
            prefixCls,
            className,
            size,
            notFoundContent,
            dropdownStyle,
            dropdownClassName,
            suffixIcon,
            getPopupContainer,
            ...restProps,
        } = this.props;
        const rest = omit(restProps, ['inputIcon', 'removeIcon', 'clearIcon', 'switcherIcon']);

        const cls = classNames(
            {
                [`${prefixCls}-lg`]: size === 'large',
                [`${prefixCls}-sm`]: size === 'small',
            },
            className,
        );

        // showSearch: single - false, multiple - true
        let { showSearch } = restProps;
        if (!('showSearch' in restProps)) {
            showSearch = !!(restProps.multiple || restProps.treeCheckable);
        }

        let checkable = rest.treeCheckable;
        if (checkable) {
            checkable = <span className={`${prefixCls}-tree-checkbox-inner`} />;
        }

        const inputIcon = (suffixIcon &&
        (React.isValidElement(suffixIcon)
            ? React.cloneElement(suffixIcon)
            : suffixIcon)) || <Icon type="uf-treearrow-down" className={`${prefixCls}-arrow-icon`} />;

        const removeIcon = <Icon type="uf-close" className={`${prefixCls}-remove-icon`} />;

        const clearIcon = (
            <Icon type="uf-close-c" className={`${prefixCls}-clear-icon`} />
        );

        return (
            <RcTreeSelect
                // switcherIcon={(nodeProps) =>
                //     this.renderSwitcherIcon(prefixCls, nodeProps)
                // }
                inputIcon={inputIcon}
                removeIcon={removeIcon}
                clearIcon={clearIcon}
                {...restProps}
                showSearch={showSearch}
                getPopupContainer={getPopupContainer}
                dropdownClassName={classNames(dropdownClassName, `${prefixCls}-dropdown`)}
                prefixCls={prefixCls}
                className={cls}
                dropdownStyle={{ maxHeight: '100vh', overflow: 'auto', ...dropdownStyle }}
                notFoundContent={notFoundContent}
                treeCheckable={checkable}
                ref={this.saveTreeSelect}
                searchPlaceholder="请搜索"
            />
        )
    }

};
TreeSelect.propTypes = propTypes;
TreeSelect.defaultProps = defaultProps;
export default TreeSelect;
