---
title: NestJS工程搭建
date: 2020-12-12
categories:
  - 后端
  - schemes
  - Nest
tags:
  - nest
---

[[TOC]]

## cli 安装

```shell
yarn global add @nestjs/cli @nestjs/schematics

# 创建项目
nest new ${project_name}
cd ${project_name}
nest generate app ${child_project_name}
```

## 使用 OpenAPI (Swagger)

```shell
yarn add @nestjs/swagger swagger-ui-express
```

```JavaScript
// src/plugins/swagger.plugin.ts
export const injectorSwaggerPlugin = (app: INestApplication) => {
  const apiDocOptions = new DocumentBuilder()
    .setTitle('标题')
    .setDescription('描述')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, apiDocOptions)
  SwaggerModule.setup('docs/v1', app, document)
}
```

## 使用基础的express中间件

```shell
yarn add @types/express -D
```

```JavaScript
// src/middleware/swagger.middleware.ts
export const injectorExpressMiddleware = (app: INestApplication) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
}
```

## 使用日志中间件

简单示例,具体请根据实际情况完善

```shell
yarn add date-fns
```

```JavaScript
// common/middleware/logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { format } from 'date-fns';
import { APP_ENV } from '@common/configure';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request & { __startTime: Date | string | number }, res: Response, next: Function) {
    if (APP_ENV.isProd && req.method === 'GET') {
      next()
    } else {
      req.__startTime = new Date()
      const params = JSON.stringify(req.params) !== '{}' ? `\tParams: ${JSON.stringify(req.params)}` : ''
      const query = JSON.stringify(req.query) !== '{}' ? `\tQuery: ${JSON.stringify(req.query)}` : ''
      const body = JSON.stringify(req.body) !== '{}' ? `\tBody: ${JSON.stringify(req.body)}` : ''
      const reqTime = Date.now()
      res.once('close', () => {
        // @ts-ignore
        const time = new Date() - req.__startTime
        delete req.__startTime
        console.info(
          `[${format(reqTime, 'yyyy-MM-dd HH:mm:ss')}]\t${req.protocol.toLocaleUpperCase()}/${req.httpVersion}\t${req.method}\t${req.path}\tfrom\t[${req.header('x-forwarded-for') || req.ip || 'unknown ip'}]${params}${query}${body}\t处理耗时: ${time}毫秒`);
      })
      next();
    }
  }
}

// main.ts
app.use(new LoggerMiddleware().use)
```

## 使用compression gzip

```shell
yarn add compression
yarn add @types/compression -D
```

```JavaScript
import * as compression from 'compression';

app.use(compression())
```

## 使用 helmet 基础安全设置

```shell
yarn add helmet
yarn add @types/helmet -D
```

```JavaScript
import * as helmet from 'helmet';

app.use(helmet())
```

## Monorepo下更新tsconfig.json path

提供对公共资源路径访问别名

```json
{
  "compilerOptions": {
    "paths": {
      "@common": [
        "common"
      ],
      "@common/*": [
        "common/*"
      ],
      "@types": [
        "types"
      ],
      "@types/*": [
        "types/*"
      ],
    }
  }
}
```
