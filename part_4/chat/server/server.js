var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    restify = require('express-restify-mongoose'),
    router = express.Router();

app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://localhost/database');

restify.serve(router, mongoose.model('Message', new mongoose.Schema({
    content: String,
    date: Date,
    author: {user: mongoose.Schema.Types.ObjectId}
})));

restify.serve(router, mongoose.model('User', new mongoose.Schema({
    username: String
})));

app.use(router);

app.use(express.static('../client'));
app.use(morgan('dev'));

io.on('connection', function (socket) {
    console.log('a user connected');
});

app.listen(3000, function () {
    console.log('Express server listening on port 3000')
});
