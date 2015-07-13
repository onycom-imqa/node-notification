'use strict';
var gl = require('./global.js');
process.env.TZ = 'Asia/Seoul';

var express = require('express');
var app = express();

app.configure(function() {
    //app.use(express.bodyParser()); -> connect.limit() will be removed in connect 3.0 경고
    // connect.limit()을 대체 하기 위해 connect-multiparty 를 사용!!
    app.use(require('connect-multiparty')());
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(express.compress());
});

var router = require('./routes');
router.route(app);

app.listen(gl.config.port);
console.log("Server started at port " + gl.config.port);


