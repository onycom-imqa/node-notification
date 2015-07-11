
'use strict';
var gl = require('../global');
var pub = require('../handlers/redis_publisher.js');

exports.push_noti = function(req, res) {  
  var index;
  var data = { 
  	noti_type : req.body.noti_type,
  	app_id : req.body.app_id,
  	device_id : req.body.device_id,
  	msg: req.body.msg
  }
  console.log(data);
  pub.redisPubdata(JSON.stringify(data));

  var result;
  result = { 'state': 'OK'};
  res.send(result);
};


exports.push_test = function(req, res) {  

  var index;
  for(index=0; index < 50000; index++){
  	var msg = "push notification test message runing " + index + "......";
    var data = { 
    	           noti_type : "mqtt",
    	           app_id : "rf2",
                 device_id : "61412605-1#4bfc-944c-491c-9ffd-703a-4452deb9e2b2",
                 msg: msg
               }
               console.log(data);
               pub.redisPubdata(JSON.stringify(data));
    }

  var result;
  result = { 'state': 'OK'};
  res.send(result);

};

