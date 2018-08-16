'use strict';
var http = require('http');
var server = http.createServer(function (request,response) {
    console.log(request.method + ':' +request.url);
    response.writeHead(200,{'Content-Type':'test/html'});
    response.end('<h1>Hello World!</h1>');
    server.listen(8080);
    console.log('Serve is running at http://127.0.0.1:8080/')
})