# CID Indexing & Content Routing

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## 项目配置
图片路径说明：
* 路径以`/src/`为起使路径，如 /src/assets/logo.png 配置为: `/assets/logo.png`
* 支持网络图片url

配置文件路径：/public/config.js

* logo: 顶部菜单栏及主页底部的logo路径
* bar：顶部菜单栏Home右侧的
* header：主标题
* subheader：副标题
* indexer: 配置请求服务器列表
* placeholder: 输入框提示信息
* defaultCid：默认查询的CID
* bar：顶部菜单栏的菜单列表
  * `type:list`: 普通的列表形式
  * `type:card`: 带封面的卡片形式
* metrics：指标
* sections：指标下方的介绍信息
* news：主页底部latest news
* briefIntro：页脚logo下方简述信息
* contactInfo：页脚相关链接
* footerLinks：页脚列表

配置文件路径：/vue.config.js
* title：浏览器标签页标题

替换文件：
* /public/favicon.ico：标签页logo
* /public/favicon.ico：标签页logo