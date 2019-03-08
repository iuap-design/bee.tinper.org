/**
 *
 * @title 页签Tab
 * @description 通过扩展TabPane和ScrollableInkTabBar的方式，可以完成模拟页签的效果
 *
 */

import React, {Component} from 'react';
import Tabs from '../../src';
import Icon from 'bee-icon';

const {TabPane} = Tabs;

let index = 1;
const content = `问世间、情为何物，只教生死相许？天南地北双飞客，老翅几回寒暑。欢乐趣，离别苦，
就中更有痴儿女。君应有语，渺万里层云，千山暮雪，只影向谁去？横汾路，寂寞当年箫鼓，荒烟依旧平楚。招魂楚些何嗟及，
山鬼暗谛风雨。天也妒，未信与，莺几燕子俱黄土。千秋万古，为留待骚人，狂歌痛饮，来访雁丘处。`;

class Demo3 extends Component {
    state = {
        tabs: [{
            title: '摸鱼儿',
            content: content
        }],
        activeKey: '摸鱼儿',
    };

    onTabChange = (activeKey) => {
        this.setState({
            activeKey,
        });
    }

    construct() {
        const disabled = true;
        return this.state.tabs.map((t) => {
            return (
                <TabPane
                tab={<span>{t.title}
                    <Icon
                        type="uf-close-c"
                        className="close-icon"
                        onClick={this.remove.bind(this, t.title)}
                    />
                </span>}
                key={t.title}
            >
                <div style={{padding: 100}}>
                    {t.content}
                </div>
            </TabPane>);
        }).concat([
            <TabPane
                tab={<a style={{color: 'black', cursor: 'pointer'}} onClick={this.add}> + 添加</a>}
                disabled={disabled}
                key={'__add'}
            />,
        ]);
    }

    // 删除
    remove = (title, e) => {
        e.stopPropagation();
        if (this.state.tabs.length === 1) {
            alert('只剩一个，不能删');
            return;
        }
        let foundIndex = 0;
        const after = this.state.tabs.filter((t, i) => {
            if (t.title !== title) {
                return true;
            }
            foundIndex = i;
            return false;
        });
        let activeKey = this.state.activeKey;
        if (activeKey === title) {
            if (foundIndex) {
                foundIndex--;
            }
            activeKey = after[foundIndex].title;
        }
        this.setState({
            tabs: after,
            activeKey,
        });
    }

    clear = () => {
        let { tabs } = this.state;
        this.setState({
            tabs:  [tabs.shift()],
            activeKey: '摸鱼儿',
        })
    }

    // 增加
    add = (e) => {
        e.stopPropagation();
        index++;
        const newTab = {
            title: `名称: ${index}`,
            content: `内容: ${content}`,
        };
        this.setState({
            tabs: this.state.tabs.concat(newTab),
            activeKey: `名称: ${index}`,
        });
    }

    render() {

        return (
            <div style={{margin: 20}}>

                <Tabs
                    activeKey={this.state.activeKey}
                    onChange={this.onTabChange}
                    tabBarStyle="primary"
                    defaultActiveKey="摸鱼儿"
                    extraContent={
                        <Icon
                            type="uf-del"
                            className="clear-icon"
                            onClick={this.clear}
                            title="清空"
                        />
                    }
                >
                    {this.construct()}
                </Tabs>
            </div>
        );
    }
}


export default Demo3;