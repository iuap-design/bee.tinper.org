/**
 * @title 不同大小的Pagination
 * @description 通过size参数控制分页的大小。
 */

import React, { Component } from 'react';
import Pagination from '../../src';
import Button from 'bee-button';

class Demo8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        }
    }
    handleSelect(eventKey) {
        console.log(eventKey);
        this.setState({
            activePage: eventKey
        });
    }

    dataNumSelect = (index, value) => {
        console.log(index, value);

    }

    render() {
        return (
            <div className="demo8">
                <Pagination
                    className="demo8-pagination"
                    first
                    last
                    prev
                    next
                    maxButtons={5}
                    boundaryLinks
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect.bind(this)}
                    onDataNumSelect={this.dataNumSelect}
                    showJump={true}
                    total={100}
                    dataNum={2}
                    size="sm"
                />
                <Pagination
                    className="demo8-pagination"
                    first
                    last
                    prev
                    next
                    maxButtons={5}
                    boundaryLinks
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect.bind(this)}
                    onDataNumSelect={this.dataNumSelect}
                    showJump={true}
                    total={100}
                    dataNum={2}
                />
                <Pagination
                    className="demo8-pagination"
                    first
                    last
                    prev
                    next
                    maxButtons={5}
                    boundaryLinks
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect.bind(this)}
                    onDataNumSelect={this.dataNumSelect}
                    showJump={true}
                    total={100}
                    dataNum={2}
                    size="lg"
                />
            </div>
        );
    }
}

export default Demo8;