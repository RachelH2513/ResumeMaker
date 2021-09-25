const mongoose = require('mongoose');

const BasicInfoSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    address: String,
    email: String
});

module.exports = mongoose.model('basicinfo', BasicInfoSchema);