const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    company: String,
    position: String,
    from: String,
    to: String,
    desc: String
});

module.exports = mongoose.model('experience', ExperienceSchema);