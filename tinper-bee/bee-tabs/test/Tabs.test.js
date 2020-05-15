import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import { Tabs } from '../src/index';
import TabPanel from '../src/TabPanel';
describe('测试simple样式',function(){
	it('卡片样式应该存在',function(){
		let mTab = mount(
			<Tabs navtype="" contenttype="" defaultActiveKey="2">
					<TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
					<TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
					<TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
					<TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
			</Tabs>
		);
		expect(mTab.find('div').at(1).hasClass('simple-tabs-nav')).to.equal(true)
	})
})
describe('测试slide样式',function(){
	it('slide样式应该存在',function(){
		let mTab = mount(
			<Tabs navtype="slide" contenttype="" defaultActiveKey="2">
					<TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
					<TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
					<TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
					<TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
			</Tabs>
		);
		expect(mTab.find('div').at(1).hasClass('slide-tabs-nav')).to.equal(true)
	})
})
describe('测试turn样式',function(){
	it('turn样式应该存在',function(){
		let mTab = mount(
			<Tabs navtype="turn" contenttype="" defaultActiveKey="2">
					<TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
					<TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
					<TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
					<TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
			</Tabs>
		);
		expect(mTab.find('div').at(1).hasClass('turn-tabs-nav')).to.equal(true)
	})
})
describe('测试fill样式',function(){
	it('fill样式应该存在',function(){
		let mTab = mount(
			<Tabs navtype="fill" contenttype="" defaultActiveKey="2">
					<TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
					<TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
					<TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
					<TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
			</Tabs>
		);
		expect(mTab.find('div').at(1).hasClass('fill-tabs-nav')).to.equal(true)
	})
})
describe('测试fade样式',function(){
	it('fade样式应该存在',function(){
		let mTab = mount(
			<Tabs navtype="" contenttype="fade" defaultActiveKey="2">
					<TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
					<TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
					<TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
					<TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
			</Tabs>
		);
		expect(mTab.find('div').at(1).hasClass('fade-tabs-content')).to.equal(true)
	})
})
describe('测试moveleft样式',function(){
	it('moveleft样式应该存在',function(){
		let mTab = mount(
			<Tabs navtype="" contenttype="moveleft" defaultActiveKey="2">
					<TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
					<TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
					<TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
					<TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
			</Tabs>
		);
		expect(mTab.find('div').at(1).hasClass('moveleft-tabs-content')).to.equal(true)
	})
})

