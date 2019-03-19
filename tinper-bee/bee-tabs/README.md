# bee-tabs
[![npm version](https://img.shields.io/npm/v/bee-tabs.svg)](https://www.npmjs.com/package/bee-tabs)
[![Build Status](https://travis-ci.org/tinper-bee/bee-tabs.svg?branch=master)](https://travis-ci.org/tinper-bee/bee-tabs)[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-tabs.svg)](https://david-dm.org/tinper-bee/bee-tabs#info=devDependencies)


react bee-tabs component for tinper-bee


## 使用方法

```js
<Tabs navtype="turn" contenttype="moveleft" defaultActiveKey="2">
	<TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
	<TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
	<TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
	<TabPanel tab="Tab 4" key="4">Content of Tab Pane 4</TabPanel>
</Tabs>
```



## API

### Tabs

#### props:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>activeKey</td>
          <td>String</td>
          <th></th>
          <td>current active tabPanel's key</td>
      </tr>
      <tr>
          <td>tabBarPosition</td>
          <td>String</td>
          <th></th>
          <td>tab nav 's position. one of ['left','right','top','bottom']</td>
      </tr>
      <tr>
          <td>defaultActiveKey</td>
          <td>String</td>
          <th>first active tabPanel's key</th>
          <td>initial active tabPanel's key if activeKey is absent</td>
      </tr>
      <tr>
         <td>renderTabBar</td>
         <td>():React.Node</td>
         <th></th>
         <td>How to render tab bar</td>
      </tr>
      <tr>
        <td>renderTabContent</td>
        <td>():React.Node</td>
        <th></th>
        <td>How to render tab content</td>
      </tr>
      <tr>
          <td>onChange</td>
          <td>(key: string): void</td>
          <th></th>
          <td>called when tabPanel is changed</td>
      </tr>
      <tr>
          <td>destroyInactiveTabPane</td>
          <td>Boolean</td>
          <th>false</th>
          <td>whether destroy inactive tabpane when change tab</td>
      </tr>
      <tr>
          <td>prefixCls</td>
          <td>String</td>
          <th>rc-tabs</th>
          <td>prefix class name, use to custom style</td>
      </tr>
    </tbody>
</table>

### TabPane

#### props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>key</td>
          <td>Object</td>
          <th></th>
          <td>corresponding to activeKey</td>
      </tr>
      <tr>
          <td>style</td>
          <td>Object</td>
          <th></th>
          <td></td>
      </tr>
      <tr>
         <td>placeholder</td>
         <td>React.Node</td>
         <th></th>
         <td>lazyrender children</td>
      </tr>
      <tr>
          <td>tab</td>
          <td>React.Node</td>
          <th></th>
          <td>current tab's title corresponding to current tabPane</td>
      </tr>
    </tbody>
</table>

### src/TabBar

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>onTabClick</td>
          <td>(key: string): void</td>
          <th></th>
          <td>callback when tab clicked</td>
      </tr>
      <tr>
          <td>style</td>
          <td></td>
          <th></th>
          <td>bar style</td>
      </tr>
      <tr>
        <td>extraContent</td>
        <td>React Node</td>
        <th></th>
        <td>extra content placed one the right of tab bar</td>
      </tr>
    </tbody>
</table>

### src/InkTabBar

tab bar with ink indicator, in addition to tab bar props, extra props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>styles</td>
          <td>{ inkBar }</td>
          <th></th>
          <td>can set inkBar style</td>
      </tr>
    </tbody>
</table>

### src/ScrollableTabBar

scrollable tab bar, in addition to tab bar props, extra props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>onPrevClick</td>
          <td>(e: Event): void</td>
          <th></th>
          <td>callback when prev button is clicked</td>
      </tr>
      <tr>
          <td>onNextClick</td>
          <td>(e: Event): void</td>
          <th></th>
          <td>callback when next button is clicked</td>
      </tr>
    </tbody>
</table>

### src/ScrollableInkTabBar

scrollable tab bar with ink indicator, same with tab bar and ink bar and scrollable bar props.

### src/SwipeableInkTabBar (Use for Mobile)

swipeable tab bar with ink indicator, same with tab bar/ink bar props, and below is the additional props.

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>pageSize</td>
          <td>number</td>
          <th>5</th>
          <td>show how many tabs at one page</td>
      </tr>
      <tr>
          <td>speed</td>
          <td>number</td>
          <th>5</th>
          <td>swipe speed, 1 to 10, more bigger more faster</td>
      </tr>
      <tr>
          <td>hammerOptions</td>
          <td>Object</td>
          <td></td>
          <td>options for react-hammerjs</td>
      </tr>
    </tbody>
</table>

### src/TabContent

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>style</td>
          <td>Object</td>
          <td></td>
          <td>tab content style</td>
      </tr>
      <tr>
          <td>animated</td>
          <td>Boolean</td>
          <td>true</td>
          <td>whether tabpane change with animation</td>
      </tr>
      <tr>
          <td>animatedWithMargin</td>
          <td>Boolean</td>
          <td>false</td>
          <td>whether animate tabpane with css margin</td>
      </tr>
      <tr>
          <td>forceRender</td>
          <td>Boolean</td>
          <td>false</td>
          <td>forced render of content in tabs,  not lazy render after clicking on tabs</td>
      </tr>
    </tbody>
</table>

### src/SwipeableTabContent

swipeable tab panes, in addition to lib/TabContent props, extra props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>hammerOptions</td>
          <td>Object</td>
          <td></td>
          <td>options for react-hammerjs</td>
      </tr>
    </tbody>
</table>


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-tabs
$ cd bee-tabs
$ npm install
$ npm run dev
```

## TODOS

- [x] [css样式层级问题]
- [x] [动态计算样式]
- [x] [autoprefix] 产出工具集成
- [x] [测试用例]
