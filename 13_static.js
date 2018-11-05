//使用静态路径去读取真正文件夹目录下的文件 实现了apache 的文件查找功能  静态服务器
var url = require("url");
var http = require("http");
var fs = require("fs");
var path = require("path");  //path.normalize(url)=》把url中不符合规范的东西转成正常 比如/a//b=>/a/b
//path.extname(url)  //返回url的扩展名
var server = http.createServer(function(req,res){
    //不处理小图标
    if(req.url == '/favicon.ico'){
        return ;
    };
    //读出路由 得到用户的路径
    var pathname = url.parse(req.url).pathname;  //  /a/b/c?id=233
    if(pathname == '/'){
        pathname='/a/index.html';
    };
    //判断当前请求的是文件夹 还是文件，用是否有.来区分
    if(pathname.indexOf(".") == -1){
        pathname = pathname+'/index.html';
    }
    var extname = path.extname(pathname) ;
    //真的读取这个文件
    // fs.readFile('./static/mime.json',function(err,docs){
    //     if(err){
    //         console.log(err)
    //     }else{
    //         let doc =JSON.parse(docs);
            fs.readFile("./static"+pathname,function(err,data){
                if(err){
                    //如果文件不存在 返回404
                    res.writeHead(200,{"Content-Type":doc[extname]+";charset=UTF-8"});
                    fs.readFile("./static/a/404.html",function(err,data){
                        res.end(data);
                    });
                    return ;
                }
                //没有办法区分 data是什么格式的文件 要设置 MIME类型  
                //检测pathname 拓展名
                getMine(extname,function(doc){
                    res.writeHead(200,{"Content-Type":doc[extname]+";charset=UTF-8"});
                    res.end(data);
                })
            });
    //     }
    // });
   
});
server.listen(3000,'localhost');

function getMine(extname,callback){
    //可以用json来代替
    fs.readFile('./static/mime.json',function(err,docs){
        if(err){
            console.log(err)
        }else{
            let doc =JSON.parse(docs);
            callback(doc);
        }
    });

    // switch(extname){
    //     case '.html':
    //     return 'text/html';
    //     break;
    //     case '.jpg':
    //     return 'image/jpg';
    //     break;
    //     case '.css':
    //     return 'text/css';
    //     break;
    //     case '.js':
    //     return 'text/javascript';
    //     break;
    // }
}