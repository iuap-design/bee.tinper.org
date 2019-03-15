# CitySelect
地区级联

## 何时使用
需要选择地区的时候

## 如何使用

```
import { CitySelect } from 'tinper-bee';

or

import CitySelect from 'bee-city-select';
import bee-city-select/build/CitySelect.css;

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|className|类名|string|-|
|defaultValue|默认值,格式为`{ province:'北京',city:'北京',area:'东城区'}`|array|{ province:'北京',city:'北京',area:'东城区'}|
|onChange|改变时的回调，参数为当前值，格式为`{ province:'北京',city:'北京',area:'东城区'}`|function|-|
|provinceData|预制地区数据，格式为 `[{ "name": "北京", "city":[{"name":"北京", "area":["东城区","西城区","崇文区","宣武区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","平谷区","怀柔区","密云县","延庆县"]}]}, { "name": "天津", "city":[{"name":"天津", "area":["和平区","河东区","河西区","南开区","河北区","红桥区","塘沽区","汉沽区","大港区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","宁河县","静海县","蓟  县"]}]}]`，使用此props必须设置 `defaultValue` |array|-|
|lang|组件预制三种语言。zh_CN 中文简体(默认)、zh_TW 中文繁体、en_US 英文|string|zh_CN|

## 注意事项

暂无

## 更新日志



