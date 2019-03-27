/**
 * @title 提示类组件支持出现在可配置的container中
 * @description "container"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置定位
 */

import React, { Component } from 'react';
import Tooltip from '../../src';
import Table from "bee-table";

class Demo5 extends Component {
	constructor(props) {
		super(props);
		this.columns = [
			{
				title: "名字",
				dataIndex: "a",
				key: "a",
				width: 500,
				render: (text, record, index) => {
					return (
						<Tooltip
							overlay={text}
							container={this.container ? ReactDOM.findDOMNode(this.container).querySelector(".u-table-body") : null}
							placement="right"
						>
							<span className="source">{text}</span>
						</Tooltip>
					)
				}
			}, {
				title: "出处",
				dataIndex: "e",
				key: "e",
				width: 500,
				render: (text, record, index) => {
					return (
						<Tooltip
							overlay={text}
							container={this.container ? ReactDOM.findDOMNode(this.container).querySelector(".u-table-body") : null}
							placement="right"
						>
							<span className="source">{text}</span>
						</Tooltip>
					)
				}
			},
			{
				title: "性别",
				dataIndex: "b",
				key: "b",
				width: 500,
				render: (text, record, index) => {
					return (
						<Tooltip
							overlay={text}
							container={this.container ? ReactDOM.findDOMNode(this.container).querySelector(".u-table-body") : null}
							placement="right"
						>
							<span className="source">{text}</span>
						</Tooltip>
					)
				}
			},
			{
				title: "年龄",
				dataIndex: "c",
				key: "c",
				width: 500,
				render: (text, record, index) => {
					return (
						<Tooltip
							overlay={text}
							container={this.container ? ReactDOM.findDOMNode(this.container).querySelector(".u-table-body") : null}
							placement="right"
						>
							<span className="source">{text}</span>
						</Tooltip>
					)
				}
			},
			{
				title: "武功级别",
				dataIndex: "d",
				width: 500,
				key: "d",
				render: (text, record, index) => {
					return (
						<Tooltip
							overlay={text}
							container={this.container ? ReactDOM.findDOMNode(this.container).querySelector(".u-table-body") : null}
							placement="right"
						>
							<span className="source">{text}</span>
						</Tooltip>
					)
				}
			}
		];

		this.state = {
			data: []
		};

	}

	componentDidMount () {
		this.getData();
	}

	getData = () => {
		setTimeout(() => {
			let data = [
				{
					a: "杨过",
					b: "男",
					c: 30,
					d: '内行',
					e: "神雕侠侣",
					key: "2"
				},
				{
					a: "令狐冲",
					b: "男",
					c: 41,
					d: '大侠',
					e: "笑傲江湖",
					key: "1"
				},
				{
					a: "郭靖",
					b: "男",
					c: 25,
					d: '大侠',
					e: "射雕英雄传",
					key: "3"
				}
			];
			this.setState({
				data
			})
		}, 50);
	}

	render () {
		return (
			<div className="demo-tooltip">
				<Table
					columns={this.columns}
					data={this.state.data}
					ref={ref => this.container = ref}
				/>
			</div>
		);
	}
}

export default Demo5;