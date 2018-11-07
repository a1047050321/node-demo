var http = require("http");
var fs = require("fs");
var ejs = require("ejs");

http.createServer(function(req,res){
    var pathurl = req.url;
    if(pathurl == '/'){
        pathurl = '/album/index.ejs';
    }
    if(pathurl == '/favicon.ico'){
        return ;
    }
    fs.readFile('.'+pathurl,function(err,data){
        //错误显示404
        if(err){
            // console.log(err);
            //
            fs.readdir("./album"+pathurl,function(err,files){
                if(err){
                    console.log(err);
                    fs.readFile('./static/a/404.html',function(err,data){
                        res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
                        res.end(data);
                    });
                }else{
                    console.log(files);
                    var arr = [];
                    (function itemArr(i){
                        if(i == files.length){
                            fs.readFile('./album/bbb1/list.ejs',function(err,data){
                                var template = data.toString();
                                console.log(template);
                                var alldata = {
                                    title:'图片展示',
                                    lists:arr
                                };
                                var html = ejs.render(template,alldata);
                                res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
                                res.end(html);
                            });
                            return ;
                        }else{
                            let url = "./album"+pathurl+'/'+files[i];
                            fs.stat(url,function(err,stats){
                                if(err){
                                }else{
                                    if(!stats.isDirectory()){
                                        arr.push(files[i]);
                                    }
    
                                }
                                itemArr(i+1);
                            });
                        }
                    })(0);                    
                }
            });
            
        }else{
                if(pathurl == '/album/index.ejs'){
                    //查看album下面的文件夹里的东西
                    fs.readdir("./album",function(err,files){
                        var arr = [];
                        if(err){
                            console.log(err);
                            res.data(err+'');
                        }else{
                            (function item(i){
                                if(i == files.length ){
                                    console.log(arr);
                                    var template = data.toString();
                                    var alldata = {
                                        title:'文件夹展示',
                                        dictionarys:arr
                                    };
                                    var html = ejs.render(template,alldata);
                                    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
            
                                    res.end(html);
                                    return ;
                                }
                                fs.stat("./album/"+files[i],function(err,stat){
                                    //是文件夹的话
                                    if(stat.isDirectory()){
                                        arr.push({
                                            name:files[i]
                                        });
                                    }
                                    item(i+1);
                                })
                            })(0);
                           
                        }
                        
                    });
                    
                }else{
                    res.end(data);
                }
        }
    });

}).listen(3000,'localhost');