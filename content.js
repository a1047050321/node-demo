var express = require("express");
var app  = new express();

let sjk = [{
    "biaoti":"哈哈哈",
    "shijian":"2018.11.08"
},{
    "biaoti":"嘿嘿嘿",
    "shijian":"2018.11.08"
}]
app.use(express.static("./public"));
app.get("/news",function(req,res){
    //send 一个json
    res.json(sjk);
});

app.listen(3000);