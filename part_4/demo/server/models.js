/**
 * Created by UR92 on 21/10/2015.
 */
var mongoose = require('mongoose');

var addressScm= new mongoose.Schema({
    building: String,
    coord: [Number],
    street: String,
    zipcode: String
});

var gradeScm= new mongoose.Schema({
    date: { type: Date, default: Date.now },
    grade: String,
    score: Number
});

exports.array = [
    mongoose.model('Restaurant', new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        address: [addressScm],
        borough: String,
        cuisine: String,
        grades: [gradeScm],
        name: String,
        restaurant_id: String
    }))


];




