import React from 'react';
import classNames from 'classnames';
import List from './list';
import Operation from './operation';
import Search from './search';
import PropTypes from 'prop-types';

function noop() {
}

const defaultProps = {
	dataSource: [],
	render: noop,
	showSearch: false,
};

const propTypes = {
    prefixCls: PropTypes.string,
    dataSource: PropTypes.array,
    render: PropTypes.func,
    targetKeys: PropTypes.array,
    onChange: PropTypes.func,
    height: PropTypes.number,
    listStyle: PropTypes.object,
    className: PropTypes.string,
    titles: PropTypes.array,
    operations: PropTypes.array,
    showSearch: PropTypes.bool,
    filterOption: PropTypes.func,
    searchPlaceholder: PropTypes.string,
    notFoundContent: PropTypes.node,
    body: PropTypes.func,
    footer: PropTypes.func,
    rowKey: PropTypes.func,
    lazy: PropTypes.object,
};

const defaultTitles = ['', ''];
class Transfer extends React.Component{

  constructor(props) {
    super(props);
    const { selectedKeys = [], targetKeys = [] } = props;
    this.state = {
      leftFilter: '',
      rightFilter: '',
      sourceSelectedKeys: selectedKeys.filter(key => targetKeys.indexOf(key) === -1),
      targetSelectedKeys: selectedKeys.filter(key => targetKeys.indexOf(key) > -1),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { sourceSelectedKeys, targetSelectedKeys } = this.state;
    if (nextProps.targetKeys !== this.props.targetKeys ||
        nextProps.dataSource !== this.props.dataSource) {
      // clear cached splited dataSource
      this.splitedDataSource = null;

      const { dataSource, targetKeys = [] } = nextProps;
      function existInDateSourcekey(key) {
        return dataSource.filter(item => item.key === key).length;
      }
      // clear key nolonger existed
      // clear checkedKeys according to targetKeys
      this.setState({
        sourceSelectedKeys: sourceSelectedKeys.filter(existInDateSourcekey)
          .filter(data => targetKeys.filter(key => key === data).length === 0),
        targetSelectedKeys: targetSelectedKeys.filter(existInDateSourcekey)
          .filter(data => targetKeys.filter(key => key === data).length > 0),
      });
    }
    if (nextProps.selectedKeys) {
      const targetKeys = nextProps.targetKeys;
      this.setState({
        sourceSelectedKeys: nextProps.selectedKeys.filter(key => targetKeys.indexOf(key) === -1),
        targetSelectedKeys: nextProps.selectedKeys.filter(key => targetKeys.indexOf(key) > -1),
      });
    }
  }
  splitDataSource() {
    if (this.splitedDataSource) {
      return this.splitedDataSource;
    }

    const { rowKey, dataSource, targetKeys = [] } = this.props;
    if (rowKey) {
      dataSource.forEach(record => {
        record.key = rowKey(record);
      });
    }

    const leftDataSource = dataSource.filter(({ key }) => targetKeys.indexOf(key) === -1);
    const rightDataSource = [];
    targetKeys.forEach((targetKey) => {
      const targetItem = dataSource.filter(record => record.key === targetKey)[0];
      if (targetItem) {
        rightDataSource.push(targetItem);
      }
    });

    this.splitedDataSource = {
      leftDataSource,
      rightDataSource,
    };

    return this.splitedDataSource;
  }

  moveTo = (direction) => {
    const { targetKeys = [], onChange } = this.props;
    const { sourceSelectedKeys, targetSelectedKeys } = this.state;
    const moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys;
    // move items to target box
    const newTargetKeys = direction === 'right'
      ? moveKeys.concat(targetKeys)
      : targetKeys.filter(targetKey => moveKeys.indexOf(targetKey) === -1);

    // empty checked keys
    const oppositeDirection = direction === 'right' ? 'left' : 'right';
    this.setState({
      [this.getSelectedKeysName(oppositeDirection)]: [],
    });
    this.handleSelectChange(oppositeDirection, []);

    if (onChange) {
      onChange(newTargetKeys, direction, moveKeys);
    }
  }

  moveToLeft = () => this.moveTo('left')
  moveToRight = () => this.moveTo('right')

  handleSelectChange(direction, holder) {
    const { sourceSelectedKeys, targetSelectedKeys } = this.state;
    const onSelectChange = this.props.onSelectChange;
    if (!onSelectChange) {
      return;
    }

    if (direction === 'left') {
      onSelectChange(holder, targetSelectedKeys);
    } else {
      onSelectChange(sourceSelectedKeys, holder);
    }
  }

  handleSelectAll = (direction, filteredDataSource, checkAll) => {
    const holder = checkAll ? [] : filteredDataSource.map(item => item.key);
    this.handleSelectChange(direction, holder);

    if (!this.props.selectedKeys) {
      this.setState({
        [this.getSelectedKeysName(direction)]: holder,
      });
    }
  }

  handleLeftSelectAll = (filteredDataSource, checkAll) => (
    this.handleSelectAll('left', filteredDataSource, checkAll)
  )
  handleRightSelectAll = (filteredDataSource, checkAll) => (
    this.handleSelectAll('right', filteredDataSource, checkAll)
  )

  handleFilter = (direction, e) => {
    this.setState({
      // add filter
      [`${direction}Filter`]: e,
    });
  }

  handleLeftFilter = (e) => this.handleFilter('left', e)
  handleRightFilter = (e) => this.handleFilter('right', e)

  handleClear = (direction) => {
    this.setState({
      [`${direction}Filter`]: '',
    });
  }

  handleLeftClear = () => this.handleClear('left')
  handleRightClear = () => this.handleClear('right')

  handleSelect = (direction, selectedItem, checked) => {
    const { sourceSelectedKeys, targetSelectedKeys } = this.state;
    const holder = direction === 'left' ? [...sourceSelectedKeys] : [...targetSelectedKeys];
    const index = holder.indexOf(selectedItem.key);
    if (index > -1) {
      holder.splice(index, 1);
    }
    if (checked) {
      holder.push(selectedItem.key);
    }
    this.handleSelectChange(direction, holder);

    if (!this.props.selectedKeys) {
      this.setState({
        [this.getSelectedKeysName(direction)]: holder,
      });
    }
  }

  handleLeftSelect = (selectedItem, checked) => this.handleSelect('left', selectedItem, checked);
  handleRightSelect = (selectedItem, checked) => this.handleSelect('right', selectedItem, checked);

  getTitles = () => {
    if (this.props.titles) {
      return this.props.titles;
    }
    if (this.context &&
      this.context.antLocale &&
      this.context.antLocale.Transfer
    ) {
      return this.context.antLocale.Transfer.titles || [];
    }
    return defaultTitles;
  }

  getSelectedKeysName(direction) {
    return direction === 'left' ? 'sourceSelectedKeys' : 'targetSelectedKeys';
  }

  render() {
    const {
      prefixCls = 'u-transfer', operations = [], showSearch, notFoundContent,
      searchPlaceholder, body, footer, listStyle, className = '',
      filterOption, render, lazy
    } = this.props;
    const { leftFilter, rightFilter, sourceSelectedKeys, targetSelectedKeys } = this.state;

    const { leftDataSource, rightDataSource } = this.splitDataSource(this.props);
    const leftActive = targetSelectedKeys.length > 0;
    const rightActive = sourceSelectedKeys.length > 0;

    const cls = classNames(className, prefixCls);

    const titles = this.getTitles();
    return (
      <div className={cls}>
        <List
          titleText={titles[0]}
          dataSource={leftDataSource}
          filter={leftFilter}
          filterOption={filterOption}
          style={listStyle}
          checkedKeys={sourceSelectedKeys}
          handleFilter={this.handleLeftFilter}
          handleClear={this.handleLeftClear}
          handleSelect={this.handleLeftSelect}
          handleSelectAll={this.handleLeftSelectAll}
          render={render}
          showSearch={showSearch}
          searchPlaceholder={searchPlaceholder}
          notFoundContent={notFoundContent}
          body={body}
          footer={footer}
          prefixCls={`${prefixCls}-list`}
          lazy={lazy}
        />
        <Operation
          rightActive={rightActive}
          rightArrowText={operations[0]}
          moveToRight={this.moveToRight}
          leftActive={leftActive}
          leftArrowText={operations[1]}
          moveToLeft={this.moveToLeft}
          className={`${prefixCls}-operation`}
        />
        <List
          titleText={titles[1]}
          dataSource={rightDataSource}
          filter={rightFilter}
          filterOption={filterOption}
          style={listStyle}
          checkedKeys={targetSelectedKeys}
          handleFilter={this.handleRightFilter}
          handleClear={this.handleRightClear}
          handleSelect={this.handleRightSelect}
          handleSelectAll={this.handleRightSelectAll}
          render={render}
          showSearch={showSearch}
          searchPlaceholder={searchPlaceholder}
          notFoundContent={notFoundContent}
          body={body}
          footer={footer}
          prefixCls={`${prefixCls}-list`}
          lazy={lazy}
        />
      </div>
    );
  }
}

Transfer.List = Transfer.List;
Transfer.Operation = Transfer.Operation;
Transfer.Search = Transfer.Search;

Transfer.propTypes = propTypes;
Transfer.defaultProps = defaultProps;

export default Transfer;
