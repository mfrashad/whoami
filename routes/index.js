var express = require('express');
var router = express.Router();
var uaparser = require('../functions/ua-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  var ua = uaparser(req);
  var jsonUrl = req.protocol+'://'+req.hostname+'/whoami';
  res.render('index', { title: 'WhoAmI', userAgent: ua,url:jsonUrl});
  
});

module.exports = router;
