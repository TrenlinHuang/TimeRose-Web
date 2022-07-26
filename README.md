# TimeRose

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

## 项目配置文件
路径：/public/config.js

* indexer: 配置请求服务器根路径
* placeholder: 输入框提示信息
* homeDesc: 配置主页搜索框下方的信息
  * header为标题
  * paragraphs列表中每一项为一段

如果段落中有特殊的信息，这一段需要以列表的形式进行配置

### 链接
比如："For now, it looks very much like: https://cid.contact/"，需要用一个object进行说明
* text为显示的信息，url为跳转地址
```js
homeDesc: {
  header: "About",
  paragraphs: [
    "TimeRose currenlty is a ...",
    [
      "For now, it looks very much like: ",
      {text: 'https://cid.contact/', url: 'https://cid.contact/'}
    ],
    "Timerose's original idea was to ..."
  ]
}
```
### 加粗
**Phase 1:** Run the instance and sharding node of StoreTheIndex

**Phase 2:** Build subset of the index for Pando

最小化版本
地图用一张静态图片即可
能取到什么数据

则配置为：
```js
homeDesc: {
  header: "Roadmap",
  paragraphs: [
    [
      {bold: true, text: 'Phase 1: '},
      'Run the instance and sharding node of StoreTheIndex'
    ],
    [
      {bold: true, text: 'Phase 2: '},
      'Build subset of the index for Pando'
    ],
  ]
}
```

