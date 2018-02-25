var express = require('express');
var serveStatic = require('serve-static');
var particleInfo = require('./particleInfo');

var app = express();

app.use(serveStatic('public', {'index': ['index.html', 'index.htm']}));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('GDI Demo Server at http://%s:%s', host, port);
});