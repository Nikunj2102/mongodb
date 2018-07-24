const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Updating records', function(){
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
it('Updates a record', function(done){

       MarioChar.findOneAndUpdate({name: 'Mario'},{name: 'Luigi'}).then(function(){
           MarioChar.findOne({_id: char._id}).then(function(result){

                assert(result.name === 'Luigi');
                done();
           });

      });
    });
  });

    


