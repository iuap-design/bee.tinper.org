import React from 'react';
import Search from './search';
import classNames from 'classnames';
import Animate from 'bee-animate';
import PureRenderMixin from './PureRenderMixin';
import assign from 'object-assign';
import { TransferItem } from './index';
import Item from './item';
import Checkbox from 'bee-checkbox';

function noop() {
}

const defaultProps = {
  dataSource: [],
  titleText: '',
  showSearch: false,
  render: noop,
}; 
function isRenderResultPlainObject(result) {
  return result && !React.isValidElement(result) &&
    Object.prototype.toString.call(result) === '[object Object]';
}

class TransferList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        mounted: true,
      });
    }, 0);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  shouldComponentUpdate(...args) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args);
  }


  matchFilter = (text,item) => {
    const { filter, filterOption} = this.props;
    if (filterOption) {
      return filterOption(filter, item);
    }
    return text.indexOf(filter) >= 0;
  }
  getCheckStatus(filteredDataSource) {
    const { checkedKeys } = this.props;
    if (checkedKeys.length === 0) {
      return 'none';
    } else if (filteredDataSource.every(item => checkedKeys.indexOf(item.key) >= 0)) {
      return 'all';
    }
    return 'part';
  }

  handleSelect = (selectedItem) => {
    const { checkedKeys } = this.props;
    const result = checkedKeys.some((key) => key === selectedItem.key);
    this.props.handleSelect(selectedItem, !result);
  }

  handleFilter = (e) => {
    this.props.handleFilter(e);
  }

  handleClear = () => {
    this.props.handleClear();
  }
  renderItem = (item) => {
    const { render = noop } = this.props;
    const renderResult = render(item);
    const isRenderResultPlain = isRenderResultPlainObject(renderResult);
    return {
      renderedText: isRenderResultPlain ? renderResult.value : renderResult,
      renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
    };
  }
  renderCheckbox({ prefixCls, filteredDataSource, checked, checkPart, disabled, checkable }) {
    const checkAll = (!checkPart) && checked;
    prefixCls = "u"
    const checkboxCls = classNames({
      [`${prefixCls}-checkbox-indeterminate`]: checkPart,
      [`${prefixCls}-checkbox-disabled`]: disabled,
    });
    return (
      <span
        className="u-checkbox-wrapper"
      >
        <Checkbox 
        onChange={() => this.props.handleSelectAll(filteredDataSource, checkAll)} 
        className={checkboxCls}
        checked={checkAll}
        />
      </span>
      
    );
  }

  render() {
    const { prefixCls, dataSource, titleText, filter, checkedKeys, lazy, filterOption,
            body = noop, footer = noop, showSearch, render = noop, style } = this.props;

    let { searchPlaceholder, notFoundContent } = this.props;

    // Custom Layout
    const footerDom = footer(assign({}, this.props));
    const bodyDom = body(assign({}, this.props));

    const listCls = classNames(prefixCls, {
      [`${prefixCls}-with-footer`]: !!footerDom,
    });

    const filteredDataSource = [];
    const totalDataSource = [];
    const showItems = dataSource.map((item) => {
      const { renderedText, renderedEl } = this.renderItem(item);
      if (filter && filter.trim() && !this.matchFilter(renderedText, item)) {
        return null;
      }

      // all show items
      totalDataSource.push(item);

      if (!item.disabled) {
        filteredDataSource.push(item);
      }
      
      const checked = checkedKeys.indexOf(item.key) >= 0;
      return (
        <Item
          key={item.key}
          item={item}
          lazy={lazy}
          render={render}
          renderedText={renderedText}
          renderedEl={renderedEl}
          filter={filter}
          filterOption={filterOption}
          checked={checked}
          prefixCls={prefixCls}
          onClick={this.handleSelect}
        />
      );
    });

    let unit = '';
    const antLocale = this.context.antLocale;
    if (antLocale && antLocale.Transfer) {
      const transferLocale = antLocale.Transfer;
      unit = dataSource.length > 1 ? transferLocale.itemsUnit : transferLocale.itemUnit;
      searchPlaceholder = searchPlaceholder || transferLocale.searchPlaceholder;
      notFoundContent = notFoundContent || transferLocale.notFoundContent;
    }

    const checkStatus = this.getCheckStatus(filteredDataSource);
    const outerPrefixCls = prefixCls.replace('-list', '');
    const search = showSearch ? (
      <div className={`${prefixCls}-body-search-wrapper`}>
        <Search
          prefixCls={`${prefixCls}-search`}
          onChange={this.handleFilter}
          handleClear={this.handleClear}
          placeholder={searchPlaceholder || 'Search'}
          value={filter}
        />
      </div>
    ) : null;

    const listBody = bodyDom || (
      <div className={showSearch ? `${prefixCls}-body ${prefixCls}-body-with-search` : `${prefixCls}-body`}>
        {search}
        <Animate
          component="ul"
          className={`${prefixCls}-content`}
          transitionName={this.state.mounted ? `${prefixCls}-content-item-highlight` : ''}
          transitionLeave={false}
        >
          {showItems}
        </Animate>
        <div className={`${prefixCls}-body-not-found`}>
          {notFoundContent || 'Not Found'}
        </div>
      </div>
    );

    const listFooter = footerDom ? (
      <div className={`${prefixCls}-footer`}>
        {footerDom}
      </div>
    ) : null;

    const renderedCheckbox = this.renderCheckbox({
      prefixCls: outerPrefixCls,
      checked: checkStatus === 'all',
      checkPart: checkStatus === 'part',
      checkable: <span className={`${outerPrefixCls}-checkbox-inner`} />,
      filteredDataSource,
      disabled: false,
    });

    return (
      <div className={listCls} style={style}>
        <div className={`${prefixCls}-header`}>
          {renderedCheckbox}
          <span className={`${prefixCls}-header-selected`}>
            <span>
              {(checkedKeys.length > 0 ? `${checkedKeys.length}/` : '') + totalDataSource.length} {unit}
            </span>
            <span className={`${prefixCls}-header-title`}>
              {titleText}
            </span>
          </span>
        </div>
        {listBody}
        {listFooter}
      </div>
    );
  }
}

TransferList.defaultProps = defaultProps;
export default TransferList;