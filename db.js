const mongoose = require('mongoose');

// mongoose.connect('mongodb://'+process.env.dbuser+':'+process.env.dbpass+'@ds161225.mlab.com:61225/faiztestdb123');
mongoose.connect('mongodb://localhost/faiztestdb');
mongoose.connection.once('open', function () {
    console.log('Connected to db');
    console.log('http://localhost:3000');
}).on('error', function () {
    console.log('Error connecting to db');
});
