var express = require('express');
var app = express();
var router = express.Router();
app.get('/', (req, resp) => {resp.send(' get Request');});
app.post('/', (req, resp) => resp.send('post request to the screen'));


// all sert a definir une route qui travalle dans tous les cas avec get et post et delete ....
app.all('/all', (req, resp, next) => { resp.send('just test')});
 // les types de chemin
// ? signifie que le charactere peut existe 0 ou 1 fois
app.put('/tess?t', (req, resp) => { resp.send('tess?t')});
// + signie que la charactere va se repetet 1 ou n fois
app.get('/ab+cd', (resp, req) => { resp.send('ab+cd')});
// explanation of next
// That made up code should check a database for a page with a certain id slug. If it finds one render it! if it doesn't find one then ignore this route handler and check for other ones.
app.get('/:pageslug', function(req, res, next){
    var page = db.findPage(req.params.pageslug);
    if (page) {
        res.send(page.body);
    } else {
        next();
    }
});

app.get('/other_routes', function() {

});
// on peut specifier plusieurs gestionaires pour un chemin ou une route pour eviter des redondantes par example on veut pour la mame route get et post et put
// on utulise app.Route('')
// Vous pouvez créer des gestionnaires de routage sous forme de chaîne pour un chemin de routage en utilisant app.route()
app.Route('/user').get((req, resp) => resp.send('get user')).post((req, res) => res.send('add user')).put((req, res) => res.send('update user'));

// pour creer des gestionaires moudulaires et pouvant etre surmonte on utulise  express.Router()
router.use((req, resp, next) =>
{ console.log('Date' + Date.now())
   next();
}
);
router.get('/', function(req, res) {
    res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
    res.send('About birds');
});

module.exports = router;
