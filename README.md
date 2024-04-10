# mis系统
> 基于amis的管理系统

账号 admin 密码 123456

此项目需要服务端支持 > [https://codeup.aliyun.com/630b2cb0050e9c4a07a93a78/FE/mis-server](https://codeup.aliyun.com/630b2cb0050e9c4a07a93a78/FE/mis-server)

## 项目简介

这个前端是基于2个开源库搭建的
1. https://github.com/YalongYan/amis-react-node/tree/master/src  实现了amis的前端功能，但是基于umi开发的
1. https://github.com/undeadfrost/koa2-manager-web 实现了用户管理、权限管理


所以我们这个项目的设计目标是整合了这2个功能：用户、权限管理+amis页面管理


已经初步合并到了一起，目前卡在了import history from umi这里，还没有调通

## 项目运行
#### 建议使用NodeJs v8.13.0(LTS)，项目需要配合后端进行运行，可通过修改项目src/config/dev.js中baseUrl更改服务端地址。线上测试地址 
```
git clone https://github.com/undeadfrost/koa2-manager-web.git

cd koa2-manager-web

npm install OR yarn install

访问 http://loaclhost:3000/admin/login
```

### 启动开发服务器
```
npm run start OR yarn start

```

### 编译打包
```angular2
npm run build OR yarn build
生成文件在根目录下build文件夹
```

#### 注意：默认使用react-router history路由，线上需要配置Nginx，参考[history路由Nginx配置](https://undeadfrost.github.io/2018/12/04/history%E8%B7%AF%E7%94%B1Nginx%E9%85%8D%E7%BD%AE/)，或更改为hash路由，修改src/index.js
```angular2
import {BrowserRouter} from 'react-router-dom' 改为 import {HashRouter} from 'react-router-dom'

<BrowserRouter><App/></BrowserRouter> 改为 <HashRouter><App/></HashRouter>
```
