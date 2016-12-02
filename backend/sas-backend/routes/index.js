var express = require('express');
var router = express.Router();

var test = require('../headergenerator');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lulu and Patoche' });
});

router.get('/yo', test.test);
router.get('/headers', test.getHeaders);

module.exports = router;