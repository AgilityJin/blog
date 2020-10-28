---
title: HTML
date: 2020-10-27
categories:
  - 前端
  - HTML
tags:
  - html
  - html5
  - 前端基础
sidebar: true
sidebarDepth: 3
---

[[TOC]]

## HTML

::: tip
HTML全称**Hyper Text Markup Language**超文本标记语言
:::

### HTML5

#### 视频 video

说明示例:

<<< @/examples/html/video-audio.html#video

[video文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)

标签属性:

|属性名|值|作用|
|:--:| -- | -- |
autoplay | autoplay | 视频在就绪后马上播放
controls | controls | 向用户展示播放控件
loop | loop | 循环播放
preload | preload | 预加载当页面加载时开始加载,并预备播放, 'autoplay' 则忽略该属性
src | url | 资源地址

#### 音频 audio

说明示例:

<<< @/examples/html/video-audio.html#audio

[audio文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)

标签属性:

|属性名|值|作用|
|:--:| -- | -- |
autoplay | autoplay | 视频在就绪后马上播放
controls | controls | 向用户展示播放控件
loop | loop | 循环播放
preload | preload | 预加载当页面加载时开始加载,并预备播放, 'autoplay' 则忽略该属性
src | url | 资源地址

#### 拖放 Drag & Drop

说明示例:

<<< @/examples/html/drag-drop.html#dragDrop

[drag文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/drag_event)

[drop文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/drop_event)

#### 画布 canvas

#### SVG

#### 地理定位 Geolocation

说明示例:

<<< @/examples/html/geolocation.html#geolocation

[Geolocation Api 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/Using_geolocation)

#### Storage存储

说明示例:

<<< @/examples/html/storage.html#storage

::: warning
Storage存在可被他人恶意修改的可能,敏感数据需要加密或选择其他方案处理
:::

[Storage 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage)

#### web worker

> 创造多线程运行环境,无实例引用需主动关闭worker

使用限制

* 受同源策略限制
* 文件安全限制 无法读取本地文件，它所加载的脚本必须来自网络，且需要与主线程的脚本同源
* DOM限制, 无法获取主线程DOM, 即document,window均不能获取
* 通信限制, 需要通过 postMessage 与主进程通信
* 脚本行为限制, 不能使用alert,confirm等api,但是可以通过XMLHttpRequest发起异步请求

说明示例:

<<< @/examples/html/web-worker.html#worker

[Worker 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker)

#### 服务器发送事件 server-sent events

:::tip
单向通信流,由服务端发起,抵达客户端.

websocket适用于全双工通信,而SSE则适用于单向通信.
:::

前端说明示例:

<<< @/examples/html/server-sent-events.html#sse

#### WebSocket

#### Web SQL

#### 应用离线缓存 minifest (已从标准移除)
