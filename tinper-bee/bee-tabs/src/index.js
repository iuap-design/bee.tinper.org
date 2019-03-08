// export default from './Tabs';
// 20181211animated，scrollAnimated（ScrollableTabBarMixin），inkBarAnimated（InkTabBarMixin）都是默认为true的
// 去掉所有的动画
import createClass from 'create-react-class';
import React from "react";
import { Tabs as TabsInner } from './Tabs';

const Tabs = createClass({
    render() {
        const disableProps = {
            animated: false,
            scrollAnimated: false, // scrollableBar的class
            inkBarAnimated: false,// inkBar的class
            useTransform3d: false,//是否使用translate3d來实现线条
        };
        return (<TabsInner  {...this.props} {...disableProps}/>)
    }
});
Tabs.TabPane = TabsInner.TabPane;
export default Tabs;

