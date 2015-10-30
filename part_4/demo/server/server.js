var express = require('express'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
mongoose = require('mongoose'),
restify = require('express-restify-mongoose'),
morgan= require('morgan'),
app = express(),
router = express.Router(),
models= require('./models.js');

app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://localhost/database');

models.array.forEach(function(model){
    restify.serve(router, model);
});

app.use(router);

app.use(express.static('../client'));
app.use(morgan('dev'));

//app.use(express.static('../node_modules'));

app.listen(3000, function () {
    console.log('Express server listening on port 3000')
});
