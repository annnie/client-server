var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('carousel', { title: 'Multi User Chat', name: 'ann' });
});

module.exports = router;
