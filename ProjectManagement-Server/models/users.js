const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    User_ID:{type: Number},
    First_Name: {type: String, required: true},
    Last_Name: {type: String, required: true},
    Employee_ID: {type: Number, required: true},
    Project_ID: {type: Number, default: null},
    Task_ID: {type: Number, default: null}
});

module.exports = mongoose.model('users', UsersSchema);