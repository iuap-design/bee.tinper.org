# 走马灯 CarouselFigure

一组轮播的区域，基于 react-slick 实现。

## 何时使用
例如：首页滚动图片

## 如何使用

```
import CarouselFigure from 'bee-carousel-figure';
import 'bee-carousel-figure/build/CarouselFigure.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|afterChange |切换面板的回调|function(current)|无|
|autoplay |是否自动切换|boolean|false|
|beforeChange |切换面板的回调|function(from, to)|false|
|dotPosition |面板指示点位置，可选 `top` `bottom` `left` `right`|string|bottom|
|dots |是否显示面板指示点|boolean|true|
|easing |动画效果|string|linear|
|effect |动画效果函数，可取 scrollx, fade|string|scrollx|

## 方法

|名称|描述|
|:--|:---|
|goTo(slideNumber, dontAnimate) |切换到指定面板, dontAnimate = true 时，不使用动画|
|next() |切换到下一面板|
|prev() |切换到上一面板|

更多参数可参考：https://github.com/akiran/react-slick

## 注意事项

暂无

## 更新日志

