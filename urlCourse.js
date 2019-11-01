var fs = require('fs');
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var  query =  url.parse(adr, true);
fs.appendFileSync('nodefile.txt', query.hostname);
fs.appendFileSync('nodefile.txt', query.pathname);
fs.appendFileSync('nodefile.txt', query.href);
fs.appendFileSync('nodefile.txt', query.port);


