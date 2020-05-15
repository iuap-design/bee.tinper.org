# 多端适配

提供响应式解决方案，组件多端适配，一次代码书写，多端运行

## PC端

适配各种屏幕大小可以使用栅格布局(bee-layout)。 详情参考 [栅格布局](http://bee.tinper.org/bee-layout#bee-layout)

使用栅格布局，将屏幕每一行分为12格，下边简要说明：

- 通过row在水平方向建立一组column（简写col）

- 你的内容应当放置于col内，并且，只有col可以作为row的直接元素

- 栅格系统中的列是指1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用4来创建

- 如果一个row中的col总和超过 12，那么多余的col会作为一个整体另起一行排列

- 预设4个响应尺寸：xs sm md lg 

- 可以使用 offset 设置列便宜

## 移动端

参考组件库 [lebra-components](https://github.com/lebra/lebra-components)

