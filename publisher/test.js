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
var name = 'asdf1234';
var user_id = 'asdf12';
var market_id = 'AD';
var nick_name = "pegas"
var user_token = null;

describe('kakao Account', function() {
    it('should return error trying to save duplicate kakako Account', function(done) {
        var profile = {
            "token" : "6147ce17-1#9644-f3b4-479c-bedd-f350-35a6bd129294",
            "userid" : "12345",
            "marketid" : market_id
        };

        request(url).post('/v1/game/account/kakao').send(profile).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    });  


    it('should return error trying to save duplicate kakako Account', function(done) {
        var profile = {
            "token" : "61412605-1#4bfc-944c-491c-9ffd-703a-4452deb9e2b2",
            "userid" : "54321",
            "marketid" : market_id
        };

        request(url).post('/v1/game/account/kakao').send(profile).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    });  

    it('should return error ßßtrying to save duplicate kakako Account', function(done) {
        var profile = {
            "token" : "4b577506-2#bd7a-b9f4-438c-803e-156a-175f0d4fd9a9",
            "userid" : "098765",
            "marketid" : market_id
        };

        request(url).post('/v1/game/account/kakao').send(profile).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    });  
/*
    it('should return error trying to save duplicate kakako Account', function(done) {
        var profile = {
            "token" : "37c13fcd-1#46ba-da4e-44e3-bb8b-45b9-cd485f4129c3",
            "userid" : "8376523",
            "marketid" : market_id
        };

        request(url).post('/v1/game/account/kakao').send(profile).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    }); 

    it('should return error trying to save duplicate kakako Account', function(done) {
        var profile = {
            "token" : "f3177d1a-1#411a-3e57-48d9-bf00-e3f8-1b675f3ab6ff",
            "userid" : "83736",
            "marketid" : market_id
        };

        request(url).post('/v1/game/account/kakao').send(profile).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    });  

    it('should return error trying to save duplicate kakako Account', function(done) {
        var profile = {
            "token" : "43f8804c-1#9572-e06e-4e78-9044-2a92-1759390008ad",
            "userid" : "2836353",
            "marketid" : market_id
        };

        request(url).post('/v1/game/account/kakao').send(profile).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    });  

    it('should return error trying to save duplicate kakako Account', function(done) {
        var profile = {
            "token" : "209300c0-1#d826-a2b1-490f-ac66-5951-c228ac6e8fcb",
            "userid" : "02948477239",
            "marketid" : market_id
        };

        request(url).post('/v1/game/account/kakao').send(profile).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    }); 

    it('should return error trying to save duplicate kakako Account', function(done) {
        var profile = {
            "token" : "0b950cf9-1#7af9-a08a-44b1-bbde-127f-c757950e31c8",
            "userid" : "01928542",
            "marketid" : market_id
        };

        request(url).post('/v1/game/account/kakao').send(profile).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    }); 

    it('should return error trying to save duplicate kakako Account', function(done) {
        var profile = {
            "token" : "8743c4f9-1#816d-b925-420f-808f-cae1-e4eb95655093",
            "userid" : "38625243",
            "marketid" : market_id
        };

        request(url).post('/v1/game/account/kakao').send(profile).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    }); 

    it('should return error trying to save duplicate kakako Account', function(done) {
        var profile = {
            "token" : "420ebe60-1#e737-45ba-495c-a65a-62d5-d4d42406dd86",
            "userid" : "9872541329",
            "marketid" : market_id
        };

        request(url).post('/v1/game/account/kakao').send(profile).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    }); 

    it('should return error trying to save duplicate kakako Account', function(done) {
        var profile = {
            "token" : "3c631bc9-1#4cc7-838b-45c5-8218-0dd8-d9ab1d0f9e73",
            "userid" : "8635240198",
            "marketid" : market_id
        };

        request(url).post('/v1/game/account/kakao').send(profile).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    }); 

    it('should return error trying to save duplicate kakako Account', function(done) {
        var profile = {
            "token" : "ac640902-1#d793-5e3f-4537-8c85-8c7a-e862768776e5",
            "userid" : "0009282737",
            "marketid" : market_id
        };

        request(url).post('/v1/game/account/kakao').send(profile).end(function(err, res) {
            if (err) {
                throw err;
            }
            console.log('  [respones]-> ', res.body);
            done();
        });
    }); 
*/

});



/*
describe('unit, equipment', function() {
    var user_unit_id = null;
    var user_equipment_id = null;

    it('unit create', function(done){
        var data = {
            token : user_token,
            baseUnitid : 'unit_00240'
        };
        request(url).post('/unit/create').send(data).end(function(err, res) {
            if (err) {
                throw err;
            }
            user_unit_id = res.body.user_unit_list[res.body.user_unit_list.length - 1].unit_id;
            done();

        });
    });

    it('unit use unit', function(done){
        var data = {
            token : user_token,
            unit_id : user_unit_id
        };
        request(url).post('/unit/use/unit').send(data).end(function(err, res) {
            if (err) {
                throw err;
            }
            done();
        });
    });

    it('unit strengthen', function(done){
        var data = {
            token : user_token,
            unit_id : user_unit_id,
            step : 1,
            stamina : 1,
            walk : 1,
            speak : 1,
            power : 1,
            endurance : 1,
            recover : 1

        };
        request(url).post('/unit/strengthen').send(data).end(function(err, res) {
            if (err) {
                throw err;
            }
            done();
        });
    });

    it('equipment create', function(done){
        var data = {
            token : user_token,
            base_equipment_id : 'tool_00010'
        };
        request(url).post('/equipment/create').send(data).end(function(err, res) {
            if (err) {
                throw err;
            }
            user_equipment_id = res.body.equipment_info[res.body.equipment_info.length - 1].equipment_id;
            done();
        });
    });

    it('unit use equipment', function(done){
        var data = {
            token : user_token,
            use_equipment_id : user_equipment_id,
            unit_id : user_unit_id
        };
        request(url).post('/unit/use/equipment').send(data).end(function(err, res) {
            if (err) {
                throw err;
            }
            done();
        });
    });

    it('equipment strengthen', function(done){
        var data = {
            token : user_token,
            use_equipment_id : user_equipment_id
        };
        request(url).post('/equipment/strengthen').send(data).end(function(err, res) {
            if (err) {
                throw err;
            }
            done();
        });
    });

    it('equipmentUseless', function(done){
        var data = {
            token : user_token,
            use_equipment_id : user_equipment_id,
            unit_Id : user_unit_id
        };
        request(url).post('/unit/use/useless').send(data).end(function(err, res) {
            if (err) {
                throw err;
            }
            done();
        });
    });

    it('unit slot extend', function(done){
        var data = {
            token : user_token,
            unit_id : user_unit_id
        };
        request(url).post('/unit/slot/extend').send(data).end(function(err, res) {
            if (err) {
                throw err;
            }
            done();
        });
    });
});
*/
