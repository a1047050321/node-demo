var http = require("http");
var url = require("url");
var querystring = require("querystring"); //url.parse 如果在第二个参数是true 等同于querystring.parse(req.url)
http.createServer(function(req,res){
    //url.parse 可以将url一个完整地址变成很多部分：
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    // host 主机+端口   path ?前的/    search ?+query   query  ?后面的传参     分别获取。
    var query = url.parse(req.url,true).query;  //true 代表的是要生成个key value
    var queryUrl = url.parse(req.url).query;  //true 代表的是要生成个key value
    var string = querystring.parse(queryUrl);
    // console.log(query);  //url.parse  第二个参数为true 会将所有的查询生成一个对象  {id：123，name:133}
    console.log(string);  //url.parse  第二个参数为true 会将所有的查询生成一个对象  {id：123，name:133}
    var name = query.name ;
    var age = query.age ;
    var sex = query.sex ;
    console.log(); //输出 query对象的name
    res.end("收到了表单请求"+name +age +sex);
}).listen(3000,'localhost');