var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var x = Math.floor(Math.random()*10);
    var y = Math.floor(Math.random()*10);
    var a = Math.fround(x,y);
    var b = Math.random(x); 
    var c = Math.round(x);
 res.render('computation', { title: 'Naga Mounika Devi Ghanta',
x:x,y:y,a:a,b:b,c:c});
    
});

module.exports = router;
