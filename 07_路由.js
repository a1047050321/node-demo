//student/123456789 查询学生
//teacher/123456 查询教师

var http = require("http");

var server = http.createServer(function(req,res){
    var userUrl = req.url;
    //正则表达式 来判断此时的地址
    //用substr方法来判断此时的开头 
    res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
    var reg = /^\/student/;
    if(userUrl.substr(0,9) == '/student/'){

        var studentid = userUrl.substr(9,userUrl.length -1);
        console.log(studentid);
        console.log(userUrl+'哈哈哈');
        if(/\d{9}/.test(studentid)){
            res.end("您要查询学生信息，id为"+ studentid);
        }else{
            res.end("学生学号信息不正确");
        }
    }
    if(userUrl.substr(0,9) == '/teacher/'){
        var teacherid = userUrl.substr(9);
        if(/^\d{6}$/.test(teacherid)){
            res.end("您要查询教师信息，id为"+ teacherid);
        }else{
            res.end("教师编号信息不正确");
        }
    }
});
server.listen(3000,'localhost');