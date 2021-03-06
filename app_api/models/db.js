var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/workout';
if(process.env.NODE_ENV === 'production'){
   dbURI = 'mongodb://masterworkouter:letsW0rkOut@ds127864.mlab.com:27864/workout';
   // dbURI = process.env.MONGOLAB_URI;
   //MONGOLAB_URI is undefined for some reason- for future it should be changed tho
    console.log('PRODUCTION CHOSEN '+ dbURI)
    
}

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
   });
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
}); 

var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

// For nodemon restarts 
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination 
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});
// For Heroku app termination 
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});

require('./locations');