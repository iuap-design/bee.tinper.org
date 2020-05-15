# 使用注意

## 组件引入问题

由于一些历史原因，我们的示例上，组件的引入方式描述不正确，统一使用如下方式：

```
import { Button } from 'tinper-bee'；

```

另外，有几个组件因为使用的第三方的包比较大，所以我们没有将它们打包进`tinper-bee.js`。

这些组件是`Datepicker`日期选择组件、`Timepicker`时间选择组件、`Dnd`拖拽组件、`Calendar`日历组件。

这些组件使用如下方式引入，不需要单独引入样式。

```
import Datepicker from 'tinper-bee/lib/Datepicker';

import Timepicker from 'tinper-bee/lib/Timepicker';

import Dnd from 'tinper-bee/lib/Dnd';

import Calendar from 'tinper-bee/lib/Calendar';

import Carousel from 'tinper-bee/lib/Carousel';

```

## 样式引入问题

为了方便用户单独处理样式和js文件，所以我们对js和css进行了单独的打包。

所以当你使用组件库时，需要单独引入js和样式文件。

- 直接`import`引入：

js

```
import { Button } from 'tinper-bee';
```

在入口处，引入样式：

```
import 'tinper-bee/assets/tinper-bee.css';
```

- CDN引入：

js

```
<script src="//design.yonyoucloud.com/static/tinper-bee/[版本号]/build/tinper-bee.js"></script>
```

并且，在你的webpack处，配置

```
...
externals: {
   'tinper-bee': 'TinperBee'
}
...
```


css

```
<link href="//design.yonyoucloud.com/static/tinper-bee/[版本号]/assets/tinper-bee.css">
```

## 按需加载

当你的项目只用到了部分组件，你想要更小的打包体积的时候，我们提供了按需加载的能力。

- 下载babel插件

```
npm install -D babel-plugin-import-bee
```

- 配置`.babelrc`

```
{
  "presets": ["es2015", "stage-0", "react"],
  "plugins": [["import-bee"] ]
}


```
如果你需要自动帮助你引用组件的样式，就设置`style: true`，如果不需要，就不需要设置这个属性。

```
{
  "presets": ["es2015", "stage-0", "react"],
  "plugins": [["import-bee", { "style": true}] ]
}


```