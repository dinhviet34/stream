var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
app.get('/',function(req,res){
    res.render('home')
});
https.createServer({
    key:fs.readFileSync('./server.key'),
    cert:fs.readFileSync('./server.cert'),
},app).listen(3000,function(){
    console.log("Start server 3000")
});