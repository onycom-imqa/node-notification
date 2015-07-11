'use strict';

var push = require('../controllers/push');

var routes = function(app) {

    app.post('/game/push/test_noti', push.push_test); 
    app.post('/game/push/notifi', push.push_noti); 
};

exports.route = routes;

