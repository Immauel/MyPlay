


let express = require('express');

let mongoose = require('mongoose');

let bodyParser = require('body-parser');

let config= require('./app/config/config');

mongoose.connect(config.dbUrl);

let app = express();

let port = process.env.PORT || 5600;

app.use(express.static(__dirname + '/public'));      

app.use(bodyParser.urlencoded({'extended':'true'})); 

app.use(bodyParser.json());          

app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 


app.use('/api',require('./app/routes/api.js'));

app.listen(port);

console.log('My Play server application running at port '+port);