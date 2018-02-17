var express = require('express');
var router = express.Router();
var request = require('request');
var uaparser = require('ua-parser-js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var ua = uaparser(req.headers['user-agent']);
  ua.ip = req.ip;
  console.log(ua.browser);
  var jsonUrl = req.protocol+'://'+req.hostname+'/whoami';
  res.render('index', { title: 'WhoAmI', userAgent: ua,url:jsonUrl});
  
});

module.exports = router;
