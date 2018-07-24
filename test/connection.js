const mongoose = require('mongoose');
//ES6 promise need to be alloted before using hooks
mongoose.Promise = global.Promise;

//make connection before the test runs
//called a hook function, before

before(function(done){

  //Connect to mongodb
  mongoose.connect('mongodb://localhost/test');
  mongoose.connection.once('open' , function(){
    console.log("Connection has been made....");
    done();// bcz connect is an asynchronous method
  }).on('error' , function(error){
    console.log("connection error " + error);
  });

});

//Drop the collections everytime before running a test
beforeEach(function(done){
//Drop a collections
mongoose.connection.collections.mariochars.drop(function(){
  done();
})

})
