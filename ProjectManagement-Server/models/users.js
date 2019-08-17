const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    //userid:{type: Number, },
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    empid: {type: Number, required: true},
    projectid: {type: Schema.Types.ObjectId, ref: 'Project', required: true},
    taskid: {type: Schema.Types.ObjectId, ref: 'Task', required: true}
});

module.exports = mongoose.model('users', UsersSchema);