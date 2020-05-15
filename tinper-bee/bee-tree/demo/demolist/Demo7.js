/**
 *
 * @title Tree增加节点
 * @description 增加节点和拖拽组合使用示例
 *
 */


import React, {
  Component
} from 'react';
import Tree from '../../src';
import Button from 'bee-button';

const TreeNode = Tree.TreeNode;


class Demo7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [],
      defaultExpandedKeys: ['0-0', '0-1', '0-2'],
      parentNode: {}
    };
    this.onSelect = this.onSelect.bind(this);
    this.addNode = this.addNode.bind(this);
    this.clickFun = this.clickFun.bind(this);
    this.getNodeByKey = this.getNodeByKey.bind(this);
    this.parentNode = null
  }
  componentDidMount() {
      setTimeout(() => {
        this.setState({
          treeData: [{
            name: 'pNode 01',
            key: '0-0',
            children: [{
              name: 'leaf 0-0-0',
              key: '0-0-0'
            }, {
              name: 'leaf 0-0-1',
              key: '0-0-1'
            }]
          }, {
            name: 'pNode 02',
            key: '0-1',
            children: [{
              name: 'leaf 0-1-0',
              key: '0-1-0'
            }, {
              name: 'leaf 0-1-1',
              key: '0-1-1'
            }]
          }, {
            name: 'pNode 03',
            key: '0-2',
            isLeaf: true
          }, ],
        });
      }, 100);
    }
    /**
     * 增加节点
     * @param string prKey    [父节点key]
     * @param object nodeItem [子节点信息]
     */
  addNode(prKey, nodeItem) {
    const data = this.state.treeData;
    let parNode;
    if (prKey) {
      // 如果prKey存在则搜索父节点进行添加
      parNode = this.getNodeByKey(data, prKey);
      //如果父节点存在的话，添加到父节点上
      if (parNode) {
        if (!parNode.children) {
          parNode.children = [];
        }
        // 如果key不存在就动态生成一个
        if (!nodeItem.key) {
          nodeItem.key = prKey + parNode.children.length + 1;
        }
        parNode.children.push(nodeItem);
      }
    } else {
      // 没有穿prKey添加到根下成为一级节点
      if (!nodeItem.key) {
        nodeItem.key = "0-" + data.length + 1;
      }
      data.push(nodeItem);
    }

    this.setState({
      data
    });
  }

  getNodeByKey(data, key) {
    if (!this.parentNode) {
      data.find(item => {
        if (item.key === key) {
          console.log('item.name---' + item.name)
          this.parentNode = item;
          return (true);
        } else if (item.children) {
          return this.getNodeByKey(item.children, key);

        }
      })
    }
    return this.parentNode;
  }



  onSelect(info) {
      console.log('selected', info);
    }
    /**
     * 点击button事件
     */
  clickFun() {
    let prKey, nodeItem;
    prKey = '0-1';
    nodeItem = {
      name: 'leaf 0-0-4'
    }
    this.addNode(prKey, nodeItem);
  }

  onDragEnter = (info) => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  }
  onDrop = (info) => {
    console.log(info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    // const dragNodesKeys = info.dragNodesKeys;
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.treeData];
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (info.dropToGap) {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      ar.splice(i, 0, dragObj);
    } else {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    }
    this.setState({
      treeData: data,
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
    console.log('defaultKeys--' + this.state.defaultExpandedKeys);
    return (
      <div>
        <Button colors="primary" onClick={this.clickFun}>增加节点</Button>
        <Tree 
        className="myCls"
        onSelect={this.onSelect} 
        defaultExpandedKeys={this.state.defaultExpandedKeys} 
        draggable
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}>
          {treeNodes}
        </Tree>
      </div>
    );
  }
};

export default Demo7