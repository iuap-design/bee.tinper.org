/**
*
* @title 可删除标签
* @description 用户可以手动删除的标签。
*
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tag from '../../src';
import FormControl from 'bee-form-control';

class Demo4 extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        tags: ['员工编号', '员工姓名', '员工性别','所属部门']
      };
    }
  
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

    addTag=()=>{
      let value = ReactDOM.findDOMNode(this.refs.addTag).value;
      if(!value) return;
      let tags = this.state.tags;
      if(tags.indexOf(value)==-1){
        tags.push(value);
        this.setState({
          tags
        })
        ReactDOM.findDOMNode(this.refs.addTag).value='';
      }else{
        console.log('此tag已经存在')
      }
    }
    blur=()=>{
      this.addTag()
    }
    keyDown=(e)=>{
      if(e.keyCode==13){
        this.addTag()
      }
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
             <FormControl  maxlength="8"  ref="addTag"  onKeyDown={this.keyDown}
             onBlur={this.blur}
                style={{width:83,height:20}} placeholder="添加标签"/>
            </div>
         </div>
      );
    }
  }
export default Demo4;