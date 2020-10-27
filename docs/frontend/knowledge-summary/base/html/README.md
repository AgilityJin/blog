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

#### 应用缓存 minifest

#### web worker

#### 服务器发送事件 server-sent event
