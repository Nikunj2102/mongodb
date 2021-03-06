const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Finding records', function(){
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
it('Finds a record', function(done){

        MarioChar.findOne({name: 'Mario'}).then(function(result){

            assert(result.name === 'Mario');
            done();
        });

    });

it('Finds a record by ID', function(done){

        MarioChar.findOne({_id: char._id}).then(function(result){

            assert(result._id.toString() === char._id.toString());
            done();
        });

    });    

});
