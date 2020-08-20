---
title: 微前端从零到落地 -- 项目初始化
date: 2020-08-20
categories:
  - 前端架构
tags:
  - qiankun
  - single-spa
  - 架构
  - 实战
---

::: tip
鉴于项目需要横向拓展体系下多个子应用,推荐使用Monorepo的工程结构来进行管理,后续也以此为基础
:::

## 工程初始化

```shell
mkdir micro-frontend # 创建工程目录
cd micro-frontend # 进入工程路径
yarn init # 初始化package.json
```

基于 yarn 的 workspaces 来实现对包依赖的管理, package.json内添加下述内容

```JSON
"workspaces": {
  "packages": [
    "packages/*" /* 指定包所存放的路径 */
  ]
},
```

::: warning
一般采用 Monorepo 后使用 yarn workspaces 来进行依赖管理, 还需要通过引入 lerna + commitlint 来进行发布阶段的管理,此处仅做示例不做过多赘述,具体查看其它关于Monorepo的具体文章
:::

## 创建基座工程

```shell
mkdir packages # 创建包目录
cd packages # 进入目录

```
