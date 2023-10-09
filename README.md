# 一、背景介绍

本Node服务是集成了QuickType，对其二次开发的一个Node服务。主要为[YApiQuickType插件](https://plugins.jetbrains.com/plugin/18847-yapi-quicktype/documentation)
提供解析服务

本Fork魔改了Kotlin部分，只支持Moshi，通过词典最大匹配算法，对全大写的Json数据转换为驼峰命名，因此建议使用插件[JsonToKotlin](https://plugins.jetbrains.com/plugin/21598-jsontokotlin)

具体Kotlin逻辑位于```src/quicktype-core/language/Kotlin.ts```

由于词典局限性不能保证全部正确\
可以在 ```words_alpha.txt```中修改词典，在```src/utils/words.ts```修改优先匹配词

# 二、本地搭建

执行以下2条命令即可，启动成功后控制台会打印服务访问链接

将访问连接填入插件设置中的```QuickTypeNode service address```

```
npm install 
npm start
```
