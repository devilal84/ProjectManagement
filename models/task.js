const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    projectid: {type: Schema.Types.ObjectId, ref: 'project', required: true},
    parenttaskid: {type: Schema.Types.ObjectId, ref: 'parenttask', required: true},
    task: {type: String, required: true},
    startdate: {type: Date, required: true, default: Date.now()},
    enddate: {type: Date, required: true},
    priority: {type: Number, required: true},
    status: {type: Number, required:true, default: 0}  // 0-Task Open, 1-Task Completed
});

module.exports = mongoose.model('task', TaskSchema);