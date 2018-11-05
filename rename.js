var http = require("http");
var fs = require("fs");
var querystring = require("querystring");
var formidable = require("formidable");
var util = require("util"); //工具类

http.createServer(function(req,res){
    console.log(111);
    if(req.url == '/dopost' && req.method.toLocaleLowerCase() == 'post'){
        var alldata = '';
        //监听数据 原生写post请求，要写两个监听，文件上传业务比较难写，用第三方模块  formidable
        req.addListener('data',function(chunk){
            alldata += chunk;
        });
        //全部完成 
        req.addListener('end',function(){
            console.log(alldata); //虽然是get请求 但是是用&拼接的字符串形式的查询字符串  如果是formdata对象 穿回来的是个formdata对象
            console.log(querystring.parse(alldata)) //生成{key:value} 对象
        })
        //等同于上面的方法 需要配合html 的form 的enctype='multipart/form-data'
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,field,files){
            //field  表单元素{key:value} 对象   files 上传的文件类型
            res.writeHead(200,{"Content-Type":'text/html;charset=UTF-8'});
            // console.log(field,files)
            //工具类 用于展开这两个对象util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换
            // 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。 
            console.log(util.inspect({field:field,files:files})); 
            //执行改名
            //__dirname  是全局表示当前的路径。
            var oldpath = files.img.path; //文件当前路径
            var newpath = __dirname+'/aaa/aaa.js'; 
            // console.log(newpath,__dirname);
            fs.rename(oldpath,newpath,function(err){
                if(err){
                    console.log('改名失败'+err);
                }else{
                    console.log("改名成功");
                }
            });
            res.end('完成');


        })
    }

}).listen(80,'localhost');