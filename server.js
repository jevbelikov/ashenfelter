/* 
* name: server.js
* description: node app 
*/
var express = require('express');
var serveStatic = require('serve-static');

// environment var port is being set by heroku
var port = process.env.PORT || 8080;  
 
var app = express();
app.use(serveStatic(__dirname + '/public'));
app.listen(port);

