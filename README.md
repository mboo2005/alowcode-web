# alowcode-web 
> 基于amis的低代码平台实现-web端

账号 admin 密码 123456

此项目需要服务端支持 > [https://github.com/mboo2005/alowcode-server](https://github.com/mboo2005/alowcode-server)

## 项目简介

这个前端是基于2个开源库搭建的
1. https://github.com/YalongYan/amis-react-node/tree/master/src  实现了amis的前端功能，但是基于umi开发的
1. https://github.com/undeadfrost/koa2-manager-web 实现了用户管理、权限管理


所以我们这个项目的设计目标是整合了这2个功能：用户、权限管理+amis页面管理


## 项目运行
#### 建议使用NodeJs v8.13.0(LTS)，项目需要配合后端进行运行，可通过修改项目src/config/dev.js中baseUrl更改服务端地址。线上测试地址 
```
git clone https://github.com/mboo2005/alowcode-web.git

cd alowcode-web

npm install OR yarn install

访问 http://loaclhost:3000/admin/login
```

### 启动开发服务器
```
cd ../alowcode-server
npm run dev
```

### 编译打包
```
npm run build OR yarn build
生成文件在根目录下build文件夹
```

#### 注意：默认使用react-router history路由，线上需要配置Nginx，参考[history路由Nginx配置](https://undeadfrost.github.io/2018/12/04/history%E8%B7%AF%E7%94%B1Nginx%E9%85%8D%E7%BD%AE/)，或更改为hash路由，修改src/index.js
```
import {BrowserRouter} from 'react-router-dom' 改为 import {HashRouter} from 'react-router-dom'

<BrowserRouter><App/></BrowserRouter> 改为 <HashRouter><App/></HashRouter>
```
