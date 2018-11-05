//创建文件夹

var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    //不处理小图标
    if(req.url == '/favicon.ico'){
        return ;
    };
    //检测状态 你当前访问的这个路径是不是一个文件夹或者文件 
    fs.stat("./album/bbb",function(err,stat){
        let isDirectory = stat.isDirectory(); //判断 fs.stat 的第一个参数 是不是一个文件夹Z
        let isFile = stat.isFile(); //判断 fs.stat 的第一个参数 是不是一个文件
        console.log(isFile);
        res.end();
    });
});
server.listen(3000,'localhost');