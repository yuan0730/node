var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FangYuan111111111111eeeeee'});
  res.render('index', { title: 'from master'});
});

module.exports = router;
