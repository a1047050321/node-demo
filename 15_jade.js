var express = require("express");
var app = new express();

app.engine('jade',require('jade').__express);
app.set("view engine",'jade');
app.get("/",function(req,res){
    res.render("xixi",{
        a:'哈哈哈'
    });
});
app.post("/",function(req,res){
    console.log(req,query);
    res.render("form");
    // res.send("aaaaaa");
});

app.listen(3000);