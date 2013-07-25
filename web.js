#!/usr/bin/env node
var fs = require('fs');
var express = require('express');
var app = express();

//var helloworld = function() {
    var txt = "index.html";
    var yyy = fs.readFileSync(txt); 
//var xxx = function(txt) {
//    var yyy = new Buffer();
console.log("  yyy = " + yyy);

console.log("  yyy = 2");

//	var zzz = buf.toString();
//	return zzz;

//};
//	if (err) throw err;

//	var hellobuf = buf.toString();

//	console.log(xxx);

//   return data;
//};


//console.log("  yyy = " + yyy);
//var zzz = function() { buf.toString();};
//var but = new Buffer(yyy);
//var zzz = buf.toString();

//console.log("  zzz = " + zzz);

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(yyy);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
