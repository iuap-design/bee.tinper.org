## ac-complex-search-panel

## 代码演示

>  查询面板React组件 [进入示例](https://tinper-acs.github.io/ac-complex-search-panel/)

```
$ ynpm install @yonyou/ac-complex-search-panel --save-dev

引入

import AcComplexSearchPanel from '@yonyou/ac-complex-search-panel';

样式引入

import '@yonyou/ac-complex-search-panel/build/ac-complex-search-panel.css';

```

##效果  [进入示例](https://tinper-acs.github.io/ac-complex-search-panel/)
 

## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
| form | `bee-form`组件内的form，必须传入 | object | - |
| searchOpen | 是否默认展开更多查询条件 | string | false |
| search | 查询的回调 | function | () => {} |
| reset | 重置的回调,默认首先调用'this.props.form.resetFields()'清空所有值,无法清空的需要在回调中手动清空 | function | () => {} |
| resetName | 重置的文字 | string | 重置 |
| searchName | 查询的文字 | string | 查询 |
| btnPosition | 按钮位置 | `left`/`right`/`center` | right |
| openName | 展开的文字或者dom | string/dom | 展开 |
| closeName | 收起的文字或者dom | string/dom | 收起 |
| showIcon | 是否显示展开收起的图标 | bool | true |

       

#### 开发调试

```sh
$ cd @yonyou/ac-complex-search-panel
$ npm install
$ npm run dev
```

