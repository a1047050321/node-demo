var http = require("http");
//创建服务
var server = http.createServer(function(req,res){
    //设置http头部
    res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
    res.end("哈哈，我买了个"+(1+2+3)+'s');
});
server.listen(3000,'127.0.0.1');
