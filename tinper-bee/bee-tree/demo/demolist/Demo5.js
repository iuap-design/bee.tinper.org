/**
 *
 * @title Tree异步数据加载
 * @description 当点击展开，异步获取子节点数据
 *
 */


import React, {
  Component
} from 'react';
import Tree from '../../src';

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({
      title: key,
      key
    });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const TreeNode = Tree.TreeNode;

function generateTreeNodes(treeNode) {
  const arr = [];
  const key = treeNode.props.eventKey;
  for (let i = 0; i < 3; i++) {
    arr.push({
      name: `leaf ${key}-${i}`,
      key: `${key}-${i}`
    });
  }
  return arr;
}

function setLeaf(treeData, curKey, level) {
  const loopLeaf = (data, lev) => {
    const l = lev - 1;
    data.forEach((item) => {
      if ((item.key.length > curKey.length) ? item.key.indexOf(curKey) !== 0 :
        curKey.indexOf(item.key) !== 0) {
        return;
      }
      if (item.children) {
        loopLeaf(item.children, l);
      } else if (l < 1) {
        item.isLeaf = true;
      }
    });
  };
  loopLeaf(treeData, level + 1);
}

function getNewTreeData(treeData, curKey, child, level) {
  const loop = (data) => {
    if (level < 1 || curKey.length - 3 > level * 2) return;
    data.forEach((item) => {
      if (curKey.indexOf(item.key) === 0) {
        if (item.children) {
          loop(item.children);
        } else {
          item.children = child;
        }
      }
    });
  };
  loop(treeData);
  setLeaf(treeData, curKey, level);
}

class Demo5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [],
    };
    this.onSelect = this.onSelect.bind(this);
    this.onLoadData = this.onLoadData.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        treeData: [{
          name: 'pNode 01',
          key: '0-0'
        }, {
          name: 'pNode 02',
          key: '0-1'
        }, {
          name: 'pNode 03',
          key: '0-2',
          isLeaf: true
        }, ],
      });
    }, 100);
  }
  onSelect(info) {
    console.log('selected', info);
  }
  onLoadData(treeNode) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const treeData = [...this.state.treeData];
        getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);
        this.setState({
          treeData
        });
        resolve();
      }, 1000);
    });
  }
  render() {
    const loop = data => data.map((item) => {
      if (item.children) {
        return <TreeNode title={item.name} key={item.key}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode title={item.name} key={item.key} isLeaf={item.isLeaf} disabled={item.key === '0-0-0'} />;
    });
    const treeNodes = loop(this.state.treeData);
    return (
      <Tree className="myCls" onSelect={this.onSelect} loadData={this.onLoadData} >
        {treeNodes}
      </Tree>
    );
  }
};

export default Demo5