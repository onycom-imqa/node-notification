
'use strict';
var gl             = require('../global');
//var gk = require('../gk');

var config = gl.config.redis;
var host = config.public.host;
var port = config.public.port;
var pass = config.public.pass;
var channel = config.public.pub_channel;
var redis_publisher = require('redis').createClient(port, host, {'auth_pass':pass});

function bail(err, conn) {
    log.error('[%s] Process bail : %s', process.pid, err.stack);
    if (conn) conn.close(function() { process.exit(1); } );

}

function redisPubdata(msg) {
    redis_publisher.on("error", function (err) {
        console.log("Redis Error " + err);
        process.exit(1);
    });
    redis_publisher.publish(channel, msg);
 }

exports.redisPubdata = gl.safe(redisPubdata);