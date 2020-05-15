/**
*
* @title pending Timeline
* @description 当Timeline还未完成或者正在进行,将幽灵节点放到最后。通过设置 pending={true} 或者 pending={a React Element}。
*
*/
import React, { Component } from 'react';
import Timeline from '../../src';

class Demo3 extends Component {
    state = {
        seeMore : true,
        dataSource : ['Create a services site 2015-09-01','Solve initial network problems 2015-09-01','Technical testing 2015-09-01']
    }

    handleClick = () => {
        let newDataSource = this.state.dataSource.concat(['Network problems being solved 2019-03-01','Network problems being solved 2019-03-02','Network problems being solved 2019-03-03']);
        this.setState({
            seeMore: false,
            dataSource: newDataSource
        })
    }

    render () {
        let { seeMore,dataSource } = this.state;
        let timelineList = dataSource.map((item) => {
            return <Timeline.Item>{item}</Timeline.Item>
        })
        return (
            <Timeline pending={ seeMore ? <a onClick={this.handleClick}>See more</a>: false }>
                {timelineList}
            </Timeline>
        )
    }
}

export default Demo3;


