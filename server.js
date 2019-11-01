var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
});
//server.listen(3000);
var server2 = http.createServer((req,res) => { res.writeHead(200); res.end("hi from imad")});
//server2.listen(3000);
// send html
 var server3 = http.createServer((req,resp) => {
     resp.writeHead(200, {"Content-Type": "text/html"});
     resp.write(` <!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>Homepage Headline</h1>
        <p>This is a paragraph.</p>
    </body>
</html>`);
     resp.end();

 });
// server3.listen(3000);
// read the req informations
http.createServer((req, resp) => {
    resp.writeHead(200);
    resp.write(req.url + req.httpVersion + req.statusMessage + req.method);
    resp.end();


}).listen(3000);

