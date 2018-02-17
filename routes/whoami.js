var express = require('express');
var router = express.Router();
var uaparser = require('ua-parser-js');

router.get('/',function(req,res){
    var ua = uaparser(req.headers['user-agent']);
    ua.ip = req.ip;
    res.send(ua);
});

module.exports = router;