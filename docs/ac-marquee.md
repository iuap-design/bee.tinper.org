## ac-marquee

>  文字列表可以无限滚动的React组件

```
$ ynpm install @yonyou/ac-marquee --save-dev

引入

import Marquee from '@yonyou/ac-marquee';

样式引入

import '@yonyou/ac-marquee/build/ac-marquee.css';
```
 
 

## API

|参数|说明|类型|返回值|
|:--|:---:|:--:|---:|
| data | Object[] |  | 需要展示的数据， Data structure: `['1.item1','2.item2'...]` |
| height | String | 100px | 容器的高度 |
| width | String | 200px | 容器的宽度 |
| gap | Number | 0 | 距离容器顶部的距离 |
| speed | Number | 50 | 滚动的速度, `0 < speed <= 1000` |

       

#### 开发调试

```sh
$ cd @yonyou/ac-marquee
$ npm install
$ npm run dev
```

