var express = require('express');
var fs = require('fs');
var rfile = "index.html";
var msg = "";
var app = express.createServer(express.logger());

function getMsg(readfile){
    var buff = fs.readFileSync(readfile);
    return buff.toString('utf8',0,buff.length);
}

app.get('/', function(request, response) {
  response.send(getMsg(rfile));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




