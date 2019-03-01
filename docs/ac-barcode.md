# ac-barcode

条形码组件

## 代码演示

![image](https://user-images.githubusercontent.com/3817644/53559495-293c0800-3b85-11e9-9094-f6455cbe9ec5.png)

[![npm version](https://img.shields.io/npm/v/ac-barcode.svg)](https://www.npmjs.com/package/ac-barcode)
[![NPM downloads](http://img.shields.io/npm/dt/ac-barcode.svg?style=flat)](https://npmjs.org/package/ac-barcode)


### 1. 简介

React条形码组件，使用业界知名 [jsbarcode](https://github.com/lindell/JsBarcode) 进行封装，简单、友好的使用体验

### 2. 安装

1. 通过`npm`安装
    ```bash
    npm install ac-barcode --save
    ```
2. 国内镜像通过`cnpm`安装
    ```bash
    cnpm install ac-barcode --save
    ```
3. 用友内网通过`ynpm`安装
    ```bash
    ynpm install ac-barcode --save
    ```


### 3. 使用

```js
import AcBarcode from "ac-barcode";

render(){
    return (<AcBarcode value="9787123" />)
}
```

### 4. API

| 参数 | 默认值 | 类型 |
|--------|---------------|------|
| [`value`](https://github.com/lindell/JsBarcode/wiki/Options#format) | `"` | `String` |
| [`renderer`](https://github.com/lindell/JsBarcode/wiki/Options#format) | `svg (svg,canvas,img)` | `String` |
| [`format`](https://github.com/lindell/JsBarcode/wiki/Options#format) | `"auto" (CODE128)` | `String` |
| [`width`](https://github.com/lindell/JsBarcode/wiki/Options#width) | `2` | `Number` |
| [`height`](https://github.com/lindell/JsBarcode/wiki/Options#height) | `100` | `Number` |
| [`displayValue`](https://github.com/lindell/JsBarcode/wiki/Options#display-value) | `true` | `Boolean` |
| [`fontOptions`](https://github.com/lindell/JsBarcode/wiki/Options#font-options) | `""` | `String` |
| [`font`](https://github.com/lindell/JsBarcode/wiki/Options#font) | `"monospace"` | `String` |
| [`textAlign`](https://github.com/lindell/JsBarcode/wiki/Options#text-align) | `"center"` | `String` |
| [`textPosition`](https://github.com/lindell/JsBarcode/wiki/Options#text-position) | `"bottom"` | `String` |
| [`textMargin`](https://github.com/lindell/JsBarcode/wiki/Options#text-margin) | `2` | `Number` |
| [`fontSize`](https://github.com/lindell/JsBarcode/wiki/Options#font-size) | `20` | `Number` |
| [`background`](https://github.com/lindell/JsBarcode/wiki/Options#background)  | `"#ffffff"` | `String (CSS color)` |
| [`lineColor`](https://github.com/lindell/JsBarcode/wiki/Options#line-color) | `"#000000"` | `String (CSS color)` |
| [`margin`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `10` | `Number` |
| [`marginTop`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`marginBottom`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`marginLeft`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`marginRight`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |


### 5. 支持标准

* [CODE128](https://github.com/lindell/JsBarcode/wiki/CODE128)
  * CODE128 (automatic mode switching)
  * CODE128 A/B/C (force mode)
* [EAN](https://github.com/lindell/JsBarcode/wiki/EAN)
  * EAN-13
  * EAN-8
  * EAN-5
  * EAN-2
  * UPC (A)
  * UPC (E)
* [CODE39](https://github.com/lindell/JsBarcode/wiki/CODE39)
* [ITF](https://github.com/lindell/JsBarcode/wiki/ITF-14)
  * ITF
  * ITF-14
* [MSI](https://github.com/lindell/JsBarcode/wiki/MSI)
  * MSI10
  * MSI11
  * MSI1010
  * MSI1110
* [Pharmacode](https://github.com/lindell/JsBarcode/wiki/pharmacode)
* [Codabar](https://github.com/lindell/JsBarcode/wiki/codabar)


### 6. CHANGLOG

* [1.0.0-完善文档发布正式版](https://github.com/tinper-acs/ac-barcode/releases/tag/1.0.0)
* [0.0.2-修改脚手架工程](https://github.com/tinper-acs/ac-barcode/releases/tag/0.0.2)
* [0.0.1-初次版本实现、增加示例](https://github.com/tinper-acs/ac-barcode/releases/tag/0.0.1)
