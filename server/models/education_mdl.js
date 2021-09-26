const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    school: String,
    degree: String,
    graduationYr: String,
    to: String,
    major: String,
    location: String,
    GPA: Number
});

module.exports = mongoose.model('education', EducationSchema);