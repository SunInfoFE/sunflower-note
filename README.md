# sunflower-note 周报管理平台

## 目录

* [结构树](#结构树)
* [功能模块](#功能模块)

## 结构树
```
.
├── demo                                // 一些demo
│   ├── other                           // 作者 - other
│   └── zx                              // 作者 - zx
│       ├── koa-bodyparser              //      koa-bodyparser 中间件
│       ├── koa-cookie                  //      koa 使用 cookie
│       ├── koa-ejs                     //      koa-ejs
│       ├── koa-get                     //      get请求处理
│       ├── koa-post                    //      post请求处理
│       ├── koa-router                  //      koa-router示例
│       ├── koa-router-simple           //      koa原生路由实现
│       ├── koa-session-minimal         //      koa-session-minimal
│       ├── koa-static-server           //      koa-static 中间件
│       ├── koa-static-server-simple    //      koa原生静态资源服务器
│       ├── koa-test                    //      单元测试
│       ├── koa-upload-async            //      异步上传图片
│       ├── koa-upload-simple-busboy    //      使用busboy实现简单的文件上传
│       ├── koa-views                   //      koa加载模板引擎ejs
│       ├── mysql-hello                 //      连接mysql简单demo
│       ├── mysql-init                  //      初始化mysql数据库
│       ├── mysql-pool                  //      mysql连接池
│       └── mysql-promise               //      async/await封装mysql
├── node_modules
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```


## 功能模块
- [ ] 用户登录
- [ ] 用户管理
- [ ] 权限管理
- [ ] 附件上传

## 接口文档

> 返回值格式
```
// 成功
{
    status: true,
    data: '成功数据'
}
// 失败
{
    status: false,
    data: '失败原因'
}
```

### 1. 注册
**请求方式：** `POST` \
**接口：** `/register` \
**查询条件：**
```
{
    name: 'user111',
    password: 'password',
    email: 'suninfo@suninfo.com',
    sex: 'male/female/nuknow',
    remark: '备注',
    group: 'groupID'
}
```
**成功返回值：**
```
{
    status: true,
    data: '注册成功'
}
```
### 2. 登录
**请求方式：** `POST` \
**接口：** `/login` \
**查询条件：**
```
{
    name: 'user111',
    password: 'password'
}
```
**成功返回值：**
```
{
    status: true,
    data: '登录成功'
}
```
### 3. 本周周报（获取所有本周周报/新增/修改/删除）
#### 3.1 获取所有本周周报
**请求方式：** `GET` \
**接口：** `/currentWeekReport/get` \
**查询条件：**
```
 无
```
**成功返回值：**
```
{
    status: true,
    data: [
        {
            title: '',
            ...
        }
        ...
    ]
}
```
#### 3.2 新增
**请求方式：** `POST` \
**接口：** `/currentWeekReport/add` \
**查询条件：**
```
 {
    title: '标题',
    summary: '内容',
    plan: '内容'
 }
```
**成功返回值：**
```
{
    status: true,
    data: '新增成功'
}
```
#### 3.3 修改
**请求方式：** `POST` \
**接口：** `/currentWeekReport/edit` \
**查询条件：**
```
 {
    id: '周报ID',
    title: '标题',
    summary: '内容',
    plan: '内容'
 }
```
**成功返回值：**
```
{
    status: true,
    data: '修改成功'
}
```
#### 3.4 删除
**请求方式：** `POST` \
**接口：** `/currentWeekReport/delete` \
**查询条件：**
```
 ['周报告ID',...]
```
**成功返回值：**
```
{
    status: true,
    data: '删除成功'
}
```
### 4. 我的周报（获取周报（条件获取：年、第几周、是否已提交或所有）/获取周报详情/删除）
#### 4.1 获取周报
**请求方式：** `POST` \
**接口：** `/myReport/get` \
**查询条件：**
```
 {
    ...
 }
```
**成功返回值：**
```
{
    status: true,
    data: [
        {
            title: '',
            ...
        }
        ...
    ]
}
```
### 5. 获取周报（条件：成员、年、第几周）
### 6. 小组（获取所有小组/添加小组/编辑小组/删除小组（空小组可删除）/搜索用户）
# 学习顺序

1. `koa`原生路由的实现 :file_folder: koa-router-simple
1. `koa-router`中间件 :file_folder: koa-router
1. `GET`请求处理 :file_folder: koa-get
1. `POST`请求处理 :file_folder: koa-post
1. `koa-bodyparser`中间件 :file_folder: koa-bodyparser
1. `koa`原生静态资源服务器 :file_folder: `koa-static-server-simple
1. `koa-static`中间件 :file_folder: `koa-static-server`
1. `koa`的上下文`ctx`直接操作`cookie` :file_folder: koa-cookie
1. 使用`koa-session-minimal`处理`session` :file_folder: koa-session-minimal
1. 使用`koa-ejs` :file_folder: koa-ejs
1. `koa`加载`ejs`模板引擎 :file_folder: koa-views
1. `busboy`实现简单的文件上传 :file_folder: koa-upload-simple-busboy
1. 异步上传图片 :file_folder: koa-upload-async
1. 连接`mysql` :file_folder: mysql-hello
1. 使用`mysql`连接池 :file_folder: mysql-pool
1. `async/await`封装使用mysql :file_folder: mysql-promise
1. 初始化mysql数据库 :file_folder: mysql-init