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
    password: 'password'
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
### 3. 本周周报（获取所有本周周报/新增/修改/删除）
### 3.1 获取所有本周周报
**请求方式：** `GET` \
**接口：** `/getReport` \
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
### 4. 我的周报（获取周报（条件获取：年、第几周、是否已提交或所有）/获取周报详情/删除）
### 5. 获取周报（条件：成员、年、第几周）
### 6. 小组（获取所有小组/添加小组/编辑小组/删除小组（空小组可删除）/搜索用户）