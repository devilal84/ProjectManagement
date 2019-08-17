const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    project: {type: String, required: true},
    startdate: {type: Date, required: true, default: Date.now()},
    enddate: {type: Date, required: true},
    priority: {type: Number, required: true}
});

module.exports = mongoose.model('project', ProjectSchema);