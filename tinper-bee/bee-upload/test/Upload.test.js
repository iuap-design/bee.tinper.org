import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Button from 'bee-button';
import React, { Component } from 'react';
import Upload from '../src';
import ReactDOM from 'react-dom';
import Icon from 'bee-icon';

describe('Upload test', function () {
	let state;
	const props = {
	  name: 'file',
	  action: '/upload.do',
	  headers: {
	    authorization: 'authorization-text',
	  },
	  listType: 'picture',
	  defaultFileList: [{
	    uid: -1,
	    name: 'xxx.png',
	    status: 'done',
	    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    	thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	  }, {
	    uid: -2,
	    name: 'yyy.png',
	    status: 'done',
	    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    	thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	  }],
	  onChange(info) {
	    if (info.file.status !== 'uploading') {
	    	state = 'uploading';
	        console.log(info.file, info.fileList);
	    }
	    if (info.file.status === 'done') {
	    	state = 'done';
	      	console.log(`${info.file.name} file uploaded successfully`);
	    } else if (info.file.status === 'error') {
	    	state = 'error';
	      	console.log(`${info.file.name} file upload failed.`);
	    }
	  },
	};

	class Demo1 extends Component {
		render(){
			return( 
				<Upload {...props}>
			        <Button type="primary" shape="border">
			          <Icon type="upload" /> Click to Upload
			        </Button>
			    </Upload>
			)
		}
	}
    it('upload render successfully', function () {
  		let upload = mount(<Demo1 />);
        expect(upload.find('.u-upload-select').length).to.equal(1);
    });
    it('upload default list', function () {
  		let upload = mount(<Demo1 />);
  		let uploadList = upload.find('.u-upload-list-item-done');
  		expect(uploadList.length).to.equal(2);
    });
    it('upload list type should be picture', function () {
  		let upload = mount(<Demo1 />);
  		let uploadList = upload.find('.u-upload-list-item-thumbnail');
  		expect(uploadList.length).to.equal(2);
    });

});