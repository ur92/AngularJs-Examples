/**
 * Created by UR92 on 21/10/2015.
 */
var mongoose = require('mongoose');

var roomScm= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

var userScm= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    password: String
});

exports.array = [
    mongoose.model('User', userScm),
    mongoose.model('Chat', new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        message: String,
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        room: { type: Schema.Types.ObjectId, ref: 'Room' }
    })),
    mongoose.model('Room', roomScm)


];




