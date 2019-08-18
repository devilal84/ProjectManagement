const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    Project_ID: {type: Number},
    Project: {type: String, required: true},
    Start_Date: {type: Date, default: Date.now()},
    End_Date: {type: Date, default: null},
    Priority: {type: Number},
    Manager_ID: {type: Number}
});

module.exports = mongoose.model('Project', ProjectSchema);