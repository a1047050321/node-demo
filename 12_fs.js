//创建文件夹

var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    //不处理小图标
    if(req.url == '/favicon.ico'){
        return ;
    };
    //检测状态 你当前访问的这个路径是不是一个文件夹或者文件 
    fs.readdir("./album",function(err,files){
        if(err){
            console.log(err);
        }else{
            var wjj = [];
            //自定义迭代器 从0 开始 能够把一步函数 变成同步函数 强行把异步变成同步语句
            //限制性0  检测成功之后执行1 
            (function iterator(i){
                fs.stat("./album/"+files[i],function(err,stats){
                    console.log(stats.isDirectory()); //文件夹 返回true
                    //检测陈成功之后做的事情
                    if(stats.isDirectory()){
                        //异步变同步的问题 
                        wjj.push(files[i]);
                    }
                    if(i == files.length -1){
                        console.log(wjj);
                    }else{
                        //相当于递归
                        iterator(i+1);
                    }
                })
            })(0);
            //返回一个数组 表示fs.readdir(url)  url下的所有东西 包括文件夹和文件
            res.end();
        }
    })
});
server.listen(3000,'localhost');