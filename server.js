/*var http = require("http");
http.createServer(function(req, res){
    res.end("Hello! Welcome to my app.")
}).listen("8081");
console.log("O pai ta ON");*/

const express = require("express");
const app = express();

app.get("/",function(req, res){
    res.send("Welcome to my page!");
});

app.get("/service",function(req, res){
    res.send("You are in page service");
});

app.get("/gallery", function(req, res){
    res.send("You are in page gallery")
})
//teste
app.get("/about",function(req, res){
    res.send("You are in page about");
});

app.listen(8081,function(req, res){
    console.log("Server running on url http://localhost:8081");
});