const provinceData = [

    { "name": "Beijing", "city": [{ "name": "Beijing", "area": ["Dongcheng District", "Xicheng District", "Chongwen District", "Xuanwu District", "Chaoyang District", "Fengtai District", "Shijingshan District", "Haidian District", "Mentougou District", "Fangshan District", "Tongzhou District", "Shunyi District", "Changping District", "Daxing District", "Pinggu District", "Huairou District", "Miyun County", "Yanqing County"] }] },

    { "name": "Tianjin", "city": [{ "name": "Tianjin", "area": ["Heping District", "Hedong District", "Hexi District", "Nankai District", "Hebei District", "Hongqiao District", "Tanggu District", "Hangu District", "Dagang District", "Dongli District", "Xiqing District", "Jinnan District", "Beichen District", "Wuqing District", "Baodi District", "Ninghe County", "Jinghai County", "Ji County"] }] },

    {
        "name": "Hebei", "city": [

            { "name": "Shijiazhuang", "area": ["Chang'an District", "Qiaodong District", "Qiaoxi District", "Xinhua District", "Suburb", "Jingxing Mining Area", "Jingxing County", "Zhengding County", "Luancheng County", "Xingtang County", "Lingshou County", "Gaoyi County", "Shenze County", "Zanhuang County", "Wuji County", "Pingshan County", "Yuanshi County", "Zhao County", "Xinji City", "Gao", "Jinzhou City", "Xinle City", "Luquan City"] },

            { "name": "Tangshan", "area": ["Lunan District", "Lubei District", "Guye District", "Kaiping District", "New District", "Fengrun County", "Luan County", "Luannan County", "Laoting County", "Qianxi County", "Yutian County", "Tanghai County", "Zunhua City", "Fengnan City", "Qian'an City"] },

            { "name": "Qinhuangdao", "area": ["Haigang District", "Shanhaiguan District", "Beidaihe District", "Qinglong Manchu Autonomous County", "Changli County", "Funing County", "Lulong County"] },

            { "name": "Handan", "area": ["Hanshan District", "Congtai District", "Fuxing District", "Fengfeng Mining Area", "Handan County", "Linzhang County", "Cheng'an County", "Daming County", "She County", "Ci County", "Feixiang County", "Yongnian County", "Qiu County", "Jize County", "Guangping County", "Guantao County", "Wei County", "Quzhou County", "Wu'an City"] },

            { "name": "Xingtai", "area": ["Qiaodong District", "Qiaoxi District", "Xingtai County", "Lincheng County", "Neiqiu County", "Baixiang County", "Longyao County", "Ren County", "Nanhe County", "Ningjin County", "Julu County", "Xinhe County", "Guangzong County", "Pingxiang County", "Wei County", "Qinghe County", "Linxi County", "Nangong City", "Shahe City"] },

            { "name": "Baoding", "area": ["New Urban District", "North Urban District", "South Urban District", "Mancheng County", "Qingyuan County", "Laishui County", "Fuping County", "Xushui County", "Dingxing County", "Tang County", "Gaoyang County", "Rongcheng County", "Laiyuan County", "Wangdu County", "Anxin County", "Yi County", "Quyang County", "Li County", "Shunping County", "Boye", "Xiong County", "Zhuozhou City", "Dingzhou City", "Anguo City", "Gaobeidian City"] },

            { "name": "Zhangjiakou", "area": ["Qiaodong District", "Qiaoxi District", "Xuanhua District", "Xiahuayuan District", "Xuanhua County", "Zhangbei County", "Kangbao County", "Guyuan County", "Shangyi County", "Yu County", "Yangyuan County", "Huai'an County", "Wanquan County", "Huailai County", "Zhuolu County", "Chicheng County", "Chongli County"] },

            { "name": "Chengde", "area": ["Shuangqiao District", "Shuangluan District", "Yingshouyingzi Mining Area", "Chengde County", "Xinglong County", "Pingquan County", "Luanping County", "Longhua County", "Fengning Manchu Autonomous County", "Kuancheng Manchu Autonomous County", "Weichang Manchu Mongolian Autonomous County"] },

            { "name": "Cangzhou", "area": ["Xinhua District", "Yunhe District", "Cang County", "Qing County", "Dongguang County", "Haixing County", "Yanshan County", "Suning County", "Nanpi County", "Wuqiao County", "Xian County", "Mengcun Hui Nationality Autonomous County", "Botou City", "Renqiu City", "Huanghua City", "Hejian City"] },

            { "name": "Langfang", "area": ["Anci District", "Gu'an County", "Yongqing County", "Xianghe County", "Dacheng County", "Wen'an County", "Dachang Hui Nationality Autonomous County", "Bazhou City", "Sanhe City"] },

            { "name": "Hengshui", "area": ["Taocheng District", "Zaoqiang County", "Wuyi County", "Wuqiang County", "Raoyang County", "Anping County", "Gucheng County", "Jing County", "Yucheng County", "Quzhou City", "Shenzhou City"] }

        ]
    },

    {
        "name": "Shanxi", "city": [

            { "name": "Taiyuan", "area": ["Xiaodian District", "Yingze District", "Xinghualing District", "Jiancaoping District", "Wanbolin District", "Jinyuan District", "Qingxu County", "Yangqu County", "Loufan County", "Gujiao City"] },

            { "name": "Datong", "area": ["Urban Area", "Mining Area", "Southern Suburb", "Xinrong District", "Yanggao County", "Tianzhen County", "Guangling County", "Lingqiu County", "Wuyuan County", "Zuoyun County", "Datong County"] },

            { "name": "Yangquan", "area": ["Urban Area", "Mining Area", "Suburbs", "Pingding County", "Yu County"] },

            { "name": "Changzhi", "area": ["Urban Area", "Suburbs", "Changzhi County", "Xiangyuan County", "Tunliu County", "Pingshun County", "Licheng County", "Huguan County", "Changzi County", "Wuxiang County", "Qin County", "Qinyuan County", "Lucheng City"] },

            { "name": "Jincheng", "area": ["Urban Area", "Qinshui County", "Yangcheng County", "Lingchuan County", "Zezhou County", "Gaoping City"] },

            { "name": "Shuozhou", "area": ["Shuocheng District", "Pinglu District", "Shanyin County", "Ying County", "Youyu County", "Huairen County"] },

            { "name": "Xinzhou", "area": ["Xinfu District", "Yuanping City", "Dingxiang County", "Wutai County", "Dai County", "Fanzhi County", "Ningwu County", "Jingle County", "Shenchi County", "Wuzhai County", "Kelan County", "Hequ County", "Baode County", "Pianguan County"] },

            { "name": "Lvliang", "area": ["Lishi District", "Xiaoyi City", "Fenyang City", "Wenshui County", "Jiaocheng County", "Xing County", "Lin County", "Liulin County", "Shilou County", "Lan County", "Fangshan County", "Zhongyang County", "Jiaokou County"] },

            { "name": "Jinzhong", "area": ["Yuci City", "Jiexiu City", "Yushe County", "Zuoquan County", "Heshun County", "Xiyang County", "Shouyang County", "Taigu County", "Qi County", "Pingyao County", "Lingshi County"] },

            { "name": "Linyi", "area": ["Linyi City", "Houma City", "Huozhou City", "Quwo County", "Yicheng County", "Xiangfen County", "Hongdong County", "Gu county", "Anze County", "Fushan County", "Ji County", "Xiangning County", "Pu County", "Daning County", "Yonghe County", "Xi County", "Fenxi County"] },

            { "name": "Yuncheng", "area": ["Yuncheng City", "Yongji City", "Hejin City", "Ruicheng County", "Linyi County", "Wanrong County", "Xinjiang County", "Jishan County", "Wenxi County", "Xia County", "Jiang County", "Pinglu County", "Yuanqu County"] }

        ]
    },

    {
        "name": "Inner Mongolia", "city": [

            { "name": "Hohhot", "area": ["New Urban Area", "Huimin District", "Yuquan District", "Suburbs", "Tumut Left Banner", "Tokto County", "Horinger County", "Qingshuihe County", "Wuchuan County"] },

            { "name": "Baotou", "area": ["Donghe District", "Kundulun District", "Qingshan District", "Shiguai Mining Area", "Baiyun Mining Area", "Suburbs", "Tumut Right Banner", "Guyang County", "Dalhan Maomingan United Banner"] },

            { "name": "Wuhai", "area": ["Haibowan District", "Hainan District", "Wuda District"] },

            { "name": "Chifeng", "area": ["Hongshan District", "Yuanbaoshan Area", "Songshan District", "Aruker Banner", "Bahrain Left Banner", "Bahrain Right Banner", "Linxi County", "Keshiketeng Banner", "Weng Niute Banner", "Kalaqin Banner", "Ningcheng County", "Aohan Banner"] },

            { "name": "Hulunbeier", "area": ["Hailar City", "Manzhouli City", "Zhalantun City", "Yakeshi City", "Genhe City", "Ergun City", "Arong Banner", "Molidawada Muir Autonomous Banner", "Oroqen Autonomous Banner", "Ewenki Autonomous Banner", "New Barr Right Banner", "New Bay Tiger Left Banner", "Chen Baerhu Banner"] },

            { "name": "Xing'an League", "area": ["Ulanhot City", "Aershan", "Horqin Right Wing Front Banner", "Horqin Right Wing Middle Banner", "Zhabit Banner", "Tuquan County"] },

            { "name": "Tongliao", "area": ["Horqin District", "Hollingol City", "Kerqin Left Wing Middle Banner", "Horqin Left Wing Back Banner", "Kailu County", "Kulun Banner", "Naiman Banner", "Zalute Banner"] },

            { "name": "Xilin Gol League", "area": ["Erlianhot City", "Xilinhot City", "Abaqi Banner", "Sunite Left Banner", "Sunite Right Banner", "East Ujimqin Banner", "Xiwuzhumuqi Banner", "Taipu Temple Banner", "Xianghuang Banner", "Zhengxiangbai Banner", "Zhenglan Banner", "Duolun County"] },

            { "name": "Ulanchabu League", "area": ["Jining City", "Fengzhen City", "Zhuozi County", "Huade County", "Shangdu County", "Xinghe County", "Liangcheng County", "Chahar Right Front Banner", "Chahar Right Wing Middle Banner", "Chahar Right Back Banner", "Siziwang Banner"] },

            { "name": "Ikezhao League", "area": ["Dongsheng City", "Dalat Banner", "Zhungeer Banner", "Etuokeqian Banner", "Etuoke Banner", "Hangjin Banner", "Wushen Banner", "Yijinhuoluo Banner"] },

            { "name": "Bayannaoer League", "area": ["Linhe City", "Wuyuan County", "Dengkou County", "Urad Front Banner", "Urad Middle Banner", "Urad Back Banner", "Hangjin Back Banner"] },

            { "name": "Alxa League", "area": ["Alxa Left Banner", "Alxa Right Banner", "Ejina Banner"] }

        ]
    },

    {
        "name": "Liaoning", "city": [

            { "name": "Shenyang", "area": ["Shenhe District", "Huanggu District", "Heping District", "Dadong District", "Tiexi District", "Sujiatun District", "Dongling District", "Yuhong District", "Xinmin City", "Faku County", "Liaozhong County", "Kangping County", "Xinchengzi District", "Other"] },

            { "name": "Dalian", "area": ["Xigang District", "Zhongshan District", "Shahekou District", "Ganjingzi District", "Lvshunkou District", "Jinzhou District", "Wafangdian City", "Pulandian City", "Zhuanghe City", "Changhai County", "Other"] },

            { "name": "Anshan", "area": ["Tiedong District", "Tiexi District", "Lishan District", "Qianshan District", "Haicheng city", "Tai'an County", "Xiuyan Manchu Autonomous County", "Other"] },

            { "name": "Fushun", "area": ["Shuncheng District", "Xinfu District", "Dongzhou District", "Wanghua District", "Fushun County", "Qingyuan Manchu Autonomous County", "Xinbin Manchu Autonomous County", "Other"] },

            { "name": "Benxi", "area": ["Pingshan District", "Mingshan District", "Xihu District", "Nanfen District", "Benxi Manchu Autonomous County", "Huanren Manchu Autonomous County", "Other"] },

            { "name": "Dandong", "area": ["Zhenxing District", "Yuanbao District", "Zhen'an District", "Donggang City", "Fengcheng", "Kuandian Manchu Autonomous County", "Other"] },

            { "name": "Jinzhou", "area": ["Taihe District", "Guta District", "Linghe District", "Linghai City", "Heishan County", "Yi County", "Beining City", "Other"] },

            { "name": "Yingkou", "area": ["Zhanqian District", "West Urban District", "Bayuquan District", "Laobian District", "Dashiqiao City", "Gaizhou City", "Other"] },

            { "name": "Fuxin", "area": ["Haizhou District", "Xinqiu District", "Taiping District", "Qinghemen District", "Xihe District", "Zhangwu County", "Fuxin Mongolian Autonomous County", "Other"] },

            { "name": "Liaoyang", "area": ["Baita District", "Wensheng District", "Hongwei District", "Taizihe District", "Gongchangling District", "Dengta City", "Liaoyang County", "Other"] },

            { "name": "Panjin", "area": ["Shuangtaizi District", "Xinglongtai District", "Panshan County", "Dawa County", "Other"] },

            { "name": "Tieling", "area": ["Yinzhou District", "Qinghe District", "Diaobingshan City", "Kaiyuan City", "Tieling County", "Changtu County", "Xifeng County", "Other"] },

            { "name": "Chaoyang", "area": ["Shuangta District", "Longcheng District", "Lingyuan City", "Beipiao City", "Chaoyang County", "Jianping County", "Karachi Left Mongolian Autonomous County", "Other"] },

            { "name": "Huludao", "area": ["Longgang District", "Nanpiao District", "Lianshan District", "Xingcheng City", "Suizhong County", "Jianchang County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Jilin", "city": [

            { "name": "Changchun", "area": ["Chaoyang District", "Kuancheng District", "Erdao District", "Nanguan District", "Lvyuan District", "Shuangyang District", "Jiutai City", "Yushu City", "Dehui City", "Nong'an County", "Other"] },

            { "name": "Jilin", "area": ["Chuanying District", "Changyi District", "Longtan District", "Fengman District", "Shulan City", "Huadian City", "Jiaohe City", "Panshi City", "Yongji County", "Other"] },

            { "name": "Siping", "area": ["Tiexi District", "Tiedong District", "Gongzhuling City", "Shuangliao City", "Lishu County", "Yitong Manchu Autonomous County", "Other"] },

            { "name": "Liaoyuan", "area": ["Longshan District", "Xi'an District", "Dongliao County", "Dongfeng County", "Other"] },

            { "name": "Tonghua", "area": ["Dongchang District", "Erdaojiang District", "Meihekou City", "Ji'an City", "Tonghua County", "Huinan County", "Liuhe County", "Other"] },

            { "name": "Baishan", "area": ["Badaojiang District", "Jiangyuan District", "Linjiang City", "Jingyu County", "Fusong County", "Changbai Korean Autonomous County", "Other"] },

            { "name": "Songyuan", "area": ["Ningjiang District", "Qian'an County", "Changling County", "Fuyu County", "Qianguoerluosi Mongolian Autonomous County", "Other"] },

            { "name": "Baicheng", "area": ["Taobei District", "Da'an City", "Taonan City", "Zhenlai County", "Tongyu County", "Other"] },

            { "name": "Yanbian Korean Autonomous Prefecture", "area": ["Yanji City", "Tumen City", "Dunhua City", "Longjing City", "Hunchun City", "Helong City", "Antu County", "Wangqing County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Heilongjiang", "city": [

            { "name": "Harbin", "area": ["Songbei District", "Daoli District", "Nangang District", "Pingfang District", "Xiangfang District", "Daowai District", "Hulan District", "Acheng District", "Shuangcheng City", "Shangzhi City", "Wuchang City", "Bin County", "Fangzheng County", "Tonghe County", "Bayan County", "Yanshou County", "Mulan County", "Yilan County", "Other"] },

            { "name": "Qiqihar", "area": ["Longsha District", "Ang'angxi District", "Tiefeng District", "Jianhua District", "Fulaerki District", "Nianzishan District", "Merisda Daur District", "Nehe City", "Fuyu County", "Baiquan County", "Gannan County", "Yi'an County", "Keshan County", "Tailai County", "Kedong County", "Longjiang County", "Other"] },

            { "name": "Hegang", "area": ["Xingshan District", "Gongnong District", "Nanshan District", "Xing'an District", "Xiangyang District", "Dongshan District", "Luobei County", "Suibin County", "Other"] },

            { "name": "Shuangyashan", "area": ["Jianshan District", "Lingdong District", "Sifangtai District", "Baoshan District", "Jixian County", "Baoqing County", "Youyi County", "Raohe County", "Other"] },

            { "name": "Jixi", "area": ["Jiguan District", "Hengshan District", "Chengzihe District", "Didao District", "Lishu District", "Mashan District", "Mishan City", "Hulin City", "Jidong County", "Other"] },

            { "name": "Daqing", "area": ["Saltu District", "Honggang District", "Longfeng District", "Ranghulu District", "Datong District", "Lindian County", "Zhaozhou County", "Zhaoyuan County", "Durbert Mongolian Autonomous County", "Other"] },

            { "name": "Yichun", "area": ["Yichun District", "Dailing District", "Nancha District", "Jinshanyu District", "Xilin District", "Meixi District", "Wumahe District", "Cuiyu District", "Youhao District", "Shangganling District", "Wuying District", "Hongxing District", "Xinqing District", "Tangwanghe District", "Wuyiling District", "Tieli City", "Jiayin County", "Other"] },

            { "name": "Mudanjiang", "area": ["Aimin District", "Dong'an District", "Yangming District", "Xi'an District", "Suifenhe City", "Ning'an City", "Hailin City", "Muling City", "Linkou County", "Dongning County", "Other"] },

            { "name": "Jiamusi", "area": ["Xiangyang District", "Qianjin District", "Dongfeng District", "Suburbs", "Tongjiang City", "Fujin City", "Huachuan County", "Fuyuan County", "Huanan County", "Tangyuan County", "Other"] },

            { "name": "Qitaihe", "area": ["Taoshan District", "Xinxing District", "Qiezihe District", "Boli County", "Other"] },

            { "name": "Heihe", "area": ["Aihui District", "Bei'an City", "Wudalianchi City", "Xunke County", "Nenjiang County", "Sun Wu County", "Other"] },

            { "name": "Suihua", "area": ["Beilin District", "Anda City", "Zhaodong City", "Hailun City", "Suiling County", "Lanxi County", "Mingshui County", "Qinggang County", "Qing'an County", "Wangkui County", "Other"] },

            { "name": "Daxing'anling area", "area": ["Huma County", "Tahe County", "Mohe County", "Daxing'anling District", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Shanghai", "city": [

            { "name": "Shanghai", "area": ["Huangpu District", "Luwan District", "Xuhui District", "Changning District", "Jing'an District", "Putuo District", "Zhabei District", "Hongkou District", "Yangpu District", "Baoshan District", "Minhang District", "Jiading District", "Songjiang District", "Jinshan District", "Qingpu District", "Nanhui District", "Fengxian District", "Pudong New District", "Chongming County", "Other"] }

        ]
    },

    {
        "name": "Jiangsu", "city": [

            { "name": "Nanjing", "area": ["Xuanwu District", "White area", "Qinhuai District", "Jianye District", "Gulou District", "Xiaguan District", "Qixia District", "Yuhuatai District", "Pukou District", "Jiangning District", "Liuhe District", "Lishui County", "Gaochun County", "Other"] },

            { "name": "Suzhou", "area": ["Jinchang District", "Pingjiang District", "Canglang District", "Huqiu District", "Wuzhong District", "Xiangcheng District", "Changshu City", "Zhangjiagang City", "Kunshan City", "Wujiang City", "Taicang City", "Other"] },

            { "name": "Wuxi", "area": ["Chong'an District", "Nanchang District", "Beitang District", "Binhu District", "Xishan District", "Huishan District", "Jiangyin City", "Yixing City", "Other"] },

            { "name": "Changzhou", "area": ["Zhonglou District", "Tianning District", "Qishuyan District", "Xinbei District", "Wujin District", "Jintan City", "Liyang City", "Other"] },

            { "name": "Zhenjiang", "area": ["Jingkou District", "Runzhou District", "Dantu District", "Danyang City", "Yangzhong City", "Jurong City", "Other"] },

            { "name": "Nantong", "area": ["Chongchuan District", "Gangzha District", "Tongzhou City", "Rugao City", "Haimen City", "Qidong City", "Hai'an County", "Rudong County", "Other"] },

            { "name": "Taizhou", "area": ["Hailing District", "Gaogang District", "Jiangyan City", "Taixing City", "Jingjiang City", "Xinghua City", "Other"] },

            { "name": "Yangzhou", "area": ["Guangling District", "Weiyang District", "Hanjiang District", "Jiangdu City", "Yizheng City", "Gaoyou City", "Baoying County", "Other"] },

            { "name": "Yancheng", "area": ["Tinghu District", "Yandu District", "Dafeng City", "Dongtai City", "Jianhu County", "Sheyang County", "Funing County", "Binhai County", "Xiangshui County", "Other"] },

            { "name": "Lianyungang", "area": ["Xinpu District", "Haizhou District", "Lianyun District", "Donghai County", "Guanyun County", "Ganyu County", "Guannan County", "Other"] },

            { "name": "Xuzhou", "area": ["Yunlong District", "Gulou District", "Jiuli District", "Quanshan District", "Jiawang District", "Pizhou City", "Xinyi City", "Tongshan County", "Suining County", "Pei County", "Feng County", "Other"] },

            { "name": "Huai'an", "area": ["Qinghe District", "Qingpu District", "Chuzhou District", "Huaiyin District", "Yishui County", "Hongze County", "Jinhu County", "Xuyi County", "Other"] },

            { "name": "Suqian", "area": ["Sucheng District", "Suyu District", "Shuyang County", "Siyang County", "Sihong County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Zhejiang", "city": [

            { "name": "Hangzhou", "area": ["Gongshu District", "West Lake District", "Up Urban Area", "Down Urban Area", "Jianggan District", "Binjiang District", "Yuhang District", "Xiaoshan Strict", "Jiande City", "Fuyang City", "Lin'an City", "Tonglu County", "Chun'an County", "Other"] },

            { "name": "Ningbo", "area": ["Haishu District", "Jiangdong District", "Jiangbei District", "Zhenhai District", "Beilun District", "Yinzhou District", "Yuyao City", "Cixi City", "Fenghua City", "Ninghai County", "Xiangshan County", "Other"] },

            { "name": "Wenzhou", "area": ["Lucheng District", "Longwan District", "Ouhai District", "Ruian City", "Yueqing City", "Yongjia County", "Dongtou County", "Pingyang County", "Cangnan County", "Wencheng County", "Taishun County", "Other"] },

            { "name": "Jiaxing", "area": ["Xiucheng District", "Xiuzhou District", "Haining City", "Pinghu City", "Tongxiang City", "Jiashan County", "Haiyan County", "Other"] },

            { "name": "Huzhou", "area": ["Wuxing District", "Nanxun District", "Changxing County", "Deqing County", "Anji County", "Other"] },

            { "name": "Shaoxing", "area": ["Yuecheng District", "Zhuji City", "Shangyu City", "Shengzhou City", "Shaoxing County", "Xinchang County", "Other"] },

            { "name": "Jinhua", "area": ["Wucheng District", "Jindong District", "Lanxi City", "Yiwu City", "Dongyang City", "Yongkang City", "Wuyi County", "Pujiang County", "Pan'an County", "Other"] },

            { "name": "Quzhou", "area": ["Kecheng District", "Qujiang District", "Jiangshan City", "Longyou County", "Changshan County", "Kaihua County", "Other"] },

            { "name": "Zhoushan", "area": ["Dinghai District", "Putuo District", "Daishan County", "Shengsi County", "Other"] },

            { "name": "Taizhou", "area": ["Jiaojiang District", "Huangyan District", "Luqiao District", "Linhai City", "Wenling City", "Yuhuan County", "Tiantai County", "Xianju County", "Sanmen County", "Other"] },

            { "name": "Lishui", "area": ["Liandu District", "Longquan City", "Jinyun County", "Qingtian County", "Yunhe County", "Suichang County", "Songyang County", "Qingyuan County", "Jingning Yi Autonomous County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Anhui", "city": [

            { "name": "Hefei", "area": ["Luyang District", "Yaohai District", "Laoshan District", "Baohe District", "Changfeng County", "Feidong County", "Feixi County", "Other"] },

            { "name": "Wuhu", "area": ["Jinghu District", "Yijiang District", "Jiujiang District", "Sanshan District", "Wuhu County", "Nanling County", "Fanchang County", "Other"] },

            { "name": "Bengbu", "area": ["Bengshan District", "Longzihu District", "Yuhui District", "Huaishang District", "Huaiyuan County", "Guzhen County", "Wuhe County", "Other"] },

            { "name": "Huainan", "area": ["Tianjia'an District", "Datong District", "Xiejiaji District", "Bagongshan District", "Panji District", "Fengtai County", "Other"] },

            { "name": "Ma'anshan", "area": ["Yushan District", "Huashan District", "Jinjiazhuang District", "Dangtu County", "Other"] },

            { "name": "Huaibei", "area": ["Xiangshan", "Duji District", "Lieshan District", "Suixi County", "Other"] },

            { "name": "Tongling", "area": ["Tongguanshan District", "Shizishan District", "Suburbs", "Tongling County", "Other"] },

            { "name": "Anqing", "area": ["Yingjiang District", "Daguan District", "Yixiu District", "Tongcheng City", "Susong County", "Zongyang County", "Taihu County", "Huaining County", "Yuexi County", "Wangjiang County", "Qianshan County", "Other"] },

            { "name": "Huangshan", "area": ["Tunxi District", "Huangshan District", "Huizhou District", "Xiuning County", "She County", "Qimen County", "Ji County", "Other"] },

            { "name": "Chuzhou District", "area": ["Langya District", "Nanqiao District", "Tianchang City", "Mingguang City", "Quanjiao County", "Lai'an County", "Dingyuan County", "Fengyang County", "Other"] },

            { "name": "Fuyang", "area": ["Yingzhou District", "Yingdong District", "Yingquan District", "Jieshou City", "Linquan County", "Yingshang County", "Funan County", "Taihe County", "Other"] },

            { "name": "Suzhou", "area": ["Yongqiao District", "Xiao County", "Si County", "Dangshan County", "Lingbi County", "Other"] },

            { "name": "Chaohu", "area": ["Juchao District", "Hanshan County", "Wuwei County", "Lujiang County", "He county", "Other"] },

            { "name": "Lu'an", "area": ["Jin'an District", "Yu'an District", "Shou County", "Huoshan County", "Huoqiu County", "Shucheng County", "Jinzhai County", "Other"] },

            { "name": "Bozhou", "area": ["Qiaocheng District", "Lixin County", "Woyang County", "Mengcheng County", "Other"] },

            { "name": "Chizhou", "area": ["Guichi District", "Dongzhi County", "Shitai County", "Qingyang County", "Other"] },

            { "name": "Xuancheng", "area": ["Xuanzhou District", "Ningguo City", "Guangde County", "Langxi County", "Jing County", "Jingde County", "Jixi County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Fujian", "city": [

            { "name": "Fuzhou", "area": ["Gulou District", "Taijiang District", "Cangshan District", "Mawei District", "Jin'an District", "Fuqing City", "Changle City", "Minhou County", "Minqing County", "Yongtai County", "Lianjiang County", "Luoyuan County", "Pingtan County", "Other"] },

            { "name": "Xiamen", "area": ["Siming District", "Haishu District", "Huli District", "Jimei District", "Tong'an District", "Xiang'an District", "Other"] },

            { "name": "Putian", "area": ["Chengxiang District", "Hanjiang District", "Licheng District", "Xiuyu District", "Xianyou County", "Other"] },

            { "name": "Sanming", "area": ["Meilie District", "Sanyuan District", "Yong'an City", "Mingxi County", "Jiangle County", "Datian County", "Ninghua County", "Jianning County", "Sha County", "Youxi County", "Qingliu County", "Taining County", "Other"] },

            { "name": "Quanzhou", "area": ["Licheng District", "Fengze District", "Luojiang District", "Quangang District", "Shishi City", "Jinjiang City", "Nan'an City", "Hui'an County", "Yongchun County", "Anxi County", "Dehua County", "Jinmen County", "Other"] },

            { "name": "Zhangzhou", "area": ["Xiangcheng District", "Longwen District", "Longhai City", "Pinghe County", "Nanjing County", "Zhao'an County", "Zhangpu County", "Hua'an County", "Dongshan County", "Changtai County", "Yunxiao County", "Other"] },

            { "name": "Nanping", "area": ["Yanping District", "Jian'ou City", "Shaowu City", "Wuyishan City", "Jianyang City", "Songxi County", "Guangze County", "Shunchang County", "Pucheng County", "Zhenghe County", "Other"] },

            { "name": "Longyan", "area": ["Xinluo District", "Zhangping City", "Changting County", "Wuping County", "Shanghang County", "Yongding County", "Liancheng County", "Other"] },

            { "name": "Ningde", "area": ["Jiaocheng District", "Fu'an City", "Fuding City", "Shouning County", "Xiapu County", "Zherong County", "Pingnan County", "Gutian County", "Zhouning County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Jiangxi", "city": [

            { "name": "Nanchang", "area": ["Donghu District", "Xihu District", "Qingyunpu District", "Wanli District", "Qingshanhu District", "Xinjian County", "Nanchang County", "Jinxian County", "Anyi County", "Other"] },

            { "name": "Jingdezhen", "area": ["Zhushan District", "Changjiang District", "Leping City", "Fuliang County", "Other"] },

            { "name": "Pingxiang", "area": ["Anyuan District", "Xiangdong District", "Lianhua County", "Shangli County", "Luxi County", "Other"] },

            { "name": "Jiujiang", "area": ["Xunyang District", "Lushan District", "Ruichang City", "Jiujiang County", "Xingzi County", "Wuning County", "Pengze County", "Yongxiu County", "Xiushui County", "Hukou County", "De'an County", "Duchang County", "Other"] },

            { "name": "Xinyu", "area": ["Yushui District", "Fenyi County", "Other"] },

            { "name": "Yingtan", "area": ["Yuehu District", "Guixi City", "Yujiang County", "Other"] },

            { "name": "Ganzhou", "area": ["Zhanggong District", "Ruijin City", "Nankang City", "Shicheng County", "Anyuan County", "Gan County", "Ningdu County", "Xunwu County", "Xingguo County", "Dingnan County", "Shangyou County", "Yudu County", "Longnan County", "Chongyi County", "Xinfeng County", "Quannan County", "Dayu County", "Huichang County", "Other"] },

            { "name": "Ji'an", "area": ["Jizhou District", "Qingyuan District", "Jinggangshan City", "Ji'an County", "Yongfeng County", "Yongxin County", "Xingan County", "Taihe County", "Xiajiang County", "Suichuan County", "Anfu County", "Jishui County", "Wan'an County", "Other"] },

            { "name": "Yichun", "area": ["Yuanzhou District", "Fengcheng City", "Zhangshu City", "Gao'an City", "Tonggu County", "Jing'an County", "Yifeng County", "Fengxin County", "Wanzai County", "Shanggao County", "Other"] },

            { "name": "Fuzhou", "area": ["Linchuan District", "Nanfeng County", "Le'an County", "Jinxi County", "Nancheng County", "Dongxiang County", "Zixi County", "Yihuang County", "Guangchang County", "Lichuan County", "Chongren County", "Other"] },

            { "name": "Shangrao", "area": ["Xinzhou District", "Dexing City", "Shangrao County", "Guangfeng County", "Poyang County", "Wuyuan County", "Qianshan County", "Yugan County", "Hengfeng County", "Yiyang County", "Yushan County", "Wannian County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Shandong", "city": [

            { "name": "Jinan", "area": ["Central District", "Lixia District", "Tianqiao District", "Huaiyin District", "Licheng District", "Changqing District", "Zhangqiu City", "Pingyin County", "Jiyang County", "Shanghe County", "Other"] },

            { "name": "Qingdao", "area": ["City Southern District", "City Northern District", "Chengyang District", "Sifang District", "Licang District", "Huangdao District", "Laoshan District", "Jiaonan City", "Jiaozhou City", "Pingdu City", "Laixi City", "Jimo City", "Other"] },

            { "name": "Zibo", "area": ["Zhangdian District", "Linzi District", "Zichuan District", "Boshan District", "Zhoucun District", "Huantai County", "Gaoqing County", "Yiyuan County", "Other"] },

            { "name": "Zaozhuang", "area": ["Central District", "Shanting District", "Yicheng District", "Taierzhuang District", "Xuecheng District", "Tengzhou City", "Other"] },

            { "name": "Dongying", "area": ["Dongying District", "Hekou District", "Kenli County", "Guangrao County", "Lijin County", "Other"] },

            { "name": "Yantai", "area": ["Zhifu District", "Fushan District", "Muping District", "Laishan District", "Longkou City", "Laiyang City", "Laizhou City", "Zhaoyuan City", "Penglai City", "Qixia City", "Haiyang City", "Long Island County", "Other"] },

            { "name": "Weifang", "area": ["Weicheng Qu", "Hanting District", "Fangzi District", "Kuiwen District", "Qingzhou City", "Zhucheng", "Shouguang City", "Anqiu City", "Gaomi City", "Changyi City", "Changle County", "Linqu County", "Other"] },

            { "name": "Jining", "area": ["Central District", "Rencheng District", "Qufu City", "Yanzhou City", "Zoucheng City", "Yutai County", "Jinxiang County", "Jiaxiang County", "Weishan County", "Wenshang County", "Yishui County", "Liangshan County", "Other"] },

            { "name": "Taian", "area": ["Taishan District", "Daiyue District", "Xintai City", "Feicheng city", "Ningyang County", "Dongping County", "Other"] },

            { "name": "Weihai", "area": ["Huancui District", "Rushan City", "Wendeng City", "Rongcheng City", "Other"] },

            { "name": "Rizhao", "area": ["Donggang District", "Lanshan District", "Wulian County", "Ju County", "Other"] },

            { "name": "Laiwu", "area": ["Laicheng District", "Tongcheng District", "Other"] },

            { "name": "Linyi", "area": ["Lanshan District", "Luozhuang District", "Hedong District", "Yinan County", "Tancheng County", "Yishui County", "Cangshan County", "Fei County", "Pingyi County", "Junan County", "Mengyin County", "Linshu County", "Other"] },

            { "name": "Dezhou", "area": ["Decheng District", "Leling City", "Yucheng city", "Ling County", "Ningjin County", "Qihe County", "Wucheng County", "Qingyun County", "Pingyuan County", "Xiajin County", "Linyi County", "Other"] },

            { "name": "Liaocheng", "area": ["Dongchangfu District", "Linqing City", "Gaotang County", "Yanggu County", "Chiping County", "Shen County", "Dong'a County", "Guan County", "Other"] },

            { "name": "Binzhou", "area": ["Bincheng District", "Zouping County", "Zhanhua County", "Huimin County", "Boxing County", "Yangxin County", "Wudi County", "Other"] },

            { "name": "Heze", "area": ["Mudan District", "Juancheng County", "Shan county", "Yuncheng County", "Cao County", "Dingtao County", "Juye County", "Dongming County", "Chengwu County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Henan", "city": [

            { "name": "Zhengzhou", "area": ["Zhongyuan District", "Jinshui District", "Erqi District", "Guancheng Hui Nationality District", "Shangxin District", "Huiji District", "Gongyi City", "Xinzheng City", "Xinmi City", "Dengfeng City", "Xingyang City", "Zhongmu County", "Other"] },

            { "name": "Kaifeng", "area": ["Gulou District", "Longting District", "Shunhe Hui Nationality District", "Wangwangtai District", "Jinming District", "Kaifeng County", "Weishi County", "Lankao County", "Qi County", "Tongxu County", "Other"] },

            { "name": "Luoyang", "area": ["Xigong District", "Laocheng District", "Jianxi District", "Chanhe Hui Nationality Area", "Luolong District", "Jili District", "Yanshi City", "Mengjin County", "Ruyang County", "Yichuan County", "Luoning County", "Song County", "Yiyang County", "Xin'an County", "Luanchuan County", "Other"] },

            { "name": "Pingdingshan", "area": ["Xinhua District", "Weidong District", "Zhanhe District", "Shilong District", "Ruzhou City", "Wugang City", "Baofeng County", "Ye County", "Jia County", "Lushan County", "Other"] },

            { "name": "Anyang", "area": ["Beiguan District", "Wenfeng District", "Yindu District", "Long'an District", "Linzhou City", "Anyang County", "Hua County", "Neihuang County", "Tangyin County", "Other"] },

            { "name": "Hebi", "area": ["Qibin District", "Shancheng District", "Heshan District", "Xun County", "Qi County", "Other"] },

            { "name": "Xinxiang", "area": ["Weibin District", "Hongqi District", "Fengquan District", "Muye District", "Weihui City", "Huixian City", "Xinxiang County", "Huojia County", "Yuanyang County", "Changyuan County", "Fengqiu County", "Yanjin County", "Other"] },

            { "name": "Jiaozuo", "area": ["Jiefang District", "Zhongzhan District", "Macun District", "Shanyang District", "Qinyang City", "Mengzhou City", "Xiuwu County", "Wen County", "Wuzhi County", "Bo'ai County", "Other"] },

            { "name": "Puyang", "area": ["Hualong District", "Shuyang County", "Nanle County", "Taiqian County", "Qingfeng County", "Fan County", "Other"] },

            { "name": "Xu Chang", "area": ["Weidu District", "Yuzhou City", "Changge City", "Xuchang County", "Yanling County", "Xiangcheng County", "Other"] },

            { "name": "Luohe", "area": ["Yuanhui District", "Yancheng District", "Zhaoling District", "Linying County", "Wuyang County", "Other"] },

            { "name": "Sanmenxia", "area": ["Hubin District", "Yima City", "Lingbao City", "Mianchi County", "Lushi County", "Shan County", "Other"] },

            { "name": "Nanyang", "area": ["Wolong District", "Wancheng District", "Dengzhou City", "Tongbai County", "Fangcheng County", "Xichuan County", "Zhenping County", "Tanghe County", "Nanzhao County", "Neixiang County", "Xinye County", "Sheqi County", "Xixia County", "Other"] },

            { "name": "Shangqiu", "area": ["Liangyuan District", "Suiyang District", "Yongcheng City", "Ningling County", "Yucheng County", "Minquan County", "Xiayi County", "Zhecheng County", "Sui County", "Other"] },

            { "name": "Xinyang", "area": ["Shihe District", "Pingqiao District", "Huangchuan County", "Huaibin County", "Xi County", "Xin County", "Shangcheng County", "Gushi County", "Luoshan County", "Guangshan County", "Other"] },

            { "name": "Zhoukou", "area": ["Chuanhui District", "Xiangcheng City", "Shangshui County", "Huaiyang County", "Taikang County", "Luyi County", "Xihua County", "Fugou County", "Shenqiu County", "Dancheng County", "Other"] },

            { "name": "Zhumadian", "area": ["Yicheng District", "Queshan County", "Xincai County", "Shangcai County", "Xiping County", "Biyang County", "Pingyu County", "Runan County", "Suiping County", "Zhengyang County", "Other"] },

            { "name": "Jiaozuo", "area": ["Jiyuan City", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Hubei", "city": [

            { "name": "Wuhan", "area": ["Jiang'an District", "Wuchang District", "Jianghan District", "Qiaokou District", "Hanyang District", "Qingshan District", "Hongshan District", "Dongxihu District", "Hannan District", "Caidian District", "Jiangxia District", "Huangpi District", "Xinzhou District", "Other"] },

            { "name": "Huangshi", "area": ["Huangshi Port Area", "Xisaishan District", "Lower Land Area", "Tieshan District", "Daye City", "Yangxin County", "Other"] },

            { "name": "Shiyan", "area": ["Zhangwan District", "Maojian District", "Danjiangkou City", "Yun County", "Zhushan County", "Fang County", "Yunxi County", "Zhuxi County", "Other"] },

            { "name": "Jingzhou", "area": ["Shashi District", "Jingzhou District", "Honghu City", "Shishou City", "Songzi City", "Jianli County", "Gong'an County", "Jiangling County", "Other"] },

            { "name": "Yichang", "area": ["Xiling District", "Wujiagang District", "Dianjun District", "Xiaoting District", "Yiling District", "Yidu City", "Dangyang City", "Zhijiang City", "Zigui County", "Yuan'an County", "Xingshan County", "Wufeng Tujia Autonomous County", "Changyang Tujia Autonomous County", "Other"] },

            { "name": "Xiangfan", "area": ["Xiangcheng District", "Fancheng District", "Xiangyang District", "Laohekou City", "Zaoyang City", "Yicheng City", "Nanzhang County", "Gucheng County", "Baokang County", "Other"] },

            { "name": "Ezhou", "area": ["Echeng District", "Huarong District", "Liangzihu District", "Other"] },

            { "name": "Jingmen", "area": ["Dongbao District", "Duodao District", "Zhongxiang City", "Jingshan County", "Shayang County", "Other"] },

            { "name": "Xiaogan", "area": ["Xiaonan District", "Yingcheng City", "Anlu City", "Hanchuan City", "Yunmeng County", "Dawu County", "Xiaochang County", "Other"] },

            { "name": "Huanggang", "area": ["Huangzhou District", "Macheng", "Wuxue City", "Hong'an County", "Luotian County", "Xishui County", "Qichun County", "Huangmei County", "Yingshan County", "Tuanfeng County", "Other"] },

            { "name": "Xianning", "area": ["Xian'an District", "Chibi City", "Jiayu County", "Tongshan County", "Chongyang County", "Tongcheng County", "Other"] },

            { "name": "Suizhou", "area": ["Zengdu District", "Guangshui City", "Other"] },

            { "name": "Enshi Tujia and Miao Autonomous Prefecture", "area": ["Enshi City", "Lichuan City", "Jianshi County", "Laifeng County", "Badong County", "Hefeng County", "Xuan'en County", "Xianfeng County", "Other"] },

            { "name": "Xiantao", "area": ["Xiantao"] },

            { "name": "Tianmen", "area": ["Tianmen"] },

            { "name": "Qianjiang", "area": ["Qianjiang"] },

            { "name": "Shennongjia Forest Area", "area": ["Shennongjia Forest Area"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Hu'nan", "city": [

            { "name": "Changsha", "area": ["Yuelu District", "Furong District", "Tianxin District", "Kaifu District", "Yuhua District", "Liuyang City", "Changsha County", "Wangcheng County", "Ningxiang County", "Other"] },

            { "name": "Zhuzhou", "area": ["Tianyuan District", "Hetang District", "Lusong District", "Shifeng District", "Liling City", "Zhuzhou County", "Yanling County", "Chaling County", "You County", "Other"] },

            { "name": "Xiangtan", "area": ["Yuetang District", "Yuhu District", "Xiangxiang City", "Shaoshan City", "Xiangtan County", "Other"] },

            { "name": "Hengyang", "area": ["Yanfeng District", "Zhuhui District", "Shigu District", "Zhengxiang District", "Nanyue District", "Leiyang City", "Changning City", "Hengyang County", "Hengdong County", "Hengshan County", "Hengnan County", "Qidong County", "Other"] },

            { "name": "Shaoyang", "area": ["Shuangqing District", "Daxiang District", "Beita District", "Wugang City", "Shaodong County", "Dongkou County", "Xinshao County", "Suining County", "Xinning County", "Shaoyang County", "Longhui County", "Chengbu Miao Autonomous County", "Other"] },

            { "name": "Yueyang", "area": ["Yueyang Building District", "Yunxi District", "Junshan District", "Linxiang City", "Miluo City", "Yueyang County", "Xiangyin County", "Pingjiang County", "Huarong County", "Other"] },

            { "name": "Changde", "area": ["Wuling District", "Dingcheng District", "Jinshi City", "Li County", "Linli County", "Taoyuan County", "Hanshou County", "Anxiang County", "Shimen County", "Other"] },

            { "name": "Zhangjiajie", "area": ["Yongding District", "Wulingyuan District", "Cili County", "Sangzhi County", "Other"] },

            { "name": "Yiyang", "area": ["Heshan District", "Ziyang District", "Yuanjiang City", "Taojiang County", "Nan County", "Anhua County", "Other"] },

            { "name": "Chenzhou", "area": ["Beihu District", "Suxian District", "Zixing City", "Yizhang County", "Yucheng County", "Anren County", "Jiahe County", "Linwu County", "Guidong County", "Yongxing County", "Guiyang County", "Other"] },

            { "name": "Yongzhou", "area": ["Lengshuitan District", "Lingling District", "Qiyang County", "Lanshan County", "Ningyuan County", "Xintian County", "Dong'an County", "Jiangyong County", "Dao County", "Shuangpai County", "Jianghua Yao Autonomous County", "Other"] },

            { "name": "Huaihua", "area": ["Hecheng District", "Hongjiang City", "Huitong County", "Yanling County", "Chenxi County", "Xupu County", "Zhongfang County", "Xinhuang Dong Autonomous County", "Minjiang Dong Autonomous County", "Channel Dong Autonomous County", "Jingzhou Miao and Dong Autonomous County", "Mayang Miao Autonomous County", "Other"] },

            { "name": "Bottom", "area": ["Comet area", "Lengshuijiang City", "Lianyuan City", "Xinhua County", "Shuangfeng County", "Other"] },

            { "name": "Xiangxi Tujia and Miao Autonomous Prefecture", "area": ["Jishou City", "Guzhang County", "Longshan County", "Yongshun County", "Fenghuang County", "Luxi County", "Baojing County", "Huayuan County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Guangdong", "city": [

            { "name": "Guangzhou", "area": ["Yuexiu District", "Liwan District", "Haizhu District", "Tianhe District", "Baiyun District", "Huangpu District", "Fanyu District", "Huadu District", "Nansha District", "Luogang District", "Zengcheng City", "Conghua City", "Other"] },

            { "name": "Shenzhen", "area": ["Futian District", "Luohu District", "Nanshan District", "Bao'an District", "Longgang District", "Yantian District", "Other"] },

            { "name": "Dongguan", "area": ["Guancheng", "Changping", "Tangxia", "Tangxia", "Tangxia", "Other"] },

            { "name": "Zhongshan", "area": ["Zhongshan"] },

            { "name": "Chaozhou", "area": ["Xiangqiao District", "Chao'an County", "Raoping County", "Other"] },

            { "name": "Jieyang", "area": ["Rongcheng District", "Jiedong County", "Jiexi County", "Huilai County", "Puning City", "Other"] },

            { "name": "Yunfu", "area": ["Yuncheng District", "Xinxing County", "Yunan County", "Yun'an County", "Luoding City", "Other"] },

            { "name": "Zhuhai", "area": ["Xiangzhou District", "Doumen District", "Jinwan District", "Other"] },

            { "name": "Shantou", "area": ["Jinping District", "Haojiang District", "Longhu District", "Chaoyang District", "Chaonan District", "Chenghai District", "Nan'ao County", "Other"] },

            { "name": "Shaoguan", "area": ["Zhenjiang District", "Wujiang District", "Qujiang District", "Lechang City", "Nanxiong City", "Shixing County", "Renhua County", "Wengyuan County", "Xinfeng County", "Ruyuan Yao Autonomous County", "Other"] },

            { "name": "Foshan", "area": ["Chancheng District", "Nanhai District", "Shunde District", "Sanshui District", "Gaoming District", "Other"] },

            { "name": "Jiangmen", "area": ["Pengjiang District", "Jianghai District", "Xinhui District", "Enping City", "Taishan City", "Kaiping City", "Heshan City", "Other"] },

            { "name": "Zhanjiang", "area": ["Chikan District", "Xiashan District", "Potou District", "Mazhang District", "Wuchuan City", "Lianjiang City", "Leizhou City", "Suixi County", "Xuwen County", "Other"] },

            { "name": "Maoming", "area": ["Maonan District", "Maogang District", "Huazhou City", "Xinyi City", "Gaozhou", "Dianbai County", "Other"] },

            { "name": "Zhaoqing", "area": ["Duanzhou District", "Dinghu District", "Gaoyao City", "Sihui City", "Guangning County", "Huaiji County", "Fengkai County", "Deqing County", "Other"] },

            { "name": "Huizhou", "area": ["Huicheng District", "Huiyang District", "Boluo County", "Huidong County", "Longmen County", "Other"] },

            { "name": "Meizhou", "area": ["Meijiang District", "Xingning City", "Mei County", "Dapu County", "Fengshun County", "Wuhua County", "Pingyuan County", "Jiaoling County", "Other"] },

            { "name": "Shanwei", "area": ["Urban Area", "Lufeng City", "Haifeng County", "Luhe County", "Other"] },

            { "name": "Heyuan", "area": ["Yuancheng District", "Zijin County", "Longchuan County", "Lianping County", "Heping County", "Dongyuan County", "Other"] },

            { "name": "Yangjiang", "area": ["Jiangcheng District", "Yangchun City", "Yangxi County", "Yangdong County", "Other"] },

            { "name": "Qingyuan", "area": ["Qingcheng District", "Yingde City", "Lianzhou City", "Fogang County", "Yangshan County", "Qingxin County", "Lianshan Zhuang and Yao Autonomous County", "Liannan Yao Autonomous County", "Other"] }

        ]
    },

    {
        "name": "Guangxi", "city": [

            { "name": "Nanning", "area": ["Qingxiu District", "Xingning District", "Xixiangtang District", "Liangqing District", "Jiangnan District", "Yongning District", "Wuming County", "Longan County", "Mashan County", "Shanglin County", "Binyang County", "Heng County", "Other"] },

            { "name": "Liuzhou", "area": ["Chengzhong District", "Yufeng District", "Liubei District", "Liunan District", "Liujiang County", "Liucheng County", "Luzhai County", "Rong'an County", "Rongshui Miao Autonomous County", "Sanjiang Dong Autonomous County", "Other"] },

            { "name": "Guilin", "area": ["Xiangshan District", "Xiufeng District", "Stacking area", "Qixing District", "Yanshan District", "Yangshuo County", "Lingui County", "Lingchuan County", "Quanzhou County", "Pingle County", "Xing'an County", "Guanyang County", "Lipu County", "Ziyuan County", "Yongfu County", "Longsheng Multinational Autonomous County ", "Gongcheng Yao Autonomous County", "Other"] },

            { "name": "Wuzhou", "area": ["Wanxiu District", "Dieshan District", "Changzhou District", "Cenxi City", "Cangwu County", "Teng County", "Mengshan County", "Other"] },

            { "name": "Beihai", "area": ["Haicheng District", "Yinhai District", "Tieshan Port Area", "Hepu County", "Other"] },

            { "name": "Fangchenggang", "area": ["Port Area", "Fangcheng District", "Dongxing City", "Shangsi County", "Other"] },

            { "name": "Qinzhou", "area": ["Qinnan District", "Qinbei District", "Lingshan County", "Pubei County", "Other"] },

            { "name": "Guigang", "area": ["Gangbei District", "Gangnam District", "Qintang District", "Guiping City", "Pingnan County", "Other"] },

            { "name": "Yulin", "area": ["Yuzhou District", "Beiliu City", "Rong County", "Luchuan County", "Bobai County", "Xingye County", "Other"] },

            { "name": "Baise", "area": ["Youjiang District", "Lingyun County", "Pingguo County", "Xilin County", "Leye County", "Debao County", "Tianlin County", "Tianyang County", "Jingxi County", "Tiandong County", "Napo County", "Longlin Multinational Autonomous County", "Other"] },

            { "name": "Hezhou", "area": ["Babu District", "Zhongshan County", "Zhaoping County", "Fuchuan Yao Autonomous County", "Other"] },

            { "name": "Hechi", "area": ["Jinchengjiang District", "Yizhou City", "Tian'e County", "Fengshan County", "Nandan County", "Donglan County", "Du'an Yao Autonomous County", "Luocheng Mulam Autonomous County", "Bama Yao Autonomous County", "Huanjiang Maonan Autonomous County", "Dahua Yao Autonomous County", "Other"] },

            { "name": "Guest", "area": ["Xingbin District", "Heshan City", "Xiangzhou County", "Wuxuan County", "Xincheng County", "Jinxiu Yao Autonomous County", "Other"] },

            { "name": "Chongzuo", "area": ["Jiangzhou District", "Pingxiang City", "Ningming County", "Fusui County", "Longzhou County", "Daxin County", "Tiandeng County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Hainan", "city": [

            { "name": "Haikou", "area": ["Longhua District", "Xiuying District", "Qiongshan District", "Meilan District", "Other"] },

            { "name": "Sanya", "area": ["Sanya City", "Other"] },

            { "name": "Wuzhishan", "area": ["Wuzhishan"] },

            { "name": "Qionghai", "area": ["Qionghai"] },

            { "name": "Danzhou", "area": ["Danzhou"] },

            { "name": "Wenchang", "area": ["Wenchang"] },

            { "name": "Wanning", "area": ["Wanning"] },

            { "name": "Dongfang", "area": ["Dongfang"] },

            { "name": "Chengmai County", "area": ["Chengmai County"] },

            { "name": "Ding'an County", "area": ["Ding'an County"] },

            { "name": "Tunchang County", "area": ["Tunchang County"] },

            { "name": "Lingao County", "area": ["Lingao County"] },

            { "name": "Baisha Li Autonomous County", "area": ["Baisha Li Autonomous County"] },

            { "name": "Changjiang Li Autonomous County", "area": ["Changjiang Li Autonomous County"] },

            { "name": "Ledong Li Autonomous County", "area": ["Ledong Li Autonomous County"] },

            { "name": "Lingshui Li Autonomous County", "area": ["Lingshui Li Autonomous County"] },

            { "name": "Baoting Li and Miao Autonomous County", "area": ["Baoting Li and Miao Autonomous County"] },

            { "name": "Qiongzhong Li and Miao Autonomous County", "area": ["Qiongzhong Li and Miao Autonomous County"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Chongqing", "city": [

            { "name": "Chongqing", "area": ["Yuzhong District", "Dadukou District", "Jiangbei District", "Nan'an District", "Beibei District", "Yubei District", "Banan District", "Changshou District", "Shuangqiao District", "Shapingba District", "Wansheng District", "Wanzhou District", "Fuling District", "Qianjiang District", "Yongchuan District", "Hechuan District", "Jiangjin District", "Jiulongpo District", "Nanchuan District", "Qijiang County", "Tongnan District", "Rongchang County", "Bishan County", "Dazu County", "Tongliang County", "Liangping County", "Kai County", "Zhong County", "Chengkou County", "Dianjiang County", "Wulong County", "Fengdu County", "Fengjie County", "Yunyang County", "Wuxi County", "Wushan County", "Shizhu Tujia Autonomous County", "Xiushan Tujia and Miao Autonomous County", "Xiangyang Tujia and Miao Autonomous County", "Pengshui Miao and Tujia Autonomous County", "Other"] }

        ]
    },

    {
        "name": "Sichuan", "city": [

            { "name": "Chengdu", "area": ["Qingyang District", "Jinjiang District", "Jinniu District", "Wuhou District", "Chenghua District", "Longquanyi District", "Qingbaijiang District", "Xindu District", "Wenjiang District", "Dujiangyan City", "Pengzhou City", "Qionglai City", "Chongzhou City", "Jintang County", "Pi County", "Xinjin County", "Shuangliu County", "Pujiang County", "Dayi County", "Other"] },

            { "name": "Zigong", "area": ["Daan District", "Ziliujing District", "Gongjing District", "Yantan District", "Rong County", "Fushun County", "Other"] },

            { "name": "Panzhihua", "area": ["Renhe District", "Miyi County", "Yanbian County", "Eastern District", "Western District", "Other"] },

            { "name": "Luzhou", "area": ["Jiangyang District", "Naxi District", "Longmatan District", "Lu County", "Hejiang County", "Xuyong County", "Gulin County", "Other"] },

            { "name": "Deyang", "area": ["Jingyang District", "Guanghan City", "Shifang City", "Mianzhu City", "Luojiang County", "Zhongjiang County", "Other"] },

            { "name": "Mianyang", "area": ["Fucheng District", "Youxian District", "Jiangyou City", "Yanting County", "Santai County", "Pingwu County", "An County", "Zitong County", "Beichuan Qiang Autonomous County", "Other"] },

            { "name": "Guangyuan", "area": ["Yuanba District", "Chaotian District", "Qingchuan County", "Wangcang County", "Jiange County", "Cangxi County", "Shizhong District", "Other"] },

            { "name": "Suining", "area": ["Chuanshan District", "Anju District", "Shehong County", "Pengxi County", "Daying County", "Other"] },

            { "name": "Neijiang", "area": ["Shizhong District", "Dongxing District", "Zizhong County", "Longchang County", "Weiyuan County", "Other"] },

            { "name": "Leshan", "area": ["Shizhong District", "Wutongqiao District", "Shawan District", "Jinkouhe District", "Emeishan City", "Jiajiang County", "Jingyan County", "Qianwei County", "Muchuan County", "Mabian Yi Autonomous County", "Yibian Yi Autonomous County", "Other"] },

            { "name": "Nanchong", "area": ["Shunqing District", "Gaoping District", "Jialing District", "Langzhong City", "Yingshan County", "Peng'an County", "Yilong County", "Nanbu County", "Xichong County", "Other"] },

            { "name": "Meishan", "area": ["Dongpo District", "Renshou County", "Pengshan County", "Hongya County", "Danling County", "Qingshen County", "Other"] },

            { "name": "Yibin", "area": ["Cuiping District", "Yibin County", "Xingwen County", "Nanxi County", "Gong County", "Changning County", "Gao County", "Jiang'an County", "Junlian County", "Pingshan County", "Other"] },

            { "name": "Guang'an", "area": ["Guang'an District", "Huaying City", "Yuechi County", "Linshui County", "Wusheng County", "Other"] },

            { "name": "Dazhou", "area": ["Tongchuan District", "Wanyuan City", "Daxian", "Qu County", "Xuanhan County", "Kaijiang County", "Dazhu County", "Other"] },

            { "name": "Yaan", "area": ["Yucheng District", "Lushan County", "Shimian County", "Mingshan County", "Tianquan County", "Yingjing County", "Baoxing County", "Hanyuan County", "Other"] },

            { "name": "Bazhong", "area": ["Bazhou District", "Nanjiang County", "Pingchang County", "Tongjiang County", "Other"] },

            { "name": "Ziyang", "area": ["Yanjiang District", "Jianyang City", "Anyue County", "Lezhi County", "Other"] },

            { "name": "Aba Tibetan and Qiang Autonomous Prefecture", "area": ["Malcom County", "Jiuzhaigou County", "Hongyuan County", "Wenchuan County", "Aba County", "Li County", "Ruoergai County", "Xiaojin County", "Heishui County", "Jinchuan County", "Songpan County", "Xiangtang County", "Mao County", "Other"] },

            { "name": "Ganzi Tibetan Autonomous Prefecture", "area": ["Kangding County", "Danba County", "Luhuo County", "Jiulong County", "Ganzi County", "Yajiang County", "Xinlong County", "Daofu County", "Baiyu County", "Litang County", "Dege County", "Xiangcheng County", "Shiqu County", "Daocheng County", "Seda County", "Batang County", "Luding County", "Derong County", "Other"] },

            { "name": "Liangshan Yi Autonomous Prefecture", "area": ["Xichang City", "Meigu County", "Zhaojue County", "Jinyang County", "Ganluo County", "Butuo County", "Leibo County", "Puge County", "Ningnan County", "Xide County", "Huidong County", "Yuexi County", "Huili County", "Yanyuan County", "Dechang County", "Mianning County", "Muli Tibetan Autonomous County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Guizhou", "city": [

            { "name": "Guiyang", "area": ["Nanming District", "Yunyan District", "Huaxi District", "Wudang District", "Baiyun District", "Xiaohe District", "Qingzhen City", "Kaiyang County", "Xiuwen County", "Xifeng County", "Other"] },

            { "name": "Liupanshui", "area": ["Zhongshan District", "Shuicheng County", "Pan County", "Liuzhite District", "Other"] },

            { "name": "Zunyi", "area": ["Honghuagang District", "Huichuan District", "Chishui City", "Renhuai City", "Zunyi County", "Suiyang County", "Tongzi County", "Xishui County", "Fenggang County", "Zheng'an County", "Yuqing County", "Meitan County", "Daozhen Gelao and Miao Autonomous County", "Wuchuan Gelao and Miao Autonomous County", "Other"] },

            { "name": "Anshun", "area": ["Xixiu District", "Puding County", "Pingba County", "Zhenning Buyi and Miao Autonomous County", "Ziyun Buyi and Miao Autonomous County", "Guanling Buyi and Miao Autonomous County", "Other"] },

            { "name": "Tongren Area", "area": ["Tongren City", "Dejiang County", "Jiangkou County", "Sinan County", "Shiqian County", "Yuping Dong Autonomous County", "Songtao Miao Autonomous County", "Yinjiang Tujia and Miao Autonomous County", "Yanhe Tujia Autonomous County", "Wanshan Special Area", "Other"] },

            { "name": "Bijie Area", "area": ["Bijie City", "Qianxi County", "Dafang County", "Zhijin County", "Jinsha County", "Hezhang County", "Nayong County", "Weining Yi Hui and Miao Autonomous County", "Other"] },

            { "name": "Southwest Qian Buyi and Miao Autonomous Prefecture", "area": ["Xingyi City", "Wangmo County", "Xingren County", "Pu'an County", "Ceheng County", "Qinglong County", "Zhenfeng County", "Anlong County", "Other"] },

            { "name": "Southeast Qian Miao and Dong Autonomous Prefecture", "area": ["Kaili City", "Shibing County", "Congjiang County", "Jinping County", "Zhenyuan County", "Majiang County", "Taijiang County", "Tianzhu County", "Huangping County", "Rongjiang County", "Jianhe County", "Sansui County", "Leishan County", "Liping County", "Cengong County", "Danzhai County", "Other"] },

            { "name": "South Qian Buyi and Miao Autonomous Prefecture", "area": ["Duyun City", "Fuquan City", "Guiding County", "Huishui County", "Luodian County", "Chun'an County", "Libo County", "Longli County", "Pingtang County", "Changshun County", "Dushan County", "Sandu Shui Autonomous County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Yunnan", "city": [

            { "name": "Kunming", "area": ["Panlong District", "Wuhua District", "Guandu District", "Xishan District", "Dongchuan District", "Anning City", "Chenggong County", "Jinning County", "Fumin County", "Yiliang County", "Songming County", "Shilin Yi Autonomous County", "Luquan Yi and Miao Autonomous County", "Xundian Hui and Yi Autonomous County", "Other"] },

            { "name": "Qujing", "area": ["Qilin District", "Xuanwei City", "Malong County", "Zhanyi County", "Fuyuan County", "Luoping County", "Shizong County", "Luliang County", "Huize County", "Other"] },

            { "name": "Yuxi", "area": ["Hongta District", "Jiangchuan County", "Chengjiang County", "Tonghai County", "Huaning County", "Yimen County", "Eshan Yi Autonomous County", "Xinping Yi and Dong Autonomous County", "Yuanjiang Hani Dai and Yi Autonomous County", "Other"] },

            { "name": "Baoshan", "area": ["Longyang District", "Shidian County", "Tengchong County", "Longling County", "Changning County", "Other"] },

            { "name": "Zhaotong", "area": ["Zhaoyang District", "Ludian County", "Qiaojia County", "Yanjin County", "Daguan County", "Yongshan County", "Suijiang County", "Zhenxiong County", "Yiliang County", "Weixin County", "Shuifu County", "Other"] },

            { "name": "Lijiang", "area": ["Gucheng District", "Yongsheng County", "Huaping County", "Yulong Naxi Autonomous County", "Ninglang Yi Autonomous County", "Other"] },

            { "name": "Pu'er", "area": ["Simao District", "Pu'er Hani and Yi Autonomous County", "Mojiang Hani Autonomous County", "Jingdong Yi Autonomous County", "Jinggu Yi and Dai Autonomous County", "Zhenuan Yi Hani ad Lahu Autonomous County", "Jiangcheng Hani and Yi Autonomous County", "Menglian Dai Lahu and Wa Autonomous County", "Lancang Lagu Autonomous County", "Ximeng Wa Autonomous County", "Other"] },

            { "name": "Lincang", "area": ["Linxiang District", "Fengqing County", "Yun County", "Yongde County", "Zhenkang County", "Shuangjiang Lahu Wa Blang and Dai Autonomous County", "Gengma Dai and Wa Autonomous County", "Cangyuan Wa Autonomous County", "Other"] },

            { "name": "Dehong Dai and Jingpo Autonomous Prefecture", "area": ["Luxi City", "Ruili City", "Lianghe County", "Yingjiang County", "Longchuan County", "Other"] },

            { "name": "Nujiang Lisu Autonomous Prefecture", "area": ["Lushui County", "Fugong County", "Gongshan Dulong and Nu Autonomous County", "Lanping Baizu and Pumi Autonomous County", "Other"] },

            { "name": "Diqing Tibetan Autonomous Prefecture", "area": ["Shangri-La County", "Deqin County", "Weixi Lisu Autonomous County", "Other"] },

            { "name": "Dali Bai Autonomous Prefecture", "area": ["Dali City", "Xiangyun County", "Binchuan County", "Midu County", "Yongping County", "Yunlong County", "Eryuan County", "Jianchuan County", "Heqing County", "Yangbi Yi Autonomous County", "Nanjian Yi Autonomous County", "Weishan Yi and Hui Autonomous County", "Other"] },

            { "name": "Chuxiong Yi Autonomous Prefecture", "area": ["Chuxiong City", "Shuangbai County", "Muding County", "Nanhua County", "Yao'an County", "Dayao County", "Yongren County", "Yuanmou County", "Wuding County", "Lufeng County", "Other"] },

            { "name": "Honghe Hani and Yi Autonomous Prefecture", "area": ["Mengzi County", "Gejiu City", "Kaiyuan City", "LVchun County", "Jianshui County", "Shiping County", "Mile County", "Luxi County", "Yuanyang County", "Honghe County", "Jinping Miao Yao and Dai Autonomous County", "Hekou Yao Autonomous County", "Pingbian Miao Autonomous County", "Other"] },

            { "name": "Wenshan Zhuang and Miao Autonomous Prefecture", "area": ["Wenshan County", "Yanshan County", "Xichou County", "Malipo County", "Maguan County", "Qiubei County", "Guangnan County", "Funing County", "Other"] },

            { "name": "Xishuangbanna Dai Autonomous Prefecture", "area": ["Jinghong City", "Menghai County", "Mengla County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Tibet", "city": [

            { "name": "Lhasa", "area": ["Chengguan District", "Linzhou County", "Dangxiong County", "Nimu County", "Qushui County", "Duilongdeqing County", "Dazi County", "Mozhugongka County", "Other"] },

            { "name": "Naqu Area", "area": ["Naqu County", "Jiali County", "Biru county", "Nierong County", "Anduo County", "Shenzha County", "Suo County", "Bange County", "Baqing County", "Nima County", "Other"] },

            { "name": "Changdu Area", "area": ["Changdu County", "Jiangda County", "Gongjue County", "Leiwuqi County", "Dingqing County", "Chaya County", "Basu County", "Zuogong County", "Mangkang County", "Luolong County", "Bianba County", "Other"] },

            { "name": "Linzhi Area", "area": ["Linzhi County", "Gongbujiangda County", "Milin County", "Medog County", "Bomi County", "Chayu County", "Lang County", "Other"] },

            { "name": "Shannan Area", "area": ["Naidong County", "Chanang County", "Gongga County", "Sangri County", "Qiongjie County", "Qusong County", "Cuomei County", "Loza County", "Jiacha County", "Longzi County", "Cuona County", "Langkazi County", "Other"] },

            { "name": "Shigatse Area", "area": ["Shigatse City", "Nanmling County", "Jiangzi County", "Dingri County", "Sag'ya County", "Lazi County", "Angren County", "Xietongmen County", "Bailang County", "Renbu County", "Kangma County", "Dingjie County", "Zhongba County", "Yadong County", "Jilong County", "Nyalam County", "Saga County", "Gamba County", "Other"] },

            { "name": "Ali area", "area": ["Gar County", "Pulan County", "Zanda County", "Ritu County", "Geji County", "Gerze county", "Coqen County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Shaanxi", "city": [

            { "name": "Xi'an", "area": ["Lianhu District", "New Urban Area", "Beilin District", "Yanta District", "Baqiao District", "Weiyang District", "Yanliang District", "Lintong District", "Chang'an District", "Gaoling County", "Lantian County", "Hu County", "Zhouzhi County", "Other"] },

            { "name": "Tongchuan", "area": ["Yaozhou District", "Wangyi District", "Yintai District", "Yijun County", "Other"] },

            { "name": "Baoji", "area": ["Weibin District", "Jintai District", "Chencang District", "Qishan County", "Fengxiang County", "Long County", "Taibai County", "Linyou County", "Fufeng County", "Qianyang County", "Mei County", "Feng County", "Other"] },

            { "name": "Xianyang", "area": ["Qindu District", "Weicheng District", "Yangling District", "Xingping City", "Liquan County", "Jingyang County", "Yongshou County", "Sanyuan County", "Bin County", "Xunyi County", "Changwu County", "Qian County", "Wugong County", "Chunhua County", "Other"] },

            { "name": "Weinan", "area": ["Linyi District", "Hancheng City", "Huayin City", "Pucheng County", "Tongguan County", "Baishui County", "Chengcheng County", "Hua County", "Heyang County", "Fuping County", "Dali County", "Other"] },

            { "name": "Yan'an", "area": ["Baota District", "Ansai County", "Luochuan County", "Zichang County", "Huangling County", "Yanchuan County", "Fu County", "Yanchang County", "Ganquan County", "Yichuan County", "Zhidan County", "Huanglong County", "Wuqi County", "Other"] },

            { "name": "Hanzhong", "area": ["Hantai District", "Liuba County", "Zhenba County", "Chenggu County", "Nanzheng County", "Yang County", "Ningqiang County", "Foping County", "Mian County", "Xixiang County", "Lueyang County", "Other"] },

            { "name": "Yulin", "area": ["Yuyang District", "Qingjian County", "Suide County", "Shenmu County", "Jia County", "Fugu County", "Zizhou County", "Jingbian County", "Hengshan County", "Mizhi County", "Wubao County", "Dingbian County", "Other"] },

            { "name": "Ankang", "area": ["Hanbin District", "Ziyang County", "Langao County", "Xunyang County", "Zhenping County", "Pingli County", "Shiquan County", "Ningshan County", "Baihe County", "Hanyin County", "Other"] },

            { "name": "Shangluo", "area": ["Shangzhou District", "Zhen'an County", "Shanyang County", "Luonan County", "Shangnan County", "Danfeng County", "Zhashui County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Gansu", "city": [

            { "name": "Lanzhou", "area": ["Chengguan District", "Qilihe District", "Xigu District", "Anning District", "Honggu District", "Yongdeng County", "Gaolan County", "Yuzhong County", "Other"] },

            { "name": "Jiayuguan", "area": ["Jiayuguan City", "Other"] },

            { "name": "Jinchang", "area": ["Jinchuan District", "Yongchang County", "Other"] },

            { "name": "Baiyin", "area": ["Baiyin area", "Pingchuan District", "Jingyuan County", "Huining County", "Jingtai County", "Other"] },

            { "name": "Tianshui", "area": ["Qingshui County", "Qin'an County", "Gangu County", "Wushan County", "Zhangjiachuan Hui Autonomous County", "Beidao District", "Qincheng District", "Other"] },

            { "name": "Wuwei", "area": ["Liangzhou District", "Minqin County", "Gulang County", "Tianzhu Tibetan Autonomous County", "Other"] },

            { "name": "Jiuquan", "area": ["Suzhou District", "Yumen City", "Dunhuang City", "Jinta County", "Subei Mongolian Autonomous County", "Akesai Kazakh Autonomous County", "Anxi County", "Other"] },

            { "name": "Zhangye", "area": ["Ganzhou District", "Minle County", "Linze County", "Gaotai County", "Shandan County", "Sunan Yugu Autonomous County", "Other"] },

            { "name": "Qingyang", "area": ["Xifeng District", "Qingcheng County", "Huan County", "Huachi County", "Heshui County", "Zhengning County", "Ning County", "Zhenyuan County", "Other"] },

            { "name": "Pingliang", "area": ["Kongtong District", "Jingchuan County", "Lingtai County", "Chongxin County", "Huating County", "Zhuanglang County", "Jingning County", "Other"] },

            { "name": "Dingxi", "area": ["Anding District", "Tongwei County", "Lintao County", "Zhang County", "Min County", "Weiyuan County", "Longxi County", "Other"] },

            { "name": "Longnan", "area": ["Wudu District", "Cheng County", "Tanchang County", "Kang County", "Wen County", "Xihe County", "Li County", "Liangdang County", "Hui County", "Other"] },

            { "name": "Linxia Hui Autonomous Prefecture", "area": ["Linxia City", "Linxia County", "Kangle County", "Yongjing County", "Guanghe County", "Hezheng County", "Dongxiang Autonomous County", "Jishishan Baoan Dongxiang Sala Autonomous County", "Other"] },

            { "name": "Gannan Tibetan Autonomous Prefecture", "area": ["Hezuo City", "Lintan County", "Zhuoni County", "Zhouqu County", "Diebu County", "Maqu County", "Luqu County", "Xiahe County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Qinghai", "city": [

            { "name": "Xining", "area": ["Chengzhong District", "Chengdong District", "Chengxi District", "Chengbei District", "Huangyuan County", "Huangzhong County", "Datong Hui Nationality Autonomous County", "Other"] },

            { "name": "Haidong area", "area": ["Pingan County", "Ledu County", "Minhe Hui and Tu Autonomous County", "Huzhu Tu Autonomous County", "Hualong Hui Autonomous County", "Xunhua Sala Autonomous County", "Other"] },

            { "name": "Haibei Tibetan Autonomous Prefecture", "area": ["Haiyan County", "Qilian County", "Gangcha County", "Menyuan Hui Autonomous County", "Other"] },

            { "name": "Hainan Tibetan Autonomous Prefecture", "area": ["Gonghe County", "Tongde County", "Guide County", "Xinghai County", "Guinan County", "Other"] },

            { "name": "Huangnan Tibetan Autonomous Prefecture", "area": ["Tongren County", "Jianzha County", "Zeku County", "Henan Mongolian Autonomous County", "Other"] },

            { "name": "Guoluo Tibetan Autonomous Prefecture", "area": ["Maqin County", "Banma County", "Gande County", "Dari County", "Jiuzhi County", "Maduo County", "Other"] },

            { "name": "Yushu Tibetan Autonomous Prefecture", "area": ["Yushu County", "Zaduo County", "Chengduo County", "Zhiduo County", "Nangqian County", "Qumalai County", "Other"] },

            { "name": "Haixi Mongolian and Tibetan Autonomous Prefecture", "area": ["Delingha City", "Golmud City", "Wulan County", "Dulan County", "Tianjun County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Ningxia", "city": [

            { "name": "Yinchuan", "area": ["Xingqing District", "Xixia District", "Jinfeng District", "Lingwu City", "Yongning County", "Helan County", "Other"] },

            { "name": "Shizuishan", "area": ["Dawukou District", "Huinong District", "Pingluo County", "Other"] },

            { "name": "Wuzhong", "area": ["Litong District", "Qingtongxia City", "Yanchi County", "Tongxin County", "Other"] },

            { "name": "Guyuan", "area": ["Yuanzhou District", "Xiji County", "Longde County", "Jingyuan County", "Pengyang County", "Other"] },

            { "name": "Zhongwei", "area": ["Shapotou District", "Zhongning County", "Haiyuan County", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Xinjiang", "city": [

            { "name": "Urumqi", "area": ["Tianshan District", "Shaybak District", "New Urban Area", "Shuimogou District", "Toutunhe District", "Dabancheng District", "Dongshan District", "Urumqi County", "Other"] },

            { "name": "Karamay", "area": ["Karamay District", "Dushanzi District", "Baijitan area", "Urho District", "Other"] },

            { "name": "Turpan Area", "area": ["Turpan City", "Toksun County", "Shanshan County", "Other"] },

            { "name": "Hami area", "area": ["Hami City", "Yiwu County", "Balikun Kazakh Autonomous County", "Other"] },

            { "name": "Hotan area", "area": ["Hotan City", "Hotan County", "Luopu County", "Minfeng County", "Pishan County", "Celle County", "Yutian County", "Moyu County", "Other"] },

            { "name": "Aksu Area", "area": ["Aksu City", "Wensu County", "Shaya County", "Baicheng County", "Awati County", "Kuche County", "Keping County", "Xinhe County", "Wushi County", "Other"] },

            { "name": "Kashgar Area", "area": ["Kashgar City", "Bachu County", "Zepu County", "Jiashi County", "Yecheng County", "Yuepuhu County", "Shule County", "Makati County", "Yingjisha County", "Shache County", "Shufu County", "Tashkurgan Tajik Autonomous County", "Other"] },

            { "name": "Kizilsu Kirghiz Autonomous Prefecture", "area": ["Atushi City", "Aheqi County", "Wuqia County", "Akto County", "Other"] },

            { "name": "Bayin Guoyu Mongolian Autonomous Prefecture", "area": ["Korla City", "Hejing County", "Yuli County", "Heshuo County", "Qiemo County", "Bohu County", "Luntai County", "Ruoqiang County", "Yanqi Hui Autonomous County", "Other"] },

            { "name": "Changji Hui Autonomous Prefecture", "area": ["Changji City", "Fukang City", "Qitai County", "Manas County", "Jimsar County", "Hutubi County", "Mulei Kazakh Autonomous County", "Miquan City", "Other"] },

            { "name": "Bortala Mongolian Autonomous Prefecture", "area": ["Bole City", "Jinghe County", "Wenquan County", "Other"] },

            { "name": "Shihezi", "area": ["Shihezi"] },

            { "name": "Alar", "area": ["Alar"] },

            { "name": "Tumushuk", "area": ["Tumushuk"] },

            { "name": "Wujiaqu", "area": ["Wujiaqu"] },

            { "name": "Ili Kazakh Autonomous Prefecture", "area": ["Yining City", "Kuitun City", "Yining County", "Turks County", "Nilek County", "Zhaosu County", "Xinyuan County", "Huocheng County", "Gongliu County", "Chabuchar Xibe Autonomous County", "Tacheng Area", "Altay Area", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Taiwan", "city": [

            { "name": "Taiwan", "area": ["Taipei City", "Kaohsiung City", "Taipei County", "Taoyuan County", "Hsinchu County", "Miaoli County", "Taichung County", "Changhua County", "Nantou County", "Yunlin County", "Chiayi County", "Tainan County", "Kaohsiung County", "Pingtung County", "Yilan County", "Hualien County", "Taitung County", "Wuhu County", "Keelung City", "Hsinchu City", "Taichung City", "Chiayi City", "Tainan City", "Other"] },

            { "name": "Other", "area": ["Other"] }

        ]
    },

    {
        "name": "Macao", "city": [

            { "name": "Macao", "area": ["Huadi Matang District", "Freguesia De Santo António ", "Sé Freguesias", "Wangdetang District", "Fengshuntang District", "Jiamotang District", "San Francesco Di Assisi District", "Ludang", "Other"] }

        ]
    },

    {
        "name": "Hong Kong", "city": [

            { "name": "Hong Kong", "area": ["Central and Western District", "Wanchai District", "Eastern District", "Southern District", "Sham Shui Po District", "Yau Tsim Mong District", "Kowloon City District", "Wong Tai Sin District", "Kwun Tong District", "Northern District", "Tai Po District", "Sha Tin District", "Sai Kung District", "Yuen Long District", "Tuen Mun District", "Quanwan District", "Kwai Tsing District", "Lidao District", "Other"] }

        ]
    }

];
export default provinceData;
