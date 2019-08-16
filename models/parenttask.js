const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParentTaskSchema = new Schema({
    parenttask: {type: String, required: true}
});

module.exports = mongoose.model('parenttask', ParentTaskSchema);