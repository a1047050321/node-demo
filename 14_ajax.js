var express = require("express");
var app = new express();

app.get("/",function(req,res){
    console.log(req,query);
    res.render("form");
    // res.send("aaaaaa");
});
app.post("/",function(req,res){
    console.log(req,query);
    res.render("form");
    // res.send("aaaaaa");
});

app.listen(3000);