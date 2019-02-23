const mongoose = require('mongoose');

const users = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    registered: String,
    role: String,
    status: String,
});

let userModel = mongoose.model('Users', users);

module.exports = userModel;

