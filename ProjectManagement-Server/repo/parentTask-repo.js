const express = require('express');
const parenttaskRepo = express.Router();

var ParentTask = require('../models/parenttask');

// to add new task
parenttaskRepo.route('/add').post(function (req, res) {

    let parentTask = new ParentTask(req.body);

    parentTask.save()
        .then(parentTask => {
            res.status(200).json({ 'Success': true })
        })
        .catch(err => {
            res.status(400).send({ 'Success': false, 'Message': 'Error while creating parent task' });
        });
});

// to list parent tasks with search criteria
parenttaskRepo.route('/').get(function (req, res) {

    var parentTaskQuery = ParentTask.find();

    var queryparams = req.query;

    if (queryparams.searchKey) {
        parentTaskQuery.or([
            { 'ParentTask': { $regex: queryparams.searchKey, $options: 'i' } }]);
    }

    parentTaskQuery.exec(function (err, tasks) {

        if (err) {
            res.json({ 'Success': false })
        }
        else {
            res.json({ 'Success': true, 'Data': tasks });
        }
    });
});

// to get single task
parenttaskRepo.route('/:id').get(function (req, res) {

    let parentId = req.params.id;

    ParentTask.findOne({ parentid: parentId }, function (err, task) {
        if (err) {
            res.json({ 'Success': false, 'Message': 'Parent task not found' })
        }
        else {
            res.json({ 'Success': true, 'Data': task });
        }
    });
});

module.exports = parenttaskRepo;
