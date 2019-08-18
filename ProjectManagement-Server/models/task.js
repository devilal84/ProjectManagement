const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    Project: {type: Schema.Types.ObjectId, ref: 'Project'},
    Parent: {type: Schema.Types.ObjectId, ref: 'ParentTask'},
    User: {type: Schema.Types.ObjectId, ref: 'User'},
    Task_ID: {type: Number},
    Task: {type: String, required: true},
    Start_Date: {type: Date, default: Date.now()},
    End_Date: {type: Date, default: null},
    Priority: {type: Number},
    Status: {type: Number, default: 0}  // 0-Task Open, 1-Task Completed
});

module.exports = mongoose.model('Task', TaskSchema);