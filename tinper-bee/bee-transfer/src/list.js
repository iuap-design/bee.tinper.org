import React from 'react';
import Search from './search';
import classNames from 'classnames';
import Animate from 'bee-animate';
import PureRenderMixin from './PureRenderMixin';
import assign from 'object-assign';
import { TransferItem } from './index';
import Item from './item';
import Checkbox from 'bee-checkbox';
import Icon from 'bee-icon';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { KeyCode} from 'tinper-bee-core';

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
    //filter：搜索框中的内容
    //filterOption：用户自定义的搜索过滤方法
    const { filter, filterOption} = this.props;
    if (filterOption) {
      return filterOption(filter, item);
    }
    return text.indexOf(filter) >= 0;
  }
  /**
   * 获取Checkbox状态
   * @param {*} filteredDataSource dataSource中刨去设置为disabled的部分
   */
  getCheckStatus(filteredDataSource) {
    const { checkedKeys } = this.props;
    if (checkedKeys.length === 0) {
      return 'none'; //全部未选
    } else if (filteredDataSource.every(item => checkedKeys.indexOf(item.key) >= 0)) {
      return 'all';  //全部已选
    }
    return 'part';   //部分已选
  }

  /**
   * 点击list item，选中或取消选中
   * @param selectedItem 选中的item的信息，和dataSource数据源中的item信息一致
   */
  handleSelect = (selectedItem) => {
    // checkedKeys：已勾选的Keys数组
    // result：是否已勾选，true：已勾选  false：未勾选
    const { checkedKeys } = this.props;
    const result = checkedKeys.some((key) => key === selectedItem.key);
    this.props.handleSelect(selectedItem, result);
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
    const checkAll = (!checkPart) && checked; //非半选 && 全选
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

  onKeyDown = (event,provided,snapshot,item) => {
    if (provided.dragHandleProps) {
      provided.dragHandleProps.onKeyDown(event);
    }

    if (event.defaultPrevented) {
      return;
    }

    if (snapshot.isDragging) {
      return;
    }

    if (event.keyCode !== KeyCode.ENTER) {
      return;
    }

    // 为了选择，我们使用此事件 we are using the event for selection
    event.preventDefault();

    this.performAction(event,item);
  };


  render() {
    const { prefixCls, dataSource, titleText, filter, checkedKeys, lazy, filterOption,
            body = noop, footer = noop, showSearch, render = noop, style, id, showCheckbox, draggable, droppableId } = this.props;

    let { searchPlaceholder, notFoundContent } = this.props;

    // Custom Layout
    const footerDom = footer(assign({}, this.props));
    const bodyDom = body(assign({}, this.props));

    const listCls = classNames(prefixCls, {
      [`${prefixCls}-with-footer`]: !!footerDom,
      [`${prefixCls}-draggable`]: !!draggable
    });

    const filteredDataSource = [];
    const totalDataSource = [];
    const showItems = dataSource.map((item,index) => {
      if(!item){return}
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
        <Draggable key={item.key} index={index} draggableId={`${item.key}`} isDragDisabled={draggable ? item.disabled : !draggable}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              // onClick={(event) =>this.handleDrag(event, provided, snapshot, item)}
              onKeyDown={(event) =>
                this.onKeyDown(event, provided, snapshot, item)
              }
              // className={classnames({
              //     ...getClass(this.props,snapshot.isDragging).drag
              //   })}
                style={{...provided.draggableProps.style}}>
                <Item
                  // ref={provided.innerRef} //Error: provided.innerRef has not been provided with a HTMLElement
                  // key={item.key}
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
                  showCheckbox={showCheckbox}
                />
            </div>
          )}
        </Draggable>)
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
          placeholder={searchPlaceholder}
          value={filter}
        />
      </div>
    ) : null;

    const listBody = bodyDom || (
      <div className={showSearch ? `${prefixCls}-body ${prefixCls}-body-with-search` : `${prefixCls}-body`}>
        {search}
        <Droppable droppableId={`droppable_${id}`} direction='vertical' isDropDisabled={!draggable}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} key={id} className={`${prefixCls}-content`}>
              <div style={{display:'none'}}>{provided.placeholder}</div>
              <Animate
                component="ul"
                transitionName={this.state.mounted ? `${prefixCls}-content-item-highlight` : ''}
                transitionLeave={false}
              >
                {showItems}
              </Animate>
              <div className={`${prefixCls}-delete-selected ${snapshot.isDraggingOver && droppableId === 'droppable_2'? 'show': ''}`}>
                <div className={`${prefixCls}-del-btn`}>
                  <Icon type="uf-arrow-down-2"></Icon>
                  <span>移除已选</span>
                </div>
              </div>
            </div>
          )}
        </Droppable>
        <div className={`${prefixCls}-body-not-found ${dataSource.length == 0? "show" : ""}`}>
          {notFoundContent}
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
          {showCheckbox ? renderedCheckbox : ''}
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