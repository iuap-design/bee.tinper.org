import Tabs from '../src/index';
import TabPanel from '../src/TabPanel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Demo extends Component {
	render(){
		return(
			<div>
				<Tabs navtype="slide" contenttype="" defaultActiveKey="2">
					<TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
					<TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
					<TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
					<TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
					<TabPanel tab="Tab 5" key="5">测试测试 5</TabPanel>
					<TabPanel tab="Tab 6" key="6">测试测试 6</TabPanel>
					<TabPanel tab="Tab 7" key="7">测试测试 7</TabPanel>
				</Tabs>
			</div> 	
		)
	}
}
export default Demo;