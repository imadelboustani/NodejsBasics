var fs = require('fs');

// create file
fs.appendFileSync('nodefile.txt', 'just a test');
fs.appendFileSync('nodefile.txt', 'another test added with appendFile');
// ecraser le contenu
//fs.writeFile('nodefile.txt', ' contenu ecrase ');
fs.writeFileSync('nodeFile.txt', "contenu ecrase");




