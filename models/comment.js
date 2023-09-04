const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const commentSchema = new Schema({
    name:String, 
    phone:String,
    email:String,
    message:String
});

module.exports = mongoose.model('Comment', commentSchema);