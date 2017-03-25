var express= require("express")
var app= express()
var path= require("path"), parse= require("url-parse"), unix, standard;
var dateFormat= require('dateformat')


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
});

//input examples: December%1%2015,%202015     1450137600

app.get('/api', function(req,res){
    
    var timeF=url2Time(parse(req.url))
    if(timeF===null) res.send("invalid date string")
    unix= timeF.getTime()/1000;
    standard= dateFormat(timeF, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    
    
    res.json({'unix': unix, 'natural': standard})
});

app.get('*', function(req,res){
    res.end("404! sorry");
})

app.listen(process.env.PORT, function(){
    console.log("app running on port 8080")
})

function url2Time(url){
    var timeStr= url.query
    var timeForm= timeStr.replace(/[^A-Za-z0-9/-:]+/g, " ");
    var numOnly= /^\d+$/.test(timeForm);
    if(numOnly) return new Date(Number(timeForm))
    
    if(isNaN(Date.parse(timeForm))){
        return null
    }
    return new Date(timeForm)
}