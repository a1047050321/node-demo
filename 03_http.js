var http = require("http");
//创建一个服务器，回调函数标识接受欧到请求之后做的事情
var server = http.createServer(function(req,res){
    //req 参数标识请求，res标识响应
    //这个语句是一个信号，告诉你服务器所有的返回头以及内容都已经被发送成功了。这一次的请求车技王城了，
    //每一次的回调必须使用end方法。
    console.log('aaa');
    res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
    res.write("<h1>我是主标题</h1>");
    res.write("<h2>我是副标题</h2>"); //write直接渲染到页面上
    res.end("服务器接收到了请求"+req.url); //end之后不可以write了
});
//监听端口
server.listen(3000,'localhost');
