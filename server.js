var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();
ig.use({
    access_token : '339348633.1677ed0.ff0fff179bd5415a8885cc48bd329bef',
});
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.get('/', function(req, res){
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit){
        res.render('pages/index', { grams: medias });
    });
});
app.listen(8080);
console.log('App has started');
