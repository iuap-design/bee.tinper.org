# 参照组件

## 参照使用（参照test文件）
### 参数配置
```js
const option = {
    title: '弹窗标题',//适配 reftype =1234
    refType:3,//1:树形 2.单表 3.树卡型 4.多选 
    isRadio:false,//1.true 单选 2.false多选
    hasPage:true,
    backdrop:true,
    showLine:false,//树参照是否显示连线
    multiple:false,
    treeloadData:false,//树参照异步加载
    checkAllChildren:false,//树参照选择所有子选项按钮
    emptyBtn:true,//清空按钮是否显示
    tabData:[//tab标签 不需要可传空[]
        {"title":"分类1","key":"Classification1"},
        {"title":"分类2","key":"Classification2"},
        {"title":"分类3","key":"Classification3"}
    ],// option中可增加defaultActiveKey作为默认tab标签
    buttonText:{ok:"确定",cancel:"取消"},//按钮文字配置
    param:{//url请求参数
        refCode:'test_treeTable',//test_common||test_grid||test_tree||test_treeTable
        language:'zh_CN'//en_US||zh_TW||fr_FR||de_DE||ja_JP/ 多语参数
    },
    refModelUrl:{
        TreeUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/blobRefTree', //树请求
        TreeGridUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/blobRefTree', //树表树请求
        GridUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/commonRefsearch',//单选多选请求
        TableBodyUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/blobRefTreeGrid',//表体请求
        TableBarUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/refInfo',//表头请求
        totalDataUrl:'http://workbench.yyuap.com/ref/diwork/iref_ctr/matchPKRefJSON',//根据refcode请求完整数据
    },
    checkedArray:[],//已选中数据回填
    onCancel: function (p) {
      console.log(p)
    },
    onSave: function (sels) {
      console.log(sels);
	},
    onBeforeAjax: function (p) {
      console.log(p)
    },
    onAfterAjax: function (p) {
      console.log(p);
	},
	className:'',
}
```
#### 参数说明
参数|说明|类型
---|-----|----
title|弹窗标题|`string`
refType|1:树形 2.单表 3.树卡型 4.多选 5.其他（默认树卡）|`number`
isRadio|1.true 单选 2.false多选 default:false|`boolean`
hasPage|分页标志 true:带分页 false:不带分页 default:false|`boolean`
backdrop|是否显示遮罩层 可不传 default:true|`boolean`
showLine|树参照是否带有连线 default:false|`boolean`
treeloadData|树参照是否异步加载 default:false|`boolean`
tabData|标签数据 每个tab标签含有title与key|`Array<Object>`
param|url的请求参数 |`object`
refModelUrl|url的请求地址 |`object`
checkedArray|已选择数据项|`Array<Object>`
onCancel|取消时回调|`function`
onSave|确认时回调|`function`
onBeforeAjax|打开参照时回调|`function`
onAfterAjax|数据请求成功后回调|`function`
className|参照样式控制(适配diwork 不用传)|`String`
totalDataUrl|checkedArray为['refcode'],请求数据|`String`
multiple|树参照下提供复选 (单树)|`Boolean`

### 使用流程
1. 加载:
    1. 利用es模块加载的方式引入参照组件,引入 createModal 方法;
    2. 利用script引入参照打包的js文件(CDN:https://cdn.yonyoucloud.com/yyuap/ref/1.1.1/yyuap-ref.js),window上绑定createModal方法;
    3. 利用amd或者require加载,会暴露出createModal方法;
    4. 支持npm加载方式(npm install yyuap-ref)(推荐);引入方式: import createModal from yyuap-ref
2. 使用:
    1. 根据上述参数说明进行配置,作为一个option参数;
    2. 利用createModal(option)即可创建参照;
3. 注销:
    1. createModal方法的返回值为destory方法,调用可注销参照.
	2. 已集成到按钮组件中,无需单独调用destory方法,在点击保存、取消时自动注销.
  
## 后台处理参数要求(请求时额外所带参数)
参数|说明|类型
---|-----|----
refClientPageInfo.currPageIndex|滚动加载数据时需要参数 表示当前页数|`string`
refShowClassCode|tab标签切换时所带tab标签的key值|`string`
content|搜索时的内容|`string`
condition(原id)|树节点切换时的key值|`string`
treeNode|树形参照异步加载，传入treeNode参数返回子节点数组|`string`

## 接口数据要求(请求返回数据)
### 树
```json
{
	"data": [{
		"children": [{
			"children": [],
			"pid": "lkp",
			"refpk": "857c41b7-e1a3-11e5-aa70-0242ac11001d",
			"refcode": "wujd",
			"id": "wujd",
			"refname": "名字1"
		}, {
			"children": [],
			"pid": "lkp",
			"refpk": "780aca16-e1a3-11e5-aa70-0242ac11001d",
			"refcode": "fzl",
			"id": "fzl",
			"refname": "名字2"
		}],
		"pid": "",
		"refpk": "708918f5-e1a3-11e5-aa70-0242ac11001d",
		"refcode": "lkp",
		"id": "lkp",
		"refname": "名字3"
	}],
	"page": {
		"pageSize": 100,
		"currPageIndex": 0,
		"pageCount": 0
	},
	"allpks": null
}
```
#### 树接口数据说明
参数|说明|类型
---|-----|----
data|包含所有的树数据 包含参数children,id,refname,refpk  |`Array<object>`
children|包含子树数据 包含参数同data |`Array<object>`
id|....|`string`
refname|树节点名字|`string`
refpk|当前树节点的唯一标识|`string`
other|非必要参数|`null`
isLeaf|异步加载必要 是否是叶子节点|`boolean`

### 单选多选
```json
{
	"data": [{
		"refpk": "xxcc2", 
		"refcode": "wujd",
		"refname": "名字1"
	}, {
		"refpk": "xxcc4",
		"refcode": "test4",
		"refname": "测试4"
	}],
	"page": {
		"pageSize": 50,
		"currPageIndex": 0,
		"pageCount": 2
	},
	"allpks": null
}
```
#### 单选多选接口数据说明
参数|说明|类型
---|-----|----
data|包含所有的列表数据  数组内一个对象为一个节点|`Array<object>`
refname|树节点名字|`string`
refpk|当前节点的唯一标识|`string`
other|非必要参数|`null`

### 单表参照
#### 单边参照--表头
```json
{
	"strFieldCode": ["refcode", "refname", "refremark"],
	"strFieldName": ["编码", "名称", "备注"],
}
```
##### 表头接口数据说明
参数|说明|类型
---|-----|----
strFieldName|表头的各个名字|`Array`
strFieldCode|表头的各个名字所对应的唯一标示|`Array`
other|非必要参数|`null`

#### 单边参照--表体
```json
{
	"data": [{
		"refremark": "备注",
		"refpk": "xxcc41",
		"refcode": "test41",
		"refname": "测试41"
	}, {
		"refremark": "备注",
		"refpk": "xxcc42",
		"refcode": "test42",
		"refname": "测试42"
	},],
	"page": {
		"pageSize": 50,
		"currPageIndex": 0,
		"pageCount": 2
	},
	"allpks": null
}
```
##### 表体接口数据说明
参数|说明|类型
---|-----|----
data|包含所有的表格数据|`Array<object>`
param-in-object|根据表头的strFieldCode数组来进行设置|`string`
refpk|当前节点的唯一标识|`string`
page|用来进行数据滚动加载的翻页数据|`object`
pageCount|总数据页数(页数计算时从0开始)|`number`
other|非必要参数|`null`


## 三一参照使用（参照src/test31|testInfo|testVar文件）
### 使用说明
```js
import RefWithInput from 'yyuap-ref/dist2/refWithInput'
import 'yyuap-ref/dist2/yyuap-ref.css'//参照样式
```
<img src="http://iuap-market-test.oss-cn-beijing.aliyuncs.com/000testservice/1.jpg" width="90%" />

```js
<RefWithInput option={option} disabled={false} form={this.props.form}/>

option如下 disbale:是否禁用 form:option.verification打开时传入表单校验属性
```

### 配置说明
```js
const option = {
    refType:6,//5 穿梭框; 6 多过滤项
    title:'参照默认标题',
    param:{//url请求参数
        refCode:'common_ref',
        tenantId:'',
        sysId:'',
        transmitParam:'EXAMPLE_CONTACTS,EXAMPLE_ORGANIZATION',
    },
    refModelUrl:{
        TreeUrl:'/rest', //树请求
        TableBodyUrl:'/tablebody',//表体请求
        TableBarUrl:'/tablebar',//表头请求
    },
    checkedArray: [],//checkedArray与(filterRefUrl,keyList)二选一
    filterRefUrl:'/iuap_pap_quickstart/common/filterRef',//get
    keyList:self.state.saveKeys,//选中的key
    onSave: function (sels,showVal) {
      //showVal下一次传给showVal,作为参照input初始值
      console.log(sels);
    },
    filterKey:[{title:'人员名称',key:'peoname'}],
    textOption:{
        leftTitle:'品类结构:',
        rightTitle:'品类列表:',
        leftTransferText:'待选品类',
        rightTransferText:'已选品类',
        leftInfo:[{text:'流水号',key:'refname'},{text:'品类编码',key:'refname'},{text:'品类描述',key:'refname'}],
        rightInfo:[{text:'流水号',key:'refname'},{text:'品类编码',key:'refname'},{text:'品类描述',key:'refname'}],
    },
    showVal:'初始值',//参照input
    showKey:'peoname',
    verification:false,//是否进行校验
    verKey:'aaaa',//校验字段
    verVal:'111',//表单初始值
}
```
#### 参数说明
参数|说明|类型
---|-----|----
refType|5:穿梭框;6多过滤表|`Number`
param|请求参数|`Object`
refModelUrl|请求地址(get)|`Object`
说明|checkedArray与(filterRefUrl,keyList)二选一|初始渲染
checkedArray|选中项(打开时传递数据)|`Array<Object>`
filterRefUrl|根据key请求数据|`String`
keyList|选中的key|`Array<String>`
onSave|保存回调|`Function`
filterKey|穿梭框过滤项|`Array<Object>`
textOption|文字自定义|`Object`
showVal|参照input初始值|`String`
showKey|展示对应字段|`String`
verification|是否表单校验(默认关闭:verkey,verval)|`Boolean`
verKey|校验key|`String`
verVal|默认值|`String`

<img src="http://iuap-market-test.oss-cn-beijing.aliyuncs.com/000testservice/transfer.jpeg" width="90%" />
##### textOption对象
参数|说明
---|-----
leftTitle|左树标题
rightTitle|右标题
leftTransferText|左穿梭框名字
rightTransferText|右穿梭框名字
leftInfo|`Array<Object>` text,key,分别为显示文字以及对应key值
rightInfo|`Array<Object>` text,key,分别为显示文字以及对应key值

<img src="http://iuap-market-test.oss-cn-beijing.aliyuncs.com/000testservice/multiple.jpeg" width="90%" />
##### filterKey为对象数组,对象包含 title,key 分别为显示文字以及对应key值;不使用默认为使用表头参数进行过滤

### 接口数据要求(请求返回数据)
#### 穿梭框
```json
{
  "data": [{
    "refpk": "001",
    "children": [{
      "refpk": "001001",
      "children": [{
        "refname": "测试组222织",
        "refpk": "001011"
      }],
      "refname": "测试a组织"
    }],
    "refname": "云平台事业部"
  }, {
    "refpk": "002",
    "children": [{
      "refpk": "002002",
      "children": [{
        "refname": "测试组222织",
        "refpk": "001021"
      }],
      "refname": "NC开发部-下级"
    }],
    "refname": "NC开发部"
  }, {
    "refpk": "006",
    "children": [],
    "refname": "一级组织6"
  }]
}
```
##### 穿梭框接口数据说明
参数|说明|类型
---|-----|----
data|包含所有的树数据 |`Array<object>`
children|包含子树数据(有children非叶子(不可选);无children叶子(可选)) |`Array<object>`
refname|树节点名字|`string`
refpk|当前树节点的唯一标识|`string`
other|可增加leftInfo与rightInfo对应的key|`String`

#### 多过滤项
```json
//表头
{
  "strFieldCode": ["peoname", "peocode","keke","peoname1", "peocode1","keke1"],
  "strFieldName": ["人员名称", "人员编码","keke","人员名称1", "人员编码1","keke1"],
}
//表体
{
  "data": [{
    "peocode": "dddddd",
    "rownum_": "1222",
    "pid": "a25e19df-e2e2-4fc6-86d2-c717daf65b36",
    "refpk": "1",
    "id": "14e0220f-1a86-4861-8f74-f7134cbe3333",
    "peoname": "2"
  }, {
    "peocode": "dddddd",
    "rownum_": "2",
    "pid": "a25e19df-e2e2-4fc6-86d2-c717daf65b36",
    "refpk": "2",
    "id": "14e0220f-1a86-4861-8f74-f7134cbe2wqw235b",
    "peoname": "dddddd"
  }]
}
```
##### 多过滤项接口数据说明
参数|说明|类型
---|-----|----
表格数据| 非懒加载 首次请求全部数据 | 分页等由前端过滤
strFieldName|表头的各个名字|`Array`
strFieldCode|表头的各个名字所对应的唯一标示|`Array`
data|包含所有的表格数据|`Array<object>`
refpk|当前节点的唯一标识|`string`
param-in-object|根据表头的strFieldCode数组来进行设置|`string`
other|对应filterKey传入需要key|`null`
tip:filterKey为[{title:'测试a',key:'a'},{title:'测试b',key:'b'}],那么会生成两个过滤条件,分别过滤参数为表格数据的a,b


# Change log
- yyuap-ref
- 1.0.0 测试版本
- 1.0.1 正式版本
- 1.0.2 修复部分问题
- 1.0.3 支持修改url请求地址与参数
- 1.0.4 增加支持单选 完善文档
- 1.0.5 集成注销事件
- 1.0.6 增加对分页的支持
- 1.0.7 更新readme
- 1.0.8 修复分页bug
- 1.0.9 gulp 改打包方式 测试
- 1.0.10 gulp alise错误修复
- 1.0.11 修复icon引入错误
- 1.0.12 增加参照样式控制
- 1.0.13 参照无数据时样式
- 1.0.14 参照样式控制提升
- 1.0.15 参照样式调整
- 1.0.16 参照样式checkbox调整
- 1.0.17 参照选中逻辑调整 css调整
- 1.0.18 本地启动服务适配ie9 添加全选逻辑
- 1.0.19 树卡无数据bug修复
- 1.0.20 增加全部数据请求可配地址
- 1.0.21 增加双击事件
- 1.0.22 bug调整
- 1.0.23 调整遮罩层与dependence
- 1.0.24 适配需求 (表头 code->refcode name->refname)
- 1.0.25 checkbox依赖调整
- 1.0.26 分页带请求参数
- 1.0.27 适配需求摘出
- 1.0.28 写死版本号
- 1.0.29~35 调整具体版本 适配工作台
- 1.0.36 广适配(checkbox调整)
- 1.0.37 适配(checkbox调整 diwork)
- 1.0.38 适配(checkbox调整 非diwork)
- 1.0.39 样式调整
- 1.0.40|41 适配diwork checkbox
- 1.0.42|43 react版本适配
- 1.0.44 完成peer
- 1.0.45 工作台 搜索css调整
- 1.0.46 非工作台 搜索css调整
- 1.0.47 工作台 搜索 双击事件
- 1.0.48 非工作台 搜索 双击事件
- 1.0.49 非工作台 树 style
- 1.0.50 reradme更改
- 1.0.51-53 树参照调整(52工作台 53非工作台)
- 1.0.54-56 树参照在树卡型下的调整(54工作台 55|6非工作台)
- 1.0.57 树参照 点击加载
- 1.0.58 单选多选的样式问题 
- 1.0.59 树表参照 异步加载
- 1.0.60 三一参照支持 穿梭框参照 多过滤表格
- 1.0.61 树表参照 异步加载BUG
- 1.0.62 css冲突
- 1.0.63|4|5 暂时删除31参照
- 1.0.66|7 css module
- 1.0.68 版本
- 1.0.69 增加input参照
- 1.0.70 css
- 1.0.71 三一参照调整
- 1.0.72 三一参照调整2
- 1.0.73|4|5|6 三一参照调整3
- 1.0.77 三一参照校验
- 1.0.78 三一参照 支持checkedArray
- 1.0.79 readme更新
- 1.0.80 增加showVal,点击请求接口
- 1.0.81 返回数据为null处理,readme更新
- 1.0.82 控制用户自定义显示值
- 1.0.83 控制用户自定义显示值
- 1.0.84 checkedArray key
- 1.0.85 滚动条撑开err
- 1.0.86 标题 title
- 1.0.87 树参照选中所有子选项功能  /  按钮可配置文字
- 1.0.88 树参照 包含下级
- 1.0.89  diwok css
- 1.0.90  diwok css
- 1.0.91  树参照 包含下级 BUG
- 1.0.92  清空操作/穿梭框排序
- 1.0.93  样式问题
- 1.0.94  表分页 已选显示BUG
- 1.0.95  多语传参配置
- 1.0.96/97  样式冲突
- 1.0.98  三一样式
- 1.0.99  添加onBeforeAjax onAfterAjax方法
- 1.1.00  搜索框点击优化
- 1.1.01  多语

# License
MIT