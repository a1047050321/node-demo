var http = require("http");
var url = require("url");

http.createServer(function(req,res){
    //url.parse 可以将url一个完整地址变成很多部分：
    // host 主机+端口   path ?前的/    search ?+query   query  ?后面的传参     分别获取。
    var path = url.parse(req.url).pathname;
    var query = url.parse(req.url,true).query;  //true 代表的是要生成个key value
    var hash = url.parse(req.url).hash;
    console.log(hash+'...hash');
    console.log(path+'...path');
    console.log(query);  //url.parse  第二个参数为true 会将所有的查询生成一个对象  {id：123，name:133}
    console.log(query.name); //输出 query对象的name
    res.end();
});