const mongoose = require('../utils/db');

const tagSchema = new mongoose.Schema({
    name : String,  
    color: String,
    projectId: String
});

module.exports = mongoose.model('tag',tagSchema);
