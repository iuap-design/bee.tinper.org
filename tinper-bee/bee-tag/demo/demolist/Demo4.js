/**
*
* @title 可删除标签
* @description 用户可以手动删除的标签
*
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tag from '../../src';

class Demo4 extends React.Component {
    state = {
      tags: ['员工编号', '员工姓名', '员工性别','所属部门']
    };
  
    handleClose = (removedTag) => {
      const tags = this.state.tags.filter(tag => tag !== removedTag);
      this.setState({ tags });
    }
  
    forMap = (tag) => {
      const tagElem = (
        <Tag visible={true} deleted 
          onClose={(e) => {
            e.preventDefault();
            this.handleClose(tag);
          }}
        >
          {tag}
        </Tag>
      );
      return (
        <span key={tag}>
          {tagElem}
        </span>
      );
    }
    
    inputOnBlur = ()=> {
      let ary = this.state.tags;
      let value = ReactDOM.findDOMNode(this.refs.addTag).value;
      if(value!=''){
        ary.push(value);
      }
      ary=[...new Set(ary)];
      this.setState({
        tags: ary
      })
    }
    
    render() {
      const { tags } = this.state;
      const tagChild = tags.map(this.forMap);
      
      return (
         <div className="demoPadding">
            <div>
              {tagChild}
            </div>
            <div className="divider"></div>
            <div>
             <input maxlength="8" type="input"  ref="addTag" onBlur={this.inputOnBlur } 
                style={{width:83,height:20}} placeholder="添加标签"/>
            </div>
         </div>
      );
    }
  }
export default Demo4;