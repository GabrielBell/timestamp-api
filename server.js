var express= require("express")
var app= express()
var path= require("path")

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
});

//input examples:
// December%1%2015,%202015
//1450137600

app.get('/app/:timestamp', function(req,res){
    //access req.params.timestamp
    console.log(req.params.timestamp)
    res.send("Finished")
    
})

app.listen(process.env.PORT || 8080, function(){
    console.log("app running on port 8080")
})