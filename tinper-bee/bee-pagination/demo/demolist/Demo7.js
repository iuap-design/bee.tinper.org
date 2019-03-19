/**
 * @title 显示按钮边框的Pagination
 * @description 通过noBorder参数设置是否显示按钮边框。
 */

import React, { Component } from 'react';
import Pagination from '../../src';

class Demo1 extends React.Component {
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
            <div>
                <Pagination
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
                    noBorder={false}
                    total={100}
                    dataNum={2}
                />

            </div>
        );
    }
}

export default Demo1;