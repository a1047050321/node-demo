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
            //返回一个数组 表示fs.readdir(url)  url下的所有东西 包括文件夹和文件
            console.log(files); //[aaa,bbb] 纯文件名的数组
            //获取files 下的所有文件夹
            var length = files.length;
            for(let i = 0 ; i < length ;i++){
                var thefile = files[i];
                console.log(thefile);
                //检测所有返回的文件名 是不是文件夹
                fs.stat("./album/"+thefile,function(err,stat){
                    let isDirectory = stat.isDirectory();
                    console.log(isDirectory); //文件夹 返回true
                    if(!!isDirectory){
                        console.log(thefile);
                        //但是异步问题 thefile全局变量被重置了 所以读不出aaa
                        //异步变同步的问题 强行把一部异步变成同步语句
                        wjj.push(thefile);
                    }
                })
            }
            console.log(wjj);
            res.end();
        }
    })
});
server.listen(3000,'localhost');