var express= require("express")
var app= express()
var path= require("path"), parse= require("url-parse")

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
});

//input examples: December%1%2015,%202015     1450137600

app.get('/api', function(req,res){
    
    var url= parse(req.url)
    console.log(url);
    res.json(url)
});

app.get('*', function(req,res){
    res.end("404! sorry");
})

app.listen(process.env.PORT, function(){
    console.log("app running on port 8080")
})