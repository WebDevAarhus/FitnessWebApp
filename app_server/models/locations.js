var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: Number,
    comment: String,
    createdOn: {type: Date, "default":Date.now}
});

var locationSchema = new mongoose.Schema({
    name: {type:String, required:true},
    address: String,
    rating: {type:Number, "default":0},
    facilities: [String],
    reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);