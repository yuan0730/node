var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('1');
  next('router');
},function(req,res,next){
console.log('22222');
next();
});
router.get('/sss',function(req,res,next){
        console.log('333333333');
        });

module.exports = router;
