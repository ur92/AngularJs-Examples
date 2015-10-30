/**
 * Created by UR92 on 21/10/2015.
 */
var mongoose = require('mongoose');


exports.array=[
    mongoose.model('Book', new mongoose.Schema({
        title: String,
        rank: {type: Number, min: 1, max: 5},
        published_at: Date,
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
    })),

    mongoose.model('Author', new mongoose.Schema({
        name: String,
        email: String
    }))
];


