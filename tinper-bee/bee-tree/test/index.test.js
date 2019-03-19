import React,{ReactDOM} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
//import Tree from '../src/index';
import TestUtils from 'react-addons-test-utils';
const Simulate = TestUtils.Simulate;
import Tree from '../src/Tree';
import TreeNode from '../src/TreeNode';
//const TreeNode = Tree.TreeNode;

describe('simple tree', () => {
  let tree;
  it('should add css class of root dom node', () => {
    tree = mount(
      <Tree className="forTest">
        <TreeNode title="1"/>
      </Tree>
    );
    expect(tree.hasClass('forTest')).to.equal(true);
  });
  it('should have checkbox, default expand all treeNode, not show icon, show line', (done) => {
    tree = mount(
      <Tree selectable checkable defaultExpandAll showIcon={false} showLine multiple>
        <TreeNode title="parent 1" key="0-0" className="spe">
          <TreeNode title="leaf 1" key="0-0-0" disabled>
            <TreeNode title="leaf" key="random"/>
            <TreeNode title="leaf"/>
          </TreeNode>
          <TreeNode title="leaf 2" key="0-0-1" disableCheckbox />
        </TreeNode>
      </Tree>);

    setTimeout(() => {
      // have checkbox
      expect(tree.find('.rc-tree-checkbox').length).to.equal(5);
      // expand all treeNode
      //console.log(tree.find('.rc-tree-switcher').last().html());
      expect(tree.find('.rc-tree-switcher').length).to.equal(5)
      expect(tree.find('.rc-tree-switcher').last().hasClass('rc-tree-switcher-noop')).to.equal(true);
      // not show icon
      expect(tree.find('.rc-tree-iconEle').length).to.equal(0);
      // show line 
      expect(tree.find('.rc-tree-line').length).to.equal(1);

      done();
    }, 50);
  });
  it('should set default expandedKeys, selectedKeys and checkedKeys', () => {
    tree = mount(
      <Tree defaultExpandedKeys={['0-0']} defaultSelectedKeys={['0-0']}
        checkable defaultCheckedKeys={['0-0']}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="leaf 1" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="leaf 2" key="0-0-1" />
        </TreeNode>
      </Tree>);
    const li = tree.find('li').first();
    expect(li.find('.rc-tree-switcher').first().hasClass('rc-tree-noline_open')).to.equal(true);
    expect(li.find('.rc-tree-checkbox-checked').length).to.equal(3);
    expect(li.find('.rc-tree-node-selected').length).to.equal(1);
  });
  it('should expand specific treeNode', (done) => {
    
    function cb() {
      setTimeout(() => {
      	expect(li.find('.rc-tree-switcher').first().hasClass('rc-tree-noline_open')).to.equal(true);
        done();
      });
    }
    tree = mount(
      <Tree onExpand={cb}>
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="leaf 1" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="leaf 2" key="0-0-1" />
        </TreeNode>
      </Tree>);
    const li = tree.find('li').first();
    li.find('.rc-tree-switcher').first().simulate('click');
    //Simulate.click(li.find('.rc-tree-switcher').first());
  });
  it('should fire check event', (done) => {
    function cb(checkedKeys) {
      expect(checkedKeys.indexOf('0-0-0-1') > -1).to.equal(true);
      done();
    }
    tree = mount(
      <Tree defaultExpandAll checkable onCheck={cb}>
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="leaf 1" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="leaf 2" key="0-0-1" />
        </TreeNode>
      </Tree>
    );
    const ele = tree.find('li').at(1).find(".rc-tree-checkbox").at(0);
    ele.simulate("click");
  });
  it('should filter treeNode', () => {
    function filterTreeNode(treeNode) {
      return treeNode.props.title.indexOf('parent') > -1;
    }
    tree = mount(
      <Tree filterTreeNode={filterTreeNode}>
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="leaf 1" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="leaf 2" key="0-0-1" />
        </TreeNode>
      </Tree>
    );
    expect(tree.find('.filter-node').length).to.equal(1);
  });
});

describe('draggable tree', () => {
  let tree;
  let div;
  

  it('should fire drag and drop event', () => {
    function cb(info) {
      console.log(info);
      expect(true).to.equal(true);
    }
    tree = mount(
      <Tree
        draggable onDragStart={cb} onDragEnter={cb} onDragOver={cb} onDragLeave={cb} onDrop={cb}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="leaf 1" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="leaf 2" key="0-0-1" />
        </TreeNode>
      </Tree>
    );

      Simulate.dragStart(tree.find("li").at(1).find('a'));
      const li = tree.find("li").at(3);
      Simulate.dragEnter(li);
      Simulate.dragOver(li);
      Simulate.dragLeave(li);
      Simulate.drop(li);
  });
});