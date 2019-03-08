/**
 *  @title 基础Tab
 *  @description 通过Tabs和TabPane配合完成Tab功能
 *
 */

import React, {Component} from 'react';
import Tabs from '../../src';

const {TabPane} = Tabs;

function callback() {

}

class Demo1 extends Component {
    render() {
        return (
            <Tabs
                defaultActiveKey="1"
                onChange={callback}
                tabBarStyle="upborder"
                className="demo1-tabs"
                style={{width:'500px'}}
            >
                <TabPane tab='望庐山瀑布' key="1">
                    <ul>
                        <li>日照香炉生紫烟，</li>
                        <li>遥看瀑布挂前川。</li>
                        <li>飞流直下三千尺，</li>
                        <li>疑是银河落九天。</li>
                    </ul>


                </TabPane>
                <TabPane tab='望庐山瀑2布' key="1-2">
                    <ul>
                        <li>日照香炉生紫烟，</li>
                        <li>遥看瀑布挂前2川。</li>
                        <li>飞流直下三千尺，</li>
                        <li>疑是银河落九2天。</li>
                    </ul>


                </TabPane>
                <TabPane tab='早发白帝城' key="2">
                    <ul>
                        <li>朝辞白帝彩云间，</li>
                        <li>千里江陵一日还。</li>
                        <li>两岸猿声啼不住，</li>
                        <li>轻舟已过万重山。</li>
                    </ul>
                </TabPane>
                <TabPane tab='菩萨蛮·平林漠漠烟如织' key="3">
                    <ul>
                        <li>平林漠漠烟如织，寒山一带伤心碧。</li>
                        <li>暝色入高楼，有人楼上愁。</li>
                        <li>玉阶空伫立，宿鸟归飞急。</li>
                        <li>何处是归程？长亭连短亭</li>
                    </ul>
                </TabPane>
                <TabPane tab='关山月' key="4">
                    <ul>
                        <li>明月出天山，苍茫云海间。</li>
                        <li>长风几万里，吹度玉门关。</li>
                        <li>汉下白登道，胡窥青海湾。</li>
                        <li>由来征战地，不见有人还。</li>
                    </ul>
                </TabPane>
            </Tabs>
        )
    }
}

export default Demo1;