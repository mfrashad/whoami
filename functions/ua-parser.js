var express = require('express');
var uaparser = require('ua-parser-js');

var uaFunc = function(req){
    var ua = uaparser(req.headers['user-agent']);
    ua.ip = req.ip.slice(7);
    ua.language = req.headers['accept-language'].split(',')[0];
    return ua;
};

module.exports = uaFunc;