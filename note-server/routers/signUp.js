var router=require('koa-router')();
var userModel=require('../lib/mysql.js');
var md5=require('md5')  // 加密

// POST 注册页
router.post('/signUp/',async (ctx,next)=>{
})

module.exports=router