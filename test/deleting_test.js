const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Deleting records', function(){
var char;


    //Create a new record before the test bcz we clean the database before every test so there
    //must be a record to find.
    beforeEach(function(done){
        
            char = new MarioChar({
            name: 'Mario'
        });
        
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
        
    });
    
// Create tests
it('Deletes a record', function(done){

        MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(result){

                assert(result === null);
                done();
            });
        });
        });

    });

    


