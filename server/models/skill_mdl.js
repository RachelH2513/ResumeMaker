const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    skill_name: String
});

module.exports = mongoose.model('skill', SkillSchema);