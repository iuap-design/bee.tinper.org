## 需要单独引入的组件

有几个组件因为使用的第三方的包比较大，所以我们没有将它们打包进tinper-bee.js，只是对他进行了转码，引入方式略有变化，包含组件如下。

Datepicker日期选择组件、Timepicker时间选择组件、Dnd拖拽组件、Calendar日历组件。


这些组件使用如下方式引入，不需要单独引入样式。
css的引入方式不变

```js

import Datepicker from 'tinper-bee/lib/Datepicker';

import Timepicker from 'tinper-bee/lib/Timepicker';

import Dnd from 'tinper-bee/lib/Dnd';

import Calendar from 'tinper-bee/lib/Calendar';

import Carousel from 'tinper-bee/lib/Carousel';

```

## 图标字体库私有化
tinper-bee 的字体文件有两种使用方式。当我们处于企业的内网环境，访问不到外网资源时，可以使用本地样式文件；如果是公有化项目，推荐使用CDN资源。     
tinper-bee 提供了四套样式文件可供选择，包括红色主题、深蓝主题、浅蓝主题、科技蓝主题。  

### 使用本地样式文件    
1. 用友红主题（tinper默认）
```js
import "tinper-bee/assets/tinper-bee.css";
```

2. 深蓝主题，实践案例：如华新丽华
```js
import "tinper-bee/assets/theme/tinper-bee-indigo.css";
```

3. 浅蓝主题，实践案例：中兴
```js
import "tinper-bee/assets/theme/tinper-bee-lightBlue.css";
```

4. 科技蓝主题
```js
import "tinper-bee/assets/theme/tinper-bee-blue.css";
```    
  
### 使用CDN资源      
1. 用友红主题（tinper默认）
```
<link href="//design.yonyoucloud.com/static/tinper-bee/latest/assets/tinper-bee.css"/>
```

2. 深蓝主题，实践案例：如华新丽华
```
<link href="//design.yonyoucloud.com/static/tinper-bee/latest/assets/theme/tinper-bee-indigo.css"/> 
```

3. 浅蓝主题，实践案例：中兴
```
<link href="//design.yonyoucloud.com/static/tinper-bee/latest/assets/theme/tinper-bee-lightBlue.css"/>
```

4. 科技蓝主题
```
<link href="//design.yonyoucloud.com/static/tinper-bee/latest/assets/theme/tinper-bee-blue.css"/>
```    