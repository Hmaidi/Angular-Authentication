const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchuma = new Schema({
    email : String ,
    password: Number

});

module.exports = mongoose.model('Users', UserSchuma,'Users')