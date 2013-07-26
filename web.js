#!/usr/bin/env node
var fs = require('fs');
var express = require('express');
var app = express();


var txt = "index.html";

var yyy = fs.readFileSync(txt); 

var zzz = yyy.toString();

//console.log("  yyy = " + yyy);

//console.log("  zzz = " + zzz);

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(zzz);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
