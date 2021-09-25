const mongoose = require('mongoose');

const BasicInfoSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    phone: String,
    address: String,
    email: String
});

module.exports = mongoose.model('basicinfo', BasicInfoSchema);