var http = require("http");
var fs = require("fs");

var server  =  http.createServer(function(req,res){
    if(req.url == '/fang'){
        res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
        fs.readFile('./test/xixi.html',function(err,data){
            console.log(data);
            res.end(data);
        });
    }else if(req.url == '/yuan' ){
        res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
        fs.readFile('./test/haha.html',function(err,data){
            console.log(data);
            res.end(data);
        });
    }else if(req.url == '/4.1.1.jpg'){
        res.writeHead(200,{'Content-type':'text/css;'});
        fs.readFile('./test/4.1.1.jpg',function(err,data){
            console.log(data);
            res.end(data);
        });
    }else if(req.url == '/index.css'){
        res.writeHead(200,{'Content-type':';charset=UTF-8'});
        fs.readFile('./test/index.css',function(err,data){
            console.log(data);
            res.end(data);
        });
    }else{
        res.writeHead(404,{'Content-type':'text/html;charset=UTF-8'});
        res.end('没有这个页面哦');
    }
});

server.listen(3000,"127.0.0.1");