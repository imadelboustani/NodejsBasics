var events = require('events');
var fs = require('fs');
var eventEmiiter = new events.EventEmitter();
var eventHandler = () => { console.log("hay hay ");};
eventEmiiter.on('scream', eventHandler);
eventEmiiter.emit('scream');
var rs = fs.createReadStream('fileSystem.txt');
rs.on('open', () => {console.log("open event is lunched")});
