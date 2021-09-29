const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    key_words: String,
    from: String,
    to: String,
    location: String,
    desc: String
});

module.exports = mongoose.model('project', ProjectSchema);