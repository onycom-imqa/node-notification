'use strict';
var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  

// use describe to give a title to your test suite, in this case the tile is "Account"
// and then specify a function in which we are going to declare all the tests
// we want to run. Each test starts with the function it() and as a first argument 
// we have to provide a meaningful title for it, whereas as the second argument we
// specify a function that takes a single parameter, "done", that we will use 
// to specify when our test is completed, and that's what makes easy to perform async test!


var url = 'http://127.0.0.1:55555';
describe(' push notification ', function() {
    it('should return error trying to save duplicate push notification', function(done) {

        var data = { 
            noti_type : "mqtt",
            app_id : "rf2",
            device_id : "61412605-1#4bfc-944c-491c-9ffd-703a-4452deb9e2b2",
            msg: msg
        }

        request(url).post('/game/push/notifi').send(data).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    });  


});


