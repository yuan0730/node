var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FangYuan111111111111ddddddxxd'});
});

module.exports = router;
