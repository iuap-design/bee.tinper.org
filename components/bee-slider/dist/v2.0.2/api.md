# 滑块 Slider

滑动型输入器，展示当前值和可选范围。

## 何时使用
当用户需要在数值区间/自定义区间内进行选择时

## 如何使用

```
import { Slider } from 'tinper-bee';

or

import Slider from 'bee-slider';
import 'bee-slider/build/Slider.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|min|最小值，默认0|number|0|
|max|最大值，默认100|number|100|
|step|步长，取值必须大于0，并且可被(max-min)整除。当marks不为空对象时，可以设置step为null，此时Slider的可选值仅有marks标出来的部分，默认1|（number OR null）|1|
|dots|是否只能拖拽到刻度上，默认是false|boolean|false|
|marks|刻度标记，key的类型必须为number且取值在闭区间min,max内，每个标签可以单独设置样式|object|{number:string} OR {number:{style:object,label:string}}|
|value|设置当前取值。当range为false时，使用number，否则用[number,number]|number OR [number,number]|0 OR [0,0]|
|defaultValue|设置初始取值。当range为false时，使用number，否则用[number,number]|number OR [number,bumber]|0 OR [0,0]|
|className|增加额外的class|string|''|
|included|marks不为空对象时有效，值为true时表示值为包含关系，false表示并列|boolean|true|
|disabled|值为true时，滑块为禁用状态|boolean|false|
|vertical|值为true时，Slider为垂直方向|Boolean|false|
|railStyle|自定义u-slider-rail的样式|Object|-|
|trackStyle|自定义u-slider-track的样式|Object|-|
|handleStyle|自定义u-slider-handle的样式|Object|-|
|dotStyle|自定义u-slider-dot样式|Object|-|
|activeDotStyle|自定义u-slider-dot-active样式|Object|-|
|onChange|当Slider的值发生改变时，会触发onChange事件，并把改变后的值作为参数传入。|Function(value)|NOOP|
|onAfterChange|与onmouseup触发时机一致，把当前值作为参数传入。|Function(value)|NOOP|
|tipFormatterSlider|会把当前值传给tipFormatter，并在Tooltip中显示tipFormatter的返回值，若为null，则隐藏Tooltip。|Function|-|

## 注意事项

暂无

## 更新日志
