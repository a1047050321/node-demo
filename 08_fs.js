

var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    //不处理小图标
    if(req.url == '/favicon.ico'){
        return ;
    }; 
    //随机数  有可能多个任务同时开始 文件没执行完毕 就先执行这个 就是一个事件环机制。 用一个线程处理事情
    var userid = parseInt(Math.random()*89999)+10000;
    //参数 第一个完整路径，当前目录写./
    // 第二个 回调函数 文件读取成功之后做的事情
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    fs.readFile("./1.txt",{"charset":"UTF-8"},function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(userid+'文件执行完毕');
            res.end(data);
        }
    });
    console.log(userid+'开始执行');  //先输出 异步
});
server.listen(3000,'localhost');