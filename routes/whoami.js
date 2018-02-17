var express = require('express');
var router = express.Router();
var uaParser = require('../functions/ua-parser');

router.get('/',function(req,res){
    var ua = uaParser(req);
    res.send(ua);
});

module.exports = router;