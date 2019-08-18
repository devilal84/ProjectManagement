const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParentTaskSchema = new Schema({
    Parent_ID: {type: Number},
    Parent_Task: {type: String, required: true},
    Project_ID: {type: Number, default: null}
});

module.exports = mongoose.model('ParentTask', ParentTaskSchema);